import Image from "next/image";
import ArrowSmallDownSvg from "../Assests/Svg/ArrowSmallDownSvg";
import SearchSvg from "../Assests/Svg/SearchSvg";
import ListingCard from "../atoms/ListingCard";

const ListingsFirstSection = () => {
  return (
    <div className=" w-full overflow-hidden bg-white-500">
      <div className="container h-full mx-auto px-4 relative">
        <div className="w-full pt-[120px] pb-[80px]">
          <div className="rounded-[8px] lg:h-[310px] h-[250px] w-full relative overflow-hidden pt-[56px] px-[30px] lg:px-[63px] pb-[17px] ">
            <Image
              src="/images/listing.jpg"
              alt="listing background"
              fill
              className="z-[1] absolute top-0 left-0 m-auto object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black-500 opacity-[0.2]"></div>

            <div className="z-[2] relative flex flex-col gap-[31px] ">
              <h1 className="font-satoshi font-[400] text-[32px] leading-[46px] lg:text-[46px] lg:leading-[69px] text-black-500">
                Buy Property
              </h1>

              <div className="flex flex-row items-center gap-[24px] bg-white-500 rounded-[8px] px-[16px] py-[14.5px] ">
                <SearchSvg />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="outline-none bg-transparent flex-1 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-500 placeholder:text-black-100"
                />
              </div>

              <div className="max-lg:hidden flex flex-row items-center justify-between gap-[24px] bg-[#3C3C3C]/20 backdrop-blur-[8px] px-[8px] py-[5px] rounded-[16px] ">
                <div className="flex flex-row items-center gap-[8px]">
                  <div className=" w-[200px] h-[40px] bg-[#B3B3B3]/50 backdrop-blur-[8px] rounded-[8px] flex flex-row items-center justify-between px-[16px] ">
                    <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
                      Bedroom
                    </p>
                    <ArrowSmallDownSvg />
                  </div>
                  <div className="w-[200px] h-[40px] bg-[#B3B3B3]/50 backdrop-blur-[8px] rounded-[8px] flex flex-row items-center justify-between px-[16px] ">
                    <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
                      Bathrooms
                    </p>
                    <ArrowSmallDownSvg />
                  </div>
                  <div className="w-[200px] h-[40px] bg-[#B3B3B3]/50 backdrop-blur-[8px] rounded-[8px] flex flex-row items-center justify-between px-[16px] ">
                    <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
                      Guests
                    </p>
                    <ArrowSmallDownSvg />
                  </div>
                  <div className="w-[200px] h-[40px] bg-[#B3B3B3]/50 backdrop-blur-[8px] rounded-[8px] flex flex-row items-center justify-between px-[16px] ">
                    <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
                      Price
                    </p>
                    <ArrowSmallDownSvg />
                  </div>
                </div>
                <button className="bg-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500 text-center h-[40px] w-full max-w-[252px] rounded-[8px] ">
                  Reset Filter
                </button>
              </div>
            </div>
          </div>
          {/* listings */}
          <div className="mt-[48px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
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
    </div>
  );
};

export default ListingsFirstSection;
