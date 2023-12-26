"use client";

import React from "react";
import {
  IconFlame,
  IconHammer,
  IconTree,
  IconWall,
  IconWreckingBall,
} from "@tabler/icons-react";
import Finished1 from "@/public/featured-projects/tye-brown/finished-1.jpg";
import Finished2 from "@/public/featured-projects/tye-brown/finished-2.jpg";
import Finished3 from "@/public/featured-projects/tye-brown/finished-3.jpg";
import InProgress1 from "@/public/featured-projects/tye-brown/in-progress-1.jpg";
import InProgress2 from "@/public/featured-projects/tye-brown/in-progress-2.jpg";
import InProgress3 from "@/public/featured-projects/tye-brown/in-progress-3.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";

const TyeBrownProject: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={Finished3}
    projectTitle="tye brown's place (patio and other stuff)"
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

export default TyeBrownProject;
