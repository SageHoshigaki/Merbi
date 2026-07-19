// src/components/MarketingPowerSection.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import { ArrowRight, Asterisk } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const media = {
  type: "video",
  src: "/images/marketingstrat/frag.mp4",
  poster: "/images/marketingstrat/frag.png",
  position: "center",
  alt: "A Merbi campaign created around audience connection",
};

// Image version:
//
// const media = {
//   type: "image",
//   src: "/images/marketingstrat/frag.png",
//   position: "center",
//   alt: "A Merbi campaign created around audience connection",
// };

function MediaAsset({ media, mediaRef, className = "" }) {
  if (!media?.src) return null;

  const sharedStyles = {
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
        disablePictureInPicture
        controls={false}
        aria-label={media.alt || undefined}
        className={className}
        style={sharedStyles}
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
      style={sharedStyles}
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

export default function MarketingPowerSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const mediaRef = useRef(null);

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      const revealItems = contentRef.current?.querySelectorAll(
        "[data-power-reveal]",
      );

      if (revealItems?.length) {
        gsap.fromTo(
          revealItems,
          {
            y: 38,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.09,
            ease: "power4.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 76%",
              once: true,
            },
          },
        );
      }

      if (mediaRef.current && sectionRef.current) {
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
      }
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f0ede5] text-[#111]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="flex items-center justify-between border-t border-black/15 py-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-black/30" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/50">
              Built around people
            </p>
          </div>

          <Asterisk size={16} strokeWidth={1.4} className="text-[#a83e31]" />
        </div>

        <div className="grid border-y border-black/15 lg:grid-cols-[0.92fr_1.08fr]">
          <div
            ref={contentRef}
            className="relative flex min-h-[720px] flex-col justify-between py-10 lg:min-h-[880px] lg:border-r lg:border-black/15 lg:py-14 lg:pr-14 xl:pr-20"
          >
            <div>
              <p
                data-power-reveal
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a83e31]"
              >
                Culture · Clarity · Momentum
              </p>

              <div className="mt-8">
                <RevealLine>
                  <h2 className="max-w-[800px] text-[54px] font-normal leading-[0.9] tracking-[-0.065em] sm:text-[72px] lg:text-[86px] xl:text-[98px]">
                    A business grows
                  </h2>
                </RevealLine>

                <RevealLine delay={0.04}>
                  <h2 className="max-w-[800px] font-serif text-[54px] font-normal italic leading-[0.92] tracking-[-0.04em] text-[#a83e31] sm:text-[72px] lg:text-[86px] xl:text-[98px]">
                    when people recognize
                  </h2>
                </RevealLine>

                <RevealLine delay={0.08}>
                  <h2 className="max-w-[800px] text-[54px] font-normal leading-[0.9] tracking-[-0.065em] sm:text-[72px] lg:text-[86px] xl:text-[98px]">
                    something of themselves
                  </h2>
                </RevealLine>

                <RevealLine delay={0.12}>
                  <h2 className="max-w-[800px] font-serif text-[54px] font-normal italic leading-[0.92] tracking-[-0.04em] text-[#a83e31] sm:text-[72px] lg:text-[86px] xl:text-[98px]">
                    inside of it.
                  </h2>
                </RevealLine>
              </div>

              <p
                data-power-reveal
                className="mt-10 max-w-[710px] text-[22px] leading-[1.46] tracking-[-0.03em] text-black/72 sm:text-[25px] lg:mt-12 lg:text-[28px]"
              >
                Merbi helps businesses discover the role they can play in
                people&apos;s lives, then turns that understanding into a brand
                presence with warmth, clarity, and staying power.
              </p>

              <div
                data-power-reveal
                className="mt-10 grid max-w-[720px] gap-8 border-t border-black/15 pt-8 sm:grid-cols-2"
              >
                <p className="text-[15px] leading-[1.72] text-black/56">
                  We begin with the people closest to the business: founders,
                  customers, collaborators, and the communities already shaping
                  its future.
                </p>

                <p className="text-[15px] leading-[1.72] text-black/56">
                  From those signals, we shape the story, visual language,
                  campaigns, content, and support needed to move forward with
                  intention.
                </p>
              </div>
            </div>

            <div data-power-reveal className="mt-16">
              <div className="border-t border-black/15 pt-8">
                <p className="max-w-[700px] font-serif text-[28px] font-normal italic leading-[1.35] tracking-[-0.025em] text-black/68 sm:text-[34px]">
                  Reaching people matters. Giving them a reason to care matters
                  more.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <a
                    href="#contact"
                    className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full bg-[#111] px-8 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a83e31]"
                  >
                    Tell us about your business
                    <ArrowRight
                      size={16}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#marketing-disciplines"
                    className="group inline-flex items-center gap-4 border-b border-black/30 pb-2 text-[13px] font-semibold text-black transition-colors duration-300 hover:border-[#a83e31] hover:text-[#a83e31]"
                  >
                    Explore our approach
                    <ArrowRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[660px] overflow-hidden bg-[#171717] lg:min-h-[880px]">
            <MediaAsset
              media={media}
              mediaRef={mediaRef}
              className="absolute -inset-y-[6%] h-[112%] w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-black/10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
              <div className="flex items-center gap-4 text-white">
                <span className="h-px w-8 bg-white/45" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/68">
                  Made for real connection
                </p>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-8%",
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className="absolute inset-x-0 bottom-0"
            >
              <div className="grid border-t border-white/20 bg-black/10 backdrop-blur-[3px] sm:grid-cols-[1fr_auto]">
                <div className="px-6 py-7 sm:px-8 sm:py-9">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Merbi / Community and culture
                  </p>

                  <p className="mt-3 max-w-[620px] text-[25px] leading-[1.2] tracking-[-0.04em] text-white sm:text-[30px] lg:text-[34px]">
                    The best marketing does not speak over a community. It earns
                    a place within it.
                  </p>
                </div>

                <div className="flex items-end justify-between border-t border-white/20 px-6 py-6 sm:min-w-[170px] sm:flex-col sm:border-l sm:border-t-0 sm:px-8 sm:py-8">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-white/45">
                    01
                  </span>

                  <a
                    href="#marketing-disciplines"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:rotate-45 hover:bg-white hover:text-black"
                    aria-label="Explore Merbi marketing services"
                  >
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
