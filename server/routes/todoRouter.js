const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const todos = []

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", (req, res) => {
    res.send({ todos });
});

router.post("/", (req, res) => {
    console.log(req.body);
    const todo = req.body;
    todos.push(todo)
    res.json({ message: 'Todo was created' });
});

module.exports = router;
