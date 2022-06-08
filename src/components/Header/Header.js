import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = ({ loggedIn, backgroundColor }) => {
  return (
    <header className={`header header_background-color_${backgroundColor}`}>
      <div className='header__wrapper'>
        <Link to='/' className='header__link'>
          <img src={logo} alt='Логотип' className='header__logo' />
        </Link>
        {loggedIn ? <Navigation /> : <AuthNavigation />}
      </div>
    </header>
  );
};

export default Header;
