"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HistoryFirstSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

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

      gsap.set(scrollIndicatorRef.current, {
        opacity: 0,
        y: 20,
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

        const textAnimation = gsap.fromTo(
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

        // Delay the scroll animation until entrance timeline completes
        textAnimation.delay(entranceTl.duration());
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
          scrollIndicatorRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );

      // Hero text scale and fade on scroll (delayed to let entrance timeline finish)
      const scrollAnimation = gsap.fromTo(
        [
          descriptionRef.current,
          scrollIndicatorRef.current,
          subtitleRef.current,
        ],
        {
          // y: 40,
          // opacity: 1,
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

      // Delay the scroll animation until entrance timeline completes
      scrollAnimation.delay(entranceTl.duration());

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

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
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
              src="/HistoryBack.svg"
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
              Our History
            </p>
            <h1
              ref={titleRef}
              className="font-helvetica_compressed font-[500] text-[32px] leading-[32px] lg:text-[56px] lg:leading-[56px] text-white-500"
            >
              From Humble Beginnings to Real Estate Excellence
            </h1>
            <p
              ref={descriptionRef}
              className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500"
            >
              Founded in 2009, Mallorca Web began as a boutique real estate
              service with a deep love for the island of Mallorca and a simple
              mission: to connect people with the Mediterranean lifestyle
              they&apos;ve always dreamed of. From picturesque coastal villas to
              charming inland fincas, we&apos;ve helped clients across the world
              discover the magic of calling Mallorca home.
            </p>
            <div
              ref={scrollIndicatorRef}
              className="absolute bottom-[34px] lg:bottom-[78px] flex flex-row gap-[16px] w-full items-center justify-end"
            >
              <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-[#E3E3E3] uppercase">
                Scroll down
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryFirstSectionAnimated;
