const values = [
  {
    eyebrow: "Be Kind",
    title:
      "We work to create a supportive environment where ambitious talent can thrive.",
    body:
      "We celebrate differences in thoughts and experiences. We give constructive and respectful feedback to each other. We take care of each other personally and professionally.",
    theme: "green",
  },
  {
    eyebrow: "Seek The Truth",
    title:
      "We are transparent, direct, and obliged to share the truth.",
    body:
      "We care about making the right decision based on facts over emotions. Our beliefs are hypotheses and we take pride in admitting when we’re wrong and changing course.",
    theme: "mint",
  },
  {
    eyebrow: "Speed Is Safety",
    title:
      "It is safer to move fast than to move slow, so we operate with urgency.",
    body:
      "We seek the shortest effective path and actively choose what not to do. We ask “why” to prioritize the most important outcomes. We look for simple and pragmatic solutions and iterate from there.",
    theme: "cream",
  },
  {
    eyebrow: "Roll Up Your Sleeves",
    title:
      "We pull our weight and we are happy to take one for the team.",
    body:
      "We execute with rigor, focus, and persistence. If it needs to get done, we do it. We believe in humility and the act of doing work that goes unrecognized.",
    theme: "orange",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#fbfaf8] px-6 pb-[86px] pt-[92px] text-[#050505]">
      <div className="mx-auto max-w-[1460px]">
        {/* Heading */}
        <div className="mx-auto mb-[78px] max-w-[820px] text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[-0.02em] text-black">
            Driven By Principle
          </p>

          <h2 className="text-[44px] font-medium leading-[1.02] tracking-[-0.065em] text-black md:text-[56px]">
            <span className="font-serif italic font-normal tracking-[-0.05em]">
              Our values
            </span>{" "}
            lead the way
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1210px] gap-[24px] md:grid-cols-2">
          {values.map((value) => (
            <ValueCard key={value.eyebrow} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }) {
  const styles = {
    green: "bg-[#00733b] text-white",
    mint: "bg-[#e9fff5] text-black",
    cream: "bg-[#fff1df] text-black",
    orange: "bg-[#ff7900] text-white",
  };

  const mutedText =
    value.theme === "green" || value.theme === "orange"
      ? "text-white/90"
      : "text-black/85";

  return (
    <article
      className={`flex h-[255px] flex-col justify-between rounded-[12px] p-[42px] ${styles[value.theme]}`}
    >
      <div>
        <p className={`mb-3 text-[12px] font-medium uppercase tracking-[-0.015em] ${mutedText}`}>
          {value.eyebrow}
        </p>

        <h3 className="max-w-[470px] text-[24px] font-medium uppercase leading-[1.22] tracking-[-0.045em]">
          {value.title}
        </h3>
      </div>

      <p className={`max-w-[500px] text-[10px] font-medium leading-[1.35] tracking-[-0.02em] ${mutedText}`}>
        {value.body}
      </p>
    </article>
  );
}