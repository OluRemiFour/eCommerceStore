import { Link } from "react-router-dom";
import { useSlider } from "../contexts/Slider";
import ArrowButton from "./ArrowButton";
import Carousel from "./Carousel";

function ProductSection() {
  const { product: products } = useSlider();
  return (
    <section className="mt-8 pt-4 pb-12    ">
      <h2 className="before:content-['-'] before:mr-4 before:rounded-md before:bg-red-500 before:h-12 before:w-6  before:inline-block   text-red-500 font-bold text-xl ">
        <span className="inline-block align-middle">Our Products</span>
        {/* Today's */}
      </h2>
      <div className=" flex items-center content-center justify-between gap-x-28 pt-4">
        <h2 className="font-inter text-4xl  font-bold">Explore Our Products</h2>

        <ArrowButton type="arrow" />
      </div>

      <Carousel items={products} type="products" />
      <div className="text-center mt-8 pb-2 ">
        <Link className="  text-center text-white bg-red-500 px-6 py-3 rounded-sm font-inter font-[500]">
          View All Products
        </Link>
      </div>
    </section>
  );
}

export default ProductSection;
