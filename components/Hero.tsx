'use client';

import React from 'react';
import cx from 'classnames';
import Button from './Button';
import { IconArrowRight, IconLayoutGrid } from '@tabler/icons-react';
import { josefin } from '@/lib/fonts';
import BgImage from '../public/mountains-1.png';

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
    <div className="flex pt-12 relative z-10">
      <div className="p-28 pb-32">
        <h1
          className={cx(
            josefin,
            'text-6xl font-bold leading-[1.25em] max-w-3xl transition-[transform,opacity] duration-[700ms]',
            !showHeading && `opacity-0 translate-y-4`,
          )}
        >
          Building beautiful outdoor living spaces
        </h1>
        <h3
          className={cx(
            'text-2xl mt-6 text-black/50 max-w-3xl transition-[transform,opacity] duration-[700ms]',
            !showSubheading && `opacity-0 translate-y-4`,
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit, necessitatibus, beatae
          dolorem. Voluptate maxime at velit illo quae modi?
        </h3>
        <div className="mt-20 flex gap-4">
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
      <div
        className="flex-grow bg-center bg-cover rounded-l-[80px]"
        style={{ backgroundImage: `url(${BgImage.src})` }}
      />
    </div>
  );
};

export default Hero;
