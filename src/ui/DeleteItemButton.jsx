import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function DeleteItemButton({ itemId }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(removeFromCart(itemId))}
      className="bg-black text-white w-full text-center py-2 font-inter font-[400] -translate-y-8 hover:bg-black/90"
    >
      Delete From Cart
    </button>
  );
}

export default DeleteItemButton;
