"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

require("dotenv/config");

var _userRouter = _interopRequireDefault(require("./userRouter"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));

_mongoose["default"].connect("mongodb://localhost:27017/multistage", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (res) {
  app.get('/', function (req, res) {
    res.send("Home Route");
  });
  app.use('/user', _userRouter["default"]);
  var PORT = process.env.PORT;
  app.listen(PORT, function () {
    console.log("server is running in port ".concat(PORT));
  });
})["catch"](function (err) {
  console.error(err);
});