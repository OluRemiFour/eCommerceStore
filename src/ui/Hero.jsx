import { useState } from "react";
import { ImAppleinc } from "react-icons/im";
import { Link } from "react-router-dom";
import { Product_preview } from "../constants/product_preview";
function Hero() {
  const [activeContent, setActiveContent] = useState(0);
  // const [activeContent, setActiveContent] = useState(3);
  function handleClick(id) {
    setActiveContent(id);
  }
  const productSlider = Product_preview.at(activeContent);
  console.log(productSlider.image);

  return (
    <div className=" pt-16 pl-8 flex-1 relative">
      <div className="bg-black flex lg:pt-12 pt-8   py-5 justify-center font-poppin  rounded-sm px-4  ">
        <div className="text-white sm:space-y-1 space-y-2 pt-12">
          <h3 className="flex sm:gap-4  gap-1 sm:text-4xl  text-3xl  items-center ">
            <ImAppleinc className="text:xl sm:text-3xl md:text-5xl" />
            <span className="lg:text-xl md:text-lg sm:text-md text-xs font-[300]">
              {productSlider.name}
            </span>
          </h3>
          <p className="lg:text-6xl md:text-4xl sm:text-2xl  text-sm font-[400] sm:leading-snug leading-normal sm:tracking-wide tracking-normal ">
            Up to {productSlider.discount}% <br /> off Voucher
          </p>
          <Link
            className="sm:space-x-2 space-x-[.3rem] flex items-center  content-center font-inter hover:text-white/45"
            to=""
          >
            <span className="sm:pb-1 pb-[3px]  border-b border-b-white/95 text-xs sm:text-base">
              {" "}
              Shop now
            </span>
            <span className="md:text-2xl sm:text-xl text-xs">&rarr;</span>
          </Link>
        </div>
        <div>
          <img
            src={productSlider.image}
            alt="Slider_Product "
            height={40}
            className="lg:w-[30rem] lg:h-[20rem] sm:w-[20rem] sm:h-[17rem] w-[15rem] h-[15rem] object-contain"
          />
        </div>
      </div>
      <EllipseIcon handleClick={handleClick} currentContent={activeContent} />
    </div>
  );
}

function EllipseIcon({ handleClick, currentContent }) {
  const sliderIcon = Product_preview;

  return (
    <div className="flex gap-2  justify-center absolute bottom-4  left-[45%]">
      {sliderIcon.map((icon, i) => (
        <div
          key={icon.id}
          className={`h-[.5rem] sm:h-2 md:h-3   aspect-square rounded-full ${
            currentContent === icon.id ? "bg-orange-400" : "bg-white/90"
          }`}
          onClick={() => handleClick(icon.id)}
        ></div>
      ))}
    </div>
  );
}
export default Hero;
