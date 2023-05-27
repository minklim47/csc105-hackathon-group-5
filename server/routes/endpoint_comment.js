const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.post('/', (req, res) => {
    const { comment } = req.body;

    const sqlInsert = "INSERT INTO comments (comment) VALUES (?)";

    connection.query(
      sqlInsert,
      [content, type, user_id, created_at],
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
