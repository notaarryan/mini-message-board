const express = require("express");
const path = require("node:path");
const app = new express();
const indexRouter = require("./routes/indexRouter");
const session = require("express-session");

app.use(
  session({
    secret: " ",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
