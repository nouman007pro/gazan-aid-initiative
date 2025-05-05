
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DonationSection from '@/components/DonationSection';
import NewsSection from '@/components/NewsSection';
import TeamSection from '@/components/TeamSection';
import DonationMethodsSection from '@/components/DonationMethodsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <NewsSection />
      <TeamSection />
      <DonationSection />
      <DonationMethodsSection />
      <Footer />
    </div>
  );
};

export default Index;
