import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterByKeyword, filterByShort } from '../../utils/utils';

const Movies = ({ movies, savedMovies, onSaveMovie, onDeleteMovie, onSearchMovies }) => {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isShortCheck, setIsShortCheck] = React.useState(JSON.parse(localStorage.getItem('isShortCheck')) === true);
  const [keyword, setKeyword] = React.useState(localStorage.getItem('keyword') || '');
  const [isNotFoundShow, setIsNotFoundShow] = React.useState(false);

  React.useEffect(() => {
    setFilteredMovies(filterMovies());
  }, [movies]);

  const filterMovies = () => {
    if (!keyword) return [];
    return isShortCheck ? filterByShort(filterByKeyword(movies, keyword)) : filterByKeyword(movies, keyword);
  };

  const handleKeywordChange = (value) => {
    setKeyword(value);
  };

  const handleShortCheckedChange = (value) => {
    setIsShortCheck(value);
  };

  const handleSearchMovies = () => {
    localStorage.setItem('keyword', keyword);
    localStorage.setItem('isShortCheck', JSON.stringify(isShortCheck));
    onSearchMovies();
    setFilteredMovies(filterMovies());
    setIsNotFoundShow(true);
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
      <MoviesCardList
        isUserList={false}
        isNotFoundShow={isNotFoundShow}
        movies={filteredMovies}
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </>
  );
};

export default Movies;
