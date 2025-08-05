"use client";
import Image from "next/image";
import BedSvg from "../Assests/Svg/BedSvg";
import ShowerSvg from "../Assests/Svg/ShowerSvg";
import GuestSvg from "../Assests/Svg/GuestSvg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ArrowTopRightSvg from "../Assests/Svg/ArrowTopRightSvg";

const ListingCard = ({
  title,
  description,
  image,
  price,
  bed,
  shower,
  guest,
}: {
  title: string;
  description: string;
  image: string;
  price: string;
  bed: string;
  shower: string;
  guest: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glassOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const showButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glassOverlay = glassOverlayRef.current;
    const content = contentRef.current;
    const showButton = showButtonRef.current;

    if (!card || !glassOverlay || !content || !showButton) return;

    // Set initial state
    gsap.set(glassOverlay, {
      opacity: 0,
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(255, 255, 255, 0)",
    });
    gsap.set(showButton, {
      opacity: 0,
      width: 0,
      y: 10,
    });

    // Create animation for hover
    const onEnter = () => {
      gsap.to(glassOverlay, {
        duration: 0.4,
        opacity: 1,
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        ease: "power2.out",
      });

      gsap.to(content, {
        y: -10,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(showButton, {
        opacity: 1,
        width: "100%",
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(glassOverlay, {
        duration: 0.4,
        opacity: 0,
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        ease: "power2.in",
      });

      gsap.to(content, {
        y: 0,
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to(showButton, {
        opacity: 0,
        width: "0%",
        y: 10,
        duration: 1,
        ease: "power3.out",
      });
    };

    // Add event listeners
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    // Cleanup
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="h-[498px] w-full rounded-[8px] overflow-hidden relative cursor-pointer"
    >
      <Image
        src={image}
        alt="Property"
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
      {/* Glass overlay effect */}
      <div
        ref={glassOverlayRef}
        className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center "
      >
        <button
          ref={showButtonRef}
          className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] flex items-center justify-center gap-[10px] overflow-hidden whitespace-nowrap"
        >
          See property
          <ArrowTopRightSvg />
        </button>
      </div>
      <div
        ref={contentRef}
        className="px-[28px] py-[53px] justify-end items-start flex flex-col gap-[8px] absolute top-[0px] left-[0px] right-[0px] bottom-[0px] inset-0 bg-linear-to-b from-[#71717100] to-[#0B0B0B]/80 z-9"
      >
        <p className="font-helvetica font-[300] text-[8px] leading-[12px] lg:text-[10px] lg:leading-[15px] text-white-50">
          {title}
        </p>
        <p className="font-satoshi font-[400] text-[18px] leading-[24px] lg:text-[22px] lg:leading-[33px] text-white-50">
          {description}
        </p>
        <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500">
          {price}
        </p>
        <div className="flex flex-row gap-[24px] items-center">
          <div className="flex flex-row items-center gap-[4px]">
            <BedSvg />
            <p className="font-helvetica font-[300] text-[10px] leading-[15px] lg:text-[12px] lg:leading-[18px] text-white-50">
              {bed} Bedroom
            </p>
          </div>
          <div className="w-[2px] h-[18px] bg-black-200 "></div>
          <div className="flex flex-row items-center gap-[4px]">
            <ShowerSvg />
            <p className="font-helvetica font-[300] text-[10px] leading-[15px] lg:text-[12px] lg:leading-[18px] text-white-50">
              {shower} Bathrooms
            </p>
          </div>
          <div className="w-[2px] h-[18px] bg-black-200 "></div>
          <div className="flex flex-row items-center gap-[4px]">
            <GuestSvg />
            <p className="font-helvetica font-[300] text-[10px] leading-[15px] lg:text-[12px] lg:leading-[18px] text-white-50">
              {guest} Guests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
