import './NavTab.css';

const NavTab = () => {
  return (
    <section className='nav-tab'>
      <div className='nav-tab__wrapper'>
        <nav>
          <ul className='nav-tab__list'>
            <li className='nav-tab__list-item'>
              <a href='#' className='nav-tab__link animated-link'>
                О проекте
              </a>
            </li>
            <li className='nav-tab__list-item'>
              <a href='#' className='nav-tab__link animated-link'>
                Технологии
              </a>
            </li>
            <li className='nav-tab__list-item'>
              <a href='#' className='nav-tab__link animated-link'>
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavTab;
