import MoneyHouseSvg from "../Assests/Svg/MoneyHouseSvg";
import PaperSvg from "../Assests/Svg/PaperSvg";
import PersonCheckSvg from "../Assests/Svg/PersonCheckSvg";
import PersonHeadsetSvg from "../Assests/Svg/PersonHeadsetSvg";
import SpeakerSvg from "../Assests/Svg/SpeakerSvg";
import WhatCard from "../atoms/WhatCard";

const PropertyThirdScetion = () => {
  return (
    <div className=" w-full bg-black-500">
      <div className="container h-full mx-auto px-4 bg-">
        <div className="h-full w-full relative py-[80px] flex flex-col gap-[42px] items-center justify-center">
          <h3 className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-white-500">
            What You Can Expect
          </h3>
          <div className="w-full flex flex-wrap items-center justify-center gap-[24px]">
            <WhatCard
              image={<PersonHeadsetSvg />}
              title="Personal Consultation"
              description="We start with a 1-on-1 meeting to understand your goals and timeline."
            />
            <WhatCard
              image={<MoneyHouseSvg />}
              title="Free Property Valuation"
              description="Receive an expert opinion on your property's market value with no obligation."
            />
            <WhatCard
              image={<SpeakerSvg />}
              title="Marketing & Promotion"
              description="Your property will be advertised via high-visibility channels, both locally and globally."
            />
            <WhatCard
              image={<PersonCheckSvg />}
              title="Buyer Screening & Viewings"
              description="We handle all inquiries, qualify interested buyers, and manage the viewing process."
            />
            <WhatCard
              image={<PaperSvg />}
              title="Negotiation & Closing"
              description="You’ll receive professional support during negotiation, documentation, and the final sale."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyThirdScetion;
