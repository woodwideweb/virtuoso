import React from 'react';
import Image, { StaticImageData } from 'next/image';
import cx from 'classnames';
import { IconArrowRight } from '@tabler/icons-react';
import { montserrat } from '@/lib/fonts';
import Finished1 from '@/public/featured-projects/hartville/finished-1.jpg';
import Finished2 from '@/public/featured-projects/hartville/finished-2.jpg';
import ElectricMower from '@/public/electric-mower.png';
import ElectricTruck from '@/public/electric-truck.png';
import PrimaryWave from '@/public/primary-wave.svg';
import AmberWave from '@/public/amber-wave.svg';
import Button from './Button';

const AboutBlock: React.FC = () => {
  return (
    <div className="px-4 xs:px-8 md:px-12 py-8 md:py-12 flex flex-col min-[1400px]:flex-row gap-6 md:gap-8 2xl:gap-12">
      <div
        className="flex-grow p-8 md:p-12 2xl:p-16 rounded-3xl md:rounded-[60px] bg-amber-100 flex flex-col"
        style={{
          background: `url(${AmberWave.src})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <h2 className={cx(`text-3xl xs:text-4xl md:text-5xl font-bold`, montserrat)}>
          Dedicated to quality
        </h2>
        <p className="text-lg md:text-xl text-black/60 mt-4 md:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dicta. Beatae
          incidunt aliquid necessitatibus quos odit inventore accusantium quas numquam,
          sapiente laborum cumque! Autem, pariatur dolores possimus accusamus
          necessitatibus soluta!
        </p>
        <div className="flex flex-col md:flex-row min-[1400px]:flex-col 2xl:flex-row mt-8 md:mt-12 gap-6 md:gap-8 2xl:gap-12">
          <FeaturedProject href="#" src={Finished2} title={'Gigantic walls'} />
          <FeaturedProject href="#" src={Finished1} title={'Cute walkway'} />
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-6 md:gap-8 2xl:gap-12">
        <div
          className="p-8 md:p-12 2xl:p-16 rounded-3xl md:rounded-[60px] bg-primary-300"
          style={{
            background: `url(${PrimaryWave.src})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <h2 className={cx(`text-3xl xs:text-4xl md:text-5xl font-bold`, montserrat)}>
            Leaders in <span className="text-primary-800">green</span>
          </h2>
          <p className="text-black/60 text-lg md:text-xl mt-4 md:mt-6">
            Paragraph about our all-electric mowers, weed-eaters, and other equipment with
            picutures below. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci nostrum, tempora perferendis, quibusdam quae praesentium aut dicta
            architecto vel!
          </p>
        </div>
        <div className="flex gap-6 md:gap-8 2xl:gap-12 min-[1400px]:flex-grow h-52 xs:h-64 sm:h-80 min-[1400px]:h-auto">
          <Image
            className="rounded-3xl md:rounded-[60px] w-0 flex-grow md:min-w-[300px] object-cover object-center sepia-[50%] border-[0.5px] border-amber-500"
            alt="todo"
            src={ElectricMower}
          />
          <Image
            className="rounded-3xl md:rounded-[60px] w-0 flex-grow md:min-w-[300px] object-cover object-center sepia-[50%] border-[0.5px] border-amber-500"
            alt="todo"
            src={ElectricTruck}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;

interface Props {
  src: StaticImageData;
  title: string;
  href: string;
}

const FeaturedProject: React.FC<Props> = ({ src, title, href }) => {
  return (
    <div className="flex flex-grow bg-top bg-cover rounded-3xl flex-col min-[1400px]:flex-row 2xl:flex-col 2xl:justify-end p-3 pt-52 md:pt-64 min-[1400px]:pt-0 2xl:pt-64 relative overflow-hidden">
      <Image
        src={src}
        alt={title}
        className="absolute top-0 left-0 h-full w-full object-center object-cover sepia-[40%]"
      />
      <div className="w-full h-full left-0 top-0 2xl:bg-gradient-to-b min-[1400px]:bg-gradient-to-bl bg-gradient-to-b from-transparent via-transparent to-primary-400/95 absolute" />
      <div className="bg-amber-50 rounded-3xl p-4 relative min-[1400px]:mt-20 2xl:mt-0 w-auto min-[1400px]:w-72 2xl:w-auto">
        <h4 className={cx(`font-bold text-2xl mb-3 text-center`)}>{title}</h4>
        <Button type="link" to="" color="primary" icon={IconArrowRight} size="sm">
          View project
        </Button>
      </div>
    </div>
  );
};
