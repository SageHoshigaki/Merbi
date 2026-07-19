const avatars = [
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=700&auto=format&fit=crop",
    className: "left-[78px] top-[42px] h-[118px] w-[118px]",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=700&auto=format&fit=crop",
    className: "left-[58px] top-[178px] h-[158px] w-[158px]",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop",
    className: "left-[82px] top-[368px] h-[118px] w-[118px]",
  },
];

export default function TestimonialCarouselSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf8] text-[#050505]">
      <div className="relative mx-auto h-[560px] w-full max-w-[900px]">
        {/* Avatars */}
        <div className="absolute inset-y-0 left-0 hidden w-[240px] md:block">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt=""
              className={`absolute rounded-full object-cover ${avatar.className}`}
              draggable="false"
            />
          ))}
        </div>

        {/* Testimonial content */}
        <div className="absolute left-[255px] top-[150px] w-[460px]">
          <h2 className="text-[33px] font-black leading-none tracking-[-0.07em] text-[#00733b]">
            stripe
          </h2>

          <p className="mt-3 max-w-[440px] text-[14px] font-medium leading-[1.28] tracking-[-0.025em] text-black">
            <span className="font-black">
              Merbi has been a huge, huge success for us.
            </span>{" "}
            Managing the design volume expected of our team was only possible
            with the support Merbi provides.&quot;
          </p>

          <div className="mt-7 flex items-start gap-[34px]">
            <Metric label="Total Assets" value="500+" />
            <Metric label="Hour&apos;s Spend" value="180+" />

            <div className="ml-[8px] mt-[-5px] h-[76px] w-[200px] overflow-hidden rounded-[4px] bg-[#d9d9d9]">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute right-[66px] top-[226px] hidden flex-col gap-[18px] md:flex">
          <ArrowButton direction="up" />
          <ArrowButton direction="down" />
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="mb-[14px] text-[15px] font-medium leading-none tracking-[-0.035em] text-black">
        {label}
      </p>

      <p className="font-serif text-[36px] font-normal leading-none tracking-[-0.06em] text-black">
        {value}
      </p>
    </div>
  );
}

function ArrowButton({ direction }) {
  return (
    <button
      type="button"
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black text-[22px] font-light leading-none text-black transition hover:bg-black hover:text-white"
      aria-label={
        direction === "up" ? "Previous testimonial" : "Next testimonial"
      }
    >
      {direction === "up" ? "↑" : "↓"}
    </button>
  );
}