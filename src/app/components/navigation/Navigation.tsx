"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Web", href: "#web" },
  {
    label: "Graphisme et direction artistique",
    href: "#graphisme et direction artistique",
  },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#accueil");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(
        (link) => document.querySelector(link.href) as HTMLElement
      );
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(`#${section.id}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm text-white py-3">
      {" "}
      <div className="px-8 sm:px-16 xl:px-32">
        {/* Desktop nav */}
        <div className="hidden md:flex justify-end items-center gap-6 font-text list-none">
          {navLinks.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                className={`hover:bold ${
                  activeSection === link.href ? "font-bold" : ""
                }`}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex justify-between items-center">
          <span className="font-serif text-lg">a.a.</span>
          <button onClick={toggleMenu} aria-label="Ouvrir le menu">
            {isOpen ? (
              <X size={28} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4 font-text bg-white/10 backdrop-blur-md rounded-lg py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="hover:bold text-lg"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
