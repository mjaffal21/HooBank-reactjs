import favourite from "../assets/Star.svg";
import shield from "../assets/Shield Done.svg";
import send from "../assets/Send.svg";

const Section2 = () => {
  return (
    <div className="my-20 flex flex-col md:flex-row md:justify-center md:items-center md:gap-5">
      <div>
        <h1 className="text-white text-4xl font-bold leading-[60px] max-w-md">
          You do the business, we'll handle the money.
        </h1>
        <p className="text-gray-400 text-lg pt-5 max-w-md md:max-w-xl">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="gradient-button rounded-lg py-2 px-4 mt-7 text-2xl">
          Get Started
        </button>
      </div>
      <div className="mt-20 md:mt-0">
        <div
          id="feature-1"
          className="flex items-center gap-3 px-3 py-10 md:pl-10"
        >
          <div className="bg-[#09977C1A] p-4 rounded-full">
            <img
              src={favourite}
              alt="star"
              className="w-16 bg-transparent md:w-8"
            />
          </div>
          <div>
            <h1 className="text-white text-2xl pb-2">Rewards</h1>
            <p className="text-gray-400 md:max-w-md">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes.
            </p>
          </div>
        </div>
        <div
          id="feature-2"
          className="flex items-center gap-3 px-3 py-10 md:pl-10"
        >
          <div className="bg-[#09977C1A] p-4 rounded-full">
            <img
              src={shield}
              alt="star"
              className="w-16 bg-transparent md:w-8"
            />
          </div>
          <div>
            <h1 className="text-white text-2xl pb-2">100% Secured</h1>
            <p className="text-gray-400 md:max-w-md">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div
          id="feature-3"
          className="flex items-center gap-3 px-3 py-10 md:pl-10"
        >
          <div className="bg-[#09977C1A] p-4 rounded-full">
            <img src={send} alt="star" className="w-16 bg-transparent md:w-8" />
          </div>
          <div>
            <h1 className="text-white text-2xl pb-2">Balance Transfer</h1>
            <p className="text-gray-400 md:max-w-md">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
