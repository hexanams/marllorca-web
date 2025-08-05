import Image from "next/image";
import MouseSvg from "../Assests/Svg/MouseSvg";

const HomeFirstSection = () => {
  return (
    <div className="h-full max-h-screen w-full bg-[#fff] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] right-[0px] bottom-[0px] inset-0 overflow-hidden bg-black">
        <Image
          src="/images/back.jpg"
          alt=""
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute top-[0px] left-[0px] right-[0px] bottom-[0px] inset-0 bg-linear-to-b from-[#71717100] to-[#0B0B0B]"></div>
      </div>

      <div className="relative z-10 flex h-full">
        <div className="container h-full !mx-auto px-4">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="font-satoshi font-[300] text-[32px] leading-[46px] lg:text-[68px] lg:leading-[102px] text-white-500 text-center lg:max-w-[75%]">
              Bespoke Escapes Crafted for the Exceptional Few
            </h1>
            <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-600 text-center w-full lg:max-w-[75%] mt-[16px] ">
              Discover our curated collection of handpicked villas, estates, and
              residences in the world&apos;s most iconic destinations. From
              serene coastlines to dramatic hillsides, your perfect getaway
              awaits.
            </p>

            <div className="flex flex-col lg:flex-row gap-[16px] mt-[40px] w-full items-center justify-center">
              <button className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] ">
                Explore Collection
              </button>
              <button className="bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] ">
                Learn More About Us
              </button>
            </div>
            <div className="absolute bottom-[34px] lg:bottom-[78px] flex flex-row gap-[16px] w-full items-center justify-center">
              <MouseSvg />
              <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-[#E3E3E3] ">
                Scroll down
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstSection;
