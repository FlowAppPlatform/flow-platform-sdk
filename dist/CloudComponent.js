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

	var _CBFlow = __webpack_require__(1);

	var _CBFlow2 = _interopRequireDefault(_CBFlow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	try {
	    if (window) {
	        if (navigator.product == 'ReactNative') {
	            // for react native turn node and native flags to true
	            _CBFlow2.default._isNode = true;
	            _CBFlow2.default._isNative = true;
	        } else {
	            // if window is found then node is false
	            _CBFlow2.default._isNode = false;
	        }
	    }
	} catch (e) {
	    // if window is not found , then turn node flag to true
	    _CBFlow2.default._isNode = true;
	}

	//import all js files
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);

	try {
	    window.CBFlow = _CBFlow2.default;
	} catch (e) {}
	module.exports = _CBFlow2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CloudBoostFlow = function CloudBoostFlow() {
		_classCallCheck(this, CloudBoostFlow);

		// to check if the env is node
		this._isNode = false;
		// to check if env is native ( react native , native script etc. )
		this._isNative = false;
		if (typeof process !== "undefined" && process.versions && process.versions.node) {
			this._isNode = true;
		} else {
			this._isNode = false;
		}
	};

	var CBFlow = new CloudBoostFlow();

	exports.default = CBFlow;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CBFlow = __webpack_require__(1);

	var _CBFlow2 = _interopRequireDefault(_CBFlow);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	    function Component() {
	        _classCallCheck(this, Component);

	        //set initial properties
	        this._description = '';
	        this._inPorts = {};
	        this._outPorts = {};
	        this._handle = null;
	    }

	    //add in port


	    _createClass(Component, [{
	        key: 'addInPort',
	        value: function addInPort(name, options) {

	            if (!options) {
	                throw "options parameter is required";
	            }

	            if (!name) {
	                throw "Inport name is required";
	            }
	            if (!(0, _util.validate)(name, 'string')) {
	                throw "Port name should be of type string.";
	            }

	            this.inPorts[name] = new _CBFlow2.default.InPort(name, options);
	        }

	        //add out port

	    }, {
	        key: 'addOutPort',
	        value: function addOutPort(name, options) {

	            if (!options) {
	                throw "options parameter is required";
	            }

	            if (!name) {
	                throw "Inport name is required";
	            }

	            if (!(0, _util.validate)(name, 'string')) {
	                throw "Port name should be of type string.";
	            }

	            this.outPorts[name] = new _CBFlow2.default.OutPort(name, options);
	        }

	        //run process handler

	    }, {
	        key: 'execute',
	        value: function execute() {
	            this._handle(new _CBFlow2.default.ProcessInput(this._inPorts), new _CBFlow2.default.ProcessOutput(this._outPorts));
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
	        key: 'inPorts',
	        get: function get() {
	            return this._inPorts;
	        }
	    }, {
	        key: 'outPorts',
	        get: function get() {
	            return this._outPorts;
	        }
	    }]);

	    return Component;
	}();

	_CBFlow2.default.Component = Component;
	exports.default = Component;

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CBFlow = __webpack_require__(1);

	var _CBFlow2 = _interopRequireDefault(_CBFlow);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	            if (port.data) {
	                return true;
	            }
	            return false;
	        }

	        //return data at port `name`

	    }, {
	        key: 'getData',
	        value: function getData(name) {
	            var port = this._ports[name];
	            return port.data;
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

	_CBFlow2.default.ProcessInput = ProcessInput;
	exports.default = ProcessInput;

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CBFlow = __webpack_require__(1);

	var _CBFlow2 = _interopRequireDefault(_CBFlow);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProcessOutput = function () {
	    function ProcessOutput(ports) {
	        _classCallCheck(this, ProcessOutput);

	        //set initial properties

	        this._ports = ports;
	    }

	    //done handlers


	    _createClass(ProcessOutput, [{
	        key: 'done',
	        value: function done(err) {
	            if (err) {
	                console.log('errrrr');
	                throw err;
	            } else {
	                //finished processing
	                console.log('Processing finished');
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
	                var socket = port.socket;
	                console.log('sas', key);
	                socket.emit('data', obj[key]);
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

	_CBFlow2.default.ProcessOutput = ProcessOutput;
	exports.default = ProcessOutput;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CBFlow = __webpack_require__(1);

	var _CBFlow2 = _interopRequireDefault(_CBFlow);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var InPort = function () {
	    function InPort(name, options) {
	        _classCallCheck(this, InPort);

	        //set initial properties

	        if (!name && !(0, _util.validate)(name, 'string')) {
	            throw "Port name not found";
	        }
	        this._description = options.description || '';
	        this._name = name;

	        //validate initial data
	        if ((0, _util.validate)(options.data, options.datatype)) {
	            this._data = options.data || null;
	        } else {
	            throw "data must be of type " + options.datatype;
	        }

	        this._required = options.required || false;

	        if (!options.datatype) {
	            throw "Datatype not found in port options";
	        } else {
	            this._datatype = options.datatype;
	        }

	        this._defaultValue = options.defaultValue || null;

	        //attach socket
	        this.attachSocket(new _CBFlow2.default.Socket());

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
	        value: function attachSocket(socket) {

	            socket.on('data', function (data) {
	                // if (validate(data)) {
	                //     this._data = data;
	                // }
	                console.log('received data at inport', data);
	            });

	            socket.on('test', function (data) {
	                console.log('test data received at in port', data);
	            });

	            socket.on('connect', function (data) {
	                console.log('socket at port: ' + this._name + ' connected.');
	            });

	            socket.on('disconnect', function (data) {
	                console.log('socket at port: ' + this._name + ' disconnected.');
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

	_CBFlow2.default.InPort = InPort;
	exports.default = InPort;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CBFlow = __webpack_require__(1);

	var _CBFlow2 = _interopRequireDefault(_CBFlow);

	var _util = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OutPort = function () {
	    function OutPort(name, options) {
	        _classCallCheck(this, OutPort);

	        //set initial properties

	        if (!name && !(0, _util.validate)(name, 'string')) {
	            throw "Port name not found";
	        }

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
	        this.attachSocket(new _CBFlow2.default.Socket());

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
	        value: function attachSocket(socket) {

	            socket.on('data', function (data) {
	                // if (validate(data)) {
	                //     this._data = data;
	                // }
	                console.log('received data', data);
	            });

	            socket.on('test', function (data) {
	                console.log('test data received at out port', data);
	            });

	            socket.on('connect', function (data) {
	                console.log('socket at port: ' + this._name + ' connected.');
	            });

	            socket.on('disconnect', function (data) {
	                console.log('socket at port: ' + this._name + ' disconnected.');
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

	_CBFlow2.default.OutPort = OutPort;
	exports.default = OutPort;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CBFlow = __webpack_require__(1);

	var _CBFlow2 = _interopRequireDefault(_CBFlow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EventEmitter = __webpack_require__(11);

	var Socket = function (_EventEmitter) {
	  _inherits(Socket, _EventEmitter);

	  function Socket() {
	    _classCallCheck(this, Socket);

	    return _possibleConstructorReturn(this, (Socket.__proto__ || Object.getPrototypeOf(Socket)).apply(this, arguments));
	  }

	  return Socket;
	}(EventEmitter);

	_CBFlow2.default.Socket = Socket;
	exports.default = Socket;

/***/ },
/* 11 */
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