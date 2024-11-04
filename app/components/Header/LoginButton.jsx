"use-client";

import { useState } from "react";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";

export const LoginButton = () => {
  const { user, isLoading, handleSigninWithGoogle, handleLogout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  if (isLoading) {
    return <span className="loading loading-infinity loading-xs"></span>;
  }

  return (
    <div className="relative inline-block">
      {user ? (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="avatar placeholder">
            {user.photoURL ? (
              <div className="bg-neutral text-neutral-content w-10 rounded-full">
                <span className="text-2xl">
                  {user.displayName.charAt(0).toUpperCase()}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                <span className="text-lg font-bold">
                  {user.displayName
                    ? user.displayName.charAt(0).toUpperCase()
                    : "?"}
                </span>
              </div>
            )}
          </div>

          {/* DaisyUI Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              {/* Icon for dropdown toggle */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path fill="currentColor" d="M12 15.8l-4.2-4.2h8.4L12 15.8z" />
              </svg>
            </label>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
              >
                <Link href="/admin">
                  <li>
                    <h1 className="font-semibold">{user.displayName}</h1>
                    <h2 className="text-sm ">{user.email}</h2>
                  </li>
                </Link>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <section>
          <button
            onClick={handleSigninWithGoogle}
            className="btn btn-secondary btn-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#4285F4"
                d="M23.5 12.6c1.4 0 2.8.1 4 .4 1.2.3 2.4.7 3.5 1.2l5.2-5.1c-2.5-1.4-5.3-2.3-8.7-2.3-6.4 0-12.1 3.3-15.3 8.2l5.6 4.3c1.6-3.3 5-5.9 8.7-5.9z"
              />
              <path
                fill="#34A853"
                d="M9.8 20.2c-.3.8-.5 1.6-.5 2.5s.2 1.7.5 2.5l-5.6 4.3C2.7 27.1 2 25 2 23c0-2 1.1-4.5 2.9-6.5l4.9 3.7z"
              />
              <path
                fill="#FBBC05"
                d="M23.5 35c-3.7 0-7.1-2.5-8.7-5.9l-5.6 4.3c3.2 4.9 8.8 8.2 15.3 8.2 3.2 0 6.2-1 8.7-2.8l-5.3-4.3c-1.1.5-2.3.8-3.5.8z"
              />
              <path
                fill="#EA4335"
                d="M44.5 20H23.5v8.5h11.9c-1.5 3.7-5 6.5-8.9 6.5-3.5 0-6.7-2.1-8.3-5.3L9.8 30.3c2.6 5.6 8.1 9.7 14.5 9.7 7.7 0 14-5.4 16-12.5 1.6-5.8-.1-12.2-4.8-16.5l-5.1 5c1.5 1.4 2.8 3.2 3.7 5.5z"
              />
            </svg>
            Login
          </button>
        </section>
      )}
    </div>
  );
};
