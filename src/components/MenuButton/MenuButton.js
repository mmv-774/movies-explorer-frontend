import './MenuButton.css';

const MenuButton = ({ onClick }) => {
  return (
    <button className='menu-button animated-button' onClick={onClick}>
      <div className='menu-button__line'></div>
      <div className='menu-button__line'></div>
      <div className='menu-button__line'></div>
    </button>
  );
};

export default MenuButton;
