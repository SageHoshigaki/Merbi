import { useEffect, useRef } from "react";
import gsap from "gsap";

const topRow    = [{ name: "Spotify", type: "text", tone: "muted" }, { name: "Wikipedia", type: "wiki" }, { name: "amazon", type: "amazon" }, { name: "Google", type: "google" }, { name: "Dropbox", type: "dropbox", tone: "muted" }];
const bottomRow = [{ name: "LinkedIn", type: "linkedin", tone: "muted" }, { name: "airbnb", type: "airbnb" }, { name: "stripe", type: "stripe" }, { name: "inMobi", type: "inmobi" }, { name: "FORTI", type: "text", tone: "light" }];

export default function TrustedBrands() {
  return (
    <section className="overflow-hidden bg-[#fbfaf8] px-5 py-16 text-center sm:px-8 sm:py-20" aria-label="Trusted by leading brands">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mx-auto max-w-[640px] text-[28px] font-light leading-[1.35] tracking-[-0.04em] text-black/40 md:text-[34px]">
          Trusted by 500+ of the world's biggest enterprise brands
        </h2>
      </div>
      <div className="mt-12 space-y-10" aria-hidden="true">
        <LogoMarquee logos={topRow}    direction="left"  duration={55} />
        <LogoMarquee logos={bottomRow} direction="right" duration={60} />
      </div>
    </section>
  );
}

function LogoMarquee({ logos, direction = "left", duration = 55 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const distance = track.scrollWidth / 2;
    gsap.set(track, { x: direction === "left" ? -distance / 2 : -distance, force3D: true });
    const tween = gsap.to(track, {
      x: direction === "left" ? -distance : -distance / 2,
      duration, ease: "none", repeat: -1,
      modifiers: { x: gsap.utils.unitize((x) => { const v = parseFloat(x); return ((v % distance) + distance) % distance - distance; }) },
    });
    return () => tween.kill();
  }, [direction, duration]);

  // 4 reps instead of 8 — halves DOM nodes
  const repeated = Array.from({ length: 4 }).flatMap(() => logos);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={trackRef} className="flex w-max items-center gap-16 will-change-transform sm:gap-24">
        {repeated.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex min-w-[150px] shrink-0 items-center justify-center sm:min-w-[190px]">
            <LogoMark logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoMark({ logo }) {
  if (logo.type === "wiki")     return <div className="flex flex-col items-center"><p className="font-serif text-[25px] leading-none tracking-[-0.04em] text-black/70">Wikipedia</p><p className="mt-1 text-[10px] text-black/50">The Free Encyclopedia</p></div>;
  if (logo.type === "amazon")   return <div className="flex flex-col items-center"><p className="text-[32px] font-bold leading-none tracking-[-0.06em] text-black">amazon</p><div className="mt-1 h-[9px] w-[60px] rounded-[50%] border-b-[4px] border-black" /></div>;
  if (logo.type === "google")   return <p className="text-[36px] font-medium leading-none tracking-[-0.08em] text-black">Google</p>;
  if (logo.type === "dropbox")  return <p className="text-[32px] font-bold leading-none tracking-[-0.06em] text-[#cfcfcf]">◆ Dropbox</p>;
  if (logo.type === "linkedin") return <p className="text-[34px] font-bold leading-none tracking-[-0.08em] text-[#bfbfbf]">Linked<span className="rounded-sm bg-[#a9a9a9] px-1 text-white">in</span></p>;
  if (logo.type === "airbnb")   return <p className="text-[30px] font-semibold leading-none tracking-[-0.06em] text-black">♢ airbnb</p>;
  if (logo.type === "stripe")   return <p className="text-[36px] font-black leading-none tracking-[-0.08em] text-black">stripe</p>;
  if (logo.type === "inmobi")   return <p className="text-[30px] font-semibold leading-none tracking-[-0.08em] text-black/55">inMobi</p>;
  const tone = logo.tone === "light" ? "text-[#d8d8d8]" : logo.tone === "muted" ? "text-[#cfcfcf]" : "text-black";
  return <p className={`text-[30px] font-bold leading-none tracking-[-0.06em] ${tone}`}>{logo.name}</p>;
}
