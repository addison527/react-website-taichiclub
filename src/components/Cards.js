import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from './images/MAN06766.jpg';
import image2 from './images/IMG_5794.JPG';
import image3 from './images/Test.webp';
import image4 from './images/MAN00000.jpg';
import image5 from './images/IMG_5091.jpg';
import image6 from './images/IMG_0738.jpg';

function Cards() {
  return (
    <div className='cards' style ={{padding: "2rem 1rem", backgroundColor: "#ebeff3"}}>
      <h1>Information</h1>
      <div className='cards__container'>
        <div className='cards__wrapper' >
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Class Schedule at the EBRP Main Library'
              path='/class-schedule'
            />
            <CardItem
              src={image2}
              text='Follow Along Videos Practice'
              path='/follow-along'
            />
            <CardItem
              src={image3}
              text='Master Demonstration of 24 Taichi Movement'
              path='/demonstrations'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={image4}
              text='Philosophy of TaiChi'
              path='/blogs'
            />
            <CardItem
              src={image5}
              text='Merch'
              path='/merch'
            />
            <CardItem
              src={image6}
              text='Contact Information'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;