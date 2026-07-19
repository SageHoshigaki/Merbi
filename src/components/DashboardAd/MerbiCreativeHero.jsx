import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Box,
  Code2,
  Mic2,
  Sparkles,
  Video,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

const creativeCards = [
  {
    label: "3D Graphics",
    value: "Product visuals",
    description:
      "Premium renders, visual concepts, and product-first creative direction.",
    icon: Box,
    className: "right-[18%] top-[24%]",
  },
  {
    label: "Websites",
    value: "High-converting builds",
    description:
      "Landing pages, brand sites, and polished frontend experiences built to sell.",
    icon: Code2,
    className: "right-[4%] top-[45%]",
  },
  {
    label: "Marketing Ads",
    value: "Campaign systems",
    description:
      "Paid social creative, campaign visuals, hooks, variants, and launch assets.",
    icon: Video,
    className: "right-[24%] bottom-[21%]",
  },
  {
    label: "Podcasts",
    value: "Content engines",
    description:
      "Podcast visuals, clips, episode systems, and content repurposing workflows.",
    icon: Mic2,
    className: "right-[8%] bottom-[5%]",
  },
];

const serviceRail = [
  "Websites",
  "3D Visuals",
  "Ad Campaigns",
  "Brand Systems",
  "Podcast Production",
  "Landing Pages",
  "Motion Design",
  "Creative Automation",
];

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MerbiCreativeHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const beamY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-96px)] overflow-hidden rounded-b-[2.5rem] border-b border-[#D9FF8A]/20 bg-[#06100C] text-[#F9F3EA]"
    >
      {/* cinematic base */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_71%_44%,rgba(11,107,58,.58),transparent_31%),radial-gradient(circle_at_82%_22%,rgba(217,255,138,.20),transparent_24%),radial-gradient(circle_at_13%_82%,rgba(255,106,0,.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,12,1)_0%,rgba(6,16,12,.98)_38%,rgba(6,16,12,.68)_68%,rgba(6,16,12,.94)_100%)]" />
      </motion.div>

      {/* premium grid */}
      <div className="absolute inset-0 opacity-[0.105] [background-image:linear-gradient(rgba(245,231,214,.34)_1px,transparent_1px),linear-gradient(90deg,rgba(245,231,214,.34)_1px,transparent_1px)] [background-size:84px_84px]" />

      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:4px_4px]" />

      {/* oversized background typography */}
      <motion.div
        style={{ y: textY }}
        className="pointer-events-none absolute -left-8 bottom-8 hidden text-[12vw] font-black uppercase leading-none tracking-[-0.12em] text-[#F5E7D6]/[0.025] lg:block"
      >
        CREATIVE
        <br />
        SYSTEMS
      </motion.div>

      {/* green beam */}
      <motion.div
        style={{ y: beamY }}
        initial={{ opacity: 0, scaleY: 0.35 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[-14%] right-[31%] top-[-14%] hidden w-[3px] origin-center rounded-full bg-[#D9FF8A] shadow-[0_0_26px_rgba(217,255,138,.95),0_0_110px_rgba(11,107,58,.9),0_0_190px_rgba(255,106,0,.34)] md:block"
      />

      {/* light leaks */}
      <motion.div
        animate={{
          opacity: [0.18, 0.34, 0.18],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-18%] right-[18%] top-[6%] hidden w-[420px] rounded-full bg-[#0B6B3A]/30 blur-3xl md:block"
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
          x: [0, 18, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[22%] hidden h-[520px] w-[520px] rounded-full bg-[#D9FF8A]/10 blur-3xl lg:block"
      />

      {/* right-side abstract studio rings */}
      <div className="pointer-events-none absolute right-[6%] top-[19%] z-[4] hidden h-[520px] w-[520px] rounded-full border border-[#D9FF8A]/10 bg-[#F5E7D6]/[0.025] blur-[0.2px] lg:block" />
      <div className="pointer-events-none absolute right-[13%] top-[27%] z-[4] hidden h-[310px] w-[310px] rounded-full border border-[#D9FF8A]/10 bg-[radial-gradient(circle,rgba(217,255,138,.13),rgba(11,107,58,.08),transparent_70%)] lg:block" />

      {/* main content */}
      <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center px-6 py-20 md:px-10 lg:px-16">
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="show"
          className="max-w-[880px] xl:max-w-[960px]"
        >
          <motion.div
            variants={reveal}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#D9FF8A]/18 bg-[#D9FF8A]/[0.06] px-4 py-2 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#D9FF8A] shadow-[0_0_16px_rgba(217,255,138,.9)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#D9FF8A]">
              Merbi Creative Studio
            </p>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="max-w-[980px] text-[clamp(4.1rem,8vw,9.5rem)] font-black leading-[0.82] tracking-[-0.11em]"
          >
            Full-stack creative for brands moving{" "}
            <span className="font-serif italic font-medium tracking-[-0.08em] text-[#D9FF8A]">
              at internet speed.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-8 max-w-3xl text-lg leading-8 text-[#F9F3EA]/68 md:text-xl"
          >
            Merbi builds premium websites, 3D visuals, ad campaigns, podcasts,
            brand systems, and content engines backed by data, strategy, and
            production-grade execution.
          </motion.p>

          <motion.div variants={reveal} className="mt-11 flex flex-wrap gap-4">
            <Button className="group rounded-full bg-[#D9FF8A] px-8 py-6 font-bold text-[#06100C] shadow-[0_0_44px_rgba(217,255,138,.34)] transition hover:bg-[#FF6A00] hover:text-white">
              See the Studio
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-[#D9FF8A]/24 bg-white/[0.04] px-8 py-6 text-[#F9F3EA] backdrop-blur transition hover:bg-[#D9FF8A]/10"
            >
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <FloatingStudioCards cardsY={cardsY} />

      {/* studio rail */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-[#D9FF8A]/10 bg-[#06100C]/72 py-4 backdrop-blur-xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-8 whitespace-nowrap"
        >
          {[...serviceRail, ...serviceRail].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#F5E7D6]/45"
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* bottom glow edge */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-[#D9FF8A]/60 to-transparent" />
    </section>
  );
}

function FloatingStudioCards({ cardsY }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".studio-card");

      cards.forEach((card) => {
        const icon = card.querySelector(".studio-card-icon");
        const title = card.querySelector(".studio-card-title");
        const description = card.querySelector(".studio-card-description");
        const shine = card.querySelector(".studio-card-shine");
        const border = card.querySelector(".studio-card-border");

        gsap.set(description, {
          autoAlpha: 0,
          y: 12,
          height: 0,
        });

        gsap.set(shine, {
          xPercent: -130,
          opacity: 0,
        });

        gsap.set(border, {
          opacity: 0,
        });

        const onEnter = () => {
          gsap.to(card, {
            y: -16,
            scale: 1.04,
            rotateX: 0,
            rotateY: 0,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(description, {
            autoAlpha: 1,
            y: 0,
            height: "auto",
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(title, {
            color: "#D9FF8A",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 8,
            scale: 1.1,
            duration: 0.35,
            ease: "back.out(2)",
          });

          gsap.to(border, {
            opacity: 1,
            duration: 0.3,
          });

          gsap.fromTo(
            shine,
            { xPercent: -130, opacity: 0 },
            {
              xPercent: 130,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
            }
          );
        };

        const onLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(description, {
            autoAlpha: 0,
            y: 12,
            height: 0,
            duration: 0.35,
            ease: "power3.inOut",
          });

          gsap.to(title, {
            color: "#F9F3EA",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 0,
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(border, {
            opacity: 0,
            duration: 0.3,
          });
        };

        const onMove = (event) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const rotateY = gsap.utils.mapRange(0, rect.width, -7, 7, x);
          const rotateX = gsap.utils.mapRange(0, rect.height, 7, -7, y);

          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 900,
            transformOrigin: "center",
            duration: 0.35,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        card.addEventListener("mousemove", onMove);
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={wrapRef}
      style={{ y: cardsY }}
      className="pointer-events-none absolute inset-0 z-10 hidden xl:block"
    >
      {creativeCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 42, scale: 0.92, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              delay: 0.5 + index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`studio-card pointer-events-auto absolute ${card.className} w-[215px] cursor-pointer overflow-hidden rounded-[1.45rem] border border-[#D9FF8A]/10 bg-[#F5E7D6]/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,.45)] backdrop-blur-2xl will-change-transform`}
          >
            <div className="studio-card-border pointer-events-none absolute inset-0 rounded-[1.45rem] border border-[#D9FF8A]/45 opacity-0 shadow-[0_0_36px_rgba(217,255,138,.22)]" />

            <div className="studio-card-shine pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/18 to-transparent" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(217,255,138,.12),transparent_45%,rgba(255,106,0,.08))]" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <div className="studio-card-icon flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9FF8A]/15 bg-[#06100C]/45">
                  <Icon className="h-5 w-5 text-[#D9FF8A]" />
                </div>

                <Sparkles className="h-4 w-4 text-[#FF6A00]" />
              </div>

              <p className="text-sm text-[#F9F3EA]/42">{card.label}</p>

              <p className="studio-card-title mt-2 text-xl font-black leading-[0.95] tracking-[-0.07em] text-[#F9F3EA]">
                {card.value}
              </p>

              <p className="studio-card-description mt-4 overflow-hidden text-sm leading-5 text-[#F9F3EA]/58">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}