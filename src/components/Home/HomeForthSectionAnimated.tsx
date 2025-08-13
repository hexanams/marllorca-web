"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HouseBackSvg from "../Assests/Svg/HouseBackSvg";
import FounderCard from "../atoms/FounderCard";
import MallorcaSvg from "../Assests/Svg/MallorcaSvg";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeForthSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const foundersHeaderRef = useRef<HTMLHeadingElement>(null);
  const founderCardsRef = useRef<HTMLDivElement>(null);
  const houseBackRef = useRef<HTMLDivElement>(null);
  const mallorcaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup for first section
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 80,
      });
      gsap.set([descriptionRef.current, buttonRef.current], {
        opacity: 0,
        x: -80,
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        x: 80,
        scale: 0.9,
      });

      // Initial setup for founders section
      gsap.set(foundersHeaderRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(founderCardsRef.current?.children || [], {
        opacity: 0,
        y: 100,
        rotationY: 15,
      });

      // Background SVGs
      gsap.set([houseBackRef.current, mallorcaRef.current], {
        opacity: 0,
        scale: 0.8,
      });

      // Background SVGs entrance
      gsap.to([houseBackRef.current, mallorcaRef.current], {
        opacity: 0.4,
        scale: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
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
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Advanced text reveal animation
      const splitTitle = titleRef.current?.textContent?.split(" ") || [];
      if (titleRef.current && splitTitle.length > 0) {
        titleRef.current.innerHTML = splitTitle
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
          )
          .join(" ");

        const subtitleWords = titleRef.current.querySelectorAll("span span");

        gsap.fromTo(
          subtitleWords,
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "30% 50%",
              scrub: 2,
            },
          }
        );
      }

      // First section timeline - slide in from sides
      const firstSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "30% 50%",
          scrub: 2,
        },
      });

      firstSectionTl
        .to([descriptionRef.current, buttonRef.current], {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
        })
        .to(
          imageRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1"
        );

      // Image parallax effect
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Founders section entrance
      gsap.to(foundersHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: foundersHeaderRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Founder cards with 3D flip effect
      gsap.to(founderCardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: founderCardsRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      // Background SVGs parallax
      gsap.to(houseBackRef.current, {
        x: -30,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(mallorcaRef.current, {
        x: 20,
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Interactive hover effects for founder cards
      const cards = founderCardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card, index) => {
          const cardElement = card as HTMLElement;

          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              scale: 1.03,
              y: -8,
              rotationY: -2,
              duration: 0.4,
              ease: "power2.out",
            });

            // Subtle effect on other card
            Array.from(cards).forEach((otherCard, otherIndex) => {
              if (otherIndex !== index) {
                gsap.to(otherCard, {
                  scale: 0.98,
                  opacity: 0.8,
                  duration: 0.4,
                  ease: "power2.out",
                });
              }
            });
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(cardElement, {
              scale: 1,
              y: 0,
              rotationY: 0,
              duration: 0.4,
              ease: "power2.out",
            });

            // Reset other cards
            Array.from(cards).forEach((otherCard, otherIndex) => {
              if (otherIndex !== index) {
                gsap.to(otherCard, {
                  scale: 1,
                  opacity: 1,
                  duration: 0.4,
                  ease: "power2.out",
                });
              }
            });
          });
        });
      }

      // Button hover effect
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-white-500 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[80px] pb-[80px] relative">
        {/* Background SVGs */}
        <div ref={houseBackRef}>
          <HouseBackSvg
            className="z-[1] absolute -top-[200px] -left-[120px]"
            color={"#F5F5F5"}
          />
        </div>
        <div ref={mallorcaRef}>
          <MallorcaSvg className="z-[1] absolute -bottom-[20px] left-[0px]" />
        </div>

        {/* First section */}
        <div className="flex flex-col lg:flex-row max-lg:gap-[32px] w-full relative">
          <div className="z-[2] w-full lg:w-[50%] flex flex-col gap-[8px] items-start justify-center">
            <h2
              ref={titleRef}
              className="font-satoshi font-[400] text-[32px] leading-[40px] lg:text-[46px] lg:leading-[69px] text-black-500"
            >
              The Heart of Our Business
            </h2>
            <p
              ref={descriptionRef}
              className="font-helvetica lg:w-[80%] font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-500"
            >
              We are more than property managers — we are custodians of taste,
              tranquility, and trust.<br></br> With a network of designers,
              concierge partners, and lifestyle curators, our work begins where
              traditional bookings end.
            </p>
            <button
              ref={buttonRef}
              className="mt-[32px] bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[186px] py-[10px] rounded-[4px] hover:bg-gold-600 transition-colors duration-300"
            >
              About Us
            </button>
          </div>
          <div
            ref={imageRef}
            className="z-[2] w-full lg:w-[50%] h-[592px] overflow-hidden rounded-[8px]"
          >
            <Image
              src="/images/gettingKeys.jpg"
              alt=""
              width={1000}
              quality={60}
              height={1000}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Founders section */}
        <div className="flex flex-col items-center w-full mt-[80px] gap-[40px]">
          <h2
            ref={foundersHeaderRef}
            className="font-satoshi font-[300] text-[20px] leading-[30px] lg:text-[38px] lg:leading-[57px] text-gold-500"
          >
            Words from the founders
          </h2>
          <div
            ref={founderCardsRef}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px]"
          >
            <FounderCard
              title="Dolapo Alade"
              description="Dolapo Alade started this journey with a belief: that luxury should be personal, not performative. From years spent in design, hospitality, and global travel, they've built a service that reflects intention, warmth, and excellence."
              image="/images/founderOne.jpg"
              subtitle="Co-founder"
            />
            <FounderCard
              title="Dolapo Alade"
              description="Dolapo Alade started this journey with a belief: that luxury should be personal, not performative. From years spent in design, hospitality, and global travel, they've built a service that reflects intention, warmth, and excellence."
              image="/images/founderTwo.jpg"
              subtitle="Co-founder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForthSectionAnimated;
