import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex space-x-2 items-center justify-center text-center align-top p-8 lg:p-6 text-[12px] md:text-sm lg:text-lg md:space-x-4 lg:space-x-6">
      {/* Home link */}
      <Link href="/">
        <span>Home</span>
      </Link>
      {/* Counter link */}
      <Link href="/counter">
        <span>Counter</span>
      </Link>
      {/* Calculator link */}
      <Link href="/calculator">
        <span>Calculator</span>
      </Link>
      {/* Grow link */}
      <Link href="/grow">
        <span>Grow</span>
      </Link>
      {/* Checklist link */}
      <Link href="/checklist">
        <span>Checklist</span>
      </Link>
      {/* Cardlist link */}
      <Link href="/cardlist">
        <span>Cardlist</span>
      </Link>
    </nav>
  );
};

export default Navbar;