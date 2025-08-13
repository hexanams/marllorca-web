"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoneyHouseSvg from "../Assests/Svg/MoneyHouseSvg";
import PaperSvg from "../Assests/Svg/PaperSvg";
import PersonCheckSvg from "../Assests/Svg/PersonCheckSvg";
import PersonHeadsetSvg from "../Assests/Svg/PersonHeadsetSvg";
import SpeakerSvg from "../Assests/Svg/SpeakerSvg";
import WhatCard from "../atoms/WhatCard";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PropertyThirdSectionAnimated = () => {
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
        stagger: 0.2,
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
        <div className="h-full w-full relative py-[80px] flex flex-col gap-[42px] items-center justify-center">
          <h3
            ref={titleRef}
            className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-white-500"
          >
            What You Can Expect
          </h3>
          <div
            ref={cardsRef}
            className="w-full flex flex-wrap items-center justify-center gap-[24px]"
          >
            <WhatCard
              image={<PersonHeadsetSvg />}
              title="Personal Consultation"
              description="We start with a 1-on-1 meeting to understand your goals and timeline."
            />
            <WhatCard
              image={<MoneyHouseSvg />}
              title="Free Property Valuation"
              description="Receive an expert opinion on your property's market value with no obligation."
            />
            <WhatCard
              image={<SpeakerSvg />}
              title="Marketing & Promotion"
              description="Your property will be advertised via high-visibility channels, both locally and globally."
            />
            <WhatCard
              image={<PersonCheckSvg />}
              title="Buyer Screening & Viewings"
              description="We handle all inquiries, qualify interested buyers, and manage the viewing process."
            />
            <WhatCard
              image={<PaperSvg />}
              title="Negotiation & Closing"
              description="You'll receive professional support during negotiation, documentation, and the final sale."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyThirdSectionAnimated;
