// src/app/page.tsx
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer/>
    </main>
  );
}
