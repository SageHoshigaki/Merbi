const columns = ["Speed", "Flexibility", "Quality", "Scalability", "Cost"];

const rows = [
  { name: "merbi",           description: "Work with the top 1% of global creative talent, matched from the best brands and agencies.", highlighted: true },
  { name: "In-house team",   description: "In-house teams don't always have the full range of specialist skills needed to support fast business needs." },
  { name: "Creative agencies",description: "Working with full-scale creative agencies can be slow, costly, and inflexible." },
  { name: "Freelancers",     description: "Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality." },
  { name: "Self-service tools",description: "These solutions make incremental improvements to capacity, and work mostly for simple, repetitive tasks." },
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#00733b] px-5 py-16 text-white sm:px-8 lg:py-[76px]">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto mb-10 max-w-[520px] text-center">
          <p className="mb-2 text-[11px] font-medium text-white/70">Merbi vs. traditional alternatives</p>
          <h2 className="text-[30px] font-medium leading-[1.05] tracking-[-0.06em] md:text-[42px]">
            Hiring or traditional outsourcing?{" "}
            <span className="font-serif italic font-normal tracking-[-0.04em]">Neither.</span>
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <div className="mb-4 grid grid-cols-[1.65fr_repeat(5,1fr)] items-end px-8">
            <div />
            {columns.map((col) => (
              <p key={col} className="text-center font-serif text-[13px] italic leading-tight text-white/80">{col}</p>
            ))}
          </div>
          <div className="overflow-hidden">
            {rows.map((row, i) => <ComparisonRow key={row.name} row={row} isLast={i === rows.length - 1} />)}
          </div>
        </div>

        {/* Mobile cards — replaces the overflowing table */}
        <div className="space-y-3 md:hidden">
          {rows.map((row) => (
            <div key={row.name} className={`rounded-2xl p-5 ${row.highlighted ? "bg-[#ff7900]" : "border border-white/20 bg-white/5"}`}>
              <p className="text-[17px] font-semibold tracking-[-0.05em]">{row.name}</p>
              <p className={`mt-1 text-[13px] leading-[1.4] ${row.highlighted ? "text-white/90" : "text-white/65"}`}>{row.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {columns.map((col) => (
                  <span key={col} className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${row.highlighted ? "bg-white/20 text-white" : "bg-white/10 text-white/70"}`}>
                    ✓ {col}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({ row, isLast }) {
  if (row.highlighted) {
    return (
      <div className="grid min-h-[96px] grid-cols-[1.65fr_repeat(5,1fr)] items-center rounded-full bg-[#ff7900] px-8 py-5">
        <div>
          <p className="text-[20px] font-semibold tracking-[-0.05em]">merbi</p>
          <p className="mt-1 max-w-[260px] text-[11px] font-medium leading-[1.25] text-white/90">{row.description}</p>
        </div>
        {columns.map((col) => <Check key={col} />)}
      </div>
    );
  }
  return (
    <div className={`grid min-h-[102px] grid-cols-[1.65fr_repeat(5,1fr)] items-center px-8 py-5 ${isLast ? "" : "border-b border-white/30"}`}>
      <div>
        <p className="text-[20px] font-medium tracking-[-0.05em] text-white">{row.name}</p>
        <p className="mt-1 max-w-[265px] text-[11px] font-medium leading-[1.3] text-white/70">{row.description}</p>
      </div>
      {columns.map((col) => <Check key={col} />)}
    </div>
  );
}

function Check() {
  return <div className="flex items-center justify-center"><span className="text-[22px] font-light leading-none text-white">✓</span></div>;
}
