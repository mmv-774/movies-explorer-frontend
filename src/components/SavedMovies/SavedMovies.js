import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterByKeyword, filterByShort } from '../../utils/utils';

const SavedMovies = ({ movies, onDeleteMovie }) => {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isShortCheck, setIsShortCheck] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');

  React.useEffect(() => {
    setFilteredMovies(
      isShortCheck ? filterByShort(filterByKeyword(movies, keyword)) : filterByKeyword(movies, keyword)
    );
  }, [movies]);

  const handleKeywordChange = (value) => {
    setKeyword(value);
  };

  const handleShortCheckedChange = (value) => {
    setIsShortCheck(value);
  };

  const handleSearchMovies = () => {
    setFilteredMovies(
      isShortCheck ? filterByShort(filterByKeyword(movies, keyword)) : filterByKeyword(movies, keyword)
    );
  };

  return (
    <>
      <SearchForm
        defaultInputValue={keyword}
        defaultCheckboxValue={isShortCheck}
        onKeywordChange={handleKeywordChange}
        onShortCheckedChange={handleShortCheckedChange}
        onSearch={handleSearchMovies}
      />
      <MoviesCardList isUserList={true} movies={filteredMovies} savedMovies={movies} onDeleteMovie={onDeleteMovie} />
    </>
  );
};

export default SavedMovies;
