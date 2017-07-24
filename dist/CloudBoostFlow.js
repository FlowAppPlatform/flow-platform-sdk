(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CloudBoostFlow", [], factory);
	else if(typeof exports === 'object')
		exports["CloudBoostFlow"] = factory();
	else
		root["CloudBoostFlow"] = factory();
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

	/* WEBPACK VAR INJECTION */(function(process) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(2);

	var _InPort = __webpack_require__(3);

	var _InPort2 = _interopRequireDefault(_InPort);

	var _OutPort = __webpack_require__(4);

	var _OutPort2 = _interopRequireDefault(_OutPort);

	var _ProcessInput = __webpack_require__(5);

	var _ProcessInput2 = _interopRequireDefault(_ProcessInput);

	var _ProcessOutput = __webpack_require__(6);

	var _ProcessOutput2 = _interopRequireDefault(_ProcessOutput);

	var _events = __webpack_require__(7);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	    function Component(socket, id) {
	        _classCallCheck(this, Component);

	        //set initial properties
	        this._description = '';
	        this._inPorts = {};
	        this._outPorts = {};
	        this._handle = null;
	        if (!socket) socket = new _events2.default();
	        this._socket = this.attachSocket(socket, id);
	        if (!id) id = (0, _util.generateId)();
	        this._id = id;

	        //other properties
	        // to check if the env is node
	        this._isNode = false;
	        // to check if env is native ( react native , native script etc. )
	        this._isNative = false;
	        if (typeof process !== "undefined" && process.versions && process.versions.node) {
	            this._isNode = true;
	        } else {
	            this._isNode = false;
	        }
	        try {
	            if (window) {
	                if (navigator.product == 'ReactNative') {
	                    // for react native turn node and native flags to true
	                    this._isNode = true;
	                    this._isNative = true;
	                } else {
	                    // if window is found then node is false
	                    this._isNode = false;
	                }
	            }
	        } catch (e) {
	            // if window is not found , then turn node flag to true
	            this._isNode = true;
	        }
	    }

	    //add in port


	    _createClass(Component, [{
	        key: 'addInPort',
	        value: function addInPort(name, options) {

	            if (!name) {
	                throw "Inport name is required";
	            }
	            if (!(0, _util.validate)(name, 'string')) {
	                throw "Port name should be of type string.";
	            }

	            if (!options) options = {};
	            this.inPorts[name] = new _InPort2.default(name, this._socket, this._id, options);
	            this._input = new _ProcessInput2.default(this.inPorts);
	        }

	        //add out port

	    }, {
	        key: 'addOutPort',
	        value: function addOutPort(name, options) {

	            if (!name) {
	                throw "Outport name is required";
	            }

	            if (!(0, _util.validate)(name, 'string')) {
	                throw "Port name should be of type string.";
	            }

	            if (!options) options = {};

	            this.outPorts[name] = new _OutPort2.default(name, this._socket, this._id, options);
	            this._output = new _ProcessOutput2.default(this.outPorts, this.socket, this.id);
	        }
	    }, {
	        key: 'attachSocket',
	        value: function attachSocket(socket, id) {
	            var thisObj = this;
	            socket.on('execute-' + id, function (data) {
	                thisObj.execute(data);
	            });
	            return socket;
	        }

	        //run process handler

	    }, {
	        key: 'execute',
	        value: function execute(socket) {
	            var input = new _ProcessInput2.default(this._inPorts);
	            var output = new _ProcessOutput2.default(this._outPorts, this.socket, this._id);
	            this._handle(input, output);
	        }

	        //save process handler

	    }, {
	        key: 'process',
	        value: function process(handle) {

	            if (!(0, _util.validate)(handle, 'function')) {
	                throw 'Process handler must be a function.';
	            }
	            if (!this.inPorts) {
	                throw new Error("Component ports must be defined before process function");
	            }
	            this._handle = handle;
	        }

	        //getters and setters

	    }, {
	        key: 'description',
	        get: function get() {
	            return this._description;
	        },
	        set: function set(description) {
	            this._description = description;
	        }
	    }, {
	        key: 'input',
	        get: function get() {
	            return this._input;
	        },
	        set: function set(value) {
	            this._input = value;
	        }
	    }, {
	        key: 'output',
	        get: function get() {
	            return this._output;
	        },
	        set: function set(value) {
	            this._output = value;
	        }
	    }, {
	        key: 'inPorts',
	        get: function get() {
	            return this._inPorts;
	        }
	    }, {
	        key: 'outPorts',
	        get: function get() {
	            return this._outPorts;
	        }
	    }, {
	        key: 'socket',
	        get: function get() {
	            return this._socket;
	        },
	        set: function set(socket) {
	            this._socket = this.attachSocket(socket);
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }, {
	        key: 'handle',
	        get: function get() {
	            return this._handle;
	        }
	    }]);

	    return Component;
	}();

	try {
	    window.Flow = Component;
	} catch (e) {}
	module.exports = Component;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
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

	_exports.generateId = function () {
		var id = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 8; i++) {
			id = id + possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return id;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var InPort = function () {
	    function InPort(name, socket, id, options) {
	        _classCallCheck(this, InPort);

	        //set initial properties

	        this._description = options.description || '';
	        this._name = name;

	        //validate options.datatype

	        //validate initial data
	        if ((0, _util.validate)(options.data, options.datatype)) {
	            this._data = options.data || null;
	        } else {
	            this._data = null;
	        }

	        this._required = options.required || false;

	        this._datatype = options.datatype || 'string';

	        this._defaultValue = options.defaultValue || null;

	        //attach socket
	        this.attachSocket(socket, id);

	        this._id = (0, _util.generateId)();
	    }

	    //clear port data


	    _createClass(InPort, [{
	        key: 'clear',
	        value: function clear() {
	            this._data = null;
	        }

	        //handle attach socket

	    }, {
	        key: 'attachSocket',
	        value: function attachSocket(socket, id) {
	            var thisObj = this;
	            socket.on('data-inport-' + id + '-' + thisObj._name, function (data) {
	                thisObj._data = data;
	            });

	            this._socket = socket;
	        }

	        //getters and setters

	    }, {
	        key: 'description',
	        get: function get() {
	            return this._description;
	        },
	        set: function set(value) {
	            this._description = value;
	        }
	    }, {
	        key: 'defaultValue',
	        get: function get() {
	            return this._defaultValue;
	        },
	        set: function set(value) {
	            this._defaultValue = value;
	        }
	    }, {
	        key: 'required',
	        get: function get() {
	            return this._required;
	        },
	        set: function set(value) {
	            this._required = value;
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        },
	        set: function set(value) {
	            this._name = value;
	        }
	    }, {
	        key: 'data',
	        get: function get() {
	            return this._data;
	        },
	        set: function set(value) {

	            //validate data
	            if ((0, _util.validate)(value, this._datatype)) {
	                this._data = value;
	            } else throw "data must be of type " + this._datatype;
	        }
	    }, {
	        key: 'datatype',
	        get: function get() {
	            return this._datatype;
	        },
	        set: function set(value) {
	            if (!value) throw 'datatype required';
	            this._datatype = value;
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }, {
	        key: 'socket',
	        get: function get() {
	            return this._socket;
	        }
	    }]);

	    return InPort;
	}();

	module.exports = InPort;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OutPort = function () {
	    function OutPort(name, socket, id, options) {
	        _classCallCheck(this, OutPort);

	        //set initial properties

	        this._description = options.description || '';
	        this._name = name;
	        this._data = null;
	        this._required = options.required || false;

	        //TODO: add datatype

	        // if (!options.datatype) {
	        //     throw "Datatype not found in port options"
	        // } else {
	        //     this._datatype = options.datatype;
	        // }

	        //attach socket
	        this.attachSocket(socket, id);

	        this._id = (0, _util.generateId)();
	    }

	    //clear port data


	    _createClass(OutPort, [{
	        key: 'clear',
	        value: function clear() {
	            this._data = null;
	        }

	        //handle attach socket

	    }, {
	        key: 'attachSocket',
	        value: function attachSocket(socket, id) {
	            var thisObj = this;
	            socket.on('data-outport-' + id + '-' + thisObj._name, function (data) {
	                thisObj._data = data;
	            });

	            this._socket = socket;
	        }

	        //setter and getters

	    }, {
	        key: 'description',
	        get: function get() {
	            return this._description;
	        },
	        set: function set(value) {
	            this._description = value;
	        }
	    }, {
	        key: 'required',
	        get: function get() {
	            return this._required;
	        },
	        set: function set(value) {
	            this._required = value;
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        },
	        set: function set(value) {
	            this._name = value;
	        }
	    }, {
	        key: 'data',
	        get: function get() {
	            return this._data;
	        },
	        set: function set(value) {
	            //validate data
	            if ((0, _util.validate)(value, this._datatype)) {
	                this._data = value;
	            } else throw "data must be of type " + this._datatype;
	        }
	    }, {
	        key: 'datatype',
	        get: function get() {
	            return this._datatype;
	        },
	        set: function set(value) {
	            this._datatype = value;
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }, {
	        key: 'socket',
	        get: function get() {
	            return this._socket;
	        }
	    }]);

	    return OutPort;
	}();

	module.exports = OutPort;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProcessInput = function () {
	    function ProcessInput(ports) {
	        _classCallCheck(this, ProcessInput);

	        //set initial properties

	        this._ports = ports;
	    }

	    //checks data at port`name`


	    _createClass(ProcessInput, [{
	        key: 'hasData',
	        value: function hasData(name) {
	            var port = this._ports[name];
	            if (port.data || port.defaultValue) {
	                return true;
	            }
	            return false;
	        }

	        //return data at port `name`

	    }, {
	        key: 'getData',
	        value: function getData(name) {
	            var port = this._ports[name];
	            var data = port.data || port.defaultValue;
	            return data;
	        }

	        //getters and setters

	    }, {
	        key: 'ports',
	        get: function get() {
	            return this._ports;
	        }
	    }]);

	    return ProcessInput;
	}();

	module.exports = ProcessInput;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProcessOutput = function () {
	    function ProcessOutput(ports, socket, id) {
	        _classCallCheck(this, ProcessOutput);

	        //set initial properties

	        this._ports = ports;
	        this._receivingSocket = socket;
	        this._id = id;
	    }

	    //done handlers


	    _createClass(ProcessOutput, [{
	        key: 'done',
	        value: function done(err) {
	            if (err) {
	                throw err;
	            } else {
	                if (this._receivingSocket) {
	                    this._receivingSocket.emit('result-' + this._id, this._ports);
	                }
	            }
	        }

	        //send data at specific port

	    }, {
	        key: 'send',
	        value: function send(obj) {
	            for (key in obj) {
	                //validate if key(port name) exists in _ports;
	                //send data of obj.key
	                var port = this._ports[key];
	                if (port) {
	                    var socket = port.socket;
	                    port.data = obj[key];
	                    socket.emit('data-outport-' + this._id + '-' + port.name, obj[key]);
	                } else {
	                    throw 'Outport : ' + key + ' not found';
	                }
	            }
	        }

	        //getters and setters

	    }, {
	        key: 'ports',
	        get: function get() {
	            return this._ports;
	        }
	    }]);

	    return ProcessOutput;
	}();

	module.exports = ProcessOutput;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }
/******/ ])
});
;