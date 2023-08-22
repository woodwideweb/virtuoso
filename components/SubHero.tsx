'use client';

import React, { useEffect } from 'react';
import cx from 'classnames';
import { josefin } from '@/lib/fonts';
import Button from './Button';
import { IconArrowRight } from '@tabler/icons-react';
import { useIntersectionObserver } from '@/lib/hooks';

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
    <div className="relative -mt-24">
      <SubHeroBackground intersected={intersected} />
      <div className="relative top-24 w-full py-32 px-16 flex">
        <div className="flex-grow"></div>
        <div ref={ref}>
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
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique a
            temporibus vero velit ab, quisquam, amet dignissimos, aspernatur tempore nam
            repudiandae totam minima! Pariatur vel, ullam assumenda quod porro delectus?
          </p>
          <Button
            type="link"
            to="/featured-projects"
            color="primary"
            size="md"
            icon={IconArrowRight}
            className={cx(
              'w-fit mt-8 transition-[transform,opacity] delay-300 duration-[700ms]',
              !showButton && `translate-y-4 opacity-0`,
            )}
          >
            See what we can do
          </Button>
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
    </div>
  );
};
