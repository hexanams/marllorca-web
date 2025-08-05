import ContactBackSvg from "../Assests/Svg/ContactBackSvg";
import Image from "next/image";

const ContactFirstSection = () => {
  return (
    <div className="h-full max-h-screen w-full bg-[#fff] overflow-hidden bg-black-500">
      <div className="container h-full mx-auto px-4 relative">
        <div className="h-full w-full flex flex-row items-center justify-center">
          {/* <ContactBackSvg className="z-[1] absolute left-[-90%] lg:left-[0px] h-full" /> */}
          <div className="z-[1] w-[45%] h-full absolute left-[-90%] lg:left-[0px]">
            <Image
              src="/ContactBack.svg"
              alt="contact"
              width={1000}
              height={1000}
              priority={true}
              objectFit="cover"
              objectPosition="top center"
              className="  h-full object-cover"
            />
          </div>
          <div className="w-[20%] lg:w-[50%] h-full"></div>
          <div className="z-[2] relative w-[80%] lg:w-[50%] h-full flex flex-col items-start justify-center">
            <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
              Contact Mallorca Web
            </p>
            <h1 className="font-helvetica_compressed font-[500] text-[32px] leading-[32px] lg:text-[56px] lg:leading-[56px] text-white-500">
              We&apos;re more than a real estate company—we&apos;re your local
              guide to property success in Mallorca.
            </h1>
            <p className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
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

export default ContactFirstSection;
