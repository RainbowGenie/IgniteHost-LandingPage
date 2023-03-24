import s from "./Introduction.module.css";
import cn from "classnames";
import { SvgIgniteHostVector, SvgIgniteText, SvgLine } from "assets/svg";

const Introduction = () => {
  return (
    <div className={s.root}>
      <div className="flex">
        <p className={cn(s.title, "mr-4")}>Secure. Reliable.</p>
        <p className={cn(s.title, s.fontGradient1, "pb-2 relative")}>
          IgniteHost
          <SvgIgniteHostVector className="w-56" />
        </p>
      </div>
      <div className="rounded-[30px] border border-solid border-transparent overflow-hidden w-[320px] h-[113px]">
        <SvgIgniteText className="w-full h-full" />
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <SvgLine className="scale-x-75" />
        <p className={cn(s.fontGradient2, "font-bold text-xl")}>H O S T</p>
        <SvgLine className="scale-x-75" />
      </div>
      <div className="flex items-center justify-center gap-8 mt-10">
        <p className="pb-2 font-semibold text-lg">
          Is your pick for anonymous server hosting instant deployment in under
          5 minutes
        </p>
      </div>
    </div>
  );
};

export default Introduction;
