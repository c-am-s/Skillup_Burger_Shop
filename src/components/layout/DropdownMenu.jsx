import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsJustify } from "react-icons/bs";

export default function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myorders" },
      { name: "Logout", path: "/login" },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <div id="btn-profile" className="btn-group">
        <button
          type="button"
          className="btn  dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          <CgProfile />
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {navLinks.map((d, i) => (
            <li key={i}>
              <Link to={d.path}>
                <button className="dropdown-item" type="button">
                  {d.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
