// src/components/Creative/DesignServicesIntro.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const media = {
  src: "/videos/object1.mp4",
  poster: "/images/object1.png",
  position: "center",
  alt: "Merbi creative work in progress",
};

function RevealLine({ children, delay = 0, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{
          duration: 1,
          delay,
          ease,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function DesignServicesIntro() {
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const mediaRef = useRef(null);

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      const revealItems = copyRef.current?.querySelectorAll(
        "[data-intro-reveal]",
      );

      if (revealItems?.length) {
        gsap.fromTo(
          revealItems,
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: copyRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      if (mediaRef.current && sectionRef.current) {
        gsap.fromTo(
          mediaRef.current,
          {
            scale: 1.06,
            yPercent: -2,
          },
          {
            scale: 1,
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="design-services"
      className="relative overflow-hidden bg-[#eee9df] text-[#171512]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
          <div ref={copyRef} className="flex flex-col justify-between lg:py-4">
            <div>
              <div
                data-intro-reveal
                className="flex items-center justify-between border-t border-black/20 pt-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-black/48">
                  02 — Creative practice
                </p>

                <p className="text-[10px] font-medium tracking-[0.12em] text-black/35">
                  New York
                </p>
              </div>

              <div className="mt-14 lg:mt-20">
                <RevealLine>
                  <h2 className="max-w-[760px] text-[58px] font-normal leading-[0.89] tracking-[-0.07em] sm:text-[76px] lg:text-[90px] xl:text-[104px]">
                    We shape
                  </h2>
                </RevealLine>

                <RevealLine delay={0.04}>
                  <h2 className="max-w-[760px] text-[58px] font-normal leading-[0.89] tracking-[-0.07em] sm:text-[76px] lg:text-[90px] xl:text-[104px]">
                    the way a business
                  </h2>
                </RevealLine>

                <RevealLine delay={0.08}>
                  <h2 className="max-w-[760px] font-serif text-[60px] font-normal italic leading-[0.91] tracking-[-0.045em] text-[#a3483b] sm:text-[79px] lg:text-[94px] xl:text-[108px]">
                    enters the world.
                  </h2>
                </RevealLine>
              </div>

              <p
                data-intro-reveal
                className="mt-10 max-w-[650px] text-[21px] leading-[1.48] tracking-[-0.03em] text-black/70 sm:text-[24px] lg:mt-12 lg:text-[27px]"
              >
                Merbi works with founders and teams to turn instinct, ambition,
                and lived experience into identities, campaigns, and digital
                expressions with a clear point of view.
              </p>

              <div
                data-intro-reveal
                className="mt-10 max-w-[650px] border-t border-black/18 pt-7"
              >
                <p className="text-[15px] leading-[1.75] text-black/52">
                  The work can begin with a name, an image, a package, a film,
                  or a single unfinished idea. What matters is finding the form
                  that feels honest to the business and compelling to everyone
                  meeting it for the first time.
                </p>
              </div>
            </div>

            <div
              data-intro-reveal
              className="mt-14 border-t border-black/18 pt-6 lg:mt-20"
            >
              <a
                href="#creative-work"
                className="group inline-flex items-center gap-5 text-[13px] font-semibold text-black"
              >
                See the creative practice
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease }}
              className="relative aspect-[4/5] overflow-hidden bg-[#1a1815] lg:aspect-[0.92]"
            >
              <video
                ref={mediaRef}
                poster={media.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disablePictureInPicture
                aria-label={media.alt}
                className="absolute -inset-y-[5%] h-[110%] w-full object-cover"
                style={{ objectPosition: media.position }}
                onCanPlay={(event) => {
                  const video = event.currentTarget;

                  if (video.paused) {
                    video.play().catch(() => {});
                  }
                }}
              >
                <source src={media.src} type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-black/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-10 p-6 text-white sm:p-8 lg:p-10">
                <p className="max-w-[560px] text-[26px] leading-[1.18] tracking-[-0.04em] sm:text-[32px] lg:text-[38px]">
                  A visual language with enough character to be remembered and
                  enough range to keep growing.
                </p>

                <span className="shrink-0 text-[10px] font-medium tracking-[0.16em] text-white/48">
                  01
                </span>
              </div>
            </motion.div>

            <div className="mt-5 flex flex-col justify-between gap-4 border-t border-black/18 pt-4 sm:flex-row sm:items-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-black/42">
                Identity / Campaign / Digital / Motion
              </p>

              <p className="text-[10px] font-medium tracking-[0.08em] text-black/34">
                Merbi Creative
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
