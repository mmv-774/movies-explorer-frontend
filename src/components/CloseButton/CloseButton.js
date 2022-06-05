import './CloseButton.css';

const CloseButton = ({ onClick }) => {
  return <button className='close-btn' onClick={onClick}></button>;
};

export default CloseButton;
