import React, { useState } from "react";

const SearchAuthor = () => {
  const books = [
    { id: 1, title: "Book 1", author: "Author A", isbn: "1111" },
    { id: 2, title: "Book 2", author: "Author B", isbn: "2222" },
    { id: 3, title: "Book 3", author: "Author C", isbn: "3333" },
    { id: 4, title: "Book 4", author: "Author B", isbn: "4444" },
  ];

  const [author, setAuthor] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  // Function to search books by Author (Promise)
  const searchBooksByAuthor = (authorName) => {
    return new Promise((resolve, reject) => {
      const found = books.filter(
        (b) => b.author.toLowerCase() === authorName.toLowerCase()
      );

      setTimeout(() => {
        if (found.length > 0) resolve(found);
        else reject("No books found for this author");
      }, 1000); // simulate API delay
    });
  };

  const handleSearch = () => {
    setMessage("Searching...");
    setResults([]);

    searchBooksByAuthor(author)
      .then((res) => {
        setMessage(`Books by ${author}:`);
        setResults(res);
      })
      .catch((err) => {
        setMessage(err);
      });
  };

  return (
    <div>
      <h1>Search Books by Author</h1>
      <input
        type="text"
        placeholder="Enter Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <p>{message}</p>
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            {book.title} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAuthor;
