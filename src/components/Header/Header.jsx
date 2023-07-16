import { Link } from "react-router-dom"

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container-body'>
          <Logo/>
          <div className='header__menu-burger'>
            <span className='header__menu-burger--button'></span>
          </div>
          <div className='header__container-body--menu'>
            <div className='header__container-body--menu-navigation'>
              <Navigation/>
            </div>
            <div className='header__container-body--menu-login'>
              <div className='header__container-body--menu-login-entry'>
                <Link className='button' to="/sign-in-page">
                  <span className='button__inner button__inner-text-color--purple button__inner-size-stretching button__inner-fill-white'>войти</span>
                </Link>
              </div>
              <div className='header__container-body--menu-login-register'>
                <a className='button' href="#">
                  <span className='button__inner button__inner-text-color--white button__inner-size-stretching'>зарегистрироваться</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header; 