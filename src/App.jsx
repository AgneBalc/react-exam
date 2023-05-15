import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/pages/login/Login';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
