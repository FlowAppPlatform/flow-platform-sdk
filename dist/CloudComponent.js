(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CloudComponent", [], factory);
	else if(typeof exports === 'object')
		exports["CloudComponent"] = factory();
	else
		root["CloudComponent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _Component = __webpack_require__(1);

	var _Component2 = _interopRequireDefault(_Component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	try {
	    if (window) {
	        if (navigator.product == 'ReactNative') {
	            // for react native turn node and native flags to true
	            _Component2.default._isNode = true;
	            _Component2.default._isNative = true;
	        } else {
	            // if window is found then node is false
	            _Component2.default._isNode = false;
	        }
	    }
	} catch (e) {
	    // if window is not found , then turn node flag to true
	    _Component2.default._isNode = true;
	} ///<reference path="./cloudboost.d.ts" />

	__webpack_require__(1);

	try {
	    window.Component = _Component2.default;
	} catch (e) {}
	module.exports = _Component2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Component
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _util = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	    function Component() {
	        _classCallCheck(this, Component);

	        //set initial properties
	        this._description = '';
	        this._inPorts = [];
	        this._outPorts = [];
	        this._process = null;
	    }

	    _createClass(Component, [{
	        key: 'addInPort',
	        value: function addInPort(name, obj) {

	            if (!name) throw "Inport name is required";
	            if (!(0, _util.validate)(name, 'string')) throw "Port name should be of type string.";

	            //TODO: validate datatype

	            this.inPorts.push({
	                name: name,
	                metadata: obj || {}
	            });
	        }
	    }, {
	        key: 'addOutPort',
	        value: function addOutPort(name) {

	            if (!name) {
	                throw "Inport name is required";
	            }

	            if (!(0, _util.validate)(name, 'string')) {
	                throw "Port name should be of type string.";
	            }

	            //TODO: validate datatype

	            this.inPorts.push({
	                name: name,
	                metadata: obj || {}
	            });
	        }
	    }, {
	        key: 'process',
	        value: function process(data) {

	            if (!(0, _util.validate)(data, 'function')) {
	                throw 'Process can only accept function as a parameter.';
	            }
	        }
	    }, {
	        key: 'description',
	        get: function get() {
	            return this.description;
	        },
	        set: function set(description) {
	            this._description = description;
	        }
	    }, {
	        key: 'inPorts',
	        get: function get() {
	            return this._inPorts;
	        }
	    }, {
	        key: 'outPorts',
	        get: function get() {
	            return this.outPorts;
	        }
	    }, {
	        key: 'process',
	        get: function get() {
	            return this._process;
	        }
	    }]);

	    return Component;
	}();

	exports.default = Component;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _exports = module.exports = {};

	_exports.validate = function (value, type) {
		if (value === undefined || value === null || value === '') return false;
		if (type && type != 'any') {
			if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != type) return false;
		}
		return true;
	};

/***/ }
/******/ ])
});
;