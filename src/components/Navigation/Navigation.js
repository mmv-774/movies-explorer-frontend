import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useCurrentWidth from '../../utils/hooks/useCurrentWidth';
import Backdrop from '../Backdrop/Backdrop';
import CloseButton from '../CloseButton/CloseButton';
import Drawer from '../Drawer/Drawer';
import MenuButton from '../MenuButton/MenuButton';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';
import accountIcon from '../../images/account-icon.svg';
import './Navigation.css';

const Navigation = () => {
  let width = useCurrentWidth();

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerIsOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerIsOpen(false);
  };

  const navigation = (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <Link to='/' className='navigation__link navigation__link_home'>
            Главная
          </Link>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/movies'
            className={(isActive) => `navigation__link ${isActive && 'navigation__link_active'}`}
            onClick={handleDrawerClose}
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/saved-movies'
            className={(isActive) => `navigation__link ${isActive && 'navigation__link_active'}`}
            onClick={handleDrawerClose}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <LinkWithIcon link={'/profile'} text={'Аккаунт'} icon={accountIcon} />
    </nav>
  );

  return width <= 768 ? (
    <>
      <MenuButton onClick={handleDrawerOpen} />
      <Drawer isOpen={drawerIsOpen}>
        <CloseButton onClick={handleDrawerClose} />
        {navigation}
      </Drawer>
      <Backdrop isShow={drawerIsOpen} onClick={handleDrawerClose} />
    </>
  ) : (
    <>{navigation}</>
  );
};

export default Navigation;
