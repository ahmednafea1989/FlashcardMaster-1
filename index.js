const express = require("express");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const connectDB = require("./config/db");

//Connect DB
connectDB();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(routes);

app.listen(PORT, () => console.log(`Server started on $(PORT)`));
