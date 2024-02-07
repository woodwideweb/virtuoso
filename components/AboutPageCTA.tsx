"use client";

import React from "react";
import cx from "classnames";
import { IconArrowRight } from "@tabler/icons-react";
import Button from "./Button";
import { montserrat } from "@/lib/fonts";

const AboutPageCTA: React.FC = () => (
  <div className="bg-amber-50 w-screen pb-12 md:pb-20 pt-28 px-6 xs:px-12 md:px-20 flex justify-center items-center flex-col">
    <h2
      className={cx(
        montserrat,
        `text-3xl xs:text-4xl md:text-5xl font-bold text-center !leading-tight`,
      )}
    >
      Want to work with us?
    </h2>
    <p className="mt-4 md:mt-8 mb-12 md:mb-16 text-2xl md:text-3xl text-black/60 font-medium text-center">
      Reach out today for a free quote.
    </p>
    <Button
      type="link"
      to="/contact"
      color="primary"
      size="lg"
      icon={IconArrowRight}
    >
      Contact us
    </Button>
  </div>
);
export default AboutPageCTA;
