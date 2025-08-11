"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HouseBackSvg from "../Assests/Svg/HouseBackSvg";
import MallorcaSvg from "../Assests/Svg/MallorcaSvg";
import WhyCard from "../atoms/WhyCard";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeSecondSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const houseBackRef = useRef<HTMLDivElement>(null);
  const mallorcaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([badgeRef.current, titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 60,
      });

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 80,
        scale: 0.9,
      });

      gsap.set(mallorcaRef.current, {
        opacity: 0,
        scale: 0.8,
        x: "-100%",
      });

      gsap.set(houseBackRef.current, {
        opacity: 0,
        scale: 0.8,
        x: "100%",
      });

      // Create timeline for section entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none play reverse",
        },
      });

      // Animate background elements first
      tl.to([houseBackRef.current, mallorcaRef.current], {
        opacity: 0.6,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.2,
      })
        // Then animate text content
        .to(
          badgeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=1"
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
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
        );

      // Animate cards with stagger
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          end: "bottom 60%",
          // toggleActions: "play none none reverse",
          scrub: 1,
        },
      });

      // Special animation for the third card (full-width card)
      const thirdCard = cardsRef.current?.children[2] as HTMLElement;
      if (thirdCard) {
        // Set initial state for width expansion
        gsap.set(thirdCard, {
          opacity: 0,
          y: 80,
          scale: 0.8,
          width: "20%", // Start narrow
        });

        // Create timeline for width expansion + parallax
        gsap
          .timeline({
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              end: "bottom 60%",
              scrub: 1, // Parallax effect tied to scroll
            },
          })
          .to(thirdCard, {
            opacity: 1,
            y: 0,
            scale: 1,
            width: "100%", // Expand to full width
            duration: 2,
            ease: "power2.out",
          })
          .to(
            thirdCard,
            {
              // y: -20, // Subtle parallax movement
              duration: 1,
              ease: "none",
            },
            "-=1"
          );
      }

      // Parallax effect for background SVGs
      gsap.to(houseBackRef.current, {
        x: -50,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(mallorcaRef.current, {
        x: 30,
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Hover effects for cards
      // const cards = cardsRef.current?.children;
      // if (cards) {
      //   Array.from(cards).forEach((card) => {
      //     const cardElement = card as HTMLElement;

      //     cardElement.addEventListener("mouseenter", () => {
      //       gsap.to(cardElement, {
      //         scale: 1.02,
      //         y: -5,
      //         duration: 0.3,
      //         ease: "power2.out",
      //       });
      //     });

      //     cardElement.addEventListener("mouseleave", () => {
      //       gsap.to(cardElement, {
      //         scale: 1,
      //         y: 0,
      //         duration: 0.3,
      //         ease: "power2.out",
      //       });
      //     });
      //   });
      // }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-white-50 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[40px] pb-[50px] relative">
        {/* Background SVGs */}
        <div ref={houseBackRef}>
          <HouseBackSvg
            className="z-[1] absolute top-[0px] -left-[180px] inset-0"
            color={"#F9F9F9"}
          />
        </div>
        <div ref={mallorcaRef}>
          <MallorcaSvg className="z-[1] absolute top-[50px] right-[0px]" />
        </div>

        {/* Badge */}
        <div
          ref={badgeRef}
          className="z-[2] p-[10px] bg-gold-50 w-fit relative"
        >
          <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500">
            Why Choose Us
          </p>
        </div>

        {/* Title and Description */}
        <div className="z-[2] flex flex-col gap-[8px] mt-[32px] relative">
          <h5
            ref={titleRef}
            className="font-satoshi font-[300] text-[20px] leading-[30px] lg:text-[26px] lg:leading-[39px] text-black-500"
          >
            Crafted for Those Who Expect More
          </h5>
          <p
            ref={descriptionRef}
            className="font-helvetica lg:w-[90%] font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-500"
          >
            We don&apos;t just offer properties &mdash; we curate a lifestyle.
            Every villa, every service, and every moment is designed to reflect
            your standards, your rhythm, and your definition of luxury. With
            privacy as our promise and beauty in every detail, we turn rare
            spaces into unforgettable stays.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="z-[2] mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-[16px] relative"
        >
          <WhyCard
            title="Luxury, Personally Composed"
            description="Every element, orchestrated to you — from scent to silence. Where no detail is too small, and nothing is ever standard."
            image="/images/pool.jpg"
            className=""
          />
          <WhyCard
            title="Understated Grandeur"
            description="True elegance doesn't ask for attention — it holds it.
            Our homes are built not to impress, but to move you."
            image="/images/listing.jpg"
            className=""
          />
          <WhyCard
            title="Discretion as a Standard"
            description="Invisible service. Absolute privacy. For those who move quietly — but live fully."
            image="/images/out.jpg"
            className="lg:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSectionAnimated;
