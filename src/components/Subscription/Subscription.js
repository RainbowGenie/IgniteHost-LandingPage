import s from "./Subscription.module.css";
import cn from "classnames";
import { useState } from "react";
import { SvgTickMark } from "assets/svg";

const Subscription = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClickItem = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <div className={s.root}>
      <div className={s.selectWrapper}>
        <div
          className={cn(s.item, selectedIndex === 0 ? s.active : "")}
          onClick={() => {
            handleClick(0);
          }}
        >
          Performance
        </div>
        <div
          className={cn(s.item, selectedIndex === 1 ? s.active : "")}
          onClick={() => {
            handleClick(1);
          }}
        >
          Budget
        </div>
        <div
          className={cn(s.item, selectedIndex === 2 ? s.active : "")}
          onClick={() => {
            handleClick(2);
          }}
        >
          Offshore
        </div>
      </div>
      <div className="flex gap-10 items-center justify-center mt-20">
        <p className="font-space-grotesk font-medium text-3xl">Available OS</p>
        <div className="flex gap-0">
          <img src="assets/png/centos.png" width="64" height="64" alt="" />
          <img src="assets/png/debian.png" width="64" height="64" alt="" />
          <img src="assets/png/ubuntu.png" width="64" height="64" alt="" />
          <img src="assets/png/windows.png" width="64" height="64" alt="" />
        </div>
      </div>
      <div className={s.serviceWrapper}>
        <div className="w-[30%]">
          <div
            className={cn(s.item, selectedItemIndex === 0 ? s.active : "")}
            onClick={() => handleClickItem(0)}
          >
            <p className="font-space-grotesk font-bold text-3xl leading-10 tracking-widest text-center">
              VPS1
            </p>
            <p className="font-space-grotesk font-medium text-xl text-center mt-8">
              Best Choice for individuals
            </p>
            <p className="font-space-grotesk  font-bold text-6xl text-center mt-8">
              $09
              <span className="font-space-grotesk font-bold text-2xl">
                /Month
              </span>
            </p>
            <div className="pl-12 mt-12">
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  20 GB Storage Space
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  10 Domain Support
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  500 GB Bandwith
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  100 Email Accounts
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
          {selectedItemIndex === 0 && <div className={s.buyNow}>BUY NOW</div>}
        </div>

        <div className="w-[30%]">
          <div
            className={cn(s.item, selectedItemIndex === 1 ? s.active : "")}
            onClick={() => handleClickItem(1)}
          >
            <p className="font-space-grotesk font-bold text-3xl leading-10 tracking-widest text-center">
              VPS2
            </p>
            <p className="font-space-grotesk font-medium text-xl text-center mt-8">
              Best Choice for individuals
            </p>
            <p className="font-space-grotesk  font-bold text-6xl text-center mt-8">
              $259
              <span className="font-space-grotesk font-bold text-2xl">
                /Month
              </span>
            </p>
            <div className="pl-12 mt-12">
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  50 GB Storage Space
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  20 Domain Support
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  2TB Bandwidth
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  20 Database
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
          {selectedItemIndex === 1 && <div className={s.buyNow}>BUY NOW</div>}
        </div>

        <div className="w-[30%]">
          <div
            className={cn(s.item, selectedItemIndex === 2 ? s.active : "")}
            onClick={() => handleClickItem(2)}
          >
            <p className="font-space-grotesk font-bold text-3xl leading-10 tracking-widest text-center">
              VPS3
            </p>
            <p className="font-space-grotesk font-medium text-xl text-center mt-8">
              Best Choice for individuals
            </p>
            <p className="font-space-grotesk  font-bold text-6xl text-center mt-8">
              $53
              <span className="font-space-grotesk font-bold text-2xl">
                /Month
              </span>
            </p>
            <div className="pl-12 mt-12">
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  20 GB Storage Space
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  10 Domain Support
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  500 GB Bandwith
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  500 Email Accounts
                </p>
              </div>
              <div className="flex items-center gap-3 py-3">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
          {selectedItemIndex === 2 && <div className={s.buyNow}>BUY NOW</div>}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
