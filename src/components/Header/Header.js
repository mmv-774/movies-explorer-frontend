import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ loggedIn }) => {
  return (
    <header className='header'>
      <Link to='/' className='animated-link'>
        <img src={logo} alt='Логотип' className='header__logo' />
      </Link>
      {loggedIn ? <Navigation /> : <AuthNavigation />}
    </header>
  );
};

export default Header;
