import cat from "../categoryobject.js";
import React from 'react';
import "../style/Card.css";


  export default function Card(){
  return(
    <>
    <div className="parent">
      {
        cat.map((ele)=>{
          return(
            <div className='card-container'>
              <div className='image-container'>
                <img src={ele.image}/>
                </div>
                <div className='details'>
                  <div className="name">{ele.name}</div>
                  <div className='price'>{ele.price}</div>
                  <div className='quantity'>{ele.quantity}</div>
                  <button>Add to cart</button>
                  </div>
                  </div>

          )
        })
      }
      </div>
      </>
  )
  }