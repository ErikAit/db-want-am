import React from 'react'
import '../css/header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className="header-top">
        <div className="all-header-top-container">

          <div className="language">
            <ul>
              <li>
                <a href="#">AM <i class='bx bx-chevron-down'></i></a>

                <div className="ru">RU</div>
              </li>
            </ul>
          </div>

          <nav className="navbar">
            <ul className="menu">
              <li><a href="#">առաքում և վճարում</a></li>
              <li><a href="#">կոնտակտներ</a></li>
            </ul>
          </nav>

          <div className="search">
            <label htmlFor="text"><i class='bx bx-search'></i></label>
            <input type="text" name='text' id='text' />
          </div>

        </div>
      </div>

      <div className="tygh-header">
        <div className="all-tygh-header-container">
          <div className="icons">
            <i class='bx bx-envelope'></i>
            <i class='bx bxs-phone left'></i>
          </div>

          <div className="main-image">
            <img src="https://want.am/design/themes/wantam/media/images/logo2.png?1701602894" alt="main" />
          </div>

          <div className="icons">
            <i class='bx bxs-heart col'></i>
            <i class='bx bxs-shopping-bag left col'></i>

            <a href="#">մուտք</a>
          </div>
        </div>

      </div>

      <div className="row-fluid">
        <ul className="cont">
          <li style={{ position: 'relative' }} className='menu'>
            <a href="#">
              <div className="menu-close-btn">
                <div className='first'></div>
                <div className='middle'></div>
                <div className='last'></div>
              </div>
              ԲՈԼՈՐ ՆՎԵՐՆԵՐԸ
            </a>

            <div className='catalog'>
              <div>
                <h2>Կանանց նվերներ</h2>
                <a href="#">Կանանցի ժամացույցներ</a>
                <a href="#">Զարդեր</a>
                <a href="#">Կանանց թոփ 50</a>
              </div>
              <div>
                <h2>Տղամարդկանց նվերներ</h2>
                <a href="#">Տղամարդկանց ժամացույցներ</a>
                <a href="#">Կանանց թոփ 50</a>
                <a href="#">Գործիքներ</a>
              </div>
              <div>
                <h2>Տան համար</h2>
                <a href="#">Խոհանոցի համար</a>
                <p>Թերմոսներ</p>
                <a href="#">Լուսամփոփներ</a>
                <a href="#">ժամացույցներ</a>
                <a href="#">Գադժետներ</a>
                <a href="#">Ակվարիումներ</a>
              </div>
              <div>
                <h2>Երեխաների համար</h2>
              </div>
              <div>
                <h2>Տոներ</h2>
                <a href="#">Սուրբ Վալենտինի օր</a>
                <a href="#">Բանակի օր</a>
                <a href="#">Մարտի 8</a>
                <a href="#">Ապրիլի 7</a>
              </div>
              <div>
                <h2>Հոբբի</h2>
                <a href="#">Մոդելավորում</a>
                <p>Zvezda</p>
                <p>Հավաքված մոդելներ</p>
                <p>UGears</p>
                <h2>Փազլեր</h2>
                <h2>Սեղանի խաղեր</h2>
                <p>Hobby World</p>
                <p>Lavka Games</p>
                <p>Cosmodrome Games</p>
                <p>Gaga Games</p>
                <p>Magic: Gathering</p>
                <p>Crowd Games</p>
                <p>Zvezda</p>
                <p>Стиль жизни</p>
                <p>Экономикус</p>
                <p>Экивоки</p>
                <h2>Գլուխկոտրուկներ</h2>
                <h2>Ռետրո</h2>
                <h2>Գրքեր</h2>
                <h2>Օպտիկա</h2>
                <p>Աստղադիտակներ</p>
                <p>Հեռադիտակներ</p>
                <p>Մնրադիտակներ</p>
                <h2>Ավելին․․․</h2>
              </div>
              <div>
                <h2>Գրասենյակային</h2>
              </div>
              <div>
                <h2>Մեր հասցեն</h2>
              </div>
            </div>

          </li>
          <li>
            <a href="#">ՀՈԲԲԻ</a>
          </li>
          <li>
            <a href="#">ՍԵՂԱՆԻ ԽԱՂԵՐ</a>
          </li>
          <li>
            <a href="#">ՕՊՏԻԿԱ</a></li>
          <li>
            <a href="#">ԿԱՆԱՆՑ ԹՈՓ 50</a>
          </li>
          <li>
            <a href="#">ՏՂԱՄԱՐԴԿԱՆՑ ԹՈՓ 50</a>
          </li>
          <li>
            <a href="#">ԳՐԱՍԵՆՅԱԿԱՅԻՆ</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
