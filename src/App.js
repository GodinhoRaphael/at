import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Carousel from "./Carousel";
import ToggleSwitch from "./ToggleSwitch";
import Cart from "./Cart.jsx";
import Details from "./Details.jsx";
import logo from "./imgs/TechMart.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const detailsRef = useRef(null);

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <img className="logo" src={logo} />
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`nav-items ${isOpen ? "active" : ""}`}>
          <ToggleSwitch
            isOn={isDarkMode}
            onToggle={handleToggleTheme}
            size="medium"
            label={isDarkMode ? "Modo Escuro" : "Modo Claro"}
          />
          <li className="nav-item">Menu</li>
          <li
            className={`nav-item ${isDropdownOpen ? "active" : ""}`}
            onClick={toggleDropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a onClick={scrollToDetails}>Info</a>
            <div
              className={`dropdown-content ${isDropdownOpen ? "active" : ""}`}
            >
              <a href="#" onClick={toggleCart}>
                Cart ({cartItems.length})
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <Carousel addToCart={addToCart} />
      <Cart
        items={cartItems}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <Details ref={detailsRef} />
      <footer className="footer">© 2024 All Rights Reserved</footer>
    </div>
  );
}
