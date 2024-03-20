import image2 from "../assets/image-2.png";
import googleDownload from "../assets/download-google-play.svg";
import appleDownload from "../assets/download-app-store.svg";
import image3 from "../assets/image-3.png";

const Section3 = () => {
  return (
    <div>
      <div className="flex flex-col-reverse gap-7 md:flex-row md:justify-center md:items-center">
        <img src={image2} alt="image2" className="block md:w-[40%]" />
        <div className="md:w-[50%]">
          <h1 className="text-white text-3xl font-bold pb-5 leading-[50px]">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex gap-5 mt-5">
            <img src={appleDownload} alt="applestore" />
            <img src={googleDownload} alt="googlestore" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-7 md:flex-row-reverse md:justify-center md:items-center mt-24">
        <img src={image3} alt="image3" className="block md:w-[40%]" />
        <div className="md:w-[50%]">
          <h1 className="text-white text-3xl font-bold pb-5 leading-[50px]">
            Find a better card deal in few easy steps.
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="gradient-button rounded-lg py-2 px-4 mt-7 text-2xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
