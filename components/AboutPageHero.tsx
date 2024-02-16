"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";
import Image from "next/image";

import { IconChevronDown, IconPlant } from "@tabler/icons-react";
import type { StaticImageData } from "next/image";
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
import RichPhoto from "@/public/team/rich.jpg";
import AustinPhoto from "@/public/team/austin.jpg";
import JohnPhoto from "@/public/team/john.jpg";
import { montserrat } from "@/lib/fonts";
import { useScrollY } from "@/lib/hooks";

const AboutPageHero: React.FC = () => {
  const scrollY = useScrollY();

  return (
    <section className="flex flex-col justify-center items-center p-8 xs:p-20 md:p-36 relative h-[calc(100vh-100px)] sm:h-[calc(100vh-128px)] overflow-hidden">
      <FloatingProfilePicture
        src={BoPhoto}
        name="Boaz Costa"
        size={80}
        className="left-4 lg:left-12 top-10 lg:top-12 ![object-position:0px_-5px]"
      />
      <FloatingProfilePicture
        src={JohnPhoto}
        name="John Weller"
        size={100}
        className="left-64 lg:left-96 -top-4 lg:top-0 ![object-position:0px_0px]"
      />
      <FloatingProfilePicture
        src={RodPhoto}
        name="Rod Costa"
        size={220}
        className="left-20 lg:left-40 -top-4 lg:top-8 ![object-position:0px_-40px]"
      />
      <FloatingProfilePicture
        src={AmyPhoto}
        size={120}
        name="Amy Horan"
        className="left-2 lg:left-4 top-[110px] lg:top-[160px] ![object-position:0px_-5px]"
      />
      <FloatingProfilePicture
        src={AustinPhoto}
        size={180}
        name="Austin Schlabach"
        className="left-2 lg:left-24 top-[200px] lg:top-[270px] ![object-position:0px_-25px]"
      />
      <FloatingProfilePicture
        src={IsabellaPhoto}
        name="Isabella Costa"
        size={100}
        className="right-32 lg:right-112 top-12 lg:top-4 ![object-position:0px_-25px]"
      />
      <FloatingProfilePicture
        src={VivianPhoto}
        name="Vivian Appleton"
        size={150}
        className="right-2 lg:right-16 -top-4 lg:top-4 ![object-position:0px_-15px]"
      />
      <FloatingProfilePicture
        src={KristiPhoto}
        name="Kristi Ensminger"
        className="right-0 lg:right-60 top-24 lg:top-20 ![object-position:0px_-25px]"
      />
      <FloatingProfilePicture
        src={JasenPhoto}
        name="Jasen Sargent"
        size={230}
        className="-right-20 lg:right-2 top-[240px] lg:top-52 ![object-position:0px_0px]"
      />
      <FloatingProfilePicture
        src={HarrietPhoto}
        size={150}
        name="Harriet Henderson"
        className="-right-8 lg:right-6 bottom-20 lg:bottom-[190px]"
      />
      <FloatingProfilePicture
        src={JosuePhoto}
        size={250}
        name="Josue Rodriguez"
        className="right-16 lg:right-44 -bottom-8 lg:bottom-4"
      />
      <FloatingProfilePicture
        src={WillowPhoto}
        size={100}
        name="Willow Henderson"
        className="right-0 lg:right-12 bottom-0 lg:bottom-16"
      />
      <FloatingProfilePicture
        src={TabithaPhoto}
        size={150}
        name="Tabitha Artinian"
        className="-left-8 lg:left-6 bottom-20 lg:bottom-[190px]"
      />
      <FloatingProfilePicture
        src={RichPhoto}
        size={250}
        name="Rich Coloumbe"
        className="left-16 lg:left-44 -bottom-8 lg:bottom-4 ![object-position:0px_-40px]"
      />
      <FloatingProfilePicture
        src={WinPhoto}
        size={100}
        name="Winfield Henderson"
        className="left-0 lg:left-12 bottom-0 lg:bottom-16 ![object-position:0px_0px]"
      />
      <div className="flex flex-col items-center justify-center mb-[128px] relative">
        <div className="absolute w-[200%] h-[200%] [background:radial-gradient(#FEFBED_0%,#FEFBEDEE_30%,transparent_70%)] hidden sm:block" />
        <div className="bg-primary-300 w-20 h-20 rounded-full flex justify-center items-center relative">
          <IconPlant size={40} className="text-primary-800" />
        </div>
        <h1
          className={cx(
            `text-5xl sm:text-6xl font-semibold mt-12 mb-8 relative`,
            montserrat,
          )}
        >
          About us
        </h1>
        <p className="max-w-3xl text-xl sm:text-2xl text-black/60 text-center relative">
          Since the beginning, our goal has remained the same: honor the Lord in
          all we do by seeking to offer fair prices, maintain honest and clear
          communication, and provide high-quality work to all of our customers.
          This would not be possible without a dedicated and consistent crew who
          share the same desire.
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
  );
};

export default AboutPageHero;

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
  const [windowWidth, setWindowWidth] = useState(1025);
  const [windowHeight, setWindowHeight] = useState(1025);
  const direction = className.includes(`left`) ? `left` : `right`;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <Image
      src={src}
      alt={name}
      style={{
        width: size,
        height: size,
        transform: `translateY(-${scrollY / 2}px) scale(${
          (1 - scrollY / 500) / (windowWidth >= 1024 ? 1 : 1.5)
        }) translateX(${direction === `left` ? scrollY / -2 : scrollY / 2}px)`,
        opacity: (1 - scrollY / 300) / (windowWidth >= 768 ? 1 : 2),
        filter: `blur(${scrollY / 10}px)`,
      }}
      className={cx(
        `rounded-full absolute object-center object-cover border border-primary-400 hidden sm:block`,
        windowHeight < 940 && `!hidden`,
        className,
      )}
    />
  );
};
