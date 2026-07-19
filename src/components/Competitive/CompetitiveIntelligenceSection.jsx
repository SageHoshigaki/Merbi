// src/components/Competitive/CompetitiveIntelligenceSection.jsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const intelligenceAreas = [
  {
    number: "01",
    title: "Category movement",
    body: "We watch how the market is shifting, what competitors are repeating, and where the audience may be ready for something different.",
  },
  {
    number: "02",
    title: "Audience signals",
    body: "Search behavior, comments, saves, conversations, and response patterns help reveal what people are actually leaning toward.",
  },
  {
    number: "03",
    title: "Creative openings",
    body: "We look for the messages, formats, and cultural moments the business can enter without losing its own personality.",
  },
  {
    number: "04",
    title: "Performance learning",
    body: "What works becomes a clue, not a template. Each campaign helps sharpen the next creative decision.",
  },
];

export default function CompetitiveIntelligenceSection() {
  return (
    <section id="strategy" className="overflow-hidden bg-white text-[#111111]">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid border-t border-black/20 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.figure
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease }}
            className="relative aspect-square overflow-hidden bg-[#f4f0e7] lg:aspect-auto lg:min-h-[860px]"
          >
            <img
              src="/images/object4.png"
              alt="Creative intelligence moodboard containing identity studies, campaign references, visual research, and cultural imagery"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover object-center lg:object-contain"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/[0.025]" />

            <div className="absolute left-4 top-4 bg-white/95 px-3 py-2 backdrop-blur-[2px] sm:left-6 sm:top-6 lg:left-8 lg:top-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                Research / Creative intelligence
              </p>
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-5 pb-5 pt-24 text-white sm:px-8 sm:pb-8 sm:pt-32 lg:px-10 lg:pb-10">
              <p className="max-w-[850px] text-[27px] leading-[1.06] tracking-[-0.048em] sm:text-[39px] lg:text-[48px] xl:text-[55px]">
                The work gets stronger when the team understands
                <span className="font-serif font-normal italic text-[#efc4b1]">
                  {" "}
                  what people are already seeing.
                </span>
              </p>
            </figcaption>
          </motion.figure>

          <div className="flex flex-col border-black/20 lg:border-l">
            <div className="border-b border-black/20 py-10 sm:py-12 lg:px-10 lg:py-12 xl:px-12">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease }}
                className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/40"
              >
                Competitive intelligence
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: 0.04, duration: 0.95, ease }}
                className="mt-7 max-w-[760px] text-[46px] font-normal leading-[0.93] tracking-[-0.06em] sm:text-[59px] lg:text-[67px] xl:text-[76px]"
              >
                Know the room before
                <span className="block font-serif font-normal italic text-[#a3483b]">
                  deciding how to enter it.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.85, ease }}
                className="mt-7 max-w-[650px] text-[16px] leading-[1.68] text-black/54"
              >
                Good content does not begin with a trend. It begins with a clear
                understanding of the category, the audience, and the space the
                business can genuinely own.
              </motion.p>
            </div>

            <div className="flex-1">
              {intelligenceAreas.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-6%" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.055,
                    ease,
                  }}
                  className="group grid min-h-[190px] grid-cols-[42px_1fr_auto] gap-5 border-b border-black/20 py-7 sm:grid-cols-[52px_0.72fr_1fr_auto] sm:items-center sm:gap-7 lg:px-10 xl:px-12"
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black/28">
                    {item.number}
                  </span>

                  <h3 className="text-[26px] font-normal leading-[1.02] tracking-[-0.045em] sm:text-[30px]">
                    {item.title}
                  </h3>

                  <p className="col-start-2 max-w-[470px] text-[14px] leading-[1.68] text-black/47 sm:col-start-auto">
                    {item.body}
                  </p>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.35}
                    className="hidden text-black/22 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a3483b] sm:block"
                  />
                </motion.article>
              ))}
            </div>

            <div className="grid gap-6 bg-[#111111] py-8 text-white sm:grid-cols-[1fr_auto] sm:items-center lg:px-10 xl:px-12">
              <p className="max-w-[600px] text-[18px] leading-[1.45] tracking-[-0.025em] text-white/70">
                The point is not to copy what is working. It is to understand
                the landscape well enough to make a more useful move.
              </p>

              <a
                href="/start-a-project"
                className="group inline-flex w-fit items-center gap-4 text-[13px] font-semibold text-white"
              >
                Build a sharper content direction
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
