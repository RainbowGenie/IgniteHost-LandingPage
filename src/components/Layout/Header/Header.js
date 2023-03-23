import s from "./Header.module.css";

import cn from "classnames";
import { SvgLogoText } from "assets/svg";

const Header = () => {
  const navLinks = [
    { label: "purchase", active: true },
    { label: "About us" },
    { label: "faq" },
    { label: "contact" },
  ];
  return (
    <div className={s.root}>
      <nav className={s.nav}>
        <SvgLogoText className={cn(s.logo)} />
        <div className={s.itemsWrapper}>
          {navLinks.map((link, index) => (
            <div className={cn(s.item)} key={index}>
              {link.label}
            </div>
          ))}
          <div className={s.loginButton}>Login</div>
        </div>
      </nav>

      <div className="flex items-center gap-2">{/* <SvgGridMenu /> */}</div>
    </div>
  );
};

export default Header;
