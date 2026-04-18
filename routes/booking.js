const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/book", (req, res) => {
    const { user_id, resource_name, date } = req.body;

    const sql = "INSERT INTO bookings (user_id, resource_name, date) VALUES (?, ?, ?)";
    db.query(sql, [user_id, resource_name, date], (err, result) => {
        if (err) return res.send(err);
        res.send("Booking successful");
    });
});

module.exports = router;