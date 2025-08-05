import WeCard from "../atoms/WeCard";

const PropertySecondSection = () => {
  return (
    <div className=" w-full">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full relative py-[80px] flex flex-col gap-[40px] items-center justify-center">
          <h3 className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-black-500">
            Why Sell With Mallorca Web?
          </h3>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <WeCard
              image="/images/sellOne.jpg"
              title="Global Reach"
              description="Tap into a vast international network with buyers from around the world actively searching through our platforms."
            />
            <WeCard
              image="/images/sellTwo.jpg"
              title="Tailored Valuation"
              description="Our property experts provide a professional, data-backed valuation based on current market trends and local insights."
            />
            <WeCard
              image="/images/sellThree.jpg"
              title="Premium Presentation"
              description="From professional photos to compelling listings, we showcase your property in its best light—online, offline, and on social media."
            />
            <WeCard
              image="/images/sellFour.jpg"
              title="Trusted Experts"
              description="Our real estate advisors offer local expertise and global perspective, guiding you every step of the way with integrity and discretion."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySecondSection;
