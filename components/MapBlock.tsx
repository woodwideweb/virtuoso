import React from 'react';
import cx from 'classnames';
import { IconMapPinFilled } from '@tabler/icons-react';
import MapImage from '@/public/wadsworth-map.png';
import AmberWave from '@/public/amber-wave.svg';
import { montserrat } from '@/lib/fonts';
import { useIntersectionObserver } from '@/lib/hooks';

interface Props {}

const MapBlock: React.FC<Props> = ({}) => {
  const { ref: pinRef, intersected: showPin } = useIntersectionObserver({
    threshold: 1,
    rootMargin: `0px`,
  });
  const { ref: regionRef, intersected: showRegion } = useIntersectionObserver({
    threshold: 1,
    rootMargin: `0px`,
  });
  const { ref: contactRef, intersected: showContact } = useIntersectionObserver({
    threshold: 1,
    rootMargin: `0px`,
  });

  return (
    <div className="p-12 pt-0 flex gap-20">
      <div className="pl-12 flex flex-col gap-152 pt-[calc(100vh)] pb-[calc(50vh-160px)] relative">
        <div
          ref={pinRef}
          className={cx(
            'relative bg-amber-50 transition-opacity duration-300',
            !showPin && `opacity-0`,
          )}
        >
          <h3 className={cx(montserrat, `text-4xl font-bold`)}>Based in Wadsworth, OH</h3>
          <p className="text-xl text-black/60 max-w-xl mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque
            corrupti nemo, voluptates voluptatem soluta rerum quidem optio dolore nisi
            eligendi dignissimos autem assumenda consequatur neque sed quae et illum?
          </p>
        </div>
        <div
          ref={regionRef}
          className={cx(
            'relative bg-amber-50 transition-opacity duration-300',
            !showRegion && `opacity-0`,
          )}
        >
          <h3 className={cx(montserrat, `text-4xl font-bold`)}>
            Serving the surrounding area
          </h3>
          <p className="text-xl text-black/60 max-w-xl mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque
            corrupti nemo, voluptates voluptatem soluta rerum quidem optio dolore nisi
            eligendi dignissimos autem assumenda consequatur neque sed quae et illum?
          </p>
        </div>
        <div
          ref={contactRef}
          className={cx(
            'relative bg-amber-50 transition-opacity duration-300',
            !showContact && `opacity-0`,
          )}
        >
          <h3 className={cx(montserrat, `text-4xl font-bold`)}>
            Reach out today to get a free quote for your project
          </h3>
          <p className="text-xl text-black/60 max-w-xl mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque
            corrupti nemo, voluptates voluptatem soluta rerum quidem optio dolore nisi
            eligendi dignissimos autem assumenda consequatur neque sed quae et illum?
          </p>
        </div>
      </div>
      <div
        className="p-20 flex justify-center items-center rounded-[80px] overflow-hidden aspect-square h-[calc(100vh-96px)] sticky top-12 shrink-0"
        style={{
          backgroundImage: `radial-gradient(transparent, #fef3c7), url(${MapImage.src})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div
          className={cx(
            'rounded-[100%] transition-all duration-1000 absolute',
            showRegion
              ? `w-[calc(100%-80px)] h-[calc(100%-80px)] bg-blue-500/10 border-blue-500/40 border-4`
              : `w-0 h-0 bg-blue-500/70 border-blue-500`,
          )}
        />
        <IconMapPinFilled
          className={cx(
            `text-blue-600 transition-all duration-300 relative ease-in`,
            showPin ? `opacity-100 -top-8` : `opacity-0 -top-[calc((100vh-96px)/2)]`,
          )}
          size={80}
        />
        <div
          className={cx(
            `absolute w-full h-full left-0 top-0 transition-opacity duration-700 bg-amber-100 flex flex-col justify-center items-center gap-8`,
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
          <div className="flex gap-4 w-176">
            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="name" className="ml-8 text-xl font-medium text-black/60">
                Name
              </label>
              <input
                className="py-4 px-8 text-xl rounded-3xl bg-white/50 hover:bg-white/70 transition-colors duration-200 outline-none border-2 border-transparent focus:border-primary-600 focus:bg-white backdrop-blur-md placeholder:text-black/10"
                type="name"
                name="name"
                id="name"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="city" className="ml-8 text-xl font-medium text-black/60">
                City
              </label>
              <input
                className="py-4 px-8 text-xl rounded-3xl bg-white/50 hover:bg-white/70 transition-colors duration-200 outline-none border-2 border-transparent focus:border-primary-600 focus:bg-white backdrop-blur-md placeholder:text-black/10"
                type="city"
                name="city"
                id="city"
                placeholder="Wadsworth"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-176">
            <label htmlFor="email" className="ml-8 text-xl font-medium text-black/60">
              Email
            </label>
            <input
              className="py-4 px-8 text-xl rounded-3xl bg-white/50 hover:bg-white/70 transition-colors duration-200 outline-none border-2 border-transparent focus:border-primary-600 focus:bg-white backdrop-blur-md placeholder:text-black/10"
              type="email"
              name="email"
              id="email"
              placeholder="me@example.com"
            />
          </div>
          <div className="flex flex-col gap-2 w-176">
            <label htmlFor="message" className="ml-8 text-xl font-medium text-black/60">
              Message
            </label>
            <textarea
              className="py-4 px-8 text-xl rounded-3xl bg-white/50 hover:bg-white/70 transition-colors duration-200 outline-none border-2 border-transparent focus:border-primary-600 focus:bg-white backdrop-blur-md placeholder:text-black/10"
              name="message"
              id="message"
              placeholder="me@example.com"
              rows={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;
