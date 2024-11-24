import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL parameters
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch("./books.json"); // Load the JSON file from the public folder
        if (!response.ok) {
          throw new Error("Failed to fetch books data");
        }
        const books = await response.json(); // Parse the JSON
        const foundBook = books.find((b) => b.id === parseInt(id)); // Find the book by ID
        setBook(foundBook);
      } catch (error) {
        console.error("Error fetching book data:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>{book.title}</h1>
      <img
        src={book.cover}
        alt={book.title}
        style={{ maxWidth: "400px", width: "100%", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "20px" }}>{book.description}</p>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Price:</strong> ${book.price.toFixed(2)}
      </p>
    </div>
  );
};

export default BookDetails;
