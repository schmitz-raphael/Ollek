import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the book data from the JSON file
    const fetchBooks = async () => {
      try {
        const response = await fetch("./books.json"); // Fetch from public folder
        if (!response.ok) {
          throw new Error("Failed to load books data");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

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
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            cover={book.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
