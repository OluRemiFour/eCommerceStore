import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

function Delivery() {
  return (
    <div className="md:flex text-center space-y-6 md:space-y-0 flex-row justify-center md:gap-12 md:pt-12 pt-10">
      {/* <div> */}
      <div>
        <TbTruckDelivery className="mx-auto size-14 bg-black text-white rounded-full p-2 border-gray-300 border-[6px]" />
        <h2 className="font-bold pt-4 md:text-lg">FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      {/* </div> */}
      <div>
        <RiCustomerService2Fill className="mx-auto size-14 bg-black text-white rounded-full p-2 border-gray-300 border-[6px]" />
        <h2 className="font-bold pt-4 md:text-lg">24/7 CUSTOMER SERVICE</h2>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div>
        <AiTwotoneSafetyCertificate className="mx-auto size-14 bg-black text-white rounded-full p-2 border-gray-300 border-[6px]" />
        <h2 className="font-bold pt-4 md:text-lg">MONEY BACK GUARANTEE</h2>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
}

export default Delivery;
