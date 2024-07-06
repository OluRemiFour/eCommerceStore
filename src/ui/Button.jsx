import React from "react";
import { Link } from "react-router-dom";

function Button({ to, children }) {
  if (to)
    return (
      <Link
        to={to}
        className=" border md:py-3 py-2 md:px-8 px-4 font-semibold cursor-pointer rounded-sm"
      >
        {children}
      </Link>
    );
  return (
    <div>
      <button className="border md:py-3 py-2 md:px-8 px-4 font-semibold cursor-pointer rounded-sm">
        {children}
      </button>
    </div>
  );
}

export default Button;
