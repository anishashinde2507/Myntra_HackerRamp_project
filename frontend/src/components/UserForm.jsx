import axios from 'axios';
import React, { useState } from 'react';
import '../styles.css';
const UserForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    chest: '',
    waist: '',
    hips: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cloth-fit', formData);
      console.log(response.data);
      // Display the recommended size to the user
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>AI Cloth Fit Recommendations</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Height (cm):
          <input type="number" name="height" value={formData.height} onChange={handleChange} required />
        </label>
        <label>
          Weight (kg):
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </label>
        <label>
          Chest (cm):
          <input type="number" name="chest" value={formData.chest} onChange={handleChange} required />
        </label>
        <label>
          Waist (cm):
          <input type="number" name="waist" value={formData.waist} onChange={handleChange} required />
        </label>
        <label>
          Hips (cm):
          <input type="number" name="hips" value={formData.hips} onChange={handleChange} required />
        </label>
        <button type="submit">Get Recommendation</button>
      </form>
    </div>
  );
};

export default UserForm;
