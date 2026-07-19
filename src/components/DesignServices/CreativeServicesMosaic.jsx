// src/components/Creative/CreativeServicesMosaic.jsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const img = (name) => `/images/creative/${name}`;

const ease = [0.22, 1, 0.36, 1];

const tiles = [
  {
    src: img("image (1).png"),
    label: "Editorial",
    number: "01",
    className: "left-[0px] top-[0px] h-[620px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("delivery.png"),
    label: "Campaign",
    number: "02",
    className: "left-[390px] top-[0px] h-[290px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("Branding.png"),
    label: "Identity",
    number: "03",
    className: "left-[780px] top-[0px] h-[290px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("nike.png"),
    label: "Art direction",
    number: "04",
    className: "left-[390px] top-[320px] h-[300px] w-[750px]",
    imagePosition: "center",
  },
  {
    src: img("dashboard.png"),
    label: "Digital",
    number: "05",
    className: "left-[0px] top-[665px] h-[300px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("Skirt.png"),
    label: "Fashion",
    number: "06",
    className: "left-[390px] top-[665px] h-[300px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("whitelabel.png"),
    label: "Systems",
    number: "07",
    className: "left-[780px] top-[665px] h-[300px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("cups.png"),
    label: "Packaging",
    number: "08",
    className: "left-[0px] top-[1010px] h-[300px] w-[750px]",
    imagePosition: "center",
  },
  {
    src: img("bento.png"),
    label: "Product",
    number: "09",
    className: "left-[780px] top-[1010px] h-[630px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("poster.png"),
    label: "Print",
    number: "10",
    className: "left-[0px] top-[1340px] h-[300px] w-[360px]",
    imagePosition: "center",
  },
  {
    src: img("bluor.png"),
    label: "Visual language",
    number: "11",
    className: "left-[390px] top-[1340px] h-[300px] w-[360px]",
    imagePosition: "center",
  },
];

export default function CreativeServicesMosaic() {
  return (
    <section
      id="creative-work"
      className="relative overflow-hidden bg-[#0b2d24] text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.6px,transparent_0.6px)] [background-size:6px_6px]" />

      <div className="relative mx-auto w-full max-w-[1728px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 border-t border-white/20 pt-6 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-white/40" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/48">
                  Selected creative work
                </p>
              </div>
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.9, ease }}
                className="max-w-[900px] text-[50px] font-normal leading-[0.94] tracking-[-0.06em] sm:text-[66px] lg:text-[82px]"
              >
                Ideas made visible,
                <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#e4b19b]">
                  tangible, and memorable.
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.85, ease }}
                className="mt-8 grid gap-8 border-t border-white/15 pt-7 sm:grid-cols-2"
              >
                <p className="max-w-[500px] text-[18px] leading-[1.55] tracking-[-0.025em] text-white/70">
                  A collection of identities, campaigns, objects, and digital
                  experiences shaped across the Merbi creative practice.
                </p>

                <p className="max-w-[500px] text-[14px] leading-[1.75] text-white/46">
                  Different forms, different audiences, one shared intention:
                  make the business easier to recognize and harder to forget.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative mx-auto h-[1680px] w-[1240px] min-w-[1240px]">
            {tiles.map((tile, index) => (
              <Tile key={`${tile.src}-${index}`} {...tile} index={index} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1240px] flex-col justify-between gap-8 border-t border-white/20 pt-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Merbi Creative / New York
            </p>

            <p className="mt-3 max-w-[650px] text-[24px] leading-[1.3] tracking-[-0.035em] text-white/78 sm:text-[28px]">
              Built around the idea, not a fixed house style.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-white"
          >
            Begin a project
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#0b2d24]">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Tile({
  src,
  label,
  number,
  className,
  imagePosition = "center",
  index,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-6%",
      }}
      transition={{
        duration: 0.9,
        delay: (index % 4) * 0.05,
        ease,
      }}
      className={`group absolute overflow-hidden bg-[#153d33] ${className}`}
    >
      <img
        src={src}
        alt={`${label} work by Merbi Creative`}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
        style={{
          objectPosition: imagePosition,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-white sm:p-6">
        <p className="text-[9px] font-semibold uppercase tracking-[0.21em] text-white/72">
          {label}
        </p>

        <span className="text-[9px] font-medium tracking-[0.16em] text-white/45">
          {number}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/25" />
    </motion.article>
  );
}
