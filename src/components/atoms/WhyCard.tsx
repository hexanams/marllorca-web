import Image from "next/image";

const WhyCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-[341px] w-full rounded-[8px] overflow-hidden ${className}`}
    >
      <Image
        src={image}
        alt="background"
        width={1000}
        height={1000}
        objectFit="cover"
        className=" w-full h-full object-cover"
      />
      <div className="bg-[#0B0B0B]/50 absolute top-[0px] left-[0px] right-[0px] bottom-[0px] inset-0 w-full h-full p-[32px] flex flex-col gap-[16px]">
        <p className="font-satoshi font-[300] text-[18px] leading-[27px] lg:text-[22px] lg:leading-[33px] text-[#E3E3E3] ">
          {title}
        </p>
        <p className="font-helvetica lg:w-[80%] font-[300] text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] text-[#E3E3E3] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
