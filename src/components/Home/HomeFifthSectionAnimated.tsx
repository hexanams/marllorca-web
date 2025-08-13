"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HouseBackSvg from "../Assests/Svg/HouseBackSvg";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeFifthSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const houseBackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(imageContainerRef.current, {
        opacity: 0,
        scale: 1,
        borderRadius: "50px",
      });

      gsap.set(imageRef.current, {
        scale: 1,
        filter: "blur(10px)",
      });

      gsap.set(contentCardRef.current, {
        opacity: 0,
        y: 100,
        x: 50,
        scale: 0.9,
      });

      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(houseBackRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -5,
      });

      // Background SVG animation
      gsap.to(houseBackRef.current, {
        opacity: 0.3,
        scale: 1,
        rotation: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Main animation timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "50% 50%",
          scrub: 2,
        },
      });

      // Image container animation with morphing effect
      mainTl
        .to(imageContainerRef.current, {
          opacity: 1,
          scale: 1,
          borderRadius: "16px",
          duration: 1.5,
          ease: "power2.out",
        })
        .to(
          contentCardRef.current,
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8"
        );

      // Content text animation
      gsap.to([titleRef.current, descriptionRef.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentCardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax effects
      gsap.to(imageRef.current, {
        y: -40,
        scale: 1.1,
        filter: "blur(0px)",
        ease: "power2.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(contentCardRef.current, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(houseBackRef.current, {
        x: -40,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Hover effect for content card
      // if (contentCardRef.current) {
      //   contentCardRef.current.addEventListener("mouseenter", () => {
      //     gsap.to(contentCardRef.current, {
      //       scale: 1.02,
      //       y: -5,
      //       duration: 0.4,
      //       ease: "power2.out",
      //     });
      //   });

      //   contentCardRef.current.addEventListener("mouseleave", () => {
      //     gsap.to(contentCardRef.current, {
      //       scale: 1,
      //       y: 0,
      //       duration: 0.4,
      //       ease: "power2.out",
      //     });
      //   });
      // }

      // Image zoom effect on scroll
      // gsap.to(imageContainerRef.current, {
      //   scale: 1.05,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: imageContainerRef.current,
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: 2,
      //   },
      // });

      // Advanced text reveal animation
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
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-white-50 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[80px] pb-[80px] relative">
        {/* Background SVG */}
        <div ref={houseBackRef}>
          <HouseBackSvg
            className="z-[1] absolute top-[-20px] -left-[120px]"
            color={"#F9F9F9"}
          />
        </div>

        {/* Main Content */}
        <div
          ref={imageContainerRef}
          className="z-[2] h-[635px] w-full bg-[#F5F5F5] rounded-[16px] overflow-hidden relative"
        >
          <Image
            ref={imageRef}
            src="/images/backTwo.jpg"
            alt="background"
            width={1000}
            quality={60}
            height={1000}
            objectFit="cover"
            className="w-full h-full object-cover"
          />

          {/* Content Card */}
          <div
            ref={contentCardRef}
            className="absolute bg-white-900 max-lg:left-[0px] max-lg:mx-auto right-[0px] lg:right-[125px] bottom-[0px] w-full max-w-[555px] h-fit p-[32px] flex flex-col gap-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-lg"
          >
            <h5
              ref={titleRef}
              className="font-satoshi font-[400] text-[24px] leading-[36px] lg:text-[32px] lg:leading-[48px] text-black-900"
            >
              Built on Taste, Trust, and Tranquility
            </h5>
            <p
              ref={descriptionRef}
              className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-900"
            >
              This is more than real estate.<br></br>
              It&apos;s about creating sanctuaries for living well.<br></br>
              With decades of experience in design, hospitality, and service, we
              deliver more than spaces — we deliver peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFifthSectionAnimated;
