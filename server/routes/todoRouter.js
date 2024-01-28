const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const todos = ["todo1", "todo2"];
    res.send({ todos });
});

module.exports = router;
