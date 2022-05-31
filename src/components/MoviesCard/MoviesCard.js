import PropTypes from 'prop-types';
import photo from '../../images/movies-card-img.png';
import './MoviesCard.css';

const MoviesCard = ({ mode }) => {
  const getButtonStyle = (mode) => {
    switch (mode) {
      case 'like':
        return 'movies-card__button_type_like';
      case 'delete':
        return 'movies-card__button_type_delete';
      default:
        return 'movies-card__button_type_save';
    }
  };
  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <span className='movies-card__title'>В погоне за Бенкси</span>
        <span className='movies-card__time'>27 минут</span>
      </div>
      <img src={photo} alt='Постер фильма' className='movies-card__img' />
      <div className='movies-card__footer'>
        <button type='button' className={`movies-card__button ${getButtonStyle(mode)} animated-button`}>
          {mode === 'default' && 'Сохранить'}
        </button>
      </div>
    </li>
  );
};

MoviesCard.propTypes = {
  mode: PropTypes.oneOf(['default', 'like', 'delete']),
};

MoviesCard.defaultProps = {
  mode: 'default',
};

export default MoviesCard;
