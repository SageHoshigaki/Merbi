// src/components/Competitive/CreativeContinuitySection.jsx

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

const contentModes = [
  {
    number: "01",
    title: "Launch moments",
    body: "A strong central idea gives a new product, offer, or chapter the presence it deserves when it first enters the world.",
  },
  {
    number: "02",
    title: "Ongoing presence",
    body: "The story continues through useful, entertaining, and recognizable content that keeps the business close to its audience.",
  },
  {
    number: "03",
    title: "Timely reactions",
    body: "When the culture, customer, or conversation changes, the brand can respond quickly without losing its own voice.",
  },
];

export default function CreativeContinuitySection() {
  const sectionRef = useRef(null);
  const primaryMediaRef = useRef(null);
  const detailMediaRef = useRef(null);

  useVideoAutoPause(primaryMediaRef);
  useVideoAutoPause(detailMediaRef);

  useEffect(() => {
    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      if (primaryMediaRef.current) {
        gsap.fromTo(
          primaryMediaRef.current,
          {
            scale: 1.07,
            yPercent: -2,
          },
          {
            scale: 1,
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: primaryMediaRef.current.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      if (detailMediaRef.current) {
        gsap.fromTo(
          detailMediaRef.current,
          {
            scale: 1.12,
            yPercent: -4,
          },
          {
            scale: 1.03,
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: detailMediaRef.current.parentElement,
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
      id="competitive-content-introduction"
      className="overflow-hidden bg-white py-24 text-[#111111] sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 border-t border-black/20 pt-5 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
              Creative continuity
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.95, ease }}
              className="max-w-[1110px] text-[47px] font-normal leading-[0.97] tracking-[-0.06em] sm:text-[62px] lg:text-[76px] xl:text-[86px]"
            >
              The goal is not to post more.
              <span className="block font-serif font-normal italic text-[#a3483b]">
                It is to give people more reasons to keep noticing you.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.85, ease }}
              className="mt-10 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-[0.92fr_1.08fr]"
            >
              <p className="max-w-[530px] text-[19px] leading-[1.58] tracking-[-0.025em] text-black/68 sm:text-[21px]">
                Strong content gives a business a living presence—one that can
                keep moving, responding, and growing without becoming
                unfamiliar.
              </p>

              <p className="max-w-[620px] text-[15px] leading-[1.78] text-black/47">
                We create a clear creative direction, then give it enough range
                to work across launches, social content, campaigns, email,
                digital experiences, and the smaller moments that keep the
                relationship warm between major announcements.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:mt-28 lg:grid-cols-12 lg:items-end">
          <motion.figure
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease }}
            className="relative min-h-[650px] overflow-hidden bg-black sm:min-h-[760px] lg:col-span-8 lg:min-h-[860px]"
          >
            <video
              ref={primaryMediaRef}
              poster="/images/competitive/creative-continuity-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              aria-label="A connected Merbi content campaign across formats"
              className="absolute -inset-y-[5%] h-[110%] w-full object-cover"
              onCanPlay={(event) => {
                const video = event.currentTarget;

                if (video.paused) {
                  video.play().catch(() => {});
                }
              }}
            >
              <source src="/videos/solen.mp4" type="video/mp4" />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/78 via-black/12 to-transparent" />

            <div className="absolute left-5 top-5 bg-white px-3 py-2 sm:left-7 sm:top-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                Campaign world / 01
              </p>
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
              <p className="max-w-[900px] text-[31px] leading-[1.12] tracking-[-0.045em] sm:text-[42px] lg:text-[52px] xl:text-[60px]">
                One clear idea can keep finding
                <span className="font-serif font-normal italic text-[#efc4b1]">
                  {" "}
                  new ways into the conversation.
                </span>
              </p>
            </figcaption>
          </motion.figure>

          <div className="grid gap-5 lg:col-span-4">
            <motion.figure
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: 0.06, duration: 0.95, ease }}
              className="relative min-h-[340px] overflow-hidden bg-black sm:min-h-[420px] lg:min-h-[470px]"
            >
              <video
                ref={detailMediaRef}
                poster="/images/social-presence-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disablePictureInPicture
                aria-label="Social and campaign content details"
                className="absolute -inset-y-[6%] h-[112%] w-full object-cover"
                onCanPlay={(event) => {
                  const video = event.currentTarget;

                  if (video.paused) {
                    video.play().catch(() => {});
                  }
                }}
              >
                <source src="/videos/social.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-black/[0.05]" />

              <div className="absolute bottom-5 left-5 bg-black px-3 py-2 text-white sm:bottom-6 sm:left-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                  Detail / Everyday presence
                </p>
              </div>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease }}
              className="flex min-h-[250px] flex-col justify-between bg-[#a3483b] p-6 text-white sm:p-8 lg:min-h-[370px] lg:p-9"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">
                The role of continuity
              </p>

              <p className="mt-16 max-w-[470px] text-[28px] leading-[1.13] tracking-[-0.04em] sm:text-[34px] lg:text-[40px]">
                Familiar enough to feel like you.
                <span className="block font-serif font-normal italic text-[#f2d4c8]">
                  Fresh enough to earn another look.
                </span>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 grid border-t border-black/20 lg:mt-32 lg:grid-cols-3">
          {contentModes.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.85,
                delay: index * 0.06,
                ease,
              }}
              className={[
                "flex min-h-[330px] flex-col justify-between border-b border-black/20 py-8 lg:min-h-[390px] lg:px-9 lg:py-10",
                index < contentModes.length - 1 ? "lg:border-r" : "",
              ].join(" ")}
            >
              <span className="text-[10px] font-semibold tracking-[0.18em] text-black/28">
                {item.number}
              </span>

              <div className="mt-24">
                <h3 className="text-[30px] font-normal leading-[1.04] tracking-[-0.045em] sm:text-[35px]">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-[460px] text-[14px] leading-[1.75] text-black/47 sm:text-[15px]">
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-black/20 pt-7 sm:grid-cols-[0.32fr_0.68fr]">
          <p className="text-[10px] font-semibold uppercase leading-[1.8] tracking-[0.22em] text-black/36">
            One direction
            <br />
            Many expressions
          </p>

          <p className="max-w-[1050px] text-[27px] leading-[1.22] tracking-[-0.038em] text-black/68 sm:text-[34px] lg:text-[41px]">
            The format can change with the moment. The feeling people recognize
            should continue from one encounter to the next.
          </p>
        </div>
      </div>
    </section>
  );
}
