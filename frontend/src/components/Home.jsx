import React from 'react';

const Home = () => {
  return (
    <div className="container home-box">
      <h2>Welcome to Myntra Hackathon</h2>
      <p>Select a solution to get started:</p>
      <div>
        <a href="/style-match" className="button">Style Match Outfit Recommendations</a>
        <a href="/cloth-fit" className="button">AI Cloth Fit Recommendations</a>
      </div>
    </div>
  );
};

export default Home;
