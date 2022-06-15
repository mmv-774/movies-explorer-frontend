import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SubmitButton from '../SubmitButton/SubmitButton';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

const Profile = ({ onEditProfile, onSignOut }) => {
  const currentUserContext = React.useContext(CurrentUserContext);

  const nameRegex = /(^[a-zA-Zа-яА-я -]{2,15}$)/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [inputValues, setInputValues] = React.useState({});
  const [inputErrors, setInputErrors] = React.useState({});
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    setInputValues({
      name: currentUserContext.name,
      email: currentUserContext.email,
    });
  }, [currentUserContext.name, currentUserContext.email]);

  const checkPreviousValues = (name, email) => {
    return name !== currentUserContext.name || email !== currentUserContext.email;
  };

  const handleChange = (e) => {
    const values = { ...inputValues };

    if (e.target.id === 'name') {
      e.target.setCustomValidity(
        nameRegex.test(e.target.value) && e.target.value.trim().length > 0
          ? ''
          : 'Имя должно быть длиной не менее 2 символов, содержать только латиницу, кириллицу, пробел или дефис и не состоять их одних пробелов'
      );
      values.name = e.target.value;
    }

    if (e.target.id === 'email') {
      e.target.setCustomValidity(
        emailRegex.test(e.target.value) ? '' : `${e.target.value === '' ? 'Поле email не должно быть пустым' : 'Некорректный адрес эл.почты'}`
      );
      values.email = e.target.value;
    }

    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
    setInputErrors({ ...inputErrors, [e.target.id]: e.target.validationMessage });
    setIsFormValid(e.currentTarget.checkValidity() && checkPreviousValues(values.name, values.email));
  };

  const handleButtonEditClick = () => {
    setIsEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile(inputValues.name, inputValues.email);
    setIsEditMode(false);
  };

  return (
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUserContext.name}`}</h2>
      <form name='profile-form' className='profile__form' onSubmit={handleSubmit} onChange={handleChange}>
        <fieldset className='profile__form-fieldset'>
          <label htmlFor='name' className='profile__form__label'>
            <span className='profile__form__label-text'>Имя</span>
            <input
              id='name'
              type='text'
              autoComplete='off'
              placeholder='Введите имя'
              minLength={2}
              maxLength={15}
              required
              readOnly={!isEditMode}
              className='profile__form__input'
              value={inputValues.name || ''}
            />
          </label>
          <label htmlFor='name' className='profile__form__label'>
            <span className='profile__form__label-text'>E-mail</span>
            <input
              id='email'
              type='email'
              autoComplete='off'
              placeholder='Введите email'
              required
              readOnly={!isEditMode}
              className='profile__form__input'
              value={inputValues.email || ''}
            />
          </label>
        </fieldset>
        <fieldset className='profile__form-fieldset'>
          {isEditMode ? (
            <>
              {!isFormValid && <ErrorMessage text={inputErrors.name || inputErrors.email} />}
              <SubmitButton caption={'Сохранить'} disabled={!isFormValid} />
            </>
          ) : (
            <>
              <button
                type='button'
                className='profile__form-handler profile__form-handler_type_edit'
                onClick={handleButtonEditClick}
              >
                Редактировать
              </button>
              <button
                type='button'
                className='profile__form-handler profile__form-handler_type_logout'
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </fieldset>
      </form>
    </section>
  );
};

export default Profile;
