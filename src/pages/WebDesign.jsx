import WebDesignHero from "../components/WebDesign/WebDesignHero";
import WebDesignServicesCarousel from "../components/WebDesign/WebDesignServicesCarousel";
import TrustedBrandsSingleRow from "../components/MarketingStrat/TrustedBrandsSingleRow";
import MarketingFooter from "../components/MarketingPage/MarketingFooter";
import MerbiWebDesignHero from "../components/WebDesign/MerbiWebDesignHero";
import MerbiTalentStandard from "@/components/shared/MerbiTalentStandard";
import TailoredWebDesignSection from "@/components/shared/TailoredWebDesignSection";
import WebDesignWorkflowSection from "@/components/WebDesign/WebDesignWorkflowSection";

export default function WebDesign() {
  return (
    <div className="bg-black min-h-screen">
      <MerbiWebDesignHero />
      <TrustedBrandsSingleRow />
      <WebDesignHero />
      <WebDesignServicesCarousel />
      <TailoredWebDesignSection />
      <MerbiTalentStandard />
      <WebDesignWorkflowSection />
      <MarketingFooter />
    </div>
  );
}
