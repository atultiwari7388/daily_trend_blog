"use client";

import { LoginButton } from "./LoginButton";
import { SwitchTheme } from "./SwitchTheme";
import AuthContextProvider from "./../../../lib/context/AuthContext";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-3 bg-base-100 border-b border-neutral">
      {/* Left: Logo */}
      <Link href={`/`} className="flex-shrink-0 text-xl font-bold text-primary">
        TrendBlog
      </Link>

      {/* Toggle Button for Mobile Menu */}
      <button
        className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Center: Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex md:justify-center flex-grow transition-all duration-300 ease-in-out gap-4 ${
          isMenuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <li className="py-2 hover:text-primary transition-colors cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="py-2 hover:text-primary transition-colors cursor-pointer">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="py-2 hover:text-primary transition-colors cursor-pointer">
          <Link href="/about">About us</Link>
        </li>
        <li className="py-2 hover:text-primary transition-colors cursor-pointer">
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>

      {/* Right: Toggle Button and Login Button */}
      <div className="flex items-center gap-3">
        <AuthContextProvider>
          <SwitchTheme />
          <LoginButton />
        </AuthContextProvider>
      </div>
    </nav>
  );
};
