import React, { useState } from 'react';

import './signup.css';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useMutation, useQuery } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with the server's GraphQL endpoint
  cache: new InMemoryCache(),
});

const GET_USERS = gql`
  query {
    users {
      First_Name
      Last_Name
      Date_of_Birth
      Password
    }
  }
`;
const CREATE_USER = gql`
  mutation CreateUser($First_Name: String!,$Last_Name: String!, $Date_of_Birth: String!,$Password: String!) {
    createUser(First_Name: $First_Name, Last_Name : $Last_Name,Date_of_Birth: $Date_of_Birth,Password : $Password) {
      First_Name
      Last_Name
      Date_of_Birth
      Password
    }
  }
`;

const SignupPage = () => {
  const [First_Name, setFirst_Name] = useState('');
  const [Last_Name, setLast_Name] = useState('');
  const [Date_of_Birth, setDate_of_Birtday] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [createUser] = useMutation(CREATE_USER);

  const handleNameChange = (e) => {
    setFirst_Name(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLast_Name(e.target.value);
  };
  const handleDataChange = (e) => {
    setDate_of_Birtday(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ variables: { First_Name, Last_Name, Date_of_Birth, Password: NewPassword } })
      .then(() => {
        // Refetch the users after successful creation
        // You can skip this if you're using real-time updates or subscriptions
        client.resetStore();
      })
      .catch((error) => {
        console.log("----- ", First_Name, Last_Name, Date_of_Birth, NewPassword);
        console.error(error);
      });
    e.target.reset();
    // Add your form submission logic here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title">Signup Page</div>
        <div className="input-box">
          <label htmlFor="first-name" className="label">First Name:</label>
          <input
            type="text"
            id="first-name"
            required
            className="input"
            onChange={handleNameChange}
            value={First_Name}
          />
          <div className="underline-hover"></div>
        </div>
        <div className="input-box">
          <label htmlFor="last-name" className="label">Last Name:</label>
          <input
            type="text"
            id="last-name"
            required
            className="input"
            onChange={handleLastNameChange}
            value={Last_Name}
          />
          <div className="underline-hover"></div>
        </div>
        <div className="input-box">
          <label htmlFor="dob" className="label">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            required
            className="input"
            onChange={handleDataChange}
            value={Date_of_Birth}
          />
          <div className="underline-hover"></div>
        </div>
        <div className="input-box">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            required
            className="input"
            onChange={handleNewPasswordChange}
            value={NewPassword}
          />
          <div className="underline-hover"></div>
        </div>
        <div className="button">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
