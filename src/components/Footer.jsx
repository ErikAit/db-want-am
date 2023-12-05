import React from 'react'
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="all-footer-top-container">
          <div className="ty-content">
            <i class='bx bx-envelope'></i>
            <h3>Բաժանորդագրվել զեղչերի</h3>
          </div>
          <div className="form-content">
            <input placeholder='Էլ․ փոստ' type="text" id='text' />
            <label htmlFor="text">SUBSCRIBE</label>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="all-footer-middle-container">
          <div className="icons">
            <div>
              <i class='bx bxl-vk'></i>
              <i class='bx bxl-facebook'></i>
              <i class='bx bxl-instagram-alt'></i>
              <i class='bx bxl-telegram'></i>
            </div>

            <p>Կարող եք վճարել սուրհանդակին</p>
          </div>

          <div className="main-img">
            <img src="https://want.am/design/themes/wantam/media/images/logo-w.png?1701774333" alt="main" />
          </div>

          <div className="content">
            <h2>094-092-092</h2>
            <p>Աշխատում ենք 10:00-ից մինչեւ 18:00</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
