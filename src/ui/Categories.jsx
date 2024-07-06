import { Link } from "react-router-dom";
import SalesCountDown from "./SalesCountDown";

function Categories() {
  return (
    <div className=" pt-16  pl-4 flex-1 relative mt-4">
      <div className="bg-black flex pt-12 py-12 gap-x-6 px-2  sm:flex-row flex-col  justify-center font-poppin  rounded-sm  ">
        <div className="text-white space-y-6 pt-12 order-2 sm:order-1">
          <h3 className="sm:text-4xl text-2xl  items-center ">
            <span className="text-xl text-green-500">Categories</span>
          </h3>
          <p className="lg:text-5xl md:text-3xl sm:text-xl  text-lg font-[400]  leading-snug tracking-wide">
            Enhance Your <br /> Music Experience
          </p>
          <SalesCountDown type="categories" />
          <Link
            className="  inline-block text-center transition-all duration-150 ease-in-out bg-green-500  hover:bg-white/90  font-inter sm:px-8 px-4  sm:py-3 py-2  hover:text-green-500 text-white sm:text-md text-lg rounded-sm"
            to=""
          >
            Buy Now!
          </Link>
        </div>
        <div className=" flex items-center justify-center order-1  sm:order-2">
          <img
            src="/img/Category.png"
            alt="Categories "
            // height={40}
            className=" h-76  bg-gradient-radial"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
