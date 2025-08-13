"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeSixthSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(backgroundRef.current, {
        scale: 1.2,
        opacity: 0,
      });

      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 60,
      });

      gsap.set(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 40,
        scale: 0.9,
      });

      // Background animation
      gsap.to(backgroundRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Content text animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none play reverse",
        },
      });

      // Title animation with split text effect
      const splitTitle = titleRef.current?.textContent?.split(" ") || [];
      if (titleRef.current && splitTitle.length > 0) {
        titleRef.current.innerHTML = splitTitle
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
          )
          .join(" ");

        const titleWords = titleRef.current.querySelectorAll("span span");

        gsap.fromTo(
          titleWords,
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Description animation
      gsap.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Buttons animation with stagger
      gsap.to(buttonsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax effect for background
      gsap.to(backgroundRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Button hover effects
      const buttons = buttonsRef.current?.children;
      if (buttons) {
        Array.from(buttons).forEach((button) => {
          const buttonElement = button as HTMLElement;

          buttonElement.addEventListener("mouseenter", () => {
            gsap.to(buttonElement, {
              scale: 1.05,
              y: -2,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          buttonElement.addEventListener("mouseleave", () => {
            gsap.to(buttonElement, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-white-50 overflow-hidden relative"
    >
      <div
        ref={backgroundRef}
        className="z-[1] h-[629px] w-full absolute top-0 left-0 right-0 bottom-0"
      >
        <Image
          src="/images/backThree.jpg"
          alt="background"
          width={1000}
          quality={60}
          height={1000}
          objectFit="cover"
          priority
          objectPosition="top center"
          className="w-full h-full object-cover z-[1]"
        />
      </div>
      <div className="z-[2] h-[629px] w-full px-4 bg-black-500/50 overflow-hidden relative">
        <div className="container h-[629px] mx-auto relative z-[2]">
          <div className="flex flex-col items-center justify-center h-full gap-[16px]">
            <h2
              ref={titleRef}
              className="font-satoshi text-center font-[400] text-[32px] leading-[40px] lg:text-[46px] lg:leading-[69px] text-white-600"
            >
              Let&apos;s Make Your Next Stay Remarkable
            </h2>
            <p
              ref={descriptionRef}
              className="font-helvetica text-center lg:w-[50%] font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-600"
            >
              Whether for a long weekend or a long season, we help you find not
              just a place to stay — but a space to belong.
            </p>
            <div
              ref={buttonsRef}
              className="flex flex-col lg:flex-row gap-[16px] mt-[16px] w-full items-center justify-center"
            >
              <button className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] hover:bg-gold-600 transition-colors duration-300">
                Book a Consultation
              </button>
              <button className="bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] hover:bg-gold-500 hover:text-white-500 transition-colors duration-300">
                Browse Villas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSixthSectionAnimated;
