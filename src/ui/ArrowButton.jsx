import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSlider } from "../contexts/Slider";

function ArrowButton({ type }) {
  const { handlePrevClick, handleNextClick } = useSlider();
  if (type === "view")
    return (
      <div className="text-center mt-8 pb-2 ">
        <button className="  text-center text-white bg-red-500 md:px-4 md:py-2 px-3 py-2 md:text-base text-sm sm:rounded-sm rounded-md  font-inter font-[500]">
          View All Products
        </button>
      </div>
    );
  if (type === "arrow")
    return (
      <div className="flex items-center  gap-4">
        <button
          className=" group md:px-4 px-2  md:py-4 py-2 rounded-full bg-stone-300 hover:bg-black/90"
          onClick={() => handlePrevClick()}
        >
          <HiOutlineArrowRight className="lg:text-xl sm:text-lg text-sm group-hover:stroke-white/90" />
        </button>
        <button
          className=" group md:px-4 px-2  md:py-4 py-2 rounded-full bg-stone-300 hover:bg-black/90"
          onClick={() => handleNextClick()}
        >
          <HiOutlineArrowLeft className="lg:text-xl group-hover:stroke-white/90" />
        </button>
      </div>
    );
}

export default ArrowButton;
