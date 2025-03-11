"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Schedule",
    "Speakers",
    "Sponsors",
    "Previous Hackathon",
    "FAQ",
  ];

  const handleNavItemClick = (
  e: React.MouseEvent<HTMLAnchorElement>, 
  item: string
) => {
  e.preventDefault();
  const element = document.getElementById(item.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  // Close mobile menu after click
  setMenuOpen(false);
};
  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hackathon-dark-blue/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-hackathon-light-pink">
          Colossus 2025
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-hackathon-beige hover:text-hackathon-lavender transition-colors duration-300"
                onClick={(e) => handleNavItemClick(e, item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // X icon for closing menu
              <svg
                className="w-6 h-6 text-hackathon-light-pink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon for opening menu
              <svg
                className="w-6 h-6 text-hackathon-light-pink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-hackathon-dark-blue/90 backdrop-blur-md">
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block text-hackathon-beige hover:text-hackathon-lavender transition-colors duration-300"
                  onClick={(e) => handleNavItemClick(e, item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
