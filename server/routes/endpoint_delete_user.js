const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.delete('/:userId', (req, res) => {
    const userId = req.params.userId;

    const sqlDelete = "DELETE FROM users WHERE id = ?";
    connection.query(sqlDelete, [userId], (err, result) => {
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
    });
  });

  return router;
};
