"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import "./ReviewCus.css";
import { reviews } from "../../assets/assets";
const ReviewCus = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isAutoplay, setIsAutoplay] = useState(true);
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoplay) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 4000); //  4000 (4 giây)
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoplay]);
    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        setIsAutoplay(false);
    };

    const getCardClass = (index: number) => {
        const position =
            (index - activeIndex + reviews.length) % reviews.length;

        if (position === 0) return "card active";
        if (position === 1 || position === reviews.length - 1)
            return "card adjacent";
        return "card distant";
    };
    const getCardStyle = (index: number) => {
        const position =
            (index - activeIndex + reviews.length) % reviews.length;

        if (position === 0)
            return { zIndex: 10, transform: "translateX(0) scale(1.05)" }; // Tăng scale và z-index
        if (position === 1)
            return { zIndex: 2, transform: "translateX(60%) scale(0.8)" }; // Đẩy xa hơn
        if (position === reviews.length - 1)
            return { zIndex: 2, transform: "translateX(-75%) scale(0.8)" }; // Đẩy xa hơn

        if (position < reviews.length / 2)
            return { zIndex: 1, transform: "translateX(85%) scale(0.65)" }; // Thu nhỏ và đẩy xa hơn
        return { zIndex: 1, transform: "translateX(-100%) scale(0.65)" }; // Thu nhỏ và đẩy xa hơn
    };
    return (
        <div className="review">
            <hr />
            <h3 className="title">Customer Reviews</h3>
            <div className="review-wrapper">
                {reviews.map((review, index) => (
                    <div
                        key={review.id}
                        className={getCardClass(index)}
                        style={getCardStyle(index)}
                        onClick={() => handleDotClick(index)}
                    >
                        <div className="card-content">
                            <div className="profile-image-container">
                                <img
                                    src={review.image || "/placeholder.svg"}
                                    alt={review.name}
                                    className="profile-image"
                                />
                            </div>
                            <h2 className="name">{review.name}</h2>
                            <p className="title">{review.title}</p>
                            <p className="review-text">{review.content}</p>
                            <div className="social-icons">
                                <a href="#" className="social-icon">
                                    <Facebook size={16} />
                                </a>
                                <a href="#" className="social-icon">
                                    <Twitter size={16} />
                                </a>
                                <a href="#" className="social-icon">
                                    <Instagram size={16} />
                                </a>
                                <a href="#" className="social-icon">
                                    <Linkedin size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="review-dots">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${
                            index === activeIndex ? "active" : ""
                        }`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewCus;
