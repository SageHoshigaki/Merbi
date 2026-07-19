// src/emails/InquiryConfirmationEmail.tsx

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

type InquiryConfirmationEmailProps = {
  name: string;
  service: string;
  inquiryId: string;
};

export default function InquiryConfirmationEmail({
  name,
  service,
  inquiryId,
}: InquiryConfirmationEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>We received your Merbi project inquiry.</Preview>

      <Body style={body}>
        <Container style={outerContainer}>
          <Section style={card}>
            <Section style={hero}>
              <Text style={logo}>
                merbi<span style={logoDot}>.</span>
              </Text>

              <Text style={eyebrow}>Project inquiry received</Text>

              <Heading style={heading}>
                Thank you,
                <span style={headingAccent}> {name}.</span>
              </Heading>

              <Text style={intro}>
                Your inquiry is with us. We will review the direction, needs and
                timing you shared before reaching out with the most useful next
                step.
              </Text>
            </Section>

            <Section style={referencePanel}>
              <Text style={referenceLabel}>Inquiry reference</Text>
              <Text style={referenceValue}>{inquiryId}</Text>
            </Section>

            <Section style={contentSection}>
              <Text style={sectionNumber}>01</Text>
              <Text style={sectionLabel}>What happens next</Text>

              <Heading as="h2" style={contentHeading}>
                Thoughtful work begins
                <span style={headingAccent}> with context.</span>
              </Heading>

              <Text style={contentText}>
                We received your inquiry for{" "}
                <strong style={strongText}>{service}</strong>. Our team will
                review the project information and determine the right creative
                and technical path forward.
              </Text>

              <Hr style={divider} />

              <Section style={step}>
                <Text style={stepNumber}>01</Text>

                <Section style={stepContent}>
                  <Text style={stepTitle}>We review the direction</Text>
                  <Text style={stepText}>
                    We look at the business, the project need and what the work
                    should help you accomplish.
                  </Text>
                </Section>
              </Section>

              <Section style={step}>
                <Text style={stepNumber}>02</Text>

                <Section style={stepContent}>
                  <Text style={stepTitle}>We shape the next conversation</Text>
                  <Text style={stepText}>
                    We identify the most useful questions, people and decisions
                    needed to move the project forward.
                  </Text>
                </Section>
              </Section>

              <Section style={step}>
                <Text style={stepNumber}>03</Text>

                <Section style={stepContent}>
                  <Text style={stepTitle}>We follow up directly</Text>
                  <Text style={stepText}>
                    You will receive a response from Merbi using the contact
                    information included with your inquiry.
                  </Text>
                </Section>
              </Section>
            </Section>

            <Section style={closingSection}>
              <Text style={closingEyebrow}>In the meantime</Text>

              <Heading as="h2" style={closingHeading}>
                Keep this reference for your records.
              </Heading>

              <Text style={closingReference}>{inquiryId}</Text>
            </Section>

            <Section style={footer}>
              <Text style={footerLogo}>
                merbi<span style={footerDot}>.</span>
              </Text>

              <Text style={footerText}>
                Strategy, creative direction, design and technology for growing
                brands.
              </Text>

              <Text style={footerMeta}>
                This confirmation was sent because a project inquiry was
                submitted using your email address.
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
  overflow: "hidden",
};

const hero: React.CSSProperties = {
  padding: "42px 42px 38px",
};

const logo: React.CSSProperties = {
  margin: "0 0 78px",
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
  letterSpacing: "2.1px",
  textTransform: "uppercase",
};

const heading: React.CSSProperties = {
  margin: "0",
  color: "#11110f",
  fontSize: "49px",
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
  maxWidth: "510px",
  margin: "28px 0 0",
  color: "#66625e",
  fontSize: "16px",
  lineHeight: "1.75",
};

const referencePanel: React.CSSProperties = {
  padding: "27px 42px",
  backgroundColor: "#0a382f",
};

const referenceLabel: React.CSSProperties = {
  margin: "0 0 8px",
  color: "#8daf9f",
  fontSize: "9px",
  fontWeight: "700",
  letterSpacing: "1.8px",
  textTransform: "uppercase",
};

const referenceValue: React.CSSProperties = {
  margin: "0",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600",
  letterSpacing: "0.6px",
};

const contentSection: React.CSSProperties = {
  padding: "46px 42px 30px",
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

const contentHeading: React.CSSProperties = {
  maxWidth: "500px",
  margin: "0",
  color: "#11110f",
  fontSize: "36px",
  fontWeight: "400",
  lineHeight: "1.04",
  letterSpacing: "-1.8px",
};

const contentText: React.CSSProperties = {
  margin: "24px 0 0",
  color: "#66625e",
  fontSize: "16px",
  lineHeight: "1.8",
};

const strongText: React.CSSProperties = {
  color: "#11110f",
  fontWeight: "600",
};

const divider: React.CSSProperties = {
  margin: "35px 0 12px",
  borderColor: "#dedbd6",
};

const step: React.CSSProperties = {
  padding: "21px 0",
  borderBottom: "1px solid #dedbd6",
};

const stepNumber: React.CSSProperties = {
  display: "inline-block",
  width: "12%",
  margin: "2px 0 0",
  color: "#a74638",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "1.4px",
  verticalAlign: "top",
};

const stepContent: React.CSSProperties = {
  display: "inline-block",
  width: "88%",
  verticalAlign: "top",
};

const stepTitle: React.CSSProperties = {
  margin: "0",
  color: "#171714",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "1.5",
};

const stepText: React.CSSProperties = {
  margin: "7px 0 0",
  color: "#79756f",
  fontSize: "13px",
  lineHeight: "1.7",
};

const closingSection: React.CSSProperties = {
  margin: "24px 42px 44px",
  padding: "28px",
  backgroundColor: "#f2efea",
};

const closingEyebrow: React.CSSProperties = {
  margin: "0 0 13px",
  color: "#a74638",
  fontSize: "9px",
  fontWeight: "700",
  letterSpacing: "1.8px",
  textTransform: "uppercase",
};

const closingHeading: React.CSSProperties = {
  margin: "0",
  color: "#11110f",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "1.16",
  letterSpacing: "-1px",
};

const closingReference: React.CSSProperties = {
  margin: "20px 0 0",
  color: "#0a382f",
  fontSize: "14px",
  fontWeight: "700",
  letterSpacing: "0.5px",
};

const footer: React.CSSProperties = {
  padding: "30px 42px",
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
  color: "#a3a39d",
  fontSize: "11px",
  lineHeight: "1.65",
};

const footerMeta: React.CSSProperties = {
  margin: "17px 0 0",
  color: "#686862",
  fontSize: "9px",
  lineHeight: "1.6",
};
