// src/components/SuccessNumbers.jsx

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  {
    value: 1,
    prefix: "",
    suffix: "",
    minimumDigits: 2,
    description:
      "One connected creative partner across strategy, design, content, web, packaging, and ongoing support.",
  },
  {
    value: 6,
    prefix: "",
    suffix: "",
    minimumDigits: 2,
    description:
      "Core capabilities working together instead of being split across disconnected vendors and teams.",
  },
  {
    value: 360,
    prefix: "",
    suffix: "°",
    minimumDigits: 1,
    description:
      "A complete view of how the business is seen, understood, experienced, and remembered.",
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    minimumDigits: 1,
    description:
      "Copy-and-paste solutions. Every direction begins with the actual business challenge.",
  },
];

export default function SuccessNumbers() {
  return (
    <section className="bg-[#fbfaf8] px-5 pb-16 pt-5 text-[#050505] sm:px-8">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.85, ease }}
          className="mx-auto mb-16 max-w-[760px] text-center"
        >
          <p className="mb-3 text-[15px] font-medium tracking-[-0.035em] text-black">
            The Merbi model
          </p>

          <h2
            className="font-medium leading-[0.98] tracking-[-0.07em] text-black"
            style={{ fontSize: "clamp(2rem, 5.5vw, 58px)" }}
          >
            A more connected way
            <br />
            <span className="font-serif font-normal italic tracking-[-0.04em]">
              to build the work
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <StatBlock key={`${stat.value}-${index}`} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  description,
  value,
  prefix,
  suffix,
  minimumDigits,
  index,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.8,
        delay: index * 0.07,
        ease,
      }}
      className="border-b border-black/45 pb-10"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="max-w-[300px] text-[20px] font-normal leading-[1.3] tracking-[-0.05em] text-black sm:text-[22px]">
          {description}
        </p>

        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          minimumDigits={minimumDigits}
        />
      </div>
    </motion.article>
  );
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  minimumDigits = 1,
}) {
  const numberRef = useRef(null);
  const isInView = useInView(numberRef, {
    once: true,
    margin: "-10%",
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    if (value === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- resets the counter when the target is 0; required to keep the count-up animation's timing intact
      setDisplayValue((current) => (current === 0 ? current : 0));
      return undefined;
    }

    const duration = 1400;
    const startTime = performance.now();
    let frameId;

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateNumber);
      }
    }

    frameId = requestAnimationFrame(updateNumber);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isInView, value]);

  const formattedValue = String(displayValue).padStart(minimumDigits, "0");

  return (
    <motion.p
      ref={numberRef}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
      className="shrink-0 font-serif font-normal leading-none tracking-[-0.06em] text-black"
      style={{ fontSize: "clamp(3.5rem, 6.5vw, 102px)" }}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </motion.p>
  );
}
