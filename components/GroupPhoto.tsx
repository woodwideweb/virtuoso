"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import { montserrat } from "@/lib/fonts";
import GroupImg from "@/public/team/group.jpg";
import { useIntersectionObserver } from "@/lib/hooks";

const GroupPhoto: React.FC = () => {
  const { ref, intersected } = useIntersectionObserver({ threshold: 1 }, true);
  return (
    <div
      ref={ref}
      className="h-72 xs:h-96 sm:h-112 md:h-128 lg:h-152 xl:h-176 relative rounded-3xl md:rounded-[60px] overflow-hidden my-20"
    >
      <Image
        src={GroupImg}
        alt="Virtuoso team photo"
        className="h-full w-full object-cover object-top sm:object-bottom"
      />
      <div
        className={cx(
          `absolute left-0 top-0 w-full h-full flex justify-start sm:justify-end items-start sm:items-end px-8 md:px-12 xl:px-16 py-4 md:py-8 lg:py-12 xl:py-16 bg-gradient-to-t sm:bg-gradient-to-b from-transparent via-transparent to-primary-950 sm:to-primary-900 flex-col transition-opacity duration-500`,
          !intersected && `opacity-0`,
        )}
      >
        <h4
          className={cx(
            `text-2xl lg:text-3xl font-semibold text-white transition-[opacity,transform] duration-700`,
            montserrat,
            !intersected && `opacity-0 translate-y-4`,
          )}
        >
          The Virtuoso team
        </h4>
        <h5
          className={cx(
            `text-lg text-white/90 sm:text-white/70 transition-[opacity,transform] duration-1000`,
            !intersected && `opacity-0 translate-y-8`,
          )}
        >
          October 15, 2023
        </h5>
      </div>
    </div>
  );
};

export default GroupPhoto;
