import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/pages/Login';
import Home from './components/pages/home/Home';
import { useContext } from 'react';
import UsersContext from './contexts/users-context';
import Register from './components/pages/Register';
import AddPost from './components/pages/addPost/AddPost';
import Footer from './components/footer/Footer';

const App = () => {
  const { users: { isLoggedIn } } = useContext(UsersContext);

  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={isLoggedIn ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!isLoggedIn ? <Login /> : <Navigate to='/' />}
        />
        <Route
          path='/register'
          element={!isLoggedIn ? <Register /> : <Navigate to='/' />}
        />
        <Route
          path='/add'
          element={isLoggedIn ? <AddPost /> : <Navigate to='/login' />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
