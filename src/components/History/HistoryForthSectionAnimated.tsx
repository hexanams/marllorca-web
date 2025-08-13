"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FanSvg from "../Assests/Svg/FanSvg";
import FlowerSvg from "../Assests/Svg/FlowerSvg";
import MoonsSvg from "../Assests/Svg/MoonsSvg";
import WhyTwoCard from "../atoms/WhyTwoCard";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HistoryForthSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current], {
        opacity: 0,
        x: -50,
      });

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 100,
        scale: 0.8,
      });

      // Title animation with slide effect
      gsap.to(titleRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Cards animation with stagger
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 3,
        },
      });

      // Card hover effects
      const cards = cardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;

          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              y: -15,
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
            });
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(cardElement, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-black-500">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full flex flex-col gap-[43px] items-start justify-center py-[80px]">
          <h3
            ref={titleRef}
            className="lg:-ml-[70px] font-satoshi font-[400] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-white-500"
          >
            Why Choose Mallorca Web?
          </h3>
          <div
            ref={cardsRef}
            className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-[24px]"
          >
            <WhyTwoCard
              title="15+ Years of Local Experience"
              className="bg-gold-500"
              description="Deep knowledge of the island and the property landscape."
              image={
                <FanSvg className="z-[1] absolute left-[0px] right-[0px] top-[0px] bottom-[0px] m-auto" />
              }
            />
            <WhyTwoCard
              title="Global Reach, Local Heart"
              className="bg-white-50"
              classNameTwo="!text-black-500"
              description="We understand the lifestyle dreams of our international clients while staying rooted in Mallorca's unique culture."
              image={
                <MoonsSvg className="z-[1] absolute left-[0px] right-[0px] top-[0px] bottom-[0px] m-auto" />
              }
            />
            <WhyTwoCard
              title="Personalized Service"
              className="bg-gold-500"
              description="We understand the lifestyle dreams of our international clients while staying rooted in Mallorca's unique culture."
              image={
                <FlowerSvg className="z-[1] absolute left-[0px] right-[0px] top-[0px] bottom-[0px] m-auto" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryForthSectionAnimated;
