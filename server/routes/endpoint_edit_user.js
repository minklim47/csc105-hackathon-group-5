const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = (connection, secretKey) => {
  router.patch("/", async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { user_id } = req.params;
    const token = req.cookies.token;
    if (!token) {
      res.json({
        success: false,
        message: "unauthorized",
      });
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      if (!decoded) {
        res.json({
          success: false,
          message: "unauthorized",
        });
      }
      userId = decoded.userId;
      const sqlSelect = "SELECT hashed_password FROM users WHERE id = ?";
      connection.query(sqlSelect, [user_id], async (err, results) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: err.message,
          });
        } else {
          const user = results[0];
          bcrypt.compare(
            oldPassword,
            user.hashed_password,
            async (err, isMatch) => {
              if (err) {
                res.json({
                  success: false,
                  error: err,
                });
              } else {
                if (!isMatch) {
                } else {
                  const sqlSelect =
                    "SELECT hashed_password FROM users WHERE id = ?";
                  const hash = await bcrypt.hash(password, 10);
                  connection.query(
                    "INSERT INTO users hashed_password VALUES ?",
                    [hash],
                    (err, results) => {
                      if (err) {
                        res.json({
                          success: false,
                          data: null,
                          error: err.message,
                        });
                      } else {
                        if (results) {
                          res.json({
                            success: true,
                            message: "change password successful",
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
        }

        const user = results[0];
        if (!user) {
          return res.status(404).json({
            success: false,
            error: "User not found",
          });
        }

        const { hashed_password } = user;
        const isPasswordMatch = await bcrypt.compare(
          currentPassword,
          hashed_password
        );
        if (!isPasswordMatch) {
          return res.status(400).json({
            success: false,
            error: "Invalid current password",
          });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        const sqlUpdate = "UPDATE users SET hashed_password = ? WHERE id = ?";
        connection.query(
          sqlUpdate,
          [hashedNewPassword, user_id],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                success: false,
                error: err.message,
              });
            }

            res.json({
              success: true,
              message: "User password updated successfully",
            });
          }
        );
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });

  return router;
};
