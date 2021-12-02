//import 'Book.css'

import { useState, useEffect } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Books from './Books'
//import AddBook from './AddBook'
//import Button from './Button'

const BooksTab = () => {
  //const [showAddBook, setShowAddBook] = useState(false)
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBooks(booksFromServer)
    }

    getBooks()
  }, [])

  // Fetch Books
  const fetchBooks = async () => {
    const res = await fetch('http://localhost:5000/books', {method: 'GET'})
    const data = await res.json()

    return data
  }

  // Fetch Book
/*   const fetchBook = async (id) => {
    const res = await fetch(`http://localhost:5000/books`,{ method: 'GET'})
    const data = await res.json()

    return data
  } */

  // Add Book
  const addBook = async (book) => {
    const res = await fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(book),
    })

    const data = await res.json()

    setBooks([...books, data])

  }

  // Delete Book
/*   const deleteBook = async (id) => {
    const res = await fetch(`http://localhost:5000/books`, { method: 'DELETE'})
    res.status === 200
      ? setBooks(books.filter((book) => book.t_id !== id))
      : alert('Error Deleting This Book')
  } */

  //&&for no 'else'
  return (
    <div>

      {books.length > 0 ? (
        <Books
          books={books}
        />
      ) : (
        'No books available fitting your description.'
      )}
    </div>
  );
}

export default BooksTab