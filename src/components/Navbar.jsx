import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">My Profile</div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu Items (Hidden on Mobile, Visible on Desktop) */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0`}
        >
          <li>
            <a onClick={closeMenu} href="#about" className="block hover:text-blue-300 py-2 md:py-0">
              About
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#skills" className="block hover:text-blue-300 py-2 md:py-0">
              Skills
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#projects" className="block hover:text-blue-300 py-2 md:py-0">
              Projects
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact" className="block hover:text-blue-300 py-2 md:py-0">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;