import { Link } from 'react-router-dom';
import './LinkWithIcon.css';

const LinkWithIcon = ({ link, text, icon, onClick }) => {
  return (
    <Link to={link} onClick={onClick} className='link-with-icon'>
      <span>{text}</span>
      <span className='link-with-icon__icon' style={{ backgroundImage: `url(${icon})` }}></span>
    </Link>
  );
};

export default LinkWithIcon;
