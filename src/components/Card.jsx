import React from 'react'
import Cards from './Cards.jsx'
import '../css/Card.css'

export default function Card() {
  let mostPopular = [
    {
      id: 1,
      img: 'https://want.am/images/thumbnails/400/400/detailed/2/HTB15qwGHFXXXXXqXFXXq6xXFXXXU.jpg.webp',
      title: 'USB ֆլեշ կրիչ կիթառի տեսքով',
      price: 7900
    },
    {
      id: 2,
      img: 'https://want.am/images/thumbnails/400/400/detailed/7/dino000.jpeg.webp',
      title: 'Սենսորային սիլիկոնե լուսամփոփ «Դինոզավր»',
      price: 10900
    },
    {
      id: 3,
      img: 'https://want.am/images/thumbnails/400/400/detailed/13/700-nw_xvau-na.jpeg.webp',
      title: 'Սթորմգլաս բյուրեղի տեսքով',
      price: 13500
    },
    {
      id: 4,
      img: 'https://want.am/images/thumbnails/400/400/detailed/3/HTB1uqJxRFXXXXb2XVXXq6xXFXXXC_wi0h-45.jpg.webp',
      title: 'Սենսորային լուսամփոփ «Նապաստակ»',
      price: 11900
    }
  ]

  return (
    <main className='main'>
      <div className="title">
        <h2>ՊԱՀԱՆՋՎԱԾ</h2>
      </div>
      <div className='card'>
        {
          mostPopular.map(items => {
            return <Cards src={items.img} title={items.title} price={items.price} key={items.id} />
          })
        }
      </div>
    </main>
  )
}
