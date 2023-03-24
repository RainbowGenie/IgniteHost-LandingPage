import s from "./Footer.module.css";
import cn from "classnames";
import { SvgInstagram, SvgMessage, SvgTwitter, SvgYouTube } from "assets/svg";

const Footer = () => {
  return (
    <div className={s.root}>
      <hr className="h-[4px] opacity-10" />
      <div className="flex flex-row justify-between py-10 px-7 items-center">
        <div className="font-space-grotesk font-medium text-base xl:text-xl w-1/4">
          All rights reserved ©2023 IGNITE
        </div>
        <div className="w-1/4 flex items-center justify-center gap-3">
          <div
            className={cn(
              s.iconBackground,
              "w-[48px] h-[48px] xl:w-[66px] xl:h-[66px] rounded-full flex justify-center"
            )}
          >
            <SvgMessage className="mt-[8px] w-12 h-12" />
          </div>
          <div
            className={cn(
              s.iconBackground,
              "w-[48px] h-[48px] xl:w-[66px] xl:h-[66px] rounded-full flex justify-center items-center"
            )}
          >
            <SvgTwitter className="w-8 h-8" />
          </div>
          <div
            className={cn(
              s.iconBackground,
              "w-[48px] h-[48px] xl:w-[66px] xl:h-[66px] rounded-full flex justify-center items-center"
            )}
          >
            <SvgInstagram className="w-8 h-8" />
          </div>
          <div
            className={cn(
              s.iconBackground,
              "w-[48px] h-[48px] xl:w-[66px] xl:h-[66px] rounded-full flex justify-center items-center"
            )}
          >
            <SvgYouTube className="w-8 h-8" />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-10 xl:gap-20 mr-3">
          <div className="font-space-grotesk font-normal text-lg xl:text-xl">
            FAQ
          </div>
          <div className="font-space-grotesk font-normal text-lg xl:text-xl">
            Terms & Conditions
          </div>
          <div className="font-space-grotesk font-normal text-lg xl:text-xl">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
