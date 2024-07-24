import React from "react";
import {
  IconPaperclip,
  IconBackhoe,
  IconWall,
  IconHammer,
  IconPlant2,
  IconSeeding,
  IconDroplet,
} from "@tabler/icons-react";
// import Finished1 from "@/public/featured-projects/modern-landscaping/finished-1.jpg";
// import Finished2 from "@/public/featured-projects/modern-landscaping/finished-2.jpg";
// import Finished3 from "@/public/featured-projects/modern-landscaping/finished-3.jpg";
// import Finished4 from "@/public/featured-projects/modern-landscaping/finished-4.jpg";
import Design1 from "@/public/featured-projects/modern-landscaping/design-1.jpg";
import Progress1 from "@/public/featured-projects/natural-landscaping/progress-1.jpg";
import Progress2 from "@/public/featured-projects/natural-landscaping/progress-2.jpg";
import Progress3 from "@/public/featured-projects/natural-landscaping/progress-3.jpg";
import Progress4 from "@/public/featured-projects/natural-landscaping/progress-4.jpg";
import Progress5 from "@/public/featured-projects/natural-landscaping/progress-5.jpg";
import FeaturedProjectTemplate from "@/components/FeaturedProjectTemplate";

const ModernLandscaping: React.FC = () => (
  <FeaturedProjectTemplate
    mainSplashPicture={Progress3}
    mainSplashPictureAdjustments="lg:![object-position:0px_-90px] []"
    projectTitle="Poolside living space"
    location="Rittman, OH"
    when="March-April, 2024"
    scope={[
      {
        Icon: IconPaperclip,
        title: `Create a design for the patio areas, kitchen island, and retaining walls`,
      },
      {
        Icon: IconBackhoe,
        title: `Excavate area and compact base material where new pavers and retaining walls will be built`,
      },
      {
        Icon: IconDroplet,
        title: `Pour concrete footers for kitchen island`,
      },
      {
        Icon: IconHammer,
        title: `Construct natural stone grand staircase and curved retaining walls`,
      },
      {
        Icon: IconWall,
        title: `Build two-tiered patio, using natural flagstone to accent and form unique transition between upper and lower levels`,
      },
      {
        Icon: IconSeeding,
        title: `Plant assorted grasses, install decorative river rock, and place boulders to compliment the landscape`,
      },
      {
        // this icon stays
        Icon: IconPlant2,
        title: `Establish proper grade for the new lawn around the pool area; seed, fertilize, and straw the areas `,
      },
    ]}
    planParagraph={`Our favorite projects are the ones that challenge us the most, and this one fit the bill! Early on in the bidding process, we discovered that the majority of material on site that the customer was hoping for us to repurpose during construction had been discontinued by the manufacturer.  So, we wouldn’t be able to order more.  Putting our heads together, we found a way to blend some of the existing natural stone on the property to form a transition between new and old pavers, saving the customer thousands of dollars in stone and achieving a gorgeous finished product.  Take a look at how it all came together in early spring!`}
    planImage={Design1}
    inProgressImages={[Progress1, Progress2, Progress3, Progress4, Progress5]}
    finishedProject={{
      first: {
        caption: `Stunning, natural look`,
        subCaption: `Our team has worked with a variety of architectural styles and can create a functional design that highlights the beauty of any home.`,
        image: Progress2,
      },
      second: {
        caption: `Attention to detail`,
        subCaption: `Our managers spend the time before and during the season training our crews to have an eye for detail. We guarantee your project will be carried out with great care and expert oversight to ensure a finished product that will exceed your expectations.`,
        image: Progress1,
      },
      third: {
        caption: `Precision construction`,
        subCaption: `We don't take shortcuts; you can rest assured your desired hardscape will be constructed to code and without compromising aesthetic appeal.`,
        image: Progress3,
      },
    }}
  />
);

export default ModernLandscaping;
