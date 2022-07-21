import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'express';
import { AuthProviderWrapper } from './context/auth.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App /> 
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
