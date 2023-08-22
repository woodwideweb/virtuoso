'use client';

import React from 'react';
import cx from 'classnames';
import { TablerIcon } from '@/lib/types';
import Link from 'next/link';

type Props = {
  color: 'primary' | 'secondary';
  size?: 'lg' | 'md' | 'sm';
  icon?: TablerIcon;
  className?: string;
  children?: React.ReactNode;
} & ({ type: 'button'; onClick(): void } | { type: 'link'; to: string });

const Button: React.FC<Props> = (props) => {
  const classes = cx(
    `text-xl font-semibold tracking-wider flex items-center border-2 border-primary-700 transition-[color,background-color,border-color,transform] duration-300 active:scale-95`,
    props.color === `primary`
      ? `bg-primary-700 text-white hover:bg-primary-800 hover:border-primary-800 active:bg-primary-900 active:border-primary-900`
      : `text-primary-800 hover:bg-primary-200 active:bg-primary-300`,
    props.size === `lg`
      ? `text-xl gap-2 px-8 py-5 rounded-3xl`
      : props.size === `sm`
      ? `text-base gap-1 px-4 py-2 rounded-2xl`
      : `text-lg gap-1.5 px-6 py-3 rounded-[20px]`,
    props.className,
  );
  if (props.type === 'button') {
    return (
      <button onClick={props.onClick} className={cx(classes)}>
        <span>{props.children}</span>
        {props.icon && (
          <props.icon size={props.size === `lg` ? 24 : props.size === `sm` ? 20 : 22} />
        )}
      </button>
    );
  }
  return (
    <Link href={props.to} className={cx(classes, props.className)}>
      <span>{props.children}</span>
      {props.icon && (
        <props.icon size={props.size === `lg` ? 24 : props.size === `sm` ? 20 : 22} />
      )}
    </Link>
  );
};

export default Button;
