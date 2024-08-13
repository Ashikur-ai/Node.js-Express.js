const express = require("express");
require("dotenv").config();
const uploadRoute = require("./routes/uploadRoute/uploadRoute");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from image upload");
});

// create or upload routes 
app.use("/api/users", uploadRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});