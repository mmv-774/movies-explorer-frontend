import './MenuButton.css';

const MenuButton = () => {
  return (
    <button className='menu-button animated-button'>
      <div className='menu-button__line'></div>
      <div className='menu-button__line'></div>
      <div className='menu-button__line'></div>
    </button>
  );
};

export default MenuButton;
