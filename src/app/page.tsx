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
import PricingSection from '@/components/PricingSection/PricingSection';


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <DeveloperSection />
      <QRSection />
      <AnalyticsSection />
      <SDKSection />
      <PricingSection />
      <CTA />
      <Footer/>
    </main>
  );
}
