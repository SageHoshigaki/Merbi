// src/components/Creative/CreativeTeamAccess.jsx

import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

const ease = [0.22, 1, 0.36, 1];

const disciplines = [
  "Brand strategy",
  "Creative direction",
  "Design",
  "Writing",
  "Motion",
  "Digital",
  "Campaigns",
  "Creative technology",
];

const principles = [
  {
    number: "01",
    title: "Stay close to the question",
    body: "We understand the business, the audience, and the tension behind the brief before deciding what the work should become.",
  },
  {
    number: "02",
    title: "Make room for discovery",
    body: "The first answer is rarely the most interesting. We explore widely, then sharpen the direction with care.",
  },
  {
    number: "03",
    title: "Challenge the work, not the people",
    body: "Ideas improve through honest conversation, shared standards, and critique without performance or ego.",
  },
  {
    number: "04",
    title: "Protect what makes it distinct",
    body: "Every expression should belong to the same world without repeating itself or following the category.",
  },
];

const creativeForms = [
  {
    number: "01",
    title: "A new point of view",
    body: "Positioning, narrative, and creative direction that give the business a stronger place to stand.",
  },
  {
    number: "02",
    title: "A recognizable world",
    body: "Identity, imagery, language, motion, and digital expression shaped as one connected experience.",
  },
  {
    number: "03",
    title: "An idea that can travel",
    body: "Campaigns and content designed to move across channels without losing their original force.",
  },
  {
    number: "04",
    title: "A team that keeps learning",
    body: "Ongoing creative partnership built on context, shared judgment, and a growing understanding of the brand.",
  },
];

const process = [
  {
    number: "01",
    title: "Listen",
    body: "We begin with the people, history, ambitions, and unresolved questions surrounding the business.",
  },
  {
    number: "02",
    title: "Explore",
    body: "Several creative territories are developed before one direction is chosen and deepened.",
  },
  {
    number: "03",
    title: "Shape",
    body: "The strongest idea becomes a visual, verbal, and experiential system with enough range to grow.",
  },
  {
    number: "04",
    title: "Stay",
    body: "We remain close as the work enters the world, helping the team protect and evolve what has been created.",
  },
];

function RevealLine({ children, delay = 0, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-8%" }}
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

export default function CreativeTeamAccess() {
  return (
    <main className="overflow-hidden bg-white text-[#151310]">
      <CreativeHero />
      <DisciplineIndex />
      <PointOfView />
      <CreativePrinciples />
      <WhatTheTeamBrings />
      <CreativeProcess />
      <EmbeddedPartnership />
      <ClosingInvitation />
    </main>
  );
}

function CreativeHero() {
  const videoRef = useRef(null);
  useVideoAutoPause(videoRef);

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#111] text-white lg:min-h-screen">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          poster="/images/creative/team-access-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          aria-label="Merbi multidisciplinary creative team at work"
          className="h-full w-full object-cover"
          onCanPlay={(event) => {
            const video = event.currentTarget;

            if (video.paused) {
              video.play().catch(() => {});
            }
          }}
        >
          <source src="/videos/creative-team.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-black/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/92 via-black/48 to-black/8" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/24" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1800px] flex-col justify-between px-6 pb-8 pt-8 sm:px-10 lg:min-h-screen lg:px-16 lg:pb-14 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.8, ease }}
          className="flex items-center justify-between border-t border-white/20 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/58">
            Merbi / Creative team
          </p>

          <p className="text-[10px] tracking-[0.12em] text-white/34">
            Different minds. One conversation.
          </p>
        </motion.div>

        <div className="mt-auto">
          <div className="max-w-[1500px]">
            <RevealLine>
              <h1 className="text-[54px] font-normal leading-[0.87] tracking-[-0.07em] sm:text-[78px] md:text-[96px] lg:text-[118px] xl:text-[138px]">
                A creative team that
              </h1>
            </RevealLine>

            <RevealLine delay={0.06}>
              <h1 className="font-serif text-[57px] font-normal italic leading-[0.9] tracking-[-0.045em] text-[#efc4b1] sm:text-[82px] md:text-[101px] lg:text-[124px] xl:text-[144px]">
                thinks alongside you.
              </h1>
            </RevealLine>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 1, ease }}
            className="mt-10 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[1fr_auto] md:items-end lg:mt-12"
          >
            <p className="max-w-[800px] text-[17px] leading-[1.6] tracking-[-0.025em] text-white/72 sm:text-[19px] lg:text-[21px]">
              Merbi brings strategists, designers, writers, directors, and
              technologists into one close creative partnership—giving your
              business a wider range of thinking without losing a shared point
              of view.
            </p>

            <Link
              to="/design-services"
              className="group inline-flex min-h-[58px] w-fit items-center justify-center gap-4 rounded-full bg-white px-8 text-[13px] font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#efc4b1]"
            >
              Meet the creative practice
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DisciplineIndex() {
  const items = [...disciplines, ...disciplines];

  return (
    <section className="overflow-hidden border-b border-black/15 bg-white py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {items.map((discipline, index) => (
          <div
            key={`${discipline}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="px-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/48 sm:px-11">
              {discipline}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#a3483b]" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function PointOfView() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-14 border-t border-black/15 pt-6 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-black/30" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/44">
                How the team thinks
              </p>
            </div>
          </div>

          <div>
            <RevealLine>
              <h2 className="max-w-[1180px] text-[52px] font-normal leading-[0.93] tracking-[-0.065em] sm:text-[70px] lg:text-[86px] xl:text-[100px]">
                Creativity is not another layer
              </h2>
            </RevealLine>

            <RevealLine delay={0.05}>
              <h2 className="max-w-[1180px] font-serif text-[55px] font-normal italic leading-[0.94] tracking-[-0.04em] text-[#a3483b] sm:text-[74px] lg:text-[90px] xl:text-[104px]">
                added after the thinking.
              </h2>
            </RevealLine>

            <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-[0.9fr_1.1fr]">
              <p className="max-w-[540px] text-[20px] leading-[1.55] tracking-[-0.027em] text-black/68 sm:text-[22px]">
                It is how a business finds the most meaningful way to express
                what it believes.
              </p>

              <p className="max-w-[620px] text-[15px] leading-[1.78] text-black/49">
                The team looks beyond individual deliverables to understand the
                larger world around the business. Strategy, language, image,
                motion, and technology are considered together so the work feels
                connected before it ever becomes consistent.
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
          <div className="relative min-h-[680px] overflow-hidden bg-[#171614] lg:min-h-[900px]">
            <img
              src="/images/creative-team.png"
              alt="Merbi creative team developing ideas together"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/5" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10 xl:p-12">
              <p className="max-w-[1100px] text-[32px] leading-[1.1] tracking-[-0.045em] sm:text-[44px] lg:text-[58px] xl:text-[66px]">
                The strongest work often begins where
                <span className="font-serif font-normal italic text-[#efc4b1]">
                  {" "}
                  different ways of seeing meet.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CreativePrinciples() {
  return (
    <section className="bg-[#10100f] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-14 border-t border-white/15 pt-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
              Principles behind the work
            </p>
          </div>

          <div>
            <h2 className="max-w-[1080px] text-[50px] font-normal leading-[0.94] tracking-[-0.062em] sm:text-[68px] lg:text-[84px] xl:text-[96px]">
              Shared standards leave room
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#efb59e]">
                for different minds.
              </span>
            </h2>

            <p className="mt-9 max-w-[680px] text-[17px] leading-[1.7] text-white/52">
              The team does not need to think alike. It needs a clear way to
              listen, question, choose, and recognize when the work has found
              its truth.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-t border-white/18 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.85,
                delay: index * 0.06,
                ease,
              }}
              className={[
                "min-h-[330px] border-b border-white/18 py-9 sm:min-h-[390px] sm:p-10 lg:p-12",
                index % 2 === 0 ? "md:border-r" : "",
              ].join(" ")}
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-white/28">
                  {principle.number}
                </span>

                <div className="mt-24">
                  <h3 className="max-w-[560px] text-[30px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[36px]">
                    {principle.title}
                  </h3>

                  <p className="mt-6 max-w-[520px] text-[14px] leading-[1.75] text-white/45 sm:text-[15px]">
                    {principle.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatTheTeamBrings() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-14 border-t border-black/15 pt-6 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
            What the partnership can become
          </p>

          <h2 className="max-w-[1120px] text-[50px] font-normal leading-[0.94] tracking-[-0.062em] sm:text-[68px] lg:text-[84px] xl:text-[96px]">
            More than a stream of work.
            <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a3483b]">
              A richer way of seeing.
            </span>
          </h2>
        </div>

        <div className="mt-20 border-t border-black/18">
          {creativeForms.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease,
              }}
              className="group grid gap-6 border-b border-black/18 py-8 sm:grid-cols-[70px_0.8fr_1fr_auto] sm:items-center sm:gap-8 lg:py-11"
            >
              <span className="text-[10px] font-semibold tracking-[0.18em] text-black/30">
                {item.number}
              </span>

              <h3 className="text-[28px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[34px] lg:text-[40px]">
                {item.title}
              </h3>

              <p className="max-w-[590px] text-[14px] leading-[1.72] text-black/48 sm:text-[15px]">
                {item.body}
              </p>

              <ArrowUpRight
                size={17}
                strokeWidth={1.35}
                className="hidden text-black/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a3483b] sm:block"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreativeProcess() {
  return (
    <section className="bg-[#a3483b] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-16 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/52">
              How we work together
            </p>

            <h2 className="mt-8 max-w-[680px] text-[50px] font-normal leading-[0.94] tracking-[-0.062em] sm:text-[66px] lg:text-[78px]">
              A clear beginning.
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#f4d4c6]">
                An open middle.
              </span>
            </h2>

            <p className="mt-9 max-w-[540px] text-[16px] leading-[1.72] text-white/64">
              The process gives everyone a shared direction while leaving room
              for discoveries that could not have been predicted at the start.
            </p>
          </div>

          <div className="border-t border-white/28">
            {process.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 border-b border-white/28 py-8 sm:grid-cols-[62px_0.65fr_1fr] sm:items-center sm:gap-8 lg:py-10"
              >
                <span className="text-[10px] font-semibold tracking-[0.18em] text-white/42">
                  {item.number}
                </span>

                <h3 className="text-[31px] font-normal tracking-[-0.045em] sm:text-[37px]">
                  {item.title}
                </h3>

                <p className="max-w-[520px] text-[14px] leading-[1.72] text-white/62">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmbeddedPartnership() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1, ease }}
          className="relative min-h-[680px] overflow-hidden bg-[#171614] lg:min-h-[860px]"
        >
          <img
            src="/images/ppls.png"
            alt="Creative collaborators working closely together"
            loading="lazy"
            decoding="async"
            draggable="false"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/76 via-black/12 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
            <p className="max-w-[800px] text-[32px] leading-[1.12] tracking-[-0.045em] sm:text-[42px] lg:text-[52px]">
              Close enough to understand the context.
              <span className="font-serif font-normal italic text-[#efc4b1]">
                {" "}
                Independent enough to see what others miss.
              </span>
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between lg:py-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
              A team inside the conversation
            </p>

            <h2 className="mt-8 max-w-[760px] text-[51px] font-normal leading-[0.93] tracking-[-0.064em] sm:text-[68px] lg:text-[80px]">
              Context makes
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a3483b]">
                the work better.
              </span>
            </h2>

            <p className="mt-10 max-w-[640px] text-[21px] leading-[1.5] tracking-[-0.03em] text-black/68 sm:text-[24px]">
              The longer we work together, the less time is spent explaining
              what the brand would never do—and the more time can be spent
              finding what it has not done yet.
            </p>

            <p className="mt-7 max-w-[590px] border-t border-black/15 pt-7 text-[15px] leading-[1.78] text-black/48">
              Merbi becomes part of the creative rhythm of the business,
              building knowledge over time while continuing to bring an outside
              perspective to the room.
            </p>
          </div>

          <Link
            to="/design-services"
            className="group mt-14 inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black"
          >
            Explore the creative practice
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ClosingInvitation() {
  return (
    <section className="bg-[#0d0d0c] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1800px]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38">
          Begin a creative partnership
        </p>

        <div className="mt-10 flex flex-col justify-between gap-14 lg:flex-row lg:items-end">
          <h2 className="max-w-[1280px] text-[52px] font-normal leading-[0.9] tracking-[-0.067em] sm:text-[72px] lg:text-[92px] xl:text-[108px]">
            Bring us what has not
            <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#efb59e]">
              found its form yet.
            </span>
          </h2>

          <Link
            to="/design-services"
            className="group flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-full border border-white/25 text-center transition-all duration-500 hover:scale-105 hover:border-[#efb59e] hover:bg-[#efb59e] hover:text-black sm:h-48 sm:w-48"
          >
            <span className="text-[12px] font-semibold">
              Work with the team
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.4}
              className="mt-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
