// src/components/PackagingNMerch/PackagingMerchCarousel.jsx

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

const ease = [0.22, 1, 0.36, 1];

const projects = [
  {
    number: "01",
    title: "The first impression",
    type: "Packaging",
    description:
      "A box can create anticipation before the product is ever seen. We shape the reveal, the weight in the hand, and the small details people discover along the way.",
    mediaType: "video",
    media: "/videos/facecard.mp4",
    poster: "/images/merch/facecard-poster.jpg",
    className: "lg:col-span-7",
    mediaClassName: "aspect-[4/5] sm:aspect-[5/6]",
    position: "center",
  },
  {
    number: "02",
    title: "Something worth wearing",
    type: "Merchandise",
    description:
      "The best merchandise does not feel like promotion. It feels like something a person would have chosen even without the name attached.",
    mediaType: "image",
    media: "/images/merch/image 68.png",
    className: "lg:col-span-4 lg:col-start-9 lg:mt-44",
    mediaClassName: "aspect-[3/4]",
    position: "center",
  },
  {
    number: "03",
    title: "The quiet details",
    type: "Print and labels",
    description:
      "Labels, wraps, inserts, and printed matter carry the quieter parts of the story—the things people notice more closely once the object is already theirs.",
    mediaType: "video",
    media: "/videos/water.mp4",
    poster: "/images/merch/water-poster.jpg",
    className: "lg:col-span-5 lg:col-start-2 lg:mt-20",
    mediaClassName: "aspect-[4/5]",
    position: "center",
  },
  {
    number: "04",
    title: "A life beyond the launch",
    type: "Apparel and objects",
    description:
      "Some pieces stay in use long after the campaign ends. We design for that second life—the shelf, the street, the desk, the wardrobe, the home.",
    mediaType: "video",
    media: "/videos/fashion.mp4",
    poster: "/images/apparel-design/image 64.png",
    className: "lg:col-span-6 lg:col-start-7 lg:mt-[-7rem]",
    mediaClassName: "aspect-[5/6]",
    position: "center",
  },
];

export default function PackagingMerchCarousel() {
  return (
    <section
      id="packaging-merch-work"
      className="overflow-hidden bg-white py-24 text-[#111111] sm:py-28 lg:py-40"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <header className="grid gap-12 border-t border-black/20 pt-5 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/42">
              Selected physical work
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.95, ease }}
              className="max-w-[1080px] text-[46px] font-normal leading-[0.98] tracking-[-0.058em] sm:text-[60px] lg:text-[76px] xl:text-[88px]"
            >
              Some things carry a name.
              <span className="block font-serif font-normal italic text-[#a3483b]">
                The best ones carry a feeling.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.85, ease }}
              className="mt-9 max-w-[670px] text-[17px] leading-[1.72] tracking-[-0.02em] text-black/52"
            >
              We think about the moment someone first sees the object, the way
              it feels in their hand, and what makes them want to keep it near.
            </motion.p>
          </div>
        </header>

        <div className="mt-24 grid gap-y-24 lg:mt-36 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-36">
          {projects.map((project, index) => (
            <ProjectStudy
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-28 grid gap-10 border-t border-black/20 pt-8 lg:mt-40 lg:grid-cols-12">
          <p className="font-serif text-[31px] font-normal italic leading-[1.28] tracking-[-0.03em] text-black/68 sm:text-[39px] lg:col-span-7 lg:text-[47px]">
            The hope is simple: that the object feels good to receive, natural
            to live with, and difficult to throw away.
          </p>

          <div className="lg:col-span-4 lg:col-start-9 lg:flex lg:items-end lg:justify-end">
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-5 text-[13px] font-semibold text-black"
            >
              Create something physical
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectStudy({ project, index }) {
  const isVideo = project.mediaType === "video";
  const videoRef = useRef(null);

  useVideoAutoPause(videoRef);

  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 1,
        delay: index * 0.05,
        ease,
      }}
      className={project.className}
    >
      <figure>
        <div
          className={`group relative overflow-hidden bg-[#111111] ${project.mediaClassName}`}
        >
          {isVideo ? (
            <video
              ref={videoRef}
              poster={project.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              aria-label={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
              style={{ objectPosition: project.position }}
              onCanPlay={(event) => {
                const video = event.currentTarget;

                if (video.paused) {
                  video.play().catch(() => {});
                }
              }}
            >
              <source src={project.media} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.media}
              alt={project.title}
              loading="lazy"
              decoding="async"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
              style={{ objectPosition: project.position }}
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />

          <div className="absolute left-5 top-5 flex items-center gap-3 bg-white px-3 py-2 sm:left-6 sm:top-6">
            <span className="text-[9px] font-semibold tracking-[0.18em] text-black/40">
              {project.number}
            </span>

            <span className="h-3 w-px bg-black/20" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
              {project.type}
            </span>
          </div>
        </div>

        <figcaption className="mt-5 grid gap-5 border-t border-black/20 pt-5 sm:grid-cols-[0.82fr_1.18fr] sm:gap-8">
          <h3 className="max-w-[520px] text-[29px] font-normal leading-[1.04] tracking-[-0.045em] sm:text-[35px] lg:text-[40px]">
            {project.title}
          </h3>

          <p className="max-w-[540px] text-[14px] leading-[1.72] text-black/48 sm:text-[15px]">
            {project.description}
          </p>
        </figcaption>
      </figure>
    </motion.article>
  );
}
