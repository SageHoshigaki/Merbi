const galleryCards = [
  { image: "./images/landing/phoone1.png",     alt: "Merbi mobile UI design project" },
  { image: "./images/landing/phone2.png",      alt: "Merbi app design project" },
  { image: "./images/landing/brandgallery.png",alt: "Merbi brand identity project" },
];

export default function OurWorkGallerySection() {
  return (
    <section className="bg-[#fbfaf8] px-5 pb-20 pt-6 text-[#050505] sm:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 max-w-[310px]">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.02em] text-black">Our Work</p>
          <h2 className="text-[28px] font-medium leading-[1.05] tracking-[-0.06em] text-black md:text-[36px]">
            See how <span className="font-serif italic font-normal tracking-[-0.04em]">brands</span>
            <br />use Merbi
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.08fr_1.08fr_0.7fr]">
          {galleryCards.map((card, i) => (
            <div key={i} className="h-[300px] overflow-hidden rounded-[16px] bg-[#e8e4de] sm:h-[420px]">
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
