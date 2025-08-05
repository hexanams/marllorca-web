import HistoryBackTwo from "../Assests/Svg/HistoryBackTwo";

const HistorySecondSection = () => {
  return (
    <div className="h-full w-full">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full flex flex-row items-center justify-center relative">
          <HistoryBackTwo className="max-lg:hidden z-[1] absolute top-[0px] right-[0px] h-full" />
          <div className="z-[2] relative w-[80%] lg:w-[50%] h-full flex flex-col items-start justify-center">
            <p className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-black-500">
              Who We Are
            </p>
            <p className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-300">
              We&apos;re a dedicated team of real estate professionals, island
              natives, and relocation specialists who know Mallorca inside out.
              Our multicultural team speaks multiple languages and understands
              the unique needs of both local and international clients.<br></br>
              <br></br>Our deep roots in the community and years of experience
              in the market allow us to offer curated listings, personalized
              support, and trustworthy guidance every step of the way.
            </p>
            <button className="mt-[48px] bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] ">
              Explore collections
            </button>
          </div>
          <div className="w-[20%] lg:w-[50%] h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HistorySecondSection;
