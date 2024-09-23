import React, { useState } from "react";
import logo from "../Assests/logo.svg";
import main from '../Assests/main-icon-Copy.svg';

// Arrow icon for items with sub-elements
const ArrowIcon = ({ hovered }) => (
  <svg
    className={`w-4 h-4 ml-1 inline-block transition-transform duration-200 ${
      hovered ? "transform rotate-90" : ""
    }`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const navItems = [
    { title: "Catalog", hasSubItems: false },
    {
      title: "How it Works",
      hasSubItems: true,
      subItems: [
        "How Printify Works",
        "Print on Demand",
        "Printify Quality Promise",
        "What is Sell?",
      ],
    },
    { title: "Pricing", hasSubItems: false },
    { title: "Blog", hasSubItems: false },
    {
      title: "Services",
      hasSubItems: true,
      subItems: [
        "Printify Studio",
        "Printify Express Delivery",
        "Transfer Products",
        "Order in Bulk",
        "Experts Program",
      ],
    },
    {
      title: "Use Cases",
      hasSubItems: true,
      subItems: [
        "Merch for Fans",
        "Merch for Ecommerce",
        "Merch for Enterprises",
        "Grow Your Store",
      ],
    },
  ];

  const handleMouseEnterMenu = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeaveMenu = () => {
    setActiveMenu(null);
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left section (Logo and Menu Toggle) */}
          <div className="flex items-center">
            {/* Mobile Menu Toggle (for small screens) */}
            <div className="md:hidden mr-4">
              <button
                className="text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <a href="/" className="mr-8">
              <img
                src={logo}
                alt="Logo"
                className="h-10 hidden md:block" // Desktop logo
              />
              <img
                src={main}
                alt="Logo Mobile"
                className="h-10 md:hidden green-50" // Mobile logo
              />
            </a>

            {/* Main Nav Links - Shown on Medium and Larger Screens */}
            <ul className={`hidden md:flex space-x-6 items-center`}>
              {navItems.map((item, index) => (
                <li
                  key={item.title}
                  className="group relative flex items-center cursor-pointer"
                  onMouseEnter={() => {
                    handleMouseEnter(index);
                    handleMouseEnterMenu(item.title.toLowerCase());
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                    handleMouseLeaveMenu();
                  }}
                >
                  <span className="hover:text-green-600">{item.title}</span>
                  {/* Show arrow only if there are sub-items */}
                  {item.hasSubItems && <ArrowIcon hovered={hoveredIndex === index} />}
                  {/* Dropdown for items with sub-elements */}
                  {item.hasSubItems && (
                    <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-4 top-full left-0 w-auto min-w-[200px] whitespace-nowrap">
                      <ul className="text-left space-y-2">
                        {item.subItems.map((subItem) => (
                          <li
                            key={subItem}
                            className="px-2 py-1 hover:bg-gray-200 flex items-center"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side (Login and Sign Up) - Shown on Medium and Larger Screens */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-700 rounded">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={item.title} className="relative">
                  <span className="block text-gray-700 font-semibold cursor-pointer">
                    {item.title}
                  </span>
                  {item.hasSubItems && (
                    <div className="flex flex-col pl-4 mt-2">
                      {item.subItems.map((subItem) => (
                        <span key={subItem} className="text-gray-600 hover:text-green-500">
                          {subItem}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Login/Sign Up Buttons - Only Visible in Mobile Menu */}
            <div className="flex flex-col space-y-2 mt-4">
              <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                Login
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-700 rounded">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
