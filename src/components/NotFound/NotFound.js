import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__wrapper'>
        <div className='not-found__info'>
          <h2 className='not-found__title'>404</h2>
          <p className='not-found__subtitle'>Страница не найдена</p>
        </div>
        <Link to='/' className='not-found__link animated-link'>
          Назад
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
