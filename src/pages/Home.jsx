import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Ollek!</h1>
      <p>Access a world of knowledge.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
