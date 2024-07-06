import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavHamburger from "./NavHamburger";
function NavBar() {
  return (
    <header className="px-8 py-5 fixed z-10 w-full backdrop-opacity-10  bg-white/95 border-b-[.2px] border-[#D9DBE9]  ">
      <div className="max-w-7xl w-full mx-auto flex justify-between content-center items-center">
        <Link to="/">{/* <Logo /> */}</Link>
      </div>

      <div className="max-w-7xl w-full mx-auto flex !justify-between content-center items-center">
        <Logo />
        <Navigation />
        <HeaderMenu />
        <NavHamburger />
      </div>
    </header>
  );
}

export default NavBar;
