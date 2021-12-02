
import React from "react";
import CardItem from '../CardItem';

const Book = ( {book}) => {
  return (
    <div className={`book`}>
      <CardItem
                src="http://placehold.it/60x80"
                text={book.book_name}
                label={book.book_type}
                path='/services'
              />
    </div>

    
  )
}

export default Book