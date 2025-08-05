import HistoryBackSvg from "../Assests/Svg/HistoryBackSvg";

const HistoryFirstSection = () => {
  return (
    <div className="h-full max-h-screen w-full bg-[#fff] overflow-hidden bg-black-500">
      <div className="container h-full mx-auto px-4 relative">
        <div className="h-full w-full flex flex-row items-center justify-center">
          <HistoryBackSvg className="z-[1] absolute left-[-100%] lg:left-[0px] h-full" />
          <div className="w-[20%] lg:w-[50%] h-full"></div>
          <div className="z-[2] relative w-[80%] lg:w-[50%] h-full flex flex-col items-start justify-center">
            <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
              Our History
            </p>
            <h1 className="font-helvetica_compressed font-[500] text-[32px] leading-[32px] lg:text-[56px] lg:leading-[56px] text-white-500">
              From Humble Beginnings to Real Estate Excellence
            </h1>
            <p className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
              Founded in 2009, Mallorca Web began as a boutique real estate
              service with a deep love for the island of Mallorca and a simple
              mission: to connect people with the Mediterranean lifestyle
              they&apos;ve always dreamed of. From picturesque coastal villas to
              charming inland fincas, we&apos;ve helped clients across the world
              discover the magic of calling Mallorca home.
            </p>
            <div className="absolute bottom-[34px] lg:bottom-[78px] flex flex-row gap-[16px] w-full items-center justify-end">
              <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-[#E3E3E3] uppercase ">
                Scroll down
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryFirstSection;
