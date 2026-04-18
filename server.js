const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/booking", require("./routes/booking"));
app.use("/upload", require("./routes/upload"));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});