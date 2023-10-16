import React from "react";
import cx from "classnames";
import { IconMapPinFilled, IconSend } from "@tabler/icons-react";
import Button from "./Button";
import TextInput from "./TextInput";
import MapImage from "@/public/wadsworth-map.png";
import AmberWave from "@/public/amber-wave.svg";
import { montserrat } from "@/lib/fonts";
import { useIntersectionObserver } from "@/lib/hooks";

const MapBlock: React.FC = () => {
  const { ref: pinRef, intersected: showPin } = useIntersectionObserver({
    threshold: 1,
    rootMargin: `0px`,
  });
  const { ref: regionRef, intersected: showRegion } = useIntersectionObserver({
    threshold: 1,
    rootMargin: `0px`,
  });
  const { ref: contactRef, intersected: showContact } = useIntersectionObserver(
    {
      threshold: 1,
      rootMargin: `0px`,
    },
  );

  return (
    <div className="pb-12 pl-12 lg:pr-12 pt-0 flex gap-12 xl:gap-20">
      <div className="xl:pl-12 flex flex-col gap-152 pt-[calc(100vh)] pb-[calc(50vh-160px)] relative">
        <div
          ref={pinRef}
          className={cx(
            `relative bg-amber-50 transition-opacity duration-300`,
            !showPin && `opacity-0`,
          )}
        >
          <h3 className={cx(montserrat, `text-3xl xl:text-4xl font-bold`)}>
            Based in Wadsworth, OH
          </h3>
          <p className="text-lg xl:text-xl text-black/60 max-w-xl mt-4 xl:mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            eaque corrupti nemo, voluptates voluptatem soluta rerum quidem optio
            dolore nisi eligendi dignissimos autem assumenda consequatur neque
            sed quae et illum?
          </p>
        </div>
        <div
          ref={regionRef}
          className={cx(
            `relative bg-amber-50 transition-opacity duration-300`,
            !showRegion && `opacity-0`,
          )}
        >
          <h3 className={cx(montserrat, `text-3xl xl:text-4xl font-bold`)}>
            Serving the surrounding area
          </h3>
          <p className="text-lg xl:text-xl text-black/60 max-w-xl mt-4 xl:mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            eaque corrupti nemo, voluptates voluptatem soluta rerum quidem optio
            dolore nisi eligendi dignissimos autem assumenda consequatur neque
            sed quae et illum?
          </p>
        </div>
        <div
          ref={contactRef}
          className={cx(
            `relative bg-amber-50 transition-opacity duration-300`,
            !showContact && `opacity-0`,
          )}
        >
          <h3 className={cx(montserrat, `text-3xl xl:text-4xl font-bold`)}>
            Reach out today to get a free quote for your project
          </h3>
          <p className="text-lg xl:text-xl text-black/60 max-w-xl mt-4 xl:mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            eaque corrupti nemo, voluptates voluptatem soluta rerum quidem optio
            dolore nisi eligendi dignissimos autem assumenda consequatur neque
            sed quae et illum?
          </p>
        </div>
      </div>
      <div
        className="p-20 flex justify-center items-center rounded-l-[80px] lg:rounded-r-[80px] overflow-hidden w-3/5 lg+:w-auto lg+:aspect-square h-176 2xl:h-[calc(100vh-96px)] sticky top-[calc(50%-(176px*2))] 2xl:top-12 shrink-0"
        style={{
          backgroundImage: `radial-gradient(transparent, #fef3c7), url(${MapImage.src})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div
          className={cx(
            `rounded-[100%] transition-all duration-1000 absolute`,
            showRegion
              ? `h-[calc(100%-80px)] aspect-square bg-primary-500/10 border-primary-500/80 border-4`
              : `w-0 h-0 bg-primary-500/70 border-primary-500`,
          )}
        />
        <IconMapPinFilled
          className={cx(
            `text-primary-700 transition-all duration-300 relative ease-in`,
            showPin
              ? `opacity-100 -top-8`
              : `opacity-0 -top-[calc((100vh-96px)/2)]`,
          )}
          size={80}
        />
        <div
          className={cx(
            `absolute w-full h-full left-0 top-0 transition-opacity duration-700 bg-amber-100 flex flex-col justify-center items-center gap-4 lg+:gap-8 p-12 rounded-l-[80px] lg:rounded-r-[80px]`,
            showContact
              ? `opacity-100 pointer-events-auto`
              : `opacity-0 pointer-events-none`,
          )}
          style={{
            backgroundImage: `url(${AmberWave.src})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div className="flex flex-col lg+:flex-row gap-4 w-full 2xl:w-176">
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
            className="w-full 2xl:w-176"
          />
          <TextInput
            type="textarea"
            rows={6}
            name="message"
            placeholder="Hey, wanted to reach out about..."
            label="Message"
            required
            className="w-full 2xl:w-176"
          />
          <div className="flex justify-end w-full 2xl:w-176">
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
        </div>
      </div>
    </div>
  );
};

export default MapBlock;
