import { NavLink } from "react-router-dom";

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
function Navigation() {
  return (
    <nav className="hidden  md:block">
      <ul className="list-none flex gap-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b border-black/90 sm:text-sm md:text-base"
                  : "text-gray-400 hover:text-black/80 md:text-base   sm:text-sm"
              }
              to={link.href}
              // onClick={() => console.log(link.name)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
