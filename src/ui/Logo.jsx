import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link>
      <img
        src="/img/logo.png"
        className="min-w-3xl w-[60%] max-w-full w-5xl sm:w-[70%] md:w-[90%] lg:w-full"
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
