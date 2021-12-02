
import Book from './Book'
import React from 'react';
import '../Cards.css';


const Books = ({ books }) => {


  return (
    <>
      <div className='cards'>
      <h1>Books Available</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <>
            {books.map((book, index) => (
              <Book key={index} book={book}/>
            ))}
              </>
              
            </ul>
            
        </div>
      </div>
    </div>
    </>
  );
}

export default Books;