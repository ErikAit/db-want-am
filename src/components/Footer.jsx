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
    </footer>
  )
}
