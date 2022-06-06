import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

const MoviesCardList = ({ movies, showButtonMore }) => {
  return (
    <section className='movies-cards'>
      <div className='movies-cards__wrapper'>
        <ul className='movies-cards__cards'>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MoviesCard name={movie.name} duration={movie.duration} image={movie.image} />
            </li>
          ))}
        </ul>
        <div className='movies-cards__button-container'>
          {showButtonMore && (
            <button type='button' className='movies-cards__button-more'>
              Ещё
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoviesCardList;
