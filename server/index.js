const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const userRoutes = require('./routes/userRoutes'); 
const roomRoutes = require('./routes/roomRoutes'); 

// Enable CORS
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// Connect to MongoDB
try {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/MessMate', {
  });

  // Once the connection is established, log a success message
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

  // Handle connection errors
  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
  });

} catch (error) {
  console.error('Failed to connect to MongoDB:', error);
}

// Use routes
app.use('/api', userRoutes);
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
