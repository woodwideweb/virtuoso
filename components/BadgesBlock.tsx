import React from "react";
import Image from "next/image";
import NALPLogo from "@/public/badges/nalp.png";
import GBBLogo from "@/public/badges/green-business-benchmark-2024.png";
import AngiesListLogo from "@/public/badges/angies-list-award-2022-transparent.png";
import SIMALogo from "@/public/badges/sima-logo.png";
// import SIMALogo from "@/public/badges/sima.jpg";

const BadgesBlock: React.FC = () => (
  <div className="bg-primary-300 p-0 sm:p-12 xl:p-20 flex sm:rounded-b-[80px] sm:rounded-tl-[80px]">
    <div className="bg-primary-500 rounded-[80px] my-12 sm:my-0 p-12 flex flex-wrap items-center justify-center gap-x-20 gap-y-8 flex-grow">
      {/* <Image
        src={NALPLogo}
        alt="National Association of Landscape Professionals member"
        className="shrink-0 brightness-[500%] h-16 xl:h-28 w-52 xl:w-96"
      /> */}
      {/* I'm going to try to find a better version of SIMA's logo... */}
      <Image
        src={SIMALogo}
        alt="National Association of Landscape Professionals member"
        // className="shrink-0 brightness-[500%] h-16 xl:h-28 w-52 xl:w-96"
        className="shrink-0 [filter:grayscale()_brightness(1)]x h-16 w-auto xl:h-28 w-5x2 xl:xw-96"
      />
      <Image
        src={AngiesListLogo}
        alt="Angie's List Super Service Award 2022"
        className="shrink-0 [filter:grayscale()_brightness(100)] h-24 xl:h-40 w-28 xl:w-48"
      />
      <Image
        src={GBBLogo}
        alt="Green Business Bureau member"
        className="shrink-0 xl:h-36 w-40 xl:w-64"
      />
    </div>
  </div>
);

export default BadgesBlock;
