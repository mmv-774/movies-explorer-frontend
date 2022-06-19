import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import useCurrentWidth from '../../utils/hooks/useCurrentWidth';
import { findInMovies } from '../../utils/utils';
import {
  LG_TOTAL_MOVIES,
  LG_ADDED_MOVIES,
  MD_TOTAL_MOVIES,
  MD_ADDED_MOVIES,
  SM_TOTAL_MOVIES,
  SM_ADDED_MOVIES,
} from '../../utils/constants';
import './MoviesCardList.css';

const MoviesCardList = ({ isUserList, isNotFoundShow, movies, savedMovies, onSaveMovie, onDeleteMovie }) => {
  const [showedMovies, setShowedMovies] = React.useState([]);
  const [totalMovies, setTotalMovies] = React.useState(LG_TOTAL_MOVIES);
  const [totalAddedMovies, setTotalAddedMovies] = React.useState(LG_ADDED_MOVIES);
  const [isShowMoreButton, setIsShowMoreButton] = React.useState(false);

  let width = useCurrentWidth();

  React.useEffect(() => {
    calcMoviesGridSize();
  }, [width]);

  React.useEffect(() => {
    setShowedMovies(movies.slice(0, totalMovies));
  }, [totalMovies, totalAddedMovies]);

  React.useEffect(() => {
    setIsShowMoreButton(movies.length > showedMovies.length);
  }, [showedMovies]);

  React.useEffect(() => {
    setShowedMovies(movies.slice(0, totalMovies));
    setIsShowMoreButton(movies.length > totalMovies);
  }, [movies]);

  const calcMoviesGridSize = () => {
    if (width >= 1280) {
      setTotalMovies(LG_TOTAL_MOVIES);
      setTotalAddedMovies(LG_ADDED_MOVIES);
      return;
    }

    if (width >= 768 && width < 1280) {
      setTotalMovies(MD_TOTAL_MOVIES);
      setTotalAddedMovies(MD_ADDED_MOVIES);
      return;
    }

    if (width < 768) {
      setTotalMovies(SM_TOTAL_MOVIES);
      setTotalAddedMovies(SM_ADDED_MOVIES);
    }
  };

  const handleMoreButtonClick = () => {
    setShowedMovies(movies.slice(0, showedMovies.length + totalAddedMovies));
    setIsShowMoreButton(movies.length >= showedMovies.length + totalAddedMovies);
  };

  return (
    <section className='movies-cards'>
      <div className='movies-cards__wrapper'>
        {showedMovies.length ? (
          <ul className='movies-cards__cards'>
            {showedMovies.map((movie) => (
              <li key={movie.id || movie._id}>
                <MoviesCard
                  isUserCard={isUserList}
                  isSavedCard={findInMovies(savedMovies, movie.id || movie._id)}
                  movie={movie}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                />
              </li>
            ))}
          </ul>
        ) : (
          isNotFoundShow && <p className='movies-cards__not-found'>Ничего не найдено</p>
        )}
        <div className='movies-cards__button-container'>
          {isShowMoreButton && (
            <button type='button' className='movies-cards__button-more' onClick={handleMoreButtonClick}>
              Ещё
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoviesCardList;
