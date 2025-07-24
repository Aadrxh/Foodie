import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownlad/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ThemeContextProvider from "./components/context/ThemeContext";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import { Toaster } from "react-hot-toast";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <ThemeContextProvider>
      <>
        <Toaster position="top-right" reverseOrder={false} />
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/food/:id" element={<FoodDetail />}></Route>
          </Routes>
          <AppDownload />
          <Footer />
        </div>
      </>
    </ThemeContextProvider>
  );
};

export default App;
