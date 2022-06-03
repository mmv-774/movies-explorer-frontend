import './Drawer.css';

const Drawer = ({ isOpen, children }) => {
  return <div className={`drawer ${isOpen && 'drawer_open'}`}>{children}</div>;
};

export default Drawer;
