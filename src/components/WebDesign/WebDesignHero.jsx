// src/components/WebDesign/WebDesignHero.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

export default function WebDesignHero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!sectionRef.current || !imageRef.current) return;

      gsap.fromTo(
        imageRef.current,
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
      id="web-design-introduction"
      className="relative overflow-hidden bg-white text-[#151310]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="flex items-center justify-between border-t border-black/15 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
            02 — Digital point of view
          </p>

          <p className="text-[10px] tracking-[0.12em] text-black/28">
            Merbi Web Design
          </p>
        </div>

        <div className="mt-16 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease }}
          >
            <h2 className="max-w-[1580px] text-[58px] font-normal leading-[0.87] tracking-[-0.072em] sm:text-[82px] md:text-[104px] lg:text-[128px] xl:text-[152px]">
              A website is where
            </h2>

            <h2 className="ml-auto max-w-[1420px] text-right font-serif text-[61px] font-normal italic leading-[0.9] tracking-[-0.045em] text-[#a3483b] sm:text-[86px] md:text-[109px] lg:text-[134px] xl:text-[158px]">
              a business becomes tangible.
            </h2>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.28fr_0.72fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06, duration: 0.85, ease }}
            className="lg:pt-4"
          >
            <p className="max-w-[300px] text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.22em] text-black/38">
              Story
              <br />
              Structure
              <br />
              Interaction
              <br />
              Technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease }}
            className="grid gap-10 border-t border-black/15 pt-8 sm:grid-cols-[0.9fr_1.1fr]"
          >
            <p className="max-w-[560px] text-[21px] leading-[1.5] tracking-[-0.03em] text-black/70 sm:text-[24px]">
              It is where people decide whether the business feels considered,
              credible, and worth spending time with.
            </p>

            <p className="max-w-[620px] text-[15px] leading-[1.78] text-black/48">
              Merbi brings brand thinking, interface design, motion, and
              development into one creative process. The result is not simply a
              collection of pages, but a digital environment with its own
              rhythm, character, and point of view.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1, ease }}
          className="relative mt-20 lg:mt-28"
        >
          <div className="relative ml-auto min-h-[680px] w-full overflow-hidden bg-[#171614] lg:min-h-[880px] lg:w-[84%]">
            <img
              ref={imageRef}
              src="/images/web-design/mirrors.png"
              alt="Merbi web design and digital experience"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="absolute -inset-y-[6%] h-[112%] w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/58">
                Selected digital expression
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10 xl:p-12">
              <div className="flex flex-col justify-between gap-8 border-t border-white/24 pt-7 sm:flex-row sm:items-end">
                <p className="max-w-[940px] text-[31px] leading-[1.12] tracking-[-0.045em] sm:text-[42px] lg:text-[54px] xl:text-[62px]">
                  The best websites make the business feel
                  <span className="font-serif font-normal italic text-[#efc4b1]">
                    {" "}
                    inevitable.
                  </span>
                </p>

                <a
                  href="#web-design-services"
                  aria-label="Explore Merbi web design services"
                  className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/32 text-white transition-all duration-300 hover:rotate-45 hover:bg-white hover:text-black"
                >
                  <ArrowUpRight size={18} strokeWidth={1.4} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-4 border-t border-black/15 pt-4 sm:flex-row sm:items-center lg:ml-auto lg:w-[84%]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/38">
              Direction / UX / Interface / Motion / Development
            </p>

            <p className="text-[10px] tracking-[0.1em] text-black/28">
              Designed as one connected experience
            </p>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-12 border-t border-black/15 pt-8 lg:mt-28 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
            className="max-w-[900px] font-serif text-[32px] font-normal italic leading-[1.28] tracking-[-0.03em] text-black/66 sm:text-[40px] lg:text-[48px]"
          >
            We are interested in the moment when a screen stops feeling like an
            interface and begins to feel like a place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06, duration: 0.8, ease }}
            className="lg:flex lg:justify-end"
          >
            <a
              href="#web-design-services"
              className="group inline-flex items-center gap-5 text-[13px] font-semibold text-black"
            >
              Enter the digital practice
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.45} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
