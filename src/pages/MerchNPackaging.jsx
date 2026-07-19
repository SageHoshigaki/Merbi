import MerbiPackagingHero from "../components/PackagingNMerch/MerbiPackagingHero"
import TrustedBrandsSingleRow from "../components/MarketingStrat/TrustedBrandsSingleRow"
import PackagingMerchSection from "../components/PackagingNMerch/PackagingMerchSection"
import PackagingMerchCarousel from "../components/PackagingNMerch/PackagingMerchCarousel"
import MarketingFooter from "../components/MarketingPage/MarketingFooter"
import MerbiIntelligentSystem from "@/components/shared/MerbiIntelligentSystem"
import MerchPackagingMetrics from "@/components/PackagingNMerch/MerchPackagingMetrics"
import MerchPackagingCloseout from "@/components/PackagingNMerch/MerchPackagingCloseout"

export default function MerchNPackaging(){
    return(
        <div>
            <MerbiPackagingHero/>
            <TrustedBrandsSingleRow/>
            <PackagingMerchSection/>
             <PackagingMerchCarousel/>
              <MerchPackagingMetrics/>
              <MerbiIntelligentSystem/>
              <MerchPackagingCloseout/>
               <MarketingFooter/>

        </div>
    )
}