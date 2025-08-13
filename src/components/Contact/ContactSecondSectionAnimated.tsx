"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { countryCodes } from "../../utils/constants";
import EmailSvg from "../Assests/Svg/EmailSvg";
import PhoneSvg from "../Assests/Svg/PhoneSvg";
import FacebookSvg from "../Assests/Svg/FacebookSvg";
import InstagramSvg from "../Assests/Svg/InstagramSvg";
import LocationSvg from "../Assests/Svg/LocationSvg";
import TwitterSvg from "../Assests/Svg/TwitterSvg";
import ContactCard from "../atoms/ContactCard";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactSecondSectionAnimated = () => {
  const [showCountryCodes, setShowCountryCodes] = useState(false);
  const [showInquiryTypes, setShowInquiryTypes] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "ES",
    dialCode: "+34",
    flag: "🇪🇸",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState("");

  const countryCodeRef = useRef<HTMLDivElement>(null);
  const inquiryTypeRef = useRef<HTMLDivElement>(null);
  
  // Animation refs
  const sectionRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);
  const officeHoursRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const formTitleRef = useRef<HTMLParagraphElement>(null);
  const formFieldsRef = useRef<HTMLDivElement>(null);

  const inquiryTypes = [
    "Property Purchase",
    "Property Rental",
    "Property Sale",
    "Investment Opportunities",
    "Legal Services",
    "Property Management",
    "General Inquiry",
    "Other",
  ];

  // Handle outside clicks for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryCodeRef.current &&
        !countryCodeRef.current.contains(event.target as Node)
      ) {
        setShowCountryCodes(false);
      }
      if (
        inquiryTypeRef.current &&
        !inquiryTypeRef.current.contains(event.target as Node)
      ) {
        setShowInquiryTypes(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(contactCardsRef.current?.children || [], {
        opacity: 0,
        y: 60,
        scale: 0.9,
      });

      gsap.set([officeHoursRef.current, socialLinksRef.current], {
        opacity: 0,
        y: 40,
      });

      gsap.set(formRef.current, {
        opacity: 0,
        x: 50,
        scale: 0.95,
      });

      gsap.set(formTitleRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(formFieldsRef.current?.children || [], {
        opacity: 0,
        y: 20,
      });

      // Contact cards animation
      gsap.to(contactCardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactCardsRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Office hours animation
      gsap.to(officeHoursRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: officeHoursRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 2,
        },
      });

      // Social links animation
      gsap.to(socialLinksRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      });

      // Form animation
      gsap.to(formRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
      });

      // Form title animation
      gsap.to(formTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formTitleRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });

      // Form fields staggered animation
      gsap.to(formFieldsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formFieldsRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 2,
        },
      });

      // Card hover effects
      const cards = contactCardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;

          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              y: -5,
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

      // Social links hover effects
      const socialLinks = socialLinksRef.current?.children;
      if (socialLinks) {
        Array.from(socialLinks).forEach((link) => {
          const linkElement = link as HTMLElement;

          linkElement.addEventListener("mouseenter", () => {
            gsap.to(linkElement, {
              scale: 1.1,
              rotation: 5,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          linkElement.addEventListener("mouseleave", () => {
            gsap.to(linkElement, {
              scale: 1,
              rotation: 0,
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
    <div ref={sectionRef} className="w-full bg-white-50">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full flex flex-col-reverse lg:flex-row items-start justify-center pt-[80px] pb-[200px] gap-[69px]">
          <div className="max-w-[503px] w-full flex flex-col gap-[24px]">
            <div ref={contactCardsRef} className="flex flex-col gap-[40px]">
              <ContactCard
                title="Our Office Location"
                description="Mallorca Web - Real Estate Experts Carrer de l'Arquitecte Bennàssar, 28 07013 Palma de Mallorca, Spain"
                icon={<LocationSvg />}
              />
              <ContactCard
                title="Email"
                description="contact@mallorcaweb.com"
                icon={<EmailSvg />}
              />
              <ContactCard
                title="Phone"
                description="+34 971 000 123"
                icon={<PhoneSvg />}
              />
            </div>
            
            <div className="flex flex-col gap-[16px]">
              <div ref={officeHoursRef} className="flex flex-col">
                <p className="font-helvetica_compressed font-[500] text-black-500 text-[18px] leading-[27px] lg:text-[22px] lg:leading-[33px]">
                  🕘 Office Hours:
                </p>
                <p className="font-satoshi font-[400] text-[12px] leading-[17px] lg:text-[16px] lg:leading-[24px] text-black-500">
                  Mon–Fri: 9:00 AM – 6:00 PM
                </p>
                <p className="font-satoshi font-[400] text-[12px] leading-[17px] lg:text-[16px] lg:leading-[24px] text-black-500">
                  Saturday: 10:00 AM – 2:00 PM
                </p>
                <p className="font-satoshi font-[400] text-[12px] leading-[17px] lg:text-[16px] lg:leading-[24px] text-black-500">
                  Sunday: Closed (Appointments Only)
                </p>
              </div>
              
              <p className="font-helvetica font-[300] text-black-500 text-[10px] leading-[15px] lg:text-[14px] lg:leading-[21px]">
                Prefer to meet in person? Schedule a private consultation in our
                Palma office or request a home visit anywhere on the island.
              </p>
              
              <div ref={socialLinksRef} className="flex flex-row gap-[21px]">
                <div className="flex items-center justify-center w-[36px] h-[36px] bg-black-500 rounded-full cursor-pointer">
                  <FacebookSvg />
                </div>
                <div className="flex items-center justify-center w-[36px] h-[36px] bg-black-500 rounded-full cursor-pointer">
                  <TwitterSvg />
                </div>
                <div className="flex items-center justify-center w-[36px] h-[36px] bg-black-500 rounded-full cursor-pointer">
                  <InstagramSvg />
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} className="max-w-[668px] w-full border-gold-500 rounded-[8px] border-[1px] p-[20px] lg:p-[40px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <p ref={formTitleRef} className="font-satoshi font-[400] text-black-500 text-[24px] leading-[45px] lg:text-[38px] lg:leading-[57px]">
                  Send Us a Message
                </p>
                <p className="w-[70%] font-helvetica font-[300] text-black-300 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px]">
                  We&apos;re here to help. Fill out the form below, and a
                  dedicated advisor will get back to you within 24 business
                  hours.
                </p>
              </div>
              
              <div ref={formFieldsRef} className="flex flex-col gap-[14px] lg:gap-[32px]">
                <div className="flex flex-col lg:flex-row gap-[14px] lg:gap-[24px]">
                  <div className="flex flex-col gap-[14px] w-full lg:w-[50%]">
                    <label
                      htmlFor="first-name"
                      className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px]"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="Enter first name"
                      className="outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100 focus:border-gold-500 transition-colors duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-[14px] w-full lg:w-[50%]">
                    <label
                      htmlFor="last-name"
                      className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px]"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Enter last name"
                      className="outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100 focus:border-gold-500 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[14px]">
                  <label
                    htmlFor="email"
                    className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@email.com"
                    className="outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100 focus:border-gold-500 transition-colors duration-300"
                  />
                </div>

                <div className="flex flex-col gap-[14px]">
                  <label className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your property needs..."
                    className="outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100 focus:border-gold-500 transition-colors duration-300 resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full py-[12px] rounded-[4px] hover:bg-gold-600 transition-colors duration-300 hover:scale-105 transform transition-transform"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSecondSectionAnimated;
