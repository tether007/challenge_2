const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Correct API is running");
});

app.get("/health", (req, res) => {
  res.json({ message: "All systems operational" });
});



app.listen(5000, () => {
  console.log("Correct API running on http://localhost:5000");
});
