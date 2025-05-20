import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { SlBasketLoaded } from "react-icons/sl";
import { ProductContext } from "../../context/context";

const Header = () => {
  const nav = useNavigate();
  const { basket } = useContext(ProductContext);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" onClick={() => nav("/")} />
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link>
              Pages{" "}
              <span>
                {" "}
                <GoChevronDown />
              </span>
            </Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/admin"}>Admin</Link>
            {/* <Link to={"/basket"}>Basket</Link> */}
          </div>
          <div className="header--right">
            <div className="header--right__input">
              <input type="text" />
              <a>
                <IoSearch />
              </a>
            </div>
            <div className="header--right__cart">
              <Link to={"/basket"}>
                <SlBasketLoaded />
              </Link>
              <h2>Cart ({basket.length})</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
