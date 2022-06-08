import success from '../../images/message-success-icon.svg';
import fail from '../../images/message-fail-icon.svg';
import './InfoTooltip.css';

function InfoTooltip({ isOpen, isSuccess, message, onClose }) {
  return (
    <div className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`}>
      <div className='info-tooltip__container'>
        <button type='button' className='info-tooltip__btn info-tooltip__close' onClick={onClose}></button>
        <div className='info-tooltip__message'>
          <img
            className='info-tooltip__message-icon'
            src={isSuccess ? success : fail}
            alt='Иконка результата авторизации'
          />
          <p className='info-tooltip__message-text'>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
