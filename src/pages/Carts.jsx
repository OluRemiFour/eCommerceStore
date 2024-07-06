import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "../features/cart/CartItem";
import { getTotalCartPrice } from "../features/cart/cartSlice";
import Button from "../ui/Button";
import RedButton from "../ui/RedButton";
import { formatCurrency } from "../utils/helpers";

function Carts() {
  const totalPrice = useSelector(getTotalCartPrice);
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/checkout");
  }

  return (
    <div className="md:px-12 my-24">
      <div className="flex items-center gap-2">
        <NavLink>Home /</NavLink>
        <NavLink>Carts</NavLink>
      </div>

      <div className="my-16">
        <div className="grid grid-cols-4 font-semibold md:space-x-10 space-x-4 shadow-sm drop-shadow-lg shadow-gray-500 py-4 md:px-6 px-2">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="">
          {cart.length === 0 && (
            <div className="md:py-4 sm:py-2 lg:py-5 text-center">
              <p className="font-inter mb-8">
                Your Cart is empty! Please start by adding an item to your cart
              </p>
              <Button to="/home">Go back home &rarr;</Button>
            </div>
          )}
          {cart.length !== 0 && (
            <div className="py-6 space-y-4 grid my-8 grid-cols-4 items-center md:space-x-10 space-x-4 md:px-6">
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between py-6">
        <Button>Return To Shop</Button>
        <Button>Update Cart</Button>
      </div>

      <div className="md:flex justify-between my-14 md:my-24">
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="rounded-md border px-4 py-3 outline-none"
          />
          <RedButton>Apply Coupon</RedButton>
        </div>

        <div className="border border-black px-6 md:w-[40%] py-8 my-10 md:my-0">
          <h1 className="font-semibold text-lg">Cart Total</h1>
          <div className="flex justify-between border-b border-slate-600 py-4 items-center gap-12">
            <p>Subtotal:</p>
            <p>{formatCurrency(totalPrice)} </p>
          </div>
          <div className="flex justify-between border-b border-slate-600 py-4 items-center gap-12">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold py-4 items-center gap-12">
            <p>Total:</p>
            <p>{formatCurrency(totalPrice)} </p>
          </div>
          <button
            onClick={handleCheckout}
            disabled={!totalPrice}
            className="border py-3 px-12 my-2 flex justify-center mx-auto bg-[#db4444] cursor-pointer text-white rounded-md"
          >
            Proceed to checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carts;
