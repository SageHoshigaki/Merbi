export default function OurWorkVideoSection() {
  return (
    <section className="bg-[#fbfaf8] px-6 py-[92px] text-[#050505]">
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div className="mx-auto mb-[42px] max-w-[720px] text-center">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.02em] text-black">
            Our Work
          </p>

          <h2 className="text-[40px] font-medium leading-[1.02] tracking-[-0.065em] text-black md:text-[52px]">
            From high tech to high
            <br />
            fashion{" "}
            <span className="font-serif italic font-normal tracking-[-0.04em]">
              and beyond
            </span>
          </h2>
        </div>

        {/* Video mock */}
        <div className="relative mx-auto h-[390px] max-w-[980px] overflow-hidden bg-[#d8d3c7] md:h-[430px]">
          <img
            src="./images/landing/image1.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover grayscale"
            draggable="false"
          />

          {/* collage blocks */}
          <div className="absolute left-0 top-0 h-full w-[20%] border-r-[5px] border-black bg-[#ff4b1f]/75 mix-blend-multiply" />

          <div className="absolute bottom-0 left-0 h-[16%] w-[40%] border-t-[5px] border-black bg-[#f7c400]" />

          <div className="absolute right-0 bottom-0 h-[56%] w-[30%] border-l-[5px] border-t-[5px] border-black bg-[#f7c400]" />

          <div className="absolute right-[11%] top-[44%] flex gap-3">
            <span className="h-4 w-4 rounded-full bg-black" />
            <span className="h-4 w-4 rounded-full bg-black" />
            <span className="h-4 w-4 rounded-full bg-black" />
          </div>

          <div className="absolute bottom-[15%] left-[18%] h-[30%] w-[20%] border-[4px] border-black border-r-0 bg-[#d8d3c7]" />

          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/15 backdrop-blur-[1px]"
          >
            <span className="ml-1 h-0 w-0 border-y-[22px] border-l-[34px] border-y-transparent border-l-white" />
          </button>
        </div>
      </div>
    </section>
  );
}