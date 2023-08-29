'use client';

import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import cx from 'classnames';
import { josefin } from '@/lib/fonts';
import { IconCactus, IconHammer, IconSeeding, IconWall } from '@tabler/icons-react';
import { useIntersectionObserver } from '@/lib/hooks';
import Hartville1 from '@/public/hartville-1.jpg';
import Hartville2 from '@/public/hartville-2.jpg';
import Hartville3 from '@/public/hartville-3.jpg';
import { TablerIcon } from '@/lib/types';

const SubHero: React.FC = () => {
  const { ref, intersected } = useIntersectionObserver({
    threshold: 1,
    rootMargin: '0px',
  });

  const [showHeading, setShowHeading] = React.useState(false);
  const [showSubheading, setShowSubheading] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  useEffect(() => {
    const headingTimeout = setTimeout(() => setShowHeading(intersected), 100);
    const subheadingTimeout = setTimeout(() => setShowSubheading(intersected), 300);
    const buttonTimeout = setTimeout(() => setShowButton(intersected), 700);
    return () => {
      clearTimeout(headingTimeout);
      clearTimeout(subheadingTimeout);
      clearTimeout(buttonTimeout);
    };
  }, [intersected]);

  return (
    <div className="relative bg-primary-300 overflow-x-clip">
      <SubHeroBackground intersected={intersected} />
      <div className="relative top-24 w-full pt-32 pb-20 px-16 flex gap-28">
        <div className="flex flex-col gap-4 relative -top-20">
          <div className="pl-20">
            <FeaturedImage
              delay={900}
              intersected={intersected}
              src={Hartville2}
              className="w-128 h-72"
            />
          </div>
          <div className="flex gap-4">
            <FeaturedImage
              delay={1100}
              intersected={intersected}
              src={Hartville1}
              className="w-96 h-96"
            />
            <FeaturedImage
              delay={1300}
              intersected={intersected}
              src={Hartville3}
              className="w-96 h-128"
            />
          </div>
        </div>
        <div className="self-start">
          <h2
            className={cx(
              josefin,
              `text-5xl font-bold leading-[1.3em] transition-[transform,opacity] delay-300 duration-[700ms]`,
              !showHeading && `translate-y-4 opacity-0`,
            )}
          >
            Your dream landscape,
            <br />
            <span className="text-primary-900">made real</span>
          </h2>
          <p
            className={cx(
              'text-xl mt-4 text-black/60 max-w-2xl transition-[transform,opacity] delay-300 duration-[700ms]',
              !showSubheading && `translate-y-4 opacity-0`,
            )}
            ref={ref}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique a
            temporibus vero velit ab, quisquam, amet dignissimos, aspernatur tempore nam
            repudiandae totam minima! Pariatur vel, ullam assumenda quod porro delectus?
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-2xl">
            <ProjectTypeFeature
              delay={800}
              intersected={intersected}
              title={'Hardscaping'}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.'
              }
              Icon={IconWall}
            />
            <ProjectTypeFeature
              delay={1000}
              intersected={intersected}
              title={'Construction'}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.'
              }
              Icon={IconHammer}
            />
            <ProjectTypeFeature
              delay={1200}
              intersected={intersected}
              title={'Lawn care'}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.'
              }
              Icon={IconSeeding}
            />
            <ProjectTypeFeature
              delay={1400}
              intersected={intersected}
              title={'Something else'}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum nobis nesciunt, deleniti.'
              }
              Icon={IconCactus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;

const SubHeroBackground: React.FC<{ intersected: boolean }> = ({ intersected }) => {
  return (
    <div className="bg-primary-300 flex flex-col items-start justify-start absolute left-0 top-0 w-full">
      <div
        className="transition-[width] duration-[1s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `700px` : `800px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
      </div>
      <div
        className="transition-[width] duration-[1.2s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `800px` : `900px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300">
          <div className="w-32 h-32 bg-amber-50 rounded-r-full flex justify-center items-center" />
        </div>
      </div>
      <div
        className="transition-[width] duration-[1.4s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `400px` : `620px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
      </div>
      <div
        className="transition-[width] duration-[1.6s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `600px` : `1600px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300">
          <div className="w-32 h-32 bg-amber-50 rounded-r-full flex justify-center items-center" />
        </div>
      </div>
      <div
        className="transition-[width] duration-[1.8s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `500px` : `1200px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
      </div>
      <div
        className="transition-[width] duration-[2s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `700px` : `1700px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300">
          <div className="w-32 h-32 bg-amber-50 rounded-r-full flex justify-center items-center" />
        </div>
      </div>
      <div
        className="transition-[width] duration-[2.2s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `300px` : `1600px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300 rounded-l-full flex justify-center items-center"></div>
      </div>
      <div
        className="transition-[width] duration-[2.4s] h-32 flex justify-end bg-amber-50"
        style={{
          width: intersected ? `350px` : `1800px`,
        }}
      >
        <div className="h-32 w-32 bg-primary-300">
          <div className="w-32 h-32 bg-amber-50 rounded-r-full flex justify-center items-center" />
        </div>
      </div>
    </div>
  );
};

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
}) => {
  return (
    <Image
      src={src}
      alt="Beautiful landscaping"
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={cx(
        'object-cover object-center rounded-[80px] transition-[transform,opacity,filter] duration-[700ms]',
        !intersected && `translate-y-4 grayscale`,
        className,
      )}
    />
  );
};

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
}) => {
  return (
    <div
      className={cx(
        'bg-primary-100 p-8 rounded-3xl overflow-hidden transition-[transform,opacity] duration-700',
        !intersected && `translate-y-4 opacity-0`,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="text-primary-400 -ml-2 -mt-2" stroke={1.5} size={40} />
      <h4 className="text-xl font-bold text-primary-950 mt-2">{title}</h4>
      <p className="text-sm mt-2 text-black/60">{description}</p>
    </div>
  );
};
