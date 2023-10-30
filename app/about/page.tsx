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
          Well for one no other landscaping company has such a modern website.
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
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
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit.
        </p>
      </div>
    </div>
    <div className="md:p-12 xl:p-20 md:bg-amber-100 w-full rounded-[80px]">
      <GroupPhoto />
      <div className="flex flex-col gap-8 mt-16">
        <FullTimeStaffCard
          name="Rod Costa"
          title="Gran jefe"
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia."
          photo={RodPhoto}
          imagePosition="object-[0px,-40px]"
        />
        <FullTimeStaffCard
          name="Kristi Ensminger"
          title="Chief"
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia."
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
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia."
          photo={BoPhoto}
          imagePosition="object-[0px,-20px]"
        />
        <FullTimeStaffCard
          name="Amy Horan"
          title="Office manager"
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia."
          photo={AmyPhoto}
          imagePosition="object-[0px,-20px]"
        />
        <FullTimeStaffCard
          name="Jasen Sargent"
          title="Project foreman"
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia."
          photo={JasenPhoto}
          imagePosition="object-[0px,0px]"
        />
        <FullTimeStaffCard
          name="Vivian Appleton"
          title="Project foreman"
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia."
          photo={VivianPhoto}
          imagePosition="object-[0px,-20px]"
        />
      </div>
    </div>
  </div>
);

export default About;
