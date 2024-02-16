"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import { IconArrowRight, IconLeaf } from "@tabler/icons-react";
import type { StaticImageData } from "next/image";
import Button from "./Button";
import { montserrat } from "@/lib/fonts";
import Finished1 from "@/public/featured-projects/classic-landscaping/finished-8.jpg";
import Finished2 from "@/public/featured-projects/modern-landscaping/finished-2.jpg";
import ElectricEquipment1 from "@/public/electric-equipment.jpg";
import ElectricEquipment2 from "@/public/electric-equipment-2.jpg";
import PrimaryWave from "@/public/primary-wave.svg";
import AmberWave from "@/public/amber-wave.svg";

const AboutBlock: React.FC = () => (
  <div className="px-4 xs:px-8 md:px-12 py-8 md:py-12 flex flex-col min-[1400px]:flex-row gap-6 md:gap-8 2xl:gap-12">
    <div
      className="flex-grow p-8 md:p-12 2xl:p-16 rounded-3xl md:rounded-[60px] bg-amber-100 flex flex-col"
      style={{
        background: `url(${AmberWave.src})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <h2
        className={cx(`text-3xl xs:text-4xl md:text-5xl font-bold`, montserrat)}
      >
        Dedicated to quality
      </h2>
      <p className="text-lg md:text-xl text-black/60 mt-4 md:mt-6">
        In a time when quality of work is often sacrificed for the sake of time
        and money, our commitment is to work within your budget without making
        that compromise. We count it a privilege to earn your trust as a
        customer, and we endeavor to keep it by ensuring we exceed industry
        standards with our finished product, no matter how big or small the job.
      </p>
      <div className="flex flex-col md:flex-row min-[1400px]:flex-col 2xl:flex-row mt-8 md:mt-12 gap-6 md:gap-8 2xl:gap-12">
        <FeaturedProject
          href="/featured-projects/modern-landscaping"
          src={Finished2}
          title={`Modern landscaping`}
        />
        <FeaturedProject
          href="/featured-projects/classic-landscaping"
          src={Finished1}
          title={`Classic landscaping`}
        />
      </div>
    </div>
    <div className="flex-grow flex flex-col gap-6 md:gap-8 2xl:gap-12">
      <div
        className="p-8 md:p-12 2xl:p-16 rounded-3xl md:rounded-[60px] bg-primary-300"
        style={{
          background: `url(${PrimaryWave.src})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <h2
          className={cx(
            `text-3xl xs:text-4xl md:text-5xl font-bold flex flex-wrap`,
            montserrat,
          )}
        >
          Leaders in{` `}
          <span className="text-primary-800 flex items-center ml-3 gap-2">
            green <IconLeaf className="" size={40} />
          </span>
        </h2>
        <p className="text-black/60 text-lg md:text-xl mt-4 md:mt-6">
          If you see us around town, you'll quickly notice that green is not
          just our primary logo color. We began switching over all of our lawn
          care equipment to battery power in 2020. We were one of the first
          companies in the area (if not the very first) to make this change. Our
          crews can be daily seen operating battery-powered weed eaters,
          blowers, chain saws, hedge trimmers, push mowers, and commercial
          zero-turn fully electric mowers. We have made it a top priority to
          stay "ahead of the game" in environmental awareness in order to reduce
          our carbon footprint and minimize both the noise and the smell of
          gas-powered engines while on your property.
        </p>
      </div>
      <div className="flex gap-6 md:gap-8 2xl:gap-12 min-[1400px]:flex-grow h-52 xs:h-64 sm:h-80 min-[1400px]:h-auto">
        <Image
          className="rounded-3xl md:rounded-[60px] w-0 flex-grow md:min-w-[300px] object-cover object-center border-[0.5px] border-amber-500"
          alt="todo"
          src={ElectricEquipment1}
        />
        <Image
          className="rounded-3xl md:rounded-[60px] w-0 flex-grow md:min-w-[300px] object-cover object-center border-[0.5px] border-amber-500"
          alt="todo"
          src={ElectricEquipment2}
        />
      </div>
    </div>
  </div>
);

export default AboutBlock;

interface Props {
  src: StaticImageData;
  title: string;
  href: string;
}

// TODO: get good pictures here
const FeaturedProject: React.FC<Props> = ({ src, title, href }) => (
  <div className="flex flex-grow bg-top bg-cover rounded-3xl flex-col min-[1400px]:flex-row 2xl:flex-col 2xl:justify-end p-3 pt-52 md:pt-64 min-[1400px]:pt-0 2xl:pt-64 relative overflow-hidden min-w-[300px] -mx-4 xs:mx-0">
    <Image
      src={src}
      alt={title}
      className="absolute top-0 left-0 h-full w-full object-center object-cover"
    />
    <div className="w-full h-full left-0 top-0 2xl:bg-gradient-to-b min-[1400px]:bg-gradient-to-bl bg-gradient-to-b from-transparent via-transparent to-primary-400/95 absolute" />
    <div className="bg-amber-50 rounded-3xl p-4 relative min-[1400px]:mt-20 2xl:mt-0 w-auto min-[1400px]:w-72 2xl:w-auto">
      <h4 className={cx(`font-bold text-2xl mb-3 text-center`)}>{title}</h4>
      <Button
        type="link"
        to={href}
        color="primary"
        icon={IconArrowRight}
        size="sm"
      >
        View project
      </Button>
    </div>
  </div>
);
