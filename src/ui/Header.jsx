import Hero from "./Hero";
import SideNavigation from "./SideNavigation";

function Header() {
  return (
    <div className="flex ">
      <SideNavigation />
      <Hero />
    </div>
  );
}

export default Header;
