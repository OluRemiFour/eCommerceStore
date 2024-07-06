import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi2";

function SideNavigation() {
  return (
    <>
      <ul className=" hidden md:flex flex-col basis-1/6 list-none gap-2 pt-16 border-r text-sm sm:text-md md:text-base border-r-stone-200">
        <li className="px-2">
          <Link className="flex justify-between items-center content-center">
            <span>Women's fashion</span>
            <HiOutlineChevronRight />
          </Link>
        </li>
        <li className="px-2">
          <Link className="flex justify-between items-center content-center">
            <span>Men's fashion</span>
            <HiOutlineChevronRight />
          </Link>
        </li>
        <li className="px-2">
          <Link>Electronis</Link>
        </li>
        <li className="px-2">
          <Link>Home & LifeStyle</Link>
        </li>
        <li className="px-2">
          <Link>Medicine</Link>
        </li>
        <li className="px-2">
          <Link>Sport & Outdoor</Link>
        </li>
        <li className="px-2">
          <Link>Baby's & Toys</Link>
        </li>
        <li className="px-2">
          <Link>Groceries & Pets</Link>
        </li>
        <li className="px-2">
          <Link>Health & Beauty</Link>
        </li>
      </ul>
    </>
  );
}

export default SideNavigation;
