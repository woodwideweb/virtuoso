"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import cx from "classnames";
import {
  IconCactus,
  IconHammer,
  IconSeeding,
  IconWall,
} from "@tabler/icons-react";
import type { StaticImageData } from "next/image";
import type { TablerIcon } from "@/lib/types";
import { montserrat } from "@/lib/fonts";
import { useIntersectionObserver } from "@/lib/hooks";
import Hartville1 from "@/public/featured-projects/hartville/finished-1.jpg";
import Hartville2 from "@/public/featured-projects/hartville/finished-2.jpg";
import Hartville3 from "@/public/featured-projects/hartville/finished-3.jpg";

const SubHero: React.FC = () => {
  const { ref, intersected } = useIntersectionObserver(
    {
      threshold: 1,
      rootMargin: `0px`,
    },
    true,
  );

  const [showHeading, setShowHeading] = React.useState(false);
  const [showSubheading, setShowSubheading] = React.useState(false);

  useEffect(() => {
    const headingTimeout = setTimeout(() => setShowHeading(intersected), 100);
    const subheadingTimeout = setTimeout(
      () => setShowSubheading(intersected),
      300,
    );
    return () => {
      clearTimeout(headingTimeout);
      clearTimeout(subheadingTimeout);
    };
  }, [intersected]);

  return (
    <div className="relative bg-primary-300 overflow-x-clip">
      <SubHeroBackground intersected={intersected} />
      <div className="relative pt-8 md:pt-24 w-full px-8 md:px-12 lg:px-16 flex flex-col xl:flex-row gap-20 min-[1500px]:gap-28 justify-between">
        <div className="xl:flex-col xl:gap-4 relative flex-grow hidden xs:flex">
          <div className="min-[1500px]:pl-20 flex-grow-[1] xl:flex-grow-0 flex xl:block">
            <FeaturedImage
              delay={900}
              intersected={intersected}
              src={Hartville2}
              className="flex-grow xl:flex-grow-0 w-0 xl:w-4/5 min-[1500px]:w-96 2xl:w-128 h-52 sm:h-64 xl:h-72 min-[1500px]:h-64 2xl:h-72"
            />
          </div>
          <div className="flex xl:flex-col min-[1500px]:flex-row gap-4 flex-grow-[1] md:flex-grow-[2] xl:flex-grow-0 pl-4">
            <FeaturedImage
              delay={1100}
              intersected={intersected}
              src={Hartville1}
              className="self-end min-[1500px]:self-auto flex-grow xl:flex-grow-0 w-0 xl:w-4/5 min-[1500px]:w-72 2xl:w-96 h-52 sm:h-64 xl:h-72 2xl:h-96"
            />
            <FeaturedImage
              delay={1300}
              intersected={intersected}
              src={Hartville3}
              className="w-0 xl:w-4/5 min-[1500px]:w-80 flex-grow xl:flex-grow-0 2xl:flex-grow sm:h-64 xl:h-72 min-[1500px]:h-96 2xl:h-128 hidden md:block"
            />
          </div>
        </div>
        <div>
          <h2
            className={cx(
              montserrat,
              `text-3xl xs:text-4xl md:text-5xl font-bold leading-[1.3em] transition-[transform,opacity] delay-300 duration-[700ms]`,
              !showHeading && `translate-y-4 opacity-0`,
            )}
          >
            Your dream landscape,
            <br />
            <span className="text-primary-900">made real</span>
          </h2>
          <p
            className={cx(
              `text-lg md:text-xl mt-4 text-black/60 max-w-2xl transition-[transform,opacity] delay-300 duration-[700ms]`,
              !showSubheading && `translate-y-4 opacity-0`,
            )}
            ref={ref}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            a temporibus vero velit ab, quisquam, amet dignissimos, aspernatur
            tempore nam repudiandae totam minima! Pariatur vel, ullam assumenda
            quod porro delectus?
          </p>
          <div className="mt-8 grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-2 sm:gap-4 xl:max-w-2xl -mx-6 xs:mx-0">
            <ProjectTypeFeature
              delay={800}
              intersected={intersected}
              title={`Hardscaping`}
              description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.`}
              Icon={IconWall}
            />
            <ProjectTypeFeature
              delay={1000}
              intersected={intersected}
              title={`Construction`}
              description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.`}
              Icon={IconHammer}
            />
            <ProjectTypeFeature
              delay={1200}
              intersected={intersected}
              title={`Lawn care`}
              description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.`}
              Icon={IconSeeding}
            />
            <ProjectTypeFeature
              delay={1400}
              intersected={intersected}
              title={`Something else`}
              description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.`}
              Icon={IconCactus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;

const SubHeroBackground: React.FC<{ intersected: boolean }> = ({
  intersected,
}) => (
  <div className="bg-primary-300 flex flex-col items-start justify-start absolute left-0 top-0 w-full h-full">
    <div
      className="transition-[width] duration-[1s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `700px` : `800px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
    </div>
    <div
      className="transition-[width] duration-[1.2s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `800px` : `900px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300">
        <div className="w-32 h-full bg-amber-50 rounded-r-full flex justify-center items-center" />
      </div>
    </div>
    <div
      className="transition-[width] duration-[1.4s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `400px` : `620px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
    </div>
    <div
      className="transition-[width] duration-[1.6s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `600px` : `1600px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300">
        <div className="w-32 h-full bg-amber-50 rounded-r-full flex justify-center items-center" />
      </div>
    </div>
    <div
      className="transition-[width] duration-[1.8s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `500px` : `1200px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
    </div>
    <div
      className="transition-[width] duration-[2s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `700px` : `1700px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300">
        <div className="w-32 h-full bg-amber-50 rounded-r-full flex justify-center items-center" />
      </div>
    </div>
    <div
      className="transition-[width] duration-[2.2s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `300px` : `1600px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
    </div>
    <div
      className="transition-[width] duration-[2.4s] flex-grow flex justify-end bg-amber-50"
      style={{
        width: intersected ? `350px` : `1800px`,
      }}
    >
      <div className="h-full w-32 bg-primary-300">
        <div className="w-32 h-full bg-amber-50 rounded-r-full flex justify-center items-center" />
      </div>
    </div>
  </div>
);

interface FeaturedImageProps {
  src: StaticImageData;
  className?: string;
  intersected: boolean;
  delay: number;
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({
  src,
  className,
  intersected,
  delay,
}) => (
  <Image
    src={src}
    alt="Beautiful landscaping"
    style={{
      transitionDelay: `${delay}ms`,
    }}
    className={cx(
      `object-cover object-center rounded-[60px] xl:rounded-[80px] transition-[transform,opacity,filter] duration-[700ms]`,
      !intersected && `translate-y-4 grayscale`,
      className,
    )}
  />
);

interface ProjectTypeFeatureProps {
  title: string;
  description: string;
  intersected: boolean;
  delay: number;
  Icon: TablerIcon;
}

const ProjectTypeFeature: React.FC<ProjectTypeFeatureProps> = ({
  title,
  description,
  intersected,
  delay,
  Icon,
}) => (
  <div
    className={cx(
      `bg-primary-50/60 p-6 sm:p-8 rounded-3xl overflow-hidden transition-[transform,opacity] duration-700 backdrop-blur-lg border-[0.5px] xl:border-none border-primary-300`,
      !intersected && `translate-y-4 opacity-0`,
    )}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <Icon className="text-primary-400 -ml-2 -mt-2" stroke={1.5} size={40} />
    <h4 className="text-lg xs:text-xl font-bold text-primary-950 mt-1 xs:mt-2">
      {title}
    </h4>
    <p className="text-xs xs:text-sm mt-1 xs:mt-2 text-black/60">
      {description}
    </p>
  </div>
);
