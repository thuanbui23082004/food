import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ id, name, price, desc, img }) => {
    const { cartItem, addtoCart, removeFromCart } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/productDetail/${id}`)}
            className="food__item"
        >
            <div className="food__item--img--Container">
                <img src={img} alt="" className="food__item--img" />
                {!cartItem[id] ? (
                    <img
                        className="add"
                        onClick={() => addtoCart(id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
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
                )}
            </div>
            <div className="food__item--info">
                <div className="rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <div className="food__item--desc">{desc}</div>
                <div className="food__item--price">${price}</div>
            </div>
        </div>
    );
};

export default FoodItem;
