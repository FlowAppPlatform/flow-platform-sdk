(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cloudboost-flow", [], factory);
	else if(typeof exports === 'object')
		exports["cloudboost-flow"] = factory();
	else
		root["cloudboost-flow"] = factory();
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

	var Flow = {};
	Flow.Component = _Component2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	describe('Component Tests', function () {
	  it('Attach and run a task.', function (done) {
	    var component = new _index2.default.Component();
	    // attach a task.

	    component.attachTask(function () {
	      // do nothing.
	    });

	    component.execute();

	    done();
	  });

	  it('Do not run a task if its not attached. ', function (done) {
	    var component = new _index2.default.Component();

	    // Task is commented and not attached.
	    // component.attachTask = function(){
	    //       console.log("This is a task.");
	    // };
	    // This should throw an error.

	    try {
	      component.execute();
	      done(new Error('Component Executed without a task.'));
	    } catch (e) {
	      done();
	    }
	  });

	  it('Create a simple add component', function (done) {
	    var addComponent = new AddComponent();
	    addComponent.getVariable('Variable 1').data = 1;
	    addComponent.getVariable('Variable 2').data = 2;
	    addComponent.getPort('Result').onEmit(function () {
	      addComponent.getVariable('Variable 1');
	      if (addComponent.getPort('Result').getVariable('Variable 3').data === 3) {
	        done();
	      } else {
	        done('Failed');
	      }
	    });
	    addComponent.execute();
	  });

	  it('Connect two components together and process data.', function (done) {
	    var addComponent = new AddComponent();
	    addComponent.getVariable('Variable 1').data = 1;
	    addComponent.getVariable('Variable 2').data = 2;

	    var subComponent = new SubtractComponent();
	    subComponent.getVariable('Variable 1').data = addComponent.getPort('Result').data;
	    subComponent.getVariable('Variable 2').data = 2;

	    addComponent.getPort('Result').connectComponent(subComponent);

	    subComponent.getPort('Result').onEmit(function () {
	      if (subComponent.getPort('Result').getVariable('Variable 3').data === 2) {
	        done();
	      } else {
	        done('Failed');
	      }
	    });
	    addComponent.execute();
	  });
	});

	var AddComponent = function (_Flow$Component) {
	  _inherits(AddComponent, _Flow$Component);

	  function AddComponent() {
	    _classCallCheck(this, AddComponent);

	    // construct the component.
	    var _this = _possibleConstructorReturn(this, (AddComponent.__proto__ || Object.getPrototypeOf(AddComponent)).call(this));

	    _this.name = 'Add';

	    var var1 = new _index2.default.Variable('Variable 1', 'number');
	    var1.required = true;

	    _this.addVariable(var1);

	    var var2 = new _index2.default.Variable('Variable 2', 'number');
	    var2.required = true;

	    _this.addVariable(var2);

	    var port = new _index2.default.Port('Result');

	    var var3 = new _index2.default.Variable('Variable 3', 'number');
	    var3.required = true;

	    port.addVariable(var3);

	    _this.addPort(port);

	    _this.attachTask(function () {
	      this.getPort('Result').getVariable('Variable 3').data = this.getVariable('Variable 1').data + this.getVariable('Variable 2').data;
	      this.getPort('Result').emit();
	      this.taskComplete();
	    });
	    return _this;
	  }

	  return AddComponent;
	}(_index2.default.Component);

	var SubtractComponent = function (_Flow$Component2) {
	  _inherits(SubtractComponent, _Flow$Component2);

	  function SubtractComponent() {
	    _classCallCheck(this, SubtractComponent);

	    // construct the component.
	    var _this2 = _possibleConstructorReturn(this, (SubtractComponent.__proto__ || Object.getPrototypeOf(SubtractComponent)).call(this));

	    _this2.name = 'Subtract';

	    var var1 = new _index2.default.Variable('Variable 1', 'number');
	    var1.required = true;

	    _this2.addVariable(var1);

	    var var2 = new _index2.default.Variable('Variable 2', 'number');
	    var2.required = true;

	    _this2.addVariable(var2);

	    var port = new _index2.default.Port('Result');

	    var var3 = new _index2.default.Variable('Variable 3', 'number');
	    var3.required = true;

	    port.addVariable(var3);

	    _this2.addPort(port);

	    _this2.attachTask(function () {
	      this.getPort('Result').getVariable('Variable 3').data = this.getVariable('Variable 1').data - this.getVariable('Variable 2').data;
	      this.getPort('Result').emit();
	      this.taskComplete();
	    });
	    return _this2;
	  }

	  return SubtractComponent;
	}(_index2.default.Component);

	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _Component = __webpack_require__(3);

	var _Component2 = _interopRequireDefault(_Component);

	var _Port = __webpack_require__(7);

	var _Port2 = _interopRequireDefault(_Port);

	var _Variable = __webpack_require__(8);

	var _Variable2 = _interopRequireDefault(_Variable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flow = {};
	Flow.Component = _Component2.default;
	Flow.Port = _Port2.default;
	Flow.Variable = _Variable2.default;

	module.exports = Flow;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _events = __webpack_require__(6);

	var _events2 = _interopRequireDefault(_events);

	var _Port = __webpack_require__(7);

	var _Port2 = _interopRequireDefault(_Port);

	var _Variable = __webpack_require__(8);

	var _Variable2 = _interopRequireDefault(_Variable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	  function Component() {
	    _classCallCheck(this, Component);

	    // Icon URL is the URL of an Icon in SVG that can be showed in the UI.
	    this._iconUrl = '';
	    this._type = 'component';

	    // These are number of outports.
	    this._ports = [];

	    // A short description of the component.
	    this._description = '';

	    // List of all the outports. If we're building an email component. Ourports can be sent, bounced, error, etc.
	    this._outPorts = {};

	    // A socket object to communicate with other components.
	    this._socket = new _events2.default();

	    // Genere a new ID for this instance.
	    this._id = _Util2.default.generateId();

	    this._task = null;

	    this._socket.on('execute-component-' + this.id, this.execute);

	    this._variables = [];

	    // check if the env is NodeJS
	    this._platform = 'browser';
	    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
	      this._platform = 'node';
	    }

	    this._isProcessingTask = false;
	  }

	  _createClass(Component, [{
	    key: 'addVariable',
	    value: function addVariable(variable) {
	      if (variable instanceof _Variable2.default) {
	        if (!variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	            throw new Error('Variable with the same name or id already exists.');
	          }
	        }

	        this._variables.push(variable);
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }
	  }, {
	    key: 'removeVariable',
	    value: function removeVariable(variable) {
	      if (variable instanceof _Variable2.default || typeof variable === 'string') {
	        if (variable instanceof _Variable2.default && !variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (typeof variable === 'string') {
	            if (variable === this._variables[i].name) {
	              this._variables.slice(i, 1);
	            }
	          } else {
	            if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	              this._variables.slice(i, 1);
	            }
	          }
	        }
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }
	  }, {
	    key: 'updateVariable',
	    value: function updateVariable(variable) {
	      if (variable instanceof _Variable2.default) {
	        if (!variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	            this._variables[i] = variable;
	            return;
	          }
	        }

	        throw new Error('Variable not found and is not updated.');
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }
	  }, {
	    key: 'getVariable',
	    value: function getVariable(variable) {
	      if (variable instanceof _Variable2.default || typeof variable === 'string') {
	        if (variable instanceof _Variable2.default && !variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (typeof variable === 'string') {
	            if (variable === this._variables[i].name) {
	              return this._variables[i];
	            }
	          } else {
	            if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	              return this._variables[i];
	            }
	          }
	        }

	        throw new Error('Variable not found.');
	      } else {
	        throw new Error('Variable should be an instance of variable class.');
	      }
	    }
	  }, {
	    key: 'hasVariable',
	    value: function hasVariable(variable) {
	      if (variable instanceof _Variable2.default || typeof variable === 'string') {
	        if (variable instanceof _Variable2.default && !variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (typeof variable === 'string') {
	            if (variable === this._variables[i].name) {
	              return true;
	            }
	          } else {
	            if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	              return true;
	            }
	          }
	        }
	        return false;
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }

	    // execute the component task.

	  }, {
	    key: 'execute',
	    value: function execute() {
	      if (!this._task) {
	        throw new Error('No task attached.');
	      }
	      // check if task is attached and if its actually a function.
	      if (this._isProcessingTask) {
	        throw new Error('Component is already processing a task.');
	      }

	      if (this._task && _Util2.default.validateType(this._task, 'function')) {
	        this._isProcessingTask = true;
	        this._task();
	      }
	    }
	  }, {
	    key: 'taskComplete',
	    value: function taskComplete() {
	      // Task is complete, and this component is no longer processing.
	      this._isProcessingTask = false;
	    }
	    // Task is a custom code as a function that runs when the component executes.

	  }, {
	    key: 'attachTask',
	    value: function attachTask(task) {
	      if (!_Util2.default.validateType(task, 'function')) {
	        throw new Error('Task must be a function.');
	      }

	      this._task = task;
	    }

	    // Task is a custom code as a function that runs when the component executes.

	  }, {
	    key: 'detachTask',
	    value: function detachTask() {
	      this._task = null;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      return JSON.stringify(this);
	    }
	  }, {
	    key: 'addPort',
	    value: function addPort(port) {
	      if (port instanceof _Port2.default) {
	        if (!port.id) {
	          throw new Error('Port does not have an ID.');
	        }

	        for (var i = 0; i < this._ports.length; i++) {
	          if (port.name === this._ports[i].name || port.id === this._ports[i].id) {
	            throw new Error('Port with the same name or id already exists.');
	          }
	        }

	        if (port._componentAttachedTo) {
	          throw new Error('This port is already attached with other component');
	        }

	        port._componentAttachedTo = this;
	        this._ports.push(port);
	      } else {
	        throw new Error('Port should be an instance of Port class.');
	      }
	    }
	  }, {
	    key: 'removePort',
	    value: function removePort(port) {
	      if (port instanceof _Port2.default) {
	        if (!port.id) {
	          throw new Error('Port does not have an ID.');
	        }
	        if (this._ports.indexOf(port) < 0) {
	          throw new Error('Port not found in the component.');
	        }
	        this._ports.slice(this._ports.indexOf(port), 1);
	        port._componentAttachedTo = null;
	      } else {
	        throw new Error('Port should be an instance of Port class.');
	      }
	    }
	  }, {
	    key: 'getPort',
	    value: function getPort(port) {
	      if (port instanceof _Port2.default || typeof port === 'string') {
	        if (port instanceof _Port2.default) {
	          if (!port.id) {
	            throw new Error('Port does not have an ID.');
	          }

	          if (this._ports.indexOf(port) < 0) {
	            throw new Error('Port not found in the component.');
	          }

	          return this._ports[this._ports.indexOf(port)];
	        }

	        if (typeof port === 'string') {
	          for (var i = 0; i < this._ports.length; i++) {
	            if (this._ports[i].name === port) {
	              return this._ports[i];
	            }
	          }

	          throw new Error('Port with name ' + port + ' not found in the component.');
	        }
	      } else {
	        throw new Error('Port should be an instance of Port class.');
	      }
	    }
	  }, {
	    key: 'hasPort',
	    value: function hasPort(port) {
	      if (port instanceof _Port2.default) {
	        if (!port.id) {
	          throw new Error('Port does not have an ID.');
	        }
	        if (this._ports.indexOf(port) < 0) {
	          return false;
	        }

	        return true;
	      } else {
	        throw new Error('Port should be an instance of Port class.');
	      }
	    }
	  }, {
	    key: 'getPorts',
	    value: function getPorts() {
	      return this._ports;
	    }

	    // getters and setters

	  }, {
	    key: 'description',
	    get: function get() {
	      return this._description;
	    },
	    set: function set(description) {
	      if (!_Util2.default.validateType(description, 'string')) {
	        throw new Error('Description must be a string.');
	      }

	      this._description = description;
	    }
	  }, {
	    key: 'task',
	    get: function get() {
	      return this._name;
	    },
	    set: function set(task) {
	      this.attachTask(task);
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this._name;
	    },
	    set: function set(name) {
	      if (!_Util2.default.validateType(name, 'string')) {
	        throw new Error('Name must be a string.');
	      }
	      this._name = name;
	    }
	  }, {
	    key: 'iconUrl',
	    get: function get() {
	      return this._iconUrl;
	    },
	    set: function set(iconUrl) {
	      if (!_Util2.default.validateType(iconUrl, 'url')) {
	        throw new Error('iconUrl must be a URL.');
	      }
	      this._iconUrl = iconUrl;
	    }
	  }, {
	    key: 'outPorts',
	    get: function get() {
	      return this._outPorts;
	    }
	  }, {
	    key: 'id',
	    get: function get() {
	      return this._id;
	    }
	  }]);

	  return Component;
	}();

	// export.


	module.exports = Component;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Util = function () {
	  function Util() {
	    _classCallCheck(this, Util);
	  }

	  _createClass(Util, null, [{
	    key: 'validateType',
	    value: function validateType(value, type) {
	      // define types here.
	      type = type.toLowerCase(); // lowercase type.
	      var validTypes = ['number', 'decimal', 'text', 'date', 'date', 'time', 'url', 'rating', 'email', 'string', 'int', 'integer', 'float', 'double', 'bool', 'boolean', 'function'];

	      if (validTypes.indexOf(type) < 0) {
	        throw new Error(type + ' is not a valid type.');
	      }

	      if (type === 'text' || type === 'string' || type === 'url' || type === 'email') {
	        if (typeof value !== 'string') {
	          return false;
	        }
	      }

	      if (type === 'number' || type === 'int' || type === 'integer' || type === 'decimal' || type === 'float' || type === 'double' || type === 'rating') {
	        if (typeof value !== 'number') {
	          return false;
	        }
	      }

	      if (type === 'bool' || type === 'boolean') {
	        if (typeof value !== 'boolean') {
	          return false;
	        }
	      }

	      if (type === 'function') {
	        if (typeof value !== 'function') {
	          return false;
	        }
	      }

	      if (type === 'date' || type === 'datetime' || type === 'time') {
	        if (!(value instanceof type)) {
	          return false;
	        }
	      }

	      if (type === 'rating') {
	        if (value < 0 || value > 5) {
	          return false;
	        }
	      }

	      // validate for URL.
	      if (type === 'url' && this.validate(value, 'text')) {
	        var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9]+[a-zA-Z]{2,8}/;

	        if (!re.test(value)) {
	          return false;
	        }

	        return true;
	      }

	      // To-Do: Check for all the types here.
	      return true;
	    }
	  }, {
	    key: 'generateId',
	    value: function generateId() {
	      var id = '';
	      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	      for (var i = 0; i < 12; i++) {
	        id = id + possible.charAt(Math.floor(Math.random() * possible.length));
	      }
	      return id;
	    }
	  }, {
	    key: 'isNotNull',
	    value: function isNotNull(value) {
	      if (value !== null && value !== '' && value !== undefined) {
	        return true;
	      }

	      return false;
	    }
	  }]);

	  return Util;
	}();

	module.exports = Util;

/***/ },
/* 6 */
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _Component = __webpack_require__(3);

	var _Component2 = _interopRequireDefault(_Component);

	var _Variable = __webpack_require__(8);

	var _Variable2 = _interopRequireDefault(_Variable);

	var _events = __webpack_require__(6);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Port = function () {
	  function Port(name) {
	    _classCallCheck(this, Port);

	    // set initial properties
	    if (!name) {
	      throw new Error('Port Name is required.');
	    }

	    this._type = 'port';

	    this.name = name;
	    this._id = _Util2.default.generateId();
	    this._connectedComponents = [];
	    this._componentAttachedTo = null;
	    this._variables = [];
	    this._socket = new _events2.default();
	  }

	  _createClass(Port, [{
	    key: 'addVariable',
	    value: function addVariable(variable) {
	      if (variable instanceof _Variable2.default) {
	        if (!variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	            throw new Error('Variable with the same name or id already exists.');
	          }
	        }

	        this._variables.push(variable);
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }
	  }, {
	    key: 'removeVariable',
	    value: function removeVariable(variable) {
	      if (variable instanceof _Variable2.default || typeof variable === 'string') {
	        if (variable instanceof _Variable2.default && !variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (typeof variable === 'string') {
	            if (variable === this._variables[i].name) {
	              this._variables.slice(i, 1);
	            }
	          } else {
	            if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	              this._variables.slice(i, 1);
	            }
	          }
	        }
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }
	  }, {
	    key: 'updateVariable',
	    value: function updateVariable(variable) {
	      if (variable instanceof _Variable2.default) {
	        if (!variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	            this._variables[i] = variable;
	            return;
	          }
	        }

	        throw new Error('Variable not found and is not updated.');
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }
	  }, {
	    key: 'hasVariable',
	    value: function hasVariable(variable) {
	      if (variable instanceof _Variable2.default || typeof variable === 'string') {
	        if (variable instanceof _Variable2.default && !variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (typeof variable === 'string') {
	            if (variable === this._variables[i].name) {
	              return true;
	            }
	          } else {
	            if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	              return true;
	            }
	          }
	        }
	        return false;
	      } else {
	        throw new Error('variables should be an instance of Variable class.');
	      }
	    }

	    // This passes the flow to components that this port is connected to.

	  }, {
	    key: 'emit',
	    value: function emit() {
	      for (var i = 0; i < this._connectedComponents; i++) {
	        this._socket.emit('execute-component-' + this._connectedComponents[i]);
	      }

	      // Fire an onEmit Callback.
	      if (this._onEmit) {
	        this._onEmit();
	      }
	    }
	  }, {
	    key: 'onEmit',
	    value: function onEmit(callback) {
	      this._onEmit = callback;
	    }
	  }, {
	    key: 'connectComponent',
	    value: function connectComponent(component) {
	      if (component._type === 'component') {
	        if (!component.id) {
	          throw new Error('Component does not have an ID.');
	        }

	        var componentId = component.id;

	        for (var i = 0; i < this._connectedComponents.length; i++) {
	          if (componentId === this._connectedComponents[i]) {
	            throw new Error('Port is already connected to ' + component.name + '.');
	          }
	        }

	        this._connectedComponents.push(componentId);
	      } else {
	        throw new Error('component should be an instance of Component class.');
	      }
	    }
	  }, {
	    key: 'getVariable',
	    value: function getVariable(variable) {
	      if (variable instanceof _Variable2.default || typeof variable === 'string') {
	        if (variable instanceof _Variable2.default && !variable.id) {
	          throw new Error('Variable does not have an ID.');
	        }

	        for (var i = 0; i < this._variables.length; i++) {
	          if (typeof variable === 'string') {
	            if (variable === this._variables[i].name) {
	              return this._variables[i];
	            }
	          } else {
	            if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
	              return this._variables[i];
	            }
	          }
	        }

	        throw new Error('Variable not found.');
	      } else {
	        throw new Error('Variable should be an instance of variable class.');
	      }
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      return JSON.stringify(this);
	    }
	  }, {
	    key: 'disconnectComponent',
	    value: function disconnectComponent(component) {
	      if (component instanceof _Component2.default) {
	        if (!component.id) {
	          throw new Error('Component does not have an ID.');
	        }

	        var componentId = component.id;
	        if (this._connectedComponents.indexOf(componentId) < 0) {
	          throw new Error('Component is not connected to the port.');
	        }

	        this._connectedComponents.slice(this._connectedComponents.indexOf(componentId), 1);
	      } else {
	        throw new Error('component should be an instance of Component class.');
	      }
	    }
	  }, {
	    key: 'getConnectedComponentIds',
	    value: function getConnectedComponentIds() {
	      return this._connectedComponents;
	    }

	    // getters and setters

	  }, {
	    key: 'description',
	    get: function get() {
	      return this._description;
	    },
	    set: function set(description) {
	      if (!_Util2.default.validateType(description, 'string')) {
	        throw new Error('Description must be a string.');
	      }

	      this._description = description;
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this._name;
	    },
	    set: function set(name) {
	      if (!_Util2.default.validateType(name, 'string')) {
	        throw new Error('Name must be a string.');
	      }
	      this._name = name;
	    }
	  }, {
	    key: 'id',
	    get: function get() {
	      return this._id;
	    }
	  }]);

	  return Port;
	}();

	module.exports = Port;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Variable = function () {
	  function Variable(name, dataType) {
	    _classCallCheck(this, Variable);

	    if (!name) {
	      throw new Error('Name is required.');
	    }

	    if (!dataType) {
	      throw new Error('DataType is required.');
	    }

	    this._type = 'variable';

	    this.name = name;
	    this.dataType = dataType;
	    this.required = false;
	    this._id = _Util2.default.generateId();
	    this.data = null;
	    this.index = null;
	  }

	  _createClass(Variable, [{
	    key: 'serialize',
	    value: function serialize() {
	      return JSON.stringify(this);
	    }
	  }, {
	    key: 'data',
	    set: function set(data) {
	      // ToDO: Check the DataType and Set Data.
	      this._data = data;
	    },
	    get: function get() {
	      return this._data;
	    }

	    // getters and setters

	  }, {
	    key: 'description',
	    get: function get() {
	      return this._description;
	    },
	    set: function set(description) {
	      if (!_Util2.default.validateType(description, 'string')) {
	        throw new Error('Description must be a string.');
	      }
	      this._description = description;
	    }

	    // getters and setters

	  }, {
	    key: 'name',
	    get: function get() {
	      return this._name;
	    },
	    set: function set(name) {
	      if (!_Util2.default.validateType(name, 'string')) {
	        throw new Error('Name must be a string.');
	      }
	      this._name = name;
	    }

	    // getters and setters

	  }, {
	    key: 'dataType',
	    get: function get() {
	      return this._dataType;
	    }

	    // DataType can be an array too. Like a selector box or an object of Params.
	    ,
	    set: function set(dataType) {
	      if (!_Util2.default.validateType(dataType, 'string') && !(dataType instanceof Array)) {
	        throw new Error('DataType must be a string or an array.');
	      }

	      this._dataType = dataType;
	    }
	  }, {
	    key: 'id',
	    get: function get() {
	      return this._id;
	    }
	  }, {
	    key: 'required',
	    set: function set(required) {
	      if (!_Util2.default.validateType(required, 'boolean')) {
	        throw new Error('Required must be a string.');
	      }

	      this._required = required;
	    }

	    // getters and setters
	    ,
	    get: function get() {
	      return this._required;
	    }
	  }]);

	  return Variable;
	}();

	module.exports = Variable;

/***/ }
/******/ ])
});
;