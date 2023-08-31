'use client';

import React from 'react';
import Hero from '@/components/Hero';
import SubHero from '@/components/SubHero';
import BadgesBlock from '@/components/BadgesBlock';
import AboutBlock from '@/components/AboutBlock';
import MapBlock from '@/components/MapBlock';

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <SubHero />
      <BadgesBlock />
      <AboutBlock />
      <MapBlock />
    </div>
  );
};

export default Home;
