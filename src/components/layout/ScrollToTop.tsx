"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Disable smooth scrolling temporarily
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const originalHtmlBehavior = htmlElement.style.scrollBehavior;
    const originalBodyBehavior = bodyElement.style.scrollBehavior;
    
    // Set to instant scrolling
    htmlElement.style.scrollBehavior = 'auto';
    bodyElement.style.scrollBehavior = 'auto';
    
    // Force scroll to top on page load/reload
    window.scrollTo(0, 0);
    
    // Also reset scroll position in case of browser back/forward
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    // Restore smooth scrolling after a brief delay
    const restoreTimeout = setTimeout(() => {
      htmlElement.style.scrollBehavior = originalHtmlBehavior;
      bodyElement.style.scrollBehavior = originalBodyBehavior;
    }, 100);

    return () => clearTimeout(restoreTimeout);
  }, [pathname]);

  useEffect(() => {
    // Additional scroll to top on component mount (page reload)
    const handleBeforeUnload = () => {
      // Disable smooth scroll before unload
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
    };

    // Disable smooth scrolling temporarily for instant scroll
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const originalHtmlBehavior = htmlElement.style.scrollBehavior;
    const originalBodyBehavior = bodyElement.style.scrollBehavior;
    
    htmlElement.style.scrollBehavior = 'auto';
    bodyElement.style.scrollBehavior = 'auto';

    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Restore smooth scrolling after ensuring we're at top
    const restoreTimeout = setTimeout(() => {
      htmlElement.style.scrollBehavior = originalHtmlBehavior;
      bodyElement.style.scrollBehavior = originalBodyBehavior;
    }, 150);

    // Add event listener for page unload
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(restoreTimeout);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
