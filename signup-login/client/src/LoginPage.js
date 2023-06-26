import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title">Login Page</div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
          <div className="underlineHover"></div>
        </div>
        <div className="inputBox">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
          <div className="underlineHover"></div>
        </div>
        <div className="button">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
