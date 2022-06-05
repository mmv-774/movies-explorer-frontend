import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => {
  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList showButtonMore={true}/>
    </div>
  );
};

export default Movies;
