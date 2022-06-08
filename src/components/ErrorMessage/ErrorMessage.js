import './ErrorMessage.css';

const ErrorMessage = ({ text }) => {
  return <>{text && text.length !== 0 && <span className='error-message'>{text}</span>}</>;
};

export default ErrorMessage;
