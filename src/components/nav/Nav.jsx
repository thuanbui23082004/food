import React, { useContext, useState } from "react";
import "./Nav.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const nav = ({ setShowLogin, setShowCartPopup, showCartPopup }) => {
    const [menu, setMenu] = useState("Home");
    const navigate = useNavigate();
    const { getTotalCarAmount } = useContext(StoreContext);

    if (location.pathname === "/login") {
        return null; // ẩn navbar trên trang login
    }
    return (
        <div className="Nav">
            <Link to="/">
                <img src={assets.logo} alt="" className="logo" />
            </Link>
            <ul className="nav-menu">
                <Link
                    to="/"
                    onClick={() => setMenu("Home")}
                    className={menu == "Home" ? "active" : ""}
                >
                    Home
                </Link>
                <a
                    href="#explore-menu"
                    onClick={() => setMenu("Menu")}
                    className={menu == "Menu" ? "active" : ""}
                >
                    Menu
                </a>
                <a
                    href="#app-download"
                    onClick={() => setMenu("Mobile App")}
                    className={menu == "Mobile App" ? "active" : ""}
                >
                    Mobile App
                </a>
                <a
                    href="#footer"
                    onClick={() => setMenu("Contact Us")}
                    className={menu == "Contact Us" ? "active" : ""}
                >
                    Contact Us
                </a>
            </ul>
            <div className="nav-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search">
                    {/* <Link to="/cart"> */}
                    <img
                        onClick={() => setShowCartPopup((prev) => !prev)}
                        src={assets.basket_icon}
                        alt=""
                    />
                    {/* </Link> */}
                    <div className={getTotalCarAmount() ? "dot" : ""}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    );
};

export default nav;
