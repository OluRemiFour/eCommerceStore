import Logo from "./Logo";

import { NavLink } from "react-router-dom";
import { useHamburger } from "../contexts/Hamburger";

const navLinks = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About ",
    href: "/about",
  },
  {
    name: "Sign Up",
    href: "/signup",
  },
];

function ResNavbar() {
  const { isToggle, toggleHamburger } = useHamburger();

  return (
    <div
      className={`z-40 md:hidden ${
        isToggle
          ? "block -translate-x-0 opacity-1"
          : " -translate-x-16 opacity-0 "
      } fixed top-0 left-0 w-full h-[100dvh] pointer-events-none transition-all`}
    >
      <div className="space-x-12 z-50  w-[60%]  bg-white h-screen  px-12 py-8 pointer-events-auto ">
        <Logo />
        <nav className="block md:hidden mt-4 ">
          <ul className="list-none flex flex-col items-start justify-between gap-y-4 -translate-x-12 ">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b border-black/70 md:border-black/90"
                      : "text-red-800 md:text-gray-400 hover:text-black/70 md:hover:text-black/80"
                  }
                  to={link.href}
                  onClick={() => toggleHamburger()}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* <HeaderMenu /> */}
      </div>
    </div>
  );
}

export default ResNavbar;
