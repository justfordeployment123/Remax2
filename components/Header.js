"use client";
import { useState } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { menuConfig } from "../config/menuConfig";

export default function Header() {
  const [openMenus, setOpenMenus] = useState({});

  const handleMouseEnter = (menuKey) => {
    setOpenMenus({ [menuKey]: true });
  };

  const handleMouseLeave = (menuKey) => {
    setOpenMenus({ [menuKey]: false });
  };

  const handleClick = (menuKey) => {
    setOpenMenus((prev) => ({
      [menuKey]: !prev[menuKey],
    }));
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* RE/MAX Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              <span className="bg-red-600 text-white px-2.5 py-1 rounded">
                RE
              </span>
              <span className="text-blue-700 ml-1">MAX</span>
            </Link>
          </div>

          {/* Right side navigation and buttons */}
          <div className="flex items-center space-x-2">
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-1">
              {Object.entries(menuConfig).map(([key, menu]) => (
                <div
                  key={key}
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={() => handleMouseLeave(key)}
                  className="relative"
                >
                  <DropdownMenu
                    title={menu.title}
                    items={menu.items}
                    isOpen={openMenus[key] || false}
                    onClick={() => handleClick(key)}
                  />
                </div>
              ))}
            </nav>

            {/* Login/Signup Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <Link href="/login">
                <button className="text-[#004e9b] hover:text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-all text-sm">
                  Log In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-[#004e9b] text-white px-5 py-2 rounded-lg hover:bg-blue-800 font-semibold shadow-sm hover:shadow transition-all text-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
