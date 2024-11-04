"use client";

import { useState } from "react";
import { Gauge, LayoutList, Layers2, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar open/close

  const links = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <Gauge />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <LayoutList />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <User />,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  return (
    <section
      className={`h-screen border-r-1 shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Toggle button for mobile view */}
      <button
        className="md:hidden p-2 bg-blue-600 text-white rounded-md absolute z-10 top-4 left-4"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>

      <ul
        className={`flex flex-col gap-4 p-6 mt-2 ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        {links.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <li className="flex items-center gap-3 font-bold rounded-lg px-4 py-2 transition-all duration-200 hover:bg-blue-100 cursor-pointer">
              <span className="text-primary">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
