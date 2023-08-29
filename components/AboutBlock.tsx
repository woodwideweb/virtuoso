import React from 'react';
import Image, { StaticImageData } from 'next/image';
import cx from 'classnames';
import { IconArrowRight } from '@tabler/icons-react';
import { montserrat } from '@/lib/fonts';
import Hartville1 from '@/public/hartville-1.jpg';
import Hartville2 from '@/public/hartville-2.jpg';
import ElectricMower from '@/public/electric-mower.png';
import ElectricTruck from '@/public/electric-truck.png';
import PrimaryWave from '@/public/primary-wave.svg';
import AmberWave from '@/public/amber-wave.svg';
import Button from './Button';

const AboutBlock: React.FC = () => {
  return (
    <div className="p-12 flex gap-12">
      <div
        className="flex-grow p-16 rounded-[60px] bg-amber-100 flex flex-col"
        style={{
          background: `url(${AmberWave.src})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <h2 className={cx(`text-5xl font-bold`, montserrat)}>Dedicated to quality</h2>
        <p className="text-xl text-black/60 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dicta. Beatae
          incidunt aliquid necessitatibus quos odit inventore accusantium quas numquam,
          sapiente laborum cumque! Autem, pariatur dolores possimus accusamus
          necessitatibus soluta!
        </p>
        <div className="flex mt-12 gap-12">
          <FeaturedProject href="#" src={Hartville2} title={'Gigantic walls'} />
          <FeaturedProject href="#" src={Hartville1} title={'Cute walkway'} />
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-12">
        <div
          className="p-16 rounded-[60px] bg-primary-300"
          style={{
            background: `url(${PrimaryWave.src})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <h2 className={cx(`text-5xl font-bold`, montserrat)}>
            Leaders in <span className="text-primary-800">green</span>
          </h2>
          <p className="text-black/60 text-xl mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate obcaecati
            voluptatum aliquid id reprehenderit quam vero, itaque consequuntur blanditiis
            magnam quia quisquam consectetur a repellendus dolores fuga iste. Tenetur,
            dolorum.
          </p>
        </div>
        <div className="flex gap-12 flex-grow">
          <Image
            className="rounded-[60px] w-0 flex-grow min-w-[300px] object-cover object-center sepia-[50%] border-[0.5px] border-amber-500"
            alt="todo"
            src={ElectricMower}
          />
          <Image
            className="rounded-[60px] w-0 flex-grow min-w-[300px] object-cover object-center sepia-[50%] border-[0.5px] border-amber-500"
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
    <div className="flex flex-grow bg-top bg-cover rounded-3xl flex-col justify-end p-3 pt-64 relative overflow-hidden">
      <Image
        src={src}
        alt={title}
        className="absolute top-0 left-0 h-full w-full object-center object-cover sepia-[40%]"
      />
      <div className="w-full h-full left-0 top-0 bg-gradient-to-b from-transparent via-transparent to-primary-400/95 absolute" />
      <div className="bg-amber-50 rounded-3xl p-4 relative">
        <h4 className={cx(`font-bold text-2xl mb-3 text-center`)}>{title}</h4>
        <Button type="link" to="" color="primary" icon={IconArrowRight} size="sm">
          View project
        </Button>
      </div>
    </div>
  );
};
