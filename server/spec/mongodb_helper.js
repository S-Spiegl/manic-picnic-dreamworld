var mongoose = require("mongoose");
// import {setCollectionName} from "../models/user.js"
// import dotenv from "dotenv";

beforeAll(function (done) {
  mongoose.connect("mongodb+srv://ManicPicnicDreamworld:L7jL0eAo7fzpMnPt@cluster0.kqjwqzq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
