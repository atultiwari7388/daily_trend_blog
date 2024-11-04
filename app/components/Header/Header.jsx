"use client";

import { LoginButton } from "./LoginButton";
import { SwitchTheme } from "./SwitchTheme";
import AuthContextProvider from "./../../../lib/context/AuthContext";

export const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-base-100 border-b border-neutral">
      {/* Left: Logo */}
      <div className="flex-shrink-0 text-xl font-bold text-primary">
        TrendBlog
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex-grow flex justify-center gap-6 items-center text-base font-medium">
        <li className="hover:text-primary transition-colors cursor-pointer">
          Home
        </li>
        <li className="hover:text-primary transition-colors cursor-pointer">
          Blogs
        </li>
        <li className="hover:text-primary transition-colors cursor-pointer">
          About us
        </li>
        <li className="hover:text-primary transition-colors cursor-pointer">
          Contact us
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
