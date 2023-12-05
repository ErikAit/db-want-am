import React from 'react'
import Cards from './Cards.jsx'
import '../css/Card.css'
import Products from './Products.jsx';

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
  ];

  let allProducts = [
    {
      id: 1,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/mmoey9mg9n9315t2z2kos5xv2y9xvylj.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 16900
    },
    {
      id: 2,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/igroved_harry-potter_01.jpeg.webp',
      title: '',
      price: 27900
    },
    {
      id: 3,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/untitled-3.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 12900
    },
    {
      id: 4,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/lifestyleltd-7-chudes-duel-panteon-02.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 13900
    },
    {
      id: 5,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/8a9786dc2100ec3b5ba3665a8afd452a.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 19900
    },
    {
      id: 6,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/101276905_0.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 10500
    },
    {
      id: 7,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/101294965_0.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 16500
    },
    {
      id: 8,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/101294965_0.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 1900
    },
    {
      id: 9,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/6012677165.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 14900
    },
    {
      id: 10,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/d29264186652l.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 5500
    },
    {
      id: 11,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/wyjKEAvKnt0.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 27500
    },
    {
      id: 12,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/lifestyleltd-katamino-travel-01.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 11900
    },
    {
      id: 13,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/101294972_0.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 19500
    },
    {
      id: 14,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/Pathfinder_2th_ed_00-1200x800.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 22500
    },
    {
      id: 15,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/TheWitcher_TRPG_CoreBook-1200x800.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 12900
    },
    {
      id: 16,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/tigr_00-1200x800.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 8900
    },
    {
      id: 17,
      img: 'https://want.am/images/thumbnails/400/400/detailed/15/6730537579.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 13000
    },
    {
      id: 18,
      img: 'https://want.am/images/thumbnails/400/400/detailed/14/Path_of_the_Serpent_00-1200x800.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 33500
    },
    {
      id: 19,
      img: 'https://want.am/images/thumbnails/400/400/detailed/14/dune_rulebook_00-1200x800.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 17500
    },
    {
      id: 20,
      img: 'https://want.am/images/thumbnails/400/400/detailed/14/dune_rulebook_00-1200x800.jpeg.webp',
      title: 'Քվեստբոքս.Կամելոտի փորձությունը',
      price: 16900
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

      <div className="title">
        <h2>ԲՈԼՈՐ ՆՎԵՐՆԵՐԸ</h2>
      </div>

      <div className="card wa-container">
        {
          allProducts.map(items => {
            return <Products src={items.img} title={items.title} price={items.price} key={items.id} />
          })
        }
      </div>
    </main>
  )
}
