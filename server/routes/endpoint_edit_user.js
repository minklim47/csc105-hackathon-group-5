const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.patch('/:userId', (req, res) => {
    const userId = req.params.userId;
    const { username, email, password,} = req.body;

    const sqlInsert = "UPDATE users SET username = ?, email = ?, hashed_password = ? WHERE id = ?";

    connection.query(
      sqlInsert,
      [username, email, password ,userId],
      (err, result) => {
        if (err) {
          res.json({
            success: false,
            error: err.message,
          });
        } else {
          res.json({
            success: true,
            message: "user information updated successfully",
            data: {
              user_id: result.insertId,
            },
          });
        }
      }
    );
  });

  return router;
};
