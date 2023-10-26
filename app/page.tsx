"use client";

import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import BadgesBlock from "@/components/BadgesBlock";
import AboutBlock from "@/components/AboutBlock";
import MapBlock from "@/components/MapBlock";
import TestimonialsBlock from "@/components/TestimonialsBlock";

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Virtuoso Landscaping</title>
    </Head>
    <Hero />
    <SubHero />
    <BadgesBlock />
    <TestimonialsBlock />
    <AboutBlock />
    <MapBlock />
  </div>
);

export default Home;
