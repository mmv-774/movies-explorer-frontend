import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__container'>
          <span className='footer__date'>&copy;&nbsp;{new Date().getFullYear()}</span>
          <nav>
            <ul className='footer__list'>
              <li className='footer__list-item'>
                <a
                  href='https://practicum.yandex.ru'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__link animated-link'
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className='footer__list-item'>
                <a
                  href='https://github.com/mmv-774'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__link animated-link'
                >
                  Github
                </a>
              </li>
              <li className='footer__list-item'>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__link animated-link'
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
