"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import {
  IconArrowRight,
  IconCalendar,
  IconCurrencyDollar,
  IconMapPin,
  IconQuote,
} from "@tabler/icons-react";
import type { StaticImageData } from "next/image";
import type { TablerIcon } from "@/lib/types";
import PrimaryWave from "@/public/primary-wave.svg";
import {
  useIntersectionObserver,
  useScrollY,
  useWindowDimensions,
} from "@/lib/hooks";
import { montserrat } from "@/lib/fonts";
import Button from "@/components/Button";

interface Props {
  mainSplashPicture: StaticImageData;
  projectTitle: string;
  location: string;
  estimatedCost: number;
  actualCost: number;
  when: string;
  scope: Array<{
    Icon: TablerIcon;
    title: string;
  }>;
  planParagraph: string;
  planSteps: Array<{
    title: string;
    description: string;
  }>;
  planImages: StaticImageData[];
  finishedProject: {
    first: {
      caption: string;
      subCaption: string;
      image: StaticImageData;
    };
    second: {
      caption: string;
      subCaption: string;
      image: StaticImageData;
    };
    third: {
      caption: string;
      subCaption: string;
      image: StaticImageData;
    };
  };
}

const FeaturedProjectTemplate: React.FC<Props> = ({
  mainSplashPicture,
  projectTitle,
  location,
  estimatedCost,
  actualCost,
  when,
  scope,
  planParagraph,
  planSteps,
  planImages,
  finishedProject,
}) => {
  const scrollY = useScrollY();
  const [shownLetters, setShownLetters] = useState(0);
  const { width } = useWindowDimensions();
  const { intersected: overBgImage, ref: bgImageRef } = useIntersectionObserver(
    {
      threshold: 1,
      rootMargin: `0px`,
    },
  );
  const { intersected: intersectedSecondCaption, ref: secondCaptionRef } =
    useIntersectionObserver({
      threshold: 1,
      rootMargin: `0px`,
    });
  const { intersected: intersectedThirdCaption, ref: thirdCaptionRef } =
    useIntersectionObserver({
      threshold: 1,
      rootMargin: `0px`,
    });

  const bgGreen = 1 - (scrollY - 100) / 300 < 0;

  useEffect(() => {
    if (shownLetters < projectTitle.length) {
      var interval = setTimeout(() => setShownLetters(shownLetters + 1), 20);
    }

    return () => clearTimeout(interval);
  }, [shownLetters, projectTitle.length]);

  return (
    <div
      className={cx(
        `px-4 xs:px-8 sm:px-12 xl:px-20 py-12 transition-colors duration-700`,
        bgGreen ? `bg-primary-800` : `bg-amber-50`,
      )}
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            src={mainSplashPicture}
            alt={projectTitle}
            priority
            className={cx(
              `w-11/12 max-w-7xl object-center object-cover fixed sepia-[30%] rounded-[60px] sm:rounded-[80px]`,
            )}
            style={{
              height: `${(width >= 1080 ? 608 : 400) - scrollY / 4}px`,
              top: `${160 - scrollY / 4}px`,
              opacity: `${1 - scrollY / 300}`,
            }}
          />
        </div>
        <div className="mt-[420px] min-[1080px]:mt-[650px] relative max-w-7xl w-full">
          <h1
            className={cx(
              `text-3xl xs:text-4xl sm:text-5xl 2xl:text-6xl font-bold text-center lg:text-left relative w-fit transition-colors duration-700 !leading-tight`,
              bgGreen ? `text-white` : `text-black`,
              montserrat,
            )}
          >
            <span className="relative">
              {width > 1024
                ? projectTitle.split(``).map((letter, index) => (
                    <span
                      key={index}
                      className={cx(
                        `transition-[opacity,transform] duration-700 inline-block`,
                        index < shownLetters
                          ? `opacity-100`
                          : `opacity-0 scale-75 translate-y-4`,
                      )}
                    >
                      {letter.replace(` `, `\u00a0`)}
                    </span>
                  ))
                : projectTitle}
            </span>
          </h1>
          <div className="flex justify-center lg:justify-start mt-8 gap-4 flex-wrap">
            <PillBadge
              bgGreen={bgGreen}
              show={shownLetters > 10}
              Icon={IconMapPin}
            >
              {location}
            </PillBadge>
            <PillBadge
              bgGreen={bgGreen}
              show={shownLetters > 20}
              Icon={IconCurrencyDollar}
            >
              ${actualCost.toLocaleString()}
            </PillBadge>
            <PillBadge
              bgGreen={bgGreen}
              show={shownLetters > 30}
              Icon={IconCalendar}
            >
              {when}
            </PillBadge>
          </div>
          <div className="mt-20">
            <div
              className="p-8 md:p-12 lg:p-16 rounded-[40px] lg:rounded-[80px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${PrimaryWave.src})`,
              }}
            >
              <div className="absolute bottom-8 right-12 flex flex-col gap-6 items-end">
                <div className="flex-col items-end hidden xl:flex">
                  <span className="text-sm text-primary-900 font-medium">
                    Initial estimate
                  </span>
                  <span className="text-4xl font-black text-primary-800">
                    <span className="text-2xl font-bold text-primary-900 align-top">
                      $
                    </span>
                    {estimatedCost.toLocaleString()}
                  </span>
                </div>
                <div className="hidden xl:flex flex-col items-end">
                  <span className="text-base text-primary-900 font-medium">
                    Actual price
                  </span>
                  <span className="text-6xl font-black text-primary-950">
                    <span className="text-4xl font-bold text-primary-950 align-top">
                      $
                    </span>
                    {actualCost.toLocaleString()}
                  </span>
                </div>
              </div>
              <h2 className={cx(`text-3xl font-bold`, montserrat)}>
                Project scope
              </h2>
              <ul className="flex flex-col mt-6 sm:text-lg md:ml-2 gap-5">
                {scope.map((item) => (
                  <ProjectScopeStep key={item.title} Icon={item.Icon}>
                    {item.title}
                  </ProjectScopeStep>
                ))}
              </ul>
              <div className="mt-10 xl:hidden flex flex-col xs:flex-row justify-end items-center xs:items-end gap-6 xs:gap-12 lg:gap-16 xs:-mb-4 lg:-mb-8">
                <div className="flex flex-col items-center xs:items-end">
                  <span className="text-base text-primary-900 font-medium">
                    Initial estimate
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-700">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 align-top">
                      $
                    </span>
                    {estimatedCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col items-center xs:items-end">
                  <span className="text-base text-primary-900 font-medium">
                    Actual price
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-950">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-950 align-top">
                      $
                    </span>
                    {actualCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg+:flex-row items-start mt-16 lg+:mt-28 gap-16 relative">
              <div className="lg+:sticky top-20 flex-grow flex flex-col md+:flex-row lg+:block md+:items-center gap-12 w-full lg+:w-auto">
                <div>
                  <h2
                    className={cx(
                      montserrat,
                      `text-4xl sm:text-5xl lg+:text-6xl font-bold text-white`,
                    )}
                  >
                    Plan and design
                  </h2>
                  <p
                    className={cx(`max-w-2xl sm:text-xl text-primary-100 mt-8`)}
                  >
                    {planParagraph}
                  </p>
                </div>
                <div className="bg-primary-900/50 rounded-3xl lg+:mt-12 p-8">
                  <ul className="flex flex-col gap-6 lg:gap-8">
                    {planSteps.map((step, index) => (
                      <PlanStep
                        key={step.title}
                        index={index + 1}
                        title={step.title}
                        description={step.description}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="flex lg+:flex-col gap-8 flex-grow items-end overflow-scroll relative">
                  {planImages.map((image) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="Project design"
                      className="rounded-[80px] sepia-[30%] lg+:w-full h-80 object-cover object-center"
                    />
                  ))}
                </div>
                <div className="block lg+:hidden w-20 h-full left-0 top-0 bg-gradient-to-r from-primary-800 to-transparent absolute pointer-events-none" />
                <div className="block lg+:hidden w-20 h-full right-0 top-0 bg-gradient-to-l from-primary-800 to-transparent absolute pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mt-16 flex flex-col items-center sm:bg-primary-700/50 w-full rounded-[80px] sm:p-12 lg:p-20 relative">
          <IconQuote
            className="hidden lg:block absolute text-white/5 -left-40 -top-28 rotate-180"
            size={400}
          />
          <IconQuote
            className="hidden lg:block absolute text-white/5 -right-40 -bottom-28"
            size={400}
          />
          <p className="text-center text-lg sm:text-xl md:text-2xl max-w-4xl text-white/80 italic leading-7 sm:leading-8 md:leading-9">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <span className="mt-8 font-medium text-xl md:text-2xl text-white">
            - The Homeowner
          </span>
        </div>
        <div className="w-screen">
          <div className="flex justify-center sticky top-0 mt-16">
            <div
              ref={bgImageRef}
              className={cx(
                `flex justify-center items-center h-screen transition-[width,border-radius] duration-700 relative overflow-hidden`,
                overBgImage
                  ? `w-screen rounded-none`
                  : `w-[1280px] rounded-[40px] sm:rounded-[80px] md:rounded-[120px]`,
              )}
            >
              <Image
                src={
                  intersectedThirdCaption
                    ? finishedProject.third.image
                    : intersectedSecondCaption
                    ? finishedProject.second.image
                    : finishedProject.first.image
                }
                alt="Hartville project"
                className={cx(
                  `w-full h-full absolute left-0 top-0 object-center object-cover transition-[filter] duration-700`,
                  overBgImage ? `sepia-[50%]` : `sepia-[20%]`,
                )}
              />
              <div
                className={cx(
                  `w-full h-full bg-gradient-to-r from-black/80 via-black/70 to-black/40 lg:to-transparent absolute left-0 top-0 transition-[border-radius,opacity] duration-700`,
                  overBgImage
                    ? `rounded-none opacity-100`
                    : `rounded-[120px] opacity-0`,
                )}
              ></div>
            </div>
          </div>
          <div
            className={cx(
              `flex justify-start relative px-8 sm:px-12 lg:px-20 mt-20`,
            )}
          >
            <div className="max-w-3xl flex flex-col gap-[calc(100vh-160px)]">
              <div>
                <h3
                  className={cx(
                    `text-3xl xs:text-4xl lg:text-5xl text-white font-semibold`,
                    montserrat,
                  )}
                >
                  {finishedProject.first.caption}
                </h3>
                <p className="text-lg xs:text-xl lg:text-2xl text-white/80 mt-4 lg:mt-8">
                  {finishedProject.first.subCaption}
                </p>
              </div>
              <div ref={secondCaptionRef}>
                <h3
                  className={cx(
                    `text-3xl xs:text-4xl lg:text-5xl text-white font-semibold`,
                    montserrat,
                  )}
                >
                  {finishedProject.second.caption}
                </h3>
                <p className="text-lg xs:text-xl lg:text-2xl text-white/80 mt-4 lg:mt-8">
                  {finishedProject.second.subCaption}
                </p>
              </div>
              <div className="mb-[calc(100vh-500px)] " ref={thirdCaptionRef}>
                <h3
                  className={cx(
                    `text-3xl xs:text-4xl lg:text-5xl text-white font-semibold`,
                    montserrat,
                  )}
                >
                  {finishedProject.third.caption}
                </h3>
                <p className="text-lg xs:text-xl lg:text-2xl text-white/80 mt-4 lg:mt-8">
                  {finishedProject.third.subCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 w-screen -mb-12 pb-12 md:pb-20 pt-28 md:pt-40 px-6 xs:px-12 md:px-20 flex justify-center items-center flex-col">
          <h2
            className={cx(
              montserrat,
              `text-3xl xs:text-4xl md:text-5xl font-bold text-center !leading-tight`,
            )}
          >
            Want your landscape to look like this?
          </h2>
          <p className="mt-4 md:mt-8 mb-12 md:mb-16 text-2xl md:text-3xl text-black/60 font-medium text-center">
            Reach out today for a free quote.
          </p>
          <Button
            type="link"
            to="/contact"
            color="primary"
            size="lg"
            icon={IconArrowRight}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectTemplate;

interface PillBadgeProps {
  children: React.ReactNode;
  Icon: TablerIcon;
  show: boolean;
  bgGreen: boolean;
  className?: string;
}

const PillBadge: React.FC<PillBadgeProps> = ({
  children,
  Icon,
  className,
  show,
  bgGreen,
}) => (
  <div
    className={cx(
      `flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-full transition-[opacity,transform,background-color] duration-700`,
      !show && `translate-y-4 opacity-0`,
      bgGreen ? `bg-primary-700` : `bg-amber-200/40`,
      className,
    )}
  >
    <Icon
      className={cx(
        bgGreen ? `text-primary-100` : `text-amber-700`,
        `transition-colors duration-700`,
      )}
    />
    <span
      className={cx(
        bgGreen ? `text-primary-200` : `text-amber-700/60`,
        `font-medium transition-colors duration-700`,
      )}
    >
      {children}
    </span>
  </div>
);

interface ProjectscopeStepProps {
  children: React.ReactNode;
  Icon: TablerIcon;
}

const ProjectScopeStep: React.FC<ProjectscopeStepProps> = ({
  children,
  Icon,
}) => {
  const { width } = useWindowDimensions();
  return (
    <li className="font-medium flex gap-3">
      <Icon
        className="text-primary-700 shrink-0"
        size={width > 1000 ? 28 : 24}
      />
      <span className="text-primary-black/80">{children}</span>
    </li>
  );
};

interface PlanStepProps {
  index: number;
  title: string;
  description: string;
}

const PlanStep: React.FC<PlanStepProps> = ({ index, title, description }) => {
  const { intersected, ref } = useIntersectionObserver(
    {
      threshold: 1,
      rootMargin: `-20px`,
    },
    true,
  );
  return (
    <li
      className={cx(
        `flex gap-4 transition-[opacity,transform] duration-500`,
        !intersected && `translate-y-4 opacity-0`,
      )}
      ref={ref}
    >
      <div className="bg-primary-800 w-8 lg:w-10 h-8 lg:h-10 rounded-full flex justify-center items-center shrink-0">
        <span className="font-mono text-lg lg:text-xl text-primary-300">
          {index}
        </span>
      </div>
      <div className="lg:mt-1">
        <h4
          className={cx(
            `text-lg lg:text-xl font-semibold text-primary-200`,
            montserrat,
          )}
        >
          {title}
        </h4>
        <p className="text-primary-400 lg:text-lg">{description}</p>
      </div>
    </li>
  );
};
