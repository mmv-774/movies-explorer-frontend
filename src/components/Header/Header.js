import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='animated-link'>
        <img src={logo} alt='Логотип' />
      </Link>
    </header>
  );
};

export default Header;
