import s from "./Faqs.module.css";
import cn from "classnames";

const Faqs = () => {
  return (
    <div className={s.root}>
      <p className="font-space-grotesk font-bold text-4xl mb-10">
        Frequently Ask Questions
      </p>
      <div className="w-3/5 flex flex-col items-start gap-4">
        <div
          className={cn(
            s.faqWrapper,
            "rounded-md py-3 pl-8 font-space-grotesk font-bold text-lg w-full"
          )}
        >
          1. What kind of server reliability and uptime scores do you offer?
        </div>
        <div
          className={cn(
            s.faqWrapper,
            "rounded-md py-3 pl-8 font-space-grotesk font-bold text-lg w-full"
          )}
        >
          2. What is your security policy?
        </div>
        <div
          className={cn(
            s.faqWrapper,
            "rounded-md py-3 pl-8 font-space-grotesk font-bold text-lg w-full"
          )}
        >
          3. Do you provide Multiple Add-on Domains?
        </div>
        <div
          className={cn(
            s.faqWrapper,
            "rounded-md py-3 pl-8 font-space-grotesk font-bold text-lg w-full"
          )}
        >
          4. What’s your downtime history?
        </div>
        <div
          className={cn(
            s.faqWrapper,
            "rounded-md py-3 pl-8 font-space-grotesk font-bold text-lg w-full"
          )}
        >
          5. How many customers are on each server?
          <p className="font-space-grotesk font-normal text-lg mt-5 pr-8">
            Here you can write answers to the most frequently asked questions.
            It’s better to answer them on your website once than personally more
            frequently. Here you can write answers to the most frequently asked
            questions. It’s better to answer them on your website once than
            personally more frequently.
          </p>
        </div>
      </div>
      <div className={s.buyNow}>BUY NOW</div>
    </div>
  );
};

export default Faqs;
