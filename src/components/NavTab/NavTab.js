import './NavTab.css';

const NavTab = () => {
  return (
    <section className='nav-tab'>
      <nav className='nav-tab__nav'>
        <ul className='nav-tab__list'>
          <li className='nav-tab__list-item'>
            <a href='#about-project' className='nav-tab__link animated-link'>
              О проекте
            </a>
          </li>
          <li className='nav-tab__list-item'>
            <a href='#techs' className='nav-tab__link animated-link'>
              Технологии
            </a>
          </li>
          <li className='nav-tab__list-item'>
            <a href='#about-me' className='nav-tab__link animated-link'>
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavTab;
