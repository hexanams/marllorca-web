import PropertyBackSvg from "../Assests/Svg/PropertyBackSvg";

const PropertyFirstSection = () => {
  return (
    <div className="h-full max-h-screen w-full bg-[#fff] overflow-hidden bg-black-500">
      <div className="container h-full mx-auto px-4 relative">
        <div className="h-full w-full flex flex-row items-center justify-center">
          <PropertyBackSvg className="z-[1] absolute left-[-100%] lg:left-[0px] h-full" />
          <div className="w-[20%] lg:w-[50%] h-full"></div>
          <div className="z-[2] relative w-[80%] lg:w-[50%] h-full flex flex-col items-start justify-center">
            <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
              Sell Your Property With Confidence
            </p>
            <h1 className="font-helvetica_compressed font-[500] text-[32px] leading-[32px] lg:text-[56px] lg:leading-[56px] text-white-500">
              Your Partner in Premium Real Estate Sales
            </h1>
            <p className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
              Whether you're planning to sell a villa, apartment, or a unique
              property, Mallorca Web offers personalized service and market
              expertise to ensure a seamless selling experience—from your first
              consultation to the final signature.
            </p>
            <button className="mt-[16px] bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] ">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFirstSection;
