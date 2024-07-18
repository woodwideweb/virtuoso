import React from "react";
import cx from "classnames";
import GalleryImage, {
  BigImage,
  MediumImageHorizontal,
  MediumImageVertical,
} from "@/components/GalleryImage";
import { montserrat } from "@/lib/fonts";
import ImageViewerModal from "@/components/ImageViewerModal";

import PeanutePatioImg from "@/public/gallery/peanut-patio.jpg";
import SlabStepsInGravel1Img from "@/public/gallery/slab-steps-in-gravel-1.jpg";
import SlabStepsInGravel2Img from "@/public/gallery/slab-steps-in-gravel-2.jpg";
import NaturalPaversWithFirepit1Img from "@/public/gallery/natural-pavers-with-firepit-1.jpg";
import NaturalPaversWithFirepit2Img from "@/public/gallery/natural-pavers-with-firepit-2.jpg";
import TieredWallByBarn1Img from "@/public/gallery/tiered-wall-by-barn-1.jpg";
import TieredWallByBarn2Img from "@/public/gallery/tiered-wall-by-barn-2.jpg";
import RockyOutcropByPoolImg from "@/public/gallery/rocky-outcrop-by-pool.jpg";
import PatioInGravel1Img from "@/public/gallery/patio-in-gravel-1.jpg";
import StepsThroughWallImg from "@/public/gallery/steps-through-wall.jpg";
import RaisedRoundPatio1Img from "@/public/gallery/raised-round-patio-1.jpg";
import RaisedRoundPatio4Img from "@/public/gallery/raised-round-patio-4.jpg";
import FlowerBedsSAroundHouseImg from "@/public/gallery/flower-beds-around-house.jpg";
import GiganticNaturalPaverPatioImg from "@/public/gallery/gigantic-natural-paver-patio.jpg";
import GiganticPatioWithFurnitureImg from "@/public/gallery/gigantic-patio-with-furniture.jpg";
import GravelStreamWithWaterfallImg from "@/public/gallery/gravel-stream-with-waterfall.jpg";
import NaturalPatioWithRedChairsImg from "@/public/gallery/natural-patio-with-red-chairs.jpg";
import RaisedBedWithBlackMulchImg from "@/public/gallery/raised-bed-with-black-mulch.jpg";
import RaisedPatioWithInsetStairImg from "@/public/gallery/raised-patio-with-inset-stair.jpg";
import RedChairsAroundFirepitImg from "@/public/gallery/red-chairs-around-firepit.jpg";
import RedChairsSideAngleImg from "@/public/gallery/red-chairs-side-angle.jpg";
import SlabStepsWithStrawImg from "@/public/gallery/slab-steps-with-straw.jpg";
import StonePatioWithGrillImg from "@/public/gallery/stone-patio-with-grill.jpg";
import WaterfallImg from "@/public/gallery/waterfall.jpg";
import WoodenArchImg from "@/public/gallery/wooden-arch.jpg";
import EvergreenByWalkwayImg from "@/public/gallery/evergreen-by-walkway.jpg";
import JaggedWalkwayImg from "@/public/gallery/jagged-walkway.jpg";

import ModernLandscaping1Img from "@/public/featured-projects/modern-landscaping/finished-1.jpg";
import ModernLandscaping2Img from "@/public/featured-projects/modern-landscaping/finished-2.jpg";
import ModernLandscaping3Img from "@/public/featured-projects/modern-landscaping/finished-3.jpg";

export const metadata = {
  title: `Virtuoso Landscaping ~ Gallery`,
  description: `Images of some of our completed or in-progress projects.`,
};

const Gallery: React.FC = () => (
  <div className="flex flex-col">
    <ImageViewerModal />
    <div className="pt-12 sm:pt-24 px-6 xs:px-8 sm:px-16 pb-8 sm:pb-12 flex flex-col justify-center items-center gap-6">
      <h1
        className={cx(
          `text-3xl xs:text-4xl sm:text-5xl text-black font-bold textcenter text-center`,
          montserrat
        )}
      >
        Check out our work
      </h1>
    </div>
    <div className="flex justify-center items-center p-8 sm:p-12 md:p-20 bg-gradient-to-b bg-amber-100 rounded-[80px] my-8 lg:mx-12">
      <div className="flex-grow max-w-[1200px] grid grid-cols-2 md+:grid-cols-4 gap-4 lg:gap-8">
        <BigImage
          src={RedChairsSideAngleImg}
          city="Brecksville, OH"
          year={2021}
        />
        <MediumImageHorizontal
          src={SlabStepsInGravel1Img}
          city="Wadsworth, OH"
          year={2022}
        />
        <GalleryImage src={WoodenArchImg} city="Kansas City, KS" year={2004} />

        <MediumImageVertical
          src={WaterfallImg}
          city="Blue Springs, MO"
          year={2005}
        />
        <GalleryImage
          src={NaturalPaversWithFirepit2Img}
          city="Brecksville, OH"
          year={2021}
        />
        <BigImage src={TieredWallByBarn1Img} city="Medina, OH" year={2022} />
        {/* <GalleryImage
          src={TieredWallByBarn2Img}
          city="Medina, OH"
          year={2022}
        /> */}
        <GalleryImage
          src={RockyOutcropByPoolImg}
          city="Hartville, OH"
          year={2022}
        />
        <BigImage src={PatioInGravel1Img} city="Akron, OH" year={2023} />
        <MediumImageHorizontal
          src={StepsThroughWallImg}
          city="Akron, OH"
          year={2023}
        />
        <GalleryImage
          src={RaisedRoundPatio1Img}
          city="Wadsworth, OH"
          year={2023}
        />
        <GalleryImage
          src={RaisedRoundPatio4Img}
          city="Wadsworth, OH"
          year={2023}
        />
        <BigImage
          src={FlowerBedsSAroundHouseImg}
          city="Kansas City, MO"
          year={2001}
        />
        <MediumImageHorizontal
          src={GiganticNaturalPaverPatioImg}
          city="Blue Springs, MO"
          year={2005}
        />
        <GalleryImage
          src={GiganticPatioWithFurnitureImg}
          city="Blue Springs, MO"
          year={2005}
        />
        <MediumImageVertical
          src={GravelStreamWithWaterfallImg}
          city="Kansas City, MO"
          year={2001}
        />
        <GalleryImage
          src={NaturalPatioWithRedChairsImg}
          city="Brecksville, OH"
          year={2021}
        />
        <BigImage
          src={RaisedBedWithBlackMulchImg}
          city="Medina, OH"
          year={2021}
        />
        <GalleryImage
          src={RaisedPatioWithInsetStairImg}
          city="Hinkley, OH"
          year={2022}
        />
        <GalleryImage
          src={RedChairsAroundFirepitImg}
          city="Brecksville, OH"
          year={2021}
        />
        <MediumImageHorizontal
          src={ModernLandscaping1Img}
          city="Hartville, OH"
          year={2022}
        />
        <MediumImageHorizontal
          src={ModernLandscaping2Img}
          city="Hartville, OH"
          year={2022}
        />
        <GalleryImage
          src={ModernLandscaping3Img}
          city="Hartville, OH"
          year={2022}
        />
        <MediumImageHorizontal
          src={PeanutePatioImg}
          city="Wadsworth, OH"
          year={2021}
        />
        <MediumImageVertical
          src={SlabStepsWithStrawImg}
          city="Medina, OH"
          year={2022}
        />
        <GalleryImage
          src={StonePatioWithGrillImg}
          city="Overlandpark, KS"
          year={2003}
        />
        <MediumImageVertical
          src={NaturalPaversWithFirepit1Img}
          city="Brecksville, OH"
          year={2021}
        />
        <GalleryImage
          src={SlabStepsInGravel2Img}
          city="Wadsworth, OH"
          year={2022}
        />
        <GalleryImage
          src={EvergreenByWalkwayImg}
          city="Hartville, OH"
          year={2023}
        />
        {/* <MediumImageHorizontal
          src={JaggedWalkwayImg}
          city="Hartville, OH"
          year={2023}
        /> */}
      </div>
    </div>
  </div>
);

export default Gallery;
