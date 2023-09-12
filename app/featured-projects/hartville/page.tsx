'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import PrimaryWave from '@/public/primary-wave.svg';
import Finished1 from '@/public/featured-projects/hartville/finished-1.jpg';
import Finished2 from '@/public/featured-projects/hartville/finished-2.jpg';
import Finished3 from '@/public/featured-projects/hartville/finished-3.jpg';
import Design1 from '@/public/featured-projects/hartville/design-1.jpg';
import Design2 from '@/public/featured-projects/hartville/design-2.jpg';
import Design3 from '@/public/featured-projects/hartville/design-3.jpg';
import { useIntersectionObserver, useScrollY } from '@/lib/hooks';
import { montserrat } from '@/lib/fonts';
import {
  IconArrowRight,
  IconBed,
  IconCalendar,
  IconCurrencyDollar,
  IconMapPin,
  IconPlant,
  IconPlant2,
  IconTree,
  IconWall,
} from '@tabler/icons-react';
import { TablerIcon } from '@/lib/types';
import Button from '@/components/Button';

// SECTIONS:
// project scope
// the plan
// the process
// the result

const HartvilleProject: React.FC = () => {
  const scrollY = useScrollY();
  const projectName = 'Residential project in Hartville, Ohio';
  const [shownLetters, setShownLetters] = useState(0);
  const { intersected: overBgImage, ref: bgImageRef } = useIntersectionObserver({
    threshold: 1,
    rootMargin: `0px`,
  });
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
    if (shownLetters < projectName.length) {
      var interval = setTimeout(() => setShownLetters(shownLetters + 1), 20);
    }

    return () => clearTimeout(interval);
  }, [shownLetters]);

  return (
    <div
      className={cx(
        'px-20 py-12 transition-colors duration-700',
        bgGreen ? `bg-primary-800` : `bg-amber-50`,
      )}
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            src={Finished2}
            alt="Large house with giant retaining walls"
            className={cx(
              'w-full max-w-7xl object-center object-cover fixed sepia-[30%] rounded-[80px]',
            )}
            style={{
              height: `${608 - scrollY / 4}px`,
              top: `${160 - scrollY / 4}px`,
              opacity: `${1 - scrollY / 300}`,
            }}
          />
        </div>
        <div className="mt-[650px] relative max-w-7xl w-full">
          <h1
            className={cx(
              'text-6xl font-bold text-center relative w-fit transition-colors duration-700',
              bgGreen ? `text-white` : `text-black`,
              montserrat,
            )}
          >
            <span className="relative">
              {projectName.split('').map((letter, index) => (
                <span
                  key={index}
                  className={cx(
                    `transition-[opacity,transform] duration-700 inline-block`,
                    index < shownLetters
                      ? `opacity-100`
                      : `opacity-0 scale-75 translate-y-4`,
                  )}
                >
                  {letter.replace(' ', '\u00a0')}
                </span>
              ))}
            </span>
          </h1>
          <div className="flex mt-8 gap-4">
            <PillBadge bgGreen={bgGreen} show={shownLetters > 10} Icon={IconMapPin}>
              Hartville, OH
            </PillBadge>
            <PillBadge
              bgGreen={bgGreen}
              show={shownLetters > 20}
              Icon={IconCurrencyDollar}
            >
              $220,000
            </PillBadge>
            <PillBadge bgGreen={bgGreen} show={shownLetters > 30} Icon={IconCalendar}>
              June-July, 2022
            </PillBadge>
          </div>
          <div className="mt-20">
            <div
              className="p-16 rounded-[80px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${PrimaryWave.src})`,
              }}
            >
              <div className="absolute bottom-8 right-12 flex flex-col gap-6 items-end">
                <div className="flex flex-col items-end">
                  <span className="text-sm text-primary-900 font-medium">
                    Initial estimate
                  </span>
                  <span className="text-4xl font-black text-primary-800">
                    <span className="text-2xl font-bold text-primary-900 align-top">
                      $
                    </span>
                    10,200
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-base text-primary-900 font-medium">
                    Actual price
                  </span>
                  <span className="text-6xl font-black text-primary-950">
                    <span className="text-4xl font-bold text-primary-950 align-top">
                      $
                    </span>
                    220,000
                  </span>
                </div>
              </div>
              <h2 className={cx('text-3xl font-bold', montserrat)}>Project scope</h2>
              <ul className="flex flex-col mt-6 text-lg ml-2 gap-5">
                <ProjectScopeStep Icon={IconTree}>
                  Plant 2,000 gigantic trees in front and back yards
                </ProjectScopeStep>
                <ProjectScopeStep Icon={IconWall}>
                  Build two humongoloidious terraced walls and one smaller bed-retaining
                  wall
                </ProjectScopeStep>
                <ProjectScopeStep Icon={IconBed}>
                  Create gravel beds within walls and around back of house
                </ProjectScopeStep>
                <ProjectScopeStep Icon={IconPlant}>
                  Plant a bunch of shrubs in those beds
                </ProjectScopeStep>
                <ProjectScopeStep Icon={IconPlant2}>
                  Grade and install yard in front and back yards
                </ProjectScopeStep>
              </ul>
            </div>
            <div className="flex items-start mt-28 gap-16 relative">
              <div className="sticky top-20 flex-grow">
                <h2 className={cx(montserrat, `text-6xl font-bold text-white`)}>
                  Plan and design
                </h2>
                <p className={cx('max-w-2xl text-xl text-primary-100 mt-8')}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt earum
                  quam excepturi labore consequatur praesentium possimus hic, voluptatum
                  aliquid rerum, nobis reiciendis voluptatem temporibus, magni iure
                  consequuntur corporis harum fugiat.
                </p>
                <div className="bg-primary-900/50 rounded-3xl mt-12 p-8">
                  <ul className="flex flex-col gap-8">
                    <PlanStep
                      index={1}
                      title={'Plant trees in yard'}
                      description={'All 2,541 of them.'}
                    />
                    <PlanStep
                      index={2}
                      title={'Excavate trenches for retaining walls'}
                      description={'120 feet of trenches, 2 feet deep, 3 feet wide.'}
                    />
                    <PlanStep
                      index={3}
                      title={'Build retaining walls'}
                      description={
                        '50 tons of Unilock blocks, 20 tons of gravel, 10 tons of sand.'
                      }
                    />
                    <PlanStep
                      index={4}
                      title={'Construct beds inside retaining walls'}
                      description={
                        'Weed-preventing fabric, decorative gravel, and boxwood shrubs.'
                      }
                    />
                    <PlanStep
                      index={5}
                      title={'Grade yard and plant grass seed'}
                      description={'20 tons of topsoil hand-graded to perfection.'}
                    />
                  </ul>
                </div>
              </div>
              <div className="relative aspect-square flex flex-col gap-8 flex-grow items-end">
                <Image
                  src={Design1}
                  alt="Hartville project design"
                  className="rounded-[80px] sepia-[30%] w-full h-80 object-cover object-center"
                />
                <Image
                  src={Design2}
                  alt="Hartville project design"
                  className="rounded-[80px] sepia-[30%] w-full h-80 object-cover object-center self-start"
                />
                <Image
                  src={Design3}
                  alt="Hartville project design"
                  className="rounded-[80px] sepia-[30%] w-full h-80 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center sticky top-0 mt-16">
            <div
              ref={bgImageRef}
              className={cx(
                'flex justify-center items-center h-screen transition-[width,border-radius] duration-700 relative overflow-hidden',
                overBgImage ? `w-screen rounded-none` : `w-[1280px] rounded-[120px]`,
              )}
            >
              <Image
                src={
                  intersectedThirdCaption
                    ? Finished3
                    : intersectedSecondCaption
                    ? Finished1
                    : Finished2
                }
                alt="Hartville project"
                className={cx(
                  'w-full h-full absolute left-0 top-0 object-center object-cover transition-[filter] duration-700',
                  overBgImage ? `sepia-[50%]` : `sepia-[20%]`,
                )}
              />
              <div
                className={cx(
                  'w-full h-full bg-gradient-to-r from-black/80 via-black/70 to-transparent absolute left-0 top-0 transition-[border-radius,opacity] duration-700',
                  overBgImage ? `rounded-none opacity-100` : `rounded-[120px] opacity-0`,
                )}
              ></div>
            </div>
          </div>
          <div className={cx('flex justify-start relative p-20 mt-20')}>
            <div className="max-w-3xl flex flex-col gap-[calc(100vh-160px)]">
              <div className="">
                <h3 className={cx('text-5xl text-white font-semibold', montserrat)}>
                  Clean, modern look
                </h3>
                <p className="text-2xl text-white/80 mt-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
                  doloribus modi architecto dolore voluptate magnam, id facilis natus
                  possimus. Ea aliquam culpa error labore impedit consequatur minima, unde
                  facere quidem.
                </p>
              </div>
              <div className="" ref={secondCaptionRef}>
                <h3 className={cx('text-5xl text-white font-semibold', montserrat)}>
                  Attention to detail
                </h3>
                <p className="text-2xl text-white/80 mt-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
                  doloribus modi architecto dolore voluptate magnam, id facilis natus
                  possimus. Ea aliquam culpa error labore impedit consequatur minima, unde
                  facere quidem.
                </p>
              </div>
              <div className="mb-[calc(100vh-500px)] " ref={thirdCaptionRef}>
                <h3 className={cx('text-5xl text-white font-semibold', montserrat)}>
                  Precision construction
                </h3>
                <p className="text-2xl text-white/80 mt-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
                  doloribus modi architecto dolore voluptate magnam, id facilis natus
                  possimus. Ea aliquam culpa error labore impedit consequatur minima, unde
                  facere quidem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 w-screen -mb-12 pb-20 pt-40 px-20 flex justify-center items-center flex-col">
          <h2 className={cx(montserrat, `text-5xl font-bold`)}>
            Want your landscape to look like this?
          </h2>
          <p className="mt-8 mb-16 text-3xl text-black/60 font-medium">
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

export default HartvilleProject;

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
}) => {
  return (
    <div
      className={cx(
        'flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-full transition-[opacity,transform,background-color] duration-700',
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
};

interface ProjectscopeStepProps {
  children: React.ReactNode;
  Icon: TablerIcon;
}

const ProjectScopeStep: React.FC<ProjectscopeStepProps> = ({ children, Icon }) => {
  return (
    <li className="font-medium flex items-center gap-3">
      <Icon className="text-primary-700" size={28} />
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
        'flex gap-4 transition-[opacity,transform] duration-500',
        !intersected && `translate-y-4 opacity-0`,
      )}
      ref={ref}
    >
      <div className="bg-primary-800 w-10 h-10 rounded-full flex justify-center items-center">
        <span className="font-mono text-xl text-primary-300">{index}</span>
      </div>
      <div className="mt-1">
        <h4 className={cx('text-xl font-semibold text-primary-200', montserrat)}>
          {title}
        </h4>
        <p className="text-primary-400 text-lg">{description}</p>
      </div>
    </li>
  );
};
