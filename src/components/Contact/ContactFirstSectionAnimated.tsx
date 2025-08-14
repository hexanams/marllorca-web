"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactFirstSectionAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

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
        );

      // Content scroll animation
      gsap.fromTo(
        [descriptionRef.current, subtitleRef.current],
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
              src="/images/Contact.png"
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
              Contact Mallorca Web
            </p>
            <h1
              ref={titleRef}
              className="font-helvetica_compressed font-[500] text-[32px] leading-[32px] lg:text-[56px] lg:leading-[56px] text-white-500"
            >
              We&apos;re more than a real estate company—we&apos;re your local
              guide to property success in Mallorca.
            </h1>
            <p
              ref={descriptionRef}
              className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500"
            >
              Whether you&apos;re thinking of selling your home, buying your
              dream villa, or just want advice about the market, our team of
              experts is ready to assist you. Every message is important to us,
              and we&apos;ll respond promptly and personally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFirstSectionAnimated;
