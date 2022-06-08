import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Profile.css';

const Profile = () => {
  const [isEditMode, setIsEditMode] = React.useState(false);

  const handleButtonEditClick = () => {
    setIsEditMode(true);
  };

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий</h2>
      <form name='profile-form' className='profile__form'>
        <fieldset className='profile__form-fieldset'>
          <label htmlFor='name' className='profile__form__label'>
            <span className='profile__form__label-text'>Имя</span>
            <input
              id='name'
              type='text'
              autoComplete='false'
              placeholder='Введите имя'
              defaultValue='Виталий'
              minLength={2}
              maxLength={15}
              required
              readOnly={!isEditMode}
              className='profile__form__input'
            />
          </label>
          <label htmlFor='name' className='profile__form__label'>
            <span className='profile__form__label-text'>E-mail</span>
            <input
              id='email'
              type='email'
              autoComplete='false'
              placeholder='Введите email'
              defaultValue='pochta@yandex.ru'
              required
              readOnly={!isEditMode}
              className='profile__form__input'
            />
          </label>
        </fieldset>
        <fieldset className='profile__form-fieldset'>
          {isEditMode ? (
            <>
              <ErrorMessage text={'При обновлении профиля произошла ошибка.'} />
              <SubmitButton caption={'Сохранить'} disabled={true} />
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
              <button type='button' className='profile__form-handler profile__form-handler_type_logout'>
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
