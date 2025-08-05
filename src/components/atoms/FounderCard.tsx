import Image from "next/image";
import QuoteSvg from "../Assests/Svg/QuoteSvg";
import QuoteEndSvg from "../Assests/Svg/QuoteEndSvg";

interface FounderCardProps {
  title: string;
  description: string;
  image: string;
  subtitle: string;
}

const FounderCard = ({
  title,
  description,
  image,
  subtitle,
}: FounderCardProps) => {
  return (
    <div className="w-full rounded-[16px] overflow-hidden">
      <div className="w-full h-[510px]">
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          objectFit="cover"
          objectPosition="top"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-[40px] px-[24px] bg-black-500 flex flex-col gap-[24px] ">
        <QuoteSvg />
        <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
          {description}
        </p>
        <QuoteEndSvg className="self-end" />
        <div className="flex flex-col gap-[8px]">
          <p className="font-satoshi font-[300] text-[18px] leading-[27px] lg:text-[22px] lg:leading-[33px] text-white-500">
            {title}
          </p>
          <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
