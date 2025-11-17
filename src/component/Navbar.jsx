import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide navbar when scrolling DOWN
      if (currentScroll > lastScrollY.current) {
        setShowNav(false);
      }
      // Show only when scrolling UP AND close to top
      else {
        if (currentScroll <= 90) {   // 80 = your navbar height
          setShowNav(true);
        }
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNav ? "nav-show" : "nav-hide"}`}>
      <Link to="/">
        <img src="./logo-white.png" alt="App Logo" className="logo" />
      </Link>
      <ul className={menuOpen ? "active" : ""}>
        <li><Link to="/">Food Delivery</Link></li>
        <li><Link to="/">How it Works</Link></li>
        <li><Link to="/">Our Cities</Link></li>
        <li><Link to="/">Sign Up</Link></li>
      </ul>
      <img
        src={menuOpen ? "./menu-close.png" : "./menu-open.png"}
        alt="menu toggle"
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
