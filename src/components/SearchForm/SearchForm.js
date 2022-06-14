import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../../images/search-form-submit.svg';
import './SearchForm.css';

const SearchForm = ({ defaultInputValue, defaultCheckboxValue, onKeywordChange, onShortCheckedChange, onSearch }) => {
  const [inputValue, setInputValue] = React.useState(defaultInputValue || '');
  const [isShortCheck, setIsShortCheck] = React.useState(defaultCheckboxValue || false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onKeywordChange(e.target.value);
  };

  const handleCheckBoxChange = () => {
    setIsShortCheck(!isShortCheck);
    onShortCheckedChange(!isShortCheck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className='search-form'>
      <div className='search-form__wrapper'>
        <form name='search-form' className='search-form__form' onSubmit={handleSubmit}>
          <input
            type='text'
            size={'1'}
            placeholder='Фильм'
            required
            className='search-form__input'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type='submit' className='search-form__submit' />
        </form>
        <FilterCheckbox isChecked={isShortCheck} onCheckBoxChange={handleCheckBoxChange} />
      </div>
    </div>
  );
};

export default SearchForm;
