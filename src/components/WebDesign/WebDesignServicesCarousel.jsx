// src/components/WebDesign/WebDesignServicesCarousel.jsx

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const services = [
  {
    number: "01",
    eyebrow: "Direction",
    title: "Website strategy",
    description:
      "We define what the experience needs to communicate, how the story should unfold, and where each decision should lead.",
    image: "/images/web-design/image 63.png",
    position: "center",
  },
  {
    number: "02",
    eyebrow: "Expression",
    title: "Website design",
    description:
      "We translate the character of the business into typography, imagery, layout, motion, and a distinct digital rhythm.",
    image: "/images/web-design/image 64.png",
    position: "center",
  },
  {
    number: "03",
    eyebrow: "Focus",
    title: "Landing pages",
    description:
      "Focused destinations shaped around one audience, one message, and one clear reason to take the next step.",
    image: "/images/web-design/image 65.png",
    position: "center",
  },
  {
    number: "04",
    eyebrow: "Experience",
    title: "UI and UX",
    description:
      "Interfaces designed around the way people move, understand, decide, and return—not around a collection of features.",
    image: "/images/web-design/image 66.png",
    position: "center",
  },
];

function ServicePanel({ service, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 42,
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
        duration: 0.95,
        delay: index * 0.07,
        ease,
      }}
      className="group w-[84vw] max-w-[510px] shrink-0 md:w-[470px] xl:w-[520px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#171614]">
        <img
          src={service.image}
          alt={`${service.title} by Merbi`}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
          style={{
            objectPosition: service.position,
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/88 via-black/24 to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-white sm:p-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/68">
            {service.eyebrow}
          </p>

          <span className="text-[10px] font-medium tracking-[0.17em] text-white/42">
            {service.number}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-9">
          <h3 className="max-w-[430px] text-[43px] font-normal leading-[0.93] tracking-[-0.058em] sm:text-[52px]">
            {service.title}
          </h3>

          <div className="mt-6 flex items-end justify-between gap-8 border-t border-white/24 pt-5">
            <p className="max-w-[370px] text-[14px] leading-[1.68] text-white/62 sm:text-[15px]">
              {service.description}
            </p>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-400 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-black/15 pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/38">
          Merbi / Web design
        </p>

        <p className="text-[9px] tracking-[0.12em] text-black/28">
          {service.number} / 04
        </p>
      </div>
    </motion.article>
  );
}

export default function WebDesignServicesCarousel() {
  const railRef = useRef(null);

  return (
    <section
      id="web-design-services"
      className="relative overflow-hidden bg-[#f4f2ed] py-24 text-[#151310] sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.31fr_0.69fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-black/30" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/44">
                The digital practice
              </p>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 1,
                ease,
              }}
              className="max-w-[1140px] text-[50px] font-normal leading-[0.94] tracking-[-0.064em] sm:text-[68px] lg:text-[84px] xl:text-[98px]"
            >
              Every screen should carry
              <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#a3483b]">
                the same point of view.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.08,
                duration: 0.9,
                ease,
              }}
              className="mt-10 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-[0.9fr_1.1fr]"
            >
              <p className="max-w-[520px] text-[19px] leading-[1.55] tracking-[-0.026em] text-black/68 sm:text-[21px]">
                We shape the thinking, visual language, and interaction as one
                connected experience.
              </p>

              <p className="max-w-[610px] text-[15px] leading-[1.75] text-black/49">
                The work may begin with a full website, a campaign destination,
                or a single key journey. In every case, the goal is the same:
                make the business easier to understand and more compelling to
                spend time with.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 lg:mt-28">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-24 bg-gradient-to-r from-[#f4f2ed] to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-24 bg-gradient-to-l from-[#f4f2ed] to-transparent lg:block" />

        <div
          ref={railRef}
          className="overflow-x-auto px-6 pb-5 [scrollbar-width:none] sm:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max gap-5 pr-6 sm:gap-6 lg:gap-8 lg:pr-16">
            {services.map((service, index) => (
              <ServicePanel
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-8 border-t border-black/15 pt-6 sm:flex-row sm:items-end">
          <p className="max-w-[700px] font-serif text-[27px] font-normal italic leading-[1.35] tracking-[-0.025em] text-black/61 sm:text-[32px]">
            The service changes with the project. The standard of thought does
            not.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black"
          >
            Discuss a web project
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/22 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
