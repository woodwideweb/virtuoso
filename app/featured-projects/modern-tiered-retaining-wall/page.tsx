"use client";

import React from "react";
import {
  IconBackhoe,
  IconChristmasTree,
  IconPaperclip,
  IconPlant,
  IconPlant2,
  IconWall,
} from "@tabler/icons-react";
import Finished1 from "@/public/featured-projects/hartville/finished-1.jpg";
import Finished2 from "@/public/featured-projects/hartville/finished-2.jpg";
import Finished3 from "@/public/featured-projects/hartville/finished-3.jpg";
import Design1 from "@/public/featured-projects/hartville/design-1.jpg";
import Design2 from "@/public/featured-projects/hartville/design-2.jpg";
import Design3 from "@/public/featured-projects/hartville/design-3.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";

const HartvilleProject: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={Finished2}
    projectTitle="Modern tiered retainig wall"
    location="Hartville, OH"
    when="June-July, 2022"
    scope={[
      {
        Icon: IconPaperclip,
        title: `Create retaining wall design`,
      },
      {
        Icon: IconBackhoe,
        title: `Excavate and re-grade construction area to prepare for wall foundation`,
      },
      {
        Icon: IconWall,
        title: `Build terraced retaining walls and flower beds`,
      },
      {
        Icon: IconChristmasTree,
        title: `Plant an assortment of deciduous and evergreen trees throughout property`,
      },
      {
        Icon: IconPlant,
        title: `Install shrubs and decorative gravel in newly-formed beds surrounding home`,
      },
      {
        Icon: IconPlant2,
        title: `Perform finish grade and install 2 acres of lawn`,
      },
    ]}
    planParagraph={`Creating an effective plan for the landscaping and erosion control needs for this newly-built custom home presented our crew with a variety of challenges. The foremost concern was how to construct a highly functional retaining wall to address the severe slope along the front of the house while simultaneously complimenting the beautiful modern architecture. Our design team put their heads together to create a stunning yet simple tiered retaining wall system that incorporates both the color and style of the house. Here's how we put our ideas into motion over the course of three months.`}
    planSteps={[
      {
        title: `Order, position, and plant deciduous and evergreen trees in front and back yards`,
        description: `Approximately 30 trees planted.`,
      },
      {
        title: `Prepare grade for wall installation`,
        description: `Re-grade slope to form two tiers of new lawn area and dig trenches using excavator for wall foundations.`,
      },
      {
        title: `Build series of retaining walls at varying angles and levels`,
        description: `Approximately 600 face feet of U-Cara retaining wall block.`,
      },
      {
        title: `Referencing premade design, create the flower beds surrounding the home, plant boxwood shrubs, and install decorative gravel`,
        description: `Approximately 25 tons of Black Frost decorative gravel and 30 boxwoods planted.`,
      },
      {
        title: `Installed 2 acres of lawn`,
        description: `Approximately 60 tons of topsoil brought in.`,
      },
    ]}
    planImages={[Design1, Design2, Design3]}
    finishedProject={{
      first: {
        caption: `Clean, modern look`,
        subCaption: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.`,
        image: Finished2,
      },
      second: {
        caption: `Attention to detail`,
        subCaption: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus modi architecto dolore voluptate magnam, id facilis natus possimus. Ea aliquam culpa error labore impedit consequatur minima, unde facere quidem.`,
        image: Finished1,
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
