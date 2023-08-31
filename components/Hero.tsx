'use client';

import React from 'react';
import cx from 'classnames';
import Button from './Button';
import { IconArrowRight, IconLayoutGrid } from '@tabler/icons-react';
import { montserrat } from '@/lib/fonts';
import Illustration from '../public/hero-illustration.svg';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [showHeading, setShowHeading] = React.useState(false);
  const [showSubheading, setShowSubheading] = React.useState(false);
  const [showPrimaryButton, setShowPrimaryButton] = React.useState(false);
  const [showSecondaryButton, setShowSecondaryButton] = React.useState(false);

  React.useEffect(() => {
    const headingTimeout = setTimeout(() => setShowHeading(true), 100);
    const subheadingTimeout = setTimeout(() => setShowSubheading(true), 300);
    const primaryButtonTimeout = setTimeout(() => setShowPrimaryButton(true), 700);
    const secondaryButtonTimeout = setTimeout(() => setShowSecondaryButton(true), 900);
    return () => {
      clearTimeout(headingTimeout);
      clearTimeout(subheadingTimeout);
      clearTimeout(primaryButtonTimeout);
      clearTimeout(secondaryButtonTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row py-20 relative z-10 justify-between items-center">
      <div className="absolute w-2/5 xl:w-[43%] min-[1380px]:w-[47%] 2xl:w-1/2 h-48 xl:h-64 bg-amber-100 right-0 bottom-0 rounded-tl-[80px] hidden min-[1070px]:block" />
      <div className="pr-8 sm:pr-12 xl:pr-28 pl-8 sm:pl-12 lg:pl-20 xl:pl-28 self-center relative flex-grow flex flex-col items-center lg:items-start">
        <h1
          className={cx(
            montserrat,
            'text-3xl xs:text-4xl sm:text-5xl 2xl:text-6xl font-bold leading-[1.25em] sm:leading-[1.25em] max-w-3xl transition-[transform,opacity] duration-[700ms] text-center lg:text-left',
            !showHeading && `opacity-0 translate-y-4`,
          )}
        >
          Creating beautiful outdoor living spaces
        </h1>
        <h3
          className={cx(
            'text-lg xs:text-xl xl:text-2xl mt-4 xs:mt-6 text-black/50 max-w-2xl transition-[transform,opacity] duration-[700ms] text-center lg:text-left',
            !showSubheading && `opacity-0 translate-y-4`,
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit, necessitatibus, beatae
          dolorem. Voluptate maxime at velit illo quae modi?
        </h3>
        <div className="mt-6 xs:mt-12 xl:mt-20 flex gap-4 flex-col min-[516px]:flex-row self-stretch min-[516px]:self-center lg:self-start">
          <Button
            type="link"
            to="/contact"
            size="lg"
            color="primary"
            icon={IconArrowRight}
            className={cx(
              `transition-[transform,opacity,background-color]`,
              !showPrimaryButton && `opacity-0 translate-y-4`,
            )}
          >
            Contact us
          </Button>
          <Button
            type="link"
            to="/gallery"
            size="lg"
            color="secondary"
            icon={IconLayoutGrid}
            className={cx(
              `transition-[transform,opacity,background-color]`,
              !showSecondaryButton && `opacity-0 translate-y-4`,
            )}
          >
            View gallery
          </Button>
        </div>
      </div>
      <div className="lg:mr-16 xl:mr-24 min-[1380px]:mr-32 2xl:mr-48 h-40 sm:h-52 lg:h-96 xl:h-128 min-[1380px]:h-152 flex justify-center items-center shrink-0 relative mb-6 xs:mb-8 lg:mb-0">
        <Image
          src={Illustration}
          alt="potted plant"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
