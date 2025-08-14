"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PropertyFirstSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(sectionRef.current, {
        opacity: 0,
      });

      gsap.set(backgroundRef.current, {
        x: -100,
        opacity: 0,
      });

      gsap.set([subtitleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 40,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      // Disable scroll during entrance animation
      document.body.style.overflow = "hidden";

      // Section entrance animation
      const entranceTl = gsap.timeline({
        delay: 0.3,
        onComplete: () => {
          // Re-enable scroll when entrance completes
          document.body.style.overflow = "auto";
        },
      });

      entranceTl
        .to(sectionRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          backgroundRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.1"
        );

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

        entranceTl.fromTo(
          titleWords,
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.6"
        );

        // Title scroll animation
        gsap.fromTo(
          titleWords,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      }

      // Content animations
      entranceTl
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );

      // Content scroll animation
      gsap.fromTo(
        [descriptionRef.current, buttonRef.current, subtitleRef.current],
        {
          // Initial state set by entrance timeline
        },
        {
          y: 100,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom 60%",
            scrub: 2,
          },
        }
      );

      // Parallax effect for background
      gsap.to(backgroundRef.current, {
        y: -50,
        ease: "power2.out",
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
    <div
      ref={sectionRef}
      className="h-full h-screen w-full bg-[#fff] overflow-hidden bg-black-500"
    >
      <div className="container h-full mx-auto px-4 relative">
        <div className="h-full w-full flex flex-row items-center justify-center">
          <div
            ref={backgroundRef}
            className="z-[1] w-[45%] h-full absolute left-[-90%] lg:left-[0px]"
          >
            <Image
              src="/images/propertyBack.png"
              alt="contact"
              width={1000}
              quality={60}
              height={1000}
              priority={true}
              style={{ objectFit: "cover" }}
              className="h-full object-cover"
            />
          </div>
          <div className="w-[20%] lg:w-[50%] h-full"></div>
          <div className="z-[2] relative w-[80%] lg:w-[50%] h-full flex flex-col items-start justify-center">
            <p
              ref={subtitleRef}
              className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500"
            >
              Sell Your Property With Confidence
            </p>
            <h1
              ref={titleRef}
              className="font-helvetica_compressed font-[500] text-[32px] leading-[32px] lg:text-[56px] lg:leading-[56px] text-white-500"
            >
              Your Partner in Premium Real Estate Sales
            </h1>
            <p
              ref={descriptionRef}
              className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500"
            >
              Whether you&apos;re planning to sell a villa, apartment, or a
              unique property, Mallorca Web offers personalized service and
              market expertise to ensure a seamless selling experience—from your
              first consultation to the final signature.
            </p>
            <button
              ref={buttonRef}
              className="mt-[16px] bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] hover:bg-gold-500 hover:text-white-500 transition-colors duration-300"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFirstSectionAnimated;
