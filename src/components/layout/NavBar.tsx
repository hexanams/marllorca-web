"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LogoSvg from "../Assests/Svg/LogoSvg";

const NavBar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Check if current page has dark background (contact or history)
  const isDarkPage =
    pathname === "/contact" ||
    pathname === "/history" ||
    pathname === "/sell-your-property";

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Change background after scrolling 50px
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize scroll state on component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full h-[96px] ${
        scrolled
          ? "bg-black-500/10 backdrop-blur-[4px] shadow-sm translate-y-0"
          : "bg-transparent"
      } flex items-center justify-between px-4 lg:px-10 z-50 fixed top-0 transition-all duration-300`}
    >
      <div className="container h-full mx-auto px-4 relative">
        <div className="w-full h-full flex flex-row items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={`font-satoshi font-[500] text-[20px] ${
                isDarkPage && !scrolled ? "text-white-500" : "text-black-500"
              }`}
            >
              <LogoSvg
                className={`h-[62px] ${
                  isDarkPage && !scrolled ? "filter brightness-0 invert" : ""
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 transition-all duration-300">
            <Link
              href="/"
              className={`font-helvetica font-[300] text-[16px] ${
                pathname === "/"
                  ? "text-gold-500"
                  : isDarkPage && !scrolled
                  ? "text-white-500"
                  : "text-gold-900"
              } hover:text-gold-500 transition-colors duration-300`}
            >
              HOME
            </Link>
            <Link
              href="/listings"
              className={`font-helvetica font-[300] text-[16px] ${
                pathname === "/listings"
                  ? "text-gold-500"
                  : isDarkPage && !scrolled
                  ? "text-white-500"
                  : "text-gold-900"
              } hover:text-gold-500 transition-colors duration-300`}
            >
              LISTINGS
            </Link>
            <Link
              href="/history"
              className={`font-helvetica font-[300] text-[16px] ${
                pathname === "/history"
                  ? "text-gold-500"
                  : isDarkPage && !scrolled
                  ? "text-white-500"
                  : "text-gold-900"
              } hover:text-gold-500 transition-colors duration-300`}
            >
              HISTORY
            </Link>
            <Link
              href="/sell-your-property"
              className={`font-helvetica font-[300] text-[16px] ${
                pathname === "/sell-your-property"
                  ? "text-gold-500"
                  : isDarkPage && !scrolled
                  ? "text-white-500"
                  : "text-gold-900"
              } hover:text-gold-500 transition-colors duration-300`}
            >
              SELL YOUR PROPERTY
            </Link>
            <Link
              href="/contact"
              className={`font-helvetica font-[300] text-[16px] ${
                pathname === "/contact"
                  ? "text-gold-500"
                  : isDarkPage && !scrolled
                  ? "text-white-500"
                  : "text-gold-900"
              } hover:text-gold-500 transition-colors duration-300`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="max-lg:hidden bg-gold-500 hover:bg-gold-400 text-white-500 font-helvetica font-[300] text-[14px] md:text-[16px] px-5 py-2 rounded transition-all duration-300"
            >
              Enquire Now
            </Link>
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 ${
                  isDarkPage && !scrolled ? "bg-white-500" : "bg-black-500"
                } transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 ${
                  isDarkPage && !scrolled ? "bg-white-500" : "bg-black-500"
                } transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 ${
                  isDarkPage && !scrolled ? "bg-white-500" : "bg-black-500"
                } transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div
              ref={menuRef}
              className="fixed inset-0 bg-white-500 z-40 pt-[80px] px-6 py-10 flex flex-col items-center justify-center lg:hidden animate-fadeIn"
            >
              <div className="flex flex-col items-center gap-8 w-full max-w-xs">
                <Link
                  href="/"
                  className={`font-helvetica font-[300] text-[20px] ${
                    pathname === "/" ? "text-gold-500" : "text-black-500"
                  } transition-all duration-300 transform hover:scale-105`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/listings"
                  className={`font-helvetica font-[300] text-[20px] ${
                    pathname === "/listings"
                      ? "text-gold-500"
                      : "text-black-500"
                  } transition-all duration-300 transform hover:scale-105`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LISTINGS
                </Link>
                <Link
                  href="/history"
                  className={`font-helvetica font-[300] text-[20px] ${
                    pathname === "/history" ? "text-gold-500" : "text-black-500"
                  } transition-all duration-300 transform hover:scale-105`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HISTORY
                </Link>
                <Link
                  href="/sell-your-property"
                  className={`font-helvetica font-[300] text-[20px] ${
                    pathname === "/sell-your-property"
                      ? "text-gold-500"
                      : "text-black-500"
                  } transition-all duration-300 transform hover:scale-105`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SELL YOUR PROPERTY
                </Link>
                <Link
                  href="/contact"
                  className={`font-helvetica font-[300] text-[20px] ${
                    pathname === "/contact" ? "text-gold-500" : "text-black-500"
                  } transition-all duration-300 transform hover:scale-105`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT US
                </Link>

                <Link
                  href="/contact"
                  className="mt-8 bg-gold-500 hover:bg-gold-400 text-white-500 font-helvetica font-[300] text-[16px] px-8 py-3 rounded transition-all duration-300 w-full text-center"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
