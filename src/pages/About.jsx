import { AiOutlineDollar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { SlLike } from "react-icons/sl";

import Delivery from "../ui/Delivery";

function About() {
  return (
    <div className="md:my-24 my-10 lg:px-12">
      <div>
        <div className="md:flex justify-between items-center gap-24">
          <div className="py-4">
            <h1 className="text-3xl font-semibold py-4">Our Story</h1>
            <p className="font text-justify">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region. Exclusive has more than 1 Million
              products to offer, growing at a very fast. Exclusive offers a
              diverse assotment in categories ranging from consumer.
            </p>
          </div>
          <img src="/img/about.png" alt="" className="md:w-[50%]" />
        </div>
      </div>

      <div className="md:flex grid grid-cols-2 justify-between gap-3 my-16">
        <div className="border md:p-8 text-center rounded-md hover:bg-[#db4444] hover:text-white transition-all duration-500 cursor-pointer ">
          <div className="md:p-2 p-4">
            <SiHomeassistantcommunitystore className="md:size-11 size-8 mx-auto" />
            <p className="pt-4 font-bold text-3xl">10.5k</p>
            <p>Sellers active on our site</p>
          </div>
        </div>

        <div className="border md:p-8 text-center rounded-md hover:bg-[#db4444] hover:text-white transition-all duration-500 cursor-pointer ">
          <div className="md:p-2 p-4">
            <AiOutlineDollar className="md:size-11 size-8 text-center mx-auto" />
            <p className="pt-4 font-bold text-3xl">33k</p>
            <p>Monthly Product Sale</p>
          </div>
        </div>

        <div className="border md:p-8 text-center rounded-md hover:bg-[#db4444] hover:text-white transition-all duration-500 cursor-pointer ">
          <div className="md:p-2 p-4">
            <FaBagShopping className="md:size-11 size-8 text-center mx-auto" />
            <p className="pt-4 font-bold text-3xl">45.5k</p>
            <p>Customer active in our site</p>
          </div>
        </div>

        <div className="border md:p-8 text-center rounded-md hover:bg-[#db4444] hover:text-white transition-all duration-500 cursor-pointer ">
          <div className="md:p-2 p-4">
            <SlLike className="md:size-11 size-8 text-center mx-auto" />
            <p className="pt-4 font-bold text-3xl">45.5k</p>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex justify-center gap-8 md:py-12">
        <div>
          <img src="/img/image1.png" alt="img" />
          <div className="py-6">
            <h1 className="font-semibold md:text-lg">Tom Cruise</h1>
            <p className="text-sm py-1">Founder & Chairman</p>
            <img
              src="img/socialMedia.png"
              alt=""
              className="md:w-1/6 w-[40%]"
            />
          </div>
        </div>

        <div>
          <img src="/img/image2.png" alt="img" />
          <div className="py-6">
            <h1 className="font-semibold md:text-lg">Emma Watson </h1>
            <p className="text-sm py-1">Managing Director</p>
            <img
              src="img/socialMedia.png"
              alt=""
              className="md:w-1/6 w-[40%]"
            />
          </div>
        </div>
        <div>
          <img src="/img/image3.png" alt="img" />
          <div className="py-6">
            <h1 className="font-semibold md:text-lg">Will Smith</h1>
            <p className="text-sm py-1">Product Designer</p>
            <img
              src="img/socialMedia.png"
              alt=""
              className="md:w-1/6 w-[40%]"
            />
          </div>
        </div>
      </div>

      {/* delivery */}

      <Delivery />
    </div>
  );
}

export default About;
