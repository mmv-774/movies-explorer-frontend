import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Main>
        <Promo />
      </Main>
    </div>
  );
};

export default App;
