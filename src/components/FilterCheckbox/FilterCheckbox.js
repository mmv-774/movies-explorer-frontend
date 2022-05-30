import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className='filter-checkbox'>
      <label htmlFor='switch-short-film' className='filter-checkbox__label'>
        <input type='checkbox' name='short-film' id='switch-short-film' className='filter-checkbox__invisible' />
        <span className='filter-checkbox__visible'>
          <span className='filter-checkbox__visible-circle'></span>
        </span>
      </label>
      <span className='filter-checkbox__title'>Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;
