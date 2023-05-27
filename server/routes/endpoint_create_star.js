const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.post('/', (req, res) => {
    // const { name, content, type, user_id, created_at } = req.body; // Assuming the request body contains 'name', 'content', 'type', 'user_id', and 'created_at' properties
    const star = req.body.star;
    console.log(star)
    if (!star.name || !star.content || !star.type ) {
      // If any required property is missing, return an error response
      return res.status(400).json({ error: 'Name, content, type, user_id, and created_at are required' });
    }
    const sqlInsert = "INSERT INTO stars (name, content, type, user_id) VALUES (?, ?, ?,?)";
    star.user_id = 1;
    connection.query(
      sqlInsert,
      [star.name, star.content, star.type, star.user_id],
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
