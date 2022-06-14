import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ movie, isUserCard, isSavedCard, onSaveMovie, onDeleteMovie }) => {
  const [isSaved, setIsSaved] = React.useState(isSavedCard);

  const handleCardButtonClick = () => {
    if (isSaved) {
      onDeleteMovie(movie.id || movie._id);
    } else {
      onSaveMovie(movie);
    }
    setIsSaved(!isSaved);
  };

  const handleDeleteButtonClick = () => {
    onDeleteMovie(movie._id);
  };

  const declOfNum = (number, words) => {
    return words[
      number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
    ];
  };

  const renderButton = () => {
    if (isUserCard)
      return (
        <button
          type='button'
          className={'movies-card__button movies-card__button_type_delete'}
          onClick={handleDeleteButtonClick}
        ></button>
      );
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
        <span className='movies-card__title'>{movie.nameRU}</span>
        <span className='movies-card__time'>{`${movie.duration} ${declOfNum(movie.duration, [
          'минута',
          'минуты',
          'минут',
        ])}`}</span>
      </div>
      <a href={movie.trailerLink} target='_blank' rel='noopener noreferrer' className='movies-card__img-link'>
        <img
          src={!isUserCard ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
          alt='Постер фильма'
          className='movies-card__img'
        />
      </a>
      <div className='movies-card__footer'>{renderButton()}</div>
    </div>
  );
};

export default MoviesCard;
