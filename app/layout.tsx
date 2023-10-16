"use client";

import "./globals.css";
import Link from "next/link";
import cx from "classnames";
import { IconFishChristianity } from "@tabler/icons-react";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import ImageViewerStateProvider from "@/state/image-viewer/Provider";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className="bg-amber-50 flex flex-col min-h-screen">
      <ImageViewerStateProvider>
        <header
          className={cx(
            `flex items-center justify-between top-0 w-full transition-[height,box-shadow] duration-500 py-6 px-8 bg-amber-50 relative z-40`,
          )}
        >
          <Logo
            className={cx(`transition-[margin-left,transform] duration-500`)}
          />
          <nav className="hidden lg:flex gap-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/featured-projects">Featured projects</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </nav>
          <button className="block lg:hidden"></button>
        </header>
        <div className="flex-grow">{children}</div>
        <footer className="mx-12 pt-10 px-28 mt-12 bg-amber-100 rounded-t-[80px] flex flex-col">
          <div className="flex justify-between items-start">
            <Logo />
            <div className="flex gap-20">
              <ul className="gap-1 flex flex-col">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
              </ul>
              <ul className="gap-2 flex flex-col">
                <Link
                  href="/featured-projects"
                  className="text-lg font-bold text-black/70 transition-[color,transform] hover:text-black"
                >
                  Featued projects
                </Link>
                <FooterLink to="/featured-projects/hartville">
                  Hartville
                </FooterLink>
                <FooterLink to="/featured-projects/tye-browns">
                  Tye Brown
                </FooterLink>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center pt-12 pb-4 gap-4">
            <span className="text-black/50 tracking-widest">
              © {new Date().getFullYear()} Virtuoso Landscaping, LLC{` `}
            </span>
            <IconFishChristianity className="text-black/40" size={20} />
          </div>
        </footer>
      </ImageViewerStateProvider>
    </body>
  </html>
);

export default RootLayout;

interface FooterLinkProps {
  children: React.ReactNode;
  to: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, to }) => (
  <li className="font-medium text-lg transition-[color,transform] text-black/50 hover:text-black/70 active:text-black active:scale-95 duration-200 w-fit">
    <Link href={to}>{children}</Link>
  </li>
);
