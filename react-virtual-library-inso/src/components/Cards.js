import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these NEW arrivals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/TLTHTM.jpeg'
              text='The Last Thing He Told Me'
              label='BEST SELLER'
              path='/services'
            />
            <CardItem
              src='images/PWMOV.jpg'
              text='People We Meet On Vacation'
              label='#1 NEW YORK TIMES'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/LCV.jpg'
              text='Los Cuatro Vientos'
              label='BEST SELLER'
              path='/services'
            />
            <CardItem
              src='images/56D.jpg'
              text='56 Days'
              label='MYSTERY'
              path='/services'
            />
            <CardItem
              src='images/BM.jpg'
              text='Billy Summers'
              label='ACTION'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
