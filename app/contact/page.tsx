import React from "react";
import cx from "classnames";
import { IconPlant } from "@tabler/icons-react";
import { montserrat } from "@/lib/fonts";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: `Virtuoso Landscaping | Contact Us`,
  description: `Want to discuss your project or meet with us? Simply fill out the contact form, click send, and one of our team members will reach out to you within 24 hours.`,
};

const Contact: React.FC = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-16 py-16 xl:py-20 pl-4 xs:pl-8 sm:pl-16 xl:pl-20 pr-4 xs:pr-8 sm:pr-16 lg:pr-0 xl:pr-20">
    <div className="px-4 xs:px-0 lg:-mt-16 flex flex-col items-center lg:items-start">
      <div className="w-16 h-16 bg-primary-300 rounded-full flex justify-center items-center">
        <IconPlant size={30} className="text-primary-800" />
      </div>
      <h1
        className={cx(
          montserrat,
          `text-3xl xs:text-4xl xl:text-5xl font-bold text-center lg:text-left max-w-2xl mt-8`,
        )}
      >
        Want to discuss your project or meet with us?
      </h1>
      <p className="sm:text-lg xl:text-xl text-black/60 max-w-2xl mt-4 xl:mt-6 text-center lg:text-left">
        Simply fill out the contact form, click send, and one of our team
        members will reach out to you within 24 hours.
      </p>
    </div>
    <ContactForm />
  </div>
);

export default Contact;
