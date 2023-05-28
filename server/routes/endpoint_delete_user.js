const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.delete("/", (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      res.json({
        success: false,
        message: "unauthorized",
      });
    }

    const decoded = jwt.verify(token, secretKey);
    if (!decoded) {
      res.json({
        success: false,
        message: "unauthorized",
      });
    } 
    userId = decoded.userId;
    const sqlDelete = "DELETE FROM users WHERE id = ?";
    connection.query(sqlDelete, [userId], async (err, results) => {
        if (err) {
            res.json({
              success: false,
              error: err.message,
            });
          } else {
            if (result.affectedRows > 0) {
              res.json({
                success: true,
                message: "User deleted successfully",
              });
            } else {
              res.json({
                success: false,
                error: "User not found",
              });
            }
          }
    })

  });

  return router;
};
