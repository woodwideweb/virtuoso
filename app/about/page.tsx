import React from "react";
import cx from "classnames";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { NextPage } from "next";
import { montserrat } from "@/lib/fonts";

import RodPhoto from "@/public/team/rod.jpg";
import KristiPhoto from "@/public/team/kristi.jpg";
import BoPhoto from "@/public/team/bo.jpg";
import AmyPhoto from "@/public/team/amy.jpg";
import VivianPhoto from "@/public/team/vivian.jpg";
import JosuePhoto from "@/public/team/josue.jpg";
import AustinPhoto from "@/public/team/austin.jpg";
import JohnPhoto from "@/public/team/john.jpg";
import AboutPageHero from "@/components/AboutPageHero";
import AboutPageCTA from "@/components/AboutPageCTA";

export const metadata = {
  title: `Virtuoso Landscaping ~ About Us`,
  description: `Virtuoso Landscaping is a full-service landscaping company that provides design, installation, and maintenance services to residential and commercial clients in and surrounding Medina and Summit county.`,
};

const About: NextPage = () => (
  <div className="flex flex-col">
    <AboutPageHero />
    <div className="flex flex-col items-center m-4 xs:m-8 sm:m-12 lg:m-20">
      <h2
        className={cx(
          `text-3xl xs:text-4xl md:text-5xl font-semibold text-center`,
          montserrat,
        )}
      >
        Administrative staff
      </h2>
      <p className="text-lg xs:text-xl text-black/50 mt-4 text-center">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-full max-w-6xl">
        <StaffCard
          name="Rod Costa"
          title="CEO and Founder"
          blurb="Rod has no interest in growing a business or making money, he just enjoys working with people he loves."
          src={RodPhoto}
          imagePlacement="[object-position:0px_-20px]"
        />
        <StaffCard
          name="Kristi Ensminger"
          title="General Manager"
          blurb="Kristi wears several hats for Virtuoso in the field and in the office, but her favorite is the winter hat she wears while plowing snow."
          src={KristiPhoto}
          imagePlacement="[object-position:0px_-10px]"
        />
        <StaffCard
          name="Josué Rodriguez"
          title="Procurement and Sales"
          blurb="Josue is our go-to guy for everything from bid writing to budget analysis, and he  does it all from his sunny office in the mountains of Costa Rica."
          src={JosuePhoto}
          imagePlacement="[object-position:-20px_0px]"
        />
        <StaffCard
          name="Boaz Costa"
          title="Landscape Construction Manager"
          blurb="A diligent worker and kind leader, Bo often has to be coerced to leave the jobsite when the sun goes down."
          src={BoPhoto}
          imagePlacement="[object-position:0px_-10px]"
        />
        <StaffCard
          name="Austin Schlabach"
          title="Landscape Maintenance Manager"
          blurb="Austin is the kind of loyal and do-it-right employee that most landscaping companies only dream of having; striping lawns is his first love."
          src={AustinPhoto}
          imagePlacement="[object-position:0px_-20px]"
        />
        <StaffCard
          name="Vivian Appleton"
          title="Landscape Maintenance and Enhancement"
          blurb="Vivian started working with Virtuoso at 14 years old; good luck finding a gal around that works harder than her!"
          src={VivianPhoto}
          imagePlacement="[object-position:0px_-10px]"
        />
        <StaffCard
          name="Amy Horan"
          title="Administrative Assistant"
          blurb="Amy's gentle spirit and willingness to do anything needed for the crew and our customers make her a tremendous asset both in the office and beyond."
          src={AmyPhoto}
          imagePlacement="[object-position:0px_-10px]"
        />
        <StaffCard
          name="John Weller"
          title="Sales"
          blurb="TODO"
          src={JohnPhoto}
          imagePlacement="[object-position:0px_0px]"
        />
      </div>
    </div>
    <AboutPageCTA />
  </div>
);

export default About;

interface StaffCardProps {
  name: string;
  title: string;
  blurb: string;
  src: StaticImageData;
  imagePlacement: string;
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  title,
  blurb,
  src,
  imagePlacement,
}) => (
  <div className="bg-amber-100 p-4 rounded-3xl flex flex-col xs:flex-row items-center gap-4 xs:gap-6">
    <Image
      src={src}
      alt={`Photo of ${name}`}
      className={cx(
        `w-36 h-36 rounded-full xs:rounded-2xl shrink-0 object-cover`,
        imagePlacement,
      )}
    />
    <div className="flex flex-col items-center xs:items-start">
      <h3 className={cx(`text-2xl font-semibold`, montserrat)}>{name}</h3>
      <span className="font-medium text-primary-800 text-center xs:text-left">
        {title}
      </span>
      <p className="mt-1 text-black/50 text-center xs:text-left">{blurb}</p>
    </div>
  </div>
);
