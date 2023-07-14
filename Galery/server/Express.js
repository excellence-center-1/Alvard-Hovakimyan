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


/*const express = require('express');
const app = express();
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer'); // Import multer for handling file uploads

app.use(express.json());

// Set up multer storage for storing uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Set the destination folder for storing the images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename for each uploaded image
  },
});

const upload = multer({ storage: storage });

// Registration endpoint
app.post('/register', async (req, res) => {
  // Your registration code here
});

// Login endpoint
app.post('/login', async (req, res) => {
  // Your login code here
});

// Image upload endpoint
app.post('/upload-image', upload.single('image'), async (req, res) => {
  // Check if an image file was uploaded
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

  // Get the image filename and other data from the request body
  const { filename, category } = req.file;

  try {
    // Save the image information to the database
    const insertQuery = 'INSERT INTO images (filename, category) VALUES ($1, $2)';
    await pool.query(insertQuery, [filename, category]);

    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload image', error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
*/
