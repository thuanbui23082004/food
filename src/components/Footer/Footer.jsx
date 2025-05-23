import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer__content">
                <div className="footer__conter--left">
                    <img src={assets.logo} alt="" />
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil officiis excepturi a debitis nemo ullam ipsam sit
                        rem dignissimos, dolorum modi iste similique doloribus
                        eius deleniti molestias repudiandae voluptates esse.
                    </p>
                    <div className="footer__social--icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer__content--center">
                    <h2 className="footer__center--title">COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer__content--right">
                    <h2 className="footer__right--title">GET IN TOUCH</h2>
                    <ul>
                        <li>+1-222-456-7890</li>
                        <li>thuanloan@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer__copyright">
                Copyright 2025 thuanloan@gmail.com - All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;
