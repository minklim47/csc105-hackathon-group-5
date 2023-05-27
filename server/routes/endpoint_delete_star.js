const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.delete('/:star_id', (req, res) => {
    const starId = req.params.star_id;

    const sqlDelete = "DELETE FROM stars WHERE id = ?";
    connection.query(sqlDelete, [starId], (err, result) => {
      if (err) {
        res.json({
          success: false,
          error: err.message,
        });
      } else {
        if (result.affectedRows > 0) {
          res.json({
            success: true,
            message: "Star deleted successfully",
          });
        } else {
          res.json({
            success: false,
            error: "Star not found",
          });
        }
      }
    });
  });

  return router;
};
