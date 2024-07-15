const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myntraHackathon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Myntra Hackathon Backend');
});

// AI Cloth Fit Recommendation Route
app.post('/api/recommend-fit', (req, res) => {
  const { userProfile } = req.body;
  const { height } = userProfile;

  let recommendedSize;

  if (height < 160) {
    recommendedSize = 'S';
  } else if (height >= 160 && height < 180) {
    recommendedSize = 'M';
  } else {
    recommendedSize = 'L';
  }

  res.json({ recommendedSize });
});















const dataFilePath = path.join(__dirname, 'data.json');
let items = [];


fs.readFile(dataFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data file', err);
  } else {
    items = JSON.parse(data);
  }
});


const categoryMapping = {
  'pants': 'tops',
  'tops': 'pants',
  'jeans': 'tops',
  'shirts': 'pants'
  // Add other mappings as needed
};







app.post('/recommendations', async (req, res) => {
  const { category, image_url } = req.body;

  // Define categories for recommendation
  // const recommendationCategories = {
  //   'tops': ['jeans', 'trousers'],
  //   't-shirts': ['jeans', 'trousers'],
  //   // add more mappings as needed
  // };
  const recommendationCategory = categoryMapping[category.toLowerCase()];

  if (!recommendationCategory) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  const recommendations = items.filter(item => item.category === category);

res.json({ recommendations });


});

  


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
