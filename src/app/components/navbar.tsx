import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex space-x-4 items-center justify-center text-center align-top p-8 lg:p-6 text-[12px] md:text-sm lg:text-lg">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/counter">
          <span>Counter</span>
        </Link>
        <Link href="/calculator">
          <span>Calculator</span>
        </Link>
        <Link href="/grow">
          <span>Grow</span>
        </Link>
        <Link href="/checklist">
          <span>Checklist</span>
        </Link>
        <Link href="/cardlist">
          <span>Cardlist</span>
        </Link>
    </nav>
    );
};

export default Navbar;