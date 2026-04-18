const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../db");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
    const { user_id } = req.body;

    const filePath = req.file.path;

    const sql = "INSERT INTO files (user_id, file_path) VALUES (?, ?)";
    db.query(sql, [user_id, filePath], (err, result) => {
        if (err) return res.send(err);
        res.send("File uploaded");
    });
});

module.exports = router;