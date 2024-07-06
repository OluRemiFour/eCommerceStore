import React from "react";
import { IoSendSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="md:flex md:py-16 px-8 grid grid-cols-2 gap-6 md:gap-0 py-12 justify-around text-white bg-[#000000]">
      <div className="">
        <h1 className="py-2">Exclusive</h1>
        <div className="text-sm text-slate-500 space-y-1">
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex items-center py-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id=""
              className="bg-transparent border border-slate-600 p-2 outline-none"
            />
            <IoSendSharp className="absolute ml-[9rem] size-4 flex item" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="py-2">Support</h1>
        <div className="text-sm text-slate-500 space-y-1">
          <p>
            111 Bijoy sarani, Dhaka
            <br /> DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
      </div>
      <div>
        <h1 className="py-2">Account</h1>
        <div className="text-sm text-slate-500 space-y-1">
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
      </div>
      <div>
        <h1 className="py-2">Quick Link</h1>
        <div className="text-sm text-slate-500 space-y-1">
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <div>
        <h1 className="py-2">Download App</h1>
        <div className="text-sm text-slate-500 space-y-1">
          <p>Save $3 with App New User Only</p>
          <div className="py-2">
            <img src="/img/scan.png" alt="" />
          </div>
          <div>
            <img src="/img/social.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
