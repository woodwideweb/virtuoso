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
      title={`Large-scale residential walls`}
      slug="hartville"
      description={`Lorem ipsum dolor sit amet consectetur adipisicing elit, adipisci veniam nulla magnam.`}
      images={[Hartville2, Hartville1, Hartville3]}
      when={`July-August 2022`}
    />
    <FeaturedProgramPreview
      title={`Residential patio and deck construction`}
      slug="tye-browns"
      description={`Lorem ipsum dolor sit amet consectetur adipisicing elit, adipisci veniam nulla magnam lorem ip.`}
      images={[TyeBrown1, TyeBrown2, TyeBrown3]}
      when={`August-September 2023`}
    />
  </div>
);

export default FeaturedProjects;
