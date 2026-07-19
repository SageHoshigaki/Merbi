export default function CreativeTeamAccessHero() {
  return (
    <section className="bg-[#006838] text-white">

      {/* Top green intro */}
      <div className="mx-auto grid max-w-[1728px] items-end gap-10 px-8 pb-[58px] pt-[82px] lg:grid-cols-[1.1fr_0.9fr] lg:px-[84px]">
        <div>
          <p className="mb-4 text-[14px] font-medium uppercase tracking-[-0.02em] text-white/85">
            About Merbi
          </p>

          <h1 className="max-w-[560px] text-[48px] font-medium leading-[0.95] tracking-[-0.07em] text-white md:text-[58px]">
            The creative force
            <br />
            <span className="font-serif italic font-normal tracking-[-0.055em]">
              behind world-leading
            </span>
            <br />
            <span className="font-serif italic font-normal tracking-[-0.055em]">
              brands
            </span>
          </h1>
        </div>

        <div className="max-w-[470px] justify-self-start lg:translate-y-[-12px]">
          <p className="text-[13px] font-medium leading-[1.35] tracking-[-0.035em] text-white/85">
            The only creative service where enterprise teams get the top 1% of
            global talent, powered by AI, plugged directly into their workflows.
          </p>
        </div>
      </div>

      {/* Image band */}
      <div className="h-[335px] w-full overflow-hidden bg-[#d8d8d8]">
        <img
          src="/images/creativeteam/Creative.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          draggable="false"
        />
      </div>

      {/* Bottom statement */}
      <div className="mx-auto flex max-w-[1060px] items-center justify-center px-8 py-[68px] text-center">
        <h2 className="max-w-[930px] text-[34px] font-medium leading-[1.08] tracking-[-0.065em] text-white md:text-[42px]">
          Not an agency, not a bunch of freelancers — a
          <br className="hidden md:block" />
          world-class creative team ready to support you
          <br className="hidden md:block" />
          whenever, and however, you need.
        </h2>
      </div>
    </section>
  );
}
