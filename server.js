const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/apis/users");
const profile = require("./routes/apis/profile");
const posts = require("./routes/apis/posts");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongo Db

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello There?");
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//(process.env.PORT) for deploying on Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
