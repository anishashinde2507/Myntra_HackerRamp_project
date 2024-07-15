// src/components/RecommendationCard.jsx

import React from 'react';

const RecommendationCard = ({ title, description, image }) => {
  return (
    <div className="recommendation-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RecommendationCard;
