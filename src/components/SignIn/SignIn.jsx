import Footer from '../Footer/Footer';
import './SignIn.scss';

function SignIn() {
  return (
    <>
      <div className='content'>
        <main className='sign-in'>
          <div className='sign-in__container'>
            <div className='sign-in__container-entry-card'>
              <div className='login-card'>
                <div className='login-card__container'>
                  <div className='heading'>
                    <h1 className='heading__title heading__title-h1'>Войти</h1>
                  </div>
                  <form className='login-card__container-form' action="#">
                    <section className='login-card__container-form--inputs'>
                      <div className='login-card__container-form--inputs-email'>
                        <div className='text-input'>
                          <input className='text-input__input' type="email" name="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className='login-card__container-form--inputs-password'>
                        <div className='text-input'>
                          <input className='text-input__input' type="password" name="password" placeholder="Пароль" />
                        </div>
                      </div>
                    </section>
                    <div className='login-card__container-form--button'>
                      <button className='button' type="submit">
                        <span className='button__inner button__inner-text-color--white button__inner-size-large'>войти</span>
                      </button>
                    </div>
                    <div className='login-card__container-form--question'>
                      <span className='login-card__container-form--question-text'>Нет аккаунта на Toxin?</span>
                      <div className='login-card__container-form--question-button'>
                        <a className='button' href="#">
                          <span className='button__inner button__inner-text-color--purple button__inner-size-small button__inner-fill-white'>создать</span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default SignIn; 