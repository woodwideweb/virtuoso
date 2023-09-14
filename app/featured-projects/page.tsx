import Link from 'next/link';
import React from 'react';

interface Props {}

const FeaturedProjects: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col p-12 items-center gap-8">
      <Link href="/featured-projects/hartville">Hartville</Link>
      <Link href="/featured-projects/ty-browns">Ty Brown</Link>
    </div>
  );
};

export default FeaturedProjects;
