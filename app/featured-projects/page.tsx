import React from "react";
import ModernLandscapingImage1 from "@/public/featured-projects/modern-landscaping/finished-1.jpg";
import ModernLandscapingImage2 from "@/public/featured-projects/modern-landscaping/finished-2.jpg";
import ModernLandscapingImage3 from "@/public/featured-projects/modern-landscaping/finished-3.jpg";
import ClassicLandscapingImage1 from "@/public/featured-projects/classic-landscaping/finished-1.jpg";
import ClassicLandscapingImage2 from "@/public/featured-projects/classic-landscaping/finished-2.jpg";
import ClassicLandscapingImage3 from "@/public/featured-projects/classic-landscaping/finished-3.jpg";
import Vics1 from "@/public/featured-projects/natural-landscaping/progress-1.jpg";
import Vics2 from "@/public/featured-projects/natural-landscaping/progress-2.jpg";
import Vics3 from "@/public/featured-projects/natural-landscaping/progress-3.jpg";
import FeaturedProjectPreview from "@/components/FeaturedProjectPreview";

export const metadata = {
  title: `Virtuoso Landscaping ~ Featured Projects`,
  description: `Some featured projects from Virtuoso Landscaping.`,
};

const FeaturedProjects: React.FC = () => (
  <div className="px-4 sm:px-8 lg:px-12 2xl:px-16 py-8 lg:py-16 flex flex-col xl+:flex-row justify-center gap-8 2xl:gap-12">
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
      title={`Natural Landscaping`}
      slug="natural-landscaping"
      description={`For this two-tiered poolside patio, we blended the existing natural flagstone and boulders to compliment the Unilock wall stone and pavers to achieve a functional outdoor living area that highlights the beauty of this stunning log home.  
      `}
      images={[Vics1, Vics2, Vics3]}
      when={`March-April 2024`}
    />
  </div>
);

export default FeaturedProjects;
