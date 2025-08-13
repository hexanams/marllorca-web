"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HistoryFifthSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(backgroundRef.current, {
        x: 100,
        opacity: 0,
        scale: 1.1,
      });

      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      // Background animation
      gsap.to(backgroundRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          scrub: 1,
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
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "top 20%",
              scrub: 1,
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
          end: "top 20%",
          scrub: 2,
        },
      });

      // Button animation
      gsap.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 2,
        },
      });

      // Parallax effect for background
      gsap.to(backgroundRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Button hover effect
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="h-[700px] w-full overflow-hidden">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full flex flex-row items-center justify-center relative">
          <div
            ref={backgroundRef}
            className="z-[1] w-[45%] h-[80%] absolute right-[-90%] lg:right-[0px]"
          >
            <Image
              src="/HistoryBackThree.svg"
              alt="contact"
              width={1000}
              quality={60}
              height={1000}
              priority={true}
              style={{ objectFit: "fill" }}
              className="h-full object-cover"
            />
          </div>
          <div className="z-[2] relative w-[80%] lg:w-[50%] h-full flex flex-col items-start justify-center">
            <p
              ref={titleRef}
              className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-black-500"
            >
              Let&apos;s Help You Find Home
            </p>
            <p
              ref={descriptionRef}
              className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-300"
            >
              From sun-drenched coastlines to quiet mountain towns, Mallorca
              offers a lifestyle like no other. At Mallorca Web, we&apos;re here
              to help you not just buy property—but find where you truly belong.
            </p>
            <button
              ref={buttonRef}
              className="mt-[48px] bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] hover:bg-gold-500 hover:text-white-500 transition-colors duration-300"
            >
              Explore collections
            </button>
          </div>
          <div className="w-[20%] lg:w-[50%] h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HistoryFifthSectionAnimated;
