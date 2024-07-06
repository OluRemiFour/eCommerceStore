import Delivery from "./Delivery";
import NewArrivalGrid from "./NewArrivalGrid";

function FeaturedSection() {
  return (
    <section className="mt-8 pt-4 pb-12  border-b ">
      <h2 className="before:content-['-'] sm:before:mr-4  before:mr-2  before:rounded-md before:bg-red-500 md:before:h-12 before:h-10 md:before:w-6 before:w-4  before:inline-block   text-red-500 font-bold md:text-xl sm:text-lg text-md ">
        <span className="inline-block align-middle">Featured</span>
        {/* Today's */}
      </h2>
      <div className="">
        <h2 className="font-inter text-4xl  font-bold">New Arrival</h2>
      </div>
      <NewArrivalGrid />
      <Delivery />
    </section>
  );
}

export default FeaturedSection;
