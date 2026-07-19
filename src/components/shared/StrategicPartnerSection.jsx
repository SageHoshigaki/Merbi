const includedItems = [
  "Strategy and campaign planning",
  "Creative direction and production",
  "Landing pages and funnel support",
  "CRM and automation workflows",
  "Analytics and performance reporting",
  "AI-assisted content and briefing",
  "Dedicated project management",
  "Ongoing optimization support",
];

const departmentPills = [
  "Performance Marketing",
  "Brand & Creative",
  "Product Marketing",
  "Marketing Ops",
  "Lifecycle",
  "Campaigns",
  "Social",
  "Communications",
];




export default function StrategicPartnerSection({
  title = (
    <>
      One strategic partner.{" "}
      <span className="font-serif italic">Every growth channel covered.</span>
    </>
  ),
  description = "MerbiAi helps businesses move faster with strategy, creative, automation, and execution support across the full marketing engine.",
  items = includedItems,
  pills = departmentPills,
}) {
  return (
    <section className="bg-[#f8fbef] px-5 py-12 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1800px] gap-6 lg:grid-cols-2">
        <div className="relative min-h-[620px] overflow-hidden rounded-xl bg-[#edf4e3] p-8 md:p-14">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(3rem,5vw,5.8rem)] font-normal leading-[0.95] tracking-[-0.06em] text-[#082a24]">
              {title}
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#082a24]">
              {description}
            </p>
          </div>

          <div className="absolute bottom-20 left-1/2 w-[115%] -translate-x-1/2 space-y-4">
            <PillRow pills={pills.slice(0, 3)} offset="-translate-x-[8%]" />
            <PillRow pills={pills.slice(3, 6)} offset="translate-x-[5%]" />
            <PillRow pills={pills.slice(6)} offset="-translate-x-[2%]" />
          </div>
        </div>

        <div className="rounded-xl bg-[#c7ef69] p-8 md:p-14">
          <h3 className="text-[clamp(2.4rem,4vw,4.7rem)] font-normal leading-none tracking-[-0.06em] text-[#082a24]">
            Included in{" "}
            <span className="font-serif italic tracking-[-0.04em]">
              all plans:
            </span>
          </h3>

          <div className="mt-12">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-[#082a24]/15 py-4 text-base text-[#123b33] md:text-lg"
              >
                <span>{item}</span>
                <span>✓</span>
              </div>
            ))}
          </div>

          <button className="mt-14 h-14 w-full rounded-full bg-[#062b25] text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-[#041f1b]">
            Book a strategy call
          </button>
        </div>
      </div>
    </section>
  );
}

function PillRow({ pills, offset = "" }) {
  return (
    <div className={`flex gap-4 ${offset}`}>
      {pills.map((pill, index) => (
        <div
          key={pill}
          className={[
            "inline-flex h-14 shrink-0 items-center rounded-2xl border px-6 text-lg font-medium shadow-sm",
            index % 3 === 0 && "bg-[#d8ff72] text-[#082a24] border-[#bddc61]",
            index % 3 === 1 && "bg-[#caeaff] text-[#082a24] border-[#a9d3ec]",
            index % 3 === 2 && "bg-[#062b25] text-[#c8ff67] border-[#062b25]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {pill}
        </div>
      ))}
    </div>
  );
}