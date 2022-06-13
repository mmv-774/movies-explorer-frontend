import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import useCurrentWidth from '../../utils/hooks/useCurrentWidth';
import './MoviesCardList.css';

const MoviesCardList = ({ movies }) => {
  const [showMovies, setShowMovies] = React.useState([]);
  const [totalMovies, setTotalMovies] = React.useState(12);
  const [totalAddedMovies, setTotalAddedMovies] = React.useState(3);
  const [isShowMoreButton, setIsShowMoreButton] = React.useState(false);

  let width = useCurrentWidth();

  React.useEffect(() => {
    calcMoviesGridSize();
    setShowMovies(movies.slice(0, totalMovies));
  }, [width]);

  React.useEffect(() => {
    setShowMovies(movies.slice(0, totalMovies));
    setIsShowMoreButton(movies.length > totalMovies);
  }, [movies]);

  const calcMoviesGridSize = () => {
    if (width >= 1280) {
      setTotalMovies(12);
      setTotalAddedMovies(3);
      return;
    }

    if (width >= 768 && width < 1280) {
      setTotalMovies(8);
      setTotalAddedMovies(2);
      return;
    }

    if (width < 768) {
      setTotalMovies(5);
      setTotalAddedMovies(2);
    }
  };

  const handleMoreButtonClick = () => {
    setShowMovies(movies.slice(0, showMovies.length + totalAddedMovies));
    setIsShowMoreButton(movies.length >= showMovies.length + totalAddedMovies);
  };

  return (
    <section className='movies-cards'>
      <div className='movies-cards__wrapper'>
        {showMovies.length > 0 ? (
          <ul className='movies-cards__cards'>
            {showMovies.map((movie) => (
              <li key={movie.id}>
                <MoviesCard
                  name={movie.nameRU}
                  duration={movie.duration}
                  image={`https://api.nomoreparties.co${movie.image.url}`}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className='movies-cards__not-found'>Ничего не найдено</p>
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
