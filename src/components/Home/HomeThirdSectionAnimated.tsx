"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HouseBackSvg from "../Assests/Svg/HouseBackSvg";
import ListingCard from "../atoms/ListingCard";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeThirdSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const houseBackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup - exclude titleRef since it has its own animation
      gsap.set(
        [subtitleRef.current, descriptionRef.current, buttonRef.current],
        {
          opacity: 0,
          y: 80,
        }
      );

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 100,
        scale: 0.8,
      });

      gsap.set(houseBackRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
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

      // Title animation with split text effect
      const titleElements = titleRef.current?.children;

      if (titleElements) {
        gsap.fromTo(
          titleElements,
          {
            opacity: 0,
            y: 100,
            skewY: 7,
          },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Content text animation
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Advanced text reveal animation
      const splitTitle = subtitleRef.current?.textContent?.split(" ") || [];
      if (subtitleRef.current && splitTitle.length > 0) {
        subtitleRef.current.innerHTML = splitTitle
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
          )
          .join(" ");

        const subtitleWords = subtitleRef.current.querySelectorAll("span span");

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
              trigger: subtitleRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Content timeline
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      contentTl
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Cards animation with advanced stagger
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: {
          amount: 0.8,
          from: "start",
          ease: "power2.out",
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax effects
      gsap.to(houseBackRef.current, {
        y: -50,
        x: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Card hover effects
      const cards = cardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card, index) => {
          const cardElement = card as HTMLElement;

          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              scale: 1.05,
              y: -10,
              duration: 0.4,
              ease: "power2.out",
            });

            // Animate other cards slightly down
            Array.from(cards).forEach((otherCard, otherIndex) => {
              if (otherIndex !== index) {
                gsap.to(otherCard, {
                  scale: 0.98,
                  opacity: 0.7,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-black-500 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[80px] pb-[80px] relative">
        {/* Background SVG */}
        <div ref={houseBackRef}>
          <HouseBackSvg
            className="z-[1] absolute top-[0px] -right-[120px]"
            color={"#1D1D1D"}
          />
        </div>

        {/* Animated Title */}
        <div
          ref={titleRef}
          className="z-[2] flex flex-col items-center justify-center relative"
        >
          <h3 className="font-satoshi font-[300] text-[34px] leading-[52px] lg:text-[56px] lg:leading-[84px] text-gold-500">
            FEATURED
          </h3>
          <h3 className="ml-[169px] font-satoshi font-[300] text-[34px] leading-[52px] lg:text-[56px] lg:leading-[84px] text-gold-500">
            PROPERTIES
          </h3>
        </div>

        {/* Content Section */}
        <div className="z-[2] flex flex-col lg:flex-row gap-[10px] items-start lg:items-center justify-between mt-[29px] relative">
          <div className="flex flex-col gap-[8px] lg:w-[60%]">
            <h5
              ref={subtitleRef}
              className="font-satoshi font-[300] text-[20px] leading-[30px] lg:text-[26px] lg:leading-[39px] text-black-50"
            >
              A Selection as Rare as Your Taste
            </h5>
            <p
              ref={descriptionRef}
              className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-50"
            >
              Each property in our collection is handpicked for its soul, style,
              and setting. From secluded villas with panoramic views to modern
              sanctuaries wrapped in nature — every space is a story waiting to
              be lived. This is not about more choices. It&apos;s about the
              right choice.
            </p>
          </div>
          <button
            ref={buttonRef}
            className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] hover:bg-gold-600 transition-colors duration-300"
          >
            View All Properties
          </button>
        </div>

        {/* Animated Cards */}
        <div
          ref={cardsRef}
          className="z-[2] grid grid-cols-1 lg:grid-cols-3 gap-[16px] mt-[50px] relative"
        >
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyOne.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyTwo.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyThree.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyFour.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyFive.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertySix.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeThirdSectionAnimated;
