import HouseBackSvg from "../Assests/Svg/HouseBackSvg";
import MallorcaSvg from "../Assests/Svg/MallorcaSvg";
import WhyCard from "../atoms/WhyCard";

const HomeSecondSection = () => {
  return (
    <div className="w-full bg-white-50 overflow-hidden">
      <div className="container h-full mx-auto px-4 pt-[40px] pb-[50px] relative ">
        <HouseBackSvg
          className="z-[1] absolute top-[0px] -left-[180px] inset-0"
          color={"#F9F9F9"}
        />
        <MallorcaSvg className="z-[1] absolute top-[50px] right-[0px] " />
        <div className="z-[2] p-[10px] bg-gold-50 w-fit relative ">
          <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 ">
            Why Choose Us
          </p>
        </div>

        <div className="z-[2] flex flex-col gap-[8px] mt-[32px] relative ">
          <h5 className="font-satoshi font-[300] text-[20px] leading-[30px] lg:text-[26px] lg:leading-[39px] text-black-500">
            Crafted for Those Who Expect More
          </h5>
          <p className="font-helvetica lg:w-[90%] font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-500">
            We don&apos;t just offer properties &mdash; we curate a lifestyle.
            Every villa, every service, and every moment is designed to reflect
            your standards, your rhythm, and your definition of luxury. With
            privacy as our promise and beauty in every detail, we turn rare
            spaces into unforgettable stays.
          </p>
        </div>

        <div className="z-[2] mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-[16px] relative">
          <WhyCard
            title="Luxury, Personally Composed"
            description="Every element, orchestrated to you — from scent to silence. Where no detail is too small, and nothing is ever standard."
            image="/images/pool.jpg"
            className=""
          />
          <WhyCard
            title="Understated Grandeur"
            description="True elegance doesn’t ask for attention — it holds it.
            Our homes are built not to impress, but to move you."
            image="/images/listing.jpg"
            className=""
          />
          <WhyCard
            title="Discretion as a Standard"
            description="Invisible service. Absolute privacy. For those who move quietly — but live fully."
            image="/images/out.jpg"
            className="lg:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSection;
