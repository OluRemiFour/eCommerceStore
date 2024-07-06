import React from "react";

function RedButton({ children }) {
  return (
    <button className="border py-3 md:px-8 px-4 bg-[#db4444] cursor-pointer text-white rounded-md">
      {children}
    </button>
  );
}

export default RedButton;
