import { useContext } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { useHamburger } from "../contexts/Hamburger";

function NavHamburger() {
  const { isToggle, toggleHamburger } = useHamburger();
  console.log(isToggle);
  return (
    <button className="md:hidden block" onClick={() => toggleHamburger()}>
      {isToggle ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
    </button>
  );
}

export default NavHamburger;
