import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  register,
  login,
  getUserInfo,
  tokenCheck,
  patchUserInfo,
  getSavedMovies,
  postMovie,
  deleteMovie,
} from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import { handleResponse, findInMovies } from '../../utils/utils';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isTokenValidated, setIsTokenValidated] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isPreloaderShow, setIsPreloaderShow] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [infoTooltipProps, setInfoTooltipProps] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      handleResponse(
        tokenCheck(),
        () => {
          setLoggedIn(true);
          setIsTokenValidated(true);
        },
        () => {
          setLoggedIn(false);
          setIsTokenValidated(true);
        }
      );
    } else {
      setLoggedIn(false);
      setIsTokenValidated(true);
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      handleResponse(getUserInfo(), (res) => setCurrentUser(res));
    } else {
      setCurrentUser({});
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      handleResponse(getSavedMovies(), (res) => setSavedMovies(res.movies.filter((m) => m.owner === currentUser._id)));
    } else {
      setSavedMovies([]);
    }
  }, [loggedIn, currentUser]);

  React.useEffect(() => {
    if (loggedIn) {
      handleResponse(getMovies(), (res) => setMovies(res), null, showPreloader, hidePreloader);
    } else {
      setMovies([]);
    }
  }, [loggedIn]);

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
    return handleResponse(
      register(name, email, password),
      () => {
        setInfoTooltipProps({ isSuccess: true, message: 'Вы успешно зарегистрировались!' });
        setIsInfoTooltipPopupOpen(true);
        handleLogin(email, password);
      },
      (error) => {
        setInfoTooltipProps({ isSuccess: false, message: error });
        setIsInfoTooltipPopupOpen(true);
      },
      showPreloader,
      hidePreloader
    );
  };

  const handleLogin = (email, password) => {
    return (
      handleResponse(login(email, password), (res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push('/movies');
      }),
      (error) => {
        setInfoTooltipProps({ isSuccess: false, message: error });
        setIsInfoTooltipPopupOpen(true);
      },
      showPreloader,
      hidePreloader
    );
  };

  const handleEditProfile = (name, email) => {
    return handleResponse(
      patchUserInfo(name, email),
      (res) => {
        setCurrentUser(res);
        setInfoTooltipProps({ isSuccess: true, message: 'Данные успешно изменены!' });
        setIsInfoTooltipPopupOpen(true);
      },
      (error) => {
        setInfoTooltipProps({ isSuccess: false, message: error });
        setIsInfoTooltipPopupOpen(true);
      },
      showPreloader,
      hidePreloader
    );
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isShortCheck');
    localStorage.removeItem('keyword');
    setLoggedIn(false);
    history.push('/');
  };

  const handleSaveMovie = (movie) => {
    return handleResponse(
      postMovie(movie),
      () => setSavedMovies([newMovie, ...savedMovies]),
      () => {
        setInfoTooltipProps({ isSuccess: false, message: 'Что-то пошло не так!' });
        setIsInfoTooltipPopupOpen(true);
      },
      showPreloader,
      hidePreloader
    );
  };

  const handleDeleteMovie = (movieId) => {
    const deletedMovie = findInMovies(savedMovies, movieId);
    if (deletedMovie) {
      return (
        handleResponse(deleteMovie(deletedMovie._id), () =>
          setSavedMovies(savedMovies.filter((movie) => movie._id !== deletedMovie._id))
        ),
        () => {
          setInfoTooltipProps({ isSuccess: false, message: 'Что-то пошло не так!' });
          setIsInfoTooltipPopupOpen(true);
        },
        showPreloader,
        hidePreloader
      );
    }
  };

  const handleSearchMovies = () => {
    if (movies && movies.length) return;

    handleResponse(
      getMovies(),
      (res) => setMovies(res),
      () => {
        setMovies([]);
        setInfoTooltipProps({
          isSuccess: false,
          message:
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
        });
        setIsInfoTooltipPopupOpen(true);
      },
      showPreloader,
      hidePreloader
    );
  };

  const renderPreloader = (isShow) => (
    <>
      <Preloader isShow={isShow} />
      <Backdrop isShow={isShow} />
    </>
  );

  return !isTokenValidated ? (
    renderPreloader(true)
  ) : (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} backgroundColor={'gray'} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute exact path={'/movies'} redirectPath='/' redirectCondition={!loggedIn}>
            <Header loggedIn={loggedIn} backgroundColor={'light'} />
            <Movies
              movies={movies}
              savedMovies={savedMovies}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              onSearchMovies={handleSearchMovies}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path={'/saved-movies'} redirectPath='/' redirectCondition={!loggedIn}>
            <Header loggedIn={loggedIn} backgroundColor={'light'} />
            <SavedMovies movies={savedMovies} onDeleteMovie={handleDeleteMovie} />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path={'/profile'} redirectPath='/' redirectCondition={!loggedIn}>
            <Header loggedIn={loggedIn} backgroundColor={'light'} />
            <Profile onEditProfile={handleEditProfile} onSignOut={handleSignOut} />
          </ProtectedRoute>
          <ProtectedRoute path='/signin' redirectPath='/' redirectCondition={loggedIn}>
            <Login onLogin={handleLogin} />
          </ProtectedRoute>
          <ProtectedRoute path='/signup' redirectPath='/' redirectCondition={loggedIn}>
            <Register onRegister={handleRegister} />
          </ProtectedRoute>
          <ProtectedRoute path='*' redirectPath='/' redirectCondition={!loggedIn}>
            <NotFound />
          </ProtectedRoute>
        </Switch>
        <InfoTooltip
          isSuccess={infoTooltipProps.isSuccess}
          message={infoTooltipProps.message}
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeInfoTooltip}
        />
        {renderPreloader(isPreloaderShow)}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
