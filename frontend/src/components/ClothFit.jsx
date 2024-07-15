// ClothFit.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ClothFit.css'


const ClothFit = () => {
  const [userProfile, setUserProfile] = useState({ height: '', weight: '' });
  const [clothingItem, setClothingItem] = useState({ type: '', brand: '' });
  const [recommendedSize, setRecommendedSize] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in userProfile) {
      setUserProfile({ ...userProfile, [name]: value });
    } else {
      setClothingItem({ ...clothingItem, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/recommend-fit', { userProfile, clothingItem });
      setRecommendedSize(response.data.recommendedSize);
    } catch (error) {
      console.error('Error recommending size', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cloth-fit">
      <h1>AI Cloth Fit Recommendation</h1>
      <form onSubmit={handleFormSubmit} className="cloth-fit-form">
        <h2>User Profile</h2>
        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={userProfile.height}
            onChange={handleInputChange}
            placeholder="Enter your height"
            className="input-field"
          />
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={userProfile.weight}
            onChange={handleInputChange}
            placeholder="Enter your weight"
            className="input-field"
          />
        </label>
        <h2>Clothing Item</h2>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={clothingItem.type}
            onChange={handleInputChange}
            placeholder="e.g., T-shirt,Tops,Sports Wear"
            className="input-field"
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={clothingItem.brand}
            onChange={handleInputChange}
            placeholder="e.g., Nike, Zara,H&M,BIBA,PUMA"
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-button">Get Recommendation</button>
      </form>
      {loading && (
        <div className="loading">
          <div className="loading-bar"></div>
        </div>
      )}
      {recommendedSize && !loading && <h2>Recommended Size: {recommendedSize}</h2>}
    </div>
  );
};

export default ClothFit;
