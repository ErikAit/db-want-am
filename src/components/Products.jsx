import React from 'react'

export default function Products(props) {
  return (
    <div className='item'>
      <img src={props.src} alt="img" />

      <div>
        <p className="title">{props.title}</p>
        <p className="price">{props.price}</p>
      </div>

      <div className="new">NEW</div>
      <div class='bx bx-heart heart'>
        <div className="text">Առանձնացնել</div>
      </div>
    </div>
  )
}
