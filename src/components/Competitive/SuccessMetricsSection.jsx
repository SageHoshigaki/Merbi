// src/components/Competitive/SuccessMetricsSection.jsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const measures = [
  {
    number: "01",
    title: "Attention",
    statement: "Did the work earn a real pause?",
    body: "We look beyond impressions to understand whether people stopped, watched, read, saved, shared, or returned.",
    marker: "Stop",
  },
  {
    number: "02",
    title: "Recognition",
    statement: "Could people tell it came from you?",
    body: "The content should strengthen a recognizable voice and visual presence instead of disappearing into the category.",
    marker: "Know",
  },
  {
    number: "03",
    title: "Response",
    statement: "Did it give people a reason to care?",
    body: "Comments, replies, conversations, inquiries, and sentiment reveal whether the idea connected beyond the surface.",
    marker: "Feel",
  },
  {
    number: "04",
    title: "Movement",
    statement: "Did attention turn into action?",
    body: "We connect the creative work to the next meaningful step—visiting, subscribing, asking, buying, booking, or returning.",
    marker: "Move",
  },
];

export default function SuccessMetricsSection() {
  return (
    <section className="relative overflow-hidden bg-[#10100f] text-white">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <header className="grid border-t border-white/20 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="border-b border-white/20 py-7 lg:border-b-0 lg:border-r lg:pr-12">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
                Measuring the work
              </p>

              <span className="text-[9px] tracking-[0.16em] text-white/24">
                04 signals
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.9, ease }}
              className="mt-12 max-w-[590px] text-[31px] leading-[1.14] tracking-[-0.042em] text-white/70 sm:text-[38px] lg:mt-20 lg:text-[44px]"
            >
              Visibility means very little when nobody remembers
              <span className="font-serif font-normal italic text-[#efb59e]">
                {" "}
                who made them stop.
              </span>
            </motion.p>
          </div>

          <div className="py-9 lg:pl-12 lg:pt-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.95, ease }}
              className="max-w-[920px] text-[47px] font-normal leading-[0.92] tracking-[-0.064em] sm:text-[62px] lg:text-[74px] xl:text-[84px]"
            >
              We measure whether the content
              <span className="block font-serif font-normal italic text-[#efb59e]">
                changed what happened next.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.8, ease }}
              className="mt-8 max-w-[680px] text-[16px] leading-[1.72] text-white/48"
            >
              Reach can tell us how far something travelled. The more useful
              question is whether it helped people notice the business,
              recognize it, respond to it, and move closer.
            </motion.p>
          </div>
        </header>

        <div className="mt-10 border-t border-white/20 lg:mt-14">
          {measures.map((measure, index) => (
            <MeasureRow key={measure.number} measure={measure} index={index} />
          ))}
        </div>

        <div className="grid border-b border-white/20 lg:grid-cols-[1.32fr_0.68fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="border-b border-white/20 py-9 lg:border-b-0 lg:border-r lg:pr-12"
          >
            <p className="max-w-[960px] text-[27px] leading-[1.2] tracking-[-0.038em] text-white/72 sm:text-[34px] lg:text-[40px]">
              A successful content practice does not chase one loud moment. It
              builds a pattern of useful attention the business can keep growing
              from.
            </p>
          </motion.div>

          <div className="flex flex-col justify-between gap-10 py-9 lg:pl-12">
            <p className="max-w-[520px] text-[14px] leading-[1.75] text-white/42">
              The exact measures change with the brief. A launch may be judged
              by demand and action. An ongoing program may be judged by
              recognition, audience response, and the strength of the
              relationship over time.
            </p>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-white"
            >
              Define what success means
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeasureRow({ measure, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{
        duration: 0.85,
        delay: index * 0.05,
        ease,
      }}
      className="group grid border-b border-white/20 lg:grid-cols-[0.1fr_0.2fr_0.36fr_0.34fr]"
    >
      <div className="flex items-start justify-between border-b border-white/15 py-6 lg:border-b-0 lg:border-r lg:pr-6">
        <span className="text-[10px] font-semibold tracking-[0.18em] text-white/28">
          {measure.number}
        </span>

        <span className="text-[9px] uppercase tracking-[0.18em] text-white/20 lg:hidden">
          {measure.marker}
        </span>
      </div>

      <div className="flex items-center border-b border-white/15 py-7 lg:border-b-0 lg:border-r lg:px-7">
        <h3 className="text-[30px] font-normal leading-none tracking-[-0.05em] sm:text-[36px]">
          {measure.title}
        </h3>
      </div>

      <div className="flex items-center border-b border-white/15 py-7 lg:border-b-0 lg:border-r lg:px-8">
        <p className="max-w-[520px] text-[24px] leading-[1.12] tracking-[-0.038em] text-white/72 sm:text-[29px]">
          {measure.statement}
        </p>
      </div>

      <div className="flex items-center justify-between gap-8 py-7 lg:pl-8">
        <p className="max-w-[500px] text-[14px] leading-[1.72] text-white/43">
          {measure.body}
        </p>

        <span className="hidden font-serif text-[58px] font-normal italic leading-none tracking-[-0.06em] text-white/[0.09] transition-colors duration-300 group-hover:text-[#efb59e]/35 xl:block">
          {measure.marker}
        </span>
      </div>
    </motion.article>
  );
}
