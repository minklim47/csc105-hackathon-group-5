const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.post('/', (req, res) => {
    const { name, content, type, user_id} = req.body; // Assuming the request body contains 'name', 'content', 'type', 'user_id', and 'created_at' properties
    
    if (!name || !content || !type || !user_id) {
      // If any required property is missing, return an error response
      return res.status(400).json({ error: 'Name, content, type, and user_id are required' });
    }

    const sqlInsert = "INSERT INTO stars (name, content, type, user_id) VALUES (?, ?, ?, ?)";

    connection.query(
      sqlInsert,
      [name, content, type, user_id],
      (err, result) => {
        if (err) {
          res.json({
            success: false,
            error: err.message,
          });
        } else {
          res.json({
            success: true,
            message: "Star created successfully",
            data: {
              star_id: result.insertId,
            },
          });
        }
      }
    );
  });

  return router;
};
