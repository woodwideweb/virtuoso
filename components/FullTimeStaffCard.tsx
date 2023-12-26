"use client";

import React from "react";
import cx from "classnames";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { montserrat } from "@/lib/fonts";
import { useIntersectionObserver } from "@/lib/hooks";

interface FullTimeStaffCardProps {
  name: string;
  title: string;
  description: string;
  photo: StaticImageData;
  imagePosition: string;
}

const FullTimeStaffCard: React.FC<FullTimeStaffCardProps> = ({
  name,
  title,
  description,
  photo,
  imagePosition,
}) => {
  const { ref, intersected } = useIntersectionObserver({
    threshold: 0.7,
  });
  return (
    <div
      ref={ref}
      className={cx(
        `flex flex-col md:flex-row items-center md:items-start lg:items-center gap-8 bg-primary-700/10 rounded-3xl sm:rounded-[40px] lg:rounded-full p-6 sm:p-8 lg:pr-20 transition-[opacity,transform] duration-500`,
        !intersected && `opacity-0 translate-y-4`,
      )}
    >
      <Image
        src={photo}
        alt={name}
        className={cx(
          `w-40 lg:w-64 h-40 lg:h-64 rounded-full md:rounded-3xl lg:rounded-full object-cover shrink-0`,
          imagePosition,
        )}
      />
      <div>
        <h3 className={cx(`text-2xl sm:text-3xl font-semibold`, montserrat)}>
          {name}
        </h3>
        <h4 className="text-lg font-medium text-primary-800">{title}</h4>
        <p className="mt-2 text-lg text-black/60">{description}</p>
      </div>
    </div>
  );
};

export default FullTimeStaffCard;
