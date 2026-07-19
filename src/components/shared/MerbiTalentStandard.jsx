// src/components/WebDesign/MerbiTalentStandard.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const media = {
  top: {
    type: "video",
    src: "/videos/web-design-direction.mp4",
    poster: "/images/web-design/web-design-direction.jpg",
    alt: "Merbi digital art direction and interface work",
    position: "center",
  },
  bottom: {
    type: "image",
    src: "/images/web-design/interface-study.jpg",
    alt: "Merbi responsive interface and website design study",
    position: "center",
  },
};

function MediaAsset({ media, mediaRef, className = "" }) {
  if (!media?.src) return null;

  const styles = {
    objectPosition: media.position || "center",
  };

  if (media.type === "video") {
    return (
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
        aria-label={media.alt || undefined}
        className={className}
        style={styles}
        onCanPlay={(event) => {
          const video = event.currentTarget;

          if (video.paused) {
            video.play().catch(() => {});
          }
        }}
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      ref={mediaRef}
      src={media.src}
      alt={media.alt || ""}
      loading="lazy"
      decoding="async"
      draggable="false"
      className={className}
      style={styles}
    />
  );
}

function RevealLine({ children, delay = 0, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{
          once: true,
          margin: "-8%",
        }}
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

export default function MerbiTalentStandard() {
  const sectionRef = useRef(null);
  const topMediaRef = useRef(null);
  const bottomMediaRef = useRef(null);

  useVideoAutoPause(topMediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      const mediaElements = [
        {
          element: topMediaRef.current,
          trigger: topMediaRef.current?.parentElement,
        },
        {
          element: bottomMediaRef.current,
          trigger: bottomMediaRef.current?.parentElement,
        },
      ];

      mediaElements.forEach(({ element, trigger }) => {
        if (!element || !trigger) return;

        gsap.fromTo(
          element,
          {
            scale: 1.08,
            yPercent: -3,
          },
          {
            scale: 1,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#11110f] text-white"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-2">
          {/* Top-left editorial statement */}
          <article className="flex min-h-[650px] flex-col justify-between border-b border-white/15 px-6 py-10 sm:px-10 lg:min-h-[820px] lg:border-r lg:px-14 lg:py-14 xl:px-16">
            <div className="flex items-center justify-between border-t border-white/18 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                05 — Digital craft
              </p>

              <p className="text-[10px] tracking-[0.12em] text-white/28">
                Merbi Web Design
              </p>
            </div>

            <div className="my-20 max-w-[760px] lg:my-auto">
              <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#efb59e]">
                Direction · Experience · Detail
              </p>

              <div className="mt-8">
                <RevealLine>
                  <h2 className="text-[54px] font-normal leading-[0.9] tracking-[-0.067em] sm:text-[70px] lg:text-[78px] xl:text-[90px]">
                    A polished website
                  </h2>
                </RevealLine>

                <RevealLine delay={0.05}>
                  <h2 className="font-serif text-[57px] font-normal italic leading-[0.92] tracking-[-0.04em] text-[#efb59e] sm:text-[74px] lg:text-[82px] xl:text-[94px]">
                    begins beneath the surface.
                  </h2>
                </RevealLine>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  duration: 0.9,
                  ease,
                }}
                className="mt-10 max-w-[650px] text-[20px] leading-[1.5] tracking-[-0.028em] text-white/70 sm:text-[23px]"
              >
                The ease people feel on the screen comes from decisions they
                never have to notice.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.16,
                  duration: 0.85,
                  ease,
                }}
                className="mt-7 max-w-[590px] border-t border-white/15 pt-7 text-[15px] leading-[1.76] text-white/45"
              >
                We resolve the hierarchy, pacing, typography, interactions, and
                responsive behavior until the experience feels natural enough to
                disappear behind the business.
              </motion.p>
            </div>

            <a
              href="#web-design-process"
              className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-white"
            >
              See how the work takes shape
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </a>
          </article>

          {/* Top-right media */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 1,
              ease,
            }}
            className="group relative min-h-[650px] overflow-hidden border-b border-white/15 bg-[#1a1917] lg:min-h-[820px]"
          >
            <MediaAsset
              media={media.top}
              mediaRef={topMediaRef}
              className="absolute -inset-y-[6%] h-[112%] w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/[0.05]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/78 via-black/18 to-transparent" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/62">
                Interface direction / In motion
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-8 border-t border-white/25 pt-7 sm:flex-row sm:items-end">
                <p className="max-w-[720px] text-[31px] leading-[1.13] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
                  Movement should give the experience rhythm,
                  <span className="font-serif font-normal italic text-[#efc4b1]">
                    {" "}
                    not compete for attention.
                  </span>
                </p>

                <span className="shrink-0 text-[10px] tracking-[0.15em] text-white/40">
                  01 / 02
                </span>
              </div>
            </div>
          </motion.article>

          {/* Bottom-left media */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 1,
              ease,
            }}
            className="group relative min-h-[650px] overflow-hidden border-b border-white/15 bg-[#ded8ce] lg:min-h-[820px] lg:border-b-0 lg:border-r"
          >
            <MediaAsset
              media={media.bottom}
              mediaRef={bottomMediaRef}
              className="absolute -inset-y-[6%] h-[112%] w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/72 via-black/12 to-transparent" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/62">
                Responsive study / Across screens
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-8 border-t border-white/25 pt-7 sm:flex-row sm:items-end">
                <p className="max-w-[720px] text-[31px] leading-[1.13] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
                  The composition changes with the screen.
                  <span className="font-serif font-normal italic text-[#efc4b1]">
                    {" "}
                    The intention stays intact.
                  </span>
                </p>

                <span className="shrink-0 text-[10px] tracking-[0.15em] text-white/40">
                  02 / 02
                </span>
              </div>
            </div>
          </motion.article>

          {/* Bottom-right closing belief */}
          <article className="flex min-h-[650px] flex-col justify-between bg-[#f2eee7] px-6 py-10 text-[#151310] sm:px-10 lg:min-h-[820px] lg:px-14 lg:py-14 xl:px-16">
            <div className="flex items-center justify-between border-t border-black/15 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
                The Merbi standard
              </p>

              <p className="text-[10px] tracking-[0.12em] text-black/27">
                Considered at every scale
              </p>
            </div>

            <div className="my-20 max-w-[760px] lg:my-auto">
              <RevealLine>
                <h2 className="text-[53px] font-normal leading-[0.91] tracking-[-0.066em] sm:text-[69px] lg:text-[77px] xl:text-[89px]">
                  Good design leads
                </h2>
              </RevealLine>

              <RevealLine delay={0.05}>
                <h2 className="font-serif text-[56px] font-normal italic leading-[0.93] tracking-[-0.04em] text-[#a3483b] sm:text-[73px] lg:text-[81px] xl:text-[93px]">
                  without announcing itself.
                </h2>
              </RevealLine>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  duration: 0.9,
                  ease,
                }}
                className="mt-10 max-w-[650px] text-[20px] leading-[1.5] tracking-[-0.028em] text-black/68 sm:text-[23px]"
              >
                People should know where they are, understand what matters, and
                move forward without friction.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.16,
                  duration: 0.85,
                  ease,
                }}
                className="mt-7 max-w-[590px] border-t border-black/15 pt-7 text-[15px] leading-[1.76] text-black/48"
              >
                That simplicity is earned through careful structure, expressive
                restraint, responsive thinking, and development that protects
                the design all the way to the finished experience.
              </motion.p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black"
            >
              Start a web design project
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
