import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Login = ({ onLogin }) => {
  const [inputsValues, setInputsValues] = React.useState([]);
  const [inputsErrors, setInputsErrors] = React.useState([]);

  const handleInputChange = (e) => {
    if (e.target.id === 'email') {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      e.target.setCustomValidity(
        emailRegex.test(e.target.value) || e.target.value === '' ? '' : 'Некорректный адрес эл.почты'
      );
    }

    setInputsValues({ ...inputsValues, [e.target.id]: e.target.value });
    setInputsErrors({ ...inputsErrors, [e.target.id]: e.target.validationMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(inputsValues.email, inputsValues.password);
  };

  return (
    <AuthForm
      title={'Рады видеть!'}
      submit={'Войти'}
      text={'Ещё не зарегистрированы?'}
      linkTo={'/signup'}
      linkText={'Регистрация'}
      onSubmit={handleSubmit}
    >
      <label htmlFor='email' className='auth-form__label'>
        <span className='auth-form__label-text'>E-mail</span>
        <input
          id='email'
          type='email'
          autoComplete='on'
          placeholder='Введите email'
          required
          className={`auth-form__input ${inputsErrors.email && 'auth-form__input_invalid'}`}
          value={inputsValues.email || ''}
          onChange={handleInputChange}
        />
        <span className={`auth-form__input-error ${inputsErrors.email && 'auth-form__input-error_display'}`}>
          {inputsErrors.email}
        </span>
      </label>
      <label htmlFor='password' className='auth-form__label'>
        <span className='auth-form__label-text'>Пароль</span>
        <input
          id='password'
          type='password'
          autoComplete='on'
          placeholder='Введите пароль'
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

export default Login;
