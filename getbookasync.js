import React, { useState } from "react";

const GetBooksAsync = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Async callback function
  const getAllBooks = async () => {
    setLoading(true);

    // Simulate API fetch using setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Dummy book data
    const data = [
      { id: 1, title: "Book 1", author: "Author A", isbn: "1111" },
      { id: 2, title: "Book 2", author: "Author B", isbn: "2222" },
      { id: 3, title: "Book 3", author: "Author C", isbn: "3333" },
    ];

    setBooks(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>Get All Books (Async Callback)</h1>
      <button onClick={getAllBooks}>Fetch Books</button>

      {loading && <p>Loading books...</p>}

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetBooksAsync;
