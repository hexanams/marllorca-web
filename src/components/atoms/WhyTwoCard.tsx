import FanSvg from "../Assests/Svg/FanSvg";

const WhyTwoCard = ({
  title,
  description,
  image,
  className,
  classNameTwo,
}: {
  title: string;
  description: string;
  image: React.ReactNode;
  className?: string;
  classNameTwo?: string;
}) => {
  return (
    <div
      className={`h-[371px] p-[54px] bg-gold-500 overflow-hidden rounded-[8px] relative flex flex-col  gap-[16px] items-center justify-center ${className}`}
    >
      {image}
      <h5
        className={`z-[2] relative font-satoshi text-center font-[400] text-[30px] leading-[45px] lg:text-[46px] lg:leading-[69px] text-white-900 ${classNameTwo}`}
      >
        {title}
      </h5>
      <p
        className={`z-[2] relative font-helvetica text-center font-[300] text-[18px] leading-[27px] lg:text-[16px] lg:leading-[24px] text-white-900 ${classNameTwo}`}
      >
        {description}
      </p>
    </div>
  );
};

export default WhyTwoCard;
