import s from "./Footer.module.css";
import cn from "classnames";
import { SvgInstagram, SvgMessage, SvgTwitter, SvgYouTube } from "assets/svg";

const Footer = () => {
  return (
    <div className={s.root}>
      <hr className="h-[4px] opacity-10" />
      <div className="flex flex-row justify-between pt-10 px-7 items-center">
        <div className="font-space-grotesk font-medium text-xl w-1/4">
          All rights reserved ©2023 IGNITE
        </div>
        <div className="w-1/4 flex items-center justify-center gap-3">
          <div
            className={cn(
              s.iconBackground,
              "w-[66px] h-[66px] rounded-full flex justify-center"
            )}
          >
            <SvgMessage className="mt-[12px]" />
          </div>
          <div
            className={cn(
              s.iconBackground,
              "w-[66px] h-[66px] rounded-full flex justify-center items-center"
            )}
          >
            <SvgTwitter />
          </div>
          <div
            className={cn(
              s.iconBackground,
              "w-[66px] h-[66px] rounded-full flex justify-center items-center"
            )}
          >
            <SvgInstagram />
          </div>
          <div
            className={cn(
              s.iconBackground,
              "w-[66px] h-[66px] rounded-full flex justify-center items-center"
            )}
          >
            <SvgYouTube />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-20 mr-3">
          <div className="font-space-grotesk font-normal text-xl">FAQ</div>
          <div className="font-space-grotesk font-normal text-xl">
            Terms & Conditions
          </div>
          <div className="font-space-grotesk font-normal text-xl">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
