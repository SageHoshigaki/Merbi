// src/components/Creative/DesignServicesHero.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import { ArrowDown, ArrowRight, Asterisk } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const heroMedia = {
  type: "video",
  src: "/videos/crea.mp4",
  poster: "/images/creative/hayley.jpg",
  alt: "Merbi creative direction and design campaign",
  position: "center",
};

function HeroMedia({ media, mediaRef }) {
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
        preload="auto"
        controls={false}
        disablePictureInPicture
        aria-label={media.alt || undefined}
        className="absolute inset-0 h-full w-full object-cover"
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
      loading="eager"
      fetchPriority="high"
      decoding="async"
      draggable="false"
      className="absolute inset-0 h-full w-full object-cover"
      style={styles}
    />
  );
}

function RevealLine({ children, delay = 0, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1.05,
          delay,
          ease,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function DesignServicesHero() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!sectionRef.current || !mediaRef.current) return;

      gsap.fromTo(
        mediaRef.current,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 2.2,
          ease: "power4.out",
        },
      );

      gsap.to(mediaRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92svh] overflow-hidden bg-[#0a0a0a] text-white lg:min-h-screen"
    >
      <div className="absolute inset-0 overflow-hidden">
        <HeroMedia media={heroMedia} mediaRef={mediaRef} />

        <div className="pointer-events-none absolute inset-0 bg-black/15" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/92 via-black/48 to-black/5" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/5 to-black/28" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/15" />

      <div className="relative z-20 mx-auto flex min-h-[92svh] max-w-[1800px] flex-col justify-between px-6 pb-8 pt-8 sm:px-10 sm:pb-10 lg:min-h-screen lg:px-16 lg:pb-14 lg:pt-10">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.85,
              ease,
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-white/45" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
              Merbi Creative
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              delay: 0.42,
              duration: 0.9,
              ease,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/5 backdrop-blur-md"
          >
            <Asterisk size={17} strokeWidth={1.4} />
          </motion.div>
        </div>

        <div className="mt-auto">
          <div className="max-w-[1400px]">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.36,
                duration: 0.85,
                ease,
              }}
              className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#efb59e] sm:text-[11px]"
            >
              Identity · Packaging · Digital · Campaigns
            </motion.p>

            <RevealLine delay={0.08}>
              <h1 className="max-w-[1320px] text-[52px] font-normal leading-[0.88] tracking-[-0.068em] sm:text-[74px] md:text-[92px] lg:text-[112px] xl:text-[132px]">
                Design that helps
              </h1>
            </RevealLine>

            <RevealLine delay={0.14}>
              <h1 className="max-w-[1320px] font-serif text-[55px] font-normal italic leading-[0.9] tracking-[-0.045em] text-[#efb59e] sm:text-[78px] md:text-[96px] lg:text-[118px] xl:text-[138px]">
                a business feel like itself.
              </h1>
            </RevealLine>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.66,
              duration: 1,
              ease,
            }}
            className="mt-9 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[1fr_auto] md:items-end lg:mt-12"
          >
            <div className="max-w-[790px]">
              <p className="text-[17px] leading-[1.58] tracking-[-0.025em] text-white/76 sm:text-[19px] lg:text-[21px]">
                Merbi creates identities, packaging, digital experiences, and
                campaign worlds that give businesses a clearer voice and a
                stronger place in people&apos;s lives.
              </p>

              <p className="mt-4 max-w-[690px] text-[14px] leading-[1.7] text-white/52 sm:text-[15px]">
                We bring strategy and craft together so every visual decision
                feels connected to the story, community, and future of the
                business.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full bg-white px-8 text-[13px] font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#efb59e]"
              >
                Start a conversation
                <ArrowRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#design-services"
                className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-white/30 px-8 text-[13px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Explore our work
                <ArrowDown
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#design-services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        className="absolute bottom-8 right-7 z-30 hidden h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:flex lg:bottom-14 lg:right-16 lg:h-16 lg:w-16"
        aria-label="Explore Merbi design services"
      >
        <ArrowDown size={18} strokeWidth={1.4} />
      </motion.a>
    </section>
  );
}
