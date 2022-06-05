import { Link } from 'react-router-dom';
import './AuthNavigation.css';

const AuthNavigation = () => {
  return (
    <nav className='auth-navigation'>
      <ul className='auth-navigation__list'>
        <li className='auth-navigation__list-item'>
          <Link to='/signup' className='auth-navigation__link auth-navigation__link_type_signup'>
            Регистрация
          </Link>
        </li>
        <li>
          <Link to='/signin' className='auth-navigation__link auth-navigation__link_type_signin'>
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavigation;
