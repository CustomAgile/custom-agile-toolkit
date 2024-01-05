var CustomAgile =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/Client */ "./src/Client.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/Classes */ "./src/Classes.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/Api */ "./src/Api.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/ClassClients */ "./src/ClassClients.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/Ref */ "./src/Ref.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/Common */ "./src/Common.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/Throttle */ "./src/Throttle.ts"), exports);


/***/ }),

/***/ "./node_modules/bottleneck/lib/Batcher.js":
/*!************************************************!*\
  !*** ./node_modules/bottleneck/lib/Batcher.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Batcher, Events, parser;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
Events = __webpack_require__(/*! ./Events */ "./node_modules/bottleneck/lib/Events.js");

Batcher = function () {
  class Batcher {
    constructor(options = {}) {
      this.options = options;
      parser.load(this.options, this.defaults, this);
      this.Events = new Events(this);
      this._arr = [];

      this._resetPromise();

      this._lastFlush = Date.now();
    }

    _resetPromise() {
      return this._promise = new this.Promise((res, rej) => {
        return this._resolve = res;
      });
    }

    _flush() {
      clearTimeout(this._timeout);
      this._lastFlush = Date.now();

      this._resolve();

      this.Events.trigger("batch", this._arr);
      this._arr = [];
      return this._resetPromise();
    }

    add(data) {
      var ret;

      this._arr.push(data);

      ret = this._promise;

      if (this._arr.length === this.maxSize) {
        this._flush();
      } else if (this.maxTime != null && this._arr.length === 1) {
        this._timeout = setTimeout(() => {
          return this._flush();
        }, this.maxTime);
      }

      return ret;
    }

  }

  ;
  Batcher.prototype.defaults = {
    maxTime: null,
    maxSize: null,
    Promise: Promise
  };
  return Batcher;
}.call(void 0);

module.exports = Batcher;

/***/ }),

/***/ "./node_modules/bottleneck/lib/Bottleneck.js":
/*!***************************************************!*\
  !*** ./node_modules/bottleneck/lib/Bottleneck.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Bottleneck,
    DEFAULT_PRIORITY,
    Events,
    Job,
    LocalDatastore,
    NUM_PRIORITIES,
    Queues,
    RedisDatastore,
    States,
    Sync,
    parser,
    splice = [].splice;
NUM_PRIORITIES = 10;
DEFAULT_PRIORITY = 5;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
Queues = __webpack_require__(/*! ./Queues */ "./node_modules/bottleneck/lib/Queues.js");
Job = __webpack_require__(/*! ./Job */ "./node_modules/bottleneck/lib/Job.js");
LocalDatastore = __webpack_require__(/*! ./LocalDatastore */ "./node_modules/bottleneck/lib/LocalDatastore.js");
RedisDatastore = __webpack_require__(/*! ./RedisDatastore */ "./node_modules/bottleneck/lib/RedisDatastore.js");
Events = __webpack_require__(/*! ./Events */ "./node_modules/bottleneck/lib/Events.js");
States = __webpack_require__(/*! ./States */ "./node_modules/bottleneck/lib/States.js");
Sync = __webpack_require__(/*! ./Sync */ "./node_modules/bottleneck/lib/Sync.js");

Bottleneck = function () {
  class Bottleneck {
    constructor(options = {}, ...invalid) {
      var storeInstanceOptions, storeOptions;
      this._addToQueue = this._addToQueue.bind(this);

      this._validateOptions(options, invalid);

      parser.load(options, this.instanceDefaults, this);
      this._queues = new Queues(NUM_PRIORITIES);
      this._scheduled = {};
      this._states = new States(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : []));
      this._limiter = null;
      this.Events = new Events(this);
      this._submitLock = new Sync("submit", this.Promise);
      this._registerLock = new Sync("register", this.Promise);
      storeOptions = parser.load(options, this.storeDefaults, {});

      this._store = function () {
        if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null) {
          storeInstanceOptions = parser.load(options, this.redisStoreDefaults, {});
          return new RedisDatastore(this, storeOptions, storeInstanceOptions);
        } else if (this.datastore === "local") {
          storeInstanceOptions = parser.load(options, this.localStoreDefaults, {});
          return new LocalDatastore(this, storeOptions, storeInstanceOptions);
        } else {
          throw new Bottleneck.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
        }
      }.call(this);

      this._queues.on("leftzero", () => {
        var ref;
        return (ref = this._store.heartbeat) != null ? typeof ref.ref === "function" ? ref.ref() : void 0 : void 0;
      });

      this._queues.on("zero", () => {
        var ref;
        return (ref = this._store.heartbeat) != null ? typeof ref.unref === "function" ? ref.unref() : void 0 : void 0;
      });
    }

    _validateOptions(options, invalid) {
      if (!(options != null && typeof options === "object" && invalid.length === 0)) {
        throw new Bottleneck.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
      }
    }

    ready() {
      return this._store.ready;
    }

    clients() {
      return this._store.clients;
    }

    channel() {
      return `b_${this.id}`;
    }

    channel_client() {
      return `b_${this.id}_${this._store.clientId}`;
    }

    publish(message) {
      return this._store.__publish__(message);
    }

    disconnect(flush = true) {
      return this._store.__disconnect__(flush);
    }

    chain(_limiter) {
      this._limiter = _limiter;
      return this;
    }

    queued(priority) {
      return this._queues.queued(priority);
    }

    clusterQueued() {
      return this._store.__queued__();
    }

    empty() {
      return this.queued() === 0 && this._submitLock.isEmpty();
    }

    running() {
      return this._store.__running__();
    }

    done() {
      return this._store.__done__();
    }

    jobStatus(id) {
      return this._states.jobStatus(id);
    }

    jobs(status) {
      return this._states.statusJobs(status);
    }

    counts() {
      return this._states.statusCounts();
    }

    _randomIndex() {
      return Math.random().toString(36).slice(2);
    }

    check(weight = 1) {
      return this._store.__check__(weight);
    }

    _clearGlobalState(index) {
      if (this._scheduled[index] != null) {
        clearTimeout(this._scheduled[index].expiration);
        delete this._scheduled[index];
        return true;
      } else {
        return false;
      }
    }

    _free(index, job, options, eventInfo) {
      var _this = this;

      return _asyncToGenerator(function* () {
        var e, running;

        try {
          var _ref = yield _this._store.__free__(index, options.weight);

          running = _ref.running;

          _this.Events.trigger("debug", `Freed ${options.id}`, eventInfo);

          if (running === 0 && _this.empty()) {
            return _this.Events.trigger("idle");
          }
        } catch (error1) {
          e = error1;
          return _this.Events.trigger("error", e);
        }
      })();
    }

    _run(index, job, wait) {
      var clearGlobalState, free, run;
      job.doRun();
      clearGlobalState = this._clearGlobalState.bind(this, index);
      run = this._run.bind(this, index, job);
      free = this._free.bind(this, index, job);
      return this._scheduled[index] = {
        timeout: setTimeout(() => {
          return job.doExecute(this._limiter, clearGlobalState, run, free);
        }, wait),
        expiration: job.options.expiration != null ? setTimeout(function () {
          return job.doExpire(clearGlobalState, run, free);
        }, wait + job.options.expiration) : void 0,
        job: job
      };
    }

    _drainOne(capacity) {
      return this._registerLock.schedule(() => {
        var args, index, next, options, queue;

        if (this.queued() === 0) {
          return this.Promise.resolve(null);
        }

        queue = this._queues.getFirst();

        var _next2 = next = queue.first();

        options = _next2.options;
        args = _next2.args;

        if (capacity != null && options.weight > capacity) {
          return this.Promise.resolve(null);
        }

        this.Events.trigger("debug", `Draining ${options.id}`, {
          args,
          options
        });
        index = this._randomIndex();
        return this._store.__register__(index, options.weight, options.expiration).then(({
          success,
          wait,
          reservoir
        }) => {
          var empty;
          this.Events.trigger("debug", `Drained ${options.id}`, {
            success,
            args,
            options
          });

          if (success) {
            queue.shift();
            empty = this.empty();

            if (empty) {
              this.Events.trigger("empty");
            }

            if (reservoir === 0) {
              this.Events.trigger("depleted", empty);
            }

            this._run(index, next, wait);

            return this.Promise.resolve(options.weight);
          } else {
            return this.Promise.resolve(null);
          }
        });
      });
    }

    _drainAll(capacity, total = 0) {
      return this._drainOne(capacity).then(drained => {
        var newCapacity;

        if (drained != null) {
          newCapacity = capacity != null ? capacity - drained : capacity;
          return this._drainAll(newCapacity, total + drained);
        } else {
          return this.Promise.resolve(total);
        }
      }).catch(e => {
        return this.Events.trigger("error", e);
      });
    }

    _dropAllQueued(message) {
      return this._queues.shiftAll(function (job) {
        return job.doDrop({
          message
        });
      });
    }

    stop(options = {}) {
      var done, waitForExecuting;
      options = parser.load(options, this.stopDefaults);

      waitForExecuting = at => {
        var finished;

        finished = () => {
          var counts;
          counts = this._states.counts;
          return counts[0] + counts[1] + counts[2] + counts[3] === at;
        };

        return new this.Promise((resolve, reject) => {
          if (finished()) {
            return resolve();
          } else {
            return this.on("done", () => {
              if (finished()) {
                this.removeAllListeners("done");
                return resolve();
              }
            });
          }
        });
      };

      done = options.dropWaitingJobs ? (this._run = function (index, next) {
        return next.doDrop({
          message: options.dropErrorMessage
        });
      }, this._drainOne = () => {
        return this.Promise.resolve(null);
      }, this._registerLock.schedule(() => {
        return this._submitLock.schedule(() => {
          var k, ref, v;
          ref = this._scheduled;

          for (k in ref) {
            v = ref[k];

            if (this.jobStatus(v.job.options.id) === "RUNNING") {
              clearTimeout(v.timeout);
              clearTimeout(v.expiration);
              v.job.doDrop({
                message: options.dropErrorMessage
              });
            }
          }

          this._dropAllQueued(options.dropErrorMessage);

          return waitForExecuting(0);
        });
      })) : this.schedule({
        priority: NUM_PRIORITIES - 1,
        weight: 0
      }, () => {
        return waitForExecuting(1);
      });

      this._receive = function (job) {
        return job._reject(new Bottleneck.prototype.BottleneckError(options.enqueueErrorMessage));
      };

      this.stop = () => {
        return this.Promise.reject(new Bottleneck.prototype.BottleneckError("stop() has already been called"));
      };

      return done;
    }

    _addToQueue(job) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var args, blocked, error, options, reachedHWM, shifted, strategy;
        args = job.args;
        options = job.options;

        try {
          var _ref2 = yield _this2._store.__submit__(_this2.queued(), options.weight);

          reachedHWM = _ref2.reachedHWM;
          blocked = _ref2.blocked;
          strategy = _ref2.strategy;
        } catch (error1) {
          error = error1;

          _this2.Events.trigger("debug", `Could not queue ${options.id}`, {
            args,
            options,
            error
          });

          job.doDrop({
            error
          });
          return false;
        }

        if (blocked) {
          job.doDrop();
          return true;
        } else if (reachedHWM) {
          shifted = strategy === Bottleneck.prototype.strategy.LEAK ? _this2._queues.shiftLastFrom(options.priority) : strategy === Bottleneck.prototype.strategy.OVERFLOW_PRIORITY ? _this2._queues.shiftLastFrom(options.priority + 1) : strategy === Bottleneck.prototype.strategy.OVERFLOW ? job : void 0;

          if (shifted != null) {
            shifted.doDrop();
          }

          if (shifted == null || strategy === Bottleneck.prototype.strategy.OVERFLOW) {
            if (shifted == null) {
              job.doDrop();
            }

            return reachedHWM;
          }
        }

        job.doQueue(reachedHWM, blocked);

        _this2._queues.push(job);

        yield _this2._drainAll();
        return reachedHWM;
      })();
    }

    _receive(job) {
      if (this._states.jobStatus(job.options.id) != null) {
        job._reject(new Bottleneck.prototype.BottleneckError(`A job with the same id already exists (id=${job.options.id})`));

        return false;
      } else {
        job.doReceive();
        return this._submitLock.schedule(this._addToQueue, job);
      }
    }

    submit(...args) {
      var cb, fn, job, options, ref, ref1, task;

      if (typeof args[0] === "function") {
        var _ref3, _ref4, _splice$call, _splice$call2;

        ref = args, (_ref3 = ref, _ref4 = _toArray(_ref3), fn = _ref4[0], args = _ref4.slice(1), _ref3), (_splice$call = splice.call(args, -1), _splice$call2 = _slicedToArray(_splice$call, 1), cb = _splice$call2[0], _splice$call);
        options = parser.load({}, this.jobDefaults);
      } else {
        var _ref5, _ref6, _splice$call3, _splice$call4;

        ref1 = args, (_ref5 = ref1, _ref6 = _toArray(_ref5), options = _ref6[0], fn = _ref6[1], args = _ref6.slice(2), _ref5), (_splice$call3 = splice.call(args, -1), _splice$call4 = _slicedToArray(_splice$call3, 1), cb = _splice$call4[0], _splice$call3);
        options = parser.load(options, this.jobDefaults);
      }

      task = (...args) => {
        return new this.Promise(function (resolve, reject) {
          return fn(...args, function (...args) {
            return (args[0] != null ? reject : resolve)(args);
          });
        });
      };

      job = new Job(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
      job.promise.then(function (args) {
        return typeof cb === "function" ? cb(...args) : void 0;
      }).catch(function (args) {
        if (Array.isArray(args)) {
          return typeof cb === "function" ? cb(...args) : void 0;
        } else {
          return typeof cb === "function" ? cb(args) : void 0;
        }
      });
      return this._receive(job);
    }

    schedule(...args) {
      var job, options, task;

      if (typeof args[0] === "function") {
        var _args = args;

        var _args2 = _toArray(_args);

        task = _args2[0];
        args = _args2.slice(1);
        options = {};
      } else {
        var _args3 = args;

        var _args4 = _toArray(_args3);

        options = _args4[0];
        task = _args4[1];
        args = _args4.slice(2);
      }

      job = new Job(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);

      this._receive(job);

      return job.promise;
    }

    wrap(fn) {
      var schedule, wrapped;
      schedule = this.schedule.bind(this);

      wrapped = function wrapped(...args) {
        return schedule(fn.bind(this), ...args);
      };

      wrapped.withOptions = function (options, ...args) {
        return schedule(options, fn, ...args);
      };

      return wrapped;
    }

    updateSettings(options = {}) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        yield _this3._store.__updateSettings__(parser.overwrite(options, _this3.storeDefaults));
        parser.overwrite(options, _this3.instanceDefaults, _this3);
        return _this3;
      })();
    }

    currentReservoir() {
      return this._store.__currentReservoir__();
    }

    incrementReservoir(incr = 0) {
      return this._store.__incrementReservoir__(incr);
    }

  }

  ;
  Bottleneck.default = Bottleneck;
  Bottleneck.Events = Events;
  Bottleneck.version = Bottleneck.prototype.version = __webpack_require__(/*! ./version.json */ "./node_modules/bottleneck/lib/version.json").version;
  Bottleneck.strategy = Bottleneck.prototype.strategy = {
    LEAK: 1,
    OVERFLOW: 2,
    OVERFLOW_PRIORITY: 4,
    BLOCK: 3
  };
  Bottleneck.BottleneckError = Bottleneck.prototype.BottleneckError = __webpack_require__(/*! ./BottleneckError */ "./node_modules/bottleneck/lib/BottleneckError.js");
  Bottleneck.Group = Bottleneck.prototype.Group = __webpack_require__(/*! ./Group */ "./node_modules/bottleneck/lib/Group.js");
  Bottleneck.RedisConnection = Bottleneck.prototype.RedisConnection = __webpack_require__(/*! ./RedisConnection */ "./node_modules/bottleneck/lib/RedisConnection.js");
  Bottleneck.IORedisConnection = Bottleneck.prototype.IORedisConnection = __webpack_require__(/*! ./IORedisConnection */ "./node_modules/bottleneck/lib/IORedisConnection.js");
  Bottleneck.Batcher = Bottleneck.prototype.Batcher = __webpack_require__(/*! ./Batcher */ "./node_modules/bottleneck/lib/Batcher.js");
  Bottleneck.prototype.jobDefaults = {
    priority: DEFAULT_PRIORITY,
    weight: 1,
    expiration: null,
    id: "<no-id>"
  };
  Bottleneck.prototype.storeDefaults = {
    maxConcurrent: null,
    minTime: 0,
    highWater: null,
    strategy: Bottleneck.prototype.strategy.LEAK,
    penalty: null,
    reservoir: null,
    reservoirRefreshInterval: null,
    reservoirRefreshAmount: null,
    reservoirIncreaseInterval: null,
    reservoirIncreaseAmount: null,
    reservoirIncreaseMaximum: null
  };
  Bottleneck.prototype.localStoreDefaults = {
    Promise: Promise,
    timeout: null,
    heartbeatInterval: 250
  };
  Bottleneck.prototype.redisStoreDefaults = {
    Promise: Promise,
    timeout: null,
    heartbeatInterval: 5000,
    clientTimeout: 10000,
    Redis: null,
    clientOptions: {},
    clusterNodes: null,
    clearDatastore: false,
    connection: null
  };
  Bottleneck.prototype.instanceDefaults = {
    datastore: "local",
    connection: null,
    id: "<no-id>",
    rejectOnDrop: true,
    trackDoneStatus: false,
    Promise: Promise
  };
  Bottleneck.prototype.stopDefaults = {
    enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
    dropWaitingJobs: true,
    dropErrorMessage: "This limiter has been stopped."
  };
  return Bottleneck;
}.call(void 0);

module.exports = Bottleneck;

/***/ }),

/***/ "./node_modules/bottleneck/lib/BottleneckError.js":
/*!********************************************************!*\
  !*** ./node_modules/bottleneck/lib/BottleneckError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BottleneckError;
BottleneckError = class BottleneckError extends Error {};
module.exports = BottleneckError;

/***/ }),

/***/ "./node_modules/bottleneck/lib/DLList.js":
/*!***********************************************!*\
  !*** ./node_modules/bottleneck/lib/DLList.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DLList;
DLList = class DLList {
  constructor(incr, decr) {
    this.incr = incr;
    this.decr = decr;
    this._first = null;
    this._last = null;
    this.length = 0;
  }

  push(value) {
    var node;
    this.length++;

    if (typeof this.incr === "function") {
      this.incr();
    }

    node = {
      value,
      prev: this._last,
      next: null
    };

    if (this._last != null) {
      this._last.next = node;
      this._last = node;
    } else {
      this._first = this._last = node;
    }

    return void 0;
  }

  shift() {
    var value;

    if (this._first == null) {
      return;
    } else {
      this.length--;

      if (typeof this.decr === "function") {
        this.decr();
      }
    }

    value = this._first.value;

    if ((this._first = this._first.next) != null) {
      this._first.prev = null;
    } else {
      this._last = null;
    }

    return value;
  }

  first() {
    if (this._first != null) {
      return this._first.value;
    }
  }

  getArray() {
    var node, ref, results;
    node = this._first;
    results = [];

    while (node != null) {
      results.push((ref = node, node = node.next, ref.value));
    }

    return results;
  }

  forEachShift(cb) {
    var node;
    node = this.shift();

    while (node != null) {
      cb(node), node = this.shift();
    }

    return void 0;
  }

  debug() {
    var node, ref, ref1, ref2, results;
    node = this._first;
    results = [];

    while (node != null) {
      results.push((ref = node, node = node.next, {
        value: ref.value,
        prev: (ref1 = ref.prev) != null ? ref1.value : void 0,
        next: (ref2 = ref.next) != null ? ref2.value : void 0
      }));
    }

    return results;
  }

};
module.exports = DLList;

/***/ }),

/***/ "./node_modules/bottleneck/lib/Events.js":
/*!***********************************************!*\
  !*** ./node_modules/bottleneck/lib/Events.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Events;
Events = class Events {
  constructor(instance) {
    this.instance = instance;
    this._events = {};

    if (this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null) {
      throw new Error("An Emitter already exists for this object");
    }

    this.instance.on = (name, cb) => {
      return this._addListener(name, "many", cb);
    };

    this.instance.once = (name, cb) => {
      return this._addListener(name, "once", cb);
    };

    this.instance.removeAllListeners = (name = null) => {
      if (name != null) {
        return delete this._events[name];
      } else {
        return this._events = {};
      }
    };
  }

  _addListener(name, status, cb) {
    var base;

    if ((base = this._events)[name] == null) {
      base[name] = [];
    }

    this._events[name].push({
      cb,
      status
    });

    return this.instance;
  }

  listenerCount(name) {
    if (this._events[name] != null) {
      return this._events[name].length;
    } else {
      return 0;
    }
  }

  trigger(name, ...args) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var e, promises;

      try {
        if (name !== "debug") {
          _this.trigger("debug", `Event triggered: ${name}`, args);
        }

        if (_this._events[name] == null) {
          return;
        }

        _this._events[name] = _this._events[name].filter(function (listener) {
          return listener.status !== "none";
        });
        promises = _this._events[name].map(
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* (listener) {
            var e, returned;

            if (listener.status === "none") {
              return;
            }

            if (listener.status === "once") {
              listener.status = "none";
            }

            try {
              returned = typeof listener.cb === "function" ? listener.cb(...args) : void 0;

              if (typeof (returned != null ? returned.then : void 0) === "function") {
                return yield returned;
              } else {
                return returned;
              }
            } catch (error) {
              e = error;

              if (true) {
                _this.trigger("error", e);
              }

              return null;
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        return (yield Promise.all(promises)).find(function (x) {
          return x != null;
        });
      } catch (error) {
        e = error;

        if (true) {
          _this.trigger("error", e);
        }

        return null;
      }
    })();
  }

};
module.exports = Events;

/***/ }),

/***/ "./node_modules/bottleneck/lib/Group.js":
/*!**********************************************!*\
  !*** ./node_modules/bottleneck/lib/Group.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Events, Group, IORedisConnection, RedisConnection, Scripts, parser;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
Events = __webpack_require__(/*! ./Events */ "./node_modules/bottleneck/lib/Events.js");
RedisConnection = __webpack_require__(/*! ./RedisConnection */ "./node_modules/bottleneck/lib/RedisConnection.js");
IORedisConnection = __webpack_require__(/*! ./IORedisConnection */ "./node_modules/bottleneck/lib/IORedisConnection.js");
Scripts = __webpack_require__(/*! ./Scripts */ "./node_modules/bottleneck/lib/Scripts.js");

Group = function () {
  class Group {
    constructor(limiterOptions = {}) {
      this.deleteKey = this.deleteKey.bind(this);
      this.limiterOptions = limiterOptions;
      parser.load(this.limiterOptions, this.defaults, this);
      this.Events = new Events(this);
      this.instances = {};
      this.Bottleneck = __webpack_require__(/*! ./Bottleneck */ "./node_modules/bottleneck/lib/Bottleneck.js");

      this._startAutoCleanup();

      this.sharedConnection = this.connection != null;

      if (this.connection == null) {
        if (this.limiterOptions.datastore === "redis") {
          this.connection = new RedisConnection(Object.assign({}, this.limiterOptions, {
            Events: this.Events
          }));
        } else if (this.limiterOptions.datastore === "ioredis") {
          this.connection = new IORedisConnection(Object.assign({}, this.limiterOptions, {
            Events: this.Events
          }));
        }
      }
    }

    key(key = "") {
      var ref;
      return (ref = this.instances[key]) != null ? ref : (() => {
        var limiter;
        limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
          id: `${this.id}-${key}`,
          timeout: this.timeout,
          connection: this.connection
        }));
        this.Events.trigger("created", limiter, key);
        return limiter;
      })();
    }

    deleteKey(key = "") {
      var _this = this;

      return _asyncToGenerator(function* () {
        var deleted, instance;
        instance = _this.instances[key];

        if (_this.connection) {
          deleted = yield _this.connection.__runCommand__(['del', ...Scripts.allKeys(`${_this.id}-${key}`)]);
        }

        if (instance != null) {
          delete _this.instances[key];
          yield instance.disconnect();
        }

        return instance != null || deleted > 0;
      })();
    }

    limiters() {
      var k, ref, results, v;
      ref = this.instances;
      results = [];

      for (k in ref) {
        v = ref[k];
        results.push({
          key: k,
          limiter: v
        });
      }

      return results;
    }

    keys() {
      return Object.keys(this.instances);
    }

    clusterKeys() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var cursor, end, found, i, k, keys, len, next, start;

        if (_this2.connection == null) {
          return _this2.Promise.resolve(_this2.keys());
        }

        keys = [];
        cursor = null;
        start = `b_${_this2.id}-`.length;
        end = "_settings".length;

        while (cursor !== 0) {
          var _ref = yield _this2.connection.__runCommand__(["scan", cursor != null ? cursor : 0, "match", `b_${_this2.id}-*_settings`, "count", 10000]);

          var _ref2 = _slicedToArray(_ref, 2);

          next = _ref2[0];
          found = _ref2[1];
          cursor = ~~next;

          for (i = 0, len = found.length; i < len; i++) {
            k = found[i];
            keys.push(k.slice(start, -end));
          }
        }

        return keys;
      })();
    }

    _startAutoCleanup() {
      var _this3 = this;

      var base;
      clearInterval(this.interval);
      return typeof (base = this.interval = setInterval(
      /*#__PURE__*/
      _asyncToGenerator(function* () {
        var e, k, ref, results, time, v;
        time = Date.now();
        ref = _this3.instances;
        results = [];

        for (k in ref) {
          v = ref[k];

          try {
            if (yield v._store.__groupCheck__(time)) {
              results.push(_this3.deleteKey(k));
            } else {
              results.push(void 0);
            }
          } catch (error) {
            e = error;
            results.push(v.Events.trigger("error", e));
          }
        }

        return results;
      }), this.timeout / 2)).unref === "function" ? base.unref() : void 0;
    }

    updateSettings(options = {}) {
      parser.overwrite(options, this.defaults, this);
      parser.overwrite(options, options, this.limiterOptions);

      if (options.timeout != null) {
        return this._startAutoCleanup();
      }
    }

    disconnect(flush = true) {
      var ref;

      if (!this.sharedConnection) {
        return (ref = this.connection) != null ? ref.disconnect(flush) : void 0;
      }
    }

  }

  ;
  Group.prototype.defaults = {
    timeout: 1000 * 60 * 5,
    connection: null,
    Promise: Promise,
    id: "group-key"
  };
  return Group;
}.call(void 0);

module.exports = Group;

/***/ }),

/***/ "./node_modules/bottleneck/lib/IORedisConnection.js":
/*!**********************************************************!*\
  !*** ./node_modules/bottleneck/lib/IORedisConnection.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Events, IORedisConnection, Scripts, parser;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
Events = __webpack_require__(/*! ./Events */ "./node_modules/bottleneck/lib/Events.js");
Scripts = __webpack_require__(/*! ./Scripts */ "./node_modules/bottleneck/lib/Scripts.js");

IORedisConnection = function () {
  class IORedisConnection {
    constructor(options = {}) {
      parser.load(options, this.defaults, this);

      if (this.Redis == null) {
        this.Redis = eval("require")("ioredis"); // Obfuscated or else Webpack/Angular will try to inline the optional ioredis module. To override this behavior: pass the ioredis module to Bottleneck as the 'Redis' option.
      }

      if (this.Events == null) {
        this.Events = new Events(this);
      }

      this.terminated = false;

      if (this.clusterNodes != null) {
        this.client = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
        this.subscriber = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
      } else if (this.client != null && this.client.duplicate == null) {
        this.subscriber = new this.Redis.Cluster(this.client.startupNodes, this.client.options);
      } else {
        if (this.client == null) {
          this.client = new this.Redis(this.clientOptions);
        }

        this.subscriber = this.client.duplicate();
      }

      this.limiters = {};
      this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
        this._loadScripts();

        return {
          client: this.client,
          subscriber: this.subscriber
        };
      });
    }

    _setup(client, sub) {
      client.setMaxListeners(0);
      return new this.Promise((resolve, reject) => {
        client.on("error", e => {
          return this.Events.trigger("error", e);
        });

        if (sub) {
          client.on("message", (channel, message) => {
            var ref;
            return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : void 0;
          });
        }

        if (client.status === "ready") {
          return resolve();
        } else {
          return client.once("ready", resolve);
        }
      });
    }

    _loadScripts() {
      return Scripts.names.forEach(name => {
        return this.client.defineCommand(name, {
          lua: Scripts.payload(name)
        });
      });
    }

    __runCommand__(cmd) {
      var _this = this;

      return _asyncToGenerator(function* () {
        var _, deleted;

        yield _this.ready;

        var _ref = yield _this.client.pipeline([cmd]).exec();

        var _ref2 = _slicedToArray(_ref, 1);

        var _ref2$ = _slicedToArray(_ref2[0], 2);

        _ = _ref2$[0];
        deleted = _ref2$[1];
        return deleted;
      })();
    }

    __addLimiter__(instance) {
      return this.Promise.all([instance.channel(), instance.channel_client()].map(channel => {
        return new this.Promise((resolve, reject) => {
          return this.subscriber.subscribe(channel, () => {
            this.limiters[channel] = instance;
            return resolve();
          });
        });
      }));
    }

    __removeLimiter__(instance) {
      var _this2 = this;

      return [instance.channel(), instance.channel_client()].forEach(
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(function* (channel) {
          if (!_this2.terminated) {
            yield _this2.subscriber.unsubscribe(channel);
          }

          return delete _this2.limiters[channel];
        });

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    __scriptArgs__(name, id, args, cb) {
      var keys;
      keys = Scripts.keys(name, id);
      return [keys.length].concat(keys, args, cb);
    }

    __scriptFn__(name) {
      return this.client[name].bind(this.client);
    }

    disconnect(flush = true) {
      var i, k, len, ref;
      ref = Object.keys(this.limiters);

      for (i = 0, len = ref.length; i < len; i++) {
        k = ref[i];
        clearInterval(this.limiters[k]._store.heartbeat);
      }

      this.limiters = {};
      this.terminated = true;

      if (flush) {
        return this.Promise.all([this.client.quit(), this.subscriber.quit()]);
      } else {
        this.client.disconnect();
        this.subscriber.disconnect();
        return this.Promise.resolve();
      }
    }

  }

  ;
  IORedisConnection.prototype.datastore = "ioredis";
  IORedisConnection.prototype.defaults = {
    Redis: null,
    clientOptions: {},
    clusterNodes: null,
    client: null,
    Promise: Promise,
    Events: null
  };
  return IORedisConnection;
}.call(void 0);

module.exports = IORedisConnection;

/***/ }),

/***/ "./node_modules/bottleneck/lib/Job.js":
/*!********************************************!*\
  !*** ./node_modules/bottleneck/lib/Job.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BottleneckError, DEFAULT_PRIORITY, Job, NUM_PRIORITIES, parser;
NUM_PRIORITIES = 10;
DEFAULT_PRIORITY = 5;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
BottleneckError = __webpack_require__(/*! ./BottleneckError */ "./node_modules/bottleneck/lib/BottleneckError.js");
Job = class Job {
  constructor(task, args, options, jobDefaults, rejectOnDrop, Events, _states, Promise) {
    this.task = task;
    this.args = args;
    this.rejectOnDrop = rejectOnDrop;
    this.Events = Events;
    this._states = _states;
    this.Promise = Promise;
    this.options = parser.load(options, jobDefaults);
    this.options.priority = this._sanitizePriority(this.options.priority);

    if (this.options.id === jobDefaults.id) {
      this.options.id = `${this.options.id}-${this._randomIndex()}`;
    }

    this.promise = new this.Promise((_resolve, _reject) => {
      this._resolve = _resolve;
      this._reject = _reject;
    });
    this.retryCount = 0;
  }

  _sanitizePriority(priority) {
    var sProperty;
    sProperty = ~~priority !== priority ? DEFAULT_PRIORITY : priority;

    if (sProperty < 0) {
      return 0;
    } else if (sProperty > NUM_PRIORITIES - 1) {
      return NUM_PRIORITIES - 1;
    } else {
      return sProperty;
    }
  }

  _randomIndex() {
    return Math.random().toString(36).slice(2);
  }

  doDrop({
    error,
    message = "This job has been dropped by Bottleneck"
  } = {}) {
    if (this._states.remove(this.options.id)) {
      if (this.rejectOnDrop) {
        this._reject(error != null ? error : new BottleneckError(message));
      }

      this.Events.trigger("dropped", {
        args: this.args,
        options: this.options,
        task: this.task,
        promise: this.promise
      });
      return true;
    } else {
      return false;
    }
  }

  _assertStatus(expected) {
    var status;
    status = this._states.jobStatus(this.options.id);

    if (!(status === expected || expected === "DONE" && status === null)) {
      throw new BottleneckError(`Invalid job status ${status}, expected ${expected}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
    }
  }

  doReceive() {
    this._states.start(this.options.id);

    return this.Events.trigger("received", {
      args: this.args,
      options: this.options
    });
  }

  doQueue(reachedHWM, blocked) {
    this._assertStatus("RECEIVED");

    this._states.next(this.options.id);

    return this.Events.trigger("queued", {
      args: this.args,
      options: this.options,
      reachedHWM,
      blocked
    });
  }

  doRun() {
    if (this.retryCount === 0) {
      this._assertStatus("QUEUED");

      this._states.next(this.options.id);
    } else {
      this._assertStatus("EXECUTING");
    }

    return this.Events.trigger("scheduled", {
      args: this.args,
      options: this.options
    });
  }

  doExecute(chained, clearGlobalState, run, free) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var error, eventInfo, passed;

      if (_this.retryCount === 0) {
        _this._assertStatus("RUNNING");

        _this._states.next(_this.options.id);
      } else {
        _this._assertStatus("EXECUTING");
      }

      eventInfo = {
        args: _this.args,
        options: _this.options,
        retryCount: _this.retryCount
      };

      _this.Events.trigger("executing", eventInfo);

      try {
        passed = yield chained != null ? chained.schedule(_this.options, _this.task, ..._this.args) : _this.task(..._this.args);

        if (clearGlobalState()) {
          _this.doDone(eventInfo);

          yield free(_this.options, eventInfo);

          _this._assertStatus("DONE");

          return _this._resolve(passed);
        }
      } catch (error1) {
        error = error1;
        return _this._onFailure(error, eventInfo, clearGlobalState, run, free);
      }
    })();
  }

  doExpire(clearGlobalState, run, free) {
    var error, eventInfo;

    if (this._states.jobStatus(this.options.id === "RUNNING")) {
      this._states.next(this.options.id);
    }

    this._assertStatus("EXECUTING");

    eventInfo = {
      args: this.args,
      options: this.options,
      retryCount: this.retryCount
    };
    error = new BottleneckError(`This job timed out after ${this.options.expiration} ms.`);
    return this._onFailure(error, eventInfo, clearGlobalState, run, free);
  }

  _onFailure(error, eventInfo, clearGlobalState, run, free) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      var retry, retryAfter;

      if (clearGlobalState()) {
        retry = yield _this2.Events.trigger("failed", error, eventInfo);

        if (retry != null) {
          retryAfter = ~~retry;

          _this2.Events.trigger("retry", `Retrying ${_this2.options.id} after ${retryAfter} ms`, eventInfo);

          _this2.retryCount++;
          return run(retryAfter);
        } else {
          _this2.doDone(eventInfo);

          yield free(_this2.options, eventInfo);

          _this2._assertStatus("DONE");

          return _this2._reject(error);
        }
      }
    })();
  }

  doDone(eventInfo) {
    this._assertStatus("EXECUTING");

    this._states.next(this.options.id);

    return this.Events.trigger("done", eventInfo);
  }

};
module.exports = Job;

/***/ }),

/***/ "./node_modules/bottleneck/lib/LocalDatastore.js":
/*!*******************************************************!*\
  !*** ./node_modules/bottleneck/lib/LocalDatastore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BottleneckError, LocalDatastore, parser;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
BottleneckError = __webpack_require__(/*! ./BottleneckError */ "./node_modules/bottleneck/lib/BottleneckError.js");
LocalDatastore = class LocalDatastore {
  constructor(instance, storeOptions, storeInstanceOptions) {
    this.instance = instance;
    this.storeOptions = storeOptions;
    this.clientId = this.instance._randomIndex();
    parser.load(storeInstanceOptions, storeInstanceOptions, this);
    this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now();
    this._running = 0;
    this._done = 0;
    this._unblockTime = 0;
    this.ready = this.Promise.resolve();
    this.clients = {};

    this._startHeartbeat();
  }

  _startHeartbeat() {
    var base;

    if (this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null)) {
      return typeof (base = this.heartbeat = setInterval(() => {
        var amount, incr, maximum, now, reservoir;
        now = Date.now();

        if (this.storeOptions.reservoirRefreshInterval != null && now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval) {
          this._lastReservoirRefresh = now;
          this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;

          this.instance._drainAll(this.computeCapacity());
        }

        if (this.storeOptions.reservoirIncreaseInterval != null && now >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval) {
          var _this$storeOptions = this.storeOptions;
          amount = _this$storeOptions.reservoirIncreaseAmount;
          maximum = _this$storeOptions.reservoirIncreaseMaximum;
          reservoir = _this$storeOptions.reservoir;
          this._lastReservoirIncrease = now;
          incr = maximum != null ? Math.min(amount, maximum - reservoir) : amount;

          if (incr > 0) {
            this.storeOptions.reservoir += incr;
            return this.instance._drainAll(this.computeCapacity());
          }
        }
      }, this.heartbeatInterval)).unref === "function" ? base.unref() : void 0;
    } else {
      return clearInterval(this.heartbeat);
    }
  }

  __publish__(message) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this.yieldLoop();
      return _this.instance.Events.trigger("message", message.toString());
    })();
  }

  __disconnect__(flush) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      yield _this2.yieldLoop();
      clearInterval(_this2.heartbeat);
      return _this2.Promise.resolve();
    })();
  }

  yieldLoop(t = 0) {
    return new this.Promise(function (resolve, reject) {
      return setTimeout(resolve, t);
    });
  }

  computePenalty() {
    var ref;
    return (ref = this.storeOptions.penalty) != null ? ref : 15 * this.storeOptions.minTime || 5000;
  }

  __updateSettings__(options) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield _this3.yieldLoop();
      parser.overwrite(options, options, _this3.storeOptions);

      _this3._startHeartbeat();

      _this3.instance._drainAll(_this3.computeCapacity());

      return true;
    })();
  }

  __running__() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      yield _this4.yieldLoop();
      return _this4._running;
    })();
  }

  __queued__() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      yield _this5.yieldLoop();
      return _this5.instance.queued();
    })();
  }

  __done__() {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      yield _this6.yieldLoop();
      return _this6._done;
    })();
  }

  __groupCheck__(time) {
    var _this7 = this;

    return _asyncToGenerator(function* () {
      yield _this7.yieldLoop();
      return _this7._nextRequest + _this7.timeout < time;
    })();
  }

  computeCapacity() {
    var maxConcurrent, reservoir;
    var _this$storeOptions2 = this.storeOptions;
    maxConcurrent = _this$storeOptions2.maxConcurrent;
    reservoir = _this$storeOptions2.reservoir;

    if (maxConcurrent != null && reservoir != null) {
      return Math.min(maxConcurrent - this._running, reservoir);
    } else if (maxConcurrent != null) {
      return maxConcurrent - this._running;
    } else if (reservoir != null) {
      return reservoir;
    } else {
      return null;
    }
  }

  conditionsCheck(weight) {
    var capacity;
    capacity = this.computeCapacity();
    return capacity == null || weight <= capacity;
  }

  __incrementReservoir__(incr) {
    var _this8 = this;

    return _asyncToGenerator(function* () {
      var reservoir;
      yield _this8.yieldLoop();
      reservoir = _this8.storeOptions.reservoir += incr;

      _this8.instance._drainAll(_this8.computeCapacity());

      return reservoir;
    })();
  }

  __currentReservoir__() {
    var _this9 = this;

    return _asyncToGenerator(function* () {
      yield _this9.yieldLoop();
      return _this9.storeOptions.reservoir;
    })();
  }

  isBlocked(now) {
    return this._unblockTime >= now;
  }

  check(weight, now) {
    return this.conditionsCheck(weight) && this._nextRequest - now <= 0;
  }

  __check__(weight) {
    var _this10 = this;

    return _asyncToGenerator(function* () {
      var now;
      yield _this10.yieldLoop();
      now = Date.now();
      return _this10.check(weight, now);
    })();
  }

  __register__(index, weight, expiration) {
    var _this11 = this;

    return _asyncToGenerator(function* () {
      var now, wait;
      yield _this11.yieldLoop();
      now = Date.now();

      if (_this11.conditionsCheck(weight)) {
        _this11._running += weight;

        if (_this11.storeOptions.reservoir != null) {
          _this11.storeOptions.reservoir -= weight;
        }

        wait = Math.max(_this11._nextRequest - now, 0);
        _this11._nextRequest = now + wait + _this11.storeOptions.minTime;
        return {
          success: true,
          wait,
          reservoir: _this11.storeOptions.reservoir
        };
      } else {
        return {
          success: false
        };
      }
    })();
  }

  strategyIsBlock() {
    return this.storeOptions.strategy === 3;
  }

  __submit__(queueLength, weight) {
    var _this12 = this;

    return _asyncToGenerator(function* () {
      var blocked, now, reachedHWM;
      yield _this12.yieldLoop();

      if (_this12.storeOptions.maxConcurrent != null && weight > _this12.storeOptions.maxConcurrent) {
        throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${_this12.storeOptions.maxConcurrent}`);
      }

      now = Date.now();
      reachedHWM = _this12.storeOptions.highWater != null && queueLength === _this12.storeOptions.highWater && !_this12.check(weight, now);
      blocked = _this12.strategyIsBlock() && (reachedHWM || _this12.isBlocked(now));

      if (blocked) {
        _this12._unblockTime = now + _this12.computePenalty();
        _this12._nextRequest = _this12._unblockTime + _this12.storeOptions.minTime;

        _this12.instance._dropAllQueued();
      }

      return {
        reachedHWM,
        blocked,
        strategy: _this12.storeOptions.strategy
      };
    })();
  }

  __free__(index, weight) {
    var _this13 = this;

    return _asyncToGenerator(function* () {
      yield _this13.yieldLoop();
      _this13._running -= weight;
      _this13._done += weight;

      _this13.instance._drainAll(_this13.computeCapacity());

      return {
        running: _this13._running
      };
    })();
  }

};
module.exports = LocalDatastore;

/***/ }),

/***/ "./node_modules/bottleneck/lib/Queues.js":
/*!***********************************************!*\
  !*** ./node_modules/bottleneck/lib/Queues.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DLList, Events, Queues;
DLList = __webpack_require__(/*! ./DLList */ "./node_modules/bottleneck/lib/DLList.js");
Events = __webpack_require__(/*! ./Events */ "./node_modules/bottleneck/lib/Events.js");
Queues = class Queues {
  constructor(num_priorities) {
    var i;
    this.Events = new Events(this);
    this._length = 0;

    this._lists = function () {
      var j, ref, results;
      results = [];

      for (i = j = 1, ref = num_priorities; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        results.push(new DLList(() => {
          return this.incr();
        }, () => {
          return this.decr();
        }));
      }

      return results;
    }.call(this);
  }

  incr() {
    if (this._length++ === 0) {
      return this.Events.trigger("leftzero");
    }
  }

  decr() {
    if (--this._length === 0) {
      return this.Events.trigger("zero");
    }
  }

  push(job) {
    return this._lists[job.options.priority].push(job);
  }

  queued(priority) {
    if (priority != null) {
      return this._lists[priority].length;
    } else {
      return this._length;
    }
  }

  shiftAll(fn) {
    return this._lists.forEach(function (list) {
      return list.forEachShift(fn);
    });
  }

  getFirst(arr = this._lists) {
    var j, len, list;

    for (j = 0, len = arr.length; j < len; j++) {
      list = arr[j];

      if (list.length > 0) {
        return list;
      }
    }

    return [];
  }

  shiftLastFrom(priority) {
    return this.getFirst(this._lists.slice(priority).reverse()).shift();
  }

};
module.exports = Queues;

/***/ }),

/***/ "./node_modules/bottleneck/lib/RedisConnection.js":
/*!********************************************************!*\
  !*** ./node_modules/bottleneck/lib/RedisConnection.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Events, RedisConnection, Scripts, parser;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
Events = __webpack_require__(/*! ./Events */ "./node_modules/bottleneck/lib/Events.js");
Scripts = __webpack_require__(/*! ./Scripts */ "./node_modules/bottleneck/lib/Scripts.js");

RedisConnection = function () {
  class RedisConnection {
    constructor(options = {}) {
      parser.load(options, this.defaults, this);

      if (this.Redis == null) {
        this.Redis = eval("require")("redis"); // Obfuscated or else Webpack/Angular will try to inline the optional redis module. To override this behavior: pass the redis module to Bottleneck as the 'Redis' option.
      }

      if (this.Events == null) {
        this.Events = new Events(this);
      }

      this.terminated = false;

      if (this.client == null) {
        this.client = this.Redis.createClient(this.clientOptions);
      }

      this.subscriber = this.client.duplicate();
      this.limiters = {};
      this.shas = {};
      this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
        return this._loadScripts();
      }).then(() => {
        return {
          client: this.client,
          subscriber: this.subscriber
        };
      });
    }

    _setup(client, sub) {
      client.setMaxListeners(0);
      return new this.Promise((resolve, reject) => {
        client.on("error", e => {
          return this.Events.trigger("error", e);
        });

        if (sub) {
          client.on("message", (channel, message) => {
            var ref;
            return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : void 0;
          });
        }

        if (client.ready) {
          return resolve();
        } else {
          return client.once("ready", resolve);
        }
      });
    }

    _loadScript(name) {
      return new this.Promise((resolve, reject) => {
        var payload;
        payload = Scripts.payload(name);
        return this.client.multi([["script", "load", payload]]).exec((err, replies) => {
          if (err != null) {
            return reject(err);
          }

          this.shas[name] = replies[0];
          return resolve(replies[0]);
        });
      });
    }

    _loadScripts() {
      return this.Promise.all(Scripts.names.map(k => {
        return this._loadScript(k);
      }));
    }

    __runCommand__(cmd) {
      var _this = this;

      return _asyncToGenerator(function* () {
        yield _this.ready;
        return new _this.Promise((resolve, reject) => {
          return _this.client.multi([cmd]).exec_atomic(function (err, replies) {
            if (err != null) {
              return reject(err);
            } else {
              return resolve(replies[0]);
            }
          });
        });
      })();
    }

    __addLimiter__(instance) {
      return this.Promise.all([instance.channel(), instance.channel_client()].map(channel => {
        return new this.Promise((resolve, reject) => {
          var handler;

          handler = chan => {
            if (chan === channel) {
              this.subscriber.removeListener("subscribe", handler);
              this.limiters[channel] = instance;
              return resolve();
            }
          };

          this.subscriber.on("subscribe", handler);
          return this.subscriber.subscribe(channel);
        });
      }));
    }

    __removeLimiter__(instance) {
      var _this2 = this;

      return this.Promise.all([instance.channel(), instance.channel_client()].map(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* (channel) {
          if (!_this2.terminated) {
            yield new _this2.Promise((resolve, reject) => {
              return _this2.subscriber.unsubscribe(channel, function (err, chan) {
                if (err != null) {
                  return reject(err);
                }

                if (chan === channel) {
                  return resolve();
                }
              });
            });
          }

          return delete _this2.limiters[channel];
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    }

    __scriptArgs__(name, id, args, cb) {
      var keys;
      keys = Scripts.keys(name, id);
      return [this.shas[name], keys.length].concat(keys, args, cb);
    }

    __scriptFn__(name) {
      return this.client.evalsha.bind(this.client);
    }

    disconnect(flush = true) {
      var i, k, len, ref;
      ref = Object.keys(this.limiters);

      for (i = 0, len = ref.length; i < len; i++) {
        k = ref[i];
        clearInterval(this.limiters[k]._store.heartbeat);
      }

      this.limiters = {};
      this.terminated = true;
      this.client.end(flush);
      this.subscriber.end(flush);
      return this.Promise.resolve();
    }

  }

  ;
  RedisConnection.prototype.datastore = "redis";
  RedisConnection.prototype.defaults = {
    Redis: null,
    clientOptions: {},
    client: null,
    Promise: Promise,
    Events: null
  };
  return RedisConnection;
}.call(void 0);

module.exports = RedisConnection;

/***/ }),

/***/ "./node_modules/bottleneck/lib/RedisDatastore.js":
/*!*******************************************************!*\
  !*** ./node_modules/bottleneck/lib/RedisDatastore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BottleneckError, IORedisConnection, RedisConnection, RedisDatastore, parser;
parser = __webpack_require__(/*! ./parser */ "./node_modules/bottleneck/lib/parser.js");
BottleneckError = __webpack_require__(/*! ./BottleneckError */ "./node_modules/bottleneck/lib/BottleneckError.js");
RedisConnection = __webpack_require__(/*! ./RedisConnection */ "./node_modules/bottleneck/lib/RedisConnection.js");
IORedisConnection = __webpack_require__(/*! ./IORedisConnection */ "./node_modules/bottleneck/lib/IORedisConnection.js");
RedisDatastore = class RedisDatastore {
  constructor(instance, storeOptions, storeInstanceOptions) {
    this.instance = instance;
    this.storeOptions = storeOptions;
    this.originalId = this.instance.id;
    this.clientId = this.instance._randomIndex();
    parser.load(storeInstanceOptions, storeInstanceOptions, this);
    this.clients = {};
    this.capacityPriorityCounters = {};
    this.sharedConnection = this.connection != null;

    if (this.connection == null) {
      this.connection = this.instance.datastore === "redis" ? new RedisConnection({
        Redis: this.Redis,
        clientOptions: this.clientOptions,
        Promise: this.Promise,
        Events: this.instance.Events
      }) : this.instance.datastore === "ioredis" ? new IORedisConnection({
        Redis: this.Redis,
        clientOptions: this.clientOptions,
        clusterNodes: this.clusterNodes,
        Promise: this.Promise,
        Events: this.instance.Events
      }) : void 0;
    }

    this.instance.connection = this.connection;
    this.instance.datastore = this.connection.datastore;
    this.ready = this.connection.ready.then(clients => {
      this.clients = clients;
      return this.runScript("init", this.prepareInitSettings(this.clearDatastore));
    }).then(() => {
      return this.connection.__addLimiter__(this.instance);
    }).then(() => {
      return this.runScript("register_client", [this.instance.queued()]);
    }).then(() => {
      var base;

      if (typeof (base = this.heartbeat = setInterval(() => {
        return this.runScript("heartbeat", []).catch(e => {
          return this.instance.Events.trigger("error", e);
        });
      }, this.heartbeatInterval)).unref === "function") {
        base.unref();
      }

      return this.clients;
    });
  }

  __publish__(message) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var client;

      var _ref = yield _this.ready;

      client = _ref.client;
      return client.publish(_this.instance.channel(), `message:${message.toString()}`);
    })();
  }

  onMessage(channel, message) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      var capacity, counter, data, drained, e, newCapacity, pos, priorityClient, rawCapacity, type;

      try {
        pos = message.indexOf(":");
        var _ref2 = [message.slice(0, pos), message.slice(pos + 1)];
        type = _ref2[0];
        data = _ref2[1];

        if (type === "capacity") {
          return yield _this2.instance._drainAll(data.length > 0 ? ~~data : void 0);
        } else if (type === "capacity-priority") {
          var _data$split = data.split(":");

          var _data$split2 = _slicedToArray(_data$split, 3);

          rawCapacity = _data$split2[0];
          priorityClient = _data$split2[1];
          counter = _data$split2[2];
          capacity = rawCapacity.length > 0 ? ~~rawCapacity : void 0;

          if (priorityClient === _this2.clientId) {
            drained = yield _this2.instance._drainAll(capacity);
            newCapacity = capacity != null ? capacity - (drained || 0) : "";
            return yield _this2.clients.client.publish(_this2.instance.channel(), `capacity-priority:${newCapacity}::${counter}`);
          } else if (priorityClient === "") {
            clearTimeout(_this2.capacityPriorityCounters[counter]);
            delete _this2.capacityPriorityCounters[counter];
            return _this2.instance._drainAll(capacity);
          } else {
            return _this2.capacityPriorityCounters[counter] = setTimeout(
            /*#__PURE__*/
            _asyncToGenerator(function* () {
              var e;

              try {
                delete _this2.capacityPriorityCounters[counter];
                yield _this2.runScript("blacklist_client", [priorityClient]);
                return yield _this2.instance._drainAll(capacity);
              } catch (error) {
                e = error;
                return _this2.instance.Events.trigger("error", e);
              }
            }), 1000);
          }
        } else if (type === "message") {
          return _this2.instance.Events.trigger("message", data);
        } else if (type === "blocked") {
          return yield _this2.instance._dropAllQueued();
        }
      } catch (error) {
        e = error;
        return _this2.instance.Events.trigger("error", e);
      }
    })();
  }

  __disconnect__(flush) {
    clearInterval(this.heartbeat);

    if (this.sharedConnection) {
      return this.connection.__removeLimiter__(this.instance);
    } else {
      return this.connection.disconnect(flush);
    }
  }

  runScript(name, args) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      if (!(name === "init" || name === "register_client")) {
        yield _this3.ready;
      }

      return new _this3.Promise((resolve, reject) => {
        var all_args, arr;
        all_args = [Date.now(), _this3.clientId].concat(args);

        _this3.instance.Events.trigger("debug", `Calling Redis script: ${name}.lua`, all_args);

        arr = _this3.connection.__scriptArgs__(name, _this3.originalId, all_args, function (err, replies) {
          if (err != null) {
            return reject(err);
          }

          return resolve(replies);
        });
        return _this3.connection.__scriptFn__(name)(...arr);
      }).catch(e => {
        if (e.message === "SETTINGS_KEY_NOT_FOUND") {
          if (name === "heartbeat") {
            return _this3.Promise.resolve();
          } else {
            return _this3.runScript("init", _this3.prepareInitSettings(false)).then(() => {
              return _this3.runScript(name, args);
            });
          }
        } else if (e.message === "UNKNOWN_CLIENT") {
          return _this3.runScript("register_client", [_this3.instance.queued()]).then(() => {
            return _this3.runScript(name, args);
          });
        } else {
          return _this3.Promise.reject(e);
        }
      });
    })();
  }

  prepareArray(arr) {
    var i, len, results, x;
    results = [];

    for (i = 0, len = arr.length; i < len; i++) {
      x = arr[i];
      results.push(x != null ? x.toString() : "");
    }

    return results;
  }

  prepareObject(obj) {
    var arr, k, v;
    arr = [];

    for (k in obj) {
      v = obj[k];
      arr.push(k, v != null ? v.toString() : "");
    }

    return arr;
  }

  prepareInitSettings(clear) {
    var args;
    args = this.prepareObject(Object.assign({}, this.storeOptions, {
      id: this.originalId,
      version: this.instance.version,
      groupTimeout: this.timeout,
      clientTimeout: this.clientTimeout
    }));
    args.unshift(clear ? 1 : 0, this.instance.version);
    return args;
  }

  convertBool(b) {
    return !!b;
  }

  __updateSettings__(options) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      yield _this4.runScript("update_settings", _this4.prepareObject(options));
      return parser.overwrite(options, options, _this4.storeOptions);
    })();
  }

  __running__() {
    return this.runScript("running", []);
  }

  __queued__() {
    return this.runScript("queued", []);
  }

  __done__() {
    return this.runScript("done", []);
  }

  __groupCheck__() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      return _this5.convertBool((yield _this5.runScript("group_check", [])));
    })();
  }

  __incrementReservoir__(incr) {
    return this.runScript("increment_reservoir", [incr]);
  }

  __currentReservoir__() {
    return this.runScript("current_reservoir", []);
  }

  __check__(weight) {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      return _this6.convertBool((yield _this6.runScript("check", _this6.prepareArray([weight]))));
    })();
  }

  __register__(index, weight, expiration) {
    var _this7 = this;

    return _asyncToGenerator(function* () {
      var reservoir, success, wait;

      var _ref4 = yield _this7.runScript("register", _this7.prepareArray([index, weight, expiration]));

      var _ref5 = _slicedToArray(_ref4, 3);

      success = _ref5[0];
      wait = _ref5[1];
      reservoir = _ref5[2];
      return {
        success: _this7.convertBool(success),
        wait,
        reservoir
      };
    })();
  }

  __submit__(queueLength, weight) {
    var _this8 = this;

    return _asyncToGenerator(function* () {
      var blocked, e, maxConcurrent, overweight, reachedHWM, strategy;

      try {
        var _ref6 = yield _this8.runScript("submit", _this8.prepareArray([queueLength, weight]));

        var _ref7 = _slicedToArray(_ref6, 3);

        reachedHWM = _ref7[0];
        blocked = _ref7[1];
        strategy = _ref7[2];
        return {
          reachedHWM: _this8.convertBool(reachedHWM),
          blocked: _this8.convertBool(blocked),
          strategy
        };
      } catch (error) {
        e = error;

        if (e.message.indexOf("OVERWEIGHT") === 0) {
          var _e$message$split = e.message.split(":");

          var _e$message$split2 = _slicedToArray(_e$message$split, 3);

          overweight = _e$message$split2[0];
          weight = _e$message$split2[1];
          maxConcurrent = _e$message$split2[2];
          throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${maxConcurrent}`);
        } else {
          throw e;
        }
      }
    })();
  }

  __free__(index, weight) {
    var _this9 = this;

    return _asyncToGenerator(function* () {
      var running;
      running = yield _this9.runScript("free", _this9.prepareArray([index]));
      return {
        running
      };
    })();
  }

};
module.exports = RedisDatastore;

/***/ }),

/***/ "./node_modules/bottleneck/lib/Scripts.js":
/*!************************************************!*\
  !*** ./node_modules/bottleneck/lib/Scripts.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var headers, lua, templates;
lua = __webpack_require__(/*! ./lua.json */ "./node_modules/bottleneck/lib/lua.json");
headers = {
  refs: lua["refs.lua"],
  validate_keys: lua["validate_keys.lua"],
  validate_client: lua["validate_client.lua"],
  refresh_expiration: lua["refresh_expiration.lua"],
  process_tick: lua["process_tick.lua"],
  conditions_check: lua["conditions_check.lua"],
  get_time: lua["get_time.lua"]
};

exports.allKeys = function (id) {
  return [
  /*
  HASH
  */
  `b_${id}_settings`,
  /*
  HASH
  job index -> weight
  */
  `b_${id}_job_weights`,
  /*
  ZSET
  job index -> expiration
  */
  `b_${id}_job_expirations`,
  /*
  HASH
  job index -> client
  */
  `b_${id}_job_clients`,
  /*
  ZSET
  client -> sum running
  */
  `b_${id}_client_running`,
  /*
  HASH
  client -> num queued
  */
  `b_${id}_client_num_queued`,
  /*
  ZSET
  client -> last job registered
  */
  `b_${id}_client_last_registered`,
  /*
  ZSET
  client -> last seen
  */
  `b_${id}_client_last_seen`];
};

templates = {
  init: {
    keys: exports.allKeys,
    headers: ["process_tick"],
    refresh_expiration: true,
    code: lua["init.lua"]
  },
  group_check: {
    keys: exports.allKeys,
    headers: [],
    refresh_expiration: false,
    code: lua["group_check.lua"]
  },
  register_client: {
    keys: exports.allKeys,
    headers: ["validate_keys"],
    refresh_expiration: false,
    code: lua["register_client.lua"]
  },
  blacklist_client: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client"],
    refresh_expiration: false,
    code: lua["blacklist_client.lua"]
  },
  heartbeat: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick"],
    refresh_expiration: false,
    code: lua["heartbeat.lua"]
  },
  update_settings: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick"],
    refresh_expiration: true,
    code: lua["update_settings.lua"]
  },
  running: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick"],
    refresh_expiration: false,
    code: lua["running.lua"]
  },
  queued: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client"],
    refresh_expiration: false,
    code: lua["queued.lua"]
  },
  done: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick"],
    refresh_expiration: false,
    code: lua["done.lua"]
  },
  check: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick", "conditions_check"],
    refresh_expiration: false,
    code: lua["check.lua"]
  },
  submit: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick", "conditions_check"],
    refresh_expiration: true,
    code: lua["submit.lua"]
  },
  register: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick", "conditions_check"],
    refresh_expiration: true,
    code: lua["register.lua"]
  },
  free: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick"],
    refresh_expiration: true,
    code: lua["free.lua"]
  },
  current_reservoir: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick"],
    refresh_expiration: false,
    code: lua["current_reservoir.lua"]
  },
  increment_reservoir: {
    keys: exports.allKeys,
    headers: ["validate_keys", "validate_client", "process_tick"],
    refresh_expiration: true,
    code: lua["increment_reservoir.lua"]
  }
};
exports.names = Object.keys(templates);

exports.keys = function (name, id) {
  return templates[name].keys(id);
};

exports.payload = function (name) {
  var template;
  template = templates[name];
  return Array.prototype.concat(headers.refs, template.headers.map(function (h) {
    return headers[h];
  }), template.refresh_expiration ? headers.refresh_expiration : "", template.code).join("\n");
};

/***/ }),

/***/ "./node_modules/bottleneck/lib/States.js":
/*!***********************************************!*\
  !*** ./node_modules/bottleneck/lib/States.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BottleneckError, States;
BottleneckError = __webpack_require__(/*! ./BottleneckError */ "./node_modules/bottleneck/lib/BottleneckError.js");
States = class States {
  constructor(status1) {
    this.status = status1;
    this._jobs = {};
    this.counts = this.status.map(function () {
      return 0;
    });
  }

  next(id) {
    var current, next;
    current = this._jobs[id];
    next = current + 1;

    if (current != null && next < this.status.length) {
      this.counts[current]--;
      this.counts[next]++;
      return this._jobs[id]++;
    } else if (current != null) {
      this.counts[current]--;
      return delete this._jobs[id];
    }
  }

  start(id) {
    var initial;
    initial = 0;
    this._jobs[id] = initial;
    return this.counts[initial]++;
  }

  remove(id) {
    var current;
    current = this._jobs[id];

    if (current != null) {
      this.counts[current]--;
      delete this._jobs[id];
    }

    return current != null;
  }

  jobStatus(id) {
    var ref;
    return (ref = this.status[this._jobs[id]]) != null ? ref : null;
  }

  statusJobs(status) {
    var k, pos, ref, results, v;

    if (status != null) {
      pos = this.status.indexOf(status);

      if (pos < 0) {
        throw new BottleneckError(`status must be one of ${this.status.join(', ')}`);
      }

      ref = this._jobs;
      results = [];

      for (k in ref) {
        v = ref[k];

        if (v === pos) {
          results.push(k);
        }
      }

      return results;
    } else {
      return Object.keys(this._jobs);
    }
  }

  statusCounts() {
    return this.counts.reduce((acc, v, i) => {
      acc[this.status[i]] = v;
      return acc;
    }, {});
  }

};
module.exports = States;

/***/ }),

/***/ "./node_modules/bottleneck/lib/Sync.js":
/*!*********************************************!*\
  !*** ./node_modules/bottleneck/lib/Sync.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DLList, Sync;
DLList = __webpack_require__(/*! ./DLList */ "./node_modules/bottleneck/lib/DLList.js");
Sync = class Sync {
  constructor(name, Promise) {
    this.schedule = this.schedule.bind(this);
    this.name = name;
    this.Promise = Promise;
    this._running = 0;
    this._queue = new DLList();
  }

  isEmpty() {
    return this._queue.length === 0;
  }

  _tryToRun() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var args, cb, error, reject, resolve, returned, task;

      if (_this._running < 1 && _this._queue.length > 0) {
        _this._running++;

        var _this$_queue$shift = _this._queue.shift();

        task = _this$_queue$shift.task;
        args = _this$_queue$shift.args;
        resolve = _this$_queue$shift.resolve;
        reject = _this$_queue$shift.reject;
        cb = yield _asyncToGenerator(function* () {
          try {
            returned = yield task(...args);
            return function () {
              return resolve(returned);
            };
          } catch (error1) {
            error = error1;
            return function () {
              return reject(error);
            };
          }
        })();
        _this._running--;

        _this._tryToRun();

        return cb();
      }
    })();
  }

  schedule(task, ...args) {
    var promise, reject, resolve;
    resolve = reject = null;
    promise = new this.Promise(function (_resolve, _reject) {
      resolve = _resolve;
      return reject = _reject;
    });

    this._queue.push({
      task,
      args,
      resolve,
      reject
    });

    this._tryToRun();

    return promise;
  }

};
module.exports = Sync;

/***/ }),

/***/ "./node_modules/bottleneck/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/bottleneck/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./Bottleneck */ "./node_modules/bottleneck/lib/Bottleneck.js");

/***/ }),

/***/ "./node_modules/bottleneck/lib/lua.json":
/*!**********************************************!*\
  !*** ./node_modules/bottleneck/lib/lua.json ***!
  \**********************************************/
/*! exports provided: blacklist_client.lua, check.lua, conditions_check.lua, current_reservoir.lua, done.lua, free.lua, get_time.lua, group_check.lua, heartbeat.lua, increment_reservoir.lua, init.lua, process_tick.lua, queued.lua, refresh_expiration.lua, refs.lua, register.lua, register_client.lua, running.lua, submit.lua, update_settings.lua, validate_client.lua, validate_keys.lua, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"blacklist_client.lua\":\"local blacklist = ARGV[num_static_argv + 1]\\n\\nif redis.call('zscore', client_last_seen_key, blacklist) then\\n  redis.call('zadd', client_last_seen_key, 0, blacklist)\\nend\\n\\n\\nreturn {}\\n\",\"check.lua\":\"local weight = tonumber(ARGV[num_static_argv + 1])\\n\\nlocal capacity = process_tick(now, false)['capacity']\\nlocal nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))\\n\\nreturn conditions_check(capacity, weight) and nextRequest - now <= 0\\n\",\"conditions_check.lua\":\"local conditions_check = function (capacity, weight)\\n  return capacity == nil or weight <= capacity\\nend\\n\",\"current_reservoir.lua\":\"return process_tick(now, false)['reservoir']\\n\",\"done.lua\":\"process_tick(now, false)\\n\\nreturn tonumber(redis.call('hget', settings_key, 'done'))\\n\",\"free.lua\":\"local index = ARGV[num_static_argv + 1]\\n\\nredis.call('zadd', job_expirations_key, 0, index)\\n\\nreturn process_tick(now, false)['running']\\n\",\"get_time.lua\":\"redis.replicate_commands()\\n\\nlocal get_time = function ()\\n  local time = redis.call('time')\\n\\n  return tonumber(time[1]..string.sub(time[2], 1, 3))\\nend\\n\",\"group_check.lua\":\"return not (redis.call('exists', settings_key) == 1)\\n\",\"heartbeat.lua\":\"process_tick(now, true)\\n\",\"increment_reservoir.lua\":\"local incr = tonumber(ARGV[num_static_argv + 1])\\n\\nredis.call('hincrby', settings_key, 'reservoir', incr)\\n\\nlocal reservoir = process_tick(now, true)['reservoir']\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn reservoir\\n\",\"init.lua\":\"local clear = tonumber(ARGV[num_static_argv + 1])\\nlocal limiter_version = ARGV[num_static_argv + 2]\\nlocal num_local_argv = num_static_argv + 2\\n\\nif clear == 1 then\\n  redis.call('del', unpack(KEYS))\\nend\\n\\nif redis.call('exists', settings_key) == 0 then\\n  -- Create\\n  local args = {'hmset', settings_key}\\n\\n  for i = num_local_argv + 1, #ARGV do\\n    table.insert(args, ARGV[i])\\n  end\\n\\n  redis.call(unpack(args))\\n  redis.call('hmset', settings_key,\\n    'nextRequest', now,\\n    'lastReservoirRefresh', now,\\n    'lastReservoirIncrease', now,\\n    'running', 0,\\n    'done', 0,\\n    'unblockTime', 0,\\n    'capacityPriorityCounter', 0\\n  )\\n\\nelse\\n  -- Apply migrations\\n  local settings = redis.call('hmget', settings_key,\\n    'id',\\n    'version'\\n  )\\n  local id = settings[1]\\n  local current_version = settings[2]\\n\\n  if current_version ~= limiter_version then\\n    local version_digits = {}\\n    for k, v in string.gmatch(current_version, \\\"([^.]+)\\\") do\\n      table.insert(version_digits, tonumber(k))\\n    end\\n\\n    -- 2.10.0\\n    if version_digits[2] < 10 then\\n      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')\\n      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')\\n      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')\\n      redis.call('hsetnx', settings_key, 'done', 0)\\n      redis.call('hset', settings_key, 'version', '2.10.0')\\n    end\\n\\n    -- 2.11.1\\n    if version_digits[2] < 11 or (version_digits[2] == 11 and version_digits[3] < 1) then\\n      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then\\n        redis.call('hmset', settings_key,\\n          'lastReservoirRefresh', now,\\n          'version', '2.11.1'\\n        )\\n      end\\n    end\\n\\n    -- 2.14.0\\n    if version_digits[2] < 14 then\\n      local old_running_key = 'b_'..id..'_running'\\n      local old_executing_key = 'b_'..id..'_executing'\\n\\n      if redis.call('exists', old_running_key) == 1 then\\n        redis.call('rename', old_running_key, job_weights_key)\\n      end\\n      if redis.call('exists', old_executing_key) == 1 then\\n        redis.call('rename', old_executing_key, job_expirations_key)\\n      end\\n      redis.call('hset', settings_key, 'version', '2.14.0')\\n    end\\n\\n    -- 2.15.2\\n    if version_digits[2] < 15 or (version_digits[2] == 15 and version_digits[3] < 2) then\\n      redis.call('hsetnx', settings_key, 'capacityPriorityCounter', 0)\\n      redis.call('hset', settings_key, 'version', '2.15.2')\\n    end\\n\\n    -- 2.17.0\\n    if version_digits[2] < 17 then\\n      redis.call('hsetnx', settings_key, 'clientTimeout', 10000)\\n      redis.call('hset', settings_key, 'version', '2.17.0')\\n    end\\n\\n    -- 2.18.0\\n    if version_digits[2] < 18 then\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseInterval', '')\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseAmount', '')\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseMaximum', '')\\n      redis.call('hsetnx', settings_key, 'lastReservoirIncrease', now)\\n      redis.call('hset', settings_key, 'version', '2.18.0')\\n    end\\n\\n  end\\n\\n  process_tick(now, false)\\nend\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn {}\\n\",\"process_tick.lua\":\"local process_tick = function (now, always_publish)\\n\\n  local compute_capacity = function (maxConcurrent, running, reservoir)\\n    if maxConcurrent ~= nil and reservoir ~= nil then\\n      return math.min((maxConcurrent - running), reservoir)\\n    elseif maxConcurrent ~= nil then\\n      return maxConcurrent - running\\n    elseif reservoir ~= nil then\\n      return reservoir\\n    else\\n      return nil\\n    end\\n  end\\n\\n  local settings = redis.call('hmget', settings_key,\\n    'id',\\n    'maxConcurrent',\\n    'running',\\n    'reservoir',\\n    'reservoirRefreshInterval',\\n    'reservoirRefreshAmount',\\n    'lastReservoirRefresh',\\n    'reservoirIncreaseInterval',\\n    'reservoirIncreaseAmount',\\n    'reservoirIncreaseMaximum',\\n    'lastReservoirIncrease',\\n    'capacityPriorityCounter',\\n    'clientTimeout'\\n  )\\n  local id = settings[1]\\n  local maxConcurrent = tonumber(settings[2])\\n  local running = tonumber(settings[3])\\n  local reservoir = tonumber(settings[4])\\n  local reservoirRefreshInterval = tonumber(settings[5])\\n  local reservoirRefreshAmount = tonumber(settings[6])\\n  local lastReservoirRefresh = tonumber(settings[7])\\n  local reservoirIncreaseInterval = tonumber(settings[8])\\n  local reservoirIncreaseAmount = tonumber(settings[9])\\n  local reservoirIncreaseMaximum = tonumber(settings[10])\\n  local lastReservoirIncrease = tonumber(settings[11])\\n  local capacityPriorityCounter = tonumber(settings[12])\\n  local clientTimeout = tonumber(settings[13])\\n\\n  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)\\n\\n  --\\n  -- Process 'running' changes\\n  --\\n  local expired = redis.call('zrangebyscore', job_expirations_key, '-inf', '('..now)\\n\\n  if #expired > 0 then\\n    redis.call('zremrangebyscore', job_expirations_key, '-inf', '('..now)\\n\\n    local flush_batch = function (batch, acc)\\n      local weights = redis.call('hmget', job_weights_key, unpack(batch))\\n                      redis.call('hdel',  job_weights_key, unpack(batch))\\n      local clients = redis.call('hmget', job_clients_key, unpack(batch))\\n                      redis.call('hdel',  job_clients_key, unpack(batch))\\n\\n      -- Calculate sum of removed weights\\n      for i = 1, #weights do\\n        acc['total'] = acc['total'] + (tonumber(weights[i]) or 0)\\n      end\\n\\n      -- Calculate sum of removed weights by client\\n      local client_weights = {}\\n      for i = 1, #clients do\\n        local removed = tonumber(weights[i]) or 0\\n        if removed > 0 then\\n          acc['client_weights'][clients[i]] = (acc['client_weights'][clients[i]] or 0) + removed\\n        end\\n      end\\n    end\\n\\n    local acc = {\\n      ['total'] = 0,\\n      ['client_weights'] = {}\\n    }\\n    local batch_size = 1000\\n\\n    -- Compute changes to Zsets and apply changes to Hashes\\n    for i = 1, #expired, batch_size do\\n      local batch = {}\\n      for j = i, math.min(i + batch_size - 1, #expired) do\\n        table.insert(batch, expired[j])\\n      end\\n\\n      flush_batch(batch, acc)\\n    end\\n\\n    -- Apply changes to Zsets\\n    if acc['total'] > 0 then\\n      redis.call('hincrby', settings_key, 'done', acc['total'])\\n      running = tonumber(redis.call('hincrby', settings_key, 'running', -acc['total']))\\n    end\\n\\n    for client, weight in pairs(acc['client_weights']) do\\n      redis.call('zincrby', client_running_key, -weight, client)\\n    end\\n  end\\n\\n  --\\n  -- Process 'reservoir' changes\\n  --\\n  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil\\n  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then\\n    reservoir = reservoirRefreshAmount\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'lastReservoirRefresh', now\\n    )\\n  end\\n\\n  local reservoirIncreaseActive = reservoirIncreaseInterval ~= nil and reservoirIncreaseAmount ~= nil\\n  if reservoirIncreaseActive and now >= lastReservoirIncrease + reservoirIncreaseInterval then\\n    local num_intervals = math.floor((now - lastReservoirIncrease) / reservoirIncreaseInterval)\\n    local incr = reservoirIncreaseAmount * num_intervals\\n    if reservoirIncreaseMaximum ~= nil then\\n      incr = math.min(incr, reservoirIncreaseMaximum - (reservoir or 0))\\n    end\\n    if incr > 0 then\\n      reservoir = (reservoir or 0) + incr\\n    end\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'lastReservoirIncrease', lastReservoirIncrease + (num_intervals * reservoirIncreaseInterval)\\n    )\\n  end\\n\\n  --\\n  -- Clear unresponsive clients\\n  --\\n  local unresponsive = redis.call('zrangebyscore', client_last_seen_key, '-inf', (now - clientTimeout))\\n  local unresponsive_lookup = {}\\n  local terminated_clients = {}\\n  for i = 1, #unresponsive do\\n    unresponsive_lookup[unresponsive[i]] = true\\n    if tonumber(redis.call('zscore', client_running_key, unresponsive[i])) == 0 then\\n      table.insert(terminated_clients, unresponsive[i])\\n    end\\n  end\\n  if #terminated_clients > 0 then\\n    redis.call('zrem', client_running_key,         unpack(terminated_clients))\\n    redis.call('hdel', client_num_queued_key,      unpack(terminated_clients))\\n    redis.call('zrem', client_last_registered_key, unpack(terminated_clients))\\n    redis.call('zrem', client_last_seen_key,       unpack(terminated_clients))\\n  end\\n\\n  --\\n  -- Broadcast capacity changes\\n  --\\n  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)\\n\\n  if always_publish or (initial_capacity ~= nil and final_capacity == nil) then\\n    -- always_publish or was not unlimited, now unlimited\\n    redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\\n\\n  elseif initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity then\\n    -- capacity was increased\\n    -- send the capacity message to the limiter having the lowest number of running jobs\\n    -- the tiebreaker is the limiter having not registered a job in the longest time\\n\\n    local lowest_concurrency_value = nil\\n    local lowest_concurrency_clients = {}\\n    local lowest_concurrency_last_registered = {}\\n    local client_concurrencies = redis.call('zrange', client_running_key, 0, -1, 'withscores')\\n\\n    for i = 1, #client_concurrencies, 2 do\\n      local client = client_concurrencies[i]\\n      local concurrency = tonumber(client_concurrencies[i+1])\\n\\n      if (\\n        lowest_concurrency_value == nil or lowest_concurrency_value == concurrency\\n      ) and (\\n        not unresponsive_lookup[client]\\n      ) and (\\n        tonumber(redis.call('hget', client_num_queued_key, client)) > 0\\n      ) then\\n        lowest_concurrency_value = concurrency\\n        table.insert(lowest_concurrency_clients, client)\\n        local last_registered = tonumber(redis.call('zscore', client_last_registered_key, client))\\n        table.insert(lowest_concurrency_last_registered, last_registered)\\n      end\\n    end\\n\\n    if #lowest_concurrency_clients > 0 then\\n      local position = 1\\n      local earliest = lowest_concurrency_last_registered[1]\\n\\n      for i,v in ipairs(lowest_concurrency_last_registered) do\\n        if v < earliest then\\n          position = i\\n          earliest = v\\n        end\\n      end\\n\\n      local next_client = lowest_concurrency_clients[position]\\n      redis.call('publish', 'b_'..id,\\n        'capacity-priority:'..(final_capacity or '')..\\n        ':'..next_client..\\n        ':'..capacityPriorityCounter\\n      )\\n      redis.call('hincrby', settings_key, 'capacityPriorityCounter', '1')\\n    else\\n      redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\\n    end\\n  end\\n\\n  return {\\n    ['capacity'] = final_capacity,\\n    ['running'] = running,\\n    ['reservoir'] = reservoir\\n  }\\nend\\n\",\"queued.lua\":\"local clientTimeout = tonumber(redis.call('hget', settings_key, 'clientTimeout'))\\nlocal valid_clients = redis.call('zrangebyscore', client_last_seen_key, (now - clientTimeout), 'inf')\\nlocal client_queued = redis.call('hmget', client_num_queued_key, unpack(valid_clients))\\n\\nlocal sum = 0\\nfor i = 1, #client_queued do\\n  sum = sum + tonumber(client_queued[i])\\nend\\n\\nreturn sum\\n\",\"refresh_expiration.lua\":\"local refresh_expiration = function (now, nextRequest, groupTimeout)\\n\\n  if groupTimeout ~= nil then\\n    local ttl = (nextRequest + groupTimeout) - now\\n\\n    for i = 1, #KEYS do\\n      redis.call('pexpire', KEYS[i], ttl)\\n    end\\n  end\\n\\nend\\n\",\"refs.lua\":\"local settings_key = KEYS[1]\\nlocal job_weights_key = KEYS[2]\\nlocal job_expirations_key = KEYS[3]\\nlocal job_clients_key = KEYS[4]\\nlocal client_running_key = KEYS[5]\\nlocal client_num_queued_key = KEYS[6]\\nlocal client_last_registered_key = KEYS[7]\\nlocal client_last_seen_key = KEYS[8]\\n\\nlocal now = tonumber(ARGV[1])\\nlocal client = ARGV[2]\\n\\nlocal num_static_argv = 2\\n\",\"register.lua\":\"local index = ARGV[num_static_argv + 1]\\nlocal weight = tonumber(ARGV[num_static_argv + 2])\\nlocal expiration = tonumber(ARGV[num_static_argv + 3])\\n\\nlocal state = process_tick(now, false)\\nlocal capacity = state['capacity']\\nlocal reservoir = state['reservoir']\\n\\nlocal settings = redis.call('hmget', settings_key,\\n  'nextRequest',\\n  'minTime',\\n  'groupTimeout'\\n)\\nlocal nextRequest = tonumber(settings[1])\\nlocal minTime = tonumber(settings[2])\\nlocal groupTimeout = tonumber(settings[3])\\n\\nif conditions_check(capacity, weight) then\\n\\n  redis.call('hincrby', settings_key, 'running', weight)\\n  redis.call('hset', job_weights_key, index, weight)\\n  if expiration ~= nil then\\n    redis.call('zadd', job_expirations_key, now + expiration, index)\\n  end\\n  redis.call('hset', job_clients_key, index, client)\\n  redis.call('zincrby', client_running_key, weight, client)\\n  redis.call('hincrby', client_num_queued_key, client, -1)\\n  redis.call('zadd', client_last_registered_key, now, client)\\n\\n  local wait = math.max(nextRequest - now, 0)\\n  local newNextRequest = now + wait + minTime\\n\\n  if reservoir == nil then\\n    redis.call('hset', settings_key,\\n      'nextRequest', newNextRequest\\n    )\\n  else\\n    reservoir = reservoir - weight\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'nextRequest', newNextRequest\\n    )\\n  end\\n\\n  refresh_expiration(now, newNextRequest, groupTimeout)\\n\\n  return {true, wait, reservoir}\\n\\nelse\\n  return {false}\\nend\\n\",\"register_client.lua\":\"local queued = tonumber(ARGV[num_static_argv + 1])\\n\\n-- Could have been re-registered concurrently\\nif not redis.call('zscore', client_last_seen_key, client) then\\n  redis.call('zadd', client_running_key, 0, client)\\n  redis.call('hset', client_num_queued_key, client, queued)\\n  redis.call('zadd', client_last_registered_key, 0, client)\\nend\\n\\nredis.call('zadd', client_last_seen_key, now, client)\\n\\nreturn {}\\n\",\"running.lua\":\"return process_tick(now, false)['running']\\n\",\"submit.lua\":\"local queueLength = tonumber(ARGV[num_static_argv + 1])\\nlocal weight = tonumber(ARGV[num_static_argv + 2])\\n\\nlocal capacity = process_tick(now, false)['capacity']\\n\\nlocal settings = redis.call('hmget', settings_key,\\n  'id',\\n  'maxConcurrent',\\n  'highWater',\\n  'nextRequest',\\n  'strategy',\\n  'unblockTime',\\n  'penalty',\\n  'minTime',\\n  'groupTimeout'\\n)\\nlocal id = settings[1]\\nlocal maxConcurrent = tonumber(settings[2])\\nlocal highWater = tonumber(settings[3])\\nlocal nextRequest = tonumber(settings[4])\\nlocal strategy = tonumber(settings[5])\\nlocal unblockTime = tonumber(settings[6])\\nlocal penalty = tonumber(settings[7])\\nlocal minTime = tonumber(settings[8])\\nlocal groupTimeout = tonumber(settings[9])\\n\\nif maxConcurrent ~= nil and weight > maxConcurrent then\\n  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)\\nend\\n\\nlocal reachedHWM = (highWater ~= nil and queueLength == highWater\\n  and not (\\n    conditions_check(capacity, weight)\\n    and nextRequest - now <= 0\\n  )\\n)\\n\\nlocal blocked = strategy == 3 and (reachedHWM or unblockTime >= now)\\n\\nif blocked then\\n  local computedPenalty = penalty\\n  if computedPenalty == nil then\\n    if minTime == 0 then\\n      computedPenalty = 5000\\n    else\\n      computedPenalty = 15 * minTime\\n    end\\n  end\\n\\n  local newNextRequest = now + computedPenalty + minTime\\n\\n  redis.call('hmset', settings_key,\\n    'unblockTime', now + computedPenalty,\\n    'nextRequest', newNextRequest\\n  )\\n\\n  local clients_queued_reset = redis.call('hkeys', client_num_queued_key)\\n  local queued_reset = {}\\n  for i = 1, #clients_queued_reset do\\n    table.insert(queued_reset, clients_queued_reset[i])\\n    table.insert(queued_reset, 0)\\n  end\\n  redis.call('hmset', client_num_queued_key, unpack(queued_reset))\\n\\n  redis.call('publish', 'b_'..id, 'blocked:')\\n\\n  refresh_expiration(now, newNextRequest, groupTimeout)\\nend\\n\\nif not blocked and not reachedHWM then\\n  redis.call('hincrby', client_num_queued_key, client, 1)\\nend\\n\\nreturn {reachedHWM, blocked, strategy}\\n\",\"update_settings.lua\":\"local args = {'hmset', settings_key}\\n\\nfor i = num_static_argv + 1, #ARGV do\\n  table.insert(args, ARGV[i])\\nend\\n\\nredis.call(unpack(args))\\n\\nprocess_tick(now, true)\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn {}\\n\",\"validate_client.lua\":\"if not redis.call('zscore', client_last_seen_key, client) then\\n  return redis.error_reply('UNKNOWN_CLIENT')\\nend\\n\\nredis.call('zadd', client_last_seen_key, now, client)\\n\",\"validate_keys.lua\":\"if not (redis.call('exists', settings_key) == 1) then\\n  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')\\nend\\n\"}");

/***/ }),

/***/ "./node_modules/bottleneck/lib/parser.js":
/*!***********************************************!*\
  !*** ./node_modules/bottleneck/lib/parser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.load = function (received, defaults, onto = {}) {
  var k, ref, v;

  for (k in defaults) {
    v = defaults[k];
    onto[k] = (ref = received[k]) != null ? ref : v;
  }

  return onto;
};

exports.overwrite = function (received, defaults, onto = {}) {
  var k, v;

  for (k in received) {
    v = received[k];

    if (defaults[k] !== void 0) {
      onto[k] = v;
    }
  }

  return onto;
};

/***/ }),

/***/ "./node_modules/bottleneck/lib/version.json":
/*!**************************************************!*\
  !*** ./node_modules/bottleneck/lib/version.json ***!
  \**************************************************/
/*! exports provided: version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"2.19.5\"}");

/***/ }),

/***/ "./src/Api.ts":
/*!********************!*\
  !*** ./src/Api.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/ClassClients.ts":
/*!*****************************!*\
  !*** ./src/ClassClients.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//This file is generated by the build process
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassClients = void 0;
const index_1 = __webpack_require__(/*! ../index */ "./index.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
var ClassClients;
(function (ClassClients) {
    class ClassClientBase {
        constructor(typeName, ...params) {
            this.typeName = typeName;
            if (_.isObject(params[0])) {
                this.client = params[0];
            }
            else {
                this.client = new index_1.Client(params[0], params[1]);
            }
        }
        /**
         * returns an array modified to have additional meta data on it containing the results
         */
        async query(type, query = {}, params = {}) {
            let resp = this.client.query(this.typeName, query, params);
            return resp;
        }
        async save(rallyObject, queryOptions = {}) {
            let resp = this.client.save(rallyObject, queryOptions);
            return resp;
        }
        /**
         * Returns a Rally object by ref or by type and ID
         */
        async get(typeOrRef, objectID = 0, params = {}) {
            let resp = this.client.get(typeOrRef, objectID, params);
            return resp;
        }
        /**
         * Gets a subcollection stored on the Rally object
         */
        async getCollection(rallyObject, collectionName, params = {}) {
            let resp = this.client.getCollection(rallyObject, collectionName, params);
            return resp;
        }
        /**
         *
         * @param  inputOrRef Either a Rally object or the ref for a Rally object
         * @param  params Optional Params to be sent with the request
         * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
         */
        async delete(inputOrRef, params = {}, ignoreDelay = false) {
            return this.client.delete(inputOrRef, params, ignoreDelay);
        }
    }
    ClassClients.ClassClientBase = ClassClientBase;
    class AllowedAttributeValue extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("AllowedAttributeValue", client);
        }
    }
    ClassClients.AllowedAttributeValue = AllowedAttributeValue;
    class AllowedQueryOperator extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("AllowedQueryOperator", client);
        }
    }
    ClassClients.AllowedQueryOperator = AllowedQueryOperator;
    class App extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("App", client);
        }
    }
    ClassClients.App = App;
    class Artifact extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Artifact", client);
        }
    }
    ClassClients.Artifact = Artifact;
    class ArtifactNotification extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("ArtifactNotification", client);
        }
    }
    ClassClients.ArtifactNotification = ArtifactNotification;
    class Attachment extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Attachment", client);
        }
    }
    ClassClients.Attachment = Attachment;
    class AttachmentContent extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("AttachmentContent", client);
        }
    }
    ClassClients.AttachmentContent = AttachmentContent;
    class AttributeDefinition extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("AttributeDefinition", client);
        }
    }
    ClassClients.AttributeDefinition = AttributeDefinition;
    class Blocker extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Blocker", client);
        }
    }
    ClassClients.Blocker = Blocker;
    class Build extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Build", client);
        }
    }
    ClassClients.Build = Build;
    class BuildDefinition extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("BuildDefinition", client);
        }
    }
    ClassClients.BuildDefinition = BuildDefinition;
    class Change extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Change", client);
        }
    }
    ClassClients.Change = Change;
    class Changeset extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Changeset", client);
        }
    }
    ClassClients.Changeset = Changeset;
    class Connection extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Connection", client);
        }
    }
    ClassClients.Connection = Connection;
    class ConversationPost extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("ConversationPost", client);
        }
    }
    ClassClients.ConversationPost = ConversationPost;
    class CumulativeFlowData extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("CumulativeFlowData", client);
        }
    }
    ClassClients.CumulativeFlowData = CumulativeFlowData;
    class Dashboard extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Dashboard", client);
        }
    }
    ClassClients.Dashboard = Dashboard;
    class DataMoveRequest extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("DataMoveRequest", client);
        }
    }
    ClassClients.DataMoveRequest = DataMoveRequest;
    class Defect extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Defect", client);
        }
    }
    ClassClients.Defect = Defect;
    class DefectSuite extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("DefectSuite", client);
        }
    }
    ClassClients.DefectSuite = DefectSuite;
    class DomainObject extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("DomainObject", client);
        }
    }
    ClassClients.DomainObject = DomainObject;
    class Feature extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Feature", client);
        }
    }
    ClassClients.Feature = Feature;
    class FeatureToggleEntity extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("FeatureToggleEntity", client);
        }
    }
    ClassClients.FeatureToggleEntity = FeatureToggleEntity;
    class FlowState extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("FlowState", client);
        }
    }
    ClassClients.FlowState = FlowState;
    class HierarchicalRequirement extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("HierarchicalRequirement", client);
        }
    }
    ClassClients.HierarchicalRequirement = HierarchicalRequirement;
    class HierarchicalRequirementPredecessorRelationship extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("HierarchicalRequirementPredecessorRelationship", client);
        }
    }
    ClassClients.HierarchicalRequirementPredecessorRelationship = HierarchicalRequirementPredecessorRelationship;
    class Initiative extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Initiative", client);
        }
    }
    ClassClients.Initiative = Initiative;
    class Investment extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Investment", client);
        }
    }
    ClassClients.Investment = Investment;
    class Iteration extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Iteration", client);
        }
    }
    ClassClients.Iteration = Iteration;
    class IterationCumulativeFlowData extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("IterationCumulativeFlowData", client);
        }
    }
    ClassClients.IterationCumulativeFlowData = IterationCumulativeFlowData;
    class Milestone extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Milestone", client);
        }
    }
    ClassClients.Milestone = Milestone;
    class PPMConnection extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("PPMConnection", client);
        }
    }
    ClassClients.PPMConnection = PPMConnection;
    class Panel extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Panel", client);
        }
    }
    ClassClients.Panel = Panel;
    class PanelDefinitionConfigProperty extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("PanelDefinitionConfigProperty", client);
        }
    }
    ClassClients.PanelDefinitionConfigProperty = PanelDefinitionConfigProperty;
    class PersistableObject extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("PersistableObject", client);
        }
    }
    ClassClients.PersistableObject = PersistableObject;
    class PortfolioItem extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("PortfolioItem", client);
        }
    }
    ClassClients.PortfolioItem = PortfolioItem;
    class PortfolioItemPredecessorRelationship extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("PortfolioItemPredecessorRelationship", client);
        }
    }
    ClassClients.PortfolioItemPredecessorRelationship = PortfolioItemPredecessorRelationship;
    class Preference extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Preference", client);
        }
    }
    ClassClients.Preference = Preference;
    class PreliminaryEstimate extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("PreliminaryEstimate", client);
        }
    }
    ClassClients.PreliminaryEstimate = PreliminaryEstimate;
    class ProfileImage extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("ProfileImage", client);
        }
    }
    ClassClients.ProfileImage = ProfileImage;
    class Project extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Project", client);
        }
    }
    ClassClients.Project = Project;
    class ProjectPermission extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("ProjectPermission", client);
        }
    }
    ClassClients.ProjectPermission = ProjectPermission;
    class PullRequest extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("PullRequest", client);
        }
    }
    ClassClients.PullRequest = PullRequest;
    class RankableArtifact extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("RankableArtifact", client);
        }
    }
    ClassClients.RankableArtifact = RankableArtifact;
    class RecycleBinEntry extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("RecycleBinEntry", client);
        }
    }
    ClassClients.RecycleBinEntry = RecycleBinEntry;
    class Release extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Release", client);
        }
    }
    ClassClients.Release = Release;
    class ReleaseCumulativeFlowData extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("ReleaseCumulativeFlowData", client);
        }
    }
    ClassClients.ReleaseCumulativeFlowData = ReleaseCumulativeFlowData;
    class Requirement extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Requirement", client);
        }
    }
    ClassClients.Requirement = Requirement;
    class Revision extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Revision", client);
        }
    }
    ClassClients.Revision = Revision;
    class RevisionHistory extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("RevisionHistory", client);
        }
    }
    ClassClients.RevisionHistory = RevisionHistory;
    class Risk extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Risk", client);
        }
    }
    ClassClients.Risk = Risk;
    class SCMRepository extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("SCMRepository", client);
        }
    }
    ClassClients.SCMRepository = SCMRepository;
    class SchedulableArtifact extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("SchedulableArtifact", client);
        }
    }
    ClassClients.SchedulableArtifact = SchedulableArtifact;
    class ScheduledTestCase extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("ScheduledTestCase", client);
        }
    }
    ClassClients.ScheduledTestCase = ScheduledTestCase;
    class Scope extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Scope", client);
        }
    }
    ClassClients.Scope = Scope;
    class ScopedAttributeDefinition extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("ScopedAttributeDefinition", client);
        }
    }
    ClassClients.ScopedAttributeDefinition = ScopedAttributeDefinition;
    class Slice extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Slice", client);
        }
    }
    ClassClients.Slice = Slice;
    class State extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("State", client);
        }
    }
    ClassClients.State = State;
    class Subscription extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Subscription", client);
        }
    }
    ClassClients.Subscription = Subscription;
    class SubscriptionTag extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("SubscriptionTag", client);
        }
    }
    ClassClients.SubscriptionTag = SubscriptionTag;
    class Tag extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Tag", client);
        }
    }
    ClassClients.Tag = Tag;
    class Task extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Task", client);
        }
    }
    ClassClients.Task = Task;
    class TestCase extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TestCase", client);
        }
    }
    ClassClients.TestCase = TestCase;
    class TestCaseResult extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TestCaseResult", client);
        }
    }
    ClassClients.TestCaseResult = TestCaseResult;
    class TestCaseStep extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TestCaseStep", client);
        }
    }
    ClassClients.TestCaseStep = TestCaseStep;
    class TestFolder extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TestFolder", client);
        }
    }
    ClassClients.TestFolder = TestFolder;
    class TestFolderStatus extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TestFolderStatus", client);
        }
    }
    ClassClients.TestFolderStatus = TestFolderStatus;
    class TestSet extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TestSet", client);
        }
    }
    ClassClients.TestSet = TestSet;
    class TimeEntryItem extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TimeEntryItem", client);
        }
    }
    ClassClients.TimeEntryItem = TimeEntryItem;
    class TimeEntryValue extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TimeEntryValue", client);
        }
    }
    ClassClients.TimeEntryValue = TimeEntryValue;
    class TypeDefinition extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("TypeDefinition", client);
        }
    }
    ClassClients.TypeDefinition = TypeDefinition;
    class User extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("User", client);
        }
    }
    ClassClients.User = User;
    class UserIterationCapacity extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("UserIterationCapacity", client);
        }
    }
    ClassClients.UserIterationCapacity = UserIterationCapacity;
    class UserPermission extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("UserPermission", client);
        }
    }
    ClassClients.UserPermission = UserPermission;
    class UserProfile extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("UserProfile", client);
        }
    }
    ClassClients.UserProfile = UserProfile;
    class WebLinkDefinition extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("WebLinkDefinition", client);
        }
    }
    ClassClients.WebLinkDefinition = WebLinkDefinition;
    class WebTab extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("WebTab", client);
        }
    }
    ClassClients.WebTab = WebTab;
    class Workspace extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("Workspace", client);
        }
    }
    ClassClients.Workspace = Workspace;
    class WorkspaceConfiguration extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("WorkspaceConfiguration", client);
        }
    }
    ClassClients.WorkspaceConfiguration = WorkspaceConfiguration;
    class WorkspaceDomainObject extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("WorkspaceDomainObject", client);
        }
    }
    ClassClients.WorkspaceDomainObject = WorkspaceDomainObject;
    class WorkspacePermission extends ClassClientBase {
        constructor(...params) {
            const client = _.isObject(params[0]) ? params[0] : new index_1.Client(params[0], params[1]);
            super("WorkspacePermission", client);
        }
    }
    ClassClients.WorkspacePermission = WorkspacePermission;
})(ClassClients = exports.ClassClients || (exports.ClassClients = {}));


/***/ }),

/***/ "./src/Classes.ts":
/*!************************!*\
  !*** ./src/Classes.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/Client.ts":
/*!***********************!*\
  !*** ./src/Client.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const f = __webpack_require__(/*! node-fetch */ "node-fetch");
const _ = __webpack_require__(/*! lodash */ "lodash");
const Ref_1 = __webpack_require__(/*! ./Ref */ "./src/Ref.ts");
const Throttle_1 = __webpack_require__(/*! ./Throttle */ "./src/Throttle.ts");
const fetch = f;
let inBrowser = false;
class Client {
    constructor(apiKey, options = {
        server: Client.defaultRallyServer,
        project: undefined,
        workspace: undefined,
        maxConcurrentRequests: 5,
        maxReadRetrys: 5,
        maxWriteRetrys: 0
    }) {
        if (!_.isString(apiKey) && !inBrowser) {
            throw new Error('Api key is required');
        }
        this.options = _.defaults(options, {
            server: Client.defaultRallyServer,
            project: undefined,
            workspace: undefined,
            maxConcurrentRequests: 5,
            maxReadRetrys: 5,
            maxWriteRetrys: 0
        });
        this.options.server = options.server || Client.defaultRallyServer;
        this.apiKey = apiKey;
        this.workspace = options.workspace;
        this.project = options.project;
        this.throttle = new Throttle_1.Throttle(this.options.maxConcurrentRequests);
    }
    /**
     * The default Rally server Rally to be used
     */
    static get defaultRallyServer() {
        return 'https://rally1.rallydev.com';
    }
    /** The default server for Rally to be used*/
    static async manageResponse(response) {
        if (!response.ok) {
            throw new Error(`${response.statusText} Code:${response.status}`);
        }
        const resp = await response.json();
        const unwrappedResponse = resp[_.keys(resp)[0]] || '';
        const errors = unwrappedResponse.Errors || resp.Errors;
        if (errors && errors.length) {
            throw new Error(errors.map((e) => `Rally Server Error: ${e}`).join(','));
        }
        let returnedValue = resp;
        if (resp.QueryResult) {
            returnedValue = resp.QueryResult.Results;
            resp.TotalResultCount = resp.QueryResult.TotalResultCount;
            resp.PageSize = resp.QueryResult.PageSize;
            delete resp.QueryResult;
        }
        else if (resp.Results) {
            returnedValue = resp.Results;
            delete resp.Results;
        }
        else if (unwrappedResponse.Object) {
            returnedValue = unwrappedResponse.Object;
            delete resp.Object;
        }
        returnedValue.$rawResponse = resp;
        return returnedValue;
    }
    /** Returns a collection of results from the Lookback Api */
    async queryLookback(request, workspaceId = 0) {
        const workspace = workspaceId ? `/workspace/${workspaceId}` : this.workspace;
        const url = `${this.options.server}/analytics/v2.0/service/rally${workspace}/artifact/snapshot/query`;
        const finalParams = _.defaults(request, Client.defaultLookbackRequest);
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const body = JSON.stringify(request, null, 2);
        const resp = await this.throttle.queueAction(async () => {
            const rawResponse = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers,
                credentials: 'include',
                body
            }, this.options.maxReadRetrys);
            /** @type {Promise<Toolkit.Api.Lookback.Response>} */
            return await Client.manageResponse(rawResponse);
        }, this.options.maxReadRetrys);
        resp.$params = finalParams;
        resp.$hasMore = resp.$rawResponse.HasMore;
        const firstRawResponse = resp.$rawResponse;
        resp.$getNextPage = async () => {
            if (resp.$hasMore) {
                const newRequest = _.cloneDeep(request);
                newRequest.start += newRequest.pagesize;
                return this.queryLookback(newRequest, workspaceId);
            }
            else {
                throw new Error('No more pages in this request');
            }
        };
        resp.$getAll = async () => {
            // TODO: eventually make this more concurrent
            // await Promise.all([who(), what(), where()]);
            let currentResponse = resp;
            currentResponse.$hasMore = resp.$hasMore;
            let allResponses = currentResponse;
            while (currentResponse.$hasMore) {
                currentResponse = await currentResponse.$getNextPage();
                allResponses = [...currentResponse, ...allResponses];
            }
            allResponses.$getNextPage = async () => {
                throw new Error('No more pages in this request');
            };
            allResponses.$getAll = async () => allResponses;
            allResponses.$hasMore = false;
            allResponses.$rawResponse = firstRawResponse;
            return allResponses;
        };
        return resp;
    }
    /** returns an array modified to have additional meta data on it containing the results */
    async query(type, query = {}, params = {}) {
        const finalParams = _.defaults(query, params, this.defaultQueryOptions);
        const url = Client._prepareUrl(this.options.server, type, false, finalParams);
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const resp = await this.throttle.queueAction(async () => {
            const rawResponse = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers,
                credentials: 'include'
            });
            /** @type {Promise<Toolkit.Api.QueryResponse>}  */
            return await Client.manageResponse(rawResponse);
        }, this.options.maxReadRetrys);
        resp.$params = finalParams;
        resp.$hasMore =
            finalParams.limit && finalParams.limit !== Infinity
                ? finalParams.start + finalParams.pagesize < finalParams.limit
                : resp.$rawResponse.TotalResultCount >= finalParams.start + finalParams.pagesize;
        const firstRawResponse = resp.$rawResponse;
        resp.$getNextPage = async () => {
            if (resp.$hasMore) {
                let newQuery = _.cloneDeep(finalParams);
                newQuery.start += query.pagesize;
                return this.query(type, newQuery, params);
            }
            else {
                throw new Error('No more pages in this request');
            }
        };
        resp.$getAll = async () => {
            // TODO: eventually make this more concurrent
            // await Promise.all([who(), what(), where()]);
            let currentResponse = resp;
            currentResponse.$hasMore = resp.$hasMore;
            let allResponses = currentResponse;
            while (currentResponse.$hasMore) {
                currentResponse = await currentResponse.$getNextPage();
                allResponses = [...currentResponse, ...allResponses];
            }
            allResponses.$getNextPage = async () => {
                throw new Error('No more pages in this request');
            };
            allResponses.$getAll = async () => allResponses;
            allResponses.$hasMore = false;
            allResponses.$rawResponse = firstRawResponse;
            return allResponses;
        };
        resp.forEach((d) => this._decorateObject(d));
        return resp;
    }
    async save(arg1, arg2 = {}, arg3 = {}) {
        let type, url, rallyObject, params;
        rallyObject = _.isObject(arg1) ? arg1 : arg2;
        if (_.isString(arg1)) {
            type = arg1;
            rallyObject = arg2;
            params = arg3;
        }
        else if (_.isObject(rallyObject) && _.isString(rallyObject._ref)) {
            params = arg2;
            rallyObject = arg1;
        }
        else {
            throw new Error('Input must be either a string representing a type like "Defect" or an object containing a string field "_ref"');
        }
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        if (!rallyObject.Project && this.options.project) {
            rallyObject.Project = this.options.project;
        }
        if (rallyObject._ref) {
            url = Client._prepareUrl(this.options.server, Client.getTypeFromRef(rallyObject._ref), Client.getIdFromRef(rallyObject._ref), params);
        }
        else {
            const action = _.isNumber(rallyObject.ObjectID) ? `${rallyObject.ObjectID}` : 'create';
            url = Client._prepareUrl(this.options.server, type, action, params);
            if (_.isNumber(rallyObject.ObjectID)) {
                url = `${url}/${rallyObject.ObjectID}?`;
            }
            else {
                url = `${url}/create?`;
            }
        }
        const wrapper = {};
        wrapper[type] = rallyObject;
        const body = JSON.stringify(wrapper);
        const resp = await this.throttle.queueAction(async () => {
            const rawResponse = await fetch(url, {
                method: 'PUT',
                mode: 'cors',
                headers,
                credentials: 'include',
                body
            });
            return await Client.manageResponse(rawResponse);
        }, this.options.maxWriteRetrys);
        resp.$params = params;
        this._decorateObject(resp);
        return resp;
    }
    /**
     * Returns a Rally object by ref or by type and ID
     */
    async get(typeOrRef, objectID = null, params = {}) {
        const result = await this._request(typeOrRef, objectID, params, 'GET');
        this._decorateObject(result);
        return result;
    }
    /**
     * Gets a subcollection stored on the Rally object
     */
    async getCollection(rallyObject, collectionName, params = {}) {
        const finalParams = _.defaults(params, this.defaultQueryOptions);
        const ref = Client.getRef(rallyObject);
        const type = Client.getTypeFromRef(ref);
        const objectId = Client.getIdFromRef(ref);
        const action = `${objectId}/${collectionName}`;
        const url = Client._prepareUrl(this.options.server, type, action, finalParams);
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const resp = await this.throttle.queueAction(async () => {
            const rawResponse = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers,
                credentials: 'include'
            });
            return await Client.manageResponse(rawResponse);
        }, this.options.maxReadRetrys);
        resp.$params = finalParams;
        resp.forEach((d) => this._decorateObject(d));
        rallyObject[collectionName] = _.cloneDeep(_.defaults(resp, rallyObject[collectionName]));
        return resp;
    }
    /** returns an array of cumulative flow data from Rally analytics */
    async getCfdData(workspaceUUID, projectUUID, startDate, endDate = new Date().toISOString()) {
        const url = `${this.options.server}/apps/cleo/analytics/cfd?workspaceUuid=${workspaceUUID}&projectUuid=${projectUUID}&startDate=${startDate}&endDate=${endDate}&cfdType=flowState`;
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const resp = await this.throttle.queueAction(async () => {
            const rawResponse = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers,
                credentials: 'include'
            });
            /** @type {Promise<Toolkit.Api.QueryResponse>}  */
            return await Client.manageResponse(rawResponse);
        }, this.options.maxReadRetrys);
        return resp.data || resp;
    }
    /** returns an array of cumulative flow data from Rally analytics */
    async getCfdDataNewEndpoint(workspaceUUID, projectUUID, startDate, endDate = new Date().toISOString()) {
        const url = `${this.options.server}/apps/garthe/securedV1/cfd/project/${projectUUID}?workspaceUuid=${workspaceUUID}&scopeDown=false&scopeUp=false&startDate=${startDate}&endDate=${endDate}&cfdType=flowState`;
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const resp = await this.throttle.queueAction(async () => {
            const rawResponse = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers,
                credentials: 'include'
            });
            /** @type {Promise<Toolkit.Api.QueryResponse>}  */
            return await Client.manageResponse(rawResponse);
        }, this.options.maxReadRetrys);
        return resp.data || resp;
    }
    async _request(typeOrRef, objectID = null, params = {}, action) {
        let type = typeOrRef;
        if (Ref_1.Ref.isRef(typeOrRef)) {
            type = Client.getTypeFromRef(typeOrRef);
            objectID = Client.getIdFromRef(typeOrRef);
        }
        const finalParams = _.defaults(params, { fetch: true }, this.defaultQueryOptions);
        delete finalParams.project;
        delete finalParams.workspace;
        const url = Client._prepareUrl(this.options.server, type, objectID, finalParams);
        const headers = {
            zsessionid: this.apiKey
        };
        //TODO make sure this is correct, do only puts count as writes?
        let retryCount = action === 'PUT' ? this.options.maxWriteRetrys : this.options.maxReadRetrys;
        let resp = await this.throttle.queueAction(async () => {
            const rawResponse = await fetch(url, {
                method: action,
                mode: 'cors',
                headers,
                credentials: 'include'
            });
            return await Client.manageResponse(rawResponse);
        }, retryCount);
        resp = resp[_.keys(resp)[0]];
        resp.$params = finalParams;
        return resp;
    }
    /**
     *
     *  Adds the delete and save options to each object
     */
    async _decorateObject(rallyObject) {
        rallyObject.$save = () => this.save(rallyObject);
        rallyObject.$delete = () => this.delete(rallyObject);
    }
    /**
     *
     * @param  inputOrRef Either a Rally object or the ref for a Rally object
     * @param  params Optional Params to be sent with the request
     * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    async delete(inputOrRef, params = {}, ignoreDelay = false) {
        let ref = inputOrRef;
        ref = _.isObject(inputOrRef) ? ref._ref : ref;
        const resp = await this._request(ref, null, params, 'DELETE');
        if (!ignoreDelay) {
            // delete returns before the server has finished deleting adding in a fake wait to hope it is done before
            const delayResult = await Client.delay(500);
        }
        return resp;
    }
    /**
     * returns the ref from a rally object or returns the ref is input is passed as a string
     */
    static getRef(input, objectID = 0) {
        let obj;
        if (_.isObject(input)) {
            obj = input;
            if (_.isString(obj._ref)) {
                return obj._ref;
            }
            throw new Error('_ref must be specified to use getRef from a RallyObject');
        }
        if (_.isNumber(objectID) && objectID) {
            return `/${input}/${objectID}`;
        }
        return input.toString();
    }
    /**
     * Gets the ID portion of a ref
     */
    static getIdFromRef(ref) {
        return Ref_1.Ref.getId(ref);
    }
    /**
     * Gets the type portion of a ref
     */
    static getTypeFromRef(ref) {
        return Ref_1.Ref.getType(ref);
    }
    get defaultQueryOptions() {
        const defaultRequest = {
            fetch: ['ObjectID', 'Name'],
            start: 1,
            pagesize: 2000,
            projectScopeUp: true,
            projectScopeDown: true,
            compact: false,
            includePermissions: true,
            project: undefined,
            workspace: this.workspace
        };
        return defaultRequest;
    }
    static get defaultLookbackRequest() {
        const value = {
            find: {},
            fields: ['ObjectID', 'Name'],
            hydrate: [],
            start: 0,
            pagesize: 100,
            removeUnauthorizedSnapshots: true
        };
        return value;
    }
    /**
     * @private
     */
    static _prepareUrl(server, type, action = '', params = {}) {
        if (_.isNumber(action))
            action = action.toString();
        if (!params.workspace) {
            delete params.workspace;
        }
        if (!params.project) {
            delete params.project;
        }
        const searchParams = new URLSearchParams(params);
        if (!server.endsWith('/')) {
            server += '/';
        }
        action = _.isString(action) ? `/${action}` : '';
        return `${server}slm/webservice/v2.0/${type}${action}?${searchParams.toString()}`;
    }
    /**
     * @private
     */
    static async delay(millisecondsOfDelay, scopeFuction = () => { }) {
        return new Promise((resolve) => {
            setTimeout(resolve.bind(null, scopeFuction), millisecondsOfDelay);
        });
    }
}
exports.Client = Client;


/***/ }),

/***/ "./src/Common.ts":
/*!***********************!*\
  !*** ./src/Common.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
const _ = __webpack_require__(/*! lodash */ "lodash");
class Common {
    constructor(client) {
        this.client = client;
    }
    /**
     *
     * @param allRoots The list of root projects that the child projects will be returned from
     * @param  fetch The list of fields you want fetched on the children. The children field will be added to the user selection
     */
    async getAllChildProjects(allRoots, fetch = ['Name', 'Workspace'], onEachPageComplete = (onePage) => []) {
        const requiredFetchFields = _.uniq(["Children", ...fetch]);
        if (!allRoots.length) {
            return [];
        }
        const allClosed = allRoots
            .filter(r => {
            if (!r.Children) {
                return true;
            }
            return !!r.Children.Count;
        });
        let children = [];
        let getNext = async () => {
            if (!allClosed.length) {
                return;
            }
            const project = allClosed.pop();
            let result = [];
            try {
                result = await this.client.getCollection(project, 'Children', { fetch: requiredFetchFields });
            }
            catch (err) {
                allClosed.unshift(project);
            }
            finally {
                children = _.flatten([...children, ...result]);
                onEachPageComplete(children);
                if (allClosed.length) {
                    return getNext();
                }
            }
        };
        //start some workers
        const respAll = await Promise.all([
            getNext(),
            getNext(),
            getNext(),
            getNext(),
            getNext(),
            getNext(),
            getNext()
        ]);
        const decendents = await this.getAllChildProjects(children, fetch, onEachPageComplete);
        let finalResponse = _.flatten([...decendents, ...allRoots, ...children]);
        const removeDupes = {};
        finalResponse.forEach((s) => { removeDupes[s['_ref']] = s; });
        finalResponse = Object.values(removeDupes);
        return finalResponse;
    }
}
exports.Common = Common;


/***/ }),

/***/ "./src/Ref.ts":
/*!********************!*\
  !*** ./src/Ref.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ref = void 0;
const _ = __webpack_require__(/*! lodash */ "lodash");
/**
 @module Ref

 */
//                              oid |  -oid  |                                   uuid                                    |  uuid compact
const IDENTITY_REGEX_PARTIAL = '[0-9]+|-?[0-9]+|[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}|[a-fA-F0-9]{32}';
const IDENTITY_REGEX = `(${IDENTITY_REGEX_PARTIAL})`;
const NON_CAP_IDENTITY_REGEX = `(?:${IDENTITY_REGEX_PARTIAL})`;
const TYPE_REGEX = '(\\w+)';
const DYNATYPE_REGEX = '(\\w{2,}\\/\\w+)';
const EXT_REGEX = '(?:\\.js\\??.*)';
const REF_REGEXES = [
    // dynatype collection ref (/portfolioitem/feature/1234/children)
    new RegExp(`.*?\\/${DYNATYPE_REGEX}\\/${IDENTITY_REGEX}\\/${TYPE_REGEX}${EXT_REGEX}?$`),
    // dynatype ref (/portfolioitem/feature/1234)
    new RegExp(`.*?\\/${DYNATYPE_REGEX}\\/${IDENTITY_REGEX}${EXT_REGEX}?$`),
    // collection ref (/defect/1234/tasks)
    new RegExp(`.*?\\/${TYPE_REGEX}\\/${IDENTITY_REGEX}\\/${TYPE_REGEX}${EXT_REGEX}?$`),
    // basic ref (/defect/1234)
    new RegExp(`.*?\\/${TYPE_REGEX}\\/${IDENTITY_REGEX}${EXT_REGEX}?$`),
    // permission ref (/workspacepermission/123u456w1)
    new RegExp(`.*?\\/${TYPE_REGEX}\\/(${NON_CAP_IDENTITY_REGEX}u${NON_CAP_IDENTITY_REGEX}[pw]${NON_CAP_IDENTITY_REGEX})${EXT_REGEX}?$`)
];
function match(input) {
    input = (input && input._ref) ? input._ref : (input || '');
    const regexMatch = _.find(REF_REGEXES, regex => regex.test(input));
    return (regexMatch && input.match(regexMatch)) || null;
}
/**
 * A basic class for managing refs
 */
class Ref {
    /**
     * Returns true if this item is a ref
     * @param {any} input
     */
    static isRef(input) {
        return Boolean(match(input));
    }
    /**
     * Returns the relative slice of a ref
     * turning `'https://rally1...words.../slm/defect/1234' => '/defect/1234'`
     * @param {any} input possible ref
     */
    static getRelative(input) {
        const refMatch = match(input);
        return (refMatch && [''].concat(refMatch.slice(1)).join('/')) || null;
    }
    /**
     * Gets the type from a ref. `'/defect/2345' => 'defect'`
     * @param {*} input
     */
    static getType(input) {
        const refMatch = match(input);
        return (refMatch && refMatch[1]) || null;
    }
    /**
     * returns the id portion of a ref
     * `/defect/1234 => '1234'`
     * @param {*} input
     */
    static getId(input) {
        const refMatch = match(input);
        return (refMatch && refMatch[2]) || null;
    }
}
exports.Ref = Ref;


/***/ }),

/***/ "./src/Throttle.ts":
/*!*************************!*\
  !*** ./src/Throttle.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Throttle = void 0;
const bottleneck_1 = __webpack_require__(/*! bottleneck */ "./node_modules/bottleneck/lib/index.js");
//push
// queue, if less than max execute immeadiatly
// execute 
// 
class Throttle {
    /**
     *
     * @param maxPromises The maxiumum number of promises allowed at a time
     */
    constructor(maxPromises = 10, maxRetries = 5) {
        this.maxPromises = maxPromises;
        this.bottleneck = new bottleneck_1.default({
            maxConcurrent: maxPromises
        });
    }
    /** Adds and action to the queue, attempts to execute the next action
     * Execution order is not guarenteed
     * @param maxRetries The maxiumum number of automatic retries
     * @param action The action that will be called when the queue is ready
     */
    async queueAction(action, maxRetries = 0) {
        try {
            const resp = await this.bottleneck.wrap(action)();
            return resp;
        }
        catch (err) {
            if (maxRetries > 0) {
                return this.queueAction(action, --maxRetries);
            }
            throw err;
        }
    }
}
exports.Throttle = Throttle;


/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ "node-fetch":
/*!************************!*\
  !*** external "fetch" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fetch;

/***/ })

/******/ });
//# sourceMappingURL=web.js.map