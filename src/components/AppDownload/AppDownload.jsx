import React from "react";
import "./AppDowload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
    return (
        <div className="app-download" id="app-download">
            <img className="bg" src={assets.downapp} alt="" />
            <img src={assets.phone} alt="" className="phone" />
            <p>
                For Better Experience Download <br /> Food Deliver App
            </p>
            <div className="app-download__platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    );
};

export default AppDownload;
