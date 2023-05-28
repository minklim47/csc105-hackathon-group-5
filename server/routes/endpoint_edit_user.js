const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.patch('/', (req, res) => {
    const { username, email, password, profile_img} = req.body;

    const sqlInsert = "UPDATE users SET username = ?, email = ?, hashed_password = ?, profile_img = ?";

    connection.query(
      sqlInsert,
      [username, email, password, profile_img],
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
