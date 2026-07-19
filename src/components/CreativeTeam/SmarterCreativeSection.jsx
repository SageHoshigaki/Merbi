export default function SmarterCreativeSection() {
  return (
    <section className="bg-[#006838] px-6 py-[92px] text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-[88px] lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left copy */}
        <div className="max-w-[670px]">
          <h2 className="text-[56px] font-medium leading-[1.04] tracking-[-0.07em] text-white md:text-[70px]">
            A{" "}
            <span className="font-serif italic font-normal tracking-[-0.05em]">
              smarter
            </span>{" "}
            way to
            <br />
            scale your creative
          </h2>

          <p className="mt-[34px] max-w-[650px] text-[31px] font-medium leading-[1.12] tracking-[-0.055em] text-white">
            Merbi replaces creative bottlenecks with limitless creative output,
            empowering you to bring your bold visions to life faster.
          </p>

          <p className="mt-[42px] max-w-[610px] text-[17px] font-medium leading-[1.5] tracking-[-0.035em] text-white">
            “Merbi combines creative talent from around the world with
            purpose-built tech to deliver a significantly faster, cheaper and
            better customer experience than traditional agency networks and
            freelance marketplaces.”
          </p>

          <p className="mt-[34px] text-[16px] font-semibold tracking-[-0.03em] text-white">
            - Emanuel Ben. Co-founder and CEO
          </p>
        </div>

        {/* Right video image */}
        <div className="relative h-[390px] overflow-hidden bg-[#d8d8d8] md:h-[430px]">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            draggable="false"
          />

          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-[86px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#ff7900] transition hover:bg-[#e86f00]"
          >
            <span className="ml-1 h-0 w-0 border-y-[18px] border-l-[28px] border-y-transparent border-l-white" />
          </button>
        </div>
      </div>
    </section>
  );
}