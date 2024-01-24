import React from "react";
import Hartville1 from "@/public/featured-projects/hartville/finished-1.jpg";
import Hartville2 from "@/public/featured-projects/hartville/finished-2.jpg";
import Hartville3 from "@/public/featured-projects/hartville/finished-3.jpg";
import TyeBrown1 from "@/public/featured-projects/tye-brown/finished-1.jpg";
import TyeBrown2 from "@/public/featured-projects/tye-brown/finished-2.jpg";
import TyeBrown3 from "@/public/featured-projects/tye-brown/finished-3.jpg";
import FeaturedProgramPreview from "@/components/FeaturedProgramPreview";

const FeaturedProjects: React.FC = () => (
  <div className="px-4 sm:px-8 lg:px-12 2xl:px-16 py-8 lg:py-16 flex flex-col xl+:flex-row justify-center gap-8 2xl:gap-12">
    <FeaturedProgramPreview
      title="Modern landscaping"
      slug="modern-tiered-retaining-wall"
      description={`Completed in the summer of 2022, these distinctive retaining walls are built with the U-Cara retaining wall system.`}
      images={[Hartville2, Hartville1, Hartville3]}
      when={`July-August 2022`}
    />
    <FeaturedProgramPreview
      title={`Classic landscaping`}
      slug="multi-faceted-outdoor-living-space"
      description={`Check out this construction project completed in the fall of 2023, featuring a unique blend of natural stone hardscaping, quality woodwork and custom cedar accents.`}
      images={[TyeBrown1, TyeBrown2, TyeBrown3]}
      when={`August-September 2023`}
    />
  </div>
);

export default FeaturedProjects;
