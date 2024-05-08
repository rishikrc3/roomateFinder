const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization']; // Get the token from the headers
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const extractedToken = token.split(' ')[1]; // Extract the token after "Bearer"
    const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET); // Verify with your secret key
    req.userId = decoded.userId; // Get the user ID from the token
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' }); // Handle invalid tokens
  }
};

module.exports = authenticate;
