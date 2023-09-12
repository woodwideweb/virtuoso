'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import cx from 'classnames';
import { useIntersectionObserver } from '@/lib/hooks';
import { useImageViewerState } from '@/state/image-viewer/hooks';

interface Props {
  src: StaticImageData;
  alt?: string;
  className?: string;
}

const GalleryImage: React.FC<Props> = ({ src, alt, className }) => {
  const { state, dispatch } = useImageViewerState();
  const { ref, intersected } = useIntersectionObserver({
    rootMargin: `0px`,
    threshold: 0.2,
  });
  return (
    <Image
      onClick={() => {
        dispatch({ type: `toggleImageViewerOpen`, payload: true });
        dispatch({ type: `setImageViewerImage`, payload: src });
      }}
      ref={ref}
      src={src}
      alt={alt || `Virtuoso Landscaping image`}
      className={cx(
        'object-center border-[0.5px] border-black object-cover h-full w-full rounded-[40px] transition-[transform,opacity] hover:scale-[103%] hover:-rotate-1 cursor-pointer duration-700',
        !intersected && `opacity-0 translate-y-8 pointer-events-none scale-105`,
        className,
      )}
      loading="lazy"
    />
  );
};

export default GalleryImage;

export const MediumImageVertical: React.FC<Props> = ({ src, alt, className }) => {
  return <GalleryImage src={src} alt={alt} className={cx(`row-span-2`, className)} />;
};

export const MediumImageHorizontal: React.FC<Props> = ({ src, alt, className }) => {
  return <GalleryImage src={src} alt={alt} className={cx(`col-span-2`, className)} />;
};

export const BigImage: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <GalleryImage
      src={src}
      alt={alt}
      className={cx(`row-span-2 col-span-2`, className)}
    />
  );
};
