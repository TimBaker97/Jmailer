const express = require("express");
// The app object is used to setup configuration to listen to incoming request and route them on
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// If an environment variable is active use PORT, if not such as in development use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
