// src/App.js
import React, { useEffect, useState } from 'react';
import { getBooks, createBook } from './api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';

// function App() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     getBooks().then(response => setBooks(response.data));
//   }, []);
//   return (
//   //   <Router>
//   //     <div>
//   //       <Routes>
//   //         <Route exact path="/" component={Home} />
//   //         <Route exact path="/books/:id" component={BookDetails} />
//   //         <Route component={NotFound} />
//   //       </Routes>
//   //     </div>
//   //   </Router>

//   <div>
//       <h1>Books</h1>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>{book.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', publishedDate: '' });

  useEffect(() => {
    getBooks().then(response => setBooks(response.data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(newBook).then(response => {
      setBooks([...books, response.data]);
      setNewBook({ title: '', author: '', publishedDate: '' });
    });
  };

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          placeholder="Author"
        />
        <input
          type="date"
          name="publishedDate"
          value={newBook.publishedDate}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default App;
