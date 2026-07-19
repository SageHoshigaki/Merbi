const avatars = [
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    className: "left-[170px] top-[92px] h-[210px] w-[210px]",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop",
    className: "left-[132px] top-[350px] h-[255px] w-[255px]",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    className: "left-[170px] top-[650px] h-[210px] w-[210px]",
  },
];

export default function TestimonialCarouselSection() {
  return (
    <section className="relative overflow-hidden bg-[#00733b] text-white">
      <div className="relative mx-auto h-[960px] w-full max-w-[1728px]">
        {/* Left avatars */}
        <div className="absolute inset-y-0 left-0 hidden w-[430px] md:block">
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

        {/* Main content */}
        <div className="absolute left-[500px] top-[380px] w-[790px]">
          <p className="max-w-[780px] text-[28px] font-normal leading-[1.28] tracking-[-0.045em] text-white">
            <span className="font-black">
              Merbi has been a huge, huge success for us.
            </span>{" "}
            Managing the design volume expected of our team was only possible
            with the support Merbi provides.&quot;
          </p>

          <div className="mt-[58px] flex items-start gap-[74px]">
            <Metric label="Total Assets" value="500+" />
            <Metric label="Hour&apos;s Spend" value="180+" />

            <div className="ml-[8px] mt-[-10px] h-[150px] w-[380px] overflow-hidden rounded-[6px] bg-white/20">
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
        <div className="absolute right-[214px] top-[404px] hidden flex-col gap-[34px] md:flex">
          <button className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-white text-[36px] font-light leading-none text-white">
            ↑
          </button>

          <button className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-white text-[36px] font-light leading-none text-white">
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="mb-[34px] text-[31px] font-normal leading-none tracking-[-0.06em] text-white">
        {label}
      </p>

      <p className="font-serif text-[64px] font-normal leading-none tracking-[-0.06em] text-white">
        {value}
      </p>
    </div>
  );
}