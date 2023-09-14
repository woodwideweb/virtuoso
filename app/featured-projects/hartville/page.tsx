'use client';

import React from 'react';
import Finished1 from '@/public/featured-projects/hartville/finished-1.jpg';
import Finished2 from '@/public/featured-projects/hartville/finished-2.jpg';
import Finished3 from '@/public/featured-projects/hartville/finished-3.jpg';
import Design1 from '@/public/featured-projects/hartville/design-1.jpg';
import Design2 from '@/public/featured-projects/hartville/design-2.jpg';
import Design3 from '@/public/featured-projects/hartville/design-3.jpg';
import { IconBed, IconPlant, IconPlant2, IconTree, IconWall } from '@tabler/icons-react';
import FeaturedProjectTemplate from '@/components/FeaturedProjectTemplate';

const HartvilleProject: React.FC = () => {
  return (
    <FeaturedProjectTemplate
      mainSplashPicture={Finished2}
      projectTitle="Residential project in Hartville, Ohio"
      location="Hartville, OH"
      estimatedCost={10200}
      actualCost={220000}
      when="June-July, 2022"
      scope={[
        { Icon: IconTree, title: `Plant 2,000 gigantic trees in front and back yards` },
        {
          Icon: IconWall,
          title: `Build two humongoloidious terraced walls and one smaller bed-retaining wall`,
        },
        {
          Icon: IconBed,
          title: `Create gravel beds within walls and around back of house`,
        },
        { Icon: IconPlant, title: `Plant a bunch of shrubs in those beds` },
        { Icon: IconPlant2, title: `Grade and install yard in front and back yards` },
      ]}
      planParagraph={
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt earum quam excepturi labore consequatur praesentium possimus hic, voluptatum aliquid rerum, nobis reiciendis voluptatem temporibus, magni iure consequuntur corporis harum fugiat.'
      }
      planSteps={[
        { title: `Plant trees in yard`, description: `All 2,500 of them.` },
        {
          title: `Excavate trenches for retaining walls`,
          description: `120 feet of trenches, 2 feet deep, 3 feet wide.`,
        },
        {
          title: `Build retaining walls`,
          description: `50 tons of Unilock blocks, 20 tons of gravel, 10 tons of sand.`,
        },
        {
          title: `Construct beds inside retaining walls`,
          description: `Weed-preventing fabric, decorative gravel, and boxwood shrubs.`,
        },
        {
          title: `Grade yard and plant grass seed`,
          description: `20 tons of topsoil hand-graded to perfection.`,
        },
      ]}
      planImages={[Design1, Design2, Design3]}
      finishedProject={{
        first: {
          caption: 'Clean, modern look',
          subCaption:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.',
          image: Finished2,
        },
        second: {
          caption: 'Attention to detail',
          subCaption:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.',
          image: Finished1,
        },
        third: {
          caption: 'Precision construction',
          subCaption:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.',
          image: Finished3,
        },
      }}
    />
  );
};

export default HartvilleProject;
