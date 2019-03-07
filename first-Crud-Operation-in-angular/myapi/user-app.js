var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparse = require("body-parser");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var cors = require("cors");
var cookieParser = require("cookie-parser");
mongoose.connect("mongodb://localhost/users");

var Users = mongoose.model("Users", {
  name: "String",
  password: "String",
  email: "String"
});

global.Users = Users;

app.use(bodyparse.json({ type: "application/json" }));
app.use(cookieParser("THIS IS SECRET"));
app.use(cors({ origin: ["http://localhost:4200"], credentials: true }));

app.use(
  session({
    secret: "tiest9383D830d",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { secure: !true }
  })
);

var blogconroller = require("./user");

app.use("/user", blogconroller);

app.post("/login", function(req, res) {
  
  Users.findOne({ name: req.body.name, password: req.body.password }, function(
    err,
    data
  ) {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(201);
      req.session.isLoggedIn = "Y";
      req.session.user = req.body.name;
      res.send(data);
      // next();
    }
  });
});

app.get("/logout", function(req, res) {
  Users.findOne({ name: req.session.user }, function(err, data) {
    res.send(data);
    req.session.destroy();

    console.log("logout");
    res.status(205);
    res.end();
  });
});

module.exports = app;
app.listen(8005);
