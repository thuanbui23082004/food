import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});

    const addtoCart = (itemID) => {
        if (!cartItem[itemID]) {
            setCartItem((prev) => ({ ...prev, [itemID]: 1 }));
        } else {
            setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
        }
    };

    const removeFromCart = (itemID) => {
        setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    };
    const getTotalCarAmount = () => {
        let total = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find(
                    (product) => product._id === item
                );
                total += itemInfo.price * cartItem[item];
            }
        }
        return total;
    };
    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        removeFromCart,
        getTotalCarAmount
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
