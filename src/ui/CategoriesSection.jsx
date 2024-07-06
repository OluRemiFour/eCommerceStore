import { useSlider } from "../contexts/Slider";
import ArrowButton from "./ArrowButton";
import Carousel from "./Carousel";

function CategoriesSection() {
  const { categoryItems } = useSlider();
  return (
    <section className="mt-8 pt-4 pb-12  border-b ">
      <h2 className="before:content-['-'] mb-2 sm:before:mr-4  before:mr-2  before:rounded-md before:bg-red-500 md:before:h-12 before:h-10 md:before:w-6 before:w-4  before:inline-block   text-red-500 font-bold md:text-xl sm:text-lg text-md ">
        <span className="inline-block align-middle">Categories</span>
        {/* Today's */}
      </h2>
      <div className=" flex items-center content-center justify-between gap-x-28">
        <h2 className="font-inter lg:text-4xl md:text-2xl sm:text-lg text-sm   font-bold">
          Browse by category
        </h2>

        <ArrowButton type="arrow" />
      </div>

      <Carousel type="category" items={categoryItems} />
    </section>
  );
}

export default CategoriesSection;
