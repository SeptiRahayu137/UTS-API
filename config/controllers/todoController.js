const db = require("../config/db");

exports.getTodos = (req, res) => {
  db.query("SELECT * FROM todos", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.createTodo = (req, res) => {
  const { title, description } = req.body;
  db.query(
    "INSERT INTO todos (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Todo created" });
    }
  );
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  db.query(
    "UPDATE todos SET title=?, description=?, status=? WHERE id=?",
    [title, description, status, id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Todo updated" });
    }
  );
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM todos WHERE id=?", [id], (err, result) => {
    if (err) throw err;
    res.json({ message: "Todo deleted" });
  });
};
