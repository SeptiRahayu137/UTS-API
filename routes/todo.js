const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM todos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  db.query(
    "INSERT INTO todos (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Todo berhasil ditambahkan!" });
    }
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  db.query(
    "UPDATE todos SET title=?, description=? WHERE id=?",
    [title, description, id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Todo berhasil diperbarui!" });
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM todos WHERE id=?", [id], (err, result) => {
    if (err) throw err;
    res.json({ message: "Todo berhasil dihapus!" });
  });
});

module.exports = router;
