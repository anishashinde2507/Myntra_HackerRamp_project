const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// AI Cloth Fit Recommendation
router.post('/cloth-fit', async (req, res) => {
  try {
    const { height, weight, chest, waist, hips } = req.body;
    
    // Implement your logic here (example: a simple rule-based system)
    const recommendedSize = getRecommendedSize(height, weight, chest, waist, hips);
    
    res.send({ recommendedSize });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Sample function for recommending size (placeholder)
function getRecommendedSize(height, weight, chest, waist, hips) {
  // Implement your logic or ML model integration here
  // Placeholder logic: This should be replaced with actual model or complex logic
  if (chest < 36) return 'S';
  if (chest < 40) return 'M';
  if (chest < 44) return 'L';
  return 'XL';
}

module.exports = router;
