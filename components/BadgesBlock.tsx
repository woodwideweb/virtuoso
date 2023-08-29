import React from 'react';
import Image from 'next/image';
import NALPLogo from '@/public/badges/nalp.png';
import GBBLogo from '@/public/badges/gbb-white.png';
import AngiesListLogo from '@/public/badges/angies-list-award-2022-transparent.png';

const BadgesBlock: React.FC = () => {
  return (
    <div className="bg-primary-300 p-20 flex rounded-b-[80px] rounded-tl-[80px]">
      <div className="bg-primary-500 rounded-[80px] p-8 flex items-center justify-center gap-20 flex-grow">
        <Image
          src={NALPLogo}
          alt="National Association of Landscape Professionals member"
          className="shrink-0 brightness-[500%] h-28 w-96"
        />
        <Image
          src={AngiesListLogo}
          alt="Angie's List Super Service Award 2022"
          className="shrink-0 [filter:grayscale()_brightness(100)] h-40 w-48"
        />
        <Image
          src={GBBLogo}
          alt="Green Business Bureau member"
          className="shrink-0 h-32 w-72"
        />
      </div>
    </div>
  );
};

export default BadgesBlock;
