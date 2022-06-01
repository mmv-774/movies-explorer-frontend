import AuthForm from '../AuthForm/AuthForm';

const Register = () => {
  return (
    <AuthForm
      title={'Добро пожаловать!'}
      submit={'Зарегистрироваться'}
      text={'Уже зарегистрированы?'}
      linkTo={'/signin'}
      linkText={'Войти'}
    >
      <label htmlFor='name' className='auth-form__label'>
        <span className='auth-form__label-text'>Имя</span>
        <input
          id='name'
          type='text'
          autoComplete='true'
          placeholder='Введите имя'
          defaultValue='Виталий'
          required
          className='auth-form__input'
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
          autoComplete='true'
          placeholder='Введите пароль'
          defaultValue='password'
          required
          className='auth-form__input auth-form__input_invalid'
        />
        <span className='auth-form__input-error auth-form__input-error_display'>Что-то пошло не так...</span>
      </label>
    </AuthForm>
  );
};

export default Register;
