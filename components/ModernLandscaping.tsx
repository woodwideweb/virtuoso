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
import Finished1 from "@/public/featured-projects/modern-landscaping/finished-1.jpg";
import Finished2 from "@/public/featured-projects/modern-landscaping/finished-2.jpg";
import Finished3 from "@/public/featured-projects/modern-landscaping/finished-3.jpg";
import Design1 from "@/public/featured-projects/modern-landscaping/design-1.jpg";
import Progress1 from "@/public/featured-projects/modern-landscaping/progress-1.jpg";
import Progress2 from "@/public/featured-projects/modern-landscaping/progress-2.jpg";
import Progress3 from "@/public/featured-projects/modern-landscaping/progress-3.jpg";
import Progress4 from "@/public/featured-projects/modern-landscaping/progress-4.jpg";
import Progress5 from "@/public/featured-projects/modern-landscaping/progress-5.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";

const ModernLandscaping: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={Finished2}
    mainSplashPictureAdjustments="lg:![object-position:0px_-90px] []"
    projectTitle="Modern tiered retaining wall"
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
    planParagraph={`Creating an effective plan for the landscaping and retention needs for this newly-built custom home presented our crew with a variety of challenges. The foremost concern was how to construct a highly functional retaining wall to address the severe slope along the front of the house while simultaneously complimenting the beautiful modern architecture. Our design team put their heads together to create a stunning yet simple tiered retaining wall system that incorporates both the color and style of the house. Here's how we put our ideas into motion over the course of three months.`}
    planImage={Design1}
    inProgressImages={[Progress1, Progress2, Progress3, Progress4, Progress5]}
    finishedProject={{
      first: {
        caption: `Clean, modern look`,
        subCaption: `Our team has worked with a variety of architectural styles and can create functional design that highlights the beauty of any home.`,
        image: Finished2,
      },
      second: {
        caption: `Attention to detail`,
        subCaption: `Our managers spend the time before and during the season training our crews to have an eye for detail. We guarantee your project will be carried out with great care and expert oversight to ensure a finished product that will exceed your expectations.`,
        image: Finished1,
      },
      third: {
        caption: `Precision construction`,
        subCaption: `We don't take shortcuts; you can rest assured your desired hardscape will be constructed to code and without compromising aesthetic appeal.`,
        image: Finished3,
      },
    }}
  />
);

export default ModernLandscaping;
