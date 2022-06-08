import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { register } from '../../utils/MainApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [infoTooltipProps, setInfoTooltipProps] = React.useState({});

  const history = useHistory();

  const closeInfoTooltip = () => {
    setIsInfoTooltipPopupOpen(false);
  };

  const handleRegister = (name, email, password) => {
    return register(name, email, password)
      .then(() => {
        setInfoTooltipProps({ isSuccess: true, message: 'Вы успешно зарегистрировались!' });
        history.push('/movies');
      })
      .catch((error) => {
        setInfoTooltipProps({ isSuccess: false, message: error });
      })
      .finally(() => setIsInfoTooltipPopupOpen(true));
  };

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
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
            <Register onRegister={handleRegister} />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isSuccess={infoTooltipProps.isSuccess}
          message={infoTooltipProps.message}
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeInfoTooltip}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
