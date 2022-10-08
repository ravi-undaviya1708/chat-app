const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const { chats } = require("./data/data");

app.get("/", (req, res) => {
  res.send("I'm alive");
});
app.get("/chat", (req, res) => {
  res.send(chats);
});
app.get("/chat/:id", (req, res) => {
  const d = chats.find((obj) => obj.id === req.params.id);
  if (d) res.send(d);
  else res.send("Data not exists");
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
