import WeCard from "../atoms/WeCard";

const HistoryThirdSection = () => {
  return (
    <div className=" w-full">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full relative py-[80px] flex flex-col gap-[40px] items-center justify-center">
          <h3 className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-black-500">
            What We Do
          </h3>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <WeCard
              image="/images/weOne.jpg"
              title="Residential Sales & Rentals"
              description="Handpicked villas, fincas, townhouses, and apartments across Mallorca’s most desirable locations."
            />
            <WeCard
              image="/images/weTwo.jpg"
              title="Luxury & Investment Properties"
              description="High-value opportunities and discreet off-market listings tailored for investors and private buyers."
            />
            <WeCard
              image="/images/weThree.jpg"
              title="Relocation & Concierge Services"
              description="We support your move with legal advice, financing options, school recommendations, and more—making relocation seamless."
            />
            <WeCard
              image="/images/weFour.jpg"
              title="Digital Viewing Experience"
              description="Our online platform offers virtual tours, high-quality visuals, and real-time consultations, so you can explore Mallorca from anywhere in the world."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryThirdSection;
