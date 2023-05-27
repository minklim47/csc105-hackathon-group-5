const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
    router.get("/", (req, res) => {
        const sqlSelect = "SELECT * FROM group05.users";

        connection.query(sqlSelect, (err, rows) => {
            if (err) {
                res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            } else {
                // Return data to the client if successful
                return res.json({
                    success: true,
                    data: rows,
                    error: null,
                });
            }
        });
        // res.send(req.params.sectionId);
        // console.log(req.params.sectionId);
    });
    return router;
};
