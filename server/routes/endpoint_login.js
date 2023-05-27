const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

module.exports = (connection, secretKey) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    const sqlSelect = "SELECT * FROM group05.users WHERE email=?";
    
    connection.query(sqlSelect, [email], (err, results) => {
      if (err) {
        console.error("Error executing the SQL query: ", err);
        res.sendStatus(500);
      } else {
        // console.log(results)
        if (results.length === 0) {
          console.log("User not found.");
          res.sendStatus(401);
        } else {
          const user = results[0];

          bcrypt.compare(password, user.hashed_password, (err, isMatch) => {
            if (err) {
              console.error("Error comparing passwords: ", err);
              res.sendStatus(500);
            } else {
              if (!isMatch) {
                console.log("Incorrect password.");
                res.sendStatus(401);
              } else {
                const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: "1h" });
                res.cookie("token", token, { httpOnly: true });
                res.sendStatus(200);
              }
            }
          });

        }
      }
    });
  });

  return router;
};
