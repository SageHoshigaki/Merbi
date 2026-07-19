// src/components/Competitive/CompetitiveContentHero.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import { ArrowDown, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const heroMedia = {
  src: "/videos/comp-hero.mp4",
  poster: "/images/competitive/competitive-content-poster.jpg",
  alt: "Merbi competitive content campaigns and creative direction",
  position: "center",
};

function RevealLine({ children, delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "112%" }}
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

export default function CompetitiveContentHero() {
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
      className="relative min-h-[92svh] overflow-hidden bg-black text-white lg:min-h-screen"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={mediaRef}
          poster={heroMedia.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-label={heroMedia.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: heroMedia.position }}
          onCanPlay={(event) => {
            const video = event.currentTarget;

            if (video.paused) {
              video.play().catch(() => {});
            }
          }}
        >
          <source src={heroMedia.src} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-black/18" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/92 via-black/48 to-black/8" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/5 to-black/24" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1800px] flex-col justify-between px-6 pb-8 pt-8 sm:px-10 sm:pb-10 lg:min-h-screen lg:px-16 lg:pb-14 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.24,
            duration: 0.8,
            ease,
          }}
          className="flex items-center justify-between border-t border-white/20 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/58">
            Merbi / Competitive content
          </p>

          <p className="hidden text-[10px] tracking-[0.12em] text-white/34 sm:block">
            Creative presence across every channel
          </p>
        </motion.div>

        <div className="mt-auto">
          <div className="max-w-[1540px]">
            <RevealLine delay={0.04}>
              <h1 className="text-[52px] font-normal leading-[0.87] tracking-[-0.07em] sm:text-[76px] md:text-[94px] lg:text-[116px] xl:text-[136px]">
                Stay present without
              </h1>
            </RevealLine>

            <RevealLine delay={0.1}>
              <h1 className="font-serif text-[55px] font-normal italic leading-[0.9] tracking-[-0.045em] text-[#efc4b1] sm:text-[80px] md:text-[99px] lg:text-[122px] xl:text-[142px]">
                sounding like everyone else.
              </h1>
            </RevealLine>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.68,
              duration: 1,
              ease,
            }}
            className="mt-9 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[1fr_auto] md:items-end lg:mt-12"
          >
            <div className="grid max-w-[980px] gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-[790px] text-[17px] leading-[1.58] tracking-[-0.025em] text-white/72 sm:text-[19px] lg:text-[21px]">
                Merbi creates connected content, campaign ideas, and creative
                direction that help businesses keep showing up with relevance,
                personality, and a clear reason for people to pay attention.
              </p>

              <p className="text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.2em] text-white/38">
                Campaigns
                <br />
                Social
                <br />
                Content
                <br />
                Direction
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#competitive-content-introduction"
                className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full bg-white px-8 text-[13px] font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#efc4b1]"
              >
                Explore the practice
                <ArrowDown
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-white/30 px-8 text-[13px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
              >
                Start a content project
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#competitive-content-introduction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        aria-label="Explore Merbi competitive content services"
        className="absolute bottom-8 right-7 z-20 hidden h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:flex lg:bottom-14 lg:right-16 lg:h-16 lg:w-16"
      >
        <ArrowDown size={18} strokeWidth={1.4} />
      </motion.a>
    </section>
  );
}
