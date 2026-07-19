// src/components/Creative/MerbiProcessScroll.jsx

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "We begin with the business",
    description:
      "We spend time with the people behind the work, the audience around it, and the ambitions shaping what comes next.",
  },
  {
    number: "02",
    title: "We find the central idea",
    description:
      "Together, we identify the point of view strong enough to guide the structure, language, imagery, and experience.",
  },
  {
    number: "03",
    title: "We give the idea a world",
    description:
      "Typography, image, color, motion, and interface begin to work together as one recognizable creative language.",
  },
  {
    number: "04",
    title: "We bring it into use",
    description:
      "The direction becomes a responsive digital experience shaped with care across screens, interactions, and real customer journeys.",
  },
  {
    number: "05",
    title: "We stay through the finish",
    description:
      "We refine the details, prepare the work for launch, and remain close enough to help it settle into the life of the business.",
  },
];

export default function MerbiProcessScroll() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0.08, 0.92],
    ["0%", "100%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B2D24] text-[#F2EEE6]"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-28">
          <div className="border-b border-white/15 py-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:border-b-0 lg:border-r lg:py-0 lg:pr-16 xl:pr-24">
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
              className="max-w-[720px]"
            >
              <div className="flex items-center justify-between border-t border-white/20 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/48">
                  03 — How we work
                </p>

                <p className="text-[10px] tracking-[0.12em] text-white/32">
                  Merbi Creative
                </p>
              </div>

              <h2 className="mt-14 max-w-[760px] text-[54px] font-normal leading-[0.91] tracking-[-0.065em] sm:text-[70px] lg:text-[74px] xl:text-[88px]">
                A process shaped
                <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#E7B6A1]">
                  around the work.
                </span>
              </h2>

              <p className="mt-9 max-w-[590px] text-[18px] leading-[1.6] tracking-[-0.025em] text-white/68 sm:text-[20px]">
                Every project needs structure, but not the same answer. We keep
                the process clear enough to move with confidence and open enough
                for the right idea to change the direction.
              </p>

              <div className="mt-9 max-w-[570px] border-t border-white/15 pt-7">
                <p className="text-[14px] leading-[1.75] text-white/44">
                  Founders remain close to the thinking. Decisions are made in
                  context. Nothing is passed from department to department
                  without the original intention travelling with it.
                </p>
              </div>

              <a
                href="#contact"
                className="group mt-11 inline-flex items-center gap-5 text-[13px] font-semibold text-white"
              >
                Begin a conversation
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#E7B6A1] group-hover:bg-[#E7B6A1] group-hover:text-[#0B2D24]">
                  <ArrowUpRight size={16} strokeWidth={1.45} />
                </span>
              </a>
            </motion.div>
          </div>

          <div className="relative py-[16vh] lg:py-[34vh]">
            <div className="absolute left-[23px] top-[16vh] h-[calc(100%-32vh)] w-px bg-white/15 sm:left-[31px] lg:left-[37px] lg:top-[34vh] lg:h-[calc(100%-68vh)]" />

            <motion.div
              style={{
                height: lineHeight,
              }}
              className="absolute left-[23px] top-[16vh] w-px origin-top bg-[#E7B6A1] sm:left-[31px] lg:left-[37px] lg:top-[34vh]"
            />

            <div className="relative space-y-[22vh] lg:space-y-[28vh]">
              {steps.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  step={step}
                  index={index}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, activeStep, setActiveStep }) {
  const stepRef = useRef(null);

  const isActive = activeStep === index;
  const isPassed = activeStep > index;

  return (
    <motion.article
      ref={stepRef}
      onViewportEnter={() => setActiveStep(index)}
      viewport={{
        amount: 0.6,
        margin: "-32% 0px -32% 0px",
      }}
      className="relative grid grid-cols-[48px_1fr] gap-7 sm:grid-cols-[64px_1fr] sm:gap-10 lg:grid-cols-[76px_1fr] lg:gap-12"
    >
      <div className="relative z-10 flex justify-center">
        <motion.div
          animate={{
            backgroundColor: isActive ? "#E7B6A1" : "#0B2D24",
            borderColor:
              isActive || isPassed ? "#E7B6A1" : "rgba(242,238,230,0.18)",
            color: isActive ? "#0B2D24" : "rgba(242,238,230,0.62)",
            scale: isActive ? 1.04 : 1,
          }}
          transition={{
            duration: 0.4,
            ease,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full border text-[10px] font-semibold tracking-[0.13em] sm:h-16 sm:w-16"
        >
          {step.number}
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.36,
          y: isActive ? 0 : 10,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
        className="max-w-[760px] border-t border-white/15 pb-10 pt-6 sm:pt-8"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E7B6A1]">
          Stage {step.number}
        </p>

        <h3 className="mt-5 max-w-[700px] text-[34px] font-normal leading-[1.02] tracking-[-0.05em] sm:text-[42px] lg:text-[50px]">
          {step.title}
        </h3>

        <p className="mt-6 max-w-[640px] text-[15px] leading-[1.75] text-white/54 sm:text-[17px]">
          {step.description}
        </p>
      </motion.div>
    </motion.article>
  );
}
