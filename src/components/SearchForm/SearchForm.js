import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../../images/search-form-submit.svg';
import './SearchForm.css';

const SearchForm = ({ onShortCheckedChange, onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isShortCheck, setIsShortCheck] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem('isShortCheck', isShortCheck);
    onShortCheckedChange(isShortCheck);
  }, [isShortCheck]);

  React.useEffect(() => {
    localStorage.setItem('keyword', inputValue);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckBoxChange = () => {
    setIsShortCheck(!isShortCheck);
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
        <FilterCheckbox onCheckBoxChange={handleCheckBoxChange} />
      </div>
    </div>
  );
};

export default SearchForm;
