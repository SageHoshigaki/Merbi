import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "Design Services", href: "/design-services" },
  { label: "Marketing Strategy", href: "/marketing-strategy" },
  { label: "Competitive Content", href: "/competitive-content" },
  { label: "Creative Team Access", href: "/creative-team" },
  { label: "Web Design", href: "/web-design" },
  { label: "Merch & Packaging", href: "/merch" },
];

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Client Dashboard", href: "/dashboard" },
];

export default function MarketingFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        <div className="absolute right-[-8rem] top-[-8rem] h-[22rem] w-[22rem] rounded-full bg-white/[0.035] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/10 py-10 lg:flex-row lg:items-end lg:justify-between lg:py-14">
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
              Start a project
            </p>

            <h2 className="max-w-[720px] text-[clamp(2.4rem,4.8vw,4.8rem)] font-medium uppercase leading-[0.88] tracking-[-0.065em]">
              Make your next move
              <span className="block font-serif font-normal italic normal-case text-white">
                impossible to ignore.
              </span>
            </h2>
          </div>

          <Link
            to="/design-services"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white/85"
          >
            Explore services
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:rotate-45">
              <ArrowUpRight />
            </span>
          </Link>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-end gap-2 text-[34px] font-semibold leading-none tracking-[-0.065em]"
            >
              merbi
              <span className="mb-1 h-2 w-2 rounded-full bg-white" />
            </Link>

            <p className="mt-4 max-w-[320px] text-[11px] leading-5 text-white/40">
              Strategy, design and technology for brands that want to move
              faster and look sharper.
            </p>
          </div>

          <FooterGroup title="Services" links={serviceLinks} />

          <div>
            <FooterGroup title="Navigation" links={navigationLinks} />

            <a
              href="mailto:hello@merbi.com"
              className="mt-6 inline-flex items-center gap-2 text-[11px] text-white/55 transition hover:text-white"
            >
              hello@merbi.com
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-[8px] font-medium uppercase tracking-[0.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Merbi</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#top" className="transition hover:text-white">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }) {
  return (
    <div>
      <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
        {title}
      </p>

      <nav className="space-y-2.5">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="block w-fit text-[11px] text-white/55 transition hover:translate-x-1 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path
        d="M5 15L15 5M7 5h8v8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
