const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage } = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');

const crypto = require('crypto');
const path = require('path');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/MessMate'; // Your MongoDB URI

// Connect to MongoDB without deprecated options
mongoose.connect(mongoURI);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

module.exports = upload;
