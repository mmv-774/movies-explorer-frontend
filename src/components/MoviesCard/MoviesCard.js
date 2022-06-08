import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ name, duration, image }) => {
  const [isSaved, setIsSaved] = React.useState(false);

  const { pathname } = useLocation();

  const handleCardButtonClick = () => {
    setIsSaved(!isSaved);
  };

  const declOfNum = (number, words) => {
    return words[
      number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
    ];
  };

  const renderButton = () => {
    if (pathname === '/saved-movies')
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
        <span className='movies-card__time'>{`${duration} ${declOfNum(duration, ['минута', 'минуты', 'минут'])}`}</span>
      </div>
      <img src={image} alt='Постер фильма' className='movies-card__img' />
      <div className='movies-card__footer'>{renderButton()}</div>
    </div>
  );
};

export default MoviesCard;
