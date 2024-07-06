import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { name, image, price } = item;
  const [itemQuantity, setItemQuantity] = useState(1);
  return (
    <>
      <div className="flex items-center md:gap-4 gap-2">
        <img src={image} alt="" className="md:w-[20%] w-[35%]" />
        <p>{name}</p>
      </div>
      <p>{formatCurrency(Number(price))}</p>
      <input
        type="number"
        name=""
        id=""
        value={itemQuantity}
        onChange={() => setItemQuantity()}
        className="w-[22%] border md:px-3 md:py-2 border-black rounded-sm"
      />
      <p>{formatCurrency(Number(price))}</p>
    </>
  );
}

export default CartItem;
