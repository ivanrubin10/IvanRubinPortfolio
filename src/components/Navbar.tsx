"use client";

import Link, { LinkProps } from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  brandName: string;
  navItems: {
    label: string;
    href: string;
  }[];
}

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  return <Link {...props}>{children}</Link>;
};

export default function Navbar({ brandName, navItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="text-dark fixed top-0 z-50 bg-white shadow-md w-full flex items-center justify-between px-4 md:px-6 py-2"
      data-testid="navbar"
    >
      <div className="flex items-center w-40">
        <NavLink href="/" passHref>
          {brandName}
        </NavLink>
        <button
          className="inline-flex md:hidden ml-auto items-center text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={toggleMenu}
          aria-controls="nav-menu"
          aria-expanded={isOpen ? "true" : "false"}
          id="nav-menu-btn"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
      <div
        id="nav-menu"
        className={`${
          isOpen ? 'block md:hidden absolute top-full left-0 w-full z-50 bg-white overflow-y-auto max-h-60' : 'hidden'
        } p-4 text-center md:items-center md:w-full md:static md:flex md:flex-wrap`}
        key="nav-menu"
        role="navigation"
      >
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} passHref>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}