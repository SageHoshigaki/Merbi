// src/components/Navbar.jsx

import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const ACCENT = "#A3483B";
const GREEN = "#0B2D24";

const SERVICE_GROUPS = [
  {
    number: "01",
    label: "Design",
    path: "/design-services",
    description:
      "Identity, visual systems, digital experiences, packaging, and physical expression.",
    items: [
      {
        name: "Web Design",
        path: "/web-design",
        description: "Digital experiences shaped around the business.",
      },
      {
        name: "Packaging & Merch",
        path: "/merch",
        description: "Packaging, apparel, print, and product worlds.",
      },
    ],
  },
  {
    number: "02",
    label: "Marketing",
    path: "/marketing-strategy",
    description:
      "Strategy and content that help businesses stay clear, relevant, and visible.",
    items: [
      {
        name: "Marketing Strategy",
        path: "/marketing-strategy",
        description:
          "Clear positioning, direction, and practical growth plans.",
      },
      {
        name: "Competitive Content",
        path: "/competitive-content",
        description: "Campaigns and content built to keep earning attention.",
      },
    ],
  },
  {
    number: "03",
    label: "Creative Team",
    path: "/creative-team",
    description:
      "A multidisciplinary creative team that learns the business over time.",
    items: [
      {
        name: "Creative Team Access",
        path: "/creative-team",
        description: "Strategy, design, writing, motion, and digital support.",
      },
    ],
  },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentionally resets menu state on route change; the functional updater already bails out when nothing is open
    setServicesOpen((current) => (current ? false : current));
    setMobileOpen((current) => (current ? false : current));
  }, [location.pathname]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(closeTimerRef.current);
    };
  }, []);

  function openServices() {
    clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  }

  function closeServicesWithDelay() {
    clearTimeout(closeTimerRef.current);

    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 120);
  }

  function navigateAndClose(path) {
    navigate(path);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-[9999] border-b border-black/10 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link
            to="/"
            aria-label="Merbi home"
            className="group inline-flex items-baseline"
          >
            <span className="text-[29px] font-semibold leading-none tracking-[-0.065em] text-black transition-opacity duration-300 group-hover:opacity-65">
              merbi
            </span>

            <span
              aria-hidden="true"
              className="ml-1.5 h-2 w-2 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
          </Link>

          <nav className="hidden h-full items-center gap-9 lg:flex">
            <button
              type="button"
              onMouseEnter={openServices}
              onMouseLeave={closeServicesWithDelay}
              onClick={() => setServicesOpen((current) => !current)}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              className={[
                "inline-flex h-full items-center gap-2 text-[13px] font-medium transition-colors duration-300",
                servicesOpen ? "text-black" : "text-black/62 hover:text-black",
              ].join(" ")}
            >
              Services
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={[
                  "transition-transform duration-300",
                  servicesOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/start-a-project"
              className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full bg-black px-5 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A3483B]"
            >
              Start a project
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black lg:hidden"
          >
            {mobileOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={19} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      <DesktopServicesMenu
        open={servicesOpen}
        onEnter={openServices}
        onLeave={closeServicesWithDelay}
        onNavigate={navigateAndClose}
        onClose={() => setServicesOpen(false)}
      />

      <MobileMenu
        open={mobileOpen}
        onNavigate={navigateAndClose}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}

function DesktopServicesMenu({ open, onEnter, onLeave, onNavigate, onClose }) {
  return (
    <>
      <button
        type="button"
        aria-label="Close services menu"
        onClick={onClose}
        className={[
          "fixed inset-0 z-[9996] bg-black/20 transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <div
        id="services-menu"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={[
          "fixed left-0 right-0 top-[72px] z-[9998] hidden overflow-hidden border-b border-black/10 bg-white transition-all duration-500 lg:block",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1800px] px-16 py-10">
          <div className="grid grid-cols-[0.27fr_0.73fr] border-t border-black/15">
            <div className="flex min-h-[470px] flex-col justify-between border-r border-black/15 py-8 pr-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/38">
                  Services
                </p>

                <p className="mt-8 max-w-[330px] text-[31px] leading-[1.08] tracking-[-0.045em] text-black/80">
                  The right mix of thinking and making,
                  <span className="font-serif font-normal italic text-[#A3483B]">
                    {" "}
                    shaped around the business.
                  </span>
                </p>
              </div>

              <div className="border-t border-black/15 pt-6">
                <p className="max-w-[320px] text-[13px] leading-[1.7] text-black/44">
                  Not sure where the work belongs yet? Start with the challenge.
                  We will help define the right path.
                </p>

                <Link
                  to="/start-a-project"
                  onClick={onClose}
                  className="group mt-6 inline-flex items-center gap-4 text-[12px] font-semibold text-black"
                >
                  Talk to the team
                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3">
              {SERVICE_GROUPS.map((group, groupIndex) => (
                <section
                  key={group.number}
                  className={[
                    "min-h-[470px] px-8 py-8 xl:px-10",
                    groupIndex < SERVICE_GROUPS.length - 1
                      ? "border-r border-black/15"
                      : "",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => onNavigate(group.path)}
                    className="group w-full text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold tracking-[0.18em] text-black/28">
                        {group.number}
                      </span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.35}
                        className="text-black/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A3483B]"
                      />
                    </div>

                    <h2 className="mt-8 text-[31px] font-normal leading-none tracking-[-0.045em] text-black">
                      {group.label}
                    </h2>

                    <p className="mt-4 max-w-[330px] text-[13px] leading-[1.65] text-black/42">
                      {group.description}
                    </p>
                  </button>

                  <div className="mt-8 border-t border-black/15">
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className="group block border-b border-black/15 py-5"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className="text-[15px] font-medium tracking-[-0.025em] text-black/78 transition-colors duration-300 group-hover:text-[#A3483B]">
                              {item.name}
                            </p>

                            <p className="mt-2 max-w-[290px] text-[11px] leading-[1.55] text-black/38">
                              {item.description}
                            </p>
                          </div>

                          <ArrowRight
                            size={14}
                            strokeWidth={1.35}
                            className="mt-1 shrink-0 text-black/18 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#A3483B]"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileMenu({ open, onNavigate, onClose }) {
  return (
    <div
      className={[
        "fixed inset-0 top-[72px] z-[9998] overflow-y-auto bg-white transition-all duration-500 lg:hidden",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0",
      ].join(" ")}
    >
      <div className="px-6 pb-10 pt-7 sm:px-10">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/38">
            Services
          </p>

          <div className="mt-5 border-t border-black/15">
            {SERVICE_GROUPS.map((group) => (
              <MobileServiceGroup
                key={group.number}
                group={group}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3">
          <button
            type="button"
            onClick={() => onNavigate("/start-a-project")}
            className="inline-flex min-h-[56px] items-center justify-between rounded-full bg-black px-6 text-[13px] font-semibold text-white"
          >
            Start a project
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 text-[12px] font-semibold text-black/38"
        >
          Close menu
        </button>
      </div>
    </div>
  );
}

function MobileServiceGroup({ group, onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="border-b border-black/15">
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <div className="flex items-center gap-5">
          <span className="text-[9px] font-semibold tracking-[0.18em] text-black/28">
            {group.number}
          </span>

          <span className="text-[25px] font-normal tracking-[-0.04em] text-black">
            {group.label}
          </span>
        </div>

        <ChevronDown
          size={16}
          strokeWidth={1.4}
          className={[
            "text-black/35 transition-transform duration-300",
            expanded ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      <div
        className={[
          "grid overflow-hidden transition-all duration-500",
          expanded ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="min-h-0">
          <button
            type="button"
            onClick={() => onNavigate(group.path)}
            className="mb-2 ml-8 inline-flex items-center gap-3 text-[12px] font-semibold"
            style={{ color: GREEN }}
          >
            View all {group.label}
            <ArrowUpRight size={14} strokeWidth={1.4} />
          </button>

          <div className="ml-8">
            {group.items.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => onNavigate(item.path)}
                className="flex w-full items-start justify-between gap-5 border-t border-black/10 py-4 text-left"
              >
                <div>
                  <p className="text-[15px] font-medium text-black/78">
                    {item.name}
                  </p>

                  <p className="mt-1.5 max-w-[290px] text-[11px] leading-[1.55] text-black/38">
                    {item.description}
                  </p>
                </div>

                <ArrowRight
                  size={14}
                  strokeWidth={1.35}
                  className="mt-1 shrink-0 text-black/25"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
