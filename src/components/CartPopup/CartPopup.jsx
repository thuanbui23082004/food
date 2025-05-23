import React, { useState, useContext } from "react";
import "./CartPopup.css";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const CartPopup = ({ showCartPopup, setShowCartPopup }) => {
    const navigate = useNavigate();
    // const [currState, setCurrState] = useState("Your Cart");
    const {
        cartItem,
        addtoCart,
        removeFromCart,
        food_list,
        getTotalCarAmount,
    } = useContext(StoreContext);
    const popupVariants = {
        initial: {
            opacity: 0,
            scale: 0.2,
            transformOrigin: "top center",
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            scale: 0.2,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };
    return (
        <AnimatePresence>
            {showCartPopup && (
                <motion.div
                    className="cartPopup"
                    variants={popupVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{
                        position: "fixed",
                        top: 80,
                        right: 80,
                        zIndex: 11111111,
                    }}
                >
                    <div className="cartPopup__top">
                        <div className="cartPopup__title">New Food Added</div>
                        <img
                            onClick={() => setShowCartPopup(false)}
                            src={assets.cross_icon}
                            alt=""
                            className="exit"
                        />
                    </div>
                    <hr />
                    {food_list.map((item, index) => {
                        if (cartItem[item._id] > 0) {
                            return (
                                <div key={index} className="cart__items--item ">
                                    <img src={item.image} alt="" />
                                    <div className="cart__item--info">
                                        <p className="name">{item.name}</p>
                                        <p className="price">${item.price}</p>
                                    </div>
                                    <div className="cart__item--right">
                                        <div
                                            onClick={() =>
                                                removeFromCart(item._id)
                                            }
                                            className="cross"
                                        >
                                            x
                                        </div>
                                        <div className="cart__item--counter">
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeFromCart(item._id);
                                                }}
                                                className="add"
                                            >
                                                +
                                            </div>
                                            <p>{cartItem[item._id]}</p>
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    addtoCart(item._id);
                                                }}
                                                className="remove"
                                            >
                                                -
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                    })}
                    <hr />

                    <div className="cart__bottom--total">
                        <h2>Card Totals</h2>

                        <p>${getTotalCarAmount()}</p>
                    </div>
                    <button onClick={() => navigate("/Cart")}>View Cart</button>
                </motion.div>
            )}{" "}
        </AnimatePresence>
    );
};

export default CartPopup;
