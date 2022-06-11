import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { register, login, getUserInfo, tokenCheck } from '../../utils/MainApi';
import { handleResponse } from '../../utils/utils';
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
import Preloader from '../Preloader/Preloader';
import Backdrop from '../Backdrop/Backdrop';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isPreloaderShow, setIsPreloaderShow] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [infoTooltipProps, setInfoTooltipProps] = React.useState({});

  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      handleResponse(getUserInfo(), (res) => setCurrentUser(res));
    } else {
      setCurrentUser({});
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      handleResponse(tokenCheck(), () => {
        setLoggedIn(true);
      });
    }
  }, [history]);

  const closeInfoTooltip = () => {
    setIsInfoTooltipPopupOpen(false);
  };

  const showPreloader = () => {
    setIsPreloaderShow(true);
  };

  const hidePreloader = () => {
    setIsPreloaderShow(false);
  };

  const handleRegister = (name, email, password) => {
    showPreloader();
    return register(name, email, password)
      .then(() => {
        setInfoTooltipProps({ isSuccess: true, message: 'Вы успешно зарегистрировались!' });
        history.push('/movies');
      })
      .catch((error) => {
        setInfoTooltipProps({ isSuccess: false, message: error });
      })
      .finally(() => {
        hidePreloader();
        setIsInfoTooltipPopupOpen(true);
      });
  };

  const handleLogin = (email, password) => {
    showPreloader();
    return login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((error) => {
        setInfoTooltipProps({ isSuccess: false, message: error });
        setIsInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        hidePreloader();
      });
  };

  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/sign-in');
  };

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} backgroundColor={'gray'} />
            <Main />
            <Footer />
          </Route>
          <Route path='/movies'>
            <Header loggedIn={loggedIn} backgroundColor={'light'} />
            <Movies />
            <Footer />
          </Route>
          <Route path='/saved-movies'>
            <Header loggedIn={loggedIn} backgroundColor={'light'} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header loggedIn={loggedIn} />
            <Profile />
          </Route>
          <Route path='/signin'>
            <Login onLogin={handleLogin} />
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
        <Preloader isShow={isPreloaderShow} />
        <Backdrop isShow={isPreloaderShow} />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
