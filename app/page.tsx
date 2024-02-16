import React from "react";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import BadgesBlock from "@/components/BadgesBlock";
import AboutBlock from "@/components/AboutBlock";
import MapBlock from "@/components/MapBlock";
import TestimonialsBlock from "@/components/TestimonialsBlock";

export const metadata = {
  title: `Virtuoso Landscaping`,
  description: `Virtuoso Landscaping is a full-service landscaping company that provides design, installation, and maintenance services to residential and commercial clients in and surrounding Medina and Summit county.`,
};

const Home: React.FC = () => (
  <div>
    <Hero />
    <SubHero />
    <BadgesBlock />
    <TestimonialsBlock />
    <AboutBlock />
    <MapBlock />
  </div>
);

export default Home;
