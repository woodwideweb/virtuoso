"use client";

import React, { useState } from "react";
import cx from "classnames";
import { IconPlus, IconStarFilled } from "@tabler/icons-react";
import Button from "./Button";
import testimonials from "@/lib/testimonials";

const TestimonialsBlock: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={cx(
        `flex gap-8 px-4 xs:px-8 sm:px-12 2xl:px-20 py-12 md:py-20 overflow-hidden relative`,
        expanded ? `h-auto` : `h-176 mb-12`,
      )}
    >
      <div className="flex-grow flex flex-col gap-8 h-min">
        {testimonials.slice(0, 4).map((testimonial) => (
          <TestimonialCard
            testimonial={testimonial}
            key={testimonial.customer}
          />
        ))}
      </div>
      <div className="flex-grow md:flex flex-col gap-8 h-min hidden">
        {testimonials.slice(4, 9).map((testimonial) => (
          <TestimonialCard
            testimonial={testimonial}
            key={testimonial.customer}
          />
        ))}
      </div>
      <div className="flex-grow xl:flex flex-col gap-8 h-min hidden">
        {testimonials.slice(9, 13).map((testimonial) => (
          <TestimonialCard
            testimonial={testimonial}
            key={testimonial.customer}
          />
        ))}
      </div>
      {!expanded && (
        <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-transparent via-transparent to-amber-50 flex justify-center items-end">
          <Button
            type="button"
            onClick={() => setExpanded(true)}
            size="md"
            color="primary"
            icon={IconPlus}
          >
            See more
          </Button>
        </div>
      )}
    </div>
  );
};

export default TestimonialsBlock;

const TestimonialCard: React.FC<{
  testimonial: {
    testimonial: string;
    date: string;
    customer: string;
    stars: number;
  };
}> = ({ testimonial }) => (
  <div
    className={cx(
      `bg-amber-100 rounded-3xl xs:rounded-[40px] overflow-hidden transition-[opacity,transform] duration-500`,
    )}
  >
    <div className="p-6 xs:p-8">
      <h3 className="opacity-50">{testimonial.date}</h3>
      <h2 className="font-bold text-xl">{testimonial.customer}</h2>
      <p
        className="mt-2 xs:text-lg opacity-60"
        dangerouslySetInnerHTML={{ __html: testimonial.testimonial }}
      />
    </div>
    <div className="flex justify-center items-center p-4 xs:p-6 gap-4 text-primary-700 bg-primary-700/10">
      <IconStarFilled className="shrink-0" />
      <IconStarFilled className="shrink-0" />
      <IconStarFilled className="shrink-0" />
      <IconStarFilled className="shrink-0" />
      <IconStarFilled className="shrink-0" />
    </div>
  </div>
);
