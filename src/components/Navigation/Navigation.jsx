import './Navigation.scss'

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <a className='navigation__list-item--link navigation__list-item--link-active' href="#">О нас</a>
        </li>
        <li className='navigation__list-item'>
          <a className='navigation__list-item--link' href="#">Услуги</a>
        </li>
        <li className='navigation__list-item'>
          <a className='navigation__list-item--link' href="#">Вакансии</a>
        </li>
        <li className='navigation__list-item'>
          <a className='navigation__list-item--link' href="#">Новости</a>
        </li>
        <li className='navigation__list-item'>
          <a className='navigation__list-item--link' href="#">Соглашения</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation; 