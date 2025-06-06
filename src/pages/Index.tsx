
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DonationSection from '@/components/DonationSection';
import NewsSection from '@/components/NewsSection';
import TeamSection from '@/components/TeamSection';
import DonationMethodsSection from '@/components/DonationMethodsSection';
import DonationGraph from '@/components/DonationGraph';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRTL } from '@/hooks/useRTL';

const Index = () => {
  const { language } = useLanguage();
  useRTL(); // Apply RTL styling when needed
  
  const isRTL = language === 'ar' || language === 'ur';
  
  return (
    <div className={`min-h-screen ${isRTL ? 'rtl-content' : ''}`}>
      <Navbar />
      <Hero />
      <NewsSection />
      <DonationGraph />
      <TeamSection />
      <DonationSection />
      <DonationMethodsSection />
      <Footer />
    </div>
  );
};

export default Index;
