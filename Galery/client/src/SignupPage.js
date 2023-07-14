import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [date_of_birth, setdate_of_birth] = useState('');
  const [email, setemail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      date_of_birth: date_of_birth,
      email:email,
    };

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User registered successfully');
        
      } else {
        console.log('User registration failed');
       
      }
    } catch (error) {
      console.error(error);
     
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title">Signup Page</div>
        <div className="inputBox">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="date_of_birth">Date of Birth:</label>
          <input
            type="date"
            id="date_of_birth"
            required
            value={date_of_birth}
            onChange={(e) => setdate_of_birth(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
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
        </div>
        <div className="button">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
