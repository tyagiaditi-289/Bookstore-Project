import React, { useState } from "react";

const SearchTitle = () => {
  const books = [
    { id: 1, title: "Book One", author: "Author A", isbn: "1111" },
    { id: 2, title: "Book Two", author: "Author B", isbn: "2222" },
    { id: 3, title: "Book Three", author: "Author C", isbn: "3333" },
    { id: 4, title: "Book Four", author: "Author B", isbn: "4444" },
  ];

  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  // Function to search books by Title (Promise)
  const searchBooksByTitle = (titleName) => {
    return new Promise((resolve, reject) => {
      const found = books.filter((b) =>
        b.title.toLowerCase().includes(titleName.toLowerCase())
      );

      setTimeout(() => {
        if (found.length > 0) resolve(found);
        else reject("No books found with this title");
      }, 1000); // simulate delay
    });
  };

  const handleSearch = () => {
    setMessage("Searching...");
    setResults([]);

    searchBooksByTitle(title)
      .then((res) => {
        setMessage(`Books matching "${title}":`);
        setResults(res);
      })
      .catch((err) => {
        setMessage(err);
      });
  };

  return (
    <div>
      <h1>Search Books by Title</h1>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <p>{message}</p>
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTitle;
