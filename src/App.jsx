import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookReviews from "./pages/Reviews";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile"; // Import Profile Component
import Navbar from "./components/Navbar";
import Books from "./pages/Books"; // Import Books Component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/reviews" element={<BookReviews />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/books" element={<Books />} /> {/* Books Page */}
      </Routes>
    </div>
  );
}

export default App;
