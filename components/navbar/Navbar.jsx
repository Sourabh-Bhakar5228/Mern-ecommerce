import React, { useContext, useRef, useState } from "react";
import "./Navabr.css";
import logo from "../assests/logo.png";
import cart_icon from "../assests/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assests/Nav_dropDown2.png"

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { GetTotalCartItems } = useContext(ShopContext)
  const menuRef = useRef()

  const dropDown = (e) => {
    menuRef.current.classList.toggle("Nav_menu_visible")
    e.target.classList.toggle("open")
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>D-shopping</p>
      </div>
      <img className="nav_dropdown" onClick={dropDown} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            {" "}
            Men{" "}
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/womens">
            {" "}
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}{" "}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button onClick={() => {
            localStorage.removeItem("auth-token");
            window.location.replace("/");
          }}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}


        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{GetTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
