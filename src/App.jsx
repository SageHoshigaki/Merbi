import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar.jsx";

const MarketingPage = lazy(() => import("./pages/MarketingPage.jsx"));
const DesignServicesPage = lazy(() => import("./pages/DesignServicesPage.jsx"));
const MarketingStrategyServices = lazy(
  () => import("./pages/MarketingStrategyServices.jsx"),
);
const CompetitiveContentMarketing = lazy(
  () => import("./pages/CompetitiveContentMarketing.jsx"),
);
const CreativeTeamAccess = lazy(() => import("./pages/CreativeTeamAccess.jsx"));
const WebDesign = lazy(() => import("./pages/WebDesign.jsx"));
const MerchNPackaging = lazy(() => import("./pages/MerchNPackaging.jsx"));
const DashboardAd = lazy(() => import("./pages/DashboardAd.jsx"));
const StartAProject = lazy(() => import("./pages/StartAProject.jsx"));

const PAGE_META = {
  "/": {
    title: "Merbi — Creative Marketing for Growing Brands",
    desc: "Strategy, design, content, and technology for businesses ready to move with more clarity and stronger creative direction.",
  },
  "/design-services": {
    title: "Design Services — Merbi",
    desc: "Brand identity, art direction, campaigns, and visual systems shaped around the character of your business.",
  },
  "/marketing-strategy": {
    title: "Marketing Strategy — Merbi",
    desc: "Clear marketing direction built around your audience, position, priorities, and the next stage of growth.",
  },
  "/competitive-content": {
    title: "Competitive Content — Merbi",
    desc: "Campaigns and ongoing content that help your business stay recognizable, relevant, and worth paying attention to.",
  },
  "/creative-team": {
    title: "Creative Team Access — Merbi",
    desc: "A multidisciplinary creative team that learns your business and thinks alongside you.",
  },
  "/web-design": {
    title: "Web Design — Merbi",
    desc: "Distinct digital experiences shaped through strategy, design, motion, and development.",
  },
  "/merch": {
    title: "Packaging and Merchandise — Merbi",
    desc: "Packaging, apparel, printed matter, and physical brand experiences designed to help products stand out and feel complete.",
  },
  "/dashboard": {
    title: "Client Dashboard — Merbi",
    desc: "Manage your Merbi projects and creative work.",
  },
  "/start-a-project": {
    title: "Start a Project — Merbi",
    desc: "Tell Merbi what you are building, what feels stuck, or what needs to become stronger.",
  },
};

function PageMeta() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] || PAGE_META["/"];

  useEffect(() => {
    document.title = meta.title;

    let description = document.querySelector("meta[name='description']");

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute("content", meta.desc);
  }, [meta]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#A3483B]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35">
          Loading Merbi
        </p>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center bg-white px-6 py-20 text-black sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1800px] border-t border-black/20 pt-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/38">
          404 / Page not found
        </p>

        <h1 className="mt-10 max-w-[1050px] text-[54px] font-normal leading-[0.92] tracking-[-0.065em] sm:text-[76px] lg:text-[96px]">
          This page has moved,
          <span className="block font-serif font-normal italic text-[#A3483B]">
            or never found its way here.
          </span>
        </h1>

        <a
          href="/"
          className="mt-12 inline-flex min-h-[52px] items-center justify-center rounded-full bg-black px-7 text-[13px] font-semibold text-white transition hover:bg-[#A3483B]"
        >
          Return home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <PageMeta />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MarketingPage />} />

          <Route path="/design-services" element={<DesignServicesPage />} />

          <Route
            path="/marketing-strategy"
            element={<MarketingStrategyServices />}
          />

          <Route
            path="/competitive-content"
            element={<CompetitiveContentMarketing />}
          />

          <Route path="/creative-team" element={<CreativeTeamAccess />} />

          <Route path="/web-design" element={<WebDesign />} />

          <Route path="/merch" element={<MerchNPackaging />} />

          <Route path="/dashboard" element={<DashboardAd />} />

          <Route path="/start-a-project" element={<StartAProject />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
