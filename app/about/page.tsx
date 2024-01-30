"use client";

import React from "react";
import cx from "classnames";
import { IconChevronDown, IconPlant } from "@tabler/icons-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { NextPage } from "next";
import { montserrat } from "@/lib/fonts";
import RodPhoto from "@/public/team/rod.jpg";
import KristiPhoto from "@/public/team/kristi.jpg";
import BoPhoto from "@/public/team/bo.jpg";
import JasenPhoto from "@/public/team/jasen.jpg";
import AmyPhoto from "@/public/team/amy.jpg";
import VivianPhoto from "@/public/team/vivian.jpg";
import JosuePhoto from "@/public/team/josue.jpg";
import WillowPhoto from "@/public/team/willow.jpg";
import TabithaPhoto from "@/public/team/tabitha.jpg";
import IsabellaPhoto from "@/public/team/isabella.jpg";
import HarrietPhoto from "@/public/team/harriet.jpg";
import WinPhoto from "@/public/team/win.jpg";
import { useScrollY } from "@/lib/hooks";

const About: NextPage = () => {
  const scrollY = useScrollY();

  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-center items-center p-36 relative h-[calc(100vh-128px)] overflow-hidden">
        <FloatingProfilePicture
          src={RodPhoto}
          name="Rod Costa"
          size={220}
          className="left-40 top-8 ![object-position:0px_-40px]"
        />
        <FloatingProfilePicture
          src={AmyPhoto}
          size={120}
          name="Amy Horan"
          className="left-4 top-[160px] ![object-position:0px_-5px]"
        />
        <FloatingProfilePicture
          src={BoPhoto}
          size={180}
          name="Boaz Costa"
          className="left-24 top-[270px] ![object-position:0px_-5px]"
        />
        <FloatingProfilePicture
          src={IsabellaPhoto}
          name="Isabella Costa"
          size={100}
          className="right-112 top-4 ![object-position:0px_-25px]"
        />
        <FloatingProfilePicture
          src={VivianPhoto}
          name="Vivian Appleton"
          size={150}
          className="right-16 top-4 ![object-position:0px_-15px]"
        />
        <FloatingProfilePicture
          src={KristiPhoto}
          name="Kristi Ensminger"
          className="right-60 top-20 ![object-position:0px_-25px]"
        />
        <FloatingProfilePicture
          src={JasenPhoto}
          name="Jasen Sargent"
          size={230}
          className="right-2 top-52 ![object-position:0px_0px]"
        />
        <FloatingProfilePicture
          src={HarrietPhoto}
          size={150}
          name="Harriet Henderson"
          className="right-6 bottom-[190px]"
        />
        <FloatingProfilePicture
          src={JosuePhoto}
          size={250}
          name="Josue Rodriguez"
          className="right-44 bottom-4"
        />
        <FloatingProfilePicture
          src={WillowPhoto}
          size={100}
          name="Willow Henderson"
          className="right-12 bottom-16"
        />
        <FloatingProfilePicture
          src={TabithaPhoto}
          size={150}
          name="Tabitha Artinian"
          className="left-6 bottom-[190px]"
        />
        <FloatingProfilePicture
          src={WinPhoto}
          size={250}
          name="Winfield Henderson"
          className="left-44 bottom-4 ![object-position:0px_0px]"
        />
        <FloatingProfilePicture
          src={RodPhoto}
          size={100}
          name="Rod Costa"
          className="left-12 bottom-16"
        />
        <div className="flex flex-col items-center justify-center mb-[128px] relative">
          <div className="absolute w-[200%] h-[200%] [background:radial-gradient(#FEFBED_0%,#FEFBEDEE_30%,transparent_70%)]" />
          <div className="bg-primary-300 w-20 h-20 rounded-full flex justify-center items-center relative">
            <IconPlant size={40} className="text-primary-800" />
          </div>
          <h1
            className={cx(
              `text-6xl font-semibold mt-12 mb-8 relative`,
              montserrat,
            )}
          >
            About us
          </h1>
          <p className="max-w-3xl text-2xl text-black/60 text-center relative">
            Since the beginning, our goal has remained the same: honor the Lord
            in all we do by seeking to offer fair prices, maintain honest and
            clear communication, and provide high-quality work to all of our
            customers. This would not be possible without a dedicated and
            consistent crew who share the same desire.
          </p>
        </div>
        <div
          className={cx(
            `absolute bottom-0 flex flex-col justify-center items-center transition-opacity duration-500`,
            scrollY === 0 ? `opacity-100` : `opacity-0`,
          )}
        >
          <span className="uppercase text-black/20 text-sm">scroll</span>
          <IconChevronDown size={25} className="text-black/20 animate-bounce" />
        </div>
      </section>
      <div className="flex flex-col items-center m-20">
        <h2 className={cx(`text-5xl font-semibold`, montserrat)}>
          Administrative staff
        </h2>
        <p className="text-xl text-black/50 mt-4 text-center">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-12 w-full max-w-6xl">
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
            name="Josué Rodriquez"
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
            src={RodPhoto}
            imagePlacement="[object-position:0px_0px]"
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
            src={RodPhoto}
            imagePlacement="[object-position:0px_0px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

interface FloatingProfilePictureProps {
  src: StaticImageData;
  name: string;
  size?: number;
  className: string;
}

const FloatingProfilePicture: React.FC<FloatingProfilePictureProps> = ({
  src,
  name,
  size = 200,
  className,
}) => {
  const scrollY = useScrollY();
  const direction = className.includes(`left`) ? `left` : `right`;
  return (
    <Image
      src={src}
      alt={name}
      style={{
        width: size,
        height: size,
        transform: `translateY(-${scrollY / 2}px) scale(${
          1 - scrollY / 500
        }) translateX(${direction === `left` ? scrollY / -2 : scrollY / 2}px)`,
        opacity: 1 - scrollY / 300,
        filter: `blur(${scrollY / 10}px)`,
      }}
      className={cx(
        `rounded-full absolute object-center object-cover border border-primary-400`,
        className,
      )}
    />
  );
};

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
  <div className="bg-amber-100 p-4 rounded-3xl flex items-center gap-6">
    <Image
      src={src}
      alt={`Photo of ${name}`}
      className={cx(
        `w-36 h-36 rounded-2xl shrink-0 object-cover`,
        imagePlacement,
      )}
    />
    <div>
      <h3 className={cx(`text-2xl font-semibold`, montserrat)}>{name}</h3>
      <span className="font-medium text-primary-800">{title}</span>
      <p className="mt-1 text-black/50">{blurb}</p>
    </div>
  </div>
);
