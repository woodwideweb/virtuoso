import React from 'react';
import cx from 'classnames';
import { josefin } from '@/lib/fonts';
import Image, { StaticImageData } from 'next/image';
import Hartville1 from '@/public/hartville-1.jpg';
import Hartville2 from '@/public/hartville-2.jpg';
import ElectricMower from '@/public/electric-mower.png';
import ElectricTruck from '@/public/electric-truck.png';
import Link from 'next/link';
import Button from './Button';
import { IconArrowRight } from '@tabler/icons-react';

const AboutBlock: React.FC = () => {
  return (
    <div className="p-20 flex gap-8">
      <div className="flex-grow p-16 rounded-[60px] bg-amber-100 flex flex-col">
        <h2 className={cx(`text-5xl font-bold`, josefin)}>Dedicated to quality</h2>
        <p className="text-xl text-black/60 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dicta. Beatae
          incidunt aliquid necessitatibus quos odit inventore accusantium quas numquam,
          sapiente laborum cumque! Autem, pariatur dolores possimus accusamus
          necessitatibus soluta!
        </p>
        <div className="flex mt-12 gap-8">
          <FeaturedProject href="#" src={Hartville2} title={'Gigantic walls'} />
          <FeaturedProject href="#" src={Hartville1} title={'Cute walkway'} />
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-8">
        <div className="p-16 rounded-[60px] bg-amber-100">
          <h2 className={cx(`text-5xl font-bold`, josefin)}>
            Leaders in <span className="text-primary-700">green</span>
          </h2>
          <p className="text-black/60 text-xl mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate obcaecati
            voluptatum aliquid id reprehenderit quam vero, itaque consequuntur blanditiis
            magnam quia quisquam consectetur a repellendus dolores fuga iste. Tenetur,
            dolorum.
          </p>
        </div>
        <div className="flex gap-8 flex-grow">
          <Image
            className="rounded-[60px] w-0 flex-grow min-w-[300px] object-cover object-center sepia-[50%] border border-amber-500"
            alt="todo"
            src={ElectricMower}
          />
          <Image
            className="rounded-[60px] w-0 flex-grow min-w-[300px] object-cover object-center sepia-[50%] border border-amber-500"
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
    <div className="flex-grow group">
      <Image
        src={src}
        alt={title}
        className="object-cover object-center rounded-t-3xl grayscale group-hover:filter-none transition-[filter] duration-300"
      />
      <div className="bg-amber-50 p-6 rounded-b-3xl">
        {/* <h3 className="text-2xl font-bold mb-4 text-center z-10">{title}</h3> */}
        <Button type="link" to={href} color="secondary" icon={IconArrowRight}>
          View project
        </Button>
      </div>
    </div>
  );
};
