import React, { useState } from "react";

const DeleteReview = () => {
  // Initial book data
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author A", isbn: "1111", review: "Excellent book." },
    { id: 2, title: "Book 2", author: "Author B", isbn: "2222", review: "Very informative." },
    { id: 3, title: "Book 3", author: "Author A", isbn: "3333", review: "Amazing storyline!" }, // assume added earlier
  ]);

  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteReview = (e) => {
    e.preventDefault();
    let found = false;

    const updatedBooks = books.map((book) => {
      if (book.isbn === isbn && book.review) {
        found = true;
        return { ...book, review: "" }; // delete review
      }
      return book;
    });

    setBooks(updatedBooks);

    if (found) {
      setMessage(`Review for book with ISBN ${isbn} deleted successfully!`);
    } else {
      setMessage("No review found for this ISBN.");
    }

    setIsbn("");
  };

  return (
    <div>
      <h1>Delete Book Review</h1>
      <form onSubmit={handleDeleteReview}>
        <input
          type="text"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        /><br /><br />
        <button type="submit">Delete Review</button>
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

export default DeleteReview;
