import Image from "next/image";

const WeCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-[291px] overflow-hidden rounded-[8px] relative p-[34px]">
      <div className="z-[1] absolute top-0 left-0 right-0 bottom-0 ">
        <Image
          src={image}
          alt="background"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-full h-full object-cover z-[1]"
        />
        <div className="h-[150px] w-full absolute bottom-0 left-0 right-0 z-[2] bg-gradient-to-t from-black-500/1 to-black-500/55 backdrop-blur-[3px] "></div>
      </div>
      <div className="z-[2] h-full relative w-full flex flex-col items-start justify-end gap-[16px] ">
        <h5 className="font-satoshi font-[300] text-[18px] leading-[27px] lg:text-[22px] lg:leading-[33px] text-white-600">
          {title}
        </h5>
        <p className="w-[90%] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WeCard;
