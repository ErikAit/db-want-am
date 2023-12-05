import React from 'react'

export default function Cards(props) {
  return (
    <div className='item'>
      <img src={props.src} alt="img" />

      <div>
        <p className="title">{props.title}</p>
        <p className="price">{props.price}asdcasdasdasd</p>
      </div>

      <div className="top">TOP</div>
      <div class='bx bx-heart heart'>
        <div className="text">Առանձնացնել</div>
      </div>
    </div>
  )
}
