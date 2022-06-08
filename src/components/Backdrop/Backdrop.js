import './Backdrop.css';

const Backdrop = ({ isShow, onClick }) => {
  return isShow && <div className='backdrop' onClick={onClick}></div>;
};

export default Backdrop;
