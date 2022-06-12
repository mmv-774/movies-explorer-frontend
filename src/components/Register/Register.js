import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Register = ({ onRegister }) => {
  const nameRegex = /^[a-zA-Zа-яА-я -]+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [inputsValues, setInputsValues] = React.useState([]);
  const [inputsErrors, setInputsErrors] = React.useState([]);

  const handleInputChange = (e) => {
    if (e.target.id === 'name') {
      e.target.setCustomValidity(
        nameRegex.test(e.target.value) || e.target.value === ''
          ? ''
          : 'Имя содержит только латиницу, кириллицу, пробел или дефис'
      );
    }

    if (e.target.id === 'email') {
      e.target.setCustomValidity(
        emailRegex.test(e.target.value) || e.target.value === '' ? '' : 'Некорректный адрес эл.почты'
      );
    }

    setInputsValues({ ...inputsValues, [e.target.id]: e.target.value });
    setInputsErrors({ ...inputsErrors, [e.target.id]: e.target.validationMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(inputsValues.name, inputsValues.email, inputsValues.password);
  };

  return (
    <AuthForm
      title={'Добро пожаловать!'}
      submit={'Зарегистрироваться'}
      text={'Уже зарегистрированы?'}
      linkTo={'/signin'}
      linkText={'Войти'}
      onSubmit={handleSubmit}
    >
      <label htmlFor='name' className='auth-form__label'>
        <span className='auth-form__label-text'>Имя</span>
        <input
          id='name'
          type='text'
          autoComplete='on'
          placeholder='Введите имя'
          minLength={2}
          maxLength={15}
          required
          className={`auth-form__input ${inputsErrors.name && 'auth-form__input_invalid'}`}
          value={inputsValues.name || ''}
          onChange={handleInputChange}
        />
        <span className={`auth-form__input-error ${inputsErrors.name && 'auth-form__input-error_display'}`}>
          {inputsErrors.name}
        </span>
      </label>
      <label htmlFor='email' className='auth-form__label'>
        <span className='auth-form__label-text'>E-mail</span>
        <input
          id='email'
          type='email'
          autoComplete='true'
          placeholder='Введите email'
          required
          className={`auth-form__input ${inputsErrors.email && 'auth-form__input_invalid'}`}
          value={inputsValues.email || ''}
          onChange={handleInputChange}
        />
        <span className={`auth-form__input-error ${inputsErrors.email && 'auth-form__input-error_display'}`}>
          {inputsErrors.email || ''}
        </span>
      </label>
      <label htmlFor='password' className='auth-form__label'>
        <span className='auth-form__label-text'>Пароль</span>
        <input
          id='password'
          type='password'
          autoComplete='true'
          placeholder='Введите пароль'
          minLength={2}
          required
          className={`auth-form__input ${inputsErrors.password && 'auth-form__input_invalid'}`}
          value={inputsValues.password || ''}
          onChange={handleInputChange}
        />
        <span className={`auth-form__input-error ${inputsErrors.password && 'auth-form__input-error_display'}`}>
          {inputsErrors.password}
        </span>
      </label>
    </AuthForm>
  );
};

export default Register;
