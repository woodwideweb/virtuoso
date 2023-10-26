import React from "react";
import cx from "classnames";
import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileNav: React.FC<Props> = ({ open, setOpen }) => (
  <nav
    onClick={(e) => e.stopPropagation()}
    className={cx(
      `bg-amber-100 rounded-r-[40px] p-6 w-72 shadow-2xl transition-transform duration-500 absolute h-screen left-0 z-50 flex flex-col`,
      open ? `translate-x-0` : `-translate-x-80`,
    )}
  >
    <MobileNavLink setOpen={setOpen} to="/">
      Home
    </MobileNavLink>
    <MobileNavLink setOpen={setOpen} to="/about">
      About
    </MobileNavLink>
    <MobileNavLink setOpen={setOpen} to="/contact">
      Contact
    </MobileNavLink>
    <MobileNavLink setOpen={setOpen} to="/gallery">
      Gallery
    </MobileNavLink>
    <h3 className="font-medium text-black/40 text-lg mt-8 mb-4 ml-6">
      Featured Projects
    </h3>
    <MobileNavLink setOpen={setOpen} to="/featured-projects/hartville">
      Hartville
    </MobileNavLink>
    <MobileNavLink setOpen={setOpen} to="/featured-projects/tye-browns">
      Tye Brown's
    </MobileNavLink>
  </nav>
);

export default MobileNav;

interface MobileNavLinkProps {
  to: string;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  children,
  setOpen,
}) => (
  <Link
    href={to}
    onClick={() => setOpen(false)}
    className="hover:bg-black/5 transition-[background-color,transform] active:bg-black/10 active:scale-95 duration-200 rounded-3xl px-6 py-4 text-xl text-black/60 font-semibold"
  >
    {children}
  </Link>
);
