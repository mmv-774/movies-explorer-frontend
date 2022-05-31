import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => {
  return (
    <section className='movies-cards'>
      <ul className='movies-cards__cards'>
        <MoviesCard mode={'like'} />
        <MoviesCard mode={'like'} />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard mode={'like'} />
        <MoviesCard mode={'like'} />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div className='movies-cards__button-container'>
        <button type='button' className='movies-cards__button-more animated-button'>
          Ещё
        </button>
      </div>
    </section>
  );
};

export default MoviesCardList;
