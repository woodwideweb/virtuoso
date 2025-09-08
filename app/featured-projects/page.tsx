import React from "react";
import ModernLandscapingImage1 from "@/public/featured-projects/modern-landscaping/finished-1.jpg";
import ModernLandscapingImage2 from "@/public/featured-projects/modern-landscaping/finished-2.jpg";
import ModernLandscapingImage3 from "@/public/featured-projects/modern-landscaping/finished-3.jpg";
import ClassicLandscapingImage1 from "@/public/featured-projects/classic-landscaping/finished-9.jpg";
import ClassicLandscapingImage2 from "@/public/featured-projects/classic-landscaping/finished-2.jpg";
import ClassicLandscapingImage3 from "@/public/featured-projects/classic-landscaping/finished-3.jpg";
import Vics1 from "@/public/featured-projects/natural-landscaping/finished-1.jpg";
import Vics2 from "@/public/featured-projects/natural-landscaping/finished-2.jpg";
import Vics3 from "@/public/featured-projects/natural-landscaping/finished-3.jpg";
import FeaturedProjectPreview from "@/components/FeaturedProjectPreview";
import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";

export const metadata = {
  title: `Virtuoso Landscaping ~ Featured Projects`,
  description: `Some featured projects from Virtuoso Landscaping.`,
};

const FeaturedProjects: React.FC = () => (
  <div className="relative">
    <div className="absolute h-full w-80 right-0 top-0 bg-gradient-to-r from-transparent to-amber-50 justify-end pr-8 items-center pointer-events-none hidden lg:flex">
      <IconChevronRight size={40} className="text-primary-800" />
    </div>
    <div className="flex flex-col lg:flex-row gap-8 lg:overflow-scroll px-6 lg:px-12 pt-8 lg:pt-12 pb-4 lg:pb-8 lg:pr-40">
      <FeaturedProjectPreview
        title="Modern landscaping"
        slug="modern-landscaping"
        description={`Completed in the summer of 2022, these distinctive retaining walls are built with the U-Cara retaining wall system.`}
        images={[
          ModernLandscapingImage2,
          ModernLandscapingImage1,
          ModernLandscapingImage3,
        ]}
        when={`July-August 2022`}
      />
      <FeaturedProjectPreview
        title={`Classic landscaping`}
        slug="classic-landscaping"
        description={`Check out this construction project completed in the fall of 2023, featuring a unique blend of natural stone hardscaping, quality woodwork and custom cedar accents.`}
        images={[
          ClassicLandscapingImage1,
          ClassicLandscapingImage2,
          ClassicLandscapingImage3,
        ]}
        when={`August-September 2023`}
      />

      <FeaturedProjectPreview
        title={`Natural landscaping`}
        slug="natural-landscaping"
        description={`For this two-tiered poolside patio, we blended the existing natural flagstone and boulders to compliment the Unilock wall stone and pavers to achieve a functional outdoor living area that highlights the beauty of this stunning log home.  
      `}
        images={[Vics1, Vics2, Vics3]}
        when={`March-April 2024`}
      />
    </div>
  </div>
);

export default FeaturedProjects;
