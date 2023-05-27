const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

module.exports = (secretKey) => {
  // Authentication middleware
  const authenticateToken = (req, res, next) => {
    const authenticateToken = (req, res, next) => {
        const token = req.cookies.token;
        if (!token) {
          return res.sendStatus(401);
        }
    
        jwt.verify(token, secretKey, (err, decoded) => {
          if (err) {
            return res.sendStatus(403);
          }
          // Store the decoded token in the request object for later use
          req.user = decoded;
          next();
        });
      };
      
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({success: false, msg: "Not authorize"});
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decoded;
      next();
    });
  };

  router.get("/", authenticateToken, (req, res) => {
    res.json({ 
      success: true,
      message: "Protected data" });
  });

  return router;
};
