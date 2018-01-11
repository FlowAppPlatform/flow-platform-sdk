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

	var _Graph = __webpack_require__(1);

	var _Graph2 = _interopRequireDefault(_Graph);

	var _Variable = __webpack_require__(27);

	var _Variable2 = _interopRequireDefault(_Variable);

	var _Component = __webpack_require__(28);

	var _Component2 = _interopRequireDefault(_Component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flow = {};
	Flow.Component = _Component2.default;
	Flow.Graph = _Graph2.default;
	Flow.Variable = _Variable2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _AddComponent = __webpack_require__(26);

	var _AddComponent2 = _interopRequireDefault(_AddComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Graph Tests', function () {
	  it('A new graph should have an ID', function (done) {
	    var graph = new _index2.default.Graph('Name');
	    if (graph.id) {
	      done();
	    } else {
	      done('Graph does not have an ID');
	    }
	  });

	  it('Graph should not be created without a name', function (done) {
	    try {
	      var graph = new _index2.default.Graph();
	      if (graph.id) {
	        done('Graph created and has an id');
	      } else {
	        done('Graph created but does not have an ID');
	      }
	    } catch (e) {
	      done();
	    }
	  });

	  it('Graph should add any object in place of a component', function (done) {
	    try {
	      var graph = new _index2.default.Graph();
	      graph.addComponent('Component');
	      done('Added string in place of a component.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('Graph should remove any object in place of a component', function (done) {
	    try {
	      var graph = new _index2.default.Graph();
	      graph.removeComponent('Component');
	      done('Removed string in place of a component.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('Should not add null as a component', function (done) {
	    try {
	      var graph = new _index2.default.Graph();
	      graph.addComponent();
	      done('Added null in place of a component.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('Should not remove null as a component', function (done) {
	    try {
	      var graph = new _index2.default.Graph();
	      graph.removeComponent();
	      done('Removed null in place of a component.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('Should not add any object in place of component', function (done) {
	    try {
	      var graph = new _index2.default.Graph();
	      graph.addComponent({});
	      done('Added an object in place of a component.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('Should not remove object as a component', function (done) {
	    try {
	      var graph = new _index2.default.Graph();
	      graph.removeComponent({});
	      done('Removed an object in place of a component.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('Should add a component to the graph', function (done) {
	    try {
	      var graph = new _index2.default.Graph('Math');

	      var addComponent = new _AddComponent2.default();
	      addComponent.getVariable('Variable 1').data = 1;
	      addComponent.getVariable('Variable 2').data = 2;

	      graph.addComponent(addComponent);

	      done();
	    } catch (e) {
	      done('Error: Component cannot be removed.');
	    }
	  });

	  it('Should remove a component to the graph', function (done) {
	    try {
	      var graph = new _index2.default.Graph('Math');

	      var addComponent = new _AddComponent2.default();
	      addComponent.getVariable('Variable 1').data = 1;
	      addComponent.getVariable('Variable 2').data = 2;

	      graph.addComponent(addComponent);
	      graph.removeComponent(addComponent);

	      done();
	    } catch (e) {
	      done('Error: Component cannot be removed.');
	    }
	  });

	  it('should not throw an error when you try to remove a component which is not added. ', function (done) {
	    try {
	      var graph = new _index2.default.Graph('Math');

	      var addComponent = new _AddComponent2.default();
	      addComponent.getVariable('Variable 1').data = 1;
	      addComponent.getVariable('Variable 2').data = 2;

	      graph.removeComponent(addComponent);

	      done();
	    } catch (e) {
	      done('Error thrown.');
	    }
	  });

	  it('should set a name ', function (done) {
	    try {
	      var graph = new _index2.default.Graph('Math');
	      graph.name = 'New name';

	      if (graph.name === 'New name') {
	        done();
	      } else {
	        done('Graph has a wrong name');
	      }
	    } catch (e) {
	      done('Error thrown.');
	    }
	  });

	  it('should set any other datatype other than string as name ', function (done) {
	    try {
	      var graph = new _index2.default.Graph('Math');
	      graph.name = 1;

	      if (graph.name === 1) {
	        done('Number set as name');
	      } else {
	        done('Graph has a wrong name');
	      }
	    } catch (e) {
	      done();
	    }
	  });

	  it('should get an id. ', function (done) {
	    try {
	      var graph = new _index2.default.Graph('Math');
	      if (graph.id) {
	        done();
	      } else {
	        done('Does not have an ID');
	      }
	    } catch (e) {
	      done('Error thrown');
	    }
	  });

	  it('should not set an id ', function (done) {
	    try {
	      var graph = new _index2.default.Graph('Math');
	      graph.id = 'New id';
	      done('ID is set');
	    } catch (e) {
	      done();
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _Component = __webpack_require__(3);

	var _Component2 = _interopRequireDefault(_Component);

	var _Port = __webpack_require__(6);

	var _Port2 = _interopRequireDefault(_Port);

	var _Variable = __webpack_require__(7);

	var _Variable2 = _interopRequireDefault(_Variable);

	var _Graph = __webpack_require__(8);

	var _Graph2 = _interopRequireDefault(_Graph);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Documentation at /docs/README.md
	 */

	var Flow = {};
	Flow.Component = _Component2.default;
	Flow.Port = _Port2.default;
	Flow.Variable = _Variable2.default;
	Flow.Graph = _Graph2.default;

	module.exports = Flow;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Documentation at /docs/classes/Component/README.md
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _Port = __webpack_require__(6);

	var _Port2 = _interopRequireDefault(_Port);

	var _Variable = __webpack_require__(7);

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
	    this._socket = null;

	    // Genere a new ID for this instance.
	    this._id = _Util2.default.generateId();

	    this._task = null;

	    this._variables = [];

	    // check if the env is NodeJS
	    this._platform = 'browser';
	    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
	      this._platform = 'node';
	    }

	    this._isProcessingTask = false;
	  }

	  _createClass(Component, [{
	    key: 'isOnGraph',
	    value: function isOnGraph() {
	      // The Socket belongs to a Graph. If this component has a socket. It's on the graph.
	      if (this._socket) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
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
	      var component = this;

	      if (arguments[0] && arguments[0]._type && arguments[0]._type === 'component') {
	        component = arguments[0];
	      }

	      if (!component._task) {
	        throw new Error('No task attached.');
	      }
	      // check if task is attached and if its actually a function.
	      if (component._isProcessingTask) {
	        throw new Error('Component is already processing a task.');
	      }

	      if (component._task && _Util2.default.validateType(component._task, 'function')) {
	        component._isProcessingTask = true;
	        component._task();
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
	  }, {
	    key: '_attachSocket',
	    value: function _attachSocket(socket) {
	      this._socket = socket;
	      var component = this;
	      this._socket.on('execute-component-' + this.id, function () {
	        component.execute(component);
	      });
	    }
	  }, {
	    key: '_detachSocket',
	    value: function _detachSocket() {
	      if (this._socket) {
	        this._socket.off('execute-component-' + this.id, this.execute);
	        this._socket = null;
	      }
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
	    },
	    set: function set(id) {
	      throw new Error('ID is read-only');
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
	      var validTypes = this.getValidDataTypes();

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

	      if (type === 'select-single') {
	        if (value instanceof Array && value.length <= 1) {
	          return false;
	        }
	      }

	      if (type === 'select-nultiple') {
	        if (value instanceof Array) {
	          return false;
	        }
	      }

	      if (type === 'list') {
	        if (value instanceof Array) {
	          return false;
	        }
	      }

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
	  }, {
	    key: 'getValidDataTypes',
	    value: function getValidDataTypes() {
	      return ['number', 'decimal', 'text', 'date', 'datetime', 'time', 'url', 'rating', 'email', 'string', 'int', 'integer', 'float', 'double', 'bool', 'boolean', 'function', 'list', 'select-multiple', 'select-single'];
	    }
	  }]);

	  return Util;
	}();

	module.exports = Util;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Documentation at /docs/classes/Port/README.md
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _Component = __webpack_require__(3);

	var _Component2 = _interopRequireDefault(_Component);

	var _Variable = __webpack_require__(7);

	var _Variable2 = _interopRequireDefault(_Variable);

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
	    this._socket = null;
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
	      if (this._componentAttachedTo) {
	        for (var i = 0; i < this._connectedComponents.length; i++) {
	          if (this._componentAttachedTo.isOnGraph()) {
	            this._componentAttachedTo._socket.emit('execute-component-' + this._connectedComponents[i]);
	          } else {
	            throw new Error('Port cannot be emitted because the component it belongs to does not belong to a graph.');
	          }
	        }

	        // Fire an onEmit Callback.
	        if (this._onEmit) {
	          this._onEmit();
	        }
	      } else {
	        throw new Error('This port cannot emit because it does not belong to any component');
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
	      if (component && component._type && component._type === 'component') {
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Documentation at /docs/classes/Variable/README.md
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

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
	    this._data = {};
	    this.index = null;
	  }

	  _createClass(Variable, [{
	    key: 'linkToVariable',
	    value: function linkToVariable(variable) {
	      if (variable && variable._type === 'variable') {
	        this._data = variable._data;
	      }
	    }
	  }, {
	    key: 'data',
	    set: function set(data) {
	      if (_Util2.default.validateType(data, this.dataType)) {
	        this._data._value = data;
	      } else {
	        throw new Error('Data is not of type ' + this.dataType);
	      }
	    },
	    get: function get() {
	      return this._data._value;
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
	      if (!_Util2.default.validateType(dataType, 'string')) {
	        throw new Error('DataType must be a string');
	      }
	      if (this._data && this._data._value) {
	        delete this._data._value;
	      } // delete data which was there before if the type changes.
	      this._dataType = dataType;
	    }
	  }, {
	    key: 'id',
	    get: function get() {
	      return this._id;
	    },
	    set: function set(id) {
	      throw new Error('ID is read-only');
	    }

	    // DataType can be an array too. Like a selector box or an object of Params.

	  }, {
	    key: 'values',
	    set: function set(values) {
	      if (!_Util2.default.validateType(values, 'list')) {
	        throw new Error('Values must be an array.');
	      }

	      if (this.dataType === 'select-single' || this.dataType === 'select-multiple') {
	        this._values = values;
	      } else {
	        throw new Error('To use this property, the DataType should be select-single or select-multiple.');
	      }
	    },
	    get: function get() {
	      return this._values;
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Documentation at /docs/classes/Graph/README.md
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _eventEmitter = __webpack_require__(9);

	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Graph = function () {
	  function Graph(name) {
	    _classCallCheck(this, Graph);

	    this._socket = new _eventEmitter2.default();
	    this._type = 'graph';
	    this.name = name;
	    // Genere a new ID for this instance.
	    this._id = _Util2.default.generateId();
	    this._components = {};
	  }

	  _createClass(Graph, [{
	    key: 'addComponent',
	    value: function addComponent(component) {
	      if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component._type && component._type === 'component') {
	        if (!component.id) {
	          throw new Error('Component does not have an id. Please instantiate the component.');
	        }

	        this._components[component.id] = component;
	        component._attachSocket(this._socket);
	      } else {
	        throw new Error('Argument 1 is not of type Component');
	      }
	    }
	  }, {
	    key: 'removeComponent',
	    value: function removeComponent(component) {
	      if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component._type && component._type === 'component') {
	        if (!component.id) {
	          throw new Error('Component does not have an id. Please instantiate the component.');
	        }

	        delete this._components[component.id];
	        component._detachSocket();
	      } else {
	        throw new Error('Argument 1 is not of type Component');
	      }
	    }

	    // getters and setters.

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
	    },
	    set: function set(id) {
	      throw new Error('ID is read-only');
	    }
	  }]);

	  return Graph;
	}();

	module.exports = Graph;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var d        = __webpack_require__(10)
	  , callable = __webpack_require__(25)

	  , apply = Function.prototype.apply, call = Function.prototype.call
	  , create = Object.create, defineProperty = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , hasOwnProperty = Object.prototype.hasOwnProperty
	  , descriptor = { configurable: true, enumerable: false, writable: true }

	  , on, once, off, emit, methods, descriptors, base;

	on = function (type, listener) {
		var data;

		callable(listener);

		if (!hasOwnProperty.call(this, '__ee__')) {
			data = descriptor.value = create(null);
			defineProperty(this, '__ee__', descriptor);
			descriptor.value = null;
		} else {
			data = this.__ee__;
		}
		if (!data[type]) data[type] = listener;
		else if (typeof data[type] === 'object') data[type].push(listener);
		else data[type] = [data[type], listener];

		return this;
	};

	once = function (type, listener) {
		var once, self;

		callable(listener);
		self = this;
		on.call(this, type, once = function () {
			off.call(self, type, once);
			apply.call(listener, this, arguments);
		});

		once.__eeOnceListener__ = listener;
		return this;
	};

	off = function (type, listener) {
		var data, listeners, candidate, i;

		callable(listener);

		if (!hasOwnProperty.call(this, '__ee__')) return this;
		data = this.__ee__;
		if (!data[type]) return this;
		listeners = data[type];

		if (typeof listeners === 'object') {
			for (i = 0; (candidate = listeners[i]); ++i) {
				if ((candidate === listener) ||
						(candidate.__eeOnceListener__ === listener)) {
					if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
					else listeners.splice(i, 1);
				}
			}
		} else {
			if ((listeners === listener) ||
					(listeners.__eeOnceListener__ === listener)) {
				delete data[type];
			}
		}

		return this;
	};

	emit = function (type) {
		var i, l, listener, listeners, args;

		if (!hasOwnProperty.call(this, '__ee__')) return;
		listeners = this.__ee__[type];
		if (!listeners) return;

		if (typeof listeners === 'object') {
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

			listeners = listeners.slice();
			for (i = 0; (listener = listeners[i]); ++i) {
				apply.call(listener, this, args);
			}
		} else {
			switch (arguments.length) {
			case 1:
				call.call(listeners, this);
				break;
			case 2:
				call.call(listeners, this, arguments[1]);
				break;
			case 3:
				call.call(listeners, this, arguments[1], arguments[2]);
				break;
			default:
				l = arguments.length;
				args = new Array(l - 1);
				for (i = 1; i < l; ++i) {
					args[i - 1] = arguments[i];
				}
				apply.call(listeners, this, args);
			}
		}
	};

	methods = {
		on: on,
		once: once,
		off: off,
		emit: emit
	};

	descriptors = {
		on: d(on),
		once: d(once),
		off: d(off),
		emit: d(emit)
	};

	base = defineProperties({}, descriptors);

	module.exports = exports = function (o) {
		return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
	};
	exports.methods = methods;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign        = __webpack_require__(11)
	  , normalizeOpts = __webpack_require__(20)
	  , isCallable    = __webpack_require__(21)
	  , contains      = __webpack_require__(22)

	  , d;

	d = module.exports = function (dscr, value/*, options*/) {
		var c, e, w, options, desc;
		if ((arguments.length < 2) || (typeof dscr !== 'string')) {
			options = value;
			value = dscr;
			dscr = null;
		} else {
			options = arguments[2];
		}
		if (dscr == null) {
			c = w = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
			w = contains.call(dscr, 'w');
		}

		desc = { value: value, configurable: c, enumerable: e, writable: w };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};

	d.gs = function (dscr, get, set/*, options*/) {
		var c, e, options, desc;
		if (typeof dscr !== 'string') {
			options = set;
			set = get;
			get = dscr;
			dscr = null;
		} else {
			options = arguments[3];
		}
		if (get == null) {
			get = undefined;
		} else if (!isCallable(get)) {
			options = get;
			get = set = undefined;
		} else if (set == null) {
			set = undefined;
		} else if (!isCallable(set)) {
			options = set;
			set = undefined;
		}
		if (dscr == null) {
			c = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
		}

		desc = { get: get, set: set, configurable: c, enumerable: e };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(12)()
		? Object.assign
		: __webpack_require__(13);


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {
		var assign = Object.assign, obj;
		if (typeof assign !== "function") return false;
		obj = { foo: "raz" };
		assign(obj, { bar: "dwa" }, { trzy: "trzy" });
		return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var keys  = __webpack_require__(14)
	  , value = __webpack_require__(19)
	  , max   = Math.max;

	module.exports = function (dest, src /*, …srcn*/) {
		var error, i, length = max(arguments.length, 2), assign;
		dest = Object(value(dest));
		assign = function (key) {
			try {
				dest[key] = src[key];
			} catch (e) {
				if (!error) error = e;
			}
		};
		for (i = 1; i < length; ++i) {
			src = arguments[i];
			keys(src).forEach(assign);
		}
		if (error !== undefined) throw error;
		return dest;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(15)()
		? Object.keys
		: __webpack_require__(16);


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {
		try {
			Object.keys("primitive");
			return true;
		} catch (e) {
	 return false;
	}
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isValue = __webpack_require__(17);

	var keys = Object.keys;

	module.exports = function (object) {
		return keys(isValue(object) ? Object(object) : object);
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _undefined = __webpack_require__(18)(); // Support ES3 engines

	module.exports = function (val) {
	 return (val !== _undefined) && (val !== null);
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	// eslint-disable-next-line no-empty-function
	module.exports = function () {};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isValue = __webpack_require__(17);

	module.exports = function (value) {
		if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
		return value;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isValue = __webpack_require__(17);

	var forEach = Array.prototype.forEach, create = Object.create;

	var process = function (src, obj) {
		var key;
		for (key in src) obj[key] = src[key];
	};

	// eslint-disable-next-line no-unused-vars
	module.exports = function (opts1 /*, …options*/) {
		var result = create(null);
		forEach.call(arguments, function (options) {
			if (!isValue(options)) return;
			process(Object(options), result);
		});
		return result;
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	// Deprecated

	"use strict";

	module.exports = function (obj) {
	 return typeof obj === "function";
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(23)()
		? String.prototype.contains
		: __webpack_require__(24);


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	var str = "razdwatrzy";

	module.exports = function () {
		if (typeof str.contains !== "function") return false;
		return (str.contains("dwa") === true) && (str.contains("foo") === false);
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	var indexOf = String.prototype.indexOf;

	module.exports = function (searchString/*, position*/) {
		return indexOf.call(this, searchString, arguments[1]) > -1;
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (fn) {
		if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
		return fn;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

	module.exports = AddComponent;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Variable Tests', function () {
	  it('A new variable should have an ID', function (done) {
	    var variable = new _index2.default.Variable('Name', 'datatype');
	    if (variable.id) {
	      done();
	    } else {
	      done('variable does not have an ID');
	    }
	  });

	  it('variable should not be created without a name', function (done) {
	    try {
	      var variable = new _index2.default.Variable();
	      if (variable.id) {
	        done('variable created and has an id');
	      } else {
	        done('variable created but does not have an ID');
	      }
	    } catch (e) {
	      done();
	    }
	  });

	  it('variable should not be created without a datatype', function (done) {
	    try {
	      var variable = new _index2.default.Variable('name', null);
	      if (variable.id) {
	        done('variable created and has an id');
	      } else {
	        done('variable created but does not have an ID');
	      }
	    } catch (e) {
	      done();
	    }
	  });

	  it('should set a name ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'string');
	      variable.name = 'New name';

	      if (variable.name === 'New name') {
	        done();
	      } else {
	        done('variable has a wrong name');
	      }
	    } catch (e) {
	      done('Error thrown.');
	    }
	  });

	  it('should get an id. ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'string');
	      if (variable.id) {
	        done();
	      } else {
	        done('Does not have an ID');
	      }
	    } catch (e) {
	      done('Error thrown');
	    }
	  });

	  it('should set a description ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'string');
	      variable.description = 'New description';

	      if (variable.description === 'New description') {
	        done();
	      } else {
	        done('variable has a wrong description');
	      }
	    } catch (e) {
	      done('Error thrown.');
	    }
	  });

	  it('should set required ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'string');
	      variable.required = true;

	      if (variable.required) {
	        done();
	      } else {
	        done('variable has a wrong required field.');
	      }
	    } catch (e) {
	      done('Error thrown.');
	    }
	  });

	  it('should get an id. ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'string');
	      if (variable.id) {
	        done();
	      } else {
	        done('Does not have an ID');
	      }
	    } catch (e) {
	      done('Error thrown');
	    }
	  });

	  it('should set values - select single', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Country', 'select-single');
	      variable.values = ['India', 'USA'];
	      done();
	    } catch (e) {
	      done('Error thrown');
	    }
	  });

	  it('should set values - select multiple ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Country', 'select-multiple');
	      variable.values = ['India', 'USA'];
	      done();
	    } catch (e) {
	      done('Error thrown');
	    }
	  });

	  it('should not set values when datatype is somethign else from select-single or select multiple', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Country', 'string');
	      variable.values = ['India', 'USA'];
	      done('Values set.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('should not set an id ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'string');
	      variable.id = 'New id';
	      done('ID is set');
	    } catch (e) {
	      done();
	    }
	  });

	  it('should not set data of type text', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'text');
	      variable.data = 'New data';
	      done();
	    } catch (e) {
	      done('Data cannot be set');
	    }
	  });

	  it('should not set incorrect data of type text ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'text');
	      variable.data = 1;
	      done('Incorrect data of type text');
	    } catch (e) {
	      done();
	    }
	  });

	  it('should not set data of type number', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'number');
	      variable.data = 1;
	      done();
	    } catch (e) {
	      done('Data cannot be set');
	    }
	  });

	  it('should not set incorrect data of type number ', function (done) {
	    try {
	      var variable = new _index2.default.Variable('Sample', 'number');
	      variable.data = 'Sample';
	      done('Incorrect data of type number');
	    } catch (e) {
	      done();
	    }
	  });
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _AddComponent = __webpack_require__(26);

	var _AddComponent2 = _interopRequireDefault(_AddComponent);

	var _SubtractComponent = __webpack_require__(29);

	var _SubtractComponent2 = _interopRequireDefault(_SubtractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    var addComponent = new _AddComponent2.default();
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

	  it('Should not execute a connected component if it does not belong to a graph.', function (done) {
	    var addComponent = new _AddComponent2.default();
	    addComponent.getVariable('Variable 1').data = 1;
	    addComponent.getVariable('Variable 2').data = 2;

	    var subComponent = new _SubtractComponent2.default();
	    subComponent.getVariable('Variable 1').linkToVariable(addComponent.getPort('Result').getVariable('Variable 3'));
	    subComponent.getVariable('Variable 2').data = 2;

	    addComponent.getPort('Result').connectComponent(subComponent);

	    subComponent.getPort('Result').onEmit(function () {
	      if (subComponent.getPort('Result').getVariable('Variable 3').data === 1) {} else {}
	    });
	    try {
	      addComponent.execute();
	      done('Component executed without a graph.');
	    } catch (e) {
	      done();
	    }
	  });

	  it('Connect two components and execute.', function (done) {
	    var graph = new _index2.default.Graph('Math');

	    var addComponent = new _AddComponent2.default();
	    addComponent.getVariable('Variable 1').data = 1;
	    addComponent.getVariable('Variable 2').data = 2;

	    graph.addComponent(addComponent);

	    var subComponent = new _SubtractComponent2.default();
	    subComponent.getVariable('Variable 1').linkToVariable(addComponent.getPort('Result').getVariable('Variable 3'));
	    subComponent.getVariable('Variable 2').data = 2;

	    graph.addComponent(subComponent);

	    addComponent.getPort('Result').connectComponent(subComponent);

	    subComponent.getPort('Result').onEmit(function () {
	      if (subComponent.getPort('Result').getVariable('Variable 3').data === 1) {
	        done();
	      } else {
	        done('Result failed.');
	      }
	    });

	    addComponent.execute();
	  });
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubtractComponent = function (_Flow$Component) {
	  _inherits(SubtractComponent, _Flow$Component);

	  function SubtractComponent() {
	    _classCallCheck(this, SubtractComponent);

	    // construct the component.
	    var _this = _possibleConstructorReturn(this, (SubtractComponent.__proto__ || Object.getPrototypeOf(SubtractComponent)).call(this));

	    _this.name = 'Subtract';

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
	      this.getPort('Result').getVariable('Variable 3').data = this.getVariable('Variable 1').data - this.getVariable('Variable 2').data;
	      this.getPort('Result').emit();
	      this.taskComplete();
	    });
	    return _this;
	  }

	  return SubtractComponent;
	}(_index2.default.Component);

	;

	module.exports = SubtractComponent;

/***/ }
/******/ ])
});
;