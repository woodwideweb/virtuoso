import React from "react";
import cx from "classnames";
import GalleryImage from "@/components/GalleryImage";
import { montserrat } from "@/lib/fonts";
import ImageViewerModal from "@/components/ImageViewerModal";
import { glob } from "glob";
import hartville from "@/public/oh-hartville-2022-4032-3024.jpg";
import brecksville from "@/public/oh-brecksville-2022-3456-2304.jpg";

export const metadata = {
  title: `Virtuoso Landscaping ~ Gallery`,
  description: `Images of some of our completed or in-progress projects.`,
};

const Gallery: React.FC = async () => {
  interface Img {
    url: string;
    state: string;
    city: string;
    year: number;
    width: number;
    height: number;
  }

  let imgUrls: Img[] = (await glob(["./public/gallery/*.jpg"]))
    .map((path) => {
      let splitOnSlash = path.split("/");
      return {
        url: path,
        name: splitOnSlash[splitOnSlash.length - 1].split(".")[0],
      };
    })
    .map(({ url, name }) => {
      let [index, state, city, year, width, height] = name.split("-");
      return {
        url,
        state: state.toUpperCase(),
        city: city.replace("_", " ").replace(/\b\w/g, (match) => {
          return match.toUpperCase();
        }),
        year: Number(year),
        width: Number(width),
        height: Number(height),
      };
    });

  return (
    <div className="flex flex-col">
      <ImageViewerModal />
      <div className="pt-12 sm:pt-24 px-6 xs:px-8 sm:px-16 pb-8 sm:pb-12 flex flex-col justify-center items-center gap-6">
        <h1
          className={cx(
            `text-3xl xs:text-4xl sm:text-5xl text-black font-bold textcenter text-center`,
            montserrat
          )}
        >
          Check out our work
        </h1>
      </div>
      <div className="flex justify-center items-center p-8 sm:p-12 md:p-20 bg-gradient-to-b bg-amber-100 rounded-[80px] my-8 lg:mx-12">
        <div className="flex-grow max-w-[1200px] grid grid-cols-2 md+:grid-cols-4 gap-4 lg:gap-8">
          <GalleryImage
            src={{
              src: brecksville.src,
              width: 3456,
              height: 2304,
            }}
            year={2022}
            city={"Brecksville, OH"}
            className="row-span-2 col-span-2"
          />

          <GalleryImage
            src={{
              src: hartville.src,
              width: 4032,
              height: 3024,
            }}
            year={2022}
            city={"Hartville, OH"}
            className="row-span-2 col-span-2"
          />

          {imgUrls.map((img, index) => (
            <GalleryImage
              src={{
                src: img.url.replace("public", ""),
                width: img.width,
                height: img.height,
              }}
              className={(() => {
                switch (index % 6) {
                  case 0:
                    return "";
                  case 1:
                    return "";
                  case 2:
                    return "row-span-2 col-span-2";
                  case 3:
                    return "";
                  case 4:
                    return "";
                  case 5:
                    return "col-span-2";
                }
              })()}
              year={img.year}
              city={`${img.city}, ${img.state}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
