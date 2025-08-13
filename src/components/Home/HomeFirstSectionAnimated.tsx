"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseSvg from "../Assests/Svg/MouseSvg";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeFirstSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup - hide all elements including section
      gsap.set(sectionRef.current, {
        opacity: 0,
      });
      
      gsap.set(
        [
          heroTextRef.current,
          subTextRef.current,
          buttonsRef.current,
          scrollIndicatorRef.current,
        ],
        {
          opacity: 0,
          y: 60,
        }
      );

      // Create entrance timeline
      const entranceTl = gsap.timeline({ delay: 0.1 });

      entranceTl
        .to(heroTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        })
        .to(
          subTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Parallax effect for background
      gsap.to(backgroundRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 3,  // Slower, smoother animation
        },
      });

      // Hero text scale and fade on scroll
      gsap.fromTo(heroTextRef.current, {
        scale: 1,      // Starting values (100% scale)
        opacity: 1     // Starting values (100% opacity)
      }, {
        scale: 0.8,    // Ending values (80% scale)
        opacity: 0.3,  // Ending values (30% opacity)
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 3,      // Slower, more visible animation
        },
      });

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "30% top",  // Extended range
          scrub: 2         // Slower fade out
        },
      });

      // Floating animation for scroll indicator
      const mouseIcon =
        scrollIndicatorRef.current?.querySelector(".mouse-icon");
      if (mouseIcon) {
        gsap.to(mouseIcon, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-full bg-[#fff] overflow-hidden relative"
    >
      {/* Background with parallax */}
      <div
        ref={backgroundRef}
        className="absolute top-[-10%] left-0 right-0 bottom-[-10%] overflow-hidden bg-black"
      >
        <Image
          src="/images/back.jpg"
          alt=""
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#71717100] to-[#0B0B0B]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full">
        <div className="container h-full !mx-auto px-4">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1
              ref={heroTextRef}
              className="font-satoshi font-[300] text-[32px] leading-[46px] lg:text-[68px] lg:leading-[102px] text-white-500 text-center lg:max-w-[75%]"
            >
              Bespoke Escapes Crafted for the Exceptional Few
            </h1>

            <p
              ref={subTextRef}
              className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-600 text-center w-full lg:max-w-[75%] mt-[16px]"
            >
              Discover our curated collection of handpicked villas, estates, and
              residences in the world&apos;s most iconic destinations. From
              serene coastlines to dramatic hillsides, your perfect getaway
              awaits.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col lg:flex-row gap-[16px] mt-[40px] w-full items-center justify-center"
            >
              <button className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] hover:bg-gold-600 transition-colors duration-300">
                Explore Collection
              </button>
              <button className="bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] hover:bg-gold-500 hover:text-white-500 transition-all duration-300">
                Learn More About Us
              </button>
            </div>

            <div
              ref={scrollIndicatorRef}
              className="absolute bottom-[34px] lg:bottom-[78px] flex flex-row gap-[16px] w-full items-center justify-center"
            >
              <div className="mouse-icon">
                <MouseSvg />
              </div>
              <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-[#E3E3E3]">
                Scroll down
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstSectionAnimated;
