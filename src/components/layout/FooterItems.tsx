import Link from "next/link";

const FooterItems = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; link: string }[];
}) => {
  return (
    <div className="flex flex-col gap-[32px]">
      <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-600">
        {title}
      </p>
      <div className="flex flex-col gap-[26px]">
        {items.map((item, index) => (
          <Link
            key={index}
            className="font-helvetica font-[300] text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] text-white-50"
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterItems;
