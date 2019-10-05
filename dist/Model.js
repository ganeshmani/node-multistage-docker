"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var userSchema = new _mongoose["default"].Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

var User =
/*#__PURE__*/
function () {
  function User() {
    (0, _classCallCheck2["default"])(this, User);
  }

  (0, _createClass2["default"])(User, null, [{
    key: "getUserById",
    value: function getUserById(userId) {
      return this.findOne({
        _id: _mongoose["default"].mongo.ObjectID(userId)
      }).exec();
    }
  }, {
    key: "getAllUsers",
    value: function getAllUsers() {
      return this.find({}).exec();
    }
  }, {
    key: "insertUser",
    value: function insertUser(userName, email) {
      var user = this({
        userName: userName,
        email: email
      });
      return user.save();
    }
  }]);
  return User;
}();

userSchema.loadClass(User);

var _default = _mongoose["default"].model('User', userSchema);

exports["default"] = _default;