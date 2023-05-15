import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/users-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UsersProvider>
);
