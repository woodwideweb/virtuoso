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
        Management and Administrative Staff
      </h2>
      <p className="text-lg xs:text-xl text-black/50 mt-4 text-center">
        The crew "in charge" and at work behind the scenes to keep Virtuoso
        running smoothly.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-full max-w-6xl">
        <StaffCard
          name="Rod Costa"
          title="Owner"
          blurb="Rod has no interest in growing a business or making money, he just enjoys working with the people he loves."
          src={RodPhoto}
          imagePlacement="[object-position:0px_-20px]"
          yearStarted={2001}
        />
        <StaffCard
          name="Kristi Ensminger"
          title="General Manager"
          blurb="Kristi wears several hats for Virtuoso in the field and in the office. Her time is often spent meeting with customers and writing proposals, but don't be surprised if you catch her mulching your flower beds or helping the construction crew finish your paver patio."
          src={KristiPhoto}
          imagePlacement="[object-position:0px_-10px]"
          yearStarted={2014}
        />
        <StaffCard
          name="Austin Schlabach"
          title="Landscape Maintenance Manager"
          blurb="Second only to its founder, Austin is the longest-standing member of Virtuoso Landscaping. Austin is the kind of loyal and do-it-right employee that most landscaping companies only dream of having; striping lawns is his first love."
          src={AustinPhoto}
          imagePlacement="[object-position:0px_-20px]"
          yearStarted={2008}
        />
        <StaffCard
          name="Boaz Costa"
          title="Landscape Construction Manager"
          blurb="His construction knowledge, problem-solving skills, and crew management abilities exceed many who are twice his age and make him an integral part of Virtuoso. Bo often has to be coerced to leave the jobsite when the sun goes down."
          src={BoPhoto}
          imagePlacement="[object-position:0px_-10px]"
          yearStarted={2015}
        />
        <StaffCard
          name="Josué Rodriguez"
          title="Procurement and Sales"
          blurb="Josue is a customer favorite who is dearly loved amongst our crew. He is our go-to guy for everything from bid writing to account audits, and he does it all from his office in the sunny mountains of Costa Rica."
          src={JosuePhoto}
          imagePlacement="[object-position:-20px_0px]"
          yearStarted={2019}
        />
        <StaffCard
          name="John Weller"
          title="Sales"
          blurb={`"Grandpa" has been part of the family for a long time, but we're happy for him to have officially joined the team in 2023. His many years of experience working with waterways and drainage systems as a civil engineer make him a tremendous asset and point of contact for current and future customers.`}
          src={JohnPhoto}
          imagePlacement="[object-position:0px_0px]"
          yearStarted={2023}
        />
        <StaffCard
          name="Amy Horan"
          title="Administrative Assistant"
          blurb="Amy's gentle spirit and willingness to do anything needed for the crew and our customers make her a tremendous asset both in the office and beyond. She works hard behind the scenes to keep us organized and efficient."
          src={AmyPhoto}
          imagePlacement="[object-position:0px_-10px]"
          yearStarted={2022}
        />
        <StaffCard
          name="Vivian Appleton"
          title="Assistant Landscape Manager"
          blurb={`"Viv" started working with us at age 14 and has grown to be a confident and proficient landscaper, whose duties often include employee training, plant design and installation, as well as crew management and quality control on the job site. Good luck finding a gal around that works harder than her!`}
          src={VivianPhoto}
          imagePlacement="[object-position:0px_-10px]"
          yearStarted={2019}
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
  yearStarted: number;
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  title,
  blurb,
  src,
  imagePlacement,
  yearStarted,
}) => {
  const timeWithVirtuoso = new Date().getFullYear() - yearStarted;
  return (
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
        <div className="font-medium text-primary-800 flex items-center gap-1">
          <span>{title}</span>
          <span>•</span>
          <span>
            {timeWithVirtuoso} year{timeWithVirtuoso > 1 && `s`}
          </span>
        </div>
        <p className="mt-1 text-black/50 text-center xs:text-left">{blurb}</p>
      </div>
    </div>
  );
};
