"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HistoryFirstSectionAnimated from "./HistoryFirstSectionAnimated";
import HistorySecondSectionAnimated from "./HistorySecondSectionAnimated";
import HistoryThirdSectionAnimated from "./HistoryThirdSectionAnimated";
import HistoryForthSectionAnimated from "./HistoryForthSectionAnimated";
import HistoryFifthSectionAnimated from "./HistoryFifthSectionAnimated";
import HomeSixthSectionAnimated from "../Home/HomeSixthSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HistoryPageAnimated = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Smooth scroll setup
      ScrollTrigger.refresh();

      // Page entrance animation
      // gsap.fromTo(
      //   pageRef.current,
      //   {
      //     opacity: 0.7,
      //   },
      //   {
      //     opacity: 1,
      //     duration: 0.5,
      //     ease: "power2.out",
      //   }
      // );

      // Refresh ScrollTrigger after all sections are rendered
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(refreshTimeout);
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative ">
      {/* Animated History Sections */}
      <HistoryFirstSectionAnimated />
      <HistorySecondSectionAnimated />
      <HistoryThirdSectionAnimated />
      <HistoryForthSectionAnimated />
      <HistoryFifthSectionAnimated />
      <HomeSixthSectionAnimated />
    </div>
  );
};

export default HistoryPageAnimated;
