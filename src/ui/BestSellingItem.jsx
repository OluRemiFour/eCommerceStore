import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotalQuantityById } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";
import DeleteItemButton from "./DeleteItemButton";
import StarRating from "./StarRating";

function BestSellingItem({ item, index }) {
  const [rating, setRating] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getTotalQuantityById(item.id));
  const isItemInCart = currentQuantity > 0;

  function handleAddToCart(item) {
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: 1,
      price: item.price * 1,
      image: item.image,
    };
    dispatch(addToCart(newItem));
  }
  return (
    <div
      className="min-w-full   transition-transform   duration-500 ease-in-out rounded-sm "
      key={index}
      style={{
        transform: index === 4 ? "translateX(-20%)" : " ",
      }}
    >
      {/* //min-w-[15rem]  */}
      <div className="bg-stone-200 px-4 pt-4 rounded-sm ">
        <div className="flex justify-between items-center ">
          {/* <button className="-translate-y-6 bg-red-700 px-3 py-1 text-white/90 text-sm font-inter rounded-sm ">
                    -
                    {Math.floor(
                      ((item.price - item.discount) / item.price) * 100
                    )}
                    %
                  </button> */}
          &nbsp;
          <div className="flex flex-col gap-y-2">
            <button className="group  w-8 aspect-square rounded-full bg-white hover:bg-red-500 ">
              <IoHeartOutline className="mx-auto   group-hover:stroke-slate-200" />
            </button>
            <button className="group  w-8 aspect-square rounded-full bg-white hover:bg-red-500 ">
              <AiOutlineEye className="mx-auto  group-hover:text-white" />
            </button>
          </div>
        </div>

        <img
          src={item.image}
          alt={item.name}
          className="md:max-w-40 w-full h-[10rem]  object-contain  -translate-y-8 pl-8 "
        />
      </div>
      {/* <button className="bg-black text-white w-full text-center  py-2 font-inter  hover:bg-black/70">
                <span> Add to cart</span>
              </button> */}
      <div className="flex flex-col gap-y-1 mt-3 mb-1 ">
        {isItemInCart ? (
          <DeleteItemButton itemId={item.id} />
        ) : (
          <button
            onClick={() => handleAddToCart(item)}
            className="bg-black text-white w-full text-center py-2 sm:text-base text-sm font-inter font-[400] -translate-y-8 hover:bg-black/90"
          >
            Add to cart
          </button>
        )}
        <h3 className="sm:text-md text-sm font-[500] font-poppin ">
          {item.name}
        </h3>
        <p className="text-gray-600 space-x-2 ">
          <span className="sm:text-lg text-md  text-orange-600 font-[400]">
            {formatCurrency(item.price - item.discount)}
          </span>
          <span className="sm:text-sm text-[.89rem] text-black font-[400] !line-through">
            {formatCurrency(item.price)}
          </span>
        </p>
        <StarRating
          maxRating={5}
          size={18}
          color="red"
          onSetRating={setRating}
        />
      </div>
    </div>
  );
}

export default BestSellingItem;
