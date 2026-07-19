import MerbiCreativeHero from "@/components/DashboardAd/MerbiCreativeHero";
import MerbiCreativeStackSync from "@/components/DashboardAd/MerbiCreativeStackSync";
import MerbiProductivitySection from "@/components/DashboardAd/MerbiProductivitySection";
import MerbiWorkflowCards from "@/components/DashboardAd/MerbiWorkflowCards";

export default function DashboardAd(){
    return (
          <main className="min-h-screen bg-[#fbfaf8]">
            <MerbiCreativeHero/>
            <MerbiProductivitySection/>
            <MerbiWorkflowCards/>
            <MerbiCreativeStackSync/>
      
        
            </main>

    );
}