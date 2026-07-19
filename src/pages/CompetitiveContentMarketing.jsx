import CreativeContinuitySection from "@/components/Competitive/CreativeContinuitySection";
import CompetitiveContentHero from "../components/Competitive/CompetitiveContentHero";
import ModelFeatureSplit from "../components/shared/ModelFeatureSplit";
import SuccessMetricsSection from "@/components/Competitive/SuccessMetricsSection";
import CompetitiveIntelligenceSection from "@/components/Competitive/CompetitiveIntelligenceSection";
import MarketingFooter from "@/components/MarketingPage/MarketingFooter";

export default function CompetitiveContentMarketing() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f6f1e8] text-[#111111]">
      <CompetitiveContentHero />
      <CreativeContinuitySection/>
      <ModelFeatureSplit />
      <SuccessMetricsSection/>
      <CompetitiveIntelligenceSection/>
      <MarketingFooter/>

      {/* Add each new page section here as a standalone component. */}
    </main>
  );
}