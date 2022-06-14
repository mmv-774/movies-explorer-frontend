import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterByKeyword, filterByShort } from '../../utils/utils';

const SavedMovies = ({ movies, onDeleteMovie, onSearchMovies }) => {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isShortCheck, setIsShortCheck] = React.useState(
    JSON.parse(localStorage.getItem('isShortCheckSaved')) === true
  );
  const [keyword, setKeyword] = React.useState(localStorage.getItem('keywordSaved') || '');

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
    localStorage.setItem('keywordSaved', keyword);
    localStorage.setItem('isShortCheckSaved', JSON.stringify(isShortCheck));
    onSearchMovies();
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
