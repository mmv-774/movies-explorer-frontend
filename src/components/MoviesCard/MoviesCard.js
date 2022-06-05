import React from 'react';
import { useLocation } from 'react-router-dom';
import photo from '../../images/movies-card-img.png';
import './MoviesCard.css';

const MoviesCard = () => {
  const [isSaved, setIsSaved] = React.useState(false);

  const { location } = useLocation();

  const handleCardButtonClick = () => {
    setIsSaved(!isSaved);
  };

  const renderButton = () => {
    if (location === '/saved-movies')
      return <button type='button' className={'movies-card__button movies-card__button_type_delete'}></button>;
    if (isSaved)
      return (
        <button
          type='button'
          className={'movies-card__button movies-card__button_type_like'}
          onClick={handleCardButtonClick}
        ></button>
      );
    return (
      <button
        type='button'
        className={'movies-card__button movies-card__button_type_save'}
        onClick={handleCardButtonClick}
      >
        Сохранить
      </button>
    );
  };

  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <span className='movies-card__title'>В погоне за Бенкси</span>
        <span className='movies-card__time'>27 минут</span>
      </div>
      <img src={photo} alt='Постер фильма' className='movies-card__img' />
      <div className='movies-card__footer'>{renderButton()}</div>
    </li>
  );
};

export default MoviesCard;
