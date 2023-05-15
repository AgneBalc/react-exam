import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import { useContext } from 'react';
import UsersContext from './contexts/users-context';

const App = () => {
  const { users: { isLoggedIn } } = useContext(UsersContext);

  return (
    <>
      <Header />
      <Routes>
        {isLoggedIn ?
          <Route index element={<Home />} /> :
          <Route index element={<Login />} />
        }
      </Routes>
    </>
  );
}

export default App;
