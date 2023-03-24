import s from "./Subscription.module.css";
import cn from "classnames";
import { useState } from "react";
import { SvgTickMark } from "assets/svg";

const Subscription = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handleClick = (index) => {
    setSelectedIndex(index);
    setSelectedItemIndex(0);
    const containers = document.getElementsByClassName("item_container");
    if (index === 0) {
      for (let i = 0; i < 3; i++) {
        // containers[i].classList.remove("fadeIn");
        containers[i].classList.add("fadeOut");
        setTimeout(() => {
          containers[i].classList.remove("fadeOut");
        }, 1000);
      }
    } else if (index === 1) {
      for (let i = 0; i < 3; i++) {
        // containers[i].classList.remove("fadeIn");
        containers[i].classList.add("fadeOut");
        setTimeout(() => {
          containers[i].classList.remove("fadeOut");
        }, 1000);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        // containers[i].classList.remove("fadeIn");
        containers[i].classList.add("fadeOut");
        setTimeout(() => {
          containers[i].classList.remove("fadeOut");
        }, 1000);
      }
    }
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
      <div className="flex gap-10 items-center justify-center mt-12">
        <p className="font-space-grotesk font-medium text-2xl">Available OS</p>
        <div className="flex gap-0">
          <img src="assets/png/centos.png" width="48" height="48" alt="" />
          <img src="assets/png/debian.png" width="48" height="48" alt="" />
          <img src="assets/png/ubuntu.png" width="48" height="48" alt="" />
          <img src="assets/png/windows.png" width="48" height="48" alt="" />
        </div>
      </div>
      <div className={s.serviceWrapper}>
        <div
          className={cn(
            "w-[30%] xl:w-[25%] cursor-pointer item_container fadeIn"
          )}
        >
          <div
            className={cn(s.item, selectedItemIndex === 1 ? s.active : "")}
            onClick={() => handleClickItem(1)}
          >
            <div className="flex items-center mb-4 ml-8">
              <img src="assets/png/centos.png" width="24" height="24" alt="" />
              <img src="assets/png/debian.png" width="24" height="24" alt="" />
            </div>
            <p className="font-space-grotesk font-bold text-2xl leading-10 tracking-widest text-center">
              VPS1
            </p>
            <p className="font-space-grotesk font-medium text-lg text-center mt-8">
              Best Choice for individuals
            </p>
            <p className="font-space-grotesk  font-bold text-4xl text-center mt-8">
              $09
              <span className="font-space-grotesk font-bold text-xl">
                /Month
              </span>
            </p>
            <div className="mt-12 self-center">
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  20 GB Storage Space
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  10 Domain Support
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  500 GB Bandwith
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  100 Email Accounts
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-xl">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "w-[30%] xl:w-[25%] cursor-pointer item_container fadeIn"
          )}
        >
          <div
            className={cn(s.item, selectedItemIndex === 2 ? s.active : "")}
            onClick={() => handleClickItem(2)}
          >
            <div className="flex items-center mb-4 ml-8">
              <img src="assets/png/windows.png" width="24" height="24" alt="" />
              <img src="assets/png/centos.png" width="24" height="24" alt="" />
              <img src="assets/png/ubuntu.png" width="24" height="24" alt="" />
            </div>
            <p className="font-space-grotesk font-bold text-2xl leading-10 tracking-widest text-center">
              VPS2
            </p>
            <p className="font-space-grotesk font-medium text-lg text-center mt-8">
              Best Choice for individuals
            </p>
            <p className="font-space-grotesk  font-bold text-4xl text-center mt-8">
              $259
              <span className="font-space-grotesk font-bold text-lg">
                /Month
              </span>
            </p>
            <div className="mt-12 self-center">
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  50 GB Storage Space
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  20 Domain Support
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  2TB Bandwidth
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  20 Database
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "w-[30%] xl:w-[25%] cursor-pointer item_container fadeIn"
          )}
        >
          <div
            className={cn(s.item, selectedItemIndex === 3 ? s.active : "")}
            onClick={() => handleClickItem(3)}
          >
            <div className="flex items-center mb-4 ml-8">
              <img src="assets/png/debian.png" width="24" height="24" alt="" />
              <img src="assets/png/ubuntu.png" width="24" height="24" alt="" />
            </div>
            <p className="font-space-grotesk font-bold text-2xl leading-10 tracking-widest text-center">
              VPS3
            </p>
            <p className="font-space-grotesk font-medium text-lg text-center mt-8">
              Best Choice for individuals
            </p>
            <p className="font-space-grotesk  font-bold text-4xl text-center mt-8">
              $53
              <span className="font-space-grotesk font-bold text-lg">
                /Month
              </span>
            </p>
            <div className="mt-12 self-center">
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  20 GB Storage Space
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  10 Domain Support
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  500 GB Bandwith
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  500 Email Accounts
                </p>
              </div>
              <div className="flex items-center gap-3 py-1">
                <SvgTickMark />
                <p className="font-space-grotesk font-normal text-lg">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedItemIndex !== 0 && <div className={s.buyNow}>BUY NOW</div>}
    </div>
  );
};

export default Subscription;
