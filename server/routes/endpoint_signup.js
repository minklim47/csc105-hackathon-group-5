const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.post("/", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    connection.query(
      "SELECT * FROM users WHERE username = ? or email = ?",
      [username, email],
      (err, results) => {
        if (err) {
          res.json({
            success: false,
            data: null,
            error: err.message,
          });
        } else {
          if (results.length > 0) {
            return res.json({
              success: false,
              data: null,
              message: "duplicate account",
            });
          } else {
            const sqlInsert = `INSERT INTO users (username,email,hashed_password) VALUES (?,?,?)`;
            connection.query(
              sqlInsert,
              [username, email, hashedPassword],
              (err, results) => {
                if (err) {
                  res.json({
                    success: false,
                    data: null,
                    error: err.message,
                  });
                  return connection.rollback(() => {
                    console.error("Error inserting row:", err.stack);
                    throw err;
                  });
                } else {
                  if (results) {
                    res.json({
                      success: true,
                      message: "register success",
                      userId: results.insertId,
                    });
                  }
                }
              }
            );
          }
        }
      }
    );
  });

  return router;
};
