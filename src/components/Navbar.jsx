import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"; // Import the CSS file

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img className="logo" src="logo.png" alt="Library Logo" />
        </Link>
      </div>

      {/* Centered Links */}
      <div>
        <Link to="/books">Books</Link>
        <Link to="/reviews">Book Reviews</Link>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
        {isLoggedIn && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
          </>
        )}
      </div>

      {/* Right-Aligned Login/Logout */}
      <div>
        {!isLoggedIn ? (
          <Link to="/login" className="user-icon">
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
