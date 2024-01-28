const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/api", (req, res) => {
    res.json({ "todos": ["todo1", "todo2"] });
});

app.listen(5000, () => {
    console.log("Server started on port", 5000);
});