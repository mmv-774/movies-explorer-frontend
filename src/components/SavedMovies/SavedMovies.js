import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  const mockMoviesCards = [
    {
      id: 1,
      name: 'Роллинг Стоунз» в изгнании',
      duration: 61,
      image: 'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
    },
    {
      id: 2,
      name: `All Tomorrow's Parties`,
      duration: 82,
      image: 'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
    },
    {
      id: 3,
      name: 'Без обратного пути',
      duration: 104,
      image: 'https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg',
    },
    {
      id: 4,
      name: 'Bassweight',
      duration: 61,
      image: 'https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg',
    },
    {
      id: 5,
      name: 'Taqwacore: The Birth of Punk Islam',
      duration: 80,
      image: 'https://api.nomoreparties.co/uploads/taqwacore2_2f487d2e74.jpeg',
    },
    {
      id: 6,
      name: 'Фавела на взрыве',
      duration: 80,
      image: 'https://api.nomoreparties.co/uploads/881707734_640_d6a3a43358.jpeg',
    },
  ];

  return (
    <div className='saved-movies'>
      <SearchForm />
      <MoviesCardList movies={mockMoviesCards} showButtonMore={false} />
    </div>
  );
};

export default SavedMovies;
