import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='portfolio__wrapper'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>
            <a
              href='https://github.com/mmv-774/how-to-learn/'
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link animated-link'
            >
              <span className='portfolio__link-text'>Статичный сайт</span>
              <span className='portfolio__link-mnemonic'>&#8599;</span>
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a
              href='https://github.com/mmv-774/russian-travel/'
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link animated-link'
            >
              <span className='portfolio__link-text'>Адаптивный сайт</span>
              <span className='portfolio__link-mnemonic'>&#8599;</span>
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a
              href='https://github.com/mmv-774/react-mesto-api-full/'
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link animated-link'
            >
              <span className='portfolio__link-text'>Одностраничное приложение</span>
              <span className='portfolio__link-mnemonic'>&#8599;</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
