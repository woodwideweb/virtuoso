'use client';

import React from 'react';
import Hero from '@/components/Hero';
import SubHero from '@/components/SubHero';
import BadgesBlock from '@/components/BadgesBlock';
import AboutBlock from '@/components/AboutBlock';

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <SubHero />
      <BadgesBlock />
      <AboutBlock />
    </div>
  );
};

export default Home;
