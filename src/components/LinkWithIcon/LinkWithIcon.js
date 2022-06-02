import { Link } from 'react-router-dom';
import './LinkWithIcon.css';

const LinkWithIcon = ({ link, text, icon }) => {
  return (
    <Link to={link} className='link-with-icon animated-link'>
      <span>{text}</span>
      <span className='link-with-icon__icon' style={{ backgroundImage: `url(${icon})` }}></span>
    </Link>
  );
};

export default LinkWithIcon;
