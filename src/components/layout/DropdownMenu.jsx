import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
import { IoFastFoodOutline } from "react-icons/io5";

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
      <nav className=" nav navbar navbar-expand-lg k ">
        <div className="  div container">
          <Link to={"/"} className="navbar-brand">
            <IoFastFoodOutline />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse align-center">
            <div className=" navbar-nav text-dark ">
              <Link to={"/"} className="nav-link a">
                INICIO
              </Link>
              <Link to={"/about"} className="nav-link a">
                LA GANG
              </Link>
              <Link to={"/contact"} className="nav-link a">
                ESCRÍBENOS
              </Link>
              <Link to={"/cart"} className="nav-link a">
                TU CESTA
              </Link>
            </div>
          </div>

          <div className="btn-group">
            <button
              type="button"
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
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
      </nav>
    </div>
  );
}
