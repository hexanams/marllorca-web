"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LogoSvg from "../Assests/Svg/LogoSvg";

const NavBarAnimated = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Check if current page has dark background
  const isDarkPage =
    (pathname === "/contact" && !mobileMenuOpen) ||
    (pathname === "/history" && !mobileMenuOpen) ||
    (pathname === "/sell-your-property" && !mobileMenuOpen);

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

  // Handle scroll events for navbar visibility and background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;
      const hideThreshold = 100;

      // Update scrolled state for background
      setScrolled(currentScrollY > scrollThreshold);

      // Handle navbar visibility
      if (currentScrollY < hideThreshold) {
        // Always show navbar at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // GSAP animation for navbar visibility
  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isVisible]);

  // Initial navbar entrance animation
  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`w-full h-[96px] ${
          scrolled
            ? "bg-black-500/10 backdrop-blur-[4px] shadow-sm"
            : "bg-transparent"
        } flex items-center justify-between px-4 lg:px-10 z-50 fixed top-0 transition-all duration-300`}
      >
        <div className="container h-full mx-auto px-4">
          <div className="w-full h-full flex flex-row items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className={`font-satoshi font-[500] text-[20px] ${
                  isDarkPage && !scrolled ? "text-white-500" : "text-black-500"
                }`}
              >
                <LogoSvg
                  className={`w-[150px] transition-all duration-300 ${
                    isDarkPage && !scrolled ? "filter brightness-0 invert" : ""
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 transition-all duration-300">
              <Link
                href="/"
                className={`font-helvetica font-[300] text-[16px] transition-colors duration-300 hover:text-gold-500 ${
                  pathname === "/"
                    ? "text-gold-500"
                    : isDarkPage && !scrolled
                    ? "text-white-500"
                    : "text-black-500"
                }`}
              >
                Home
              </Link>
              <Link
                href="/history"
                className={`font-helvetica font-[300] text-[16px] transition-colors duration-300 hover:text-gold-500 ${
                  pathname === "/history"
                    ? "text-gold-500"
                    : isDarkPage && !scrolled
                    ? "text-white-500"
                    : "text-black-500"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/sell-your-property"
                className={`font-helvetica font-[300] text-[16px] transition-colors duration-300 hover:text-gold-500 ${
                  pathname === "/sell-your-property"
                    ? "text-gold-500"
                    : isDarkPage && !scrolled
                    ? "text-white-500"
                    : "text-black-500"
                }`}
              >
                Sell Your Property
              </Link>
              <Link
                href="/contact"
                className={`font-helvetica font-[300] text-[16px] transition-colors duration-300 hover:text-gold-500 ${
                  pathname === "/contact"
                    ? "text-gold-500"
                    : isDarkPage && !scrolled
                    ? "text-white-500"
                    : "text-black-500"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-8 h-8 flex flex-col justify-center items-center ${
                  isDarkPage && !scrolled ? "text-white-500" : "text-black-500"
                }`}
              >
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${
                    isDarkPage && !scrolled ? "bg-white-500" : "bg-black-500"
                  } ${
                    mobileMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "rotate-0 translate-y-0"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                    isDarkPage && !scrolled ? "bg-white-500" : "bg-black-500"
                  } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                    isDarkPage && !scrolled ? "bg-white-500" : "bg-black-500"
                  } ${
                    mobileMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "rotate-0 translate-y-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-[96px] left-0 w-full bg-white-500 z-40 transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-helvetica font-[300] text-[18px] transition-colors duration-300 ${
                pathname === "/" ? "text-gold-500" : "text-black-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/history"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-helvetica font-[300] text-[18px] transition-colors duration-300 ${
                pathname === "/history" ? "text-gold-500" : "text-black-500"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/sell-your-property"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-helvetica font-[300] text-[18px] transition-colors duration-300 ${
                pathname === "/sell-your-property"
                  ? "text-gold-500"
                  : "text-black-500"
              }`}
            >
              Sell Your Property
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-helvetica font-[300] text-[18px] transition-colors duration-300 ${
                pathname === "/contact" ? "text-gold-500" : "text-black-500"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarAnimated;
