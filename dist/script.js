/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Model */ "./src/js/Model.js");
/* harmony import */ var _js_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/View */ "./src/js/View.js");
/* harmony import */ var _js_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Controller */ "./src/js/Controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    this.model = new _js_Model__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.view = new _js_View__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.controller = new _js_Controller__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  _createClass(Keyboard, [{
    key: "init",
    value: function init(container, textarea, keyboard) {
      this.view.init(this.model, textarea, keyboard);
      this.model.init(this.view);
      this.controller.init(this.model, container);
    }
  }]);

  return Keyboard;
}();

window.onload = function () {
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.prepend(wrapper);
  wrapper.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard</h1>');
  var textarea = document.createElement('textarea');
  textarea.classList.add('text-field');
  wrapper.append(textarea);
  var keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard', 'keyboard_wrapper');
  wrapper.append(keyboardWrapper);
  var extraInfo = document.createElement('p');
  extraInfo.innerText = 'Change language - left Ctrl + Shift. Windows';
  wrapper.append(extraInfo);
  new Keyboard().init(wrapper, textarea, keyboardWrapper);
};

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.model = null;
    this.container = null;
    this.isShiftLeftOn = false;
    this.isShiftRightOn = false;
    this.isAltLeftOn = false;
    this.isAltRightOn = false;
    this.isControlLeftOn = false;
    this.isControlRightOn = false;
  }

  _createClass(Controller, [{
    key: "init",
    value: function init(model, container) {
      this.model = model;
      this.container = container;
      this.addListeners();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        return _this.keyAction(e);
      });
      document.addEventListener('keyup', function (e) {
        return _this.keyAction(e);
      });
      document.addEventListener('mousedown', function (e) {
        return _this.mouseAction(e);
      });
      document.addEventListener('mouseup', function (e) {
        return _this.mouseAction(e);
      });
    }
  }, {
    key: "keyAction",
    value: function keyAction(e) {
      var _this2 = this;

      e.preventDefault();
      var keys = this.container.querySelectorAll('.key');
      keys.forEach(function (key) {
        var code = key.getAttribute('data-code');

        if (code === e.code) {
          if (e.type === 'keydown') {
            _this2.keyDownAction(key);
          } else {
            _this2.keyUpAction(key);
          }
        }
      });
    }
  }, {
    key: "mouseAction",
    value: function mouseAction(e) {
      var _this3 = this;

      if (e.target.classList.contains('key')) {
        if (e.type === 'mousedown') {
          this.keyDownAction(e.target, e);
        }
      }

      if (e.type === 'mouseup') {
        var keys = this.container.querySelectorAll('.key');
        keys.forEach(function (key) {
          _this3.keyUpAction(key);
        });
      }

      if (e.target.classList.contains('text-field')) {
        var cursorPosition = e.target.selectionStart;
        this.model.moveCursore(cursorPosition);
      }
    }
  }, {
    key: "keyDownAction",
    value: function keyDownAction(key) {
      if (key.dataset.code !== 'CapsLock') {
        key.classList.add('active');
      } else {
        key.classList.toggle('active');
      }

      if (!key.classList.contains('special_key')) {
        this.model.addCharacterToLine(key.dataset.code);
      } else {
        this.specialKeyDownAction(key);
      }
    }
  }, {
    key: "keyUpAction",
    value: function keyUpAction(key) {
      if (key.dataset.code !== 'CapsLock') {
        key.classList.remove('active');
      }

      if (key.classList.contains('special_key')) {
        this.specialKeyUpAction(key);
      }
    }
  }, {
    key: "specialKeyDownAction",
    value: function specialKeyDownAction(key) {
      switch (key.dataset.code) {
        case 'Backspace':
          this.model.removeCharacter('before');
          break;

        case 'Tab':
          this.model.addTabToLine();
          break;

        case 'Delete':
          this.model.removeCharacter('after');
          break;

        case 'CapsLock':
          this.model.toggleCapsLock();
          break;

        case 'Enter':
          this.model.goToNewLine();
          break;

        case 'ShiftLeft':
          this.isShiftLeftOn = true;
          this.changeLanguageCheck();
          this.model.toggleUpperCase(true);
          break;

        case 'ShiftRight':
          this.model.toggleUpperCase(true);
          this.isShiftRightOn = true;
          break;

        case 'ControlLeft':
          this.isControlLeftOn = true;
          this.changeLanguageCheck();
          break;

        case 'ControlRight':
          this.isControlRightOn = true;
          break;

        case 'AltLeft':
          this.isAltLeftOn = true;
          break;

        case 'AltRight':
          this.isAltLeftOn = true;
          break;

        case 'Space':
          this.model.addSpaceToLine();
          break;

        case 'ArrowLeft':
          this.model.moveCursore('left');
          break;

        case 'ArrowRight':
          this.model.moveCursore('right');
          break;

        case 'ArrowUp':
          this.model.moveCursore('up');
          break;

        case 'ArrowDown':
          this.model.moveCursore('down');
          break;

        default:
          return -1;
      }

      return -1;
    }
  }, {
    key: "specialKeyUpAction",
    value: function specialKeyUpAction(key) {
      switch (key.dataset.code) {
        case 'ShiftLeft':
          this.isShiftLeftOn = false;
          this.model.toggleUpperCase(false);
          break;

        case 'ShiftRight':
          this.isShiftRightOn = false;
          this.model.toggleUpperCase(false);
          break;

        case 'ControlLeft':
          this.isControlLeftOn = false;
          break;

        case 'ControlRight':
          this.isControlRightOn = false;
          break;

        case 'AltLeft':
          this.isAltLeftOn = false;
          break;

        case 'AltRight':
          this.isAltLeftOn = false;
          break;

        default:
          return -1;
      }

      return -1;
    }
  }, {
    key: "changeLanguageCheck",
    value: function changeLanguageCheck() {
      if (this.isShiftLeftOn && this.isControlLeftOn) {
        this.model.toggleLanguage();
      }
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/js/Model.js":
/*!*************************!*\
  !*** ./src/js/Model.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var specialKeysJSON = '{"Backspace":{"id":13,"value":"backspace","width":"double_quarter"},"Tab":{"id":14,"value":"tab","width":"one_quarter"},"Delete":{"id":28,"value":"del","width":"plus_quarter"},"CapsLock":{"id":29,"value":"caps-lock","width":"one_half"},"Enter":{"id":41,"value":"enter","width":"double_quarter"},"ShiftLeft":{"id":42,"value":"shift","width":"double_quarter"},"ShiftRight":{"id":53,"value":"shift","width":"double_half"},"ControlLeft":{"id":54,"value":"ctrl","width":"one"},"MetaLeft":{"id":55,"value":"win","width":"one"},"AltLeft":{"id":56,"value":"alt","width":"one"},"Space":{"id":57,"value":"space","width":"seven"},"AltRight":{"id":58,"value":"alt","width":"one"},"ControlRight":{"id":59,"value":"ctrl","width":"plus_quarter"},"ArrowLeft":{"id":60,"value":"←","width":"one"},"ArrowUp":{"id":61,"value":"↑","width":"one_quarter_slim"},"ArrowDown":{"id":62,"value":"↓","width":"one_quarter_slim"},"ArrowRight":{"id":63,"value":"→","width":"one"}}';
var characterKeysJSON = '{"Backquote":{"id":0,"value":{"en":["`","~"],"ru":["ё","Ё"]}},"Digit1":{"id":1,"value":{"en":["1","!"],"ru":["1","!"]}},"Digit2":{"id":2,"value":{"en":["2","@"],"ru":["2","\\""]}},"Digit3":{"id":3,"value":{"en":["3","#"],"ru":["3","№"]}},"Digit4":{"id":4,"value":{"en":["4","$"],"ru":["4",";"]}},"Digit5":{"id":5,"value":{"en":["5","%"],"ru":["5","%"]}},"Digit6":{"id":6,"value":{"en":["6","^"],"ru":["6",":"]}},"Digit7":{"id":7,"value":{"en":["7","&"],"ru":["7","?"]}},"Digit8":{"id":8,"value":{"en":["8","*"],"ru":["8","*"]}},"Digit9":{"id":9,"value":{"en":["9","("],"ru":["9","("]}},"Digit0":{"id":10,"value":{"en":["0",")"],"ru":["0",")"]}},"Minus":{"id":11,"value":{"en":["-","_"],"ru":["-","_"]}},"Equal":{"id":12,"value":{"en":["=","+"],"ru":["=","+"]}},"KeyQ":{"id":15,"value":{"en":["q","Q"],"ru":["й","Й"]}},"KeyW":{"id":16,"value":{"en":["w","W"],"ru":["ц","Ц"]}},"KeyE":{"id":17,"value":{"en":["e","E"],"ru":["у","У"]}},"KeyR":{"id":18,"value":{"en":["r","R"],"ru":["к","К"]}},"KeyT":{"id":19,"value":{"en":["t","T"],"ru":["е","Е"]}},"KeyY":{"id":20,"value":{"en":["y","Y"],"ru":["н","Н"]}},"KeyU":{"id":21,"value":{"en":["u","U"],"ru":["г","Г"]}},"KeyI":{"id":22,"value":{"en":["i","I"],"ru":["ш","Ш"]}},"KeyO":{"id":23,"value":{"en":["o","O"],"ru":["щ","Щ"]}},"KeyP":{"id":24,"value":{"en":["p","P"],"ru":["з","З"]}},"BracketLeft":{"id":25,"value":{"en":["[","{"],"ru":["х","Х"]}},"BracketRight":{"id":26,"value":{"en":["]","}"],"ru":["ъ","Ъ"]}},"Backslash":{"id":27,"value":{"en":["\\\\","|"],"ru":["\\\\","/"]}},"KeyA":{"id":30,"value":{"en":["a","A"],"ru":["ф","Ф"]}},"KeyS":{"id":31,"value":{"en":["s","S"],"ru":["ы","Ы"]}},"KeyD":{"id":32,"value":{"en":["d","D"],"ru":["в","В"]}},"KeyF":{"id":33,"value":{"en":["f","F"],"ru":["а","А"]}},"KeyG":{"id":34,"value":{"en":["g","G"],"ru":["п","П"]}},"KeyH":{"id":35,"value":{"en":["h","H"],"ru":["р","Р"]}},"KeyJ":{"id":36,"value":{"en":["j","J"],"ru":["о","О"]}},"KeyK":{"id":37,"value":{"en":["k","K"],"ru":["л","Л"]}},"KeyL":{"id":38,"value":{"en":["l","L"],"ru":["д","Д"]}},"Semicolon":{"id":39,"value":{"en":[";",":"],"ru":["ж","Ж"]}},"Quote":{"id":40,"value":{"en":["\'","\\""],"ru":["э","Э"]}},"KeyZ":{"id":43,"value":{"en":["z","Z"],"ru":["я","Я"]}},"KeyX":{"id":44,"value":{"en":["x","X"],"ru":["ч","Ч"]}},"KeyC":{"id":45,"value":{"en":["c","C"],"ru":["с","С"]}},"KeyV":{"id":46,"value":{"en":["v","V"],"ru":["м","М"]}},"KeyB":{"id":47,"value":{"en":["b","B"],"ru":["и","И"]}},"KeyN":{"id":48,"value":{"en":["n","N"],"ru":["т","Т"]}},"KeyM":{"id":49,"value":{"en":["m","M"],"ru":["ь","Ь"]}},"Comma":{"id":50,"value":{"en":[",","<"],"ru":["б","Б"]}},"Period":{"id":51,"value":{"en":[".",">"],"ru":["ю","Ю"]}},"Slash":{"id":52,"value":{"en":["/","?"],"ru":[".",","]}}}';

var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    this.language = null;
    this.view = null;
    this.specialKeys = null;
    this.characterKeys = null;
    this.isCapsLockOn = false;
    this.isUpperCase = false;
    this.numberOfKeys = 64;
    this.line = '';
    this.cursorPosition = 0;
  }

  _createClass(Model, [{
    key: "init",
    value: function init(view) {
      this.view = view;
      this.language = localStorage.language || 'en';
      this.specialKeys = JSON.parse(specialKeysJSON);
      this.characterKeys = JSON.parse(characterKeysJSON);
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      this.view.drawKeyboard(this.numberOfKeys, this.specialKeys);
      this.updateCharacterKeys();
    }
  }, {
    key: "updateCharacterKeys",
    value: function updateCharacterKeys() {
      this.view.updateCharacters(this.characterKeys, this.language, this.isUpperCase, this.isCapsLockOn);
    }
  }, {
    key: "changeLine",
    value: function changeLine(_char) {
      var startLine = this.line.slice(0, this.cursorPosition);
      var endLine = this.line.slice(this.cursorPosition, this.line.length);
      this.line = startLine + _char + endLine;
      this.cursorPosition += _char.length;
      this.view.updateText();
    }
  }, {
    key: "addCharacterToLine",
    value: function addCharacterToLine(code) {
      var _char2 = this.characterKeys[code].value[this.language][this.isUpperCase ? 1 : 0];

      if (this.isCapsLockOn) {
        _char2 = _char2.toUpperCase();
      }

      this.changeLine(_char2);
    }
  }, {
    key: "addTabToLine",
    value: function addTabToLine() {
      var tab = '\t';
      this.changeLine(tab);
    }
  }, {
    key: "addSpaceToLine",
    value: function addSpaceToLine() {
      var space = ' ';
      this.changeLine(space);
    }
  }, {
    key: "goToNewLine",
    value: function goToNewLine() {
      var newLine = '\n';
      this.changeLine(newLine);
    }
  }, {
    key: "removeCharacter",
    value: function removeCharacter(position) {
      var startLine = '';
      var endLine = '';

      if (position === 'before') {
        startLine = this.line.slice(0, this.cursorPosition - 1);
        endLine = this.line.slice(this.cursorPosition, this.line.length);
        this.cursorPosition -= 1;
      } else {
        startLine = this.line.slice(0, this.cursorPosition);
        endLine = this.line.slice(this.cursorPosition + 1, this.line.length);
      }

      this.line = startLine + endLine;
      this.view.updateText();
    }
  }, {
    key: "toggleCapsLock",
    value: function toggleCapsLock() {
      this.isCapsLockOn = !this.isCapsLockOn;
      this.updateCharacterKeys();
    }
  }, {
    key: "toggleUpperCase",
    value: function toggleUpperCase(isUpperCase) {
      this.isUpperCase = isUpperCase;
      this.updateCharacterKeys();
    }
  }, {
    key: "toggleLanguage",
    value: function toggleLanguage() {
      this.language = this.language === 'en' ? 'ru' : 'en';
      localStorage.language = this.language;
      this.updateCharacterKeys();
    }
  }, {
    key: "moveCursore",
    value: function moveCursore(direction) {
      if (typeof direction === 'number') {
        this.cursorPosition = direction;
      } else {
        switch (direction) {
          case 'left':
            if (this.cursorPosition > 0) {
              this.cursorPosition -= 1;
            }

            break;

          case 'right':
            if (this.cursorPosition < this.line.length) {
              this.cursorPosition += 1;
            }

            break;

          case 'up':
            this.cursorPosition -= 88;

            if (this.cursorPosition - 88 < 0) {
              this.cursorPosition = 0;
            }

            break;

          default:
            this.cursorPosition += 88;

            if (this.cursorPosition > this.line.length) {
              this.cursorPosition = this.line.length;
            }

        }
      }

      this.view.updateText();
    }
  }]);

  return Model;
}();



/***/ }),

/***/ "./src/js/View.js":
/*!************************!*\
  !*** ./src/js/View.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

    this.model = null;
    this.container = null;
  }

  _createClass(View, [{
    key: "init",
    value: function init(model, textarea, container) {
      this.model = model;
      this.textarea = textarea;
      this.container = container;
    }
  }, {
    key: "drawKeyboard",
    value: function drawKeyboard(numberOfKeys, specialKeys) {
      var _this = this;

      var arrowsUpDown = document.createElement('div');
      arrowsUpDown.classList.add('up-down-arrows'); // creating keys

      var _loop = function _loop(i) {
        var key = document.createElement('div');
        key.classList.add('key'); // set special-keys attributes

        Object.keys(specialKeys).forEach(function (specialKey) {
          if (specialKeys[specialKey].id === i) {
            key.classList.add('special_key', "special_key-".concat(specialKeys[specialKey].width));
            key.setAttribute('data-code', specialKey);
            key.innerText = specialKeys[specialKey].value;
          }
        }); // creating block for arrowUp and arrowDown keys

        if (key.getAttribute('data-code') === 'ArrowUp') {
          arrowsUpDown.append(key);
        } else if (key.getAttribute('data-code') === 'ArrowDown') {
          arrowsUpDown.append(key);

          _this.container.append(arrowsUpDown);
        } else {
          _this.container.append(key);
        }
      };

      for (var i = 0; i < numberOfKeys; i += 1) {
        _loop(i);
      }
    }
  }, {
    key: "updateCharacters",
    value: function updateCharacters(characterKeys, language, isUpperCase, isCapsLock) {
      var keys = this.container.querySelectorAll('.key') || null;
      Object.keys(characterKeys).forEach(function (code) {
        keys[characterKeys[code].id].setAttribute('data-code', code);
        var _char = characterKeys[code].value[language][isUpperCase ? 1 : 0];

        if (isCapsLock) {
          _char = _char.toUpperCase();
        }

        keys[characterKeys[code].id].innerText = _char;
      });
    }
  }, {
    key: "updateText",
    value: function updateText() {
      var _this2 = this;

      this.textarea.value = this.model.line;
      this.textarea.selectionStart = this.model.cursorPosition;
      this.textarea.selectionEnd = this.model.cursorPosition;
      setTimeout(function () {
        return _this2.textarea.focus();
      }, 10);
    }
  }]);

  return View;
}();



/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map