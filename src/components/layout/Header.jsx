// Write all the code here
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

import DropdownMenu from "./DropdownMenu";

export default function Header() {
  return (
    <div className="align-items">
      <nav>
        <div>
          <IoFastFoodSharp />
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <GiShoppingCart />
          </Link>
        </div>
        <div>
          <DropdownMenu />

        </div>
      </nav>
    </div>
  );
}
