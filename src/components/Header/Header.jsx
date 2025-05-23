import React, { useEffect, useState } from "react";
import "./Header.css";

import { assets } from "../../assets/assets";
const Header = () => {
    const images = [assets.header_img, assets.header_three, assets.header_two];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000); // đổi ảnh mỗi 5 giây
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="header">
            <div
                className="slider"
                style={{
                    transform: `translateX(-${currentImage * 33.3333333}%)`,
                }}
            >
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Slide ${i}`}
                        className="slide-image"
                    />
                ))}
            </div>
            <div className="header__content">
                <h2>Order your favorite food here</h2>
                <p className="desc">
                    Choose from a diverse menu featuring a delectable array of
                    dishes craft...
                </p>
                <button className="btn">View Menu</button>
            </div>
        </div>
    );
};

export default Header;
