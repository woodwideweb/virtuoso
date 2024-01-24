"use client";

import React from "react";
import cx from "classnames";
import { IconChevronDown, IconPlant } from "@tabler/icons-react";
import Image from "next/image";
import NextBgImage from "next-bg-image";
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
import GroupPhoto from "@/public/team/group.jpg";
import { useIntersectionObserver, useScrollY } from "@/lib/hooks";

const About: NextPage = () => {
  const scrollY = useScrollY();
  const { ref: showRodRef, intersected: rodShown } = useIntersectionObserver({
    threshold: 1,
  });
  const { ref: showKristiRef, intersected: kristiShown } =
    useIntersectionObserver({
      threshold: 1,
    });
  const { ref: showBoRef, intersected: boShown } = useIntersectionObserver({
    threshold: 1,
  });
  const { ref: showVivianRef, intersected: vivianShown } =
    useIntersectionObserver({
      threshold: 1,
    });
  const { ref: showAmyRef, intersected: amyShown } = useIntersectionObserver({
    threshold: 1,
  });
  const { ref: showJasenRef, intersected: jasenShown } =
    useIntersectionObserver({
      threshold: 1,
    });

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
      <div className="mt-28">
        <div className="h-screen w-screen flex justify-center items-center sticky top-0">
          <NextBgImage
            src={GroupPhoto}
            className="w-screen aspect-video flex flex-col justify-center items-center overflow-hidden relative"
          >
            <div
              className={cx(
                `w-[4000px] h-[4000px] aspect-square [background:radial-gradient(transparent_0%,transparent_0.75%,#000000cc_0.75%)] sm:[background:radial-gradient(transparent_0%,transparent_1%,#000000cc_1%)] lg:[background:radial-gradient(transparent_0%,transparent_1.5%,#000000cc_1.5%)] xl:[background:radial-gradient(transparent_0%,transparent_2%,#000000cc_2%)] relative transition-[left,top,opacity] duration-500 shrink-0`,
                !rodShown && `opacity-0 left-[-3%] top-[30%]`,
                rodShown && !kristiShown && `left-[-3%] top-[10%]`,
                kristiShown && !boShown && `left-[31.5%] top-[13%]`,
                boShown && !jasenShown && `left-[-7%] top-[11%]`,
                jasenShown && !vivianShown && `left-[-32%] top-[-4%]`,
                vivianShown && !amyShown && `left-[-32%] top-[15%]`,
                amyShown && `left-[27%] top-[-3%]`,
              )}
            >
              <TeamMemberInfo
                name="Rod Costa"
                title="CEO and Founder"
                description="Rod has no interest in growing a business or making money, he just enjoys working with people he loves."
                show={rodShown && !kristiShown}
                className="top-[48%] xs:top-[46%] md:top-[48.7%] left-[48.6%] xs:left-[46%] md:left-[51.3%] lg:left-[52%]"
              />
              <TeamMemberInfo
                name="Kristi Ensminger"
                title="General Manager"
                description="Kristi wears several hats for Virtuoso in the field and in the office, but her favorite is the winter hat she wears while plowing snow."
                show={kristiShown && !boShown}
                className="top-[49.3%] xs:top-[46.3%] md:top-[48.3%] left-[44.5%] xs:left-[42.5%] md:left-[40.5%] lg:left-[36.8%]"
                right
              />
              <TeamMemberInfo
                name="Boaz Costa"
                title="Landscape Construction Manager"
                description="A diligent worker and kind leader, Bo often has to be coerced to leave the jobsite when the sun goes down."
                show={boShown && !jasenShown}
                className="top-[48%] xs:top-[46.5%] md:top-[48.7%] left-[47.4%] xs:left-[48.5%] md:left-[51.3%] lg:left-[52%]"
              />
              <TeamMemberInfo
                name="Jasen Sargent"
                title="Landscape Maintenance and Construction"
                description="Born and raised in New York, you'll recognize Jasen on the jobsite by his patient attention to detail... and his backwards cap."
                show={jasenShown && !vivianShown}
                className="top-[50.5%] xs:top-[48.4%] left-[49.5%] xs:left-[51.3%] lg:left-[52%]"
              />
              <TeamMemberInfo
                name="Vivian Appleton"
                title="Landscape Maintenance and Enhancement"
                description="Vivian started working with Virtuoso at 14 years old; good luck finding a gal around that works harder than her!"
                show={vivianShown && !amyShown}
                className="top-[48%] xs:top-[46.5%] md:top-[48.6%] left-[48.8%] xs:left-[48.8%] md:left-[51.3%] lg:left-[52%]"
              />
              <TeamMemberInfo
                name="Amy Horan"
                title="Administrative Assistant"
                description="Amy's gentle spirit and willingness to do anything needed for the crew and our customers make her a tremendous asset both in the office and beyond."
                show={amyShown}
                className="top-[50%] xs:top-[48.3%] left-[45%] xs:left-[40.5%] lg:left-[36.8%]"
                right
              />
            </div>
          </NextBgImage>
        </div>
        <div className="relative z-10 flex flex-col gap-80 pb-80">
          <i ref={showRodRef} />
          <i ref={showKristiRef} />
          <i ref={showBoRef} />
          <i ref={showJasenRef} />
          <i ref={showVivianRef} />
          <i ref={showAmyRef} />
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

interface TeamMemberInfoProps {
  name: string;
  title: string;
  description: string;
  show: boolean;
  right?: boolean;
  className: string;
}

const TeamMemberInfo: React.FC<TeamMemberInfoProps> = ({
  name,
  title,
  description,
  show,
  right,
  className,
}) => (
  <div
    className={cx(
      `absolute text-white flex flex-col items-center md:items-start`,
      right && `md:items-end`,
      className,
    )}
  >
    <h2
      className={cx(
        `font-semibold text-xl lg:text-2xl`,
        montserrat,
        show
          ? `opacity-100 delay-500 transition-[opacity,transform] duration-500`
          : `opacity-0 translate-y-4`,
      )}
    >
      {name}
    </h2>
    <span
      className={cx(
        `text-primary-300 text-sm font-medium`,
        show
          ? `opacity-100 delay-[600ms] transition-[opacity,transform] duration-500`
          : `opacity-0 translate-y-4`,
      )}
    >
      {title}
    </span>
    <p
      className={cx(
        `w-[20rem] lg:w-[28rem] mt-1 text-sm lg:text-base text-center hidden xs:block`,
        show
          ? `opacity-80 delay-[700ms] transition-[opacity,transform] duration-500`
          : `opacity-0 translate-y-4`,
        right ? `md:text-right` : `md:text-left`,
      )}
    >
      {description}
    </p>
  </div>
);
