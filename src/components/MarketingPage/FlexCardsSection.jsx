const flexCards = [
  { title: "Branding Trend", subtitle: "2025",           image: "./images/landing/image19.png", footerBg: "bg-[#ff7900]",  footerText: "text-white" },
  { title: "Prizza Graphics", subtitle: "Design",         image: "./images/landing/image20.png", footerBg: "bg-[#fff1df]",  footerText: "text-[#00733b]" },
  { title: "Ultra Fast",      subtitle: "Turnaround Time",image: "./images/landing/image21.png", footerBg: "bg-[#ff7900]",  footerText: "text-white" },
];

export default function FlexCardsSection() {
  return (
    <section className="bg-[#00733b] px-5 pb-20 pt-16 text-white sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto mb-14 max-w-[830px] text-center">
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.02em] text-white/90">Made to flex</p>
          <h2 className="text-[28px] font-medium leading-[1.08] tracking-[-0.055em] md:text-[36px]">
            Supertalented. Superfast. Work with a global, 24/7 team that&apos;s purposefully{" "}
            <span className="font-serif italic font-normal tracking-[-0.04em]">made to keep up with you.</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {flexCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-[16px] bg-white shadow-sm">
              <div className="h-[260px] overflow-hidden sm:h-[300px]">
                <img
                  src={card.image}
                  alt={`${card.title} — ${card.subtitle}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>
              <div className={`${card.footerBg} ${card.footerText} flex h-[120px] flex-col items-center justify-center px-5 text-center`}>
                <h3 className="font-serif text-[28px] font-normal italic leading-[1] tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-3 text-[28px] font-medium leading-none tracking-[-0.055em]">{card.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
