// src/components/MarketingStrategyShowcase.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";
import { ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const strategyCards = [
  {
    id: "listen",
    number: "01",
    eyebrow: "Listen closely",
    titleItalic: "Understand",
    titleMain: "what matters",
    description:
      "We look beyond surface trends to understand the people, habits, pressures, and cultural shifts shaping the business.",
    media: {
      type: "image",
      src: "/images/marketingstrat/room1.png",
      alt: "A space representing cultural observation and audience insight",
    },
    position: "center",
  },
  {
    id: "define",
    number: "02",
    eyebrow: "Find the opening",
    titleItalic: "Define",
    titleMain: "the opportunity",
    description:
      "We identify the place the business can credibly own and the role it can play in the lives of the people it serves.",
    media: {
      type: "image",
      src: "/images/marketingstrat/room4.png",
      alt: "A strategic environment representing brand direction",
    },
    position: "center",
  },
  {
    id: "shape",
    number: "03",
    eyebrow: "Give it form",
    titleItalic: "Shape",
    titleMain: "the expression",
    description:
      "The strategy becomes language, imagery, campaigns, content, and experiences that feel unmistakably connected.",
    media: {
      type: "video",
      src: "/images/marketingstrat/workshop.mp4",
      poster: "/images/marketingstrat/workshop-poster.jpg",
      alt: "A creative workshop bringing a brand idea to life",
    },
    position: "center",
  },
  {
    id: "release",
    number: "04",
    eyebrow: "Meet people well",
    titleItalic: "Enter",
    titleMain: "the conversation",
    description:
      "We place the work into the channels, environments, and moments where it can feel natural rather than imposed.",
    media: {
      type: "video",
      src: "/images/marketingstrat/greenroom1.mp4",
      poster: "/images/marketingstrat/greenroom1-poster.jpg",
      alt: "A campaign entering culture and community",
    },
    position: "center",
  },
  {
    id: "grow",
    number: "05",
    eyebrow: "Keep learning",
    titleItalic: "Build",
    titleMain: "from response",
    description:
      "We pay attention to what people return to, share, remember, and choose—then use those signals to strengthen what comes next.",
    media: {
      type: "video",
      src: "/videos/marketgirl.mp4",
      poster: "/images/marketingstrat/nike-poster.jpg",
      alt: "A finished campaign creating audience response",
    },
    position: "center",
  },
];

const workingPrinciples = [
  {
    number: "01",
    title: "Start with context",
    description:
      "The market, community, category, and business all shape the right answer.",
  },
  {
    number: "02",
    title: "Choose a clear point of view",
    description:
      "The work becomes stronger when every decision grows from one central belief.",
  },
  {
    number: "03",
    title: "Build a recognizable world",
    description:
      "Words, images, experiences, and campaigns should feel related without becoming repetitive.",
  },
  {
    number: "04",
    title: "Create room for response",
    description:
      "Good marketing invites people in rather than simply speaking at them.",
  },
  {
    number: "05",
    title: "Learn without losing the idea",
    description:
      "Audience response should sharpen the work, not flatten what makes it distinct.",
  },
];

function MediaAsset({ media, mediaRef, position = "center" }) {
  if (!media?.src) return null;

  const className =
    "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]";

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
        style={{ objectPosition: position }}
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
      style={{ objectPosition: position }}
    />
  );
}

function StrategyCard({ card, index }) {
  const cardRef = useRef(null);
  const mediaRef = useRef(null);

  useVideoAutoPause(mediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!cardRef.current || !mediaRef.current) return;

      gsap.fromTo(
        mediaRef.current,
        {
          scale: 1.08,
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
        y: 48,
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
        delay: index * 0.06,
        ease,
      }}
      className="group relative min-h-[620px] overflow-hidden bg-[#111] sm:min-h-[700px] lg:min-h-[760px]"
    >
      <MediaAsset
        media={card.media}
        mediaRef={mediaRef}
        position={card.position}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/12 to-black/15" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-white sm:p-8">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/62">
          {card.eyebrow}
        </p>

        <span className="text-[10px] font-medium tracking-[0.18em] text-white/45">
          {card.number}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-9">
        <h3 className="max-w-[500px] text-[45px] font-normal leading-[0.9] tracking-[-0.06em] sm:text-[56px] lg:text-[63px]">
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
            aria-label={`Discuss ${card.titleItalic} ${card.titleMain}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black"
          >
            <ArrowUpRight size={16} strokeWidth={1.4} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function WorkingPrinciples() {
  return (
    <section
      id="merbi-working-principles"
      className="bg-[#f0ede5] px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-14 border-t border-black/15 pt-7 lg:grid-cols-[0.38fr_0.62fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-black/30" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/48">
                Principles behind the work
              </p>
            </div>

            <h3 className="mt-10 max-w-[590px] text-[48px] font-normal leading-[0.95] tracking-[-0.058em] sm:text-[62px] lg:text-[72px]">
              Clear thinking.
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a83e31]">
                Human judgment.
              </span>
            </h3>

            <p className="mt-8 max-w-[520px] text-[16px] leading-[1.72] text-black/56 sm:text-[17px]">
              Our process gives the work direction without turning creativity
              into a formula. The structure is there to protect the idea, not
              replace instinct.
            </p>
          </div>

          <div className="border-t border-black/20">
            {workingPrinciples.map((principle) => (
              <motion.div
                key={principle.number}
                initial="rest"
                whileHover="hover"
                className="group relative overflow-hidden border-b border-black/20"
              >
                <motion.div
                  variants={{
                    rest: {
                      scaleY: 0,
                    },
                    hover: {
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease,
                  }}
                  className="absolute inset-0 origin-bottom bg-[#111]"
                />

                <div className="relative z-10 grid min-h-[132px] gap-5 py-7 sm:grid-cols-[65px_0.65fr_1fr_auto] sm:items-center sm:gap-7 sm:py-0">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black/40 transition-colors duration-300 group-hover:text-white/38">
                    {principle.number}
                  </span>

                  <h4 className="text-[25px] font-normal leading-[1.05] tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-white sm:text-[30px]">
                    {principle.title}
                  </h4>

                  <p className="max-w-[520px] text-[14px] leading-[1.65] text-black/52 transition-colors duration-300 group-hover:text-white/55">
                    {principle.description}
                  </p>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#efb59e] group-hover:bg-[#efb59e] sm:flex">
                    <ArrowRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-colors duration-300 group-hover:text-black"
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

export default function MarketingStrategyShowcase() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const revealItems = introRef.current?.querySelectorAll(
        "[data-showcase-reveal]",
      );

      if (!revealItems?.length) return;

      gsap.fromTo(
        revealItems,
        {
          y: 42,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 76%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="marketing-strategy"
        className="relative overflow-hidden bg-[#111] text-white"
      >
        <div className="mx-auto max-w-[1800px] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
          <div
            ref={introRef}
            className="grid gap-12 border-t border-white/15 pt-7 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20"
          >
            <div
              data-showcase-reveal
              className="flex items-start justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-white/35" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/48">
                  From understanding to action
                </p>
              </div>

              <Asterisk
                size={16}
                strokeWidth={1.4}
                className="text-[#efb59e] lg:hidden"
              />
            </div>

            <div>
              <p
                data-showcase-reveal
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#efb59e]"
              >
                Listen · Define · Shape · Release · Learn
              </p>

              <h2
                data-showcase-reveal
                className="mt-7 max-w-[1120px] text-[50px] font-normal leading-[0.94] tracking-[-0.062em] sm:text-[68px] lg:text-[84px] xl:text-[96px]"
              >
                Good strategy does not sit
                <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#efb59e]">
                  quietly in a presentation.
                </span>
              </h2>

              <div
                data-showcase-reveal
                className="mt-10 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-[0.9fr_1.1fr]"
              >
                <p className="max-w-[520px] text-[18px] leading-[1.55] tracking-[-0.025em] text-white/72 sm:text-[20px]">
                  It should shape what the business says, creates, launches, and
                  learns from next.
                </p>

                <p className="max-w-[610px] text-[15px] leading-[1.72] text-white/48">
                  Merbi carries each idea from its earliest context into the
                  places where people encounter it. The work evolves along the
                  way, but the original point of view stays intact.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {strategyCards.map((card, index) => (
              <StrategyCard key={card.id} card={card} index={index} />
            ))}
          </div>

          <div className="mt-12 flex justify-end border-b border-white/15 pb-9">
            <a
              href="#contact"
              className="group inline-flex items-center gap-5 text-[13px] font-semibold text-white"
            >
              Shape the next chapter
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <WorkingPrinciples />

      <section className="bg-[#a83e31] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-[1800px] flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <h3 className="max-w-[1080px] text-[43px] font-normal leading-[0.96] tracking-[-0.055em] sm:text-[58px] lg:text-[72px]">
            The work should help a business become more itself—
            <span className="font-serif font-normal italic text-[#f4d6c8]">
              not more like everyone else.
            </span>
          </h3>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-5 border-b border-white/35 pb-3 text-[13px] font-semibold transition-colors duration-300 hover:border-white"
          >
            Talk with Merbi
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </>
  );
}
