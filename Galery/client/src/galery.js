import React, { useState } from 'react';
import './galery.css';

const Galery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  const handleAddImage = (e) => {
    e.preventDefault();
    if (selectedImage && selectedImage.category.trim() !== '') {
      setImageList([...imageList, selectedImage]);
      setSelectedImage(null);
    }
  };

  const handleCategorySearch = (e) => {
    e.preventDefault();
    const category = searchCategory.trim().toLowerCase();
    if (category === '') {
      setFilteredImages(imageList);
    } else {
      const filtered = imageList.filter((image) =>
        image.category.toLowerCase().includes(category)
      );
      setFilteredImages(filtered);
    }
    setSearchCategory('');
  };

  return (
    <div className="gallery-container">
      <h1>Image Gallery</h1>
      <div className="image-container">
        {filteredImages.map((image, index) => (
          <img src={image.url} alt={`Image ${index}`} key={index} />
        ))}
      </div>
      <form onSubmit={handleAddImage}>
        <input
          type="text"
          value={selectedImage ? selectedImage.url : ''}
          onChange={(e) =>
            setSelectedImage({
              ...selectedImage,
              url: e.target.value,
            })
          }
          placeholder="Image URL"
        />
        <input
          type="text"
          value={selectedImage ? selectedImage.category : ''}
          onChange={(e) =>
            setSelectedImage({
              ...selectedImage,
              category: e.target.value,
            })
          }
          placeholder="Image Category"
        />
        <button type="submit" disabled={!selectedImage}>
          Add Image
        </button>
      </form>
      <form onSubmit={handleCategorySearch}>
        <input
          type="text"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          placeholder="Search by Category"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Galery;
