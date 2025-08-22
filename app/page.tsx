'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import RifaSelector from '../components/RifaSelector';
import PrizeSection from '../components/PrizeSection';
import ProofSection from '../components/ProofSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <RifaSelector />
      <Features />
      <PrizeSection />
      <ProofSection />
      <Footer />
    </div>
  );
}