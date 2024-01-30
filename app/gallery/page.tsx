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
import PatioInGravel2Img from "@/public/gallery/patio-in-gravel-2.jpg";
import PatioInGravel3Img from "@/public/gallery/patio-in-gravel-3.jpg";
import RaisedRoundPatio1Img from "@/public/gallery/raised-round-patio-1.jpg";
import RaisedRoundPatio2Img from "@/public/gallery/raised-round-patio-2.jpg";
import RaisedRoundPatio3Img from "@/public/gallery/raised-round-patio-3.jpg";
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

const Gallery: React.FC = () => (
  <div className="flex flex-col">
    <ImageViewerModal />
    <div className="pt-12 sm:pt-24 px-6 xs:px-8 sm:px-16 pb-8 sm:pb-12 flex flex-col justify-center items-center gap-6">
      <h1
        className={cx(
          `text-3xl xs:text-4xl sm:text-5xl text-black font-bold textcenter text-center`,
          montserrat,
        )}
      >
        Check out our work
      </h1>
    </div>
    <div className="flex justify-center items-center p-8 sm:p-12 md:p-20 bg-gradient-to-b bg-amber-100 rounded-[80px] my-8 lg:mx-12">
      <div className="flex-grow max-w-[1200px] grid grid-cols-2 md+:grid-cols-4 gap-4 lg:gap-8">
        <BigImage src={PeanutePatioImg} city="Wadsworth" year={2021} />
        <MediumImageHorizontal
          src={SlabStepsInGravel1Img}
          city="Wadsworth"
          year={2022}
        />
        <GalleryImage
          src={SlabStepsInGravel2Img}
          city="Wadsworth"
          year={2022}
        />
        <MediumImageVertical
          src={NaturalPaversWithFirepit1Img}
          city="Brecksville"
          year={2021}
        />
        <GalleryImage
          src={NaturalPaversWithFirepit2Img}
          city="Brecksville"
          year={2021}
        />
        <BigImage src={TieredWallByBarn1Img} city="Medina" year={2022} />
        <GalleryImage src={TieredWallByBarn2Img} city="Medina" year={2022} />
        <GalleryImage
          src={RockyOutcropByPoolImg}
          city="Hartville"
          year={2022}
        />
        <BigImage src={PatioInGravel1Img} city="Akron" year={2023} />
        <MediumImageHorizontal
          src={StepsThroughWallImg}
          city="Akron"
          year={2023}
        />
        <GalleryImage src={PatioInGravel2Img} city="Akron" year={2023} />
        <MediumImageVertical src={PatioInGravel3Img} city="Akron" year={2023} />
        <GalleryImage src={RaisedRoundPatio1Img} city="Wadsworth" year={2023} />
        <BigImage src={RaisedRoundPatio2Img} city="Wadsworth" year={2023} />
        <GalleryImage src={RaisedRoundPatio3Img} city="Wadsworth" year={2023} />
        <GalleryImage src={RaisedRoundPatio4Img} city="Wadsworth" year={2023} />
        <BigImage src={FlowerBedsSAroundHouseImg} city="TODO" year={9999} />
        <MediumImageHorizontal
          src={GiganticNaturalPaverPatioImg}
          city="TODO"
          year={9999}
        />
        <GalleryImage
          src={GiganticPatioWithFurnitureImg}
          city="TODO"
          year={9999}
        />
        <MediumImageVertical
          src={GravelStreamWithWaterfallImg}
          city="TODO"
          year={9999}
        />
        <GalleryImage
          src={NaturalPatioWithRedChairsImg}
          city="TODO"
          year={9999}
        />
        <BigImage src={RaisedBedWithBlackMulchImg} city="TODO" year={9999} />
        <GalleryImage
          src={RaisedPatioWithInsetStairImg}
          city="TODO"
          year={9999}
        />
        <GalleryImage src={RedChairsAroundFirepitImg} city="TODO" year={2023} />
        <MediumImageHorizontal
          src={RedChairsSideAngleImg}
          city="TODO"
          year={9999}
        />
        <MediumImageVertical
          src={SlabStepsWithStrawImg}
          city="TODO"
          year={9999}
        />
        <GalleryImage src={StonePatioWithGrillImg} city="TODO" year={9999} />
        <MediumImageVertical src={WaterfallImg} city="TODO" year={9999} />
        <GalleryImage src={WoodenArchImg} city="TODO" year={9999} />
      </div>
    </div>
  </div>
);

export default Gallery;
