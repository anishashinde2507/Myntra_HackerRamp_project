import React, { useState } from 'react';
import axios from 'axios';
import './StyleMatch.css'; // Make sure this file exists and has necessary styles

const StyleMatch = () => {
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [recommendations, setRecommendations] = useState({ recommendations: [] });

  const fetchRecommendations = async () => {
    try {
      const response = await axios.post('http://localhost:5000/recommendations', {
        category: category,
        image_url: imageUrl
      });
      console.log("Response from backend:", response.data);  // Log response data for debugging
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="style-match">
      <h2>Style Match Outfit Recommendations</h2>
      <p>Get outfit recommendations based on your style preferences.</p>
      <div className="input-form">
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button onClick={fetchRecommendations}>Get Recommendations</button>
      </div>
      <div className="recommendations-container">
        <h2>Recommended Items</h2>
        {recommendations.recommendations.length === 0 ? (
          <p>No recommendations</p>
        ) : (
          recommendations.recommendations.map((item, index) => (
            <div key={index} className="recommendation-item">
              <img src={item.URL} alt={item.BrandName} className="item-image" />
              <h2 className="item-name">{item.BrandName}</h2>
              <p className="item-description">{item.Description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StyleMatch;
