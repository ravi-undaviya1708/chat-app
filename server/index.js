const express = require("express");
const app = express();

const { chats } = require("./data");

app.get("/", (req, res) => {
  res.send("I'm alive");
});
app.get("/chat", (req, res) => {
  res.json({ name: "Ravi" });
});

app.listen("5000", console.log("Server started on port 5000"));
