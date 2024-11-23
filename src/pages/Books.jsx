import React, { useState } from "react";

const Books = () => {
  // Dummy book data
  const [books] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about the injustices of race and class in the Deep South.",
      cover: "/book-covers/mockingbird.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel set in a totalitarian society under constant surveillance.",
      cover: "/book-covers/1984.jpg",
    },
    {
      id: 3,
      title: "Moby Dick",
      author: "Herman Melville",
      description: "The epic tale of Captain Ahab's obsessive quest to kill the white whale.",
      cover: "/book-covers/mobydick.jpg",
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Available Books</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={book.cover}
              alt={book.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "15px",
              }}
            />
            <h2>{book.title}</h2>
            <h4 style={{ color: "#555", margin: "10px 0" }}>{book.author}</h4>
            <p style={{ color: "#777", fontSize: "14px" }}>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
