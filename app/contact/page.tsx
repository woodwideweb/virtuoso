'use client';

import React from 'react';
import cx from 'classnames';
import { montserrat } from '@/lib/fonts';
import TextInput from '@/components/TextInput';
import AmberWave from '@/public/amber-wave.svg';
import Button from '@/components/Button';
import { IconSend } from '@tabler/icons-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 py-16 xl:py-20 pl-4 xs:pl-8 sm:pl-16 xl:pl-20 pr-4 xs:pr-8 sm:pr-16 lg:pr-0 xl:pr-20">
      <div className="px-4 xs:px-0">
        <h1
          className={cx(
            montserrat,
            `text-3xl xs:text-4xl xl:text-5xl font-bold text-center lg:text-left`,
          )}
        >
          Want a free quote?
        </h1>
        <p className="sm:text-lg xl:text-xl text-black/60 max-w-4xl mt-4 xl:mt-6 text-center lg:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quisquam
          accusantium vero explicabo. Molestias excepturi explicabo consectetur ipsam
          distinctio vero nisi architecto rem, mollitia quae ullam voluptate blanditiis!
          Labore, sit?
        </p>
      </div>
      <form
        className="rounded-l-[40px] xs:rounded-l-[80px] rounded-r-[40px] xs:rounded-r-[80px] lg:rounded-r-none xl:rounded-r-[80px] p-6 xs:p-12 xl:p-16 flex flex-col gap-4 xl:gap-8 w-full lg:w-152 xl:w-176 shrink-0"
        style={{
          backgroundImage: `url(${AmberWave.src})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
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
          type="email"
          name="email"
          placeholder="me@example.com"
          label="Email"
          required
          className=""
        />
        <TextInput
          type="textarea"
          rows={6}
          name="message"
          placeholder="Hey, wanted to reach out about..."
          label="Message"
          required
        />
        <div className="flex justify-end mt-4 xl:mt-0">
          <Button
            type="button"
            onClick={() => {}}
            color="primary"
            icon={IconSend}
            size="lg"
            className="w-52"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
