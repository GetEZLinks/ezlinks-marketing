// src/app/page.tsx
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import DeveloperSection from '@/components/Developer/DeveloperSection';
import QRSection from '@/components/Developer/QRSection';
import AnalyticsSection from '@/components/Developer/AnalyticsSection';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import SDKSection from '@/components/SDKSection/SDKSection';
// import PricingSection from '@/components/PricingSection/PricingSection';
import ArchitectureSection from '@/components/ArchitectureSection/ArchitectureSection';
// import CaseStudySection from '@/components/CaseStudy/CaseStudy';
// import AttributionFlowSection from '@/components/AttributionFlow/AttributionFlowSection';
// import AIFeaturesSection from '@/components/AIFeatures/AIFeaturesSection';
import ScrollingCards from '@/components/ScrollingCards/ScrollingCards';
import UseCases from '@/components/UseCases/UseCases';
import PricingSection from '@/components/PricingSection/PricingSection';
// import UseCases from '@/components/UseCases/UseCases';


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Features /> */}
      <DeveloperSection />
      {/* <AttributionFlowSection /> */}
      <QRSection />
      <SDKSection />
      <AnalyticsSection />
      <ArchitectureSection />
      {/* <ScrollingCards />˝ */}
      <UseCases />  
      {/* <CaseStudySection /> */}
      {/* <AIFeaturesSection /> */}
      <PricingSection />
      <CTA />
      <Footer/>
    </main>
  );
}
