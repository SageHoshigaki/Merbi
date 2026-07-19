// src/components/PackagingNMerch/PackagingMerchSection.jsx

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const media = {
  main: "/images/merch/brandy.png",
  detailOne: "/images/merch/sauces.png",
  detailTwo: "/images/merch/brand.png",
};

export default function PackagingMerchSection() {
  return (
    <section
      id="packaging-merch-introduction"
      className="relative overflow-hidden bg-white text-[#111111]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="flex items-center justify-between border-t border-black/20 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">
            Physical brand expression
          </p>

          <p className="hidden text-[10px] uppercase tracking-[0.18em] text-black/30 sm:block">
            Packaging / Merchandise / Objects
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.37fr_0.63fr] lg:gap-16">
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
            >
              <p className="max-w-[540px] text-[42px] font-normal leading-[0.96] tracking-[-0.055em] sm:text-[54px] lg:text-[64px] xl:text-[74px]">
                A brand becomes more real when it leaves the screen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.85, ease }}
              className="mt-16 max-w-[480px] border-t border-black/20 pt-6 lg:mt-24"
            >
              <p className="text-[18px] leading-[1.58] tracking-[-0.025em] text-black/70 sm:text-[20px]">
                The box, bottle, label, garment, insert, and object all become
                part of how the business is understood.
              </p>

              <p className="mt-5 text-[14px] leading-[1.75] text-black/48">
                We shape those pieces around the character of the product so it
                feels clear, recognizable, and worth picking up before someone
                has even had the chance to use it.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.22fr_0.78fr]">
            <motion.figure
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease }}
              className="relative min-h-[640px] overflow-hidden bg-black sm:min-h-[760px] lg:min-h-[860px]"
            >
              <img
                src={media.main}
                alt="Premium bottle packaging with distinctive material, color, and form"
                loading="lazy"
                decoding="async"
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />

              <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 bg-white px-3 py-2 sm:left-6 sm:top-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                  Packaging study / 01
                </p>
              </div>

              <figcaption className="absolute inset-x-0 bottom-0 bg-black px-6 py-6 text-white sm:px-8 sm:py-8">
                <div className="flex items-end justify-between gap-8">
                  <p className="max-w-[560px] text-[24px] leading-[1.12] tracking-[-0.04em] sm:text-[30px] lg:text-[36px]">
                    The presentation should make the product feel
                    <span className="font-serif italic text-[#efb59e]">
                      {" "}
                      worth choosing.
                    </span>
                  </p>

                  <span className="shrink-0 text-[9px] tracking-[0.18em] text-white/40">
                    01
                  </span>
                </div>
              </figcaption>
            </motion.figure>

            <div className="grid gap-4">
              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06, duration: 0.9, ease }}
                className="relative min-h-[310px] overflow-hidden bg-black sm:min-h-0"
              >
                <img
                  src={media.detailOne}
                  alt="Expressive food and beverage packaging with bold graphic identities"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "52% center" }}
                />

                <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />

                <div className="absolute left-4 top-4 bg-white px-3 py-2">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                    Detail / Expression
                  </p>
                </div>
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.9, ease }}
                className="relative min-h-[310px] overflow-hidden bg-black sm:min-h-0"
              >
                <img
                  src={media.detailTwo}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="absolute inset-0 h-full w-full scale-[1.45] object-cover"
                  style={{ objectPosition: "50% 52%" }}
                />

                <div className="pointer-events-none absolute inset-0 bg-black/[0.05]" />

                <div className="absolute bottom-4 right-4 bg-black px-3 py-2 text-white">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Detail / Material
                  </p>
                </div>
              </motion.figure>
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-t border-black/20 pt-6 sm:grid-cols-[0.25fr_0.75fr] sm:gap-10 lg:mt-20">
          <p className="text-[10px] font-semibold uppercase leading-[1.8] tracking-[0.22em] text-black/38">
            Shape
            <br />
            Material
            <br />
            Color
            <br />
            Finish
          </p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
            className="mt-8 max-w-[1180px] text-[31px] leading-[1.14] tracking-[-0.042em] text-black/76 sm:mt-0 sm:text-[39px] lg:text-[48px]"
          >
            Before someone knows how the product performs, the packaging is
            already telling them what kind of value to expect.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
