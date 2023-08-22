import { Josefin_Sans } from 'next/font/google';

const josefinFont = Josefin_Sans({
  subsets: ['latin'],
});

export const josefin = josefinFont.className;
