import MarketingStrategyHero from "../components/MarketingStrat/MarketingStrategyHero";
import TrustedBrandsSingleRow from "../components/MarketingStrat/TrustedBrandsSingleRow";
import MarketingPowerSection from "../components/MarketingStrat/MarketingPowerSection";
import MarketingStrategyServicesGrid from "../components/MarketingStrat/MarketingStrategyServicesGrid";
import MarketingFooter from "../components/MarketingPage/MarketingFooter";
import MarketingStrategySection from "@/components/MarketingStrat/MarketingStrategySection";
import MarketingStrategyShowcase from "@/components/MarketingStrat/MarketingStrategyShowcase";




export default function MarketingStrategyServices() {
  return (
    <main className="min-h-screen bg-[#fbfaf8]">
      <MarketingStrategyHero />
      <TrustedBrandsSingleRow/>
      <MarketingPowerSection/>
      <MarketingStrategyServicesGrid/>
    
      <MarketingStrategyShowcase/>
      <MarketingStrategySection/>
      <MarketingFooter/>
      
    </main>
  );
}