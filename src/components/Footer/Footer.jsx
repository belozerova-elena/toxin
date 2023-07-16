import Logo from '../Logo/Logo'
import './Footer.scss';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__container-wrapper'>
            <section className='footer__container-wrapper--about'>
              <Logo/>
              <p className='footer__container-wrapper--about-presentation'>Бронирование номеров в лучшем отеле 2023 года по версии ассоциации «Отельные взгляды»</p>
            </section>
            <section className='footer__container-wrapper--links'>
              <div className='footer__container-wrapper--links-column'>
                <div className='links'>
                  <div className='heading'>
                    <h3 className='heading__title heading__title-h3'>навигация</h3>
                  </div>
                  <ul className='links__list'>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">О нас</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Новости</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Служба поддержки</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Услуги</a></li>
                  </ul>
                </div>
              </div>
              <div className='footer__container-wrapper--links-column'>
                <div className='links'>
                  <div className='heading'>
                    <h3 className='heading__title heading__title-h3'>О нас</h3>
                  </div>
                  <ul className='links__list'>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">О сервисе</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Наша команда</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Вакансии</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Инвесторы</a></li>
                  </ul>
                </div>
              </div>
              <div className='footer__container-wrapper--links-column'>
                <div className='links'>
                  <div className='heading'>
                    <h3 className='heading__title heading__title-h3'>Служба поддержки</h3>
                  </div>
                  <ul className='links__list'>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Соглашение</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Сообщества</a></li>
                    <li className='links__list-item'><a className='links__list-item--link' href="#">Связь с нами</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <div className='footer__container-wrapper--subscribe'>
              <div className='subscribe'>
                <div className='heading'>
                  <h3 className='heading__title heading__title-h3'>Подписка</h3>
                </div>
                <p className='subscribe__text'>Получайте специальные предложения и новости сервиса</p>
                <form className='subscribe__form' action="#">
                  <div className='text-input'>
                    <input className='text-input__input text-input__input--without-arrow' type="email" name="email" placeholder="Email" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='footer__bottom-container'>
            <p className='footer__bottom-container--copyright-text'>Copyright &copy; 2023 Toxin отель. Все права защищены.</p>
            <section className='footer__bottom-container--social'>
              <div className='social'>
                <a className='social__link' href="#">
                  <div className='social__link-img social__link-twitter'></div>
                </a>
                <a className='social__link' href="#">
                  <div className='social__link-img social__link-facebook'></div>
                </a>
                <a className='social__link' href="#">
                  <div className='social__link-img social__link-instagram'></div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </footer>

      <footer className='footer-mobile'>
        <div className='footer-mobile__wrapper'>
          <Logo/>
          <div className='footer-mobile__copyright-text'>Copyright &copy; 2023 Toxin отель. Все права защищены.</div>
          <div className='footer-mobile__social'>
            <div className='social'>
              <a className='social__link' href="#">
                <div className='social__link-img social__link-twitter'></div>
              </a>
              <a className='social__link' href="#">
                <div className='social__link-img social__link-facebook'></div>
              </a>
              <a className='social__link' href="#">
                <div className='social__link-img social__link-instagram'></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer; 