import AuthForm from '../AuthForm/AuthForm';
import Drawer from '../Drawer/Drawer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header loggedIn={true} />
      {/* <Main /> */}
      {/* <Movies /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Drawer /> */}
    </div>
  );
};

export default App;
