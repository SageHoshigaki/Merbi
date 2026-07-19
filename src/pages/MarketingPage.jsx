import LandingHero from "../components/MarketingPage/LandingHero.jsx";
import TrustedBrands from "../components/MarketingPage/TrustedBrands.jsx";
import CreativeWorkSection from "../components/MarketingPage/CreativeWorkSection.jsx";
import SuccessNumbers from "../components/MarketingPage/SuccessNumbers.jsx";
import InHouseAISection from "../components/MarketingPage/InHouseAISection.jsx";
import ComparisonSection from "../components/MarketingPage/ComparisonSection.jsx";
import FlexCardsSection from "../components/MarketingPage/FlexCardsSection.jsx";
import OurWorkVideoSection from "../components/MarketingPage/OurWorkVideoSection.jsx";
import OurWorkGallerySection from "../components/MarketingPage/OurWorkGallerySection.jsx";
import MarketingFooter from "../components/MarketingPage/MarketingFooter.jsx";
import CreativeContinuitySection from "@/components/Competitive/CreativeContinuitySection.jsx";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandingHero />
      <TrustedBrands />
      <CreativeContinuitySection />
      <CreativeWorkSection />
      <SuccessNumbers />
      <OurWorkVideoSection />
      <OurWorkGallerySection />
      <MarketingFooter />
    </main>
  );
}
