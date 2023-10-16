import { Montserrat } from "next/font/google";
const montserratFont = Montserrat({
  subsets: ["latin"], // eslint-disable-line
});

export const montserrat = montserratFont.className;
