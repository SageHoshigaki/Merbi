const avatars = [
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    className: "left-[16px] top-[10px]",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    className: "left-[0px] top-[170px]",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    className: "left-[28px] top-[360px]",
  },
];

export default function TestimonialCarouselSection() {
  return (
    <section className="bg-[#fbfaf8] px-6 py-[96px] text-[#050505]">
      <div className="mx-auto max-w-[1358px]">
        <div className="relative min-h-[520px] overflow-hidden rounded-none bg-[#fbfaf8]">
          {/* left avatars */}
          <div className="absolute left-0 top-0 hidden h-full w-[230px] md:block">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar.src}
                alt=""
                className={`absolute h-[130px] w-[130px] rounded-full object-cover ${avatar.className}`}
                draggable="false"
              />
            ))}
          </div>

          {/* content */}
          <div className="mx-auto max-w-[820px] px-0 pt-[150px] md:ml-[330px] md:pt-[130px]">
            <h2 className="text-[34px] font-black leading-none tracking-[-0.06em] text-[#00733b]">
              stripe
            </h2>

            <p className="mt-4 max-w-[610px] text-[16px] font-medium leading-[1.35] tracking-[-0.035em] text-black">
              <span className="font-bold">
                Merbi has been a huge, huge success for us.
              </span>{" "}
              Managing the design volume expected of our team was only possible
              with the support Merbi provides.
            </p>

            <div className="mt-10 flex flex-wrap items-end gap-12">
              <Metric label="Total Assets" value="500+" />
              <Metric label="Hour&apos;s Spend" value="180+" />

              <div className="h-[76px] w-[188px] overflow-hidden rounded-[3px] bg-[#d9d9d9]">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop"
                  alt=""
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>
            </div>
          </div>

          {/* arrows */}
          <div className="absolute right-[0px] top-1/2 hidden -translate-y-1/2 flex-col gap-5 md:flex">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-[20px] leading-none text-black">
              ↑
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-[20px] leading-none text-black">
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="mb-3 text-[14px] font-medium tracking-[-0.03em] text-black">
        {label}
      </p>
      <p className="font-serif text-[42px] font-normal leading-none tracking-[-0.06em] text-black">
        {value}
      </p>
    </div>
  );
}