import Image from "next/image";
import HouseBackSvg from "../Assests/Svg/HouseBackSvg";
import FounderCard from "../atoms/FounderCard";
import MallorcaSvg from "../Assests/Svg/MallorcaSvg";

const HomeForthSection = () => {
  return (
    <div className=" w-full bg-white-500 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[80px] pb-[80px] relative ">
        {/* first section */}
        <div className="flex flex-col lg:flex-row max-lg:gap-[32px] w-full relative">
          <HouseBackSvg
            className="z-[1] absolute -top-[200px] -left-[120px]"
            color={"#F5F5F5"}
          />
          <MallorcaSvg className="z-[1] absolute -bottom-[20px] left-[0px] " />
          <div className="z-[2] w-full lg:w-[50%] flex flex-col gap-[8px] items-start justify-center">
            <h2 className="font-satoshi font-[400] text-[32px] leading-[40px] lg:text-[46px] lg:leading-[69px] text-black-500">
              The Heart of Our Business
            </h2>
            <p className="font-helvetica lg:w-[80%] font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-500">
              We are more than property managers — we are custodians of taste,
              tranquility, and trust.<br></br> With a network of designers,
              concierge partners, and lifestyle curators, our work begins where
              traditional bookings end.
            </p>
            <button className="mt-[32px] bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center w-full max-w-[186px] py-[10px] rounded-[4px] ">
              About Us
            </button>
          </div>
          <div className="z-[2] w-full lg:w-[50%] h-[592px] overflow-hidden rounded-[8px] ">
            <Image
              src="/images/gettingKeys.jpg"
              alt=""
              width={1000}
              height={1000}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* first section */}

        {/* second section */}
        <div className="flex flex-col items-center w-full mt-[80px] gap-[40px] ">
          <h2 className="font-satoshi font-[300] text-[20px] leading-[30px] lg:text-[38px] lg:leading-[57px] text-gold-500">
            Words from the founders
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <FounderCard
              title="Dolapo Alade"
              description="Dolapo Alade started this journey with a belief: that luxury should be personal, not performative. From years spent in design, hospitality, and global travel, they've built a service that reflects intention, warmth, and excellence."
              image="/images/founderOne.jpg"
              subtitle="Co-founder"
            />
            <FounderCard
              title="Dolapo Alade"
              description="Dolapo Alade started this journey with a belief: that luxury should be personal, not performative. From years spent in design, hospitality, and global travel, they've built a service that reflects intention, warmth, and excellence."
              image="/images/founderTwo.jpg"
              subtitle="Co-founder"
            />
          </div>
        </div>
        {/* second section */}
      </div>
    </div>
  );
};

export default HomeForthSection;
