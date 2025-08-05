import Image from "next/image";

const HomeSixthSection = () => {
  return (
    <div className="w-full bg-white-50 overflow-hidden relative">
      <div className="z-[1] h-[629px] w-full absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="/images/backThree.jpg"
          alt="background"
          width={1000}
          height={1000}
          objectFit="cover"
          objectPosition="top center"
          className="w-full h-full object-cover z-[1]"
        />
      </div>
      <div className="z-[2] h-[629px] w-full px-4 bg-black-500/50 overflow-hidden relative  ">
        <div className="container h-[629px] mx-auto relative z-[2]">
          <div className="flex flex-col items-center justify-center h-full gap-[16px] ">
            <h2 className="font-satoshi text-center  font-[400] text-[32px] leading-[40px] lg:text-[46px] lg:leading-[69px] text-white-600">
              Let&apos;s Make Your Next Stay Remarkable
            </h2>
            <p className="font-helvetica text-center lg:w-[50%] font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-600">
              Whether for a long weekend or a long season, we help you find not
              just a place to stay — but a space to belong.
            </p>
            <div className="flex flex-col lg:flex-row gap-[16px] mt-[16px] w-full items-center justify-center">
              <button className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] ">
                Book a Consultation
              </button>
              <button className="bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] ">
                Browse Villas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSixthSection;
