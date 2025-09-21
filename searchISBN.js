import React, { useState } from "react";

const SearchISBN = () => {
  const books = [
    { id: 1, title: "Book 1", author: "Author A", isbn: "1111" },
    { id: 2, title: "Book 2", author: "Author B", isbn: "2222" },
    { id: 3, title: "Book 3", author: "Author C", isbn: "3333" },
  ];

  const [isbn, setIsbn] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  // Function to search book by ISBN using Promise
  const searchBookByISBN = (isbn) => {
    return new Promise((resolve, reject) => {
      const book = books.find((b) => b.isbn === isbn);
      setTimeout(() => {
        if (book) resolve(book);
        else reject("No book found with this ISBN");
      }, 1000); // simulate delay
    });
  };

  const handleSearch = () => {
    setMessage("Searching...");
    setResult(null);

    searchBookByISBN(isbn)
      .then((book) => {
        setMessage("Book found:");
        setResult(book);
      })
      .catch((err) => {
        setMessage(err);
      });
  };

  return (
    <div>
      <h1>Search Book by ISBN (Promises)</h1>
      <input
        type="text"
        placeholder="Enter ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <p>{message}</p>
      {result && (
        <p>
          {result.title} by {result.author} (ISBN: {result.isbn})
        </p>
      )}
    </div>
  );
};

export default SearchISBN;
