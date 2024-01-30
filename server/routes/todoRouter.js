const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const todos = [];

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", (req, res) => {
  res.send({ todos });
});

router.get("/:id", (req, res) => {
  const ID = req.params.id;
  const foundTodo = todos.find((todo) => todo.id === ID);
  if (foundTodo) {
    res.json(foundTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  const todo = req.body;
  todos.push(todo);
  res.json({ message: "Todo was craeted" });
});

router.delete("/:id", (req, res) => {
  const ID = req.params.id;
  const todoToDelete = todos.find((todo) => todo.id === ID);
  const index = todos.indexOf(todoToDelete);
  todos.splice(index, 1);
  res.json({ message: "Todo was deleted" });
});

  

module.exports = router;
