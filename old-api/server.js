const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(503).json({ message: "Service deprecated" });
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        Maintenance
        <!-- FLAG{BUILT_ONCE_ENV_LEAK} -->
      </body>
    </html>
  `);
});

app.listen(3001, () => {
  console.log("Old API running on http://localhost:3001");
});
