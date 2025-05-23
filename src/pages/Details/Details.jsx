import React, { useContext, useState } from "react";
import "./Details.css";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Details = () => {
    const [filterStar, setFilterStar] = useState(null);
    const { id } = useParams();
    const { food_list, cartItem, addtoCart, removeFromCart } =
        useContext(StoreContext);
    const product = food_list.find((item) => String(item._id) === String(id));
    return (
        <div className="product-container">
            <div className="back-button">
                <button className="icon-button"></button>
            </div>

            <div className="product-layout">
                {/* Product Image */}
                <div className="product-image-container">
                    <div className="product-image-wrapper">
                        <img
                            src={product.image}
                            alt="Asparagus dish"
                            className="product-image"
                        />
                    </div>
                    <div className="food__item--counter">
                        <img
                            onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(id);
                            }}
                            src={assets.remove_icon_red}
                            alt=""
                        />
                        <p>{cartItem[id]}</p>
                        <img
                            onClick={(e) => {
                                e.stopPropagation();
                                addtoCart(id);
                            }}
                            src={assets.add_icon_green}
                            alt=""
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="product-details">
                    <div className="product-header">
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-price">${product.price}</div>
                    </div>

                    <p className="product-description">{product.description}</p>

                    {/* Ratings */}
                    <div className="product-stats">
                        <div className="stat-item">
                            <span>4.5</span>
                        </div>
                        <div className="stat-item">
                            <span>10 min</span>
                        </div>
                        <div className="stat-item">
                            <span>3k+ Reviews</span>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="reviews-section">
                        <div className="top">
                            <h2 className="section-title">Reviews</h2>

                            <div className="reviews-filter">
                                <div className="star-filters">
                                    {[5, 4, 3, 2, 1].map((star) => (
                                        <button
                                            key={star}
                                            className={`star-filter-button ${
                                                filterStar === star
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setFilterStar(
                                                    star === filterStar
                                                        ? null
                                                        : star
                                                )
                                            } // toggle
                                        >
                                            {star} ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Review List */}
                        <div className="review-list">
                            {product.reviews
                                .filter(
                                    (review) =>
                                        !filterStar ||
                                        review.rating === filterStar
                                )
                                .map((review, index) => (
                                    <div key={index} className="review-item">
                                        <div className="review-header">
                                            <div className="reviewer-info">
                                                <div className="avatar">
                                                    <img
                                                        src={`https://randomuser.me/api/portraits/men/${
                                                            (index % 10) + 1
                                                        }.jpg`}
                                                        alt={review.reviewer}
                                                    />
                                                </div>
                                                <div className="reviewer-details">
                                                    <div className="reviewer-name">
                                                        {review.reviewer}
                                                    </div>
                                                    <div className="review-date">
                                                        Recently
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-rating">
                                                <span>{review.rating}.0</span>
                                            </div>
                                        </div>
                                        <p className="review-text">
                                            {review.content}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addtoCart(id);
                        }}
                        className="add-to-cart-button"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
