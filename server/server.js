const express = require('express');
const app = express();
const todoRoute = require('./routes/todoRouter')

app.use('/api/todos', todoRoute)

app.listen(5000, () => {
    console.log("Server started on port", 5000);
});