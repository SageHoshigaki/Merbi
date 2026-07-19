import { useRef } from "react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

const workCards = [
  { titleA: "Ad",           titleB: "Creative",       mediaType: "video", media: "/videos/ad-creative.mp4", poster: "/images/landing/image 16.png", bg: "bg-black",     titleClass: "text-white", mediaBg: "bg-black",     mediaFit: "contain" },
  { titleA: "Website",      titleB: "Design",         mediaType: "video", media: "/videos/redesign.mp4",    poster: null,                           bg: "bg-black",     titleClass: "text-white", mediaBg: "bg-black",     mediaFit: "contain" },
  { titleA: "Social Media", titleB: "Creative",       mediaType: "video", media: "/videos/inf.mp4",         poster: null,                           bg: "bg-[#172119]", titleClass: "text-white", mediaBg: "bg-[#172119]", mediaFit: "cover"   },
  { titleA: "Packaging",    titleB: "Design",         mediaType: "video", media: "/videos/pck.mp4",         poster: "/images/landing/image 18.png", bg: "bg-[#1d1d1d]", titleClass: "text-white", mediaBg: "bg-black",     mediaFit: "contain" },
];

export default function CreativeWorkSection() {
  return (
    <section className="bg-[#fbfaf8] px-5 py-14 text-[#050505] sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-[500px] lg:ml-10">
          <p className="mb-4 text-[15px] font-medium tracking-[-0.04em] text-black">Easy &amp; hassle-free</p>
          <h2 className="text-[34px] font-medium leading-[1.12] tracking-[-0.055em] text-black md:text-[39px]">
            Every type of creative work<br />you&apos;ll ever need,{" "}
            <span className="font-serif italic tracking-[-0.04em]">and more</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {workCards.map((card) => <WorkCard key={`${card.titleA}-${card.titleB}`} card={card} />)}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ card }) {
  const fitClass = card.mediaFit === "contain" ? "object-contain" : "object-cover";
  const videoRef = useRef(null);

  useVideoAutoPause(videoRef);

  return (
    <article className={`group relative h-[380px] min-h-[340px] w-full overflow-hidden rounded-[14px] sm:h-[430px] ${card.bg}`}>
      <div className={`absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden ${card.mediaBg}`}>
        <video
          ref={videoRef}
          className={`block h-full w-full ${fitClass} object-center`}
          poster={card.poster}
          autoPlay muted loop playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={card.media} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex h-full flex-col p-7">
        <h3 className={`text-[28px] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[31px] ${card.titleClass}`}>
          <span className="font-serif italic tracking-[-0.04em]">{card.titleA}</span>{" "}{card.titleB}
        </h3>
      </div>
    </article>
  );
}
