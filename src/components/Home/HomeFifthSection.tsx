import Image from "next/image";
import HouseBackSvg from "../Assests/Svg/HouseBackSvg";

const HomeFifthSection = () => {
  return (
    <div className="w-full bg-white-50 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[80px] pb-[80px] relative ">
        <HouseBackSvg
          className="z-[1] absolute top-[-20px] -left-[120px]"
          color={"#F9F9F9"}
        />
        <div className="z-[2] h-[635px] w-full bg-[#F5F5F5] rounded-[16px] overflow-hidden relative  ">
          <Image
            src="/images/backTwo.jpg"
            alt="background"
            width={1000}
            height={1000}
            objectFit="cover"
            className="w-full h-full object-cover"
          />
          <div className=" absolute bg-white-900 max-lg:left-[0px] max-lg:mx-auto right-[0px] lg:right-[125px] bottom-[0px] w-full max-w-[555px] h-fit p-[32px] flex flex-col gap-[8px] rounded-tl-[8px] rounded-tr-[8px]">
            <h5 className="font-satoshi font-[400] text-[24px] leading-[36px] lg:text-[32px] lg:leading-[48px] text-black-900">
              Built on Taste, Trust, and Tranquility
            </h5>
            <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-900">
              This is more than real estate.<br></br>
              It&apos;s about creating sanctuaries for living well.<br></br>
              With decades of experience in design, hospitality, and service, we
              deliver more than spaces — we deliver peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFifthSection;
