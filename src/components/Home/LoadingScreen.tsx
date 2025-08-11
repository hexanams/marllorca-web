"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([progressRef.current, textRef.current, logoRef.current], {
      opacity: 0,
      y: 50,
    });

    // Animation sequence
    tl.to([logoRef.current, textRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    })
      .to(progressRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(progressRef.current, {
        scaleX: 1,
        duration: 2.5,
        ease: "power2.inOut",
        transformOrigin: "left center",
      })
      .to([logoRef.current, textRef.current, progressRef.current], {
        opacity: 0,
        y: -50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.in",
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        },
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black-500 flex flex-col items-center justify-center"
    >
      {/* Logo/Brand */}
      <div ref={logoRef} className="mb-8">
        <h1 className="font-satoshi font-[300] text-[48px] lg:text-[72px] text-white-500 text-center">
          MARLLORCA
        </h1>
      </div>

      {/* Loading Text */}
      <div ref={textRef} className="mb-12">
        <p className="font-helvetica font-[300] text-[16px] lg:text-[20px] text-white-600 text-center">
          Curating exceptional experiences
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-[300px] lg:w-[400px] h-[2px] bg-white-600/20 relative overflow-hidden">
        <div
          ref={progressRef}
          className="absolute inset-0 bg-gold-500 transform scale-x-0"
          style={{ transformOrigin: "left center" }}
        />
      </div>

      {/* Loading Percentage (Optional) */}
      <div className="mt-6">
        <p className="font-helvetica font-[300] text-[14px] text-white-600/60">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
