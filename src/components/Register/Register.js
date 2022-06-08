import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Register = ({ onRegister }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password);
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
          autoComplete='true'
          placeholder='Введите имя'
          minLength={2}
          maxLength={15}
          required
          className='auth-form__input'
          value={name}
          onChange={handleChangeName}
        />
        <span className='auth-form__input-error'>Что-то пошло не так...</span>
      </label>
      <label htmlFor='email' className='auth-form__label'>
        <span className='auth-form__label-text'>E-mail</span>
        <input
          id='email'
          type='email'
          autoComplete='true'
          placeholder='Введите email'
          required
          className='auth-form__input'
          value={email}
          onChange={handleChangeEmail}
        />
        <span className='auth-form__input-error'>Что-то пошло не так...</span>
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
          className='auth-form__input'
          value={password}
          onChange={handleChangePassword}
        />
        {/* <span className='auth-form__input-error auth-form__input-error_display'>Что-то пошло не так...</span> */}
      </label>
    </AuthForm>
  );
};

export default Register;
