import React, { useState } from "react";

const Review = () => {
  // Initial book data
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author A", isbn: "1111", review: "Excellent book." },
    { id: 2, title: "Book 2", author: "Author B", isbn: "2222", review: "Very informative." },
    { id: 3, title: "Book 3", author: "Author A", isbn: "3333", review: "" },
  ]);

  const [isbn, setIsbn] = useState("");
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();
    const updatedBooks = books.map((book) =>
      book.isbn === isbn ? { ...book, review: review } : book
    );
    setBooks(updatedBooks);

    const updatedBook = updatedBooks.find((b) => b.isbn === isbn);
    if (updatedBook) {
      setMessage(`Review for "${updatedBook.title}" updated successfully!`);
    } else {
      setMessage("No book found with this ISBN.");
    }

    setIsbn("");
    setReview("");
  };

  return (
    <div>
      <h1>Add / Modify Book Review</h1>
      <form onSubmit={handleAddReview}>
        <input
          type="text"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Enter Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea><br /><br />
        <button type="submit">Save Review</button>
      </form>

      {message && <p>{message}</p>}

      <h2>Books List with Reviews</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - ISBN: {book.isbn} <br />
            Review: {book.review || "No review yet"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
