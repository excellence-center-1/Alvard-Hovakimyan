import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email;
    const passwordValue = password;

    // Perform your login logic here using the email and password values
    // For example, you can make an API request to authenticate the user

    // Assuming the login is successful, call the onLoginSuccess function
    const isLoginSuccessful = true; // Replace this with your actual login logic
    if (isLoginSuccessful) {
      onLoginSuccess();
    }

    // Reset the form fields after submission (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title">Login Page</div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="underlineHover"></div>
        </div>
        <div className="inputBox">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
