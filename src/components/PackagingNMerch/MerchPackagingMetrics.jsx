// src/components/PackagingNMerch/MerchPackagingMetrics.jsx

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const metrics = [
  {
    value: "72%",
    label: "Purchase decisions",
    text: "of U.S. consumers surveyed said the design of a product’s packaging can influence what they choose to buy.",
    source: "Ipsos / Paper and Packaging Board",
  },
  {
    value: "67%",
    label: "Material matters",
    text: "said the material used to package a product can influence their purchase decision.",
    source: "Ipsos / Paper and Packaging Board",
  },
  {
    value: "81%",
    label: "Gift selection",
    text: "said packaging design can influence which product they choose when buying a gift.",
    source: "Ipsos / Paper and Packaging Board",
  },
];

export default function MerchPackagingMetrics() {
  return (
    <section className="overflow-hidden bg-white py-24 text-[#111111] sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-14 border-t border-black/20 pt-5 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
              What the research tells us
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-8 lg:col-start-5"
          >
            <h2 className="max-w-[1080px] text-[46px] font-normal leading-[0.98] tracking-[-0.058em] sm:text-[60px] lg:text-[74px] xl:text-[84px]">
              Before people experience the product,
              <span className="block font-serif font-normal italic text-[#a3483b]">
                they experience what surrounds it.
              </span>
            </h2>

            <p className="mt-9 max-w-[680px] text-[17px] leading-[1.72] tracking-[-0.02em] text-black/52">
              Packaging is often the first physical signal of care, quality, and
              character. The numbers do not replace taste, but they show why the
              details around a product deserve real attention.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid border-t border-black/20 md:grid-cols-3 lg:mt-28">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.85,
                delay: index * 0.06,
                ease,
              }}
              className={[
                "flex min-h-[420px] flex-col justify-between border-b border-black/20 py-8 md:px-8 lg:min-h-[500px] lg:px-10 lg:py-10",
                index < metrics.length - 1 ? "md:border-r" : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-black/28">
                  0{index + 1}
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/30">
                  U.S. consumer survey
                </span>
              </div>

              <div className="mt-24">
                <p className="font-serif text-[88px] font-normal leading-none tracking-[-0.075em] text-black sm:text-[104px] lg:text-[124px] xl:text-[140px]">
                  {metric.value}
                </p>

                <h3 className="mt-7 text-[27px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[32px]">
                  {metric.label}
                </h3>

                <p className="mt-5 max-w-[430px] text-[14px] leading-[1.72] text-black/48 sm:text-[15px]">
                  {metric.text}
                </p>
              </div>

              <p className="mt-12 border-t border-black/15 pt-4 text-[9px] uppercase tracking-[0.16em] text-black/28">
                Source: {metric.source}, 2018
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-black/20 pt-6 sm:grid-cols-[0.3fr_0.7fr]">
          <p className="text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.2em] text-black/32">
            Research note
          </p>

          <p className="max-w-[940px] text-[13px] leading-[1.75] text-black/42">
            These figures come from an Ipsos online survey conducted in the
            United States on behalf of the Paper and Packaging Board. They
            describe reported consumer attitudes and should not be presented as
            guaranteed business outcomes for an individual product.
          </p>
        </div>
      </div>
    </section>
  );
}
