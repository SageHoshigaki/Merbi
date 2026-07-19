// src/components/Creative/DesignServicesFeature.jsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const serviceHighlights = [
  {
    number: "01",
    title: "Brand worlds",
    description:
      "Identity systems, visual direction, and campaign language shaped around the character of the business.",
  },
  {
    number: "02",
    title: "Digital experiences",
    description:
      "Websites and interfaces that feel intuitive to use without losing their sense of personality.",
  },
  {
    number: "03",
    title: "Content and motion",
    description:
      "Image, film, movement, and social expression designed to carry the idea into everyday culture.",
  },
  {
    number: "04",
    title: "Launch and evolution",
    description:
      "The tools, guidance, and ongoing creative support needed to help the work live beyond its first release.",
  },
];

export default function DesignServicesFeature() {
  return (
    <section className="relative overflow-hidden bg-[#efeae1] px-6 py-24 text-[#161411] sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1800px]">
        {/* Editorial introduction */}
        <div className="grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-black/30" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/44">
                Digital and creative
              </p>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease }}
              className="max-w-[1120px] text-[50px] font-normal leading-[0.94] tracking-[-0.062em] sm:text-[68px] lg:text-[84px] xl:text-[96px]"
            >
              A business should feel like
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a3483b]">
                the same world everywhere.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.9, ease }}
              className="mt-10 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-[0.9fr_1.1fr]"
            >
              <p className="max-w-[520px] text-[19px] leading-[1.55] tracking-[-0.025em] text-black/68 sm:text-[21px]">
                We carry the creative idea across every place people meet the
                business.
              </p>

              <p className="max-w-[610px] text-[15px] leading-[1.75] text-black/50">
                From identity and campaign imagery to websites, motion, and
                launch materials, each expression is designed to belong to the
                same story without becoming predictable.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Campaign image */}
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1, ease }}
          className="relative mt-20"
        >
          <div className="relative min-h-[620px] overflow-hidden bg-[#171614] sm:min-h-[720px] lg:min-h-[850px]">
            <img
              src="/images/gum.png"
              alt="Merbi creative and digital work"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/5" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/72 via-black/20 to-transparent" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/65">
                Merbi Creative / Selected expression
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10 xl:p-12">
              <div className="grid gap-8 border-t border-white/25 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-[970px] text-[34px] font-normal leading-[1.08] tracking-[-0.045em] sm:text-[45px] lg:text-[56px] xl:text-[64px]">
                  The website, the campaign, the packaging, and the smallest
                  detail should all feel
                  <span className="font-serif font-normal italic text-[#f0c7b5]">
                    {" "}
                    related by instinct.
                  </span>
                </p>

                <a
                  href="#contact"
                  aria-label="Discuss a creative project"
                  className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 hover:rotate-45 hover:bg-white hover:text-black lg:h-16 lg:w-16"
                >
                  <ArrowUpRight size={19} strokeWidth={1.4} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-4 border-t border-black/15 pt-4 sm:flex-row sm:items-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
              Identity / Campaign / Website / Motion
            </p>

            <p className="text-[10px] tracking-[0.1em] text-black/32">
              Designed as one connected experience
            </p>
          </div>
        </motion.div>

        {/* Service index */}
        <div className="mt-24 border-t border-black/18 lg:mt-32">
          {serviceHighlights.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease,
              }}
              className="group grid gap-6 border-b border-black/18 py-8 sm:grid-cols-[70px_0.75fr_1fr_auto] sm:items-center sm:gap-8 lg:py-10"
            >
              <span className="text-[10px] font-semibold tracking-[0.18em] text-black/35">
                {service.number}
              </span>

              <h3 className="text-[27px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[32px] lg:text-[38px]">
                {service.title}
              </h3>

              <p className="max-w-[580px] text-[14px] leading-[1.7] text-black/50 sm:text-[15px]">
                {service.description}
              </p>

              <ArrowUpRight
                size={17}
                strokeWidth={1.35}
                className="hidden text-black/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a3483b] sm:block"
              />
            </motion.article>
          ))}
        </div>

        {/* Closing action */}
        <div className="mt-12 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <p className="max-w-[740px] font-serif text-[27px] font-normal italic leading-[1.35] tracking-[-0.025em] text-black/62 sm:text-[32px]">
            Whatever form the work takes, it should leave people with a clear
            sense of who made it and why it exists.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black"
          >
            Work with Merbi
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/22 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#161411] group-hover:text-white">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
