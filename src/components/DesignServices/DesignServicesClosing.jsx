// src/components/Creative/DesignServicesVideoClose.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

export default function DesignServicesVideoClose() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useVideoAutoPause(videoRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!sectionRef.current || !videoRef.current) return;

      gsap.fromTo(
        videoRef.current,
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
      className="relative overflow-hidden bg-[#efeae1] px-6 py-24 text-[#161411] sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-14 border-t border-black/15 pt-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease }}
            className="flex flex-col justify-between lg:py-5"
          >
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">
                  05 — Brand in motion
                </p>

                <p className="text-[10px] tracking-[0.12em] text-black/30">
                  Merbi Creative
                </p>
              </div>

              <h2 className="mt-14 max-w-[760px] text-[52px] font-normal leading-[0.92] tracking-[-0.064em] sm:text-[68px] lg:text-[78px] xl:text-[90px]">
                A brand should feel
                <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a3483b]">
                  alive wherever it appears.
                </span>
              </h2>

              <p className="mt-10 max-w-[650px] text-[21px] leading-[1.5] tracking-[-0.03em] text-black/68 sm:text-[24px]">
                We build visual systems that move naturally between identity,
                film, campaigns, websites, products, and the everyday moments
                where people meet the business.
              </p>

              <p className="mt-7 max-w-[580px] border-t border-black/15 pt-7 text-[15px] leading-[1.75] text-black/48">
                The goal is not perfect repetition. It is a strong enough point
                of view that every expression can feel related without becoming
                predictable.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-14 inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black lg:mt-20"
            >
              Build your brand system
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/22 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#161411] group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.45} />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease }}
            className="relative"
          >
            <div className="relative min-h-[620px] overflow-hidden bg-[#151412] sm:min-h-[720px] lg:min-h-[820px]">
              <video
                ref={videoRef}
                poster="/images/creative/jewels-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disablePictureInPicture
                aria-label="Merbi brand system and creative reel"
                className="absolute -inset-y-[6%] h-[112%] w-full object-cover"
                onCanPlay={(event) => {
                  const video = event.currentTarget;

                  if (video.paused) {
                    video.play().catch(() => {});
                  }
                }}
              >
                <source src="/videos/designendcamp.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-black/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/72 via-black/14 to-transparent" />

              <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/62">
                  Identity / Film / Digital / Campaign
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                <div className="flex flex-col justify-between gap-8 border-t border-white/25 pt-6 sm:flex-row sm:items-end">
                  <p className="max-w-[720px] text-[30px] leading-[1.14] tracking-[-0.042em] sm:text-[38px] lg:text-[46px]">
                    One visual language,
                    <span className="font-serif font-normal italic text-[#efc4b1]">
                      {" "}
                      many ways to be felt.
                    </span>
                  </p>

                  <span className="text-[10px] font-medium tracking-[0.16em] text-white/42">
                    01:24
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-4 border-t border-black/15 pt-4 sm:flex-row sm:items-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Merbi Creative / Brand reel
              </p>

              <p className="text-[10px] tracking-[0.1em] text-black/30">
                A connected world across every expression
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
