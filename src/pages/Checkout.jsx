// import { PaystackButton } from "react-paystack";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../features/cart/cartSlice";
import { usePaystack } from "../features/cart/usePaystack";

function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalCartPrice);
  const publicKey = "pk_test_dcfa3d8202774206e8f20cc79886e77e10fc9862";
  const amount = totalPrice * 100;

  const onSuccess = () =>
    toast.success("Thanks for doing business with us! Come back soon!!");
  const onClose = () => toast.error("Wait! Don't leave :(");

  const { initializePayment } = usePaystack({
    email,
    amount,
    name,
    phone,
    publicKey,
    onSuccess,
    onClose,
  });
  console.log(name);

  return (
    <div className="my-24 lg:px-12">
      <h1 className="font-semibold text-3xl py-6">Billing Details</h1>

      <div className="md:flex justify-between gap-8">
        <div>
          <div className="">
            <p className="py-4 opacity-50">First Name*</p>
            <input
              type="text"
              name=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#f5f5f5] rounded-md p-4 px-4 w-full lg:w-[35rem]"
            />
          </div>
          <div>
            <p className="py-4 opacity-50">Phone Number*</p>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name=""
              className="bg-[#f5f5f5] rounded-md p-4 px-4 w-full"
            />
          </div>
          <div>
            <p className="py-4 opacity-50">Email Address*</p>
            <input
              type="text"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#f5f5f5] rounded-md p-4 px-4 w-full"
            />
          </div>

          <div className="flex gap-4 py-6 items-center">
            <input type="checkbox" name="" id="" className="size-4" />
            <label htmlFor="checkbox" id="">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        <div className="md:w-[38%] mt-8 md:mt-0">
          <div>
            {/* <div className="flex justify-between items-center">
              <div className="gap-3 flex items-center">
                <img src="/img/redpad.png" alt="" className="w-[18%]" />
                <p>LCD Monitor</p>
              </div>
              <p>$650</p>
            </div> */}

            {cart.map((item) => (
              <div className="flex justify-between items-center">
                <div className="gap-3 flex items-center">
                  <img src={item.image} alt={item.image} className="w-[18%]" />
                  <p>{item.name}</p>
                </div>
                <p>${item.price}</p>
              </div>
            ))}

            {/* <div className="flex justify-between my-4 items-center">
              <div className="gap-2 flex items-center">
                <img src="/img/screen.png" alt="" className="w-[20%]" />
                <p>H1 Gamepad</p>
              </div>
              <p>$650</p>
            </div> */}
          </div>

          <div>
            <div className="flex justify-between border-b border-slate-600 py-4 items-center gap-12">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between border-b border-slate-600 py-4 items-center gap-12">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-semibold py-4 items-center gap-12">
              <p>Total:</p>
              <p>${totalPrice}</p>
            </div>
          </div>

          <div className="flex justify-between items-center my-6">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="btn"
                id="btt"
                className="cursor-pointer size-4"
              />
              <label htmlFor="radio" name="">
                Bank
              </label>
            </div>
            <img src="/img/bank.png" alt="" />
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="btn"
              id=""
              className="cursor-pointer size-4"
            />
            <label htmlFor="radio">Cash on delivery</label>
          </div>

          <div className="md:flex lg:justify-between mt-10 md:mt-18 ">
            <div className="space-x-4 md:space-y-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="rounded-md border border-black lg:px-4 px-2 py-3 outline-none"
              />
              <button className="border py-3 lg:px-4 px-2 bg-[#db4444] cursor-pointer text-white rounded-md">
                Apply coupon
              </button>
            </div>
          </div>

          <button
            className="payButton border py-3 px-16 my-4 bg-[#db4444] cursor-pointer text-white rounded-md"
            onClick={() => initializePayment(onSuccess, onClose)}
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
