// src/components/MarketingStrategySection.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import {
  ArrowDownRight,
  ArrowRight,
  Asterisk,
  MoveDown,
  Play,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const heroMedia = {
  type: "video",
  src: "/videos/360.mp4",
  poster: "/images/360-poster.jpg",
  position: "center",
};

// Image version:
//
// const heroMedia = {
//   type: "image",
//   src: "/images/marketing/marketing-hero.jpg",
//   alt: "Merbi marketing and creative campaign",
//   position: "center",
// };

const disciplines = [
  {
    id: "strategy",
    number: "01",
    eyebrow: "Begin with what matters",
    title: "Brand strategy",
    statement:
      "We help businesses understand what makes them valuable, who they are here to serve, and where they can make a meaningful difference.",
    description:
      "That clarity becomes a shared foundation for the story, identity, decisions, and opportunities that follow.",
    capabilities: [
      "Research and insight",
      "Audience understanding",
      "Brand positioning",
      "Naming and messaging",
    ],
    media: {
      type: "video",
      src: "/videos/360.mp4",
      poster: "/images/360-poster.jpg",
      alt: "Brand strategy campaign",
    },
    mediaPosition: "center",
    tone: "light",
  },
  {
    id: "identity",
    number: "02",
    eyebrow: "Give the business a voice",
    title: "Creative identity",
    statement:
      "We shape the visual and verbal character that allows a business to feel recognizable, consistent, and fully itself.",
    description:
      "From identity and packaging to digital experiences and campaign language, every expression grows from one considered point of view.",
    capabilities: [
      "Creative direction",
      "Visual identity",
      "Packaging design",
      "Brand systems",
    ],
    media: {
      type: "image",
      src: "/images/jc.jpg",
      alt: "Creative identity and packaging design",
    },
    mediaPosition: "center",
    tone: "dark",
  },
  {
    id: "campaigns",
    number: "03",
    eyebrow: "Create something worth sharing",
    title: "Campaigns",
    statement:
      "We turn strong ideas into experiences that invite people to notice, participate, and carry the story forward.",
    description:
      "Each campaign is built as a connected world that can move across screens, spaces, conversations, and communities without losing its heart.",
    capabilities: [
      "Campaign concepts",
      "Art direction",
      "Content systems",
      "Launch campaigns",
    ],
    media: {
      type: "image",
      src: "/images/fashion.jpg",
      alt: "Merbi fashion campaign",
    },
    mediaPosition: "center",
    tone: "light",
  },
  {
    id: "growth",
    number: "04",
    eyebrow: "Build on what people value",
    title: "Growth",
    statement:
      "We help businesses turn attention into trust, trust into participation, and participation into steady forward movement.",
    description:
      "By learning from real response, we improve the message, the experience, and the support around the business while protecting what makes it distinct.",
    capabilities: [
      "Media strategy",
      "Creative learning",
      "Customer journeys",
      "Performance insight",
    ],
    media: {
      type: "image",
      src: "/images/tennis.png",
      alt: "Marketing growth campaign",
    },
    mediaPosition: "center",
    tone: "dark",
  },
];

const process = [
  {
    number: "01",
    title: "Listen",
    description:
      "We spend time with the business, its people, its customers, and the world taking shape around it.",
  },
  {
    number: "02",
    title: "Focus",
    description:
      "We identify the opportunity, the central idea, and the decisions that deserve everyone’s attention.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We bring the idea to life through identity, campaigns, content, experiences, and the right supporting tools.",
  },
  {
    number: "04",
    title: "Share",
    description:
      "We introduce the work in the places and moments where it can meet people naturally and meaningfully.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "We learn from response, strengthen what is working, and help the business keep moving with confidence.",
  },
];

const marqueeItems = [
  "Brand strategy",
  "Creative direction",
  "Visual identity",
  "Packaging",
  "Campaigns",
  "Content",
  "Digital experiences",
  "Media",
  "Growth",
];

function MediaAsset({
  media,
  mediaRef,
  className = "",
  position = "center",
  priority = false,
}) {
  if (!media?.src) return null;

  if (media.type === "video") {
    return (
      <video
        ref={mediaRef}
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={media.alt || undefined}
        aria-hidden={!media.alt}
        className={className}
        style={{ objectPosition: position }}
      />
    );
  }

  return (
    <img
      ref={mediaRef}
      src={media.src}
      alt={media.alt ?? ""}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
      style={{ objectPosition: position }}
    />
  );
}

function RevealText({ children, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 1, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!mediaRef.current || !heroRef.current) return;

      gsap.fromTo(
        mediaRef.current,
        {
          scale: 1.12,
        },
        {
          scale: 1,
          duration: 2.2,
          ease: "power4.out",
        },
      );

      gsap.to(mediaRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[88svh] overflow-hidden bg-[#080808] text-white lg:min-h-screen"
    >
      <div className="absolute inset-0 overflow-hidden">
        <MediaAsset
          media={heroMedia}
          mediaRef={mediaRef}
          priority
          position={heroMedia.position ?? "center"}
          className="h-[115%] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/15" />

      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1800px] flex-col justify-between px-6 pb-8 pt-8 sm:px-10 sm:pb-10 lg:min-h-screen lg:px-16 lg:pb-14 lg:pt-10">
        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60"
          >
            Merbi — Marketing and creative
          </motion.p>

          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 backdrop-blur-md"
          >
            <Asterisk size={17} strokeWidth={1.5} />
          </motion.div>
        </div>

        <div className="mt-auto">
          <div className="max-w-[1400px]">
            <RevealText>
              <h1 className="text-[51px] font-normal leading-[0.86] tracking-[-0.067em] sm:text-[76px] md:text-[92px] lg:text-[116px] xl:text-[138px]">
                We help businesses
              </h1>
            </RevealText>

            <RevealText>
              <h1 className="font-serif text-[55px] font-normal italic leading-[0.88] tracking-[-0.045em] text-[#f2d4c2] sm:text-[80px] md:text-[98px] lg:text-[122px] xl:text-[144px]">
                become more themselves.
              </h1>
            </RevealText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1, ease }}
            className="mt-9 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[1fr_auto] md:items-end lg:mt-12"
          >
            <p className="max-w-[760px] text-[16px] leading-[1.62] tracking-[-0.02em] text-white/72 sm:text-[18px] lg:text-[20px]">
              Merbi brings strategy, creative direction, media, digital
              experiences, and the wider support around a business together so
              it can connect more deeply, move with purpose, and reach its full
              potential.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-4 rounded-full bg-white px-7 text-[13px] font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Start a conversation
                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#marketing-disciplines"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/35 px-7 text-[13px] font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
              >
                <Play size={13} fill="currentColor" />
                See how we help
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#marketing-disciplines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-7 z-20 hidden h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black sm:flex lg:right-16 lg:h-16 lg:w-16"
        aria-label="Explore Merbi marketing services"
      >
        <MoveDown size={18} strokeWidth={1.4} />
      </motion.a>
    </div>
  );
}

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-black/15 bg-[#f0ede5] py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex shrink-0 items-center">
            <span className="px-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60 sm:px-10">
              {item}
            </span>

            <Asterisk size={13} strokeWidth={1.4} className="text-[#a93c2f]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Introduction() {
  return (
    <div className="bg-[#f0ede5] px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-8 bg-black/30" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/50">
                What we believe
              </p>
            </motion.div>
          </div>

          <div>
            <RevealText>
              <h2 className="max-w-[1050px] text-[44px] font-normal leading-[0.98] tracking-[-0.055em] sm:text-[60px] lg:text-[76px]">
                People rarely remember every message.
              </h2>
            </RevealText>

            <RevealText>
              <h2 className="mt-1 max-w-[1050px] font-serif text-[44px] font-normal italic leading-[0.98] tracking-[-0.035em] text-[#a93c2f] sm:text-[60px] lg:text-[76px]">
                They remember how a business made them feel.
              </h2>
            </RevealText>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="max-w-[500px] text-[16px] leading-[1.7] tracking-[-0.018em] text-black/60"
              >
                We look for the truth at the center of the business: the need it
                answers, the people behind it, and the place it hopes to earn in
                the lives of others.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.8, ease }}
                className="max-w-[500px] text-[16px] leading-[1.7] tracking-[-0.018em] text-black/60"
              >
                From there, Merbi brings the right story, creative work,
                channels, tools, and partnerships together around a direction
                the whole business can believe in.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisciplineRow({ discipline, index }) {
  const rowRef = useRef(null);
  const mediaRef = useRef(null);
  const isDark = discipline.tone === "dark";

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!mediaRef.current || !rowRef.current) return;

      gsap.fromTo(
        mediaRef.current,
        {
          scale: 1.1,
          yPercent: -4,
        },
        {
          scale: 1,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: rowRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, rowRef);

    return () => context.revert();
  }, []);

  return (
    <article
      ref={rowRef}
      className={[
        "grid border-t",
        isDark
          ? "border-white/15 bg-[#0b0b0b] text-white"
          : "border-black/15 bg-[#f0ede5] text-[#111]",
        "lg:grid-cols-2",
      ].join(" ")}
    >
      <div
        className={[
          "relative flex min-h-[520px] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[720px] lg:px-14 lg:py-14 xl:px-16",
          index % 2 !== 0 ? "lg:order-2" : "",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          <span
            className={[
              "text-[11px] font-semibold tracking-[0.2em]",
              isDark ? "text-white/40" : "text-black/40",
            ].join(" ")}
          >
            {discipline.number}
          </span>

          <ArrowDownRight
            size={19}
            strokeWidth={1.3}
            className={isDark ? "text-white/55" : "text-black/55"}
          />
        </div>

        <div className="max-w-[700px]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, ease }}
            className={[
              "mb-6 text-[10px] font-semibold uppercase tracking-[0.22em]",
              isDark ? "text-[#e7a98f]" : "text-[#a93c2f]",
            ].join(" ")}
          >
            {discipline.eyebrow}
          </motion.p>

          <RevealText>
            <h3 className="text-[48px] font-normal leading-[0.92] tracking-[-0.06em] sm:text-[62px] lg:text-[76px] xl:text-[86px]">
              {discipline.title}
            </h3>
          </RevealText>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: 0.1, duration: 0.8, ease }}
            className={[
              "mt-8 max-w-[610px] text-[20px] leading-[1.45] tracking-[-0.028em] sm:text-[22px]",
              isDark ? "text-white/75" : "text-black/70",
            ].join(" ")}
          >
            {discipline.statement}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: 0.16, duration: 0.8, ease }}
            className={[
              "mt-6 max-w-[570px] text-[15px] leading-[1.7]",
              isDark ? "text-white/48" : "text-black/48",
            ].join(" ")}
          >
            {discipline.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={[
              "mt-10 grid grid-cols-2 border-t",
              isDark ? "border-white/15" : "border-black/15",
            ].join(" ")}
          >
            {discipline.capabilities.map((capability, capabilityIndex) => (
              <div
                key={capability}
                className={[
                  "flex min-h-[64px] items-center border-b text-[11px] font-semibold uppercase tracking-[0.15em]",
                  isDark
                    ? "border-white/15 text-white/55"
                    : "border-black/15 text-black/55",
                  capabilityIndex % 2 === 0
                    ? isDark
                      ? "border-r border-white/15 pr-4"
                      : "border-r border-black/15 pr-4"
                    : "pl-5",
                ].join(" ")}
              >
                {capability}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className={[
          "group relative min-h-[520px] overflow-hidden bg-[#161616] lg:min-h-[720px]",
          index % 2 !== 0 ? "lg:order-1" : "",
        ].join(" ")}
      >
        <MediaAsset
          media={discipline.media}
          mediaRef={mediaRef}
          position={discipline.mediaPosition}
          className="absolute -inset-y-[8%] h-[116%] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
            Merbi / {discipline.title}
          </p>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
            <ArrowRight size={16} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </article>
  );
}

function Disciplines() {
  return (
    <div id="marketing-disciplines">
      {disciplines.map((discipline, index) => (
        <DisciplineRow
          key={discipline.id}
          discipline={discipline}
          index={index}
        />
      ))}
    </div>
  );
}

function Process() {
  return (
    <section className="bg-[#c74332] px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/55"
            >
              How we work together
            </motion.p>

            <RevealText className="mt-7">
              <h3 className="max-w-[580px] text-[48px] font-normal leading-[0.94] tracking-[-0.06em] sm:text-[64px] lg:text-[78px]">
                Clear enough to guide us.
              </h3>
            </RevealText>

            <RevealText>
              <h3 className="max-w-[580px] font-serif text-[48px] font-normal italic leading-[0.94] tracking-[-0.04em] text-[#f4dfd2] sm:text-[64px] lg:text-[78px]">
                Open enough to surprise us.
              </h3>
            </RevealText>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="mt-8 max-w-[500px] text-[16px] leading-[1.68] text-black/65"
            >
              We bring structure to the work without squeezing out curiosity,
              instinct, or the unexpected ideas that often make a project
              memorable.
            </motion.p>
          </div>

          <div className="border-t border-black/25">
            {process.map((step) => (
              <motion.div
                key={step.title}
                initial="rest"
                whileHover="hover"
                className="group relative overflow-hidden border-b border-black/25"
              >
                <motion.div
                  variants={{
                    rest: { scaleY: 0 },
                    hover: { scaleY: 1 },
                  }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute inset-0 origin-bottom bg-[#111]"
                />

                <div className="relative z-10 grid min-h-[155px] gap-5 py-7 sm:grid-cols-[70px_0.55fr_1fr] sm:items-center sm:gap-8 sm:py-0">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-black/45 transition-colors duration-300 group-hover:text-white/40">
                    {step.number}
                  </span>

                  <h4 className="text-[34px] font-normal tracking-[-0.05em] text-black transition-colors duration-300 group-hover:text-white sm:text-[40px]">
                    {step.title}
                  </h4>

                  <div className="flex items-center justify-between gap-8">
                    <p className="max-w-[520px] text-[14px] leading-[1.65] text-black/60 transition-colors duration-300 group-hover:text-white/55">
                      {step.description}
                    </p>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.5}
                      className="hidden shrink-0 text-black/55 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#f2d4c2] sm:block"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingStatement() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
      <div className="pointer-events-none absolute -right-[10%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[#9f382d]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e7a98f]"
            >
              Made to help businesses flourish
            </motion.p>

            <RevealText className="mt-7">
              <h3 className="max-w-[1200px] text-[48px] font-normal leading-[0.92] tracking-[-0.06em] sm:text-[66px] lg:text-[88px] xl:text-[104px]">
                The goal is not simply
              </h3>
            </RevealText>

            <RevealText>
              <h3 className="max-w-[1200px] font-serif text-[48px] font-normal italic leading-[0.92] tracking-[-0.04em] text-[#e7a98f] sm:text-[66px] lg:text-[88px] xl:text-[104px]">
                to be seen.
              </h3>
            </RevealText>

            <RevealText>
              <h3 className="mt-1 max-w-[1200px] text-[48px] font-normal leading-[0.92] tracking-[-0.06em] sm:text-[66px] lg:text-[88px] xl:text-[104px]">
                It is to become worth
              </h3>
            </RevealText>

            <RevealText>
              <h3 className="max-w-[1200px] font-serif text-[48px] font-normal italic leading-[0.92] tracking-[-0.04em] text-[#e7a98f] sm:text-[66px] lg:text-[88px] xl:text-[104px]">
                returning to.
              </h3>
            </RevealText>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="mt-10 max-w-[740px] text-[17px] leading-[1.68] tracking-[-0.02em] text-white/58 sm:text-[19px]"
            >
              We help businesses build the kind of presence people recognize,
              trust, share, and choose again—supported by the creative,
              strategic, and practical resources needed for what comes next.
            </motion.p>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="group flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-full border border-white/25 text-center transition-all duration-500 hover:scale-105 hover:border-[#e7a98f] hover:bg-[#e7a98f] hover:text-black sm:h-48 sm:w-48"
          >
            <span className="text-[12px] font-semibold">
              Tell us your story
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.4}
              className="mt-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default function MarketingStrategySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const refresh = () => ScrollTrigger.refresh();

      const timeout = window.setTimeout(refresh, 150);

      window.addEventListener("load", refresh);

      return () => {
        window.clearTimeout(timeout);
        window.removeEventListener("load", refresh);
      };
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="marketing-strategy"
      className="relative overflow-hidden bg-[#f0ede5]"
    >
      <Hero />
      <Marquee />
      <Introduction />
      <Disciplines />
      <Process />
      <ClosingStatement />
    </section>
  );
}
