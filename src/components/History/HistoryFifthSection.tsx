import Image from "next/image";

const HistoryFifthSection = () => {
  return (
    <div className="h-full w-full">
      <div className="container h-full mx-auto px-4">
        <div className="h-full w-full flex flex-row items-center justify-center relative">
          <div className="z-[1] w-[45%] h-[80%] absolute right-[-90%] lg:right-[0px]">
            <Image
              src="/HistoryBackThree.svg"
              alt="contact"
              width={1000}
              height={1000}
              priority={true}
              objectFit="cover"
              objectPosition="top center"
              className="  h-full object-cover"
            />
          </div>
          <div className="z-[2] relative w-[80%] lg:w-[50%] h-full flex flex-col items-start justify-center">
            <p className="font-satoshi font-[300] text-[36px] leading-[54px] lg:text-[56px] lg:leading-[84px] text-black-500">
              Let&apos;s Help You Find Home
            </p>
            <p className="mt-[16px] font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-black-300">
              From sun-drenched coastlines to quiet mountain towns, Mallorca
              offers a lifestyle like no other. At Mallorca Web, we&apos;re here
              to help you not just buy property—but find where you truly belong.
            </p>
            <button className="mt-[48px] bg-transparent border-[1px] border-gold-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[267px] py-[10px] rounded-[4px] ">
              Explore collections
            </button>
          </div>
          <div className="w-[20%] lg:w-[50%] h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HistoryFifthSection;
