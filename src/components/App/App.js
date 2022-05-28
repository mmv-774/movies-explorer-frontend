import AboutProject from '../AboutProject/AboutProject';
import Main from '../Main/Main';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Main>
        <Promo />
        <NavTab />
        <AboutProject />
      </Main>
    </div>
  );
};

export default App;
