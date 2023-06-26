const express = require('express');
const app = express();
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());

// Registration endpoint
app.post('/register', async (req, res) => {
  // Your registration code here
});

// Login endpoint
app.post('/login', async (req, res) => {
  // Your login code here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
