import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/nav/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import CartPopup from "./components/CartPopup/CartPopup";
const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    return (
        <>
            <AnimatePresence>
                {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            </AnimatePresence>
            <AnimatePresence>
                {showCartPopup ? (
                    <CartPopup
                        showCartPopup={showCartPopup}
                        setShowCartPopup={setShowCartPopup}
                    />
                ) : (
                    <></>
                )}
            </AnimatePresence>
            <div className="app">
                <Nav
                    setShowLogin={setShowLogin}
                    setShowCartPopup={setShowCartPopup}
                    showCartPopup={showCartPopup}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/placeOrder" element={<PlaceOrder />} />
                    <Route path="/productDetail/:id" element={<Details />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
