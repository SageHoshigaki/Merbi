// src/components/WebDesign/TailoredWebDesignSection.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const considerations = [
  "The way your audience thinks",
  "The rhythm of your story",
  "The decisions people need to make",
  "The character only your business can own",
];

export default function TailoredWebDesignSection() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!sectionRef.current || !mediaRef.current) return;

      gsap.fromTo(
        mediaRef.current,
        {
          scale: 1.08,
          yPercent: -3,
        },
        {
          scale: 1,
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-24 text-[#151310] sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="flex items-center justify-between border-t border-black/15 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
            04 — Made for the business
          </p>

          <p className="text-[10px] tracking-[0.12em] text-black/28">
            Merbi Web Design
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
          <div className="flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 1, ease }}
                className="max-w-[760px] text-[54px] font-normal leading-[0.91] tracking-[-0.067em] sm:text-[72px] lg:text-[82px] xl:text-[94px]"
              >
                The form should follow
                <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a3483b]">
                  the life of the business.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.9, ease }}
                className="mt-10 max-w-[630px] text-[21px] leading-[1.5] tracking-[-0.03em] text-black/70 sm:text-[24px]"
              >
                A restaurant, a fashion label, a financial firm, and a cultural
                platform should not move through the web in the same way.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14, duration: 0.85, ease }}
                className="mt-7 max-w-[590px] border-t border-black/15 pt-7 text-[15px] leading-[1.78] text-black/49"
              >
                We design around the particular shape of the business—its
                audience, offer, voice, content, and ambitions—so the experience
                feels natural to what it is rather than borrowed from what came
                before.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.85, ease }}
              className="mt-14 border-t border-black/15 lg:mt-20"
            >
              {considerations.map((item, index) => (
                <div
                  key={item}
                  className="grid min-h-[76px] grid-cols-[42px_1fr] items-center gap-5 border-b border-black/15"
                >
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-black/30">
                    0{index + 1}
                  </span>

                  <p className="text-[17px] leading-[1.3] tracking-[-0.025em] text-black/64 sm:text-[19px]">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.8, ease }}
              className="group mt-10 inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black"
            >
              Shape a website around your business
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.45} />
              </span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease }}
            className="relative"
          >
            <div className="relative min-h-[700px] overflow-hidden bg-[#171614] sm:min-h-[820px] lg:min-h-[940px]">
              <img
                ref={mediaRef}
                src="/images/webpor.png"
                alt="A tailored digital experience designed by Merbi"
                loading="lazy"
                decoding="async"
                draggable="false"
                className="absolute -inset-y-[6%] h-[112%] w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-black/78 via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/62">
                  Bespoke digital expression
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10 xl:p-12">
                <div className="grid gap-8 border-t border-white/25 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="max-w-[850px] text-[32px] leading-[1.12] tracking-[-0.045em] sm:text-[42px] lg:text-[52px] xl:text-[60px]">
                    The experience should feel impossible to separate
                    <span className="font-serif font-normal italic text-[#efc4b1]">
                      {" "}
                      from the business behind it.
                    </span>
                  </p>

                  <span className="text-[10px] font-medium tracking-[0.16em] text-white/42">
                    01 / 01
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-4 border-t border-black/15 pt-4 sm:flex-row sm:items-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/38">
                Audience / Story / Structure / Interaction
              </p>

              <p className="text-[10px] tracking-[0.1em] text-black/28">
                Built from the inside out
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="mt-20 grid gap-12 border-t border-black/15 pt-8 lg:mt-28 lg:grid-cols-[0.62fr_0.38fr]"
        >
          <p className="max-w-[980px] font-serif text-[31px] font-normal italic leading-[1.28] tracking-[-0.03em] text-black/64 sm:text-[39px] lg:text-[47px]">
            Tailoring is not about adding more. It is knowing what belongs, what
            can disappear, and what deserves to become unforgettable.
          </p>

          <p className="max-w-[500px] text-[14px] leading-[1.75] text-black/44 lg:ml-auto">
            The result is a website with its own logic and atmosphere—clear
            enough to use without explanation, distinctive enough to leave an
            impression.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
