import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";

export  function PaystackPopupIntegration() {
  const totalPrice = useSelector(getTotalCartPrice);
  const publicKey = "pk_test_dcfa3d8202774206e8f20cc79886e77e10fc9862";
  const amount = totalPrice * 100;
  const email = "innovativedesign67@gmail.com";
  const name = "oluremi";
  const phone = 123456;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: `Place order ${`${totalPrice}.00 ₦`}`,
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    // onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <PaystackButton
      text="Pay Now"
      embed={false}
      className="payButton"
      componentProps={componentProps}
    />
  );
}
