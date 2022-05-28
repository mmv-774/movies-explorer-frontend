import './NavTab.css';

const NavTab = () => {
  return (
    <div className='nav-tab'>
      <div className='nav-tab__wrapper'>
        <nav>
          <ul className='nav-tab__list'>
            <li className='nav-tab__list-item'>
              <a href='#' className='nav-tab__link'>
                О проекте
              </a>
            </li>
            <li className='nav-tab__list-item'>
              <a href='#' className='nav-tab__link'>
                Технологии
              </a>
            </li>
            <li className='nav-tab__list-item'>
              <a href='#' className='nav-tab__link'>
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavTab;
