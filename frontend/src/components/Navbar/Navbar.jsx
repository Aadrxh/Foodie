import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import { ThemeContext } from "../context/ThemeContext";
import {
  Home,
  Menu,
  Smartphone,
  Heart,
  Phone,
  ShoppingCart,
  User,
  Sun,
  Moon,
  HelpCircle,
  Utensils,
  Menu as MenuIcon,
  X,
  SquareMenu,
} from "lucide-react";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showHamburger, setShowHamburger] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavMenuClick = (event, menuName, id) => {
    event.preventDefault();
    setMenu(menuName);
    setShowHamburger(false);
    if (id) {
      if (location.pathname !== "/") {
        localStorage.setItem("scrollToMenu", "true");
        navigate("/");
      } else {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className={`navbar ${theme === "dark" ? "navbar-dark" : ""}`}>
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={assets.foodie_icon} alt="app icon" className="app-icon" />
        </Link>

        {/* Desktop menu (center) */}
        <nav className="navbar-menu navbar-menu-desktop">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`nav-item ${menu === "home" ? "active" : ""}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/restaurants"
            onClick={() => setMenu("restaurants")}
            className={`nav-item ${menu === "restaurants" ? "active" : ""}`}
          >
            <Utensils size={18} />
            <span>Restaurant</span>
          </Link>
          <a
            href="#explore-menu"
            className={`nav-item ${menu === "menu" ? "active" : ""}`}
            onClick={(e) => handleNavMenuClick(e, "menu", "explore-menu")}
          >
            <MenuIcon size={18} />
            <span>Menu</span>
          </a>
          <a
            href="#appdownload"
            className={`nav-item ${menu === "mobile-app" ? "active" : ""}`}
            onClick={(e) => handleNavMenuClick(e, "mobile-app", "appdownload")}
          >
            <Smartphone size={18} />
            <span>Mobile App</span>
          </a>
          <Link
            to="/wishlist"
            onClick={() => setMenu("wishlist")}
            className={`nav-item ${menu === "wishlist" ? "active" : ""}`}
          >
            <Heart size={18} />
            <span>Wishlist</span>
          </Link>
          <a
            href="#footer"
            className={`nav-item ${menu === "contact-us" ? "active" : ""}`}
            onClick={(e) => handleNavMenuClick(e, "contact-us", "footer")}
          >
            <Phone size={18} />
            <span>Contact</span>
          </a>
          <a
            href="#faq"
            className={`nav-item ${menu === "faq" ? "active" : ""}`}
            onClick={(e) => handleNavMenuClick(e, "faq", "faq")}
          >
            <HelpCircle size={18} />
            <span>FAQ</span>
          </a>
        </nav>


        {/* Right section */}
        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="navbar-cart">
            <Link to="/cart" className="icon-button" aria-label="Go to cart">
              <ShoppingCart size={18} />
              {getTotalCartAmount() > 0 && <div className="cart-dot"></div>}
            </Link>
          </div>
          <button className="signin-button" onClick={() => setShowLogin(true)}>
            <User size={16} />
            <span>Sign In</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            className="hamburger-toggle"
            onClick={() => setShowHamburger(!showHamburger)}
            aria-label="Toggle menu"
          >
            {showHamburger ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Hamburger dropdown (mobile only) */}
      {showHamburger && (
        <div className="hamburger-dropdown">
          <Link
            to="/wishlist"
            className="nav-item"
            onClick={() => setMenu("wishlist")}
          >
            <Heart size={18} />
            <span>Wishlist</span>
          </Link>
          <a
            href="#appdownload"
            className="nav-item"
            onClick={(e) => handleNavMenuClick(e, "mobile-app", "appdownload")}
          >
            <Smartphone size={18} />
            <span>Mobile App</span>
          </a>
          <a
            href="#footer"
            className="nav-item"
            onClick={(e) => handleNavMenuClick(e, "contact-us", "footer")}
          >
            <Phone size={18} />
            <span>Contact</span>
          </a>
          <a
            href="#faq"
            className="nav-item"
            onClick={(e) => handleNavMenuClick(e, "faq", "faq")}
          >
            <HelpCircle size={18} />
            <span>FAQ</span>
          </a>
        </div>
      )}

      {/* Mobile bottom navbar */}
      <nav className="navbar-menu-mobile">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`nav-item ${menu === "home" ? "active" : ""}`}
        >
          <Home size={18} />
          <span>Home</span>
        </Link>
        <Link
          to="/restaurants"
          onClick={() => setMenu("restaurants")}
          className={`nav-item ${menu === "restaurants" ? "active" : ""}`}
        >
          <Utensils size={18} />
          <span>Restaurant</span>
        </Link>
        <a
          href="#explore-menu"
          className={`nav-item ${menu === "menu" ? "active" : ""}`}
          onClick={(e) => handleNavMenuClick(e, "menu", "explore-menu")}
        >
          <Menu size={18} />
          <span>Menu</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
