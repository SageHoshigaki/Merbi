// src/components/PackagingNMerch/MerbiIntelligentSystem.jsx

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

const ease = [0.22, 1, 0.36, 1];

const objectFamily = [
  {
    number: "01",
    title: "Primary packaging",
    note: "The first object people meet.",
  },
  {
    number: "02",
    title: "Secondary packaging",
    note: "The reveal, protection, and presentation.",
  },
  {
    number: "03",
    title: "Printed matter",
    note: "The quieter parts of the story.",
  },
  {
    number: "04",
    title: "Merchandise",
    note: "The pieces that move into daily life.",
  },
];

export default function MerbiIntelligentSystem() {
  const videoRef = useRef(null);
  useVideoAutoPause(videoRef);

  return (
    <section className="overflow-hidden bg-white text-[#111111]">
      <div className="mx-auto max-w-[1800px] px-6 py-24 sm:px-10 lg:px-16 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.95, ease }}
            className="lg:col-span-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
              One idea, many forms
            </p>

            <h2 className="mt-9 max-w-[680px] text-[48px] font-normal leading-[0.95] tracking-[-0.06em] sm:text-[62px] lg:text-[74px] xl:text-[84px]">
              The pieces should feel related
              <span className="block font-serif font-normal italic text-[#a3483b]">
                without becoming identical.
              </span>
            </h2>

            <p className="mt-10 max-w-[570px] text-[18px] leading-[1.65] tracking-[-0.02em] text-black/56 sm:text-[20px]">
              A bottle, box, shirt, insert, and shipping package may live in
              different places, but they should still feel as though they came
              from the same hands.
            </p>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease }}
              className="relative min-h-[720px] overflow-hidden bg-[#111111] sm:min-h-[820px] lg:min-h-[920px]"
            >
              <video
                ref={videoRef}
                poster="/images/webpor.png"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disablePictureInPicture
                aria-label="Packaging and merchandise designed as one connected object family"
                className="absolute inset-0 h-full w-full object-cover"
                onCanPlay={(event) => {
                  const video = event.currentTarget;

                  if (video.paused) {
                    video.play().catch(() => {});
                  }
                }}
              >
                <source src="/videos/liq.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-black/[0.06]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-black/80 via-black/18 to-transparent" />

              <div className="absolute left-5 top-5 bg-white px-3 py-2 sm:left-7 sm:top-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                  Object family / 01
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                <p className="max-w-[760px] text-[31px] leading-[1.12] tracking-[-0.045em] sm:text-[41px] lg:text-[50px]">
                  The connection does not have to be loud.
                  <span className="font-serif font-normal italic text-[#efc4b1]">
                    {" "}
                    It only has to feel true.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/20 pt-6 lg:mt-36 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/40">
              The family
            </p>
          </div>

          <div className="lg:col-span-9">
            {objectFamily.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease,
                }}
                className="group grid gap-5 border-b border-black/20 py-7 sm:grid-cols-[70px_0.8fr_1fr_auto] sm:items-center sm:gap-8 lg:py-9"
              >
                <span className="text-[10px] font-semibold tracking-[0.18em] text-black/28">
                  {item.number}
                </span>

                <h3 className="text-[27px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[33px]">
                  {item.title}
                </h3>

                <p className="max-w-[520px] text-[14px] leading-[1.7] text-black/45 sm:text-[15px]">
                  {item.note}
                </p>

                <span className="hidden h-3 w-3 rounded-full border border-black/20 transition-colors duration-300 group-hover:bg-[#a3483b] sm:block" />
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 lg:mt-36 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.95, ease }}
            className="relative min-h-[500px] overflow-hidden bg-[#111111] sm:min-h-[620px] lg:col-span-7 lg:min-h-[720px]"
          >
            <img
              src="/images/merch/image 69.png"
              alt="Close-up packaging details, materials, and finishes"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 max-w-[520px] bg-white p-6 sm:p-8">
              <p className="text-[26px] leading-[1.15] tracking-[-0.04em] sm:text-[34px]">
                Recognition can live in a fold, a finish, a proportion, or the
                way color returns.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-9 lg:py-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/40">
                Built to grow
              </p>

              <p className="mt-8 text-[31px] leading-[1.18] tracking-[-0.04em] text-black/74 sm:text-[38px]">
                The first object sets the tone. The system gives the next one
                somewhere to begin.
              </p>

              <p className="mt-7 border-t border-black/20 pt-7 text-[15px] leading-[1.75] text-black/46">
                We establish enough visual and material logic to keep future
                releases connected, while leaving room for each product to have
                its own personality.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-14 inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black"
            >
              Build a physical product family
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
