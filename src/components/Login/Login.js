import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
  return (
    <AuthForm
      title={'Рады видеть!'}
      submit={'Войти'}
      text={'Ещё не зарегистрированы?'}
      linkTo={'/sign-up'}
      linkText={'Регистрация'}
    >
      <label htmlFor='email' className='auth-form__label'>
        <span className='auth-form__label-text'>E-mail</span>
        <input
          id='email'
          type='email'
          autoComplete='on'
          placeholder='Введите email'
          defaultValue='pochta@yandex.ru'
          required
          className='auth-form__input'
        />
        <span className='auth-form__input-error'>Что-то пошло не так...</span>
      </label>
      <label htmlFor='password' className='auth-form__label'>
        <span className='auth-form__label-text'>Пароль</span>
        <input
          id='password'
          type='password'
          autoComplete='on'
          placeholder='Введите пароль'
          defaultValue='password'
          required
          className='auth-form__input'
        />
        <span className='auth-form__input-error'>Что-то пошло не так...</span>
      </label>
    </AuthForm>
  );
};

export default Login;
