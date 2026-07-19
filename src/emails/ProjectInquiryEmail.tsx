// src/emails/ProjectInquiryEmail.tsx

import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Inquiry = {
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

type ProjectInquiryEmailProps = {
  inquiry: Inquiry;
  inquiryId: string;
  submittedAt: string;
};

type DetailRowProps = {
  label: string;
  value?: string;
};

function DetailRow({ label, value }: DetailRowProps) {
  if (!value) {
    return null;
  }

  return (
    <Section style={detailRow}>
      <Text style={detailLabel}>{label}</Text>
      <Text style={detailValue}>{value}</Text>
    </Section>
  );
}

export default function ProjectInquiryEmail({
  inquiry,
  inquiryId,
  submittedAt,
}: ProjectInquiryEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>
        New {inquiry.service} inquiry from {inquiry.name}
      </Preview>

      <Body style={body}>
        <Container style={outerContainer}>
          <Section style={card}>
            <Section style={header}>
              <Text style={logo}>
                merbi<span style={logoDot}>.</span>
              </Text>

              <Text style={eyebrow}>New project inquiry</Text>

              <Heading style={heading}>
                A new project is ready
                <br />
                <span style={headingAccent}>for review.</span>
              </Heading>

              <Text style={intro}>
                {inquiry.name} submitted an inquiry for{" "}
                <strong style={strongText}>{inquiry.service}</strong>.
              </Text>
            </Section>

            <Section style={referencePanel}>
              <Section style={referenceColumn}>
                <Text style={referenceLabel}>Inquiry reference</Text>
                <Text style={referenceValue}>{inquiryId}</Text>
              </Section>

              <Section style={referenceColumn}>
                <Text style={referenceLabel}>Submitted</Text>
                <Text style={referenceValue}>{submittedAt}</Text>
              </Section>
            </Section>

            <Section style={detailsSection}>
              <Text style={sectionNumber}>01</Text>
              <Text style={sectionLabel}>The client</Text>

              <DetailRow label="Name" value={inquiry.name} />
              <DetailRow label="Company" value={inquiry.company} />
              <DetailRow label="Email" value={inquiry.email} />
              <DetailRow label="Phone" value={inquiry.phone} />
              <DetailRow label="Website" value={inquiry.website} />
            </Section>

            <Section style={detailsSection}>
              <Text style={sectionNumber}>02</Text>
              <Text style={sectionLabel}>The work</Text>

              <DetailRow label="Service" value={inquiry.service} />
              <DetailRow label="Business stage" value={inquiry.stage} />
              <DetailRow label="Budget" value={inquiry.budget} />
              <DetailRow label="Timeline" value={inquiry.timeline} />
            </Section>

            <Section style={projectSection}>
              <Text style={sectionNumber}>03</Text>
              <Text style={sectionLabel}>Project direction</Text>

              <Heading as="h2" style={projectHeading}>
                What they want to
                <span style={headingAccent}> move forward.</span>
              </Heading>

              <Text style={projectText}>{inquiry.project}</Text>
            </Section>

            <Hr style={divider} />

            <Section style={replySection}>
              <Text style={replyEyebrow}>Next action</Text>

              <Heading as="h2" style={replyHeading}>
                Reply directly to this email to continue the conversation.
              </Heading>

              <Text style={replyText}>
                Replies will be addressed to {inquiry.name} at {inquiry.email}.
              </Text>
            </Section>

            <Section style={footer}>
              <Text style={footerLogo}>
                merbi<span style={footerDot}>.</span>
              </Text>

              <Text style={footerText}>
                Strategy, creative direction, design and technology for growing
                brands.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  margin: "0",
  padding: "0",
  backgroundColor: "#eeeae4",
  color: "#11110f",
  fontFamily: 'Arial, Helvetica, "Helvetica Neue", sans-serif',
};

const outerContainer: React.CSSProperties = {
  width: "100%",
  maxWidth: "680px",
  margin: "0 auto",
  padding: "36px 14px",
};

const card: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "0",
  overflow: "hidden",
};

const header: React.CSSProperties = {
  padding: "42px 42px 34px",
};

const logo: React.CSSProperties = {
  margin: "0 0 72px",
  color: "#11110f",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1",
  letterSpacing: "-1.8px",
};

const logoDot: React.CSSProperties = {
  color: "#a74638",
};

const eyebrow: React.CSSProperties = {
  margin: "0 0 18px",
  color: "#a74638",
  fontSize: "10px",
  fontWeight: "700",
  lineHeight: "1.4",
  letterSpacing: "2.2px",
  textTransform: "uppercase",
};

const heading: React.CSSProperties = {
  margin: "0",
  color: "#11110f",
  fontSize: "47px",
  fontWeight: "400",
  lineHeight: "0.98",
  letterSpacing: "-2.8px",
};

const headingAccent: React.CSSProperties = {
  color: "#a74638",
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontStyle: "italic",
  fontWeight: "400",
};

const intro: React.CSSProperties = {
  maxWidth: "500px",
  margin: "28px 0 0",
  color: "#66625e",
  fontSize: "16px",
  lineHeight: "1.75",
};

const strongText: React.CSSProperties = {
  color: "#11110f",
  fontWeight: "600",
};

const referencePanel: React.CSSProperties = {
  padding: "26px 42px",
  backgroundColor: "#0a382f",
};

const referenceColumn: React.CSSProperties = {
  display: "inline-block",
  width: "50%",
  verticalAlign: "top",
};

const referenceLabel: React.CSSProperties = {
  margin: "0 0 7px",
  color: "#8daf9f",
  fontSize: "9px",
  fontWeight: "700",
  letterSpacing: "1.8px",
  textTransform: "uppercase",
};

const referenceValue: React.CSSProperties = {
  margin: "0",
  paddingRight: "14px",
  color: "#ffffff",
  fontSize: "13px",
  lineHeight: "1.55",
};

const detailsSection: React.CSSProperties = {
  padding: "38px 42px 10px",
};

const sectionNumber: React.CSSProperties = {
  margin: "0 0 14px",
  color: "#9b9791",
  fontSize: "10px",
  fontWeight: "600",
  letterSpacing: "2px",
};

const sectionLabel: React.CSSProperties = {
  margin: "0 0 24px",
  color: "#a74638",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "2.1px",
  textTransform: "uppercase",
};

const detailRow: React.CSSProperties = {
  padding: "15px 0",
  borderTop: "1px solid #dedbd6",
};

const detailLabel: React.CSSProperties = {
  display: "inline-block",
  width: "36%",
  margin: "0",
  color: "#8a8680",
  fontSize: "10px",
  fontWeight: "600",
  lineHeight: "1.5",
  letterSpacing: "1.4px",
  textTransform: "uppercase",
  verticalAlign: "top",
};

const detailValue: React.CSSProperties = {
  display: "inline-block",
  width: "64%",
  margin: "0",
  color: "#171714",
  fontSize: "15px",
  lineHeight: "1.65",
  verticalAlign: "top",
  wordBreak: "break-word",
};

const projectSection: React.CSSProperties = {
  padding: "44px 42px",
};

const projectHeading: React.CSSProperties = {
  maxWidth: "500px",
  margin: "0 0 24px",
  color: "#11110f",
  fontSize: "34px",
  fontWeight: "400",
  lineHeight: "1.06",
  letterSpacing: "-1.7px",
};

const projectText: React.CSSProperties = {
  margin: "0",
  padding: "25px",
  backgroundColor: "#f2efea",
  color: "#4f4c48",
  fontSize: "16px",
  lineHeight: "1.8",
  whiteSpace: "pre-wrap",
};

const divider: React.CSSProperties = {
  margin: "0 42px",
  borderColor: "#dedbd6",
};

const replySection: React.CSSProperties = {
  padding: "42px",
};

const replyEyebrow: React.CSSProperties = {
  margin: "0 0 14px",
  color: "#a74638",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "2px",
  textTransform: "uppercase",
};

const replyHeading: React.CSSProperties = {
  margin: "0",
  color: "#11110f",
  fontSize: "28px",
  fontWeight: "400",
  lineHeight: "1.15",
  letterSpacing: "-1.2px",
};

const replyText: React.CSSProperties = {
  margin: "18px 0 0",
  color: "#77736e",
  fontSize: "13px",
  lineHeight: "1.7",
};

const footer: React.CSSProperties = {
  padding: "28px 42px",
  backgroundColor: "#171714",
};

const footerLogo: React.CSSProperties = {
  margin: "0 0 10px",
  color: "#ffffff",
  fontSize: "21px",
  fontWeight: "700",
  letterSpacing: "-1px",
};

const footerDot: React.CSSProperties = {
  color: "#bc5b49",
};

const footerText: React.CSSProperties = {
  margin: "0",
  color: "#8e8e87",
  fontSize: "11px",
  lineHeight: "1.65",
};
