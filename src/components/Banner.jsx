import React from 'react'
import '../css/banner.css'

export default function Banner() {
  return (
    <div className='main-banner'>
      <div className="all-main-banner-container">
        <div className="textContent">
          <h2>Սեղանի խաղեր</h2>
          <p>Մեր օնլայն խանութում ներկայացված է ամենասիրված եւ տարածված սեղանի խաղերի ամենալայն տեսականին Հայաստանում։ Մենք համարվում ենք Hobby World, Cosmodrome Games, GaGa Games, Стиль Жизни, Crowd Games, Lavka Games, Экономикус, Экивоки ապրանքանիշների մատակարարները, որոնց զինանոցում այնպիսի խաղեր են, ինչպիսիք
            են Catan, Имаджинариум, Codenames, Манчкин, Пандемия, Серп, Покорение Марса, Бункер եւ այլն։7
          </p>
          <a href="#">ԱՎԵԼԻՆ</a>
        </div>

        <div className="image">
          <img src="https://want.am/images/promo/13/2_1les-x4.jpeg" alt="banner" />
        </div>
      </div>
    </div>
  )
}
