export default function ImageCTA({
  image = "/images/cta-bg.jpg",
  eyebrow,
  title,
  description,
  buttonText = "Book a demo",
  buttonHref = "#",
  align = "left",
  overlay = true,
}) {
  const isCenter = align === "center";

  return (
    <section className="w-full bg-[#f7f4ef] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative min-h-[430px] overflow-hidden rounded-[8px]">
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />
          )}

          <div
            className={`relative z-10 flex min-h-[430px] items-center px-8 py-12 md:px-14 lg:px-16 ${
              isCenter ? "justify-center text-center" : "justify-start"
            }`}
          >
            <div className="max-w-[760px] text-white">
              {eyebrow && (
                <p className="mb-4 text-[13px] uppercase tracking-[0.22em] text-white/80">
                  {eyebrow}
                </p>
              )}

              <h2 className="text-[46px] font-light leading-[0.98] tracking-[-0.06em] md:text-[64px] lg:text-[72px]">
                {title}
              </h2>

              {description && (
                <p className="mt-7 max-w-[680px] text-[16px] leading-[1.45] text-white/90">
                  {description}
                </p>
              )}

              {buttonText && (
                <a
                  href={buttonHref}
                  className="mt-9 inline-flex rounded-full bg-[#d8ff68] px-7 py-4 text-[14px] font-semibold text-black transition hover:scale-[1.03]"
                >
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}