//tried copying this file into Cypress, still no joy in getting it to use it...
//maybe look at how you specified databases in Chitter...
var mongoose = require("mongoose");

beforeEach(function (done) {
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
