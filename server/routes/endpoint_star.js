const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  //Get Specific star
  router.get("/:starId", (req, res) => {
    const starId = req.params.starId;
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

  //Get all star
  router.get("/", (req, res) => {
    const sqlSelect = "SELECT * FROM group05.stars ORDER BY RAND() LIMIT 10";
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

  //Add Comment
  router.get("/:starId/comment", (req, res) => {
    const { starId } = req.params;
    const { comment } = req.body;

    const sqlInsert = "INSERT INTO comments (star_id, comment) VALUES (?, ?)";

    connection.query(sqlInsert, [starId, comment], (err, result) => {
      if (err) {
        console.error("Error inserting comment:", err);
        res.status(500).json({ success: false, error: err.message });
      } else {
        console.log("Comment added successfully");
        res
          .status(200)
          .json({ success: true, message: "Comment added successfully" });
      }
    });
  });

  //Get all comment
  router.get("/:starId/comments", (req, res) => {
    const { starId } = req.params;

    const sqlSelectComments = "SELECT * FROM comments WHERE star_id = ?";

    connection.query(sqlSelectComments, [starId], (err, rows) => {
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
