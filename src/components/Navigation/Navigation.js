import { NavLink, Link } from 'react-router-dom';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';
import accountIcon from '../../images/account-icon.svg';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <Link to='/' className='navigation__link navigation__link_home animated-link'>
            Главная
          </Link>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/movies'
            className={(isActive) => `navigation__link ${isActive && 'navigation__link_active'} animated-link`}
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/saved-movies'
            className={(isActive) => `navigation__link ${isActive && 'navigation__link_active'} animated-link`}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <LinkWithIcon link={'/profile'} text={'Аккаунт'} icon={accountIcon} />
    </nav>
  );
};

export default Navigation;
