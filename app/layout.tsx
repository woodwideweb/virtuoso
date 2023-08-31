'use client';

import './globals.css';
import Logo from '@/components/Logo';
import NavLink from '@/components/NavLink';
import cx from 'classnames';
import { useScrollY } from '@/lib/hooks';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const scrollY = useScrollY();
  return (
    <html lang="en">
      <body className="bg-amber-50">
        <header
          className={cx(
            'bg-amber-50 flex items-center justify-between top-0 w-full transition-[height,box-shadow] duration-500 py-6 px-8',
          )}
        >
          <Logo className={cx(`transition-[margin-left,transform] duration-500`)} />
          <nav className="flex gap-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/featured-projects">Featured projects</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </nav>
        </header>
        <div>{children}</div>
        <footer className="mx-12 p-10 mt-12 bg-amber-100 rounded-t-[80px] flex justify-center items-center">
          <Logo />
        </footer>
      </body>
    </html>
  );
}
