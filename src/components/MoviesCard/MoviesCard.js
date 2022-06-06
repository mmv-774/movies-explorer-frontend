import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ name, duration, image }) => {
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
    <div className='movies-card'>
      <div className='movies-card__header'>
        <span className='movies-card__title'>{name}</span>
        <span className='movies-card__time'>{`${duration} минут`}</span>
      </div>
      <img src={image} alt='Постер фильма' className='movies-card__img' />
      <div className='movies-card__footer'>{renderButton()}</div>
    </div>
  );
};

export default MoviesCard;
