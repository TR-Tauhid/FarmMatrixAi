// filepath: backend/middleware/auth.js
/**
 * Authentication Middleware
 * 
 * MongoDB Integration: This middleware verifies Firebase tokens
 * Currently placeholder - will integrate with Firebase Admin SDK
 * when MongoDB is connected
 */

const authMiddleware = (req, res, next) => {
  // Get token from header
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    // For development, allow requests without token
    // In production, uncomment the return statement below
    // return res.status(401).json({ success: false, message: 'No token provided' });
    
    req.user = { uid: 'demo-user' };
    return next();
  }

  const token = authHeader.split(' ')[1];
  
  if (!token) {
    req.user = { uid: 'demo-user' };
    return next();
  }

  // In production, verify Firebase token here:
  // admin.auth().verifyIdToken(token)
  //   .then(decodedToken => {
  //     req.user = decodedToken;
  //     next();
  //   })
  //   .catch(error => {
  //     return res.status(401).json({ success: false, message: 'Invalid token' });
  //   });

  // For now, allow all requests
  req.user = { uid: 'demo-user' };
  next();
};

module.exports = authMiddleware;