import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../../images/search-form-submit.svg';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <div className='search-form__wrapper'>
        <form name='search-form' className='search-form__form'>
          <input type='text' size={'1'} placeholder='Фильм' required className='search-form__input' />
          <button type='submit' className='search-form__submit' />
        </form>
        <FilterCheckbox />
      </div>
    </div>
  );
};

export default SearchForm;
