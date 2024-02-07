"use client";

import React from "react";
import {
  IconFlame,
  IconHammer,
  IconTree,
  IconWall,
  IconWreckingBall,
} from "@tabler/icons-react";
import Design from "@/public/featured-projects/classic-landscaping/design.jpg";
import Finished1 from "@/public/featured-projects/classic-landscaping/finished-1.jpg";
import Finished2 from "@/public/featured-projects/classic-landscaping/finished-2.jpg";
import Finished3 from "@/public/featured-projects/classic-landscaping/finished-3.jpg";
import InProgress1 from "@/public/featured-projects/classic-landscaping/in-progress-1.jpg";
import InProgress2 from "@/public/featured-projects/classic-landscaping/in-progress-2.jpg";
import InProgress3 from "@/public/featured-projects/classic-landscaping/in-progress-3.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";

const ClassicLandscaping: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={Finished3}
    projectTitle="TODO"
    location="Fairlawn? Copley?"
    when="July-September, 2023"
    scope={[
      { Icon: IconWreckingBall, title: `Demo existing patio and deck` },
      {
        Icon: IconWall,
        title: `Rebuild patio and retaining wall using natural stone pavers`,
      },
      {
        Icon: IconHammer,
        title: `Construct new deck according to updated design`,
      },
      {
        Icon: IconFlame,
        title: `Install U-Cara grill system and natural stone fire pit`,
      },
      {
        Icon: IconTree,
        title: `Create landscaping design and install plants and trees surrounding newly constructed outdoor features`,
      },
    ]}
    planParagraph={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt earum quam excepturi labore consequatur praesentium possimus hic, voluptatum aliquid rerum, nobis reiciendis voluptatem temporibus, magni iure consequuntur corporis harum fugiat.`}
    planImage={Design}
    finishedProject={{
      first: {
        caption: `Clean, modern look`,
        subCaption: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.`,
        image: Finished1,
      },
      second: {
        caption: `Attention to detail`,
        subCaption: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.`,
        image: Finished2,
      },
      third: {
        caption: `Precision construction`,
        subCaption: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.`,
        image: Finished3,
      },
    }}
    inProgressImages={[InProgress1, InProgress2, InProgress3]}
  />
);

export default ClassicLandscaping;
