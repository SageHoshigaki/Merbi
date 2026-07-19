import DesignServicesHero from "../components/DesignServices/DesignServicesHero";
import TrustedBrands from "../components/MarketingPage/TrustedBrands";
import DesignServicesIntro from "../components/DesignServices/DesignServicesIntro";
import CreativeServicesMosaic from "../components/DesignServices/CreativeServicesMosaic";
import MarketingFooter from "../components/MarketingPage/MarketingFooter";
import MerbiProcessScroll from "@/components/shared/MerbiProcessScroll";
import DesignServicesFeature from "@/components/DesignServices/DesignServiceFeature";
import DesignServicesClosing from "@/components/DesignServices/DesignServicesClosing";

export default function DesignServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf8]">
      <DesignServicesHero />
      <TrustedBrands/>
      <DesignServicesIntro/>
      <CreativeServicesMosaic/>
       <MerbiProcessScroll/>
       <DesignServicesFeature/>
       <DesignServicesClosing/>
      <MarketingFooter/>

    </main>
  );
}
