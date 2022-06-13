import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = ({ movies, filterByShort, onSearchMovies }) => {
  const [isShortCheck, setIsShortCheck] = React.useState(false);

  const handleShortCheck = (value) => {
    setIsShortCheck(value);
  };

  return (
    <>
      <SearchForm onShortCheckedChange={handleShortCheck} onSearch={onSearchMovies} />
      <MoviesCardList movies={isShortCheck ? filterByShort(movies) : movies} />
    </>
  );
};

export default Movies;
