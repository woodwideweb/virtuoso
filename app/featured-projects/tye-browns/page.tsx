"use client";

import React from "react";
import {
  IconBed,
  IconCrane,
  IconFlame,
  IconPlant,
  IconWall,
} from "@tabler/icons-react";
import Finished1 from "@/public/featured-projects/tye-brown/finished-1.jpg";
import Finished2 from "@/public/featured-projects/tye-brown/finished-2.jpg";
import Finished3 from "@/public/featured-projects/tye-brown/finished-3.jpg";
import InProgress1 from "@/public/featured-projects/tye-brown/in-progress-1.jpg";
import InProgress2 from "@/public/featured-projects/tye-brown/in-progress-2.jpg";
import InProgress3 from "@/public/featured-projects/tye-brown/in-progress-3.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";

const HartvilleProject: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={Finished3}
    projectTitle="Patio and deck at Ty(e?) Brown's place"
    location="Fairlawn? Copley?"
    estimatedCost={70000}
    actualCost={74500}
    when="July-September, 2023"
    scope={[
      { Icon: IconCrane, title: `Rebuild giant deck` },
      {
        Icon: IconWall,
        title: `Build two big patios in back yard`,
      },
      {
        Icon: IconFlame,
        title: `Install fire pit on patio`,
      },
      { Icon: IconBed, title: `Create beds surounding house and patio` },
      { Icon: IconPlant, title: `Plant shrubs and trees in said beds` },
    ]}
    planParagraph={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt earum quam excepturi labore consequatur praesentium possimus hic, voluptatum aliquid rerum, nobis reiciendis voluptatem temporibus, magni iure consequuntur corporis harum fugiat.`}
    planSteps={[
      {
        title: `Excavate holes and trenches for patio and deck`,
        description: `Led by head of excavation, Bo.`,
      },
      {
        title: `Install posts for deck`,
        description: `Led by head of post installation, Bo.`,
      },
      {
        title: `Create deck and railing`,
        description: `Led by head of deck construction, Bo.`,
      },
      {
        title: `Build patios`,
        description: `Led by head of patio construction, Bo.`,
      },
      {
        title: `Construct beds around house and patio`,
        description: `Led by head of bed creation, Bo.`,
      },
      {
        title: `Plant shrubs and trees in beds`,
        description: `Led by head of planting, Bo.`,
      },
    ]}
    planImages={[InProgress1, InProgress2, InProgress3]}
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
  />
);

export default HartvilleProject;
