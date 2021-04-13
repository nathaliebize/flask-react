"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/nathalie/Documents/flask-react/src/typescript.tsx";

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

var NewTask = /*#__PURE__*/function (_React$Component) {
  _inherits(NewTask, _React$Component);

  var _super = _createSuper(NewTask);

  function NewTask() {
    _classCallCheck(this, NewTask);

    return _super.apply(this, arguments);
  }

  _createClass(NewTask, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 3,
          columnNumber: 10
        }
      }, "New Task");
    }
  }]);

  return NewTask;
}(React.Component);

var TodoList = /*#__PURE__*/function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  var _super2 = _createSuper(TodoList);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    return _super2.call(this, props);
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var items = this.props.todoList.map(function (item, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 12
          }
        }, item);
      });
      return /*#__PURE__*/React.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 4
        }
      }, /*#__PURE__*/React.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }
      }, "List"), /*#__PURE__*/React.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }
      }, items));
    }
  }]);

  return TodoList;
}(React.Component);

var TodoApp = /*#__PURE__*/function (_React$Component3) {
  _inherits(TodoApp, _React$Component3);

  var _super3 = _createSuper(TodoApp);

  function TodoApp(props) {
    var _this2;

    _classCallCheck(this, TodoApp);

    _this2 = _super3.call(this, props);
    _this2.state = {
      todoList: _this2.props.todoList,
      newTask: ''
    };
    return _this2;
  }

  _createClass(TodoApp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, /*#__PURE__*/React.createElement(TodoList, {
        todoList: this.state.todoList,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 4
        }
      }), /*#__PURE__*/React.createElement(NewTask, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }
      }));
    }
  }]);

  return TodoApp;
}(React.Component);

var todoListDB = ['Vaccum', 'Moop', 'Dishes'];
ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, {
  todoList: todoListDB,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 2
  }
}), document.getElementById('main'));