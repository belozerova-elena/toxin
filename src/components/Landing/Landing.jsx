import Footer from '../Footer/Footer';
import './Landing.scss';

function Landing() {
  return (
    <>
      <div className='content'>
        <main className='landing'>
          <div className='landing__container'>
            <div className='landing__container-room-search-card'>
              <div className='room-search-card'>
                <div className='room-search-card__container'>
                  <div className='heading'>
                    <h1 className='heading__title heading__title-h1'>Найдём номера под ваши пожелания</h1>
                  </div>
                  <form className='room-search-card__form' action="#">
                    <section className='room-search-card__form-date-dropdown'>
                      <div className='date-dropdown'>
                        <div className='date-dropdown__inputs'>
                          <div className='date-dropdown__inputs-start'>
                            <div className='heading'>
                              <h3 className='heading__title heading__title-h3'>прибытие</h3>
                            </div>
                            <div className='text-input'>
                              <input className='text-input__input' type="text" name="date" placeholder="ДД.ММ.ГГГГ"/>
                            </div>
                          </div>
                          <div className='date-dropdown__inputs-end'>
                            <div className='heading'>
                              <h3 className='heading__title heading__title-h3'>выезд</h3>
                            </div>
                            <div className='text-input'>
                              <input className='text-input__input' type="text" name="date" placeholder="ДД.ММ.ГГГГ"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className='room-search-card__form-dropdown'>
                      <div className='heading'>
                        <h3 className='heading__title heading__title-h3'>гости</h3>
                      </div>
                      <div className='dropdown'>
                        <input class='dropdown__input' type="text" data-type="input" placeholder="Сколько гостей"/>
                      </div>
                    </div>
                    <div className='room-search-card__button'>
                      <button className='button' type="submit">
                        <span class='button__inner button__inner-text-color--white button__inner-size-large'>подобрать номер</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p class='landing__container-self-presentation'>Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
          </div>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Landing; 