"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropertyFirstSectionAnimated from "./PropertyFirstSectionAnimated";
import PropertySecondSectionAnimated from "./PropertySecondSectionAnimated";
import PropertyThirdSectionAnimated from "./PropertyThirdSectionAnimated";
import HomeSixthSectionAnimated from "../Home/HomeSixthSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PropertyPageAnimated = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Smooth scroll setup
      ScrollTrigger.refresh();

      // Refresh ScrollTrigger after all sections are rendered
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(refreshTimeout);
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative">
      {/* Animated Property Sections */}
      <PropertyFirstSectionAnimated />
      <PropertySecondSectionAnimated />
      <PropertyThirdSectionAnimated />
      <HomeSixthSectionAnimated />
    </div>
  );
};

export default PropertyPageAnimated;
