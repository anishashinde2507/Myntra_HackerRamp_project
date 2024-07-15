// src/FitRecommendation.jsx
import axios from 'axios';
import React, { useState } from 'react';

const FitRecommendation = () => {
  const [userProfile, setUserProfile] = useState({ height: '', weight: '' });
  const [clothingItem, setClothingItem] = useState({ type: '', brand: '' });
  const [recommendedSize, setRecommendedSize] = useState('');

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
    try {
      const response = await axios.post('/api/recommend-fit', { userProfile, clothingItem });
      setRecommendedSize(response.data.recommendedSize);
    } catch (error) {
      console.error('Error recommending size', error);
    }
  };

  return (
    <div>
      <h1>AI Cloth Fit Recommendation</h1>
      <form onSubmit={handleFormSubmit}>
        <h2>User Profile</h2>
        <label>
          Height:
          <input type="text" name="height" value={userProfile.height} onChange={handleInputChange} />
        </label>
        <label>
          Weight:
          <input type="text" name="weight" value={userProfile.weight} onChange={handleInputChange} />
        </label>
        <h2>Clothing Item</h2>
        <label>
          Type:
          <input type="text" name="type" value={clothingItem.type} onChange={handleInputChange} />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" value={clothingItem.brand} onChange={handleInputChange} />
        </label>
        <button type="submit">Get Recommendation</button>
      </form>
      {recommendedSize && <h2>Recommended Size: {recommendedSize}</h2>}
    </div>
  );
};

export default FitRecommendation;
