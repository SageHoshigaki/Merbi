// src/components/WebDesign/WebDesignWorkflowSection.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const stages = [
  {
    number: "01",
    title: "Find the story",
    description:
      "We clarify what the business needs people to understand, feel, and do before we begin shaping the screen.",
  },
  {
    number: "02",
    title: "Set the rhythm",
    description:
      "Content, hierarchy, and navigation are arranged so the experience unfolds with a natural sense of pace.",
  },
  {
    number: "03",
    title: "Build the language",
    description:
      "Typography, imagery, motion, and interface details become one recognizable digital expression.",
  },
  {
    number: "04",
    title: "Refine the experience",
    description:
      "We test the work across screens, remove friction, and stay with the details until everything feels resolved.",
  },
];

const media = {
  src: "/videos/drip.mp4",
  poster: "/images/web-design/web-design-process.jpg",
  position: "center center",
  alt: "Merbi website strategy, interface design, and development process",
};

export default function WebDesignWorkflowSection() {
  const sectionRef = useRef(null);
  const mediaFrameRef = useRef(null);
  const videoRef = useRef(null);
  const headingRef = useRef(null);

  useVideoAutoPause(videoRef);

  useEffect(() => {
    const context = gsap.context(() => {
      if (videoRef.current && mediaFrameRef.current) {
        gsap.fromTo(
          videoRef.current,
          {
            scale: 1.025,
            yPercent: -1,
          },
          {
            scale: 1.055,
            yPercent: 1,
            ease: "none",
            scrollTrigger: {
              trigger: mediaFrameRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      }

      const revealItems = headingRef.current?.querySelectorAll(
        "[data-workflow-reveal]",
      );

      if (revealItems?.length) {
        gsap.fromTo(
          revealItems,
          {
            opacity: 0,
            y: 36,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.09,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 76%",
              once: true,
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
      id="web-design-process"
      className="relative overflow-hidden bg-[#0b0b0a] text-white"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div
          ref={headingRef}
          className="grid gap-14 border-t border-white/15 pt-6 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20"
        >
          <div data-workflow-reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-white/35" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/44">
                How the work takes shape
              </p>
            </div>
          </div>

          <div>
            <p
              data-workflow-reveal
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#efb59e]"
            >
              Thought · Form · Interaction · Finish
            </p>

            <h2
              data-workflow-reveal
              className="mt-7 max-w-[1180px] text-[52px] font-normal leading-[0.92] tracking-[-0.065em] sm:text-[70px] lg:text-[86px] xl:text-[100px]"
            >
              The final website is only
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#efb59e]">
                the visible part of the work.
              </span>
            </h2>

            <div
              data-workflow-reveal
              className="mt-10 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-[0.9fr_1.1fr]"
            >
              <p className="max-w-[530px] text-[19px] leading-[1.55] tracking-[-0.026em] text-white/72 sm:text-[21px]">
                Before a page feels effortless, the story, hierarchy, and
                movement behind it have to be carefully resolved.
              </p>

              <p className="max-w-[620px] text-[15px] leading-[1.75] text-white/46">
                We bring strategy, content, design, motion, and development into
                one continuous process. The work stays close to the original
                idea from the first conversation through the final responsive
                detail.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1, ease }}
          className="relative mt-20 lg:mt-28"
        >
          {/*
            The animation was generated from a 3:2 image.

            Keeping the frame at 3:2 prevents the left packaging and the
            model's face on the right from being cut off.

            The original min-height values created a tall frame and forced
            object-cover to crop large portions of the video.
          */}
          <div
            ref={mediaFrameRef}
            className="relative aspect-[3/2] w-full overflow-hidden bg-[#171614]"
          >
            <video
              ref={videoRef}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              aria-label={media.alt}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                objectPosition: media.position,
              }}
              onLoadedMetadata={(event) => {
                const video = event.currentTarget;

                video.muted = true;
                video.defaultMuted = true;
                video.playsInline = true;
              }}
              onCanPlay={(event) => {
                const video = event.currentTarget;

                if (video.paused) {
                  video.play().catch(() => {});
                }
              }}
            >
              <source src={media.src} type="video/mp4" />
              Your browser does not support the video element.
            </video>

            <div className="pointer-events-none absolute inset-0 bg-black/[0.05]" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black/20 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/90 via-black/28 to-transparent" />

            <div className="absolute left-4 top-4 sm:left-7 sm:top-7 lg:left-10 lg:top-10">
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-[9px] sm:tracking-[0.23em]">
                Inside the digital studio
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 lg:p-10 xl:p-12">
              <div className="grid gap-4 border-t border-white/25 pt-4 sm:gap-6 sm:pt-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8 lg:pt-7">
                <p className="max-w-[1050px] text-[21px] leading-[1.08] tracking-[-0.04em] text-white min-[480px]:text-[27px] sm:text-[38px] lg:text-[50px] xl:text-[60px]">
                  The craft is in making every decision feel
                  <span className="font-serif font-normal italic text-[#efc4b1]">
                    {" "}
                    like it always belonged there.
                  </span>
                </p>

                <span className="hidden whitespace-nowrap text-[10px] font-medium tracking-[0.16em] text-white/45 sm:block">
                  Studio reel / 01
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-4 border-t border-white/15 pt-4 sm:flex-row sm:items-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/38">
              Strategy / UX / Interface / Motion / Development
            </p>

            <p className="text-[10px] tracking-[0.1em] text-white/26">
              One process from beginning to launch
            </p>
          </div>
        </motion.div>

        <div className="mt-24 grid border-t border-white/18 lg:mt-32 lg:grid-cols-2">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.85,
                delay: index * 0.06,
                ease,
              }}
              className={[
                "group min-h-[300px] border-b border-white/18 py-8 sm:min-h-[340px] sm:py-10 lg:px-10 lg:py-12",
                index % 2 === 0 ? "lg:border-r" : "",
              ].join(" ")}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-white/32">
                    {stage.number}
                  </span>

                  <span className="h-2 w-2 rounded-full border border-[#efb59e]/60 transition-colors duration-300 group-hover:bg-[#efb59e]" />
                </div>

                <div className="mt-20">
                  <h3 className="max-w-[620px] text-[34px] font-normal leading-[1.02] tracking-[-0.05em] sm:text-[42px] lg:text-[48px]">
                    {stage.title}
                  </h3>

                  <p className="mt-6 max-w-[560px] text-[15px] leading-[1.75] text-white/48 sm:text-[16px]">
                    {stage.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-10 border-t border-white/15 pt-8 lg:flex-row lg:items-end">
          <p className="max-w-[920px] font-serif text-[30px] font-normal italic leading-[1.3] tracking-[-0.03em] text-white/68 sm:text-[38px] lg:text-[46px]">
            A clear process gives the work room to become more thoughtful, not
            more predictable.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-white"
          >
            Begin a web project
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
