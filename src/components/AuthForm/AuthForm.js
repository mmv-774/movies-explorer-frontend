import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import SubmitButton from '../SubmitButton/SubmitButton';
import './AuthForm.css';

const AuthForm = ({ title, submit, text, linkTo, linkText, children, onSubmit }) => {
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleChange = (e) => {
    setIsFormValid(e.currentTarget.checkValidity());
  };

  return (
    <div className='auth-form'>
      <div className='auth-form__wrapper'>
        <div className='auth-form__header'>
          <Link to={'/'} className='auth-form__link'>
            <img src={logo} alt='Логотип' className='auth-form__logo' />
          </Link>
          <h2 className='auth-form__tittle'>{title}</h2>
        </div>
        <form id='auth-form' name='auth-form' className='auth-form__form' onSubmit={onSubmit} onChange={handleChange}>
          <div className='auth-form__inputs-container'>{children}</div>
          <SubmitButton caption={submit} disabled={!isFormValid} />
        </form>
        <div className='auth-form__info'>
          <span className='auth-form__text'>{text}</span>
          <Link to={linkTo} className='auth-form__link'>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
