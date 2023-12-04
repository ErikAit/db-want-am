import React from 'react'
import '../css/category.css'

export default function Category() {
  return (
    <div className='main-category'>
      <div className="main-category__container">
        <div className="item-container">
          <a href="#" className="main-category__item border">
            <img src="https://want.am/images/thumbnails/70/70/detailed/5/68292-1.jpeg.webp" alt="woman" />

            <div>
              <div className="main-category__item-title">Կանանց նվերներ</div>
              <div className="main-category__item-kolvo">216 իր</div>
              <div className="main-category__item-price">Սկսած <span>3900ԴՐ</span></div>
            </div>
          </a>

          <a href="#" className="main-category__item border">
            <img src="https://want.am/images/thumbnails/70/70/detailed/2/71102-1.jpeg.webp" alt="man" />

            <div>
              <div className="main-category__item-title">Տղամարդկանց նվերներ</div>
              <div className="main-category__item-kolvo">308 իր</div>
              <div className="main-category__item-price">Սկսած <span>3000ԴՐ</span></div>
            </div>
          </a>

          <a href="#" className="main-category__item">
            <img src="https://want.am/images/thumbnails/70/70/detailed/6/U0437307_big.jpeg.webp" alt="dodik" />

            <div>
              <div className="main-category__item-title">Հոբբի</div>
              <div className="main-category__item-kolvo">1382 իր</div>
              <div className="main-category__item-price">Սկսած <span>3900ԴՐ</span></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
