import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const {
        cartItem,
        addtoCart,
        removeFromCart,
        food_list,
        getTotalCarAmount,
    } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="card__items--tile">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItem[item._id] > 0) {
                        return (
                            <div
                                key={index}
                                className="cart__items--item card__items--tile"
                            >
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItem[item._id]}</p>
                                <p>${cartItem[item._id] * item.price}</p>
                                <div
                                    onClick={() => removeFromCart(item._id)}
                                    className="cross"
                                >
                                    x
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="cart__bottom">
                <div className="cart__bottom--total">
                    <h2>Card Totals</h2>
                    <div>
                        <div className="cart__total--details">
                            <div>Subtotal</div>
                            <p>${getTotalCarAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart__total--details">
                            <div>Deliver Fee</div>
                            <p>{2}</p>
                        </div>
                        <hr />
                        <div className="cart__total--details">
                            <b>Total</b>
                            <b>${getTotalCarAmount() + 2}</b>
                        </div>
                        <button onClick={() => navigate("/placeOrder")}>
                            {" "}
                            Process To Checkout{" "}
                        </button>
                    </div>
                </div>
                <div className="cart__promocode">
                    <div className="title">
                        If you have a promo code, Enter it here
                    </div>
                    <div className="cart__promocode--input">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
