"use client";

import "./globals.css";
import Link from "next/link";
import cx from "classnames";
import { IconFishChristianity, IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import ImageViewerStateProvider from "@/state/image-viewer/Provider";
import MobileNav from "@/components/MobileNav";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className="bg-amber-50 flex flex-col min-h-screen relative">
        <div
          onClick={() => setSidebarOpen(false)}
          className={cx(
            `fixed left-0 top-0 w-screen h-screen bg-amber-50/70 z-50 transition-[opacity,backdrop-filter] duration-500`,
            sidebarOpen
              ? `opacity-100 backdrop-blur-md`
              : `opacity-0 pointer-events-none`,
          )}
        />
        <MobileNav open={sidebarOpen} setOpen={setSidebarOpen} />
        <ImageViewerStateProvider>
          <header
            className={cx(
              `flex items-center justify-between top-0 w-full transition-[height,box-shadow] duration-500 py-2 sm:py-6 px-6 sm:px-8 bg-amber-50 relative z-40`,
            )}
          >
            <Logo
              className={cx(
                `transition-[margin-left,transform] duration-500 scale-[80%] sm:scale-100 -ml-8 sm:ml-0`,
              )}
            />
            <nav className="hidden lg:flex gap-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/featured-projects">Featured projects</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <button
              className="lg:hidden flex justify-center items-center bg-amber-100 w-12 h-12 rounded-full text-black/50 hover:bg-amber-200 active:bg-amber-300 active:scale-95 transition-[background-color,transform] duration-300"
              onClick={() => setSidebarOpen(true)}
            >
              <IconMenu2 width={30} />
            </button>
          </header>
          <div className="flex-grow">{children}</div>
          <footer className="lg:mx-12 pt-10 px-8 md:px-16 lg:px-28 mt-12 bg-amber-100 rounded-t-[40px] lg:rounded-t-[80px] flex flex-col">
            <div className="flex flex-col sm:flex-row gap-8 justify-between items-start">
              <Logo />
              <div className="flex gap-20 self-center sm:self-start">
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
                    Featured projects
                  </Link>
                  <FooterLink to="/featured-projects/modern-landscaping">
                    Modern landscaping
                  </FooterLink>
                  <FooterLink to="/featured-projects/classic-landscaping">
                    Classic landscaping
                  </FooterLink>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center pt-12 pb-4 gap-4 text-sm md:text-base">
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
};

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
