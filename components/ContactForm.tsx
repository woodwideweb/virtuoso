"use client";

import React from "react";
import { IconSend } from "@tabler/icons-react";
import { useForm } from "@formspree/react";
import Button from "./Button";
import TextInput from "./TextInput";
import AmberWave from "@/public/amber-wave.svg";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID ?? ``,
  );

  return (
    <form
      className="rounded-l-[40px] xs:rounded-l-[80px] rounded-r-[40px] xs:rounded-r-[80px] lg:rounded-r-none xl:rounded-r-[80px] p-6 xs:p-12 xl:p-16 flex flex-col gap-4 xl:gap-8 w-full lg:w-152 xl:w-176 shrink-0"
      style={{
        backgroundImage: `url(${AmberWave.src})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col xl:flex-row gap-4">
        <TextInput
          type="text"
          name="name"
          placeholder="John Doe"
          label="Name"
          required
          className="flex-grow"
        />
        <TextInput
          type="text"
          name="city"
          placeholder="Wadsworth"
          label="City"
          required
          className="flex-grow"
        />
      </div>
      <TextInput
        type="tel"
        name="phone-number"
        placeholder="(XXX) XXX-XXXX"
        label="Phone number"
      />
      <TextInput
        type="email"
        name="email"
        placeholder="me@example.com"
        label="Email"
        required
      />
      <TextInput
        type="textarea"
        rows={6}
        name="message"
        placeholder="Hey, wanted to reach out about..."
        label="Description of work"
        required
      />
      {state.succeeded && (
        <div className="bg-primary-500/30 p-12 rounded-3xl flex justify-center items-cener">
          <span className="text-lg text-primary-800 font-medium text-center">
            We recieved your message! We'll get back to you soon.
          </span>
        </div>
      )}
      {state.errors && (
        <div className="bg-red-500/20 p-12 rounded-3xl flex justify-center items-cener">
          <span className="text-lg text-red-800 font-medium text-center">
            Hmm, something went wrong. Please refresh the page and try again.
          </span>
        </div>
      )}
      {!state.succeeded && !state.errors && (
        <div className="flex justify-end mt-4 xl:mt-0">
          <Button
            type="submit"
            color="primary"
            icon={IconSend}
            size="lg"
            className="w-52"
          >
            Send
          </Button>
        </div>
      )}
    </form>
  );
};
export default ContactForm;
