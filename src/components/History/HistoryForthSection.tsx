import FanSvg from "../Assests/Svg/FanSvg";
import FlowerSvg from "../Assests/Svg/FlowerSvg";
import MoonsSvg from "../Assests/Svg/MoonsSvg";
import WhyTwoCard from "../atoms/WhyTwoCard";

const HistoryForthSection = () => {
  return (
    <div className="w-full bg-black-500">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full flex flex-col gap-[43px] items-start justify-center py-[80px]">
          <h3 className="lg:-ml-[70px] font-satoshi font-[400] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-white-500">
            Why Choose Mallorca Web?
          </h3>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <WhyTwoCard
              title="15+ Years of Local Experience"
              className="bg-gold-500"
              description="Deep knowledge of the island and the property landscape."
              image={
                <FanSvg className="z-[1] absolute left-[0px] right-[0px] top-[0px] bottom-[0px] m-auto" />
              }
            />
            <WhyTwoCard
              title="Global Reach, Local Heart"
              className="bg-white-50"
              classNameTwo="!text-black-500"
              description="We understand the lifestyle dreams of our international clients while staying rooted in Mallorca’s unique culture."
              image={
                <MoonsSvg className="z-[1] absolute left-[0px] right-[0px] top-[0px] bottom-[0px] m-auto" />
              }
            />
            <WhyTwoCard
              title="Global Reach, Local Heart"
              className="bg-gold-500"
              description="We understand the lifestyle dreams of our international clients while staying rooted in Mallorca’s unique culture."
              image={
                <FlowerSvg className="z-[1] absolute left-[0px] right-[0px] top-[0px] bottom-[0px] m-auto" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryForthSection;
