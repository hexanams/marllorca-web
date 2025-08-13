"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LogoSvg from "../Assests/Svg/LogoSvg";

interface PageLoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

const PageLoadingScreen = ({ onComplete, minDuration = 1500 }: PageLoadingScreenProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(loadingRef.current, {
        opacity: 1,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      gsap.set(progressRef.current, {
        width: "0%",
      });

      // Entrance animation
      const entranceTl = gsap.timeline();
      
      entranceTl
        .to(logoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(progressRef.current, {
          width: "100%",
          duration: minDuration / 1000,
          ease: "power2.inOut",
        }, "-=0.3");

      // Complete loading after minimum duration
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
      }, minDuration);

      return () => clearTimeout(completeTimeout);
    }, loadingRef);

    return () => ctx.revert();
  }, [minDuration]);

  useEffect(() => {
    if (!isComplete) return;

    const ctx = gsap.context(() => {
      // Exit animation
      const exitTl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      exitTl
        .to(logoRef.current, {
          scale: 0.9,
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(loadingRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.1");
    }, loadingRef);

    return () => ctx.revert();
  }, [isComplete, onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-[9999] bg-white-500 flex flex-col items-center justify-center"
    >
      <div ref={logoRef} className="flex flex-col items-center gap-8">
        <LogoSvg className="w-[200px] lg:w-[250px]" />
        
        {/* Loading progress bar */}
        <div className="w-[200px] lg:w-[250px] h-[2px] bg-gray-200 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gold-500 rounded-full"
          />
        </div>
        
        {/* Loading text */}
        <p className="font-helvetica font-[300] text-[14px] lg:text-[16px] text-black-300 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoadingScreen;
