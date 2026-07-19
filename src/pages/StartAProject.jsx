// src/pages/StartAProject.jsx

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  LoaderCircle,
  MessageCircle,
  RotateCcw,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "15551234567";

const services = [
  "Brand and creative direction",
  "Marketing strategy",
  "Competitive content",
  "Web design",
  "Packaging and merchandise",
  "Creative team access",
  "Something else",
];

const projectStages = [
  "We are starting from an idea",
  "We have an existing brand",
  "We need to improve current work",
  "We are preparing for a launch",
  "We need ongoing creative support",
];

const budgets = [
  "Under $5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000–$50,000",
  "$50,000+",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "Within 2–3 months",
  "Within 3–6 months",
  "Still exploring",
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  stage: "",
  budget: "",
  timeline: "",
  project: "",
  website: "",
  companyWebsite: "",
};

export default function StartAProject() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryId, setInquiryId] = useState("");

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hi Merbi — I’ve submitted a project inquiry and would like to continue here.",
      "",
      inquiryId ? `Inquiry reference: ${inquiryId}` : null,
      `Name: ${form.name || "Not provided"}`,
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Website: ${form.website || "Not provided"}`,
      "",
      `Interested in: ${form.service || "Not selected"}`,
      `Current stage: ${form.stage || "Not selected"}`,
      `Budget: ${form.budget || "Not selected"}`,
      `Timeline: ${form.timeline || "Not selected"}`,
      "",
      "Project details:",
      form.project || "Not provided",
    ].filter(Boolean);

    return lines.join("\n");
  }, [form, inquiryId]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  function resetInquiry() {
    setForm(initialForm);
    setStatus("idle");
    setInquiryId("");
    setErrorMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "We could not send your inquiry. Please try again.",
        );
      }

      setInquiryId(result?.inquiryId || "");
      setStatus("success");
    } catch (error) {
      console.error("Inquiry submission failed:", error);

      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your inquiry. Please try again.",
      );
    }
  }

  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      <section className="relative border-b border-black/15">
        <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-10 sm:px-10 lg:px-16 lg:pb-24">
          <div className="flex items-center justify-between border-t border-black/20 pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
              Merbi / Project inquiry
            </p>

            <p className="hidden text-[10px] tracking-[0.14em] text-black/30 sm:block">
              New York · Working everywhere
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease }}
              className="lg:col-span-8"
            >
              <p className="max-w-[1200px] text-[52px] font-normal leading-[0.88] tracking-[-0.07em] sm:text-[74px] md:text-[92px] lg:text-[112px] xl:text-[130px]">
                Bring us the challenge.
              </p>

              <p className="font-serif text-[55px] font-normal italic leading-[0.92] tracking-[-0.045em] text-[#a3483b] sm:text-[78px] md:text-[97px] lg:text-[118px] xl:text-[136px]">
                We will find the right way in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.85, ease }}
              className="lg:col-span-4"
            >
              <p className="max-w-[520px] text-[18px] leading-[1.6] tracking-[-0.025em] text-black/62 sm:text-[20px]">
                Tell us what you are building, what feels stuck, or what needs
                to become stronger. It does not need to be perfectly figured out
                before we talk.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-4 text-[13px] font-semibold text-black"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2D24] text-white transition-transform duration-300 group-hover:scale-105">
                  <MessageCircle size={17} strokeWidth={1.5} />
                </span>
                Message Merbi directly
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1800px] lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="border-b border-black/15 px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-16">
            <div className="lg:sticky lg:top-28">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/38">
                A useful beginning
              </p>

              <p className="mt-8 max-w-[430px] text-[31px] leading-[1.15] tracking-[-0.04em] text-black/78 sm:text-[38px]">
                A few details help us arrive at the first conversation with
                better questions.
              </p>

              <div className="mt-12 border-t border-black/15">
                {[
                  "What you are trying to move forward",
                  "Where the business is right now",
                  "What kind of support would be useful",
                  "When the work needs to begin",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[34px_1fr] gap-4 border-b border-black/15 py-5"
                  >
                    <span className="text-[9px] font-semibold tracking-[0.17em] text-black/28">
                      0{index + 1}
                    </span>

                    <p className="text-[14px] leading-[1.55] text-black/52">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-[#111111] p-6 text-white sm:p-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/42">
                  Prefer WhatsApp?
                </p>

                <p className="mt-5 text-[22px] leading-[1.18] tracking-[-0.035em] text-white/82">
                  Submit the inquiry first, then continue in WhatsApp if the
                  project needs a faster conversation.
                </p>

                <p className="mt-5 text-[13px] leading-[1.65] text-white/42">
                  The form reaches Merbi whether or not you open WhatsApp.
                </p>
              </div>
            </div>
          </aside>

          <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-16">
            {status === "success" ? (
              <InquiryReceived
                form={form}
                inquiryId={inquiryId}
                whatsappUrl={whatsappUrl}
                onReset={resetInquiry}
              />
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="companyWebsite"
                  value={form.companyWebsite}
                  onChange={updateField}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-px w-px overflow-hidden opacity-0"
                />

                <FormChapter
                  number="01"
                  eyebrow="About you"
                  title="Who should we speak with?"
                >
                  <div className="grid gap-x-6 gap-y-8 md:grid-cols-2">
                    <TextField
                      label="Your name"
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Full Name"
                      required
                    />

                    <TextField
                      label="Company or organization"
                      name="company"
                      value={form.company}
                      onChange={updateField}
                      placeholder="Business name"
                    />

                    <TextField
                      label="Email address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@company.com"
                      required
                    />

                    <TextField
                      label="Phone number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="Optional"
                    />

                    <div className="md:col-span-2">
                      <TextField
                        label="Current website or social page"
                        name="website"
                        value={form.website}
                        onChange={updateField}
                        placeholder="https://"
                      />
                    </div>
                  </div>
                </FormChapter>

                <FormChapter
                  number="02"
                  eyebrow="The work"
                  title="What are we helping you move forward?"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <SelectField
                      label="Area of interest"
                      name="service"
                      value={form.service}
                      onChange={updateField}
                      options={services}
                      required
                    />

                    <SelectField
                      label="Where the project stands"
                      name="stage"
                      value={form.stage}
                      onChange={updateField}
                      options={projectStages}
                    />
                  </div>

                  <div className="mt-8">
                    <label
                      htmlFor="project"
                      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/38"
                    >
                      Tell us about the project
                      <span className="ml-1 text-[#a3483b]">*</span>
                    </label>

                    <textarea
                      id="project"
                      name="project"
                      value={form.project}
                      onChange={updateField}
                      required
                      rows={7}
                      placeholder="What are you building? What needs to change? What would a strong outcome feel like?"
                      className="mt-3 w-full resize-none border-0 border-b border-black/25 bg-transparent px-0 py-4 text-[20px] leading-[1.55] tracking-[-0.025em] text-black outline-none transition-colors placeholder:text-black/24 focus:border-[#a3483b]"
                    />
                  </div>
                </FormChapter>

                <FormChapter
                  number="03"
                  eyebrow="The shape of the engagement"
                  title="Give us a sense of scale and timing."
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <SelectField
                      label="Approximate budget"
                      name="budget"
                      value={form.budget}
                      onChange={updateField}
                      options={budgets}
                    />

                    <SelectField
                      label="Ideal timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={updateField}
                      options={timelines}
                    />
                  </div>
                </FormChapter>

                <div className="border-t border-black/20 pt-8">
                  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                      <p className="max-w-[680px] text-[18px] leading-[1.58] tracking-[-0.025em] text-black/62">
                        Submit the inquiry directly to Merbi. WhatsApp remains
                        available afterward if you want to continue the
                        conversation there.
                      </p>

                      <div className="mt-5 flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black/20">
                          <Check size={11} strokeWidth={1.7} />
                        </span>

                        <p className="max-w-[600px] text-[12px] leading-[1.65] text-black/40">
                          By continuing, you agree that Merbi may contact you
                          about this project using the information provided.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex min-h-[62px] items-center justify-center gap-5 rounded-full bg-[#0B2D24] px-8 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a3483b] disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0"
                    >
                      {status === "sending" ? (
                        <>
                          Sending inquiry
                          <LoaderCircle
                            size={17}
                            strokeWidth={1.5}
                            className="animate-spin"
                          />
                        </>
                      ) : (
                        <>
                          Send project inquiry
                          <ArrowRight size={17} strokeWidth={1.5} />
                        </>
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      className="mt-7 border-t border-[#a3483b]/30 pt-5"
                    >
                      <p className="text-[13px] text-[#a3483b]">
                        {errorMessage}
                      </p>
                    </motion.div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-[1800px] flex-col justify-between gap-10 border-t border-white/20 pt-7 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/36">
              Still finding the words?
            </p>

            <p className="mt-6 max-w-[880px] text-[31px] leading-[1.15] tracking-[-0.045em] text-white/82 sm:text-[40px] lg:text-[48px]">
              A simple “here is what I am trying to do” is enough to begin.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Merbi — I have a project I would like to discuss.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-5 text-[13px] font-semibold text-white"
          >
            Get in touch now
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

function InquiryReceived({ form, inquiryId, whatsappUrl, onReset }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease }}
      className="min-h-[760px]"
    >
      <div className="relative overflow-hidden bg-[#0B2D24] px-6 py-8 text-white sm:px-9 sm:py-10 lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

        <div className="relative flex items-center justify-between border-t border-white/20 pt-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/45">
            Merbi / Project desk
          </p>

          <p className="text-[9px] tracking-[0.18em] text-white/30">Received</p>
        </div>

        <div className="relative mt-16">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#efc4b1] text-[#0B2D24]">
            <Check size={22} strokeWidth={1.7} />
          </div>

          <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#efc4b1]">
            Inquiry received
          </p>

          <h2 className="mt-6 max-w-[850px] text-[52px] font-normal leading-[0.9] tracking-[-0.065em] sm:text-[70px] lg:text-[88px]">
            Your project is
            <span className="block font-serif font-normal italic text-[#efc4b1]">
              officially in the room.
            </span>
          </h2>

          <p className="mt-9 max-w-[680px] text-[17px] leading-[1.65] text-white/60 sm:text-[19px]">
            We received the direction, scope, and details you shared. The Merbi
            team can now review the project before the first conversation.
          </p>
        </div>

        <div className="relative mt-16 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
          <ReceiptItem label="Contact" value={form.name} />
          <ReceiptItem
            label="Project"
            value={form.service || "General inquiry"}
          />
          <ReceiptItem
            label="Reference"
            value={inquiryId || "MERBI / RECEIVED"}
          />
        </div>
      </div>

      <div className="grid border-x border-b border-black/15 sm:grid-cols-[1fr_auto]">
        <div className="p-6 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35">
            Need to move faster?
          </p>

          <p className="mt-4 max-w-[620px] text-[24px] leading-[1.2] tracking-[-0.038em] text-black/74 sm:text-[29px]">
            Continue in WhatsApp with the inquiry details already prepared.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 border-t border-black/15 p-6 sm:border-l sm:border-t-0 sm:p-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#0B2D24] px-7 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a3483b]"
          >
            Continue in WhatsApp
            <MessageCircle size={17} strokeWidth={1.5} />
          </a>

          <button
            type="button"
            onClick={onReset}
            className="group inline-flex items-center justify-center gap-3 text-[12px] font-semibold text-black/45 transition-colors hover:text-black"
          >
            Submit another inquiry
            <RotateCcw size={14} strokeWidth={1.4} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

function ReceiptItem({ label, value }) {
  return (
    <div className="border-t border-white/15 pt-4">
      <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/30">
        {label}
      </p>

      <p className="mt-3 break-words text-[13px] leading-[1.5] text-white/65">
        {value}
      </p>
    </div>
  );
}

function FormChapter({ number, eyebrow, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.85, ease }}
      className="mb-14 border-t border-black/20 pt-6 lg:mb-16"
    >
      <div className="mb-10 grid gap-4 sm:grid-cols-[52px_1fr] sm:items-start">
        <span className="text-[10px] font-semibold tracking-[0.18em] text-black/28">
          {number}
        </span>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a3483b]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-[32px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[40px]">
            {title}
          </h2>
        </div>
      </div>

      <div className="sm:pl-[52px]">{children}</div>
    </motion.section>
  );
}

function TextField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/38"
      >
        {label}
        {required && <span className="ml-1 text-[#a3483b]">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-4 text-[19px] tracking-[-0.025em] text-black outline-none transition-colors placeholder:text-black/24 focus:border-[#a3483b]"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/38"
      >
        {label}
        {required && <span className="ml-1 text-[#a3483b]">*</span>}
      </label>

      <div className="relative mt-3">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full appearance-none border-0 border-b border-black/25 bg-transparent px-0 py-4 pr-10 text-[18px] tracking-[-0.025em] text-black outline-none transition-colors focus:border-[#a3483b]"
        >
          <option value="">Select an option</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          strokeWidth={1.4}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-black/35"
        />
      </div>
    </div>
  );
}
