// api/send-inquiry.ts

import crypto from "node:crypto";
import React from "react";
import { Resend } from "resend";

import ProjectInquiryEmail from "../src/emails/ProjectInquiryEmail";
import InquiryConfirmationEmail from "../src/emails/InquiryConfirmationEmail";

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => void;
};

type InquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  stage: string;
  budget: string;
  timeline: string;
  project: string;
  website: string;
  companyWebsite: string;
};

type ResendDelivery = {
  id?: string;
};

const allowedServices = new Set([
  "Brand and creative direction",
  "Marketing strategy",
  "Competitive content",
  "Web design",
  "Packaging and merchandise",
  "Creative team access",
  "Something else",
]);

function clean(value: unknown, maxLength = 2000): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createInquiryId(): string {
  const datePart = new Date().toISOString().slice(0, 10).replaceAll("-", "");

  const randomPart = crypto.randomUUID().slice(0, 6).toUpperCase();

  return `MERBI-${datePart}-${randomPart}`;
}

function parseRequestBody(request: ApiRequest): Record<string, unknown> {
  if (!request.body) {
    return {};
  }

  if (typeof request.body === "string") {
    return JSON.parse(request.body) as Record<string, unknown>;
  }

  if (typeof request.body === "object" && request.body !== null) {
    return request.body as Record<string, unknown>;
  }

  return {};
}

function extractDeliveryIds(data: unknown): string[] {
  if (!data || typeof data !== "object") {
    return [];
  }

  const result = data as {
    data?: unknown;
  };

  // Some Resend SDK versions return:
  // { data: [{ id: "..." }] }
  if (Array.isArray(result.data)) {
    return (result.data as ResendDelivery[])
      .map((item) => item?.id)
      .filter((id): id is string => Boolean(id));
  }

  // Other versions may return:
  // { data: { data: [{ id: "..." }] } }
  if (
    result.data &&
    typeof result.data === "object" &&
    Array.isArray((result.data as { data?: unknown }).data)
  ) {
    return (result.data as { data: ResendDelivery[] }).data
      .map((item) => item?.id)
      .filter((id): id is string => Boolean(id));
  }

  return [];
}

export default async function handler(
  request: ApiRequest,
  response: ApiResponse,
) {
  response.setHeader("Content-Type", "application/json");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");

    return response.status(405).json({
      ok: false,
      message: "Method not allowed.",
    });
  }

  const {
    RESEND_API_KEY,
    RESEND_FROM_EMAIL,
    INQUIRY_TO_EMAIL,
    INQUIRY_REPLY_EMAIL,
  } = process.env;

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY.");

    return response.status(500).json({
      ok: false,
      message: "Email service is not configured.",
    });
  }

  if (!RESEND_FROM_EMAIL) {
    console.error("Missing RESEND_FROM_EMAIL.");

    return response.status(500).json({
      ok: false,
      message: "Sender email is not configured.",
    });
  }

  if (!INQUIRY_TO_EMAIL) {
    console.error("Missing INQUIRY_TO_EMAIL.");

    return response.status(500).json({
      ok: false,
      message: "Inquiry destination is not configured.",
    });
  }

  let body: Record<string, unknown>;

  try {
    body = parseRequestBody(request);
  } catch (error) {
    console.error("Invalid request body:", error);

    return response.status(400).json({
      ok: false,
      message: "Invalid request body.",
    });
  }

  const inquiry: InquiryPayload = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 80),
    service: clean(body.service, 160),
    stage: clean(body.stage, 180),
    budget: clean(body.budget, 100),
    timeline: clean(body.timeline, 100),
    project: clean(body.project, 5000),
    website: clean(body.website, 500),

    // Hidden honeypot input.
    companyWebsite: clean(body.companyWebsite, 500),
  };

  // Silently accept likely bot submissions.
  if (inquiry.companyWebsite) {
    return response.status(200).json({
      ok: true,
    });
  }

  if (!inquiry.name || !inquiry.email || !inquiry.service || !inquiry.project) {
    return response.status(400).json({
      ok: false,
      message: "Please complete all required fields.",
    });
  }

  if (!validEmail(inquiry.email)) {
    return response.status(400).json({
      ok: false,
      message: "Please enter a valid email address.",
    });
  }

  if (!allowedServices.has(inquiry.service)) {
    return response.status(400).json({
      ok: false,
      message: "Please select a valid service.",
    });
  }

  const inquiryId = createInquiryId();

  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  });

  const resend = new Resend(RESEND_API_KEY);

  try {
    const result = await resend.batch.send([
      {
        from: RESEND_FROM_EMAIL,
        to: [INQUIRY_TO_EMAIL],
        replyTo: inquiry.email,
        subject: `${inquiryId} — ${inquiry.service} inquiry from ${inquiry.name}`,
        react: React.createElement(ProjectInquiryEmail, {
          inquiry,
          inquiryId,
          submittedAt,
        }),
      },
      {
        from: RESEND_FROM_EMAIL,
        to: [inquiry.email],
        replyTo: INQUIRY_REPLY_EMAIL || INQUIRY_TO_EMAIL,
        subject: `We received your Merbi inquiry — ${inquiryId}`,
        react: React.createElement(InquiryConfirmationEmail, {
          name: inquiry.name,
          service: inquiry.service,
          inquiryId,
        }),
      },
    ]);

    if (result.error) {
      console.error("Resend returned an error:", result.error);

      return response.status(502).json({
        ok: false,
        message: "We could not deliver your inquiry. Please try again.",
      });
    }

    const deliveryIds = extractDeliveryIds(result.data);

    if (deliveryIds.length === 0) {
      console.error("Resend returned no delivery IDs:", result.data);

      return response.status(502).json({
        ok: false,
        message: "The email service did not confirm delivery.",
      });
    }

    console.log(`Inquiry ${inquiryId} sent successfully.`);

    return response.status(200).json({
      ok: true,
      inquiryId,
      deliveryIds,
    });
  } catch (error) {
    console.error("Inquiry email failed:", error);

    return response.status(500).json({
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "We could not deliver your inquiry. Please try again.",
    });
  }
}
