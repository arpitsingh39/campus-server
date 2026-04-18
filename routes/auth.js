const express = require("express");
const router = express.Router();
const db = require("../db");

// Signup
router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
        if (err) return res.send(err);
        res.send("User Registered");
    });
});

// Login
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email=? AND password=?";
    db.query(sql, [email, password], (err, result) => {
        if (err) return res.send(err);

        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.send("Invalid credentials");
        }
    });
});

module.exports = router;