"use client";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
// Import only the loader function, not the actual data
import { getCountryCodes } from "../../utils/countryCodesLoader";

// Dynamically import SVG components with loading fallbacks
const EmailSvg = dynamic(() => import("../Assests/Svg/EmailSvg"), {
  loading: () => <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>,
  ssr: false
});
const FacebookSvg = dynamic(() => import("../Assests/Svg/FacebookSvg"), {
  loading: () => <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>,
  ssr: false
});
const InstagramSvg = dynamic(() => import("../Assests/Svg/InstagramSvg"), {
  loading: () => <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>,
  ssr: false
});
const LocationSvg = dynamic(() => import("../Assests/Svg/LocationSvg"), {
  loading: () => <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>,
  ssr: false
});
const PhoneSvg = dynamic(() => import("../Assests/Svg/PhoneSvg"), {
  loading: () => <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>,
  ssr: false
});
const TwitterSvg = dynamic(() => import("../Assests/Svg/TwitterSvg"), {
  loading: () => <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>,
  ssr: false
});
const ContactCard = dynamic(() => import("../atoms/ContactCard"), {
  loading: () => <div className="w-full h-20 bg-gray-100 animate-pulse rounded-md"></div>
});

const ContactSecondSection = () => {
  const [showCountryCodes, setShowCountryCodes] = useState(false);
  const [showInquiryTypes, setShowInquiryTypes] = useState(false);
  const [countryCodes, setCountryCodes] = useState<Array<{code: string, dialCode: string, flag: string}>>([]);
  const [selectedCountry, setSelectedCountry] = useState<{code: string, dialCode: string, flag: string}>({ code: "ES", dialCode: "+34", flag: "🇪🇸" }); // Default to Spain
  const [phoneNumber, setPhoneNumber] = useState("");

  const countryCodeRef = useRef<HTMLDivElement>(null);
  const inquiryTypeRef = useRef<HTMLDivElement>(null);

  // Load country codes dynamically
  useEffect(() => {
    const loadCountryCodes = async () => {
      const codes = await getCountryCodes();
      setCountryCodes(codes);
      // Set selected country after codes are loaded
      if (codes.length > 0) {
        // Find Spain (ES) as default or use first item
        const spain = codes.find(country => country.code === "ES");
        setSelectedCountry(spain || codes[0]);
      }
    };
    
    loadCountryCodes();
  }, []);

  // Handle clicks outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close country code dropdown when clicking outside
      if (
        countryCodeRef.current &&
        !countryCodeRef.current.contains(event.target as Node)
      ) {
        setShowCountryCodes(false);
      }

      // Close inquiry type dropdown when clicking outside
      if (
        inquiryTypeRef.current &&
        !inquiryTypeRef.current.contains(event.target as Node)
      ) {
        setShowInquiryTypes(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [selectedInquiry, setSelectedInquiry] = useState("");

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

  return (
    <div className="w-full bg-white-50">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full flex flex-col-reverse lg:flex-row items-start justify-center pt-[80px] pb-[200px] gap-[69px]">
          <div className="max-w-[503px] w-full flex flex-col gap-[24px] ">
            <div className="flex flex-col gap-[40px] ">
              <ContactCard
                title="Our Office Location"
                description="Mallorca Web - Real Estate Experts Carrer de l'Arquitecte
              Bennàssar, 28 07013 Palma de Mallorca, Spain"
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
            <div className="flex flex-col gap-[16px] ">
              <div className="flex flex-col">
                <p className="font-helvetica_compressed font-[500] text-black-500 text-[18px] leading-[27px] lg:text-[22px] lg:leading-[33px] ">
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
              <p className="font-helvetica font-[300] text-black-500 text-[10px] leading-[15px] lg:text-[14px] lg:leading-[21px] ">
                Prefer to meet in person? Schedule a private consultation in our
                Palma office or request a home visit anywhere on the island.
              </p>
              <div className="flex flex-row gap-[21px] ">
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

          <form className="max-w-[668px] w-full border-gold-500 rounded-[8px] border-[1px] p-[20px] lg:p-[40px] ">
            <div className="flex flex-col gap-[24px] ">
              <div className="flex flex-col gap-[8px] ">
                <p className="font-satoshi font-[400] text-black-500 text-[24px] leading-[45px] lg:text-[38px] lg:leading-[57px] ">
                  Send Us a Message
                </p>
                <p className="w-[70%] font-helvetica font-[300] text-black-300 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] ">
                  We&apos;re here to help. Fill out the form below, and a
                  dedicated advisor will get back to you within 24 business
                  hours.
                </p>
              </div>
              <div className="flex flex-col gap-[14px] lg:gap-[32px] ">
                <div className="flex flex-col lg:flex-row gap-[14px] lg:gap-[24px] ">
                  <div className="flex flex-col gap-[14px] w-full lg:w-[50%]">
                    <label
                      htmlFor="first-name"
                      className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] "
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="Enter first name"
                      className="outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100"
                    />
                  </div>
                  <div className="flex flex-col gap-[14px] w-full lg:w-[50%]">
                    <label
                      htmlFor="last-name"
                      className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] "
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Enter last name"
                      className="outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[14px] ">
                  <label
                    htmlFor="email"
                    className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] "
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@email.com"
                    className="outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100"
                  />
                </div>

                <div className="flex flex-col gap-[14px] lg:flex-row lg:gap-[24px] w-full ">
                  <div className="flex flex-col gap-[14px] w-full lg:w-[50%]">
                    <label
                      htmlFor="phone-number"
                      className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] "
                    >
                      Phone Number
                    </label>
                    <div className="flex flex-row w-full">
                      <div className="relative" ref={countryCodeRef}>
                        <div
                          onClick={() => setShowCountryCodes(!showCountryCodes)}
                          className="flex items-center gap-[6px] cursor-pointer outline-none border-[1px] border-r-0 rounded-l-[4px] font-helvetica font-[300] border-black-200 px-[10px] py-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px]"
                        >
                          <span>{selectedCountry.flag}</span>
                          <span>{selectedCountry.dialCode}</span>
                          <span className="ml-[2px]">
                            <svg
                              width="10"
                              height="6"
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L5 5L9 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        {showCountryCodes && (
                          <div className="absolute bg-white-50 top-full left-0 z-10 mt-[2px] w-[160px] max-h-[240px] overflow-y-auto bg-white shadow-lg border border-black-200 rounded-[4px]">
                            {/* Only render up to 20 countries at a time */}
                            {countryCodes.slice(0, 20).map((country) => (
                              <div
                                key={country.code}
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setShowCountryCodes(false);
                                }}
                                className="flex items-center gap-[8px] p-[10px] hover:bg-black-50 cursor-pointer text-[14px] lg:text-[16px]"
                              >
                                <span>{country.flag}</span>
                                <span>{country.code}</span>
                                <span>{country.dialCode}</span>
                              </div>
                            ))}
                            {countryCodes.length > 20 && (
                              <div className="p-[10px] text-center text-sm text-black-300">
                                + {countryCodes.length - 20} more countries
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <input
                        id="phone-number"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                        className="outline-none w-full border-[1px] rounded-r-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[14px] w-full lg:w-[50%]">
                    <label
                      htmlFor="inquiry-type"
                      className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] "
                    >
                      What is your inquiry about?
                    </label>
                    <div className="relative" ref={inquiryTypeRef}>
                      <div
                        onClick={() => setShowInquiryTypes(!showInquiryTypes)}
                        className="flex items-center justify-between cursor-pointer outline-none border-[1px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] placeholder:text-black-100"
                      >
                        {selectedInquiry || "Select inquiry type"}
                        <span>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      {showInquiryTypes && (
                        <div className="absolute bg-white-50 top-full left-0 right-0 z-10 mt-[2px] max-h-[240px] overflow-y-auto bg-white shadow-lg border border-black-200 rounded-[4px]">
                          {inquiryTypes.map((inquiry) => (
                            <div
                              key={inquiry}
                              onClick={() => {
                                setSelectedInquiry(inquiry);
                                setShowInquiryTypes(false);
                              }}
                              className="p-[10px] hover:bg-black-50 cursor-pointer text-[14px] lg:text-[16px]"
                            >
                              {inquiry}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[14px] ">
                  <label
                    htmlFor="message"
                    className="font-helvetica font-[300] text-black-500 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] "
                  >
                    Message <span className="text-gold-500">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Please describe your needs or questions here..."
                    className="outline-none border-[1px] max-h-[151px] h-[151px] rounded-[4px] font-helvetica font-[300] border-black-200 p-[10px] text-black-500 text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] placeholder:text-black-100"
                  />
                </div>

                <p className="font-helvetica font-[300] text-black-500 text-[12px] leading-[17px] lg:text-[16px] lg:leading-[24px]">
                  By submitting this form, you agree that Mallorca Web may store
                  and process your personal data for the purpose of responding
                  to your inquiry and providing property-related services.
                  <br />
                  We respect your privacy and will never share your information
                  without your consent. For more details, please review our
                  Privacy Policy.
                </p>

                <button className="mx-auto bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full lg:max-w-[267px] py-[10px] rounded-[4px] ">
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

export default ContactSecondSection;
