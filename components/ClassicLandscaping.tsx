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
import Finished1 from "@/public/featured-projects/classic-landscaping/finished-4.jpg";
import Finished2 from "@/public/featured-projects/classic-landscaping/finished-7.jpg";
// import Finished3 from "@/public/featured-projects/classic-landscaping/finished-6.jpg";
import Finished3 from "@/public/featured-projects/classic-landscaping/finished-9.jpg";
import InProgress1 from "@/public/featured-projects/classic-landscaping/in-progress-1.jpg";
import InProgress2 from "@/public/featured-projects/classic-landscaping/in-progress-2.jpg";
import InProgress3 from "@/public/featured-projects/classic-landscaping/in-progress-3.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";
// finished-5.jpg and finished-6.jpg could be deleted - reduce load time?

const ClassicLandscaping: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={Finished3}
    projectTitle="Beautiful natural stone and custom woodwork"
    location="Fairlawn, OH"
    when="July-September, 2023"
    quote="We are immensely thankful to have found Virtuoso Landscaping for the transformation of our backyard patio and deck. Rod and his team not only demonstrated remarkable skill in guiding us through the design process but also exhibited exceptional flexibility when unforeseeable challenges arose. Their transparency and willingness to suggest adjustments ensured that the project exceeded our expectations. From the initial meeting with Rod to the project's completion, our confidence in their abilities never wavered. We are truly grateful for their expertise, patience, and dedication, which resulted in a backyard beyond what we imagined. Thank you sincerely for an outstanding job."
    scope={[
      { Icon: IconWreckingBall, title: `Demo existing patio and deck` },
      {
        Icon: IconWall,
        title: `Rebuild patio and retaining wall using Classicstone pavers and Choctaw wall stone`,
      },
      {
        Icon: IconHammer,
        title: `Construct new deck with a grand staircase and aluminum cable railing system`,
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
    planParagraph={`This was a fun project that required several months of imagining, designing, collaborating, and constructing this stunning, multi-faceted outdoor living space. Keeping the budget in mind, we were able to repurpose many materials from demolition to construct a natural walkway from the driveway to the new patio. Additionally, we created a larger green space for the family to enjoy while achieving natural privacy from the busy street with our functional landscaping design.  We are thankful for the patience and endurance that is required by homeowners during such a long process.`}
    planImage={Design}
    finishedProject={{
      first: {
        caption: `Clean, classic look`,
        subCaption: `Our team has worked with a variety of architectural styles and can create a functional design that highlights the beauty of any home.`,
        image: Finished3,
      },
      second: {
        caption: `Attention to detail`,
        subCaption: `Our managers spend the time before and during the season training our crews to have an eye for detail. We guarantee your project will be carried out with great care and expert oversight to ensure a finished product that will exceed your expectations.`,
        image: Finished2,
      },
      third: {
        caption: `Precision construction`,
        subCaption: `We don't take shortcuts; you can rest assured your desired hardscape will be constructed to code and without compromising aesthetic appeal.`,
        image: Finished1,
      },
    }}
    inProgressImages={[InProgress1, InProgress2, InProgress3]}
  />
);

export default ClassicLandscaping;
