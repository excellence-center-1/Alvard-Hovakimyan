
import 'bootstrap/dist/css/bootstrap.min.css';
import './galery.css';
import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';

const Galery = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedImage, setSelectedImage] = useState({
    url: '', // The URL input field
    category: '', // The category input field
  });
  const [imageList, setImageList] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchError, setSearchError] = useState(null); // New state for search error message

// const handleAddImage = (e) => {
//   e.preventDefault();

//   // Validate that both URL and category are provided
//   if (selectedImage.url.trim() !== '' && selectedImage.category.trim() !== '') {
//     // Add the image to the specified category
//     setImageList([...imageList, selectedImage]);

//     // // Also, add the image to the "All" category
//     // setImageList([...imageList, { ...selectedImage, category: 'All' }]);

//     setSelectedImage({ url: '', category: '' }); // Clear the input fields
//   }
// };

  const handleAddImage = async (e) => {
  e.preventDefault();

  // Validate that both URL and category are provided
  if (selectedImage.url.trim() !== '' && selectedImage.category.trim() !== '') {
    try {
      const response = await fetch('http://localhost:4000/upload', { // Make sure the URL matches the server's address
        method: 'POST',
        body: JSON.stringify(selectedImage),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the response contains the newly added image details, you can update your UI here.
        // For example, add the new image to the imageList.
        setImageList([...imageList, data.image]);
        setSelectedImage({ url: '', category: '' });
      } else {
        console.error('Error adding image');
      }
    } catch (error) {
      console.error('Error adding image', error);
    }
  }
};



  const handleCategorySearch = (e) => {
    e.preventDefault();
    const category = searchCategory.trim().toLowerCase();
    if (category === '') {
      setFilteredImages(imageList); // Show all images
    } else {
      // Filter images by category
      const filtered = imageList.filter((image) =>
        image.category.toLowerCase().includes(category)
      );
      setFilteredImages(filtered);
    }
    setSearchCategory('');
   };
   const handleLogout = () => {
    setIsLoggedIn(false);
    // Redirect the user to the login page after logout using useHistory
    window.location.href = '/login';
  };
  //  const handleLogout = () => {
  //   // Implement your logout logic here, such as clearing tokens or user data.
  //   // For example, if you are using a state-based authentication system:
  //   setIsLoggedIn(false); // Set isLoggedIn to false

  //   // Redirect the user to the login page after logout
  //   const navigate = useNavigate();
  //   navigate('/login');
  // };
  // const handleLogout = () => {
  //   // Implement your logout logic here, such as clearing tokens or user data.
  //   // For example, if you are using a state-based authentication system:
  //   setIsLoggedIn(false);
  // };

  useEffect(() => {
    // Perform any initial data fetching or processing here, if needed.
  }, []);

  return (
    <div className="container gallery-container">
    <div><button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button></div>
      <h1 className="mt-4">Image Gallery</h1>

      <form onSubmit={handleAddImage} className="mt-4">
        <div className="form-group">
          <input
            type="text"
            value={selectedImage.url}
            onChange={(e) => setSelectedImage({ ...selectedImage, url: e.target.value })}
            className="form-control mb-3"
            placeholder="Image URL"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={selectedImage.category}
            onChange={(e) => setSelectedImage({ ...selectedImage, category: e.target.value })}
            className="form-control mb-3"
            placeholder="Image Category"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Image
        </button>
      </form>

      <form onSubmit={handleCategorySearch} className="mt-4">
        <div className="form-group">
          <input
            type="text"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="form-control mb-3"
            placeholder="Search by Category"
          />
        </div>
        {searchError && <p className="error-message">{searchError}</p>}

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <div className="row image-container">
        {filteredImages.map((image, index) => (
          <div className="col-md-4" key={index}>
            <img src={image.url} alt={`Image ${index}`} className="img-fluid mb-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
