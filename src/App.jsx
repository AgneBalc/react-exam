import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/pages/Login';
import Home from './components/pages/home/Home';
import { useContext } from 'react';
import UsersContext from './contexts/users-context';
import Register from './components/pages/Register';
import AddPost from './components/pages/addPost/AddPost';

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
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<AddPost />} />
      </Routes>
    </>
  );
}

export default App;
