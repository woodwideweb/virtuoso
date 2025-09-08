"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import type { StaticImageData } from "next/image";
import { useIntersectionObserver } from "@/lib/hooks";
import { useImageViewerState } from "@/state/image-viewer/hooks";

interface Props {
  src: StaticImageData;
  year: number;
  city: string;
  alt?: string;
  className?: string;
}

const GalleryImage: React.FC<Props> = ({ src, alt, className, year, city }) => {
  const { dispatch } = useImageViewerState();
  const { ref, intersected } = useIntersectionObserver({
    rootMargin: `0px`,
    threshold: 0.2,
  });
  return (
    <div
      className={cx(
        `border-[0.5px] border-black h-full w-full rounded-3xl md:rounded-[40px] transition-[transform,opacity] hover:scale-[103%] cursor-pointer duration-700 overflow-hidden relative`,
        !intersected && `opacity-0 translate-y-8 pointer-events-none scale-105`,
        className,
      )}
      onClick={() => {
        dispatch({ type: `toggleImageViewerOpen`, payload: true });
        dispatch({ type: `setImageViewerImage`, payload: src });
      }}
    >
      <Image
        ref={ref}
        src={src}
        alt={alt || `Virtuoso Landscaping image`}
        className={cx(`object-center object-cover w-full h-full`)}
        loading="lazy"
      />
      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-900/90 flex flex-col justify-end items-start p-8 opacity-0 hover:opacity-100 transition-opacity duration-300 group">
        <span className="font-semibold text-lg text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {year}
        </span>
        <span className="font-medium text-xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {city}
        </span>
      </div>
    </div>
  );
};

export default GalleryImage;
