import CopyRightSvg from "../Assests/Svg/CopyRightSvg";
import HouseBackSvg from "../Assests/Svg/HouseBackSvg";
import LogoSvg from "../Assests/Svg/LogoSvg";
import MallorcaSvg from "../Assests/Svg/MallorcaSvg";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <footer className="w-full  bg-gold-500">
      <div className="container px-4 pt-[64px] pb-[60px] mx-auto relative overflow-hidden">
        <HouseBackSvg
          className="z-[1] absolute scale-[0.8] -top-[80px] -right-[360px] lg:-right-[160px]"
          color={"#D9B194"}
        />
        <MallorcaSvg
          className="z-[1] absolute scale-[0.8] bottom-[42px] -left-[30px] lg:-left-[40px] "
          color={"#D9B194"}
        />
        <div className="z-[2] relative flex flex-col gap-[148px] items-center justify-between">
          <div className="w-full flex flex-col gap-[32px] lg:flex-row items-start justify-between ">
            <LogoSvg />

            <div className="flex flex-row gap-[58px] items-start justify-center">
              <FooterItems
                title="Site Map"
                items={[
                  { title: "Living (Buy-Sell)", link: "#" },
                  { title: "Buyer Journey", link: "#" },
                  { title: "History", link: "#" },
                  { title: "Mallorca Lifestyle", link: "#" },
                ]}
              />
              <FooterItems
                title="Company"
                items={[
                  { title: "Terms & Condition", link: "#" },
                  { title: "Privacy Policy", link: "#" },
                  { title: "Cookie Policy", link: "#" },
                ]}
              />
              <FooterItems
                title="Contact"
                items={[
                  { title: "FAQ", link: "#" },
                  { title: "Support", link: "#" },
                ]}
              />
            </div>

            <div className="flex flex-col gap-[8px] max-lg:w-full">
              <h3 className="font-satoshi font-[400] text-[20px] leading-[28px] lg:text-[26px] lg:leading-[39px] text-white-600">
                Join our membership
              </h3>
              <input
                autoComplete="off"
                autoCorrect="off"
                autoSave="off"
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gold-50 text-black-500 placeholder:text-black-100 font-helvetica font-[300] text-[12px] leading-[17px] lg:text-[14px] lg:leading-[21px] rounded-[8px] px-[10px] py-[13.5px] outline-none w-full lg:w-[413px] "
              />
              <button className="bg-white-500 font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-gold-500 text-center w-full max-w-[170px] py-[10px] rounded-[8px] flex items-center justify-center overflow-hidden whitespace-nowrap">
                Join
              </button>
            </div>
          </div>

          <div className="w-full flex flex-row gap-[16px] items-center justify-end">
            <p className="flex items-center font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-50">
              <span className="mr-[8px]">
                <CopyRightSvg />
              </span>
              Copyright {new Date().getFullYear()}
            </p>
            <span className="w-[5px] h-[5px] rounded-full  bg-white-50"></span>
            <p className="font-helvetica font-[300] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] text-white-50">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
