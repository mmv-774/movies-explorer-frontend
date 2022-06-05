import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ showButtonMore }) => {
  return (
    <section className='movies-cards'>
      <div className='movies-cards__wrapper'>
        <ul className='movies-cards__cards'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
        <div className='movies-cards__button-container'>
          {showButtonMore && (
            <button type='button' className='movies-cards__button-more animated-button'>
              Ещё
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoviesCardList;
