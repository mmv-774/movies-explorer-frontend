import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../../images/search-form-submit.svg';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <form name='search-form' noValidate className='search-form__form'>
        <input type='text' placeholder='Фильм' required className='search-form__input' />
        <button type='submit' className='search-form__submit animated-button' />
      </form>
      <FilterCheckbox />
    </div>
  );
};

export default SearchForm;
