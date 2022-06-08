import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header loggedIn={false} backgroundColor={'gray'} />
          <Main />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header loggedIn={true} backgroundColor={'light'} />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header loggedIn={true} backgroundColor={'light'} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header loggedIn={true} />
          <Profile />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
