const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.post("/", (req, res) => {
        // Clear token cookie
        res.clearCookie("token");
        res.sendStatus(200);
    });

    return router;
};
