"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("emerald");

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "emerald" ? "dark" : "emerald";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Set initial theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "emerald"; // Default to emerald
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

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
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="hidden"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                theme === "dark" ? "transform translate-x-full bg-gray-900" : ""
              }`}
            ></div>
          </div>
        </label>
        <button className="btn btn-secondary btn-sm">Login</button>
      </div>
    </nav>
  );
};
