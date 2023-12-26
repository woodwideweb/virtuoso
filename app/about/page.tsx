import React from "react";
import cx from "classnames";
import { IconPlant } from "@tabler/icons-react";
import type { NextPage } from "next";
import { montserrat } from "@/lib/fonts";
import RodPhoto from "@/public/team/rod.jpg";
import KristiPhoto from "@/public/team/kristi.jpg";
import BoPhoto from "@/public/team/bo.jpg";
import JasenPhoto from "@/public/team/jasen.jpg";
import AmyPhoto from "@/public/team/amy.jpg";
import VivianPhoto from "@/public/team/vivian.jpg";
import JosuePhoto from "@/public/team/josue.jpg";
import FullTimeStaffCard from "@/components/FullTimeStaffCard";
import GroupPhoto from "@/components/GroupPhoto";

const About: NextPage = () => (
  <div className="flex flex-col items-center px-6 sm:px-8 md:px-12 xl:px-16 py-20">
    <h1
      className={cx(
        montserrat,
        `font-bold text-3xl md:text-4xl xl:text-5xl text-center`,
      )}
    >
      About Virtuoso Landscaping
    </h1>
    <p className="text-lg md:text-xl max-w-xl text-center mt-4 md:mt-6 text-black/60">
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
      sint consectetur cupidatat.
    </p>
    <div className="px-2 xs:px-4 py-4 bg-amber-100/50 mt-16 rounded-[40px] sm:rounded-[80px] flex flex-col md:flex-row items-center">
      <div className="w-16 h-16 rounded-full bg-primary-500 flex justify-center items-center shrink-0 md:mr-6 lg:mr-8 md:ml-2 lg:ml-4 md:mb-0 mb-4">
        <IconPlant className="text-white" size={30} />
      </div>
      <div className="bg-primary-700/10 p-8 sm:p-12 lg:p-16 rounded-3xl sm:rounded-[80px] max-w-5xl">
        <h2 className={cx(montserrat, `text-2xl sm:text-3xl font-bold mb-4`)}>
          Why we're different
        </h2>
        <p className="text-lg lg:text-xl text-black/60 sm:text-justify">
          Virtuoso Landscaping has over 20 years of experience in landscape
          design, construction, and maintenance. Since the inception, our goal
          has remained the same: honor the Lord in all we do by seeking to offer
          fair prices, maintain honest and clear communication, and provide
          high-quality work to all of our customers.
        </p>
      </div>
    </div>
    <div className="mt-20 flex justify-center items-end">
      <div className="my-20 rounded-t-[80px] max-w-5xl">
        <h2
          className={cx(
            `text-4xl lg:text-5xl font-bold text-center`,
            montserrat,
          )}
        >
          Our team
        </h2>
        <p className="mt-4 md:text-lg text-black/60 text-center">
          None of what we do would be possible without a dedicated and
          consistent crew who share the same desire.
        </p>
      </div>
    </div>
    <div className="md:p-12 xl:p-20 md:bg-amber-100 w-full rounded-[80px]">
      <GroupPhoto />
      <div className="flex flex-col gap-8 mt-16">
        <FullTimeStaffCard
          name="Rod Costa"
          title="Owner"
          description="Rod has no interest in growing a business or making money, he just enjoys working with people he loves."
          photo={RodPhoto}
          imagePosition="object-[0px,-20px] lg:object-[0px,-40px]"
        />
        <FullTimeStaffCard
          name="Kristi Ensminger"
          title="General manager"
          description="Kristi wears several hats for Virtuoso in the field and in the office, but her favorite is the winter hat she wears while plowing snow each winter."
          photo={KristiPhoto}
          imagePosition="object-[0px,-20px]"
        />
        <FullTimeStaffCard
          name="Josué Rodriguez"
          title="Head of foreign affairs"
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia."
          photo={JosuePhoto}
          imagePosition="object-[-30px,0px]"
        />
        <FullTimeStaffCard
          name="Boaz Costa"
          title="Construction manager"
          description="A diligent worker and kind leader, Bo often has to be coerced to leave the jobsite when the sun goes down."
          photo={BoPhoto}
          imagePosition="object-[0px,-20px]"
        />
        <FullTimeStaffCard
          name="Austin Schlabach (needs photo)"
          title="Landscape maintenance manager"
          description="Austin is the kind of loyal and do-it-right employee that most landscaping companies only dream of having; striping lawns is his first love."
          photo={BoPhoto}
          imagePosition="object-[0px,-20px]"
        />
        <FullTimeStaffCard
          name="Vivian Appleton"
          title="Landscape enhancement specialist"
          description="Vivian started working with Virtuoso at 14 years old; good luck finding a gal around that works harder than her!"
          photo={VivianPhoto}
          imagePosition="object-[0px,-20px]"
        />
        <FullTimeStaffCard
          name="Jasen Sargent"
          title="Landscape construction specialist"
          description="Born and raised in New York, you'll recognize Jasen on the jobsite by his patient attention to detail... and his backwards cap."
          photo={JasenPhoto}
          imagePosition="object-[0px,0px]"
        />
        <FullTimeStaffCard
          name="Amy Horan"
          title="Administrative assistant"
          description="Amy's gentle spirit and willingness to do anything needed for the crew and our customers make her a tremendous asset both in the office and beyond."
          photo={AmyPhoto}
          imagePosition="object-[0px,-20px]"
        />
      </div>
    </div>
  </div>
);

export default About;
