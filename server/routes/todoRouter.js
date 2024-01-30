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

router.post("/", (req, res) => {
  const todo = req.body;
  todos.push(todo);

  res.json({
    message: "Todo was created",
    new_todo: todo,
    all_todos: todos,
  });
});

router.patch("/:id", (req, res) => {
  const ID = req.params.id;
  const todoToUpdate = todos.find((todo) => todo.id === ID);

  if (!todoToUpdate) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todoToUpdate.completed = req.body.completed;

  res.json({
    message: "Todo was Updated",
    updated_todo: todoToUpdate,
    all_todos: todos,
  });
});

router.delete("/:id", (req, res) => {
  const ID = req.params.id;
  const todoToDelete = todos.find((todo) => todo.id === ID);
  const updatedTodos = todos.filter((todo) => todo.id !== ID);
  const index = todos.indexOf(todoToDelete);
  todos.splice(index, 1);

  res.json({
    message: "Todo was Deleted",
    deleted_todo: todoToDelete,
    all_todos: updatedTodos,
  });
});

module.exports = router;
