const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Book Shop server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
