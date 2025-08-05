import HouseBackSvg from "../Assests/Svg/HouseBackSvg";
import ListingCard from "../atoms/ListingCard";

const HomeThirdSection = () => {
  return (
    <div className="bg-black-500 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[80px] pb-[80px] relative ">
        <HouseBackSvg
          className="z-[1] absolute top-[0px] -right-[120px]"
          color={"#1D1D1D"}
        />
        <div className="z-[2] flex flex-col items-center justify-center relative ">
          <h3 className="font-satoshi font-[300] text-[34px] leading-[52px] lg:text-[56px] lg:leading-[84px] text-gold-500">
            FEATURED
          </h3>
          <h3 className="ml-[169px] font-satoshi font-[300] text-[34px] leading-[52px] lg:text-[56px] lg:leading-[84px] text-gold-500">
            PROPERTIES
          </h3>
        </div>

        <div className="z-[2] flex flex-col lg:flex-row gap-[10px] items-start lg:items-center justify-between mt-[29px] relative ">
          <div className="flex flex-col gap-[8px] lg:w-[60%] ">
            <h5 className="font-satoshi font-[300] text-[20px] leading-[30px] lg:text-[26px] lg:leading-[39px] text-black-50">
              A Selection as Rare as Your Taste
            </h5>
            <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-50">
              Each property in our collection is handpicked for its soul, style,
              and setting. From secluded villas with panoramic views to modern
              sanctuaries wrapped in nature — every space is a story waiting to
              be lived. This is not about more choices. It&apos;s about the
              right one.
            </p>
          </div>
          <button className="bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[204px] py-[10px] rounded-[4px] ">
            View all listing
          </button>
        </div>

        <div className="z-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px] mt-[63px] relative">
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyOne.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyTwo.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyThree.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyFour.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertyFive.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
          <ListingCard
            title="Villa Oro – Ibiza"
            description="Villa Vista Mars"
            image="/images/propertySix.jpg"
            price="$550,000 - $600,000"
            bed="4"
            shower="4"
            guest="8"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeThirdSection;
