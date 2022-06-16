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
  const [currentUser, setCurrentUser] = React.useState({});
  const [isPreloaderShow, setIsPreloaderShow] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [infoTooltipProps, setInfoTooltipProps] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      handleResponse(getUserInfo(), (res) => setCurrentUser(res));
    } else {
      setCurrentUser({});
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      handleResponse(getSavedMovies(), (res) => setSavedMovies(res.movies));
    } else {
      setSavedMovies([]);
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

  React.useEffect(() => {
    localStorage.removeItem('isShortCheck');
    localStorage.removeItem('keyword');
    localStorage.removeItem('movies');
  }, []);

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
        handleLogin(email, password);
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

  const handleEditProfile = (name, email) => {
    showPreloader();
    patchUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        hidePreloader();
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/signin');
  };

  const handleSaveMovie = (movie) => {
    showPreloader();
    postMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((error) => {
        console.log(error);
        setInfoTooltipProps({ isSuccess: false, message: 'Что-то пошло не так!' });
        setIsInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        hidePreloader();
      });
  };

  const handleDeleteMovie = (movieId) => {
    const deletedMovie = findInMovies(savedMovies, movieId);
    if (deleteMovie) {
      showPreloader();
      deleteMovie(deletedMovie._id)
        .then(() => {
          setSavedMovies(savedMovies.filter((movie) => movie._id !== deletedMovie._id));
        })
        .catch((error) => {
          console.log(error);
          setInfoTooltipProps({ isSuccess: false, message: 'Что-то пошло не так!' });
          setIsInfoTooltipPopupOpen(true);
        })
        .finally(() => {
          hidePreloader();
        });
    }
  };

  const handleSearchMovies = () => {
    showPreloader();
    getMovies()
      .then((res) => {
        setMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch(() => {
        localStorage.removeItem('movies');
        setMovies([]);
        setInfoTooltipProps({
          isSuccess: false,
          message:
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
        });
        setIsInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        hidePreloader();
      });
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
