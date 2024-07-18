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
// import Finished1 from "@/public/featured-projects/classic-landscaping/finished-4.jpg";
// import Finished2 from "@/public/featured-projects/classic-landscaping/finished-7.jpg";
// import Finished3 from "@/public/featured-projects/classic-landscaping/finished-6.jpg";
import InProgress1 from "@/public/featured-projects/vics/progress-1.jpg";
import InProgress2 from "@/public/featured-projects/vics/progress-2.jpg";
import InProgress3 from "@/public/featured-projects/vics/progress-3.jpg";
import InProgress4 from "@/public/featured-projects/vics/progress-4.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";

const VicsLandscaping: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={InProgress1}
    projectTitle="I don't know... I only went there once"
    location="Hartville?, OH"
    when="July-September, 2023"
    scope={[
      { Icon: IconWreckingBall, title: `fake` },
      {
        Icon: IconWall,
        title: `fake`,
      },
      {
        Icon: IconHammer,
        title: `also fake`,
      },
      {
        Icon: IconFlame,
        title: `quite fake`,
      },
      {
        Icon: IconTree,
        title: `really truly fake`,
      },
    ]}
    planParagraph={`Not for this project - This was a fun project that required several months of imagining, designing, collaborating, and constructing this stunning, multi-faceted outdoor living space. Keeping the budget in mind, we were able to repurpose many materials from demolition to construct a natural walkway from the driveway to the new patio. Additionally, we created a larger green space for the family to enjoy while achieving natural privacy from the busy street with our functional landscaping design.  We are thankful for the patience and endurance that is required by homeowners during such a long process.`}
    planImage={Design}
    finishedProject={{
      first: {
        caption: `Clean, classic look`,
        subCaption: `Our team has worked with a variety of architectural styles and can create a functional design that highlights the beauty of any home.`,
        image: InProgress2,
      },
      second: {
        caption: `Attention to detail`,
        subCaption: `Our managers spend the time before and during the season training our crews to have an eye for detail. We guarantee your project will be carried out with great care and expert oversight to ensure a finished product that will exceed your expectations.`,
        image: InProgress3,
      },
      third: {
        caption: `Precision construction`,
        subCaption: `We don't take shortcuts; you can rest assured your desired hardscape will be constructed to code and without compromising aesthetic appeal.`,
        image: InProgress4,
      },
    }}
    inProgressImages={[InProgress1, InProgress2, InProgress3]}
  />
);

export default VicsLandscaping;
