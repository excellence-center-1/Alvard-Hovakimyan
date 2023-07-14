import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailValue = email;
    const passwordValue = password;
  
    // Assuming you have a list of users with their credentials
    const users = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
      // Add more users as needed
    ];
  
    // Check if the entered email and password match any user in the list
    const user = users.find((user) => user.email === emailValue && user.password === passwordValue);
  
    if (user) {
      // Login successful
      onLoginSuccess();
    } else {
      // Login failed
      alert('Invalid email or password');
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
            value={newpassword}
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
