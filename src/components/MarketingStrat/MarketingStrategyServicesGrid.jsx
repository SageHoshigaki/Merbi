// src/components/MarketingStrategyServicesGrid.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import { ArrowUpRight, Asterisk } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const serviceCards = [
  {
    number: "01",
    eyebrow: "See clearly",
    titleItalic: "Read",
    titleMain: "the room",
    description:
      "We study the people, habits, tensions, and shifts shaping the space around your business—then find the opening others have missed.",
    media: {
      type: "video",
      src: "/images/marketingstrat/airplane.mp4",
      poster: "/images/marketingstrat/airplane.png",
      alt: "Cultural and audience research in motion",
    },
    position: "center",
  },
  {
    number: "02",
    eyebrow: "Stand for something",
    titleItalic: "Find",
    titleMain: "your ground",
    description:
      "We define the role your business can own, the story it should tell, and the creative direction that makes it unmistakably yours.",
    media: {
      type: "video",
      src: "/images/marketingstrat/african.mp4",
      poster: "/images/marketingstrat/image 25.png",
      alt: "Creative direction and brand expression",
    },
    position: "center",
  },
  {
    number: "03",
    eyebrow: "Move with purpose",
    titleItalic: "Enter",
    titleMain: "the world",
    description:
      "We shape the campaign, content, channels, and moments that introduce the work with intention—and give people a reason to respond.",
    media: {
      type: "video",
      src: "/images/marketingstrat/auto.mp4",
      poster: "/images/marketingstrat/image 24.png",
      alt: "A campaign moving from idea into the world",
    },
    position: "center",
  },
];

function MediaAsset({ media, mediaRef, position = "center" }) {
  if (!media?.src) return null;

  const sharedStyles = {
    objectPosition: position,
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
        className="absolute inset-0 h-full w-full object-cover"
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
      className="absolute inset-0 h-full w-full object-cover"
      style={sharedStyles}
    />
  );
}

function ServiceCard({ card, index }) {
  const cardRef = useRef(null);
  const mediaRef = useRef(null);

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!mediaRef.current || !cardRef.current) return;

      gsap.fromTo(
        mediaRef.current,
        {
          scale: 1.1,
          yPercent: -2,
        },
        {
          scale: 1,
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, cardRef);

    return () => context.revert();
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 44,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        duration: 1,
        delay: index * 0.08,
        ease,
      }}
      className="group relative min-h-[660px] overflow-hidden bg-[#111] sm:min-h-[740px] xl:min-h-[820px]"
    >
      <MediaAsset
        media={card.media}
        mediaRef={mediaRef}
        position={card.position}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/15 to-black/15" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-white sm:p-8 lg:p-9">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/58">
            {card.eyebrow}
          </p>
        </div>

        <span className="text-[10px] font-medium tracking-[0.18em] text-white/48">
          {card.number}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-9 xl:p-10">
        <h3 className="max-w-[520px] text-[46px] font-normal leading-[0.88] tracking-[-0.062em] sm:text-[58px] lg:text-[62px] xl:text-[70px]">
          <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#efb59e]">
            {card.titleItalic}
          </span>

          <span className="block">{card.titleMain}</span>
        </h3>

        <div className="mt-7 flex items-end justify-between gap-8 border-t border-white/25 pt-5">
          <p className="max-w-[430px] text-[14px] leading-[1.65] text-white/64 sm:text-[15px]">
            {card.description}
          </p>

          <a
            href="#contact"
            aria-label={`Explore ${card.titleItalic} ${card.titleMain}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black"
          >
            <ArrowUpRight size={16} strokeWidth={1.4} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function MarketingStrategyServicesGrid() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const revealItems = headingRef.current?.querySelectorAll(
        "[data-heading-reveal]",
      );

      if (!revealItems?.length) return;

      gsap.fromTo(
        revealItems,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="marketing-disciplines"
      className="relative overflow-hidden bg-[#f0ede5] px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        <div
          ref={headingRef}
          className="grid gap-12 border-t border-black/15 pt-7 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20"
        >
          <div data-heading-reveal className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-black/30" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/48">
                How we shape the work
              </p>
            </div>

            <Asterisk
              size={16}
              strokeWidth={1.4}
              className="text-[#a83e31] lg:hidden"
            />
          </div>

          <div>
            <p
              data-heading-reveal
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a83e31]"
            >
              Insight · Position · Expression
            </p>

            <h2
              data-heading-reveal
              className="mt-7 max-w-[1120px] text-[50px] font-normal leading-[0.94] tracking-[-0.062em] sm:text-[68px] lg:text-[84px] xl:text-[94px]"
            >
              Before a brand can move people,
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a83e31]">
                it has to know where it stands.
              </span>
            </h2>

            <div
              data-heading-reveal
              className="mt-10 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-[0.9fr_1.1fr]"
            >
              <p className="max-w-[500px] text-[18px] leading-[1.55] tracking-[-0.025em] text-black/68 sm:text-[20px]">
                Our role is to bring focus to the decisions that shape how a
                business is understood, remembered, and welcomed.
              </p>

              <p className="max-w-[600px] text-[15px] leading-[1.72] text-black/52">
                We look closely at the world around the business, define the
                ground it can confidently own, and create a path from intention
                to expression. Each stage gives the next one more meaning.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-3 lg:grid-cols-3 lg:gap-4">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={`${card.titleItalic}-${card.titleMain}`}
              card={card}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end border-b border-black/15 pb-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-[13px] font-semibold text-black"
          >
            Build the right direction together
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
