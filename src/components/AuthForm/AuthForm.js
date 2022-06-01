import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import SubmitButton from '../SubmitButton/SubmitButton';
import './AuthForm.css';

const AuthForm = ({ title, submit, text, linkTo, linkText, children }) => {
  return (
    <section className='auth-form'>
      <div className='auth-form__header'>
        <Link to={'/'} className='animated-link'>
          <img src={logo} alt='Логотип' className='auth-form__logo' />
        </Link>
        <h2 className='auth-form__tittle'>{title}</h2>
      </div>
      <form className='auth-form__form'>
        <div className='auth-form__inputs-container'>{children}</div>
        <SubmitButton caption={submit} disabled={false} />
      </form>
      <div className='auth-form__info'>
        <span className='auth-form__text'>{text}</span>
        <Link to={linkTo} className='auth-form__link animated-link'>
          {linkText}
        </Link>
      </div>
    </section>
  );
};

export default AuthForm;
