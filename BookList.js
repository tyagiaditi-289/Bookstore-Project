import React, { useState } from "react";

const BookList = () => {
  // Book data with reviews
  const books = [
    { id: 1, title: "Book 1", author: "Author A", isbn: "1111", review: "Excellent book for beginners." },
    { id: 2, title: "Book 2", author: "Author B", isbn: "2222", review: "Very informative and detailed." },
    { id: 3, title: "Book 3", author: "Author A", isbn: "3333", review: "Good read, but a bit lengthy." },
  ];

  const [isbn, setIsbn] = useState("");        // User input
  const [bookReview, setBookReview] = useState(null); // Review result

  const handleSearch = () => {
    const book = books.find((b) => b.isbn === isbn);
    setBookReview(book ? book.review : "No review found for this ISBN.");
  };

  return (
    <div>
      <h1>Get Book Review</h1>
      <input
        type="text"
        placeholder="Enter ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {bookReview && (
        <div>
          <h2>Review:</h2>
          <p>{bookReview}</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
