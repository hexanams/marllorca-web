import { ReactNode } from "react";

const ContactCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="bg-gold-50 py-[16px] px-[24px] rounded-[16px] flex flex-row items-center gap-[16px] ">
      <div className="rounded-full min-w-[64px] min-h-[64px] w-[64px] h-[64px] flex items-center justify-center bg-gold-500 ">
        {icon}
      </div>
      <div className="flex flex-col gap-[4px] ">
        <h5 className="font-satoshi font-[300] text-[18px] leading-[27px] lg:text-[22px] lg:leading-[33px] text-black-500">
          {title}
        </h5>
        <p className="font-helvetica font-[300] text-[12px] leading-[17px] lg:text-[16px] lg:leading-[24px] text-black-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
