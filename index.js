const express = require("express");
const app = express();
const todoRoutes = require("./routes/todo");
require("./config/db");

app.use(express.json());

app.use("/todos", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
