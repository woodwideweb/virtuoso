import React from "react";
import cx from "classnames";
import Image from "next/image";
import type { NextPage } from "next";
import { montserrat } from "@/lib/fonts";
import GroupPhoto from "@/public/team/group.jpg";

const About: NextPage = () => (
  <div className="flex flex-col items-center p-20">
    <h1 className={cx(montserrat, `font-bold text-5xl`)}>
      About Virtuoso Landscaping
    </h1>
  </div>
);

export default About;
