const express = require('express');
const app = express();
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Registration endpoint
app.post('/register', async (req, res) => {
  const { firstName, lastName, password, date_of_birth , email} = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery =
      'INSERT INTO users (first_name, last_name, password, date_of_birth, email) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(insertQuery, [firstName, lastName, hashedPassword, date_of_birth, email]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User registration failed', error: error.message });
  }
});

// Login endpoint
// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Retrieve the user from the database based on the email
    const selectQuery = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(selectQuery, [email]);
    const user = result.rows[0];

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      // Generate a JWT token for authentication
      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Set the destination folder for storing the images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename for each uploaded image
  },
});

const upload = multer({ storage: storage });

// ...

// Add Image endpoint
app.post('/upload-image', async (req, res) => {
  try {
    const { filename, category } = req.body;

    // Insert the image details into the database
    const insertQuery = 'INSERT INTO images (filename, category) VALUES ($1, $2)';
    await pool.query(insertQuery, [filename, category]);

    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload image', error: error.message });
  }
});
const PORT =  4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
