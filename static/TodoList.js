"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TasksList = _interopRequireDefault(require("./TasksList"));

var _NewTask = _interopRequireDefault(require("./NewTask"));

var _jsxFileName = "/Users/nathalie/Documents/flask-react/src/TodoList.tsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TodoList = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoList, _React$Component);

  var _super = _createSuper(TodoList);

  function TodoList(props) {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this, props);
    _this.state = {
      todoList: [],
      newTask: ''
    };
    _this.addNewTask = _this.addNewTask.bind(_assertThisInitialized(_this));
    _this.updateNewTask = _this.updateNewTask.bind(_assertThisInitialized(_this));
    _this.removeTask = _this.removeTask.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TodoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://127.0.0.1:5000/list').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            todoList: _toConsumableArray(data.items)
          });
        });
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "addNewTask",
    value: function addNewTask() {
      var _this3 = this;

      fetch('http://127.0.0.1:5000/saveItem', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          'name': this.state.newTask
        })
      }).then(function (response) {
        return response.json();
      })["catch"](function (error) {
        console.error('Error:', error);
      });
      fetch('http://127.0.0.1:5000/list').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3.setState({
          todoList: _toConsumableArray(data.items),
          newTask: ''
        });
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "updateNewTask",
    value: function updateNewTask(task) {
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          newTask: task
        });
      });
    }
  }, {
    key: "removeTask",
    value: function removeTask(task) {
      var _this4 = this;

      fetch('http://127.0.0.1:5000/removeItem', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          'name': task
        })
      }).then(function (response) {
        return response.json();
      })["catch"](function (error) {
        console.error('Error:', error);
      });
      fetch('http://127.0.0.1:5000/list').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this4.setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            todoList: _toConsumableArray(data.items)
          });
        });
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement(_TasksList["default"], {
        todoList: this.state.todoList,
        handleClick: this.removeTask,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 4
        }
      }), /*#__PURE__*/_react["default"].createElement(_NewTask["default"], {
        task: this.state.newTask,
        handleClick: this.addNewTask,
        handleChange: this.updateNewTask,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }
      }));
    }
  }]);

  return TodoList;
}(_react["default"].Component);

exports["default"] = TodoList;