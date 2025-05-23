import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
    const { getTotalCarAmount } = useContext(StoreContext);
    return (
        <form className="placeOrder">
            <div className="placeOrder__left">
                <div className="title">Delivery Information</div>
                <div className="multi__fields">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Street" />
                <div className="multi__fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi__fields">
                    <input type="text" placeholder="Zip Code" />
                    <input type="text" placeholder="Contry" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="placeOrder__right">
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
                        <button>Process To Payment</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
