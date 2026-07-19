// src/components/Landing/LandingHero.jsx

import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";


const carouselMedia = [
  {
    type: "image",
    src: "/images/landing/Hydroform.png",
    alt: "Hydroform branding project",
    position: "center",
  },
  {
    type: "image",
    src: "/images/landing/fashion.png",
    alt: "Fashion campaign by Merbi",
    position: "center",
  },
  {
    type: "video",
    src: "/videos/fashion.mp4",
    poster: "/images/landing/fashion.png",
    alt: "Fashion creative project",
    position: "center",
  },
  {
    type: "video",
    src: "/videos/landing/aura.mp4",
    poster: "/images/landing/Aura.png",
    alt: "Aura brand animation",
    position: "center",
  },
  {
    type: "image",
    src: "/images/landing/Obsi.png",
    alt: "Obsi design project",
    position: "center",
  },
  {
    type: "video",
    src: "/videos/landing/greentea.mp4",
    poster: "/images/landing/greentea.png",
    alt: "Green tea campaign",
    position: "center",
  },
  {
    type: "image",
    src: "/images/landing/gym.png",
    alt: "Fitness marketing project",
    position: "center",
  },
  {
    type: "video",
    src: "/videos/redesign.mp4",
    poster: "/images/landing/tacos.png",
    alt: "Restaurant campaign video",
    position: "center",
  },
  {
    type: "image",
    src: "/images/landing/card1.png",
    alt: "Digital marketing project",
    position: "center",
  },
];

export default function LandingHero() {
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const mediaRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const context = gsap.context(() => {
      const copyElements =
        copyRef.current?.querySelectorAll("[data-hero-reveal]");

      if (copyElements?.length) {
        gsap.fromTo(
          copyElements,
          {
            opacity: 0,
            y: 36,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.09,
            ease: "power4.out",
            clearProps: "transform",
          },
        );
      }

      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          {
            opacity: 0,
            x: 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            delay: 0.14,
            ease: "power4.out",
            clearProps: "transform",
          },
        );
      }
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-[#111111]"
    >
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1800px] lg:grid-cols-[0.44fr_0.56fr]">
        {/* Copy */}
        <div
          ref={copyRef}
          className="relative z-20 flex min-h-[650px] flex-col justify-between border-black/15 px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[calc(100svh-72px)] lg:border-r lg:px-14 lg:py-10 xl:px-16"
        >
          <div
            data-hero-reveal
            className="flex items-center justify-between border-t border-black/20 pt-5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-black/42 sm:text-[10px]">
              Merbi / Independent creative agency
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.18em] text-black/28 sm:block">
              New York · Working everywhere
            </p>
          </div>

          <div className="py-14 sm:py-20 lg:py-12 xl:py-16">
            <p
              data-hero-reveal
              className="mb-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a3483b]"
            >
              Strategy / Design / Content
            </p>

            <h1
              data-hero-reveal
              className="max-w-[820px] text-[53px] font-normal leading-[0.9] tracking-[-0.065em] sm:text-[72px] md:text-[84px] lg:text-[70px] xl:text-[88px] 2xl:text-[104px]"
            >
              <span className="block">MARKETING</span>

              <span className="block text-[#a3483b]">effective</span>

              <span className="block font-serif font-normal italic tracking-[-0.05em] text-[#a3483b]">
                results
              </span>

              <span className="block font-serif font-normal italic tracking-[-0.05em] text-[#0B2D24]">
                beyond imagination.
              </span>
            </h1>

            <p
              data-hero-reveal
              className="mt-8 max-w-[570px] text-[17px] leading-[1.62] tracking-[-0.025em] text-black/58 sm:text-[19px]"
            >
              Marketing beyond imagination delivers innovative strategies,
              impactful results, and transformative growth for your brand.
            </p>

            <div
              data-hero-reveal
              className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
            >
              <a
                href="/start-a-project"
                className="group inline-flex min-h-[58px] items-center justify-center gap-5 rounded-full bg-[#0B2D24] px-7 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a3483b]"
              >
                Start a project
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.45}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#selected-work"
                className="group inline-flex items-center gap-4 text-[12px] font-semibold text-black/58 transition-colors hover:text-black"
              >
                Explore selected work
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight size={14} strokeWidth={1.4} />
                </span>
              </a>
            </div>
          </div>

          <div
            data-hero-reveal
            className="grid grid-cols-[1fr_auto] items-end gap-8 border-t border-black/20 pt-5"
          >
            <p className="max-w-[380px] text-[11px] leading-[1.55] text-black/38">
              Creative systems with enough character to be remembered and enough
              range to keep growing.
            </p>

            <div className="text-right">
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/28">
                Selected work
              </p>

              <p className="mt-2 text-[11px] tracking-[0.14em] text-black/45">
                01 — 09
              </p>
            </div>
          </div>
        </div>

        {/* Desktop animated media wall */}
        <div
          ref={mediaRef}
          id="selected-work"
          className="relative hidden min-h-[calc(100svh-72px)] overflow-hidden bg-[#111111] lg:block"
          aria-label="Selected Merbi projects"
        >
          <div className="absolute inset-0 grid grid-cols-3 gap-[6px] p-[6px]">
            <MediaColumn
              media={[
                carouselMedia[0],
                carouselMedia[1],
                carouselMedia[2],
                carouselMedia[3],
              ]}
              direction="up"
              duration={36}
            />

            <MediaColumn
              media={[
                carouselMedia[4],
                carouselMedia[5],
                carouselMedia[6],
                carouselMedia[7],
              ]}
              direction="down"
              duration={40}
            />

            <MediaColumn
              media={[
                carouselMedia[8],
                carouselMedia[2],
                carouselMedia[0],
                carouselMedia[5],
              ]}
              direction="up"
              duration={34}
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[#111111] via-[#111111]/55 to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black/30 to-transparent" />

          <div className="pointer-events-none absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between gap-10 border-t border-white/30 pt-5 text-white">
            <p className="max-w-[610px] text-[26px] leading-[1.08] tracking-[-0.04em] xl:text-[32px]">
              One creative direction,
              <span className="font-serif font-normal italic text-[#efc4b1]">
                {" "}
                expressed across every touchpoint.
              </span>
            </p>

            <p className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-white/42">
              Work in motion
            </p>
          </div>
        </div>

        {/* Mobile media composition */}
        <div
          className="relative border-t border-black/15 bg-[#111111] p-2 lg:hidden"
          aria-label="Selected Merbi projects"
        >
          <div className="grid grid-cols-2 gap-2">
            {carouselMedia.slice(0, 6).map((item, index) => (
              <MediaCard
                key={`${item.src}-${index}`}
                item={item}
                className={
                  index === 0 || index === 3
                    ? "col-span-2 h-[310px] sm:h-[420px]"
                    : "h-[230px] sm:h-[310px]"
                }
                eager={index === 0}
              />
            ))}
          </div>

          <div className="border-t border-white/20 px-4 py-6 text-white">
            <p className="max-w-[560px] text-[25px] leading-[1.08] tracking-[-0.04em] sm:text-[31px]">
              One creative direction,
              <span className="font-serif font-normal italic text-[#efc4b1]">
                {" "}
                expressed across every touchpoint.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaColumn({ media, direction = "up", duration = 36 }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const repeatedMedia = [...media, ...media];

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return undefined;

    let tween;

    const context = gsap.context(() => {
      const distance = track.scrollHeight / 2;

      gsap.set(track, {
        y: direction === "up" ? 0 : -distance,
        force3D: true,
      });

      tween = gsap.to(track, {
        y: direction === "up" ? -distance : 0,
        duration,
        ease: "none",
        repeat: -1,
        force3D: true,
      });
    }, viewport);

    const handleVisibilityChange = () => {
      if (!tween) return;

      if (document.hidden) {
        tween.pause();
      } else {
        tween.resume();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      context.revert();

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [direction, duration]);

  return (
    <div
      ref={viewportRef}
      className="relative h-full overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex flex-col gap-[6px] will-change-transform"
      >
        {repeatedMedia.map((item, index) => (
          <MediaCard
            key={`${item.src}-${index}`}
            item={item}
            className="h-[255px] shrink-0 xl:h-[285px]"
          />
        ))}
      </div>
    </div>
  );
}

function MediaCard({ item, className = "", eager = false }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;

    if (!video || !card) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(card);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
        return;
      }

      const bounds = card.getBoundingClientRect();
      const isNearViewport =
        bounds.bottom > -300 && bounds.top < window.innerHeight + 300;

      if (isNearViewport) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <figure
      ref={cardRef}
      className={`group relative overflow-hidden bg-[#202020] ${className}`}
    >
      {item.type === "video" ? (
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          aria-label={item.alt || ""}
          muted
          loop
          playsInline
          preload={eager ? "metadata" : "none"}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          style={{
            objectPosition: item.position || "center",
          }}
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt || ""}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          draggable="false"
          className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          style={{
            objectPosition: item.position || "center",
          }}
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-black/[0.035] transition-colors duration-500 group-hover:bg-black/0" />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
    </figure>
  );
}
