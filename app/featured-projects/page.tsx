import React from "react";
import Image from "next/image";
import cx from "classnames";
import type { StaticImageData } from "next/image";
import Hartville1 from "@/public/featured-projects/hartville/finished-1.jpg";
import Hartville2 from "@/public/featured-projects/hartville/finished-2.jpg";
import Hartville3 from "@/public/featured-projects/hartville/finished-3.jpg";
import TyeBrown1 from "@/public/featured-projects/tye-brown/finished-1.jpg";
import TyeBrown2 from "@/public/featured-projects/tye-brown/finished-2.jpg";
import TyeBrown3 from "@/public/featured-projects/tye-brown/finished-3.jpg";
import { montserrat } from "@/lib/fonts";

const FeaturedProjects: React.FC = () => (
  <div className="p-20 flex justify-center gap-12">
    <FeaturedProgramPreview
      title={`Large-scale residential walls`}
      description={`Lorem ipsum dolor sit amet consectetur adipisicing elit, adipisci veniam nulla magnam.`}
      images={[Hartville2, Hartville1, Hartville3]}
      where={`Hartville, OH`}
      when={`July-August 2022`}
      cost={220000}
    />
    <FeaturedProgramPreview
      title={`Residential patio and deck construction`}
      description={`Lorem ipsum dolor sit amet consectetur adipisicing elit, adipisci veniam nulla magnam lorem ip.`}
      images={[TyeBrown1, TyeBrown2, TyeBrown3]}
      where={`Fairlawn, OH`}
      when={`August-September 2023`}
      cost={42500}
    />
  </div>
);

export default FeaturedProjects;

interface Props {
  title: string;
  description: string;
  images: [StaticImageData, StaticImageData, StaticImageData];
  where: string;
  when: string;
  cost: number;
}

const FeaturedProgramPreview: React.FC<Props> = ({
  title,
  description,
  images,
  where,
  when,
  cost,
}) => (
  <div className="flex-grow rounded-[60px] overflow-hidden flex">
    <div className="bg-amber-100 p-12 rounded-xl">
      <h2 className={cx(`text-2xl font-bold`, montserrat)}>{title}</h2>
      <p className="mt-4 text-base text-black/60">{description}</p>
    </div>
    <div className="w-96 grid grid-cols-2 shrink-0 pl-4 gap-4">
      <Image
        src={images[0]}
        alt={title}
        className="h-full w-full object-center object-cover rounded-xl col-span-2"
      />
      <Image
        src={images[1]}
        alt={title}
        className="h-full w-full object-center object-cover rounded-xl"
      />
      <Image
        src={images[2]}
        alt={title}
        className="h-full w-full object-center object-cover rounded-xl"
      />
    </div>
  </div>
);
