"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import { IconArrowRight } from "@tabler/icons-react";
import type { StaticImageData } from "next/image";
import Button from "./Button";
import { montserrat } from "@/lib/fonts";

interface Props {
  title: string;
  slug: string;
  description: string;
  images: [StaticImageData, StaticImageData, StaticImageData];
  when: string;
}

const FeaturedProgramPreview: React.FC<Props> = ({
  title,
  slug,
  description,
  images,
  when,
}) => (
  <div className="flex-grow rounded-[60px] flex flex-col md:flex-row xs:bg-amber-100 xs:p-4 gap-3 xs:gap-4">
    <div className="p-6 xs:p-8 sm:p-10 rounded-xl bg-primary-700/20 rounded-t-3xl xs:rounded-t-[50px] md:rounded-tr-xl md:rounded-l-[50px] flex flex-col justify-between flex-grow min-w-[340px]">
      <div className="mb-8">
        <h3 className="font-medium text-black/50 mb-1">{when}</h3>
        <h2 className={cx(`text-2xl font-bold`, montserrat)}>{title}</h2>
        <p className="mt-4 text-base text-black/60">{description}</p>
      </div>
      <Button
        type="link"
        to={`/featured-projects/${slug}`}
        color="primary"
        icon={IconArrowRight}
        className="sm:self-start xl+:self-stretch"
      >
        View project
      </Button>
    </div>
    <div className="md:w-96 xl+:w-80 2xl:w-96 grid grid-cols-2 shrink-0 gap-3 xs:gap-4">
      <Image
        src={images[0]}
        alt={title}
        className="h-40 xs:h-52 sm:h-72 md:h-full w-full object-center object-cover rounded-xl col-span-2 md:rounded-tr-[50px]"
      />
      <Image
        src={images[1]}
        alt={title}
        className="h-28 xs:h-40 sm:h-52 md:h-full w-full object-center object-cover rounded-xl rounded-bl-3xl xs:rounded-bl-[50px] md:rounded-bl-xl"
      />
      <Image
        src={images[2]}
        alt={title}
        className="h-28 xs:h-40 sm:h-52 md:h-full w-full object-center object-cover rounded-xl rounded-br-3xl xs:rounded-br-[50px]"
      />
    </div>
  </div>
);

export default FeaturedProgramPreview;
