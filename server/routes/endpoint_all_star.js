const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.get("/:starId", (req, res) => {
    const starId = req.params.starId;
    // const starId = req.query.starId;
    const sqlSelect = "SELECT * FROM group05.stars WHERE id = ?";
    connection.query(sqlSelect, [starId], (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if successful
        res.json({
          success: true,
          data: rows,
          error: null,
        });
      }
    });
  });

  router.get("/", (req, res) => {
    const sqlSelect = "SELECT * FROM group05.stars";
    connection.query(sqlSelect, (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if successful
        res.json({
          success: true,
          data: rows,
          error: null,
        });
      }
    });
  });

  return router;
};
