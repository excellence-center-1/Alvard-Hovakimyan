import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './App.css';

const App = () => {
  console.log("~~~~~~~~~~~ 0000");
  const [currentPage, setCurrentPage] = useState('login');
  console.log("~~~~~~~~~~~ 1111");

  const handleButtonClick = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };
  console.log("~~~~~~~~~~~ 222");

  return (
    <div className="container">
      {currentPage === 'login' ? <LoginPage /> : <SignupPage />}
      <button className="toggle-button" onClick={handleButtonClick}>
        {currentPage === 'login' ? 'Go to Signup' : 'Go to Login'}
      </button>
    </div>
  );
};

export default App;
