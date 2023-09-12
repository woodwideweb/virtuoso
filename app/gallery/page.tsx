'use client';

import React from 'react';
import cx from 'classnames';

import Mountains1 from '@/public/mountains-1.png';
import Hartville1 from '@/public/featured-projects/hartville/finished-1.jpg';
import Hartville2 from '@/public/featured-projects/hartville/finished-2.jpg';
import Hartville3 from '@/public/featured-projects/hartville/finished-3.jpg';
import GalleryImage, {
  BigImage,
  MediumImageHorizontal,
  MediumImageVertical,
} from '@/components/GalleryImage';
import { montserrat } from '@/lib/fonts';
import ImageViewerModal from '@/components/ImageViewerModal';
import { useImageViewerState } from '@/state/image-viewer/hooks';

const Gallery: React.FC = ({}) => {
  const { state, dispatch } = useImageViewerState();

  return (
    <div className="flex flex-col">
      <ImageViewerModal />
      <div className="pt-24 px-24 pb-12 flex flex-col justify-center items-center gap-6">
        <h1 className={cx('text-5xl text-black font-bold textcenter', montserrat)}>
          Check out our work
        </h1>
        <p className="text-2xl text-black/60 max-w-6xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum
          magnam necessitatibus ullam accusamus consequatur cum, totam dolore, vero itaque
          quam corporis explicabo officiis beatae doloribus at cupiditate numquam maxime.
        </p>
      </div>
      <div className="flex justify-center items-center p-20 bg-gradient-to-b bg-amber-100 rounded-[80px] my-8 mx-12">
        <div className="flex-grow max-w-[1200px] grid grid-cols-2 md-lg:grid-cols-4 gap-4 lg:gap-8">
          <BigImage src={Mountains1} />
          <MediumImageHorizontal src={Hartville1} />
          <GalleryImage src={Hartville2} />
          <MediumImageVertical src={Hartville3} />
          <GalleryImage src={Mountains1} />
          <BigImage src={Hartville1} />
          <GalleryImage src={Hartville2} />
          <GalleryImage src={Hartville3} />
          <BigImage src={Mountains1} />
          <MediumImageHorizontal src={Hartville1} />
          <GalleryImage src={Hartville2} />
          <MediumImageVertical src={Hartville3} />
          <GalleryImage src={Mountains1} />
          <BigImage src={Hartville1} />
          <GalleryImage src={Hartville2} />
          <GalleryImage src={Hartville3} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
