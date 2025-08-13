"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WeCard from "../atoms/WeCard";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HistoryThirdSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current], {
        opacity: 0,
        y: 60,
      });

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 80,
        scale: 0.9,
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
              scrub: 2,
            },
          }
        );
      }

      // Cards animation with stagger
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 2,
        },
      });

      // Card hover effects
      const cards = cardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;

          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(cardElement, {
              y: 0,
              scale: 1,
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
    <div ref={sectionRef} className="w-full">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full relative py-[80px] flex flex-col gap-[40px] items-center justify-center">
          <h3
            ref={titleRef}
            className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-black-500"
          >
            What We Do
          </h3>
          <div
            ref={cardsRef}
            className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-[24px]"
          >
            <WeCard
              image="/images/weOne.jpg"
              title="Residential Sales & Rentals"
              description="Handpicked villas, fincas, townhouses, and apartments across Mallorca's most desirable locations."
            />
            <WeCard
              image="/images/weTwo.jpg"
              title="Luxury & Investment Properties"
              description="High-value opportunities and discreet off-market listings tailored for investors and private buyers."
            />
            <WeCard
              image="/images/weThree.jpg"
              title="Relocation & Concierge Services"
              description="We support your move with legal advice, financing options, school recommendations, and more—making relocation seamless."
            />
            <WeCard
              image="/images/weFour.jpg"
              title="Digital Viewing Experience"
              description="Our online platform offers virtual tours, high-quality visuals, and real-time consultations, so you can explore Mallorca from anywhere in the world."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryThirdSectionAnimated;
