import './CloseButton.css';

const CloseButton = ({ onClick }) => {
  return <button className='close-btn animated-button' onClick={onClick}></button>;
};

export default CloseButton;
