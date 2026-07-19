export default function InHouseAISection() {
  return (
    <section className="bg-[#00733b] px-5 py-16 text-white sm:px-8 lg:py-[72px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-8 max-w-[280px] border-b border-white/35 pb-3">
            <p className="text-[15px] font-medium uppercase tracking-[-0.02em] text-white">In the era of creative work</p>
          </div>
          <h2 className="max-w-[650px] font-medium leading-[0.98] tracking-[-0.07em] text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 68px)" }}>
            Your In-House Teams&apos;<br />
            <span className="font-serif italic font-normal tracking-[-0.04em]">Shortcut to AI</span>
          </h2>
          <p className="mt-7 max-w-[680px] font-medium leading-[1.12] tracking-[-0.055em] text-white" style={{ fontSize: "clamp(1.2rem, 2.5vw, 32px)" }}>
            By Matching AI with top creative talent, we&apos;re able to deliver better work, faster.
          </p>
          <p className="mt-6 max-w-[510px] text-[16px] font-medium leading-[1.5] tracking-[-0.035em] text-white">
            Our people are continuously trained on all the latest tools and processes, so you don&apos;t have to be.
          </p>
          <button className="mt-10 rounded-full bg-[#ff7900] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#e86f00] active:scale-95">
            Book a Demo
          </button>
        </div>

        <div className="relative h-[260px] overflow-hidden rounded-2xl bg-[#d9d4c9] sm:h-[330px] md:h-[370px]">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
            alt="Creative team collaborating"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover grayscale"
            draggable="false"
          />
          <div className="absolute inset-y-0 left-0 w-[15%] bg-[#ff7900]/80 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 h-[22%] w-[38%] border-t-[6px] border-[#111] bg-[#f5c400]" />
          <div className="absolute right-0 top-[43%] h-[57%] w-[27%] border-l-[6px] border-[#111] bg-[#f5c400]" />
          <div className="absolute right-[8%] top-[46%] flex gap-2">
            <span className="h-3 w-3 rounded-full bg-black" />
            <span className="h-3 w-3 rounded-full bg-black" />
            <span className="h-3 w-3 rounded-full bg-black" />
          </div>
          <button type="button" className="absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center" aria-label="Play video">
            <span className="ml-1 h-0 w-0 border-y-[18px] border-l-[28px] border-y-transparent border-l-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
