import React from 'react';
import '../../App.css';
import { useState } from 'react'


const Trade = ({ onAdd }) => {
  const [book_name, setName] = useState('')
  const [book_author, setAuthor] = useState('')
  const [book_type, setType] = useState('')
  //const [book_publication, setPublication] = useState('')
  const [book_publication_date, setPublicationDate] = useState('')
  const [book_isbn, setIsbn] = useState('')

  const [book_person_id, setPersonId] = useState('') //from backend (non input)
  
  const [book_image, setImage] = useState('') //optional

  const onSubmit = (e) => {
    e.preventDefault()

    if (!book_name) {
      alert('Please add a name for your book.')
      return
    }

    addBook({book_name, book_author, book_publication_date, book_type, book_isbn, book_person_id, book_image})

    setName('')
    setAuthor('')
    setType('')
    //setPublication('')
    setPublicationDate('')
    setIsbn('')
    setImage('')
  }

  const [books, setBooks] = useState([])
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

  return (
    <div className='container'>
      <form className='add-form' onSubmit={onSubmit}>

        <div className='form-control'>
          <label>Title</label>
          <input
            type='text'
            placeholder='Book Title'
            value={book_name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Author</label>
          <input
            type='text'
            placeholder='Book Author'
            value={book_author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Type</label>
          <input
            type='text'
            placeholder='Type (ex. hardcover, paperback,...)'
            value={book_type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Publication Date</label>
          <input
            type='date'
            placeholder='Publication Date'
            value={book_publication_date}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Serial Number (optional)</label>
          <input
            type='text'
            placeholder='Add a serial number.'
            value={book_isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Image</label>
          <input
            type='file'
            placeholder='Upload an image.'
            value={book_image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <input type='submit' value='Publish' className='btn btn-block' />
      </form>
    </div>
  )
}

export default Trade;