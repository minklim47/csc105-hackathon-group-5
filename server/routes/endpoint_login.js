const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

module.exports = (connection, secretKey) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    // const input = req.body.user;
    const sqlSelect = "SELECT * FROM group05.users WHERE email=?";

    connection.query(sqlSelect, [email], (err, results) => {
      if (err) {
        console.error("Error executing the SQL query: ", err);
        res.sendStatus(500);
      } else {
        if (results.length === 0) {
          res.sendStatus(401).json({
            success: false,
            message: "User not found",
          });
        } else {
          const user = results[0];
          bcrypt.compare(password, user.hashed_password, (err, isMatch) => {
            if (err) {
              console.error("Error comparing passwords: ", err);
              return res.sendStatus(500).json({
                success: false,
                message: "Incorrect password",
              });
            } else {
              if (!isMatch) {
                console.log("Incorrect password.");
                 res.sendStatus(401).json({
                  success: false,
                  message: "Incorrect password",
                });
              } else {
                const token = jwt.sign({ userId: user.id }, secretKey, {
                  expiresIn: "1d",
                });
                res.cookie("token", token, { httpOnly: true });
                 res.json({

                  success: true,
                  message: "Login success",
                  userId:user.id
                });
              }
            }
          });
        }
      }
    });
  });

  return router;
};
