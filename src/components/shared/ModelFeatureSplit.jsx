// src/components/shared/ModelFeatureSplit.jsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const models = [
  {
    number: "01",
    title: "Ongoing creative",
    body: "A steady relationship for businesses that need campaigns, content, design, and digital work moving every week.",
  },
  {
    number: "02",
    title: "Campaign sprint",
    body: "A focused team around a launch, seasonal moment, new offer, or creative challenge that needs real momentum.",
  },
  {
    number: "03",
    title: "Embedded support",
    body: "Merbi works beside the internal team, adding direction, specialist craft, and more creative range where it matters.",
  },
];

export default function ModelFeatureSplit() {
  return (
    <section className="overflow-hidden bg-white text-[#111111]">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid border-t border-black/20 lg:grid-cols-[1.06fr_0.94fr]">
          <motion.figure
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease }}
            className="relative min-h-[620px] overflow-hidden bg-black lg:min-h-[820px]"
          >
            <img
              src="/images/jc.jpg"
              alt="Merbi creative team collaborating"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/12 to-black/15" />

            <div className="absolute left-6 top-6 bg-white px-3 py-2 sm:left-8 sm:top-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                Ways to work together
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
              <p className="max-w-[900px] text-[34px] leading-[1.08] tracking-[-0.048em] sm:text-[44px] lg:text-[54px] xl:text-[62px]">
                A creative relationship should feel
                <span className="font-serif font-normal italic text-[#efc4b1]">
                  {" "}
                  close, useful, and easy to move with.
                </span>
              </p>
            </div>
          </motion.figure>

          <div className="relative flex flex-col border-black/20 lg:border-l">
            <div className="border-b border-black/20 px-0 py-10 sm:py-12 lg:px-10 lg:py-12 xl:px-12">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease }}
                className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/40"
              >
                Built around the pace of the business
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: 0.04, duration: 0.95, ease }}
                className="mt-7 max-w-[720px] text-[46px] font-normal leading-[0.93] tracking-[-0.06em] sm:text-[59px] lg:text-[67px] xl:text-[76px]"
              >
                Some moments need continuity.
                <span className="block font-serif font-normal italic text-[#a3483b]">
                  Others need a strong push.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.85, ease }}
                className="mt-7 max-w-[620px] text-[16px] leading-[1.68] text-black/54"
              >
                We shape the relationship around what needs to keep moving, what
                needs to change, and how closely the team needs us in the room.
              </motion.p>
            </div>

            <div className="flex-1">
              {models.map((model, index) => (
                <motion.article
                  key={model.number}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-6%" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.06,
                    ease,
                  }}
                  className="group grid min-h-[205px] grid-cols-[42px_1fr_auto] gap-5 border-b border-black/20 py-7 sm:grid-cols-[52px_0.75fr_1fr_auto] sm:items-center sm:gap-7 lg:px-10 xl:px-12"
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black/28">
                    {model.number}
                  </span>

                  <h3 className="text-[26px] font-normal leading-[1.02] tracking-[-0.045em] sm:text-[30px]">
                    {model.title}
                  </h3>

                  <p className="col-start-2 max-w-[460px] text-[14px] leading-[1.68] text-black/47 sm:col-start-auto">
                    {model.body}
                  </p>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.35}
                    className="hidden text-black/24 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a3483b] sm:block"
                  />
                </motion.article>
              ))}
            </div>

            <div className="flex flex-col justify-between gap-6 bg-[#111111] px-0 py-8 text-white sm:flex-row sm:items-center lg:px-10 xl:px-12">
              <p className="max-w-[520px] text-[18px] leading-[1.45] tracking-[-0.025em] text-white/70">
                The right setup gives the work enough context to improve without
                slowing the business down.
              </p>

              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-4 text-[13px] font-semibold text-white"
              >
                Find the right model
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={16} strokeWidth={1.4} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
