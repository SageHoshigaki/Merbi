// src/components/MarketingStrat/MarketingStrategyHero.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import {
  ArrowDown,
  ArrowRight,
  Asterisk,
  Eye,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const heroMedia = {
  type: "video",
  src: "/videos/infl.mp4",
  poster: "/images/marketingstrat/infl-poster.jpg",
  position: "center",
};

// Image version:
//
// const heroMedia = {
//   type: "image",
//   src: "/images/marketingstrat/marketing-hero.jpg",
//   alt: "A creator connecting with her audience during a live campaign",
//   position: "center",
// };

const liveComments = [
  {
    name: "maya.r",
    comment: "this shade is perfect",
    delay: 1.2,
  },
  {
    name: "nina",
    comment: "wait I need this",
    delay: 2.8,
  },
  {
    name: "jules",
    comment: "where can I get it?",
    delay: 4.4,
  },
];

const floatingHearts = [
  {
    id: 1,
    left: "8%",
    delay: 0,
    duration: 4.8,
    size: 16,
  },
  {
    id: 2,
    left: "42%",
    delay: 1,
    duration: 5.2,
    size: 20,
  },
  {
    id: 3,
    left: "70%",
    delay: 2.1,
    duration: 4.5,
    size: 14,
  },
  {
    id: 4,
    left: "28%",
    delay: 3.2,
    duration: 5.5,
    size: 18,
  },
];

function HeroMedia({ media, mediaRef }) {
  if (!media?.src) return null;

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
        disablePictureInPicture
        controls={false}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: media.position || "center",
        }}
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
      style={{
        objectPosition: media.position || "center",
      }}
    />
  );
}

function RevealLine({ children, delay = 0, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{
          y: "115%",
        }}
        animate={{
          y: "0%",
        }}
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

function FloatingHeart({ heart }) {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        y: -150,
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1, 0.9],
        x: [0, 8, -5, 4],
      }}
      transition={{
        duration: heart.duration,
        delay: heart.delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute bottom-0 text-[#ff5c77]"
      style={{
        left: heart.left,
      }}
    >
      <Heart size={heart.size} strokeWidth={1.4} fill="currentColor" />
    </motion.div>
  );
}

function SocialLiveOverlay() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 24,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.8,
        duration: 1,
        ease,
      }}
      className="pointer-events-none absolute bottom-[220px] right-5 top-24 z-10 hidden w-[270px] flex-col justify-between sm:flex lg:bottom-[250px] lg:right-12 lg:top-28 lg:w-[310px]"
    >
      <div className="flex items-center justify-end gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3.5 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5368] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5368]" />
          </span>

          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
            Live
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3.5 py-2 text-white backdrop-blur-md">
          <Eye size={13} strokeWidth={1.5} />

          <motion.span
            animate={{
              opacity: [0.72, 1, 0.72],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-[10px] font-medium"
          >
            12.8K
          </motion.span>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md">
          <MoreHorizontal size={15} strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative ml-auto h-[190px] w-[60px] overflow-hidden">
        {floatingHearts.map((heart) => (
          <FloatingHeart key={heart.id} heart={heart} />
        ))}
      </div>

      <div className="space-y-3">
        {liveComments.map((item) => (
          <motion.div
            key={`${item.name}-${item.comment}`}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              y: [18, 0, 0, -3],
            }}
            transition={{
              delay: item.delay,
              duration: 1,
              ease,
            }}
            className="max-w-[250px] rounded-[18px] border border-white/20 bg-black/25 px-4 py-3 text-white backdrop-blur-md"
          >
            <p className="text-[10px] font-semibold text-white/80">
              {item.name}
            </p>

            <p className="mt-1 text-[12px] leading-[1.35] text-white/90">
              {item.comment}
            </p>
          </motion.div>
        ))}

        <div className="flex items-center gap-3 rounded-full border border-white/25 bg-black/20 p-1.5 pl-4 text-white backdrop-blur-md">
          <MessageCircle
            size={14}
            strokeWidth={1.5}
            className="shrink-0 text-white/60"
          />

          <span className="flex-1 text-[10px] text-white/55">
            Add a comment...
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
            <Send size={12} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MarketingStrategyHero() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!mediaRef.current || !sectionRef.current) return;

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

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/48 to-black/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/30" />
      </div>

      <SocialLiveOverlay />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/15" />

      <div className="relative z-20 mx-auto flex min-h-[92svh] max-w-[1800px] flex-col justify-between px-6 pb-8 pt-8 sm:px-10 sm:pb-10 lg:min-h-screen lg:px-16 lg:pb-14 lg:pt-10">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.85,
              ease,
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-white/45" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
              Merbi Marketing
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              rotate: -45,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.9,
              ease,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/5 backdrop-blur-md"
          >
            <Asterisk size={17} strokeWidth={1.4} />
          </motion.div>
        </div>

        <div className="mt-auto">
          <div className="max-w-[1220px]">
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.38,
                duration: 0.85,
                ease,
              }}
              className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#efb59e] sm:text-[11px]"
            >
              Strategy · Creative · Community · Growth
            </motion.p>

            <RevealLine delay={0.08}>
              <h1 className="max-w-[1180px] text-[50px] font-normal leading-[0.88] tracking-[-0.068em] sm:text-[72px] md:text-[88px] lg:text-[104px] xl:text-[122px]">
                Helping businesses
              </h1>
            </RevealLine>

            <RevealLine delay={0.14}>
              <h1 className="max-w-[1180px] font-serif text-[53px] font-normal italic leading-[0.9] tracking-[-0.045em] text-[#efb59e] sm:text-[76px] md:text-[92px] lg:text-[110px] xl:text-[128px]">
                find their people.
              </h1>
            </RevealLine>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.66,
              duration: 1,
              ease,
            }}
            className="mt-9 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[1fr_auto] md:items-end lg:mt-12"
          >
            <div className="max-w-[760px]">
              <p className="text-[17px] leading-[1.58] tracking-[-0.025em] text-white/76 sm:text-[19px] lg:text-[21px]">
                Merbi helps businesses understand what makes them meaningful,
                connect with the communities they belong to, and turn that
                connection into lasting growth.
              </p>

              <p className="mt-4 max-w-[690px] text-[14px] leading-[1.7] text-white/52 sm:text-[15px]">
                From brand strategy and campaign direction to content, media,
                digital experiences, and the wider Merbi ecosystem, we bring the
                right people and tools together around your business.
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
                href="#marketing-disciplines"
                className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-white/30 px-8 text-[13px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                See how we help
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
        href="#marketing-disciplines"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        className="absolute bottom-8 right-7 z-30 hidden h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:flex lg:bottom-14 lg:right-16 lg:h-16 lg:w-16"
        aria-label="Scroll to marketing services"
      >
        <ArrowDown size={18} strokeWidth={1.4} />
      </motion.a>
    </section>
  );
}
