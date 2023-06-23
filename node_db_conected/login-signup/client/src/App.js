import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useMutation, useQuery } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with the server's GraphQL endpoint
  cache: new InMemoryCache(),
});
const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleButtonClick = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };

  return (  
  <ApolloProvider client={client}>
    <div className="container">
      {currentPage === 'login' ? <LoginPage /> : <SignupPage />}
      <button className="toggle-button" onClick={handleButtonClick}>
        {currentPage === 'login' ? 'Go to Signup' : 'Go to Login'}
      </button>
    </div>
    </ApolloProvider>
  );
};

export default App;
