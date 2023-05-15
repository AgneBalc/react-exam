import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
