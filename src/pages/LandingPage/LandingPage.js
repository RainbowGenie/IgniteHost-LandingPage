import Introduction from "components/Introduction";
import Subscription from "components/Subscription";
import Features from "components/Features";
import s from "./LandingPage.module.css";
import Faqs from "components/Faqs";

function LandingPage() {
  return (
    <div className={s.root}>
      <Introduction />
      <Subscription />
      <Features />
      <Faqs />
    </div>
  );
}

export default LandingPage;
