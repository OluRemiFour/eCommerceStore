import { todaysProduct } from "../constants/todayProduct";
import { useSlider } from "../contexts/Slider";
import ArrowButton from "./ArrowButton";
import Carousel from "./Carousel";
import SalesCountDown from "./SalesCountDown";

const items = todaysProduct;

function TodaysSections() {
  const { items } = useSlider();
  return (
    <section className="mt-8 pt-4 pb-12 border-b   ">
      <h2 className="before:content-['-'] sm:before:mr-4  before:mr-2  before:rounded-md before:bg-red-500 md:before:h-12 before:h-10 md:before:w-6 before:w-4  before:inline-block   text-red-500 font-bold md:text-xl sm:text-lg text-md ">
        <span className="inline-block align-middle"> Today's</span>
        {/* Today's */}
      </h2>
      <div className=" flex items-center content-center sm:justify-center justify-between md:gap-x-28 sm:gap-x-24 gap-x-20">
        <h2 className="font-inter lg:text-4xl md:text-2xl sm:text-lg text-sm   font-bold">
          {" "}
          Flash Sales
        </h2>
        <SalesCountDown type="today" />
        <ArrowButton type="arrow" />
      </div>

      <Carousel items={items} type="today" />
      <div className="text-center mt-8 pb-2 ">
        <button className="  text-center text-white bg-red-500 sm:px-4 sm:py-2 px-2 py-1  sm:text-base text-md rounded-sm font-inter  font-[300]sm:font-[500]">
          View All Products
        </button>
      </div>
    </section>
  );
}

export default TodaysSections;
