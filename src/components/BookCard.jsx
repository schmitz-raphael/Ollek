import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/BookCard.css";

function BookCard({ id, title, author, description, cover }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="book-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img
        src={cover}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "5px",
          marginBottom: "15px",
        }}
      />
      <h2>{title}</h2>
      <h4 style={{ color: "#555", margin: "10px 0" }}>{author}</h4>
      <p style={{ color: "#777", fontSize: "14px" }}>{description}</p>
    </div>
  );
}

export default BookCard;
