import { ReactNode } from "react";

const WhatCard = ({
  image,
  title,
  description,
}: {
  image: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex-1 h-full min-w-[300px] max-w-[397px] flex flex-col gap-[32px] items-center justify-center py-[32px] px-[43px] ">
      {image}
      <div className="flex flex-col gap-[8px] items-center justify-center">
        <h5 className="font-satoshi text-center font-[300] text-[20px] leading-[28px] lg:text-[26px] lg:leading-[39px] text-white-500">
          {title}
        </h5>
        <p className="font-helvetica text-center font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhatCard;
