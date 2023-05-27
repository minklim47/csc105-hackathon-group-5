const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.post("/", (req, res) => {
    const { username, email, password, profile_img } = req.body;

    const sqlSelect = "SELECT * FROM users WHERE email = ?";
    connection.query(sqlSelect, [email], (err, results) => {
      if (err) {
        console.error("Error executing the SQL query: ", err);
        return res.sendStatus(500);
      }

      if (results.length > 0) {
        return res.status(409).json({ error: "User with the given email already exists" });
      }

      if (!password) {
        console.error("Error: Password is required");
        return res.status(400).json({ error: "Password is required" });
      }

      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          console.error("Error generating salt: ", err);
          return res.sendStatus(500);
        }

        bcrypt.hash(password, salt, (err, hashedPassword) => {
          if (err) {
            console.error("Error hashing password: ", err);
            return res.sendStatus(500);
          }

          const sqlInsert = "INSERT INTO users (username, email, hashed_password, profile_img) VALUES (?, ?, ?, ?)";
          connection.query(sqlInsert, [username, email, hashedPassword, profile_img], (err) => {
            if (err) {
              console.error("Error executing the SQL query: ", err);
              return res.sendStatus(500);
            }
            res.sendStatus(200);
          });
        });
      });
    });
  });

  return router;
};
