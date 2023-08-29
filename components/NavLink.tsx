'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'classnames';
import { montserrat } from '@/lib/fonts';

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      className={cx(
        'text-lg font-medium tracking-wider py-3 px-5 transition-[color,background-color,transform,border-radius] duration-300 active:scale-95 hover:bg-amber-100/70 active:bg-amber-200/50 active:rounded-3xl rounded-xl',
        pathname === to
          ? `text-primary-800 hover:text-primary-900 active:text-primary-950`
          : `text-black/30 hover:text-black/40 active:text-black/50`,
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
