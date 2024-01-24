import React from "react";
import cx from "classnames";
import GalleryImage, {
  BigImage,
  MediumImageHorizontal,
  MediumImageVertical,
} from "@/components/GalleryImage";
import { montserrat } from "@/lib/fonts";
import ImageViewerModal from "@/components/ImageViewerModal";

import Wadsworth2021_0 from "@/public/gallery/2021-wadsworth-0.jpg";
import Wadsworth2022_0 from "@/public/gallery/2022-wadsworth-0.jpg";
import Wadsworth2022_1 from "@/public/gallery/2022-wadsworth-1.jpg";
import Brecksville2021_0 from "@/public/gallery/2021-brecksville-0.jpg";
import Brecksville2021_1 from "@/public/gallery/2021-brecksville-1.jpg";
import Medina2022_0 from "@/public/gallery/2022-medina-0.jpg";
import Medina2022_1 from "@/public/gallery/2022-medina-1.jpg";
import Hartville2022_0 from "@/public/gallery/2022-hartville-0.jpg";
import Akron2023_0 from "@/public/gallery/2023-akron-0.jpg";
import Akron2023_1 from "@/public/gallery/2023-akron-1.jpg";
import Akron2023_2 from "@/public/gallery/2023-akron-2.jpg";
import Akron2023_3 from "@/public/gallery/2023-akron-3.jpg";
import Wadsworth2023_0 from "@/public/gallery/2023-wadsworth-0.jpg";
import Wadsworth2023_1 from "@/public/gallery/2023-wadsworth-1.jpg";
import Wadsworth2023_2 from "@/public/gallery/2023-wadsworth-2.jpg";
import Wadsworth2023_3 from "@/public/gallery/2023-wadsworth-3.jpg";

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
        <BigImage src={Wadsworth2021_0} city="Wadsworth" year={2021} />
        <MediumImageHorizontal
          src={Wadsworth2022_0}
          city="Wadsworth"
          year={2022}
        />
        <GalleryImage src={Wadsworth2022_1} city="Wadsworth" year={2022} />
        <MediumImageVertical
          src={Brecksville2021_0}
          city="Brecksville"
          year={2021}
        />
        <GalleryImage src={Brecksville2021_1} city="Brecksville" year={2021} />
        <BigImage src={Medina2022_0} city="Medina" year={2022} />
        <GalleryImage src={Medina2022_1} city="Medina" year={2022} />
        <GalleryImage src={Hartville2022_0} city="Hartville" year={2022} />
        <BigImage src={Akron2023_0} city="Akron" year={2023} />
        <MediumImageHorizontal src={Akron2023_1} city="Akron" year={2023} />
        <GalleryImage src={Akron2023_2} city="Akron" year={2023} />
        <MediumImageVertical src={Akron2023_3} city="Akron" year={2023} />
        <GalleryImage src={Wadsworth2023_0} city="Wadsworth" year={2023} />
        <BigImage src={Wadsworth2023_1} city="Wadsworth" year={2023} />
        <GalleryImage src={Wadsworth2023_2} city="Wadsworth" year={2023} />
        <GalleryImage src={Wadsworth2023_3} city="Wadsworth" year={2023} />
      </div>
    </div>
  </div>
);

export default Gallery;
