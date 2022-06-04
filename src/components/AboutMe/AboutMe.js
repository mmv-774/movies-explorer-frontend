import SectionHeader from '../SectionHeader/SectionHeader';
import photo from '../../images/about-me-photo.jpeg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id='about-me' className='about-me'>
      <div className='about-me__wrapper'>
        <SectionHeader title={'Студент'} />
        <div className='about-me__content'>
          <div className='about-me__info'>
            <h3 className='about-me__info-name'>Михаил</h3>
            <p className='about-me__info-prof'>Фронтенд-разработчик, 28 лет</p>
            <p className='about-me__info-bio'>
              Я родился и живу в Челябинске. Занимаюсь программированием с 2011 года. В данный момент работаю .NET
              разработчиком.
            </p>
            <ul className='about-me__list'>
              <li className='about-me__list-item'>
                <a
                  href='https://facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='about-me__link animated-link'
                >
                  Facebook
                </a>
              </li>
              <li className='about-me__list-item'>
                <a
                  href='https://github.com/mmv-774'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='about-me__link animated-link'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img src={photo} alt='Фото студента' className='about-me__photo' />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
