// src/components/PackagingNMerch/MerchPackagingCloseout.jsx

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

const ease = [0.22, 1, 0.36, 1];

export default function MerchPackagingCloseout() {
  const videoRef = useRef(null);
  useVideoAutoPause(videoRef);

  return (
    <section
      id="packaging-merch-closeout"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="relative min-h-[88svh] lg:min-h-screen">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            poster="/images/merch/packaging-closeout-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            aria-label="Packaging, apparel, print, and product details created by Merbi"
            className="h-full w-full object-cover"
            onCanPlay={(event) => {
              const video = event.currentTarget;

              if (video.paused) {
                video.play().catch(() => {});
              }
            }}
          >
            <source src="/videos/green-drink.mp4" type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-black/20" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/88 via-black/42 to-black/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/10 to-black/28" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1800px] flex-col justify-between px-6 pb-8 pt-8 sm:px-10 lg:min-h-screen lg:px-16 lg:pb-14 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center justify-between border-t border-white/20 pt-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
              Merbi / Packaging &amp; merchandise
            </p>

            <p className="hidden text-[10px] tracking-[0.12em] text-white/32 sm:block">
              From first touch to everyday life
            </p>
          </motion.div>

          <div className="mt-auto">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#efc4b1]"
            >
              The next object
            </motion.p>

            <div className="mt-6 max-w-[1540px]">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "112%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.05, ease }}
                  className="text-[50px] font-normal leading-[0.88] tracking-[-0.07em] sm:text-[74px] md:text-[92px] lg:text-[112px] xl:text-[132px]"
                >
                  Make something people
                </motion.h2>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "112%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06, duration: 1.05, ease }}
                  className="font-serif text-[53px] font-normal italic leading-[0.9] tracking-[-0.045em] text-[#efc4b1] sm:text-[78px] md:text-[97px] lg:text-[118px] xl:text-[138px]"
                >
                  want to bring into their lives.
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.95, ease }}
              className="mt-10 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[1fr_auto] md:items-end"
            >
              <div className="max-w-[860px]">
                <p className="text-[18px] leading-[1.6] tracking-[-0.025em] text-white/72 sm:text-[20px] lg:text-[22px]">
                  Bring us the product, the release, or even the beginning of an
                  idea. We will help shape the world around it so the experience
                  feels as good as the thing itself.
                </p>

                <p className="mt-5 max-w-[650px] text-[14px] leading-[1.75] text-white/44">
                  Packaging, garments, printed matter, launch pieces, and the
                  smaller details people discover after the object becomes
                  theirs.
                </p>
              </div>

              <a
                href="#contact"
                className="group flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-full border border-white/30 text-center transition-all duration-500 hover:scale-105 hover:border-[#efc4b1] hover:bg-[#efc4b1] hover:text-black sm:h-48 sm:w-48"
              >
                <span className="max-w-[110px] text-[13px] font-semibold leading-[1.35]">
                  Begin a product project
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={1.4}
                  className="mt-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
