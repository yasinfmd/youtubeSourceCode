(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch(typeof __webpack_require__.j !== 'undefined' ? // eslint-disable-next-line no-undef
            "".concat(hotUpdatePath).concat(curHash, ".").concat(__webpack_require__.j, ".hot-update.json") : "".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.addMessageListener)(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJmZXRjaCIsIl9fd2VicGFja19ydW50aW1lX2lkX18iLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsInNldHVwUGluZyIsImRpc3BsYXlDb250ZW50IiwiZXhwb3J0cyIsImdldEV2ZW50U291cmNlV3JhcHBlciIsImV2ZW50Q2FsbGJhY2tzIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwib3B0aW9ucyIsInNvdXJjZSIsImxhc3RBY3Rpdml0eSIsIkRhdGUiLCJsaXN0ZW5lcnMiLCJ0aW1lb3V0IiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0IiwicGF0aCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyIiwidW5kZWZpbmVkIiwic2lnbmFsIiwiYWJvcnQiLCJUZXh0RGVjb2RlclBvbHlmaWxsIiwiYml0c05lZWRlZCIsImNvZGVQb2ludCIsInByb3RvdHlwZSIsImRlY29kZSIsIm9jdGV0cyIsInZhbGlkIiwic2hpZnQiLCJvY3RldHNDb3VudCIsIkVycm9yIiwiUkVQTEFDRVIiLCJzdHJpbmciLCJvY3RldCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwiZW5jb2RlIiwic3RyZWFtIiwiayIsIlhIUldyYXBwZXIiLCJ4aHIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsIm9ucHJvZ3Jlc3MiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfY29udGVudFR5cGUiLCJfeGhyIiwiX3NlbmRUaW1lb3V0IiwiX2Fib3J0Iiwib3BlbiIsIm1ldGhvZCIsInVybCIsInRoYXQiLCJzdGF0ZSIsInNpbGVudCIsImNsZWFyVGltZW91dCIsIm9ubG9hZCIsIm9uYWJvcnQiLCJvblN0YXJ0IiwiY29udGVudFR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbkZpbmlzaCIsIm9uUmVhZHlTdGF0ZUNoYW5nZSIsIm9uVGltZW91dCIsIlhNTEh0dHBSZXF1ZXN0IiwibmFtZSIsInNldFJlcXVlc3RIZWFkZXIiLCJ2YWx1ZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNlbmQiLCJlcnJvcjEiLCJ0b0xvd2VyQ2FzZSIsImNoYXJDb2RlQXQiLCJIZWFkZXJzUG9seWZpbGwiLCJhbGwiLCJtYXAiLCJjcmVhdGUiLCJhcnJheSIsInNwbGl0IiwibGluZSIsInBhcnRzIiwiam9pbiIsIl9tYXAiLCJnZXQiLCJYSFJUcmFuc3BvcnQiLCJvblN0YXJ0Q2FsbGJhY2siLCJvblByb2dyZXNzQ2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiaGVhZGVycyIsIm9mZnNldCIsImNodW5rIiwic2xpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJIZWFkZXJzV3JhcHBlciIsIl9oZWFkZXJzIiwiRmV0Y2hUcmFuc3BvcnQiLCJjb250cm9sbGVyIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsImNhY2hlIiwidGhlbiIsInJlc3BvbnNlIiwicmVhZGVyIiwiYm9keSIsImdldFJlYWRlciIsImNhbmNlbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZE5leHRDaHVuayIsInJlYWQiLCJyZXN1bHQiLCJkb25lIiwiRXZlbnRUYXJnZXQiLCJfbGlzdGVuZXJzIiwidGhyb3dFcnJvciIsImUiLCJkaXNwYXRjaEV2ZW50IiwidGFyZ2V0IiwidHlwZUxpc3RlbmVycyIsInR5cGUiLCJsaXN0ZW5lciIsImhhbmRsZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkIiwiRXZlbnQiLCJNZXNzYWdlRXZlbnQiLCJsYXN0RXZlbnRJZCIsIkNvbm5lY3Rpb25FdmVudCIsIldBSVRJTkciLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NFRCIsIkFGVEVSX0NSIiwiRklFTERfU1RBUlQiLCJGSUVMRCIsIlZBTFVFX1NUQVJUIiwiVkFMVUUiLCJjb250ZW50VHlwZVJlZ0V4cCIsIk1JTklNVU1fRFVSQVRJT04iLCJNQVhJTVVNX0RVUkFUSU9OIiwicGFyc2VEdXJhdGlvbiIsImRlZiIsIm4iLCJwYXJzZUludCIsImNsYW1wRHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiZmlyZSIsImYiLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiX2Nsb3NlIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsIl9kZWZhdWx0IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsb3NlUGluZyIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOzs7Ozs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUYsSUFBSUMsb0JBQW9CLEdBQUNGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDZGQUFELENBQVIsQ0FBL0M7O0FBQW9GLElBQUlFLFlBQVksR0FBQ0YsbUJBQU8sQ0FBQyxxR0FBRCxDQUF4Qjs7QUFBd0QsSUFBSUcscUJBQXFCLEdBQUNILG1CQUFPLENBQUMsaUdBQUQsQ0FBakM7O0FBQStELElBQUlJLEtBQUssR0FBQ0osbUJBQU8sQ0FBQywyREFBRCxDQUFqQjtBQUE0Qjs7O0FBQThCLElBQUcsQ0FBQ0ssTUFBTSxDQUFDQyxXQUFYLEVBQXVCO0FBQUNELFFBQU0sQ0FBQ0MsV0FBUCxHQUFtQkwsb0JBQW9CLFdBQXZDO0FBQWlEOztBQUFBLElBQU1NLElBQUksR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsV0FBcEQsQ0FBWDtJQUFnRkMsVyxH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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FB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O0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2V2ZW50U291cmNlUG9seWZpbGw9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ldmVudC1zb3VyY2UtcG9seWZpbGxcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTt2YXIgX29uRGVtYW5kRW50cmllc1V0aWxzPXJlcXVpcmUoXCIuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzXCIpO3ZhciBfZm91Yz1yZXF1aXJlKFwiLi9mb3VjXCIpOy8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL2lmKCF3aW5kb3cuRXZlbnRTb3VyY2Upe3dpbmRvdy5FdmVudFNvdXJjZT1fZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O31jb25zdCBkYXRhPUpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudCk7bGV0e2Fzc2V0UHJlZml4LHBhZ2V9PWRhdGE7YXNzZXRQcmVmaXg9YXNzZXRQcmVmaXh8fCcnO2xldCBtb3N0UmVjZW50SGFzaD1udWxsOy8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL2xldCBjdXJIYXNoPV9fd2VicGFja19oYXNoX187Y29uc3QgaG90VXBkYXRlUGF0aD1hc3NldFByZWZpeCsoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKT8nJzonLycpKydfbmV4dC9zdGF0aWMvd2VicGFjay8nOy8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKXsvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovcmV0dXJuIG1vc3RSZWNlbnRIYXNoIT09X193ZWJwYWNrX2hhc2hfXzt9Ly8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKXtyZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKT09PSdpZGxlJzt9Ly8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCl7aWYoIWlzVXBkYXRlQXZhaWxhYmxlKCl8fCFjYW5BcHBseVVwZGF0ZXMoKSl7cmV0dXJuO310cnl7Y29uc3QgcmVzPWF3YWl0IGZldGNoKHR5cGVvZiBfX3dlYnBhY2tfcnVudGltZV9pZF9fIT09J3VuZGVmaW5lZCc/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5gJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uJHtfX3dlYnBhY2tfcnVudGltZV9pZF9ffS5ob3QtdXBkYXRlLmpzb25gOmAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKTtjb25zdCBqc29uRGF0YT1hd2FpdCByZXMuanNvbigpO2NvbnN0IGN1clBhZ2U9cGFnZT09PScvJz8naW5kZXgnOnBhZ2U7Ly8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuY29uc3QgcGFnZVVwZGF0ZWQ9KEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYyk/anNvbkRhdGEuYzpPYmplY3Qua2V5cyhqc29uRGF0YS5jKSkuc29tZShtb2Q9PntyZXR1cm4gbW9kLmluZGV4T2YoYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLDEpPT09Jy8nP2N1clBhZ2U6YC8ke2N1clBhZ2V9YH1gKSE9PS0xfHxtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsMSk9PT0nLyc/Y3VyUGFnZTpgLyR7Y3VyUGFnZX1gfWAucmVwbGFjZSgvXFwvL2csJ1xcXFwnKSkhPT0tMTt9KTtpZihwYWdlVXBkYXRlZCl7ZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO31lbHNle2N1ckhhc2g9bW9zdFJlY2VudEhhc2g7fX1jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLGVycik7ZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO319KDAsX2V2ZW50c291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcikoZXZlbnQ9PntpZihldmVudC5kYXRhPT09J1xcdUQ4M0RcXHVEQzkzJyl7cmV0dXJuO310cnl7Y29uc3QgbWVzc2FnZT1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO2lmKG1lc3NhZ2UuYWN0aW9uPT09J3N5bmMnfHxtZXNzYWdlLmFjdGlvbj09PSdidWlsdCcpe2lmKCFtZXNzYWdlLmhhc2gpe3JldHVybjt9bW9zdFJlY2VudEhhc2g9bWVzc2FnZS5oYXNoO3RyeUFwcGx5VXBkYXRlcygpO31lbHNlIGlmKG1lc3NhZ2UuYWN0aW9uPT09J3JlbG9hZFBhZ2UnKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX1jYXRjaChleCl7Y29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnK2V2ZW50LmRhdGErJ1xcbicrZXgpO319KTsoMCxfb25EZW1hbmRFbnRyaWVzVXRpbHMuc2V0dXBQaW5nKShhc3NldFByZWZpeCwoKT0+cGFnZSk7KDAsX2ZvdWMuZGlzcGxheUNvbnRlbnQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAtZGV2LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuYWRkTWVzc2FnZUxpc3RlbmVyPWFkZE1lc3NhZ2VMaXN0ZW5lcjtleHBvcnRzLmdldEV2ZW50U291cmNlV3JhcHBlcj1nZXRFdmVudFNvdXJjZVdyYXBwZXI7Y29uc3QgZXZlbnRDYWxsYmFja3M9W107ZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpe3ZhciBzb3VyY2U7dmFyIGxhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO3ZhciBsaXN0ZW5lcnM9W107aWYoIW9wdGlvbnMudGltZW91dCl7b3B0aW9ucy50aW1lb3V0PTIwKjEwMDA7fWluaXQoKTt2YXIgdGltZXI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtpZihuZXcgRGF0ZSgpLWxhc3RBY3Rpdml0eT5vcHRpb25zLnRpbWVvdXQpe2hhbmRsZURpc2Nvbm5lY3QoKTt9fSxvcHRpb25zLnRpbWVvdXQvMik7ZnVuY3Rpb24gaW5pdCgpe3NvdXJjZT1uZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aCk7c291cmNlLm9ub3Blbj1oYW5kbGVPbmxpbmU7c291cmNlLm9uZXJyb3I9aGFuZGxlRGlzY29ubmVjdDtzb3VyY2Uub25tZXNzYWdlPWhhbmRsZU1lc3NhZ2U7fWZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpe2lmKG9wdGlvbnMubG9nKWNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKTtsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTt9ZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCl7bGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7Zm9yKHZhciBpPTA7aTxsaXN0ZW5lcnMubGVuZ3RoO2krKyl7bGlzdGVuZXJzW2ldKGV2ZW50KTt9ZXZlbnRDYWxsYmFja3MuZm9yRWFjaChjYj0+e2lmKCFjYi51bmZpbHRlcmVkJiZldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpPT09LTEpcmV0dXJuO2NiKGV2ZW50KTt9KTt9ZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpe2NsZWFySW50ZXJ2YWwodGltZXIpO3NvdXJjZS5jbG9zZSgpO3NldFRpbWVvdXQoaW5pdCxvcHRpb25zLnRpbWVvdXQpO31yZXR1cm57Y2xvc2U6KCk9PntjbGVhckludGVydmFsKHRpbWVyKTtzb3VyY2UuY2xvc2UoKTt9LGFkZE1lc3NhZ2VMaXN0ZW5lcjpmdW5jdGlvbihmbil7bGlzdGVuZXJzLnB1c2goZm4pO319O31mdW5jdGlvbiBhZGRNZXNzYWdlTGlzdGVuZXIoY2Ipe2V2ZW50Q2FsbGJhY2tzLnB1c2goY2IpO31mdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyl7cmV0dXJuIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHNvdXJjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwOy8qIGVzbGludC1kaXNhYmxlICovIC8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbnZhciBkb2N1bWVudD13aW5kb3cuZG9jdW1lbnQ7dmFyIFJlc3BvbnNlPXdpbmRvdy5SZXNwb25zZTt2YXIgVGV4dERlY29kZXI9d2luZG93LlRleHREZWNvZGVyO3ZhciBUZXh0RW5jb2Rlcj13aW5kb3cuVGV4dEVuY29kZXI7dmFyIEFib3J0Q29udHJvbGxlcj13aW5kb3cuQWJvcnRDb250cm9sbGVyO2lmKEFib3J0Q29udHJvbGxlcj09dW5kZWZpbmVkKXtBYm9ydENvbnRyb2xsZXI9ZnVuY3Rpb24oKXt0aGlzLnNpZ25hbD1udWxsO3RoaXMuYWJvcnQ9ZnVuY3Rpb24oKXt9O307fWZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKXt0aGlzLmJpdHNOZWVkZWQ9MDt0aGlzLmNvZGVQb2ludD0wO31UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGU9ZnVuY3Rpb24ob2N0ZXRzKXtmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsc2hpZnQsb2N0ZXRzQ291bnQpe2lmKG9jdGV0c0NvdW50PT09MSl7cmV0dXJuIGNvZGVQb2ludD49MHgwMDgwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHgwN2ZmO31pZihvY3RldHNDb3VudD09PTIpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDgwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4ZDdmZnx8Y29kZVBvaW50Pj0weGUwMDA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weGZmZmY7fWlmKG9jdGV0c0NvdW50PT09Myl7cmV0dXJuIGNvZGVQb2ludD49MHgwMTAwMDA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weDEwZmZmZjt9dGhyb3cgbmV3IEVycm9yKCk7fWZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KXtpZihiaXRzTmVlZGVkPT09NioxKXtyZXR1cm4gY29kZVBvaW50Pj42PjE1PzM6Y29kZVBvaW50PjMxPzI6MTt9aWYoYml0c05lZWRlZD09PTYqMil7cmV0dXJuIGNvZGVQb2ludD4xNT8zOjI7fWlmKGJpdHNOZWVkZWQ9PT02KjMpe3JldHVybiAzO310aHJvdyBuZXcgRXJyb3IoKTt9dmFyIFJFUExBQ0VSPTB4ZmZmZDt2YXIgc3RyaW5nPScnO3ZhciBiaXRzTmVlZGVkPXRoaXMuYml0c05lZWRlZDt2YXIgY29kZVBvaW50PXRoaXMuY29kZVBvaW50O2Zvcih2YXIgaT0wO2k8b2N0ZXRzLmxlbmd0aDtpKz0xKXt2YXIgb2N0ZXQ9b2N0ZXRzW2ldO2lmKGJpdHNOZWVkZWQhPT0wKXtpZihvY3RldDwxMjh8fG9jdGV0PjE5MXx8IXZhbGlkKGNvZGVQb2ludDw8NnxvY3RldCY2MyxiaXRzTmVlZGVkLTYsb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpKSl7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTt9fWlmKGJpdHNOZWVkZWQ9PT0wKXtpZihvY3RldD49MCYmb2N0ZXQ8PTEyNyl7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1vY3RldDt9ZWxzZSBpZihvY3RldD49MTkyJiZvY3RldDw9MjIzKXtiaXRzTmVlZGVkPTYqMTtjb2RlUG9pbnQ9b2N0ZXQmMzE7fWVsc2UgaWYob2N0ZXQ+PTIyNCYmb2N0ZXQ8PTIzOSl7Yml0c05lZWRlZD02KjI7Y29kZVBvaW50PW9jdGV0JjE1O31lbHNlIGlmKG9jdGV0Pj0yNDAmJm9jdGV0PD0yNDcpe2JpdHNOZWVkZWQ9NiozO2NvZGVQb2ludD1vY3RldCY3O31lbHNle2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7fWlmKGJpdHNOZWVkZWQhPT0wJiYhdmFsaWQoY29kZVBvaW50LGJpdHNOZWVkZWQsb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpKSl7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjt9fWVsc2V7Yml0c05lZWRlZC09Njtjb2RlUG9pbnQ9Y29kZVBvaW50PDw2fG9jdGV0JjYzO31pZihiaXRzTmVlZGVkPT09MCl7aWYoY29kZVBvaW50PD0weGZmZmYpe3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO31lbHNle3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDArKGNvZGVQb2ludC0weGZmZmYtMT4+MTApKTtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwKyhjb2RlUG9pbnQtMHhmZmZmLTEmMHgzZmYpKTt9fX10aGlzLmJpdHNOZWVkZWQ9Yml0c05lZWRlZDt0aGlzLmNvZGVQb2ludD1jb2RlUG9pbnQ7cmV0dXJuIHN0cmluZzt9Oy8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb249ZnVuY3Rpb24gc3VwcG9ydHNTdHJlYW1PcHRpb24oKXt0cnl7cmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoJ3Rlc3QnKSx7c3RyZWFtOnRydWV9KT09PSd0ZXN0Jzt9Y2F0Y2goZXJyb3Ipe2NvbnNvbGUubG9nKGVycm9yKTt9cmV0dXJuIGZhbHNlO307Ly8gSUUsIEVkZ2VcbmlmKFRleHREZWNvZGVyPT11bmRlZmluZWR8fFRleHRFbmNvZGVyPT11bmRlZmluZWR8fCFzdXBwb3J0c1N0cmVhbU9wdGlvbigpKXtUZXh0RGVjb2Rlcj1UZXh0RGVjb2RlclBvbHlmaWxsO312YXIgaz1mdW5jdGlvbiBrKCl7fTtmdW5jdGlvbiBYSFJXcmFwcGVyKHhocil7dGhpcy53aXRoQ3JlZGVudGlhbHM9ZmFsc2U7dGhpcy5yZXNwb25zZVR5cGU9Jyc7dGhpcy5yZWFkeVN0YXRlPTA7dGhpcy5zdGF0dXM9MDt0aGlzLnN0YXR1c1RleHQ9Jyc7dGhpcy5yZXNwb25zZVRleHQ9Jyc7dGhpcy5vbnByb2dyZXNzPWs7dGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2U9azt0aGlzLl9jb250ZW50VHlwZT0nJzt0aGlzLl94aHI9eGhyO3RoaXMuX3NlbmRUaW1lb3V0PTA7dGhpcy5fYWJvcnQ9azt9WEhSV3JhcHBlci5wcm90b3R5cGUub3Blbj1mdW5jdGlvbihtZXRob2QsdXJsKXt0aGlzLl9hYm9ydCh0cnVlKTt2YXIgdGhhdD10aGlzO3ZhciB4aHI9dGhpcy5feGhyO3ZhciBzdGF0ZT0xO3ZhciB0aW1lb3V0PTA7dGhpcy5fYWJvcnQ9ZnVuY3Rpb24oc2lsZW50KXtpZih0aGF0Ll9zZW5kVGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aGF0Ll9zZW5kVGltZW91dCk7dGhhdC5fc2VuZFRpbWVvdXQ9MDt9aWYoc3RhdGU9PT0xfHxzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9NDt4aHIub25sb2FkPWs7eGhyLm9uZXJyb3I9azt4aHIub25hYm9ydD1rO3hoci5vbnByb2dyZXNzPWs7eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1rOy8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4vLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG54aHIuYWJvcnQoKTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9aWYoIXNpbGVudCl7dGhhdC5yZWFkeVN0YXRlPTQ7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fXN0YXRlPTA7fTt2YXIgb25TdGFydD1mdW5jdGlvbiBvblN0YXJ0KCl7aWYoc3RhdGU9PT0xKXsvLyBzdGF0ZSA9IDI7XG52YXIgc3RhdHVzPTA7dmFyIHN0YXR1c1RleHQ9Jyc7dmFyIGNvbnRlbnRUeXBlPXVuZGVmaW5lZDtpZighKCdjb250ZW50VHlwZSdpbiB4aHIpKXt0cnl7c3RhdHVzPXhoci5zdGF0dXM7c3RhdHVzVGV4dD14aHIuc3RhdHVzVGV4dDtjb250ZW50VHlwZT14aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO31jYXRjaChlcnJvcil7Ly8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xuLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG5zdGF0dXM9MDtzdGF0dXNUZXh0PScnO2NvbnRlbnRUeXBlPXVuZGVmaW5lZDsvLyBGaXJlZm94IDwgMTQsIENocm9tZSA/LCBTYWZhcmkgP1xuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbn19ZWxzZXtzdGF0dXM9MjAwO3N0YXR1c1RleHQ9J09LJztjb250ZW50VHlwZT14aHIuY29udGVudFR5cGU7fWlmKHN0YXR1cyE9PTApe3N0YXRlPTI7dGhhdC5yZWFkeVN0YXRlPTI7dGhhdC5zdGF0dXM9c3RhdHVzO3RoYXQuc3RhdHVzVGV4dD1zdGF0dXNUZXh0O3RoYXQuX2NvbnRlbnRUeXBlPWNvbnRlbnRUeXBlO3RoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7fX19O3ZhciBvblByb2dyZXNzPWZ1bmN0aW9uIG9uUHJvZ3Jlc3MoKXtvblN0YXJ0KCk7aWYoc3RhdGU9PT0yfHxzdGF0ZT09PTMpe3N0YXRlPTM7dmFyIHJlc3BvbnNlVGV4dD0nJzt0cnl7cmVzcG9uc2VUZXh0PXhoci5yZXNwb25zZVRleHQ7fWNhdGNoKGVycm9yKXsvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG59dGhhdC5yZWFkeVN0YXRlPTM7dGhhdC5yZXNwb25zZVRleHQ9cmVzcG9uc2VUZXh0O3RoYXQub25wcm9ncmVzcygpO319O3ZhciBvbkZpbmlzaD1mdW5jdGlvbiBvbkZpbmlzaCgpey8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG5vblByb2dyZXNzKCk7aWYoc3RhdGU9PT0xfHxzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9NDtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9dGhhdC5yZWFkeVN0YXRlPTQ7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fTt2YXIgb25SZWFkeVN0YXRlQ2hhbmdlPWZ1bmN0aW9uIG9uUmVhZHlTdGF0ZUNoYW5nZSgpe2lmKHhociE9dW5kZWZpbmVkKXsvLyBPcGVyYSAxMlxuaWYoeGhyLnJlYWR5U3RhdGU9PT00KXtvbkZpbmlzaCgpO31lbHNlIGlmKHhoci5yZWFkeVN0YXRlPT09Myl7b25Qcm9ncmVzcygpO31lbHNlIGlmKHhoci5yZWFkeVN0YXRlPT09Mil7b25TdGFydCgpO319fTt2YXIgb25UaW1lb3V0PWZ1bmN0aW9uIG9uVGltZW91dCgpe3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30sNTAwKTtpZih4aHIucmVhZHlTdGF0ZT09PTMpe29uUHJvZ3Jlc3MoKTt9fTsvLyBYRG9tYWluUmVxdWVzdCNhYm9ydCByZW1vdmVzIG9ucHJvZ3Jlc3MsIG9uZXJyb3IsIG9ubG9hZFxueGhyLm9ubG9hZD1vbkZpbmlzaDt4aHIub25lcnJvcj1vbkZpbmlzaDsvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4vLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xueGhyLm9uYWJvcnQ9b25GaW5pc2g7Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG5pZighKCdzZW5kQXNCaW5hcnknaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmISgnbW96QW5vbidpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKXt4aHIub25wcm9ncmVzcz1vblByb2dyZXNzO30vLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4vLyBPcGVyYSA8IDEyXG4vLyBGaXJlZm94IDwgMy41XG4vLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbi8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4vLyBzZWUgYWxzbyAjNjRcbnhoci5vbnJlYWR5c3RhdGVjaGFuZ2U9b25SZWFkeVN0YXRlQ2hhbmdlO2lmKCdjb250ZW50VHlwZSdpbiB4aHIpe3VybCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsncGFkZGluZz10cnVlJzt9eGhyLm9wZW4obWV0aG9kLHVybCx0cnVlKTtpZigncmVhZHlTdGF0ZSdpbiB4aHIpey8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuLy8gIzkxXG50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDApO319O1hIUldyYXBwZXIucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5fYWJvcnQoZmFsc2UpO307WEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXI9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihuYW1lLHZhbHVlKXt2YXIgeGhyPXRoaXMuX3hocjtpZignc2V0UmVxdWVzdEhlYWRlcidpbiB4aHIpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsdmFsdWUpO319O1hIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIT11bmRlZmluZWQ/dGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOicnO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbigpey8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuaWYoISgnb250aW1lb3V0J2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkmJmRvY3VtZW50IT11bmRlZmluZWQmJmRvY3VtZW50LnJlYWR5U3RhdGUhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9PSdjb21wbGV0ZScpe3ZhciB0aGF0PXRoaXM7dGhhdC5fc2VuZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX3NlbmRUaW1lb3V0PTA7dGhhdC5zZW5kKCk7fSw0KTtyZXR1cm47fXZhciB4aHI9dGhpcy5feGhyOy8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxueGhyLndpdGhDcmVkZW50aWFscz10aGlzLndpdGhDcmVkZW50aWFsczt4aHIucmVzcG9uc2VUeXBlPXRoaXMucmVzcG9uc2VUeXBlO3RyeXsvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG54aHIuc2VuZCh1bmRlZmluZWQpO31jYXRjaChlcnJvcjEpey8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbnRocm93IGVycm9yMTt9fTtmdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKXtyZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLGZ1bmN0aW9uKGMpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSsweDIwKTt9KTt9ZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCl7Ly8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbnZhciBtYXA9T2JqZWN0LmNyZWF0ZShudWxsKTt2YXIgYXJyYXk9YWxsLnNwbGl0KCdcXHJcXG4nKTtmb3IodmFyIGk9MDtpPGFycmF5Lmxlbmd0aDtpKz0xKXt2YXIgbGluZT1hcnJheVtpXTt2YXIgcGFydHM9bGluZS5zcGxpdCgnOiAnKTt2YXIgbmFtZT1wYXJ0cy5zaGlmdCgpO3ZhciB2YWx1ZT1wYXJ0cy5qb2luKCc6ICcpO21hcFt0b0xvd2VyQ2FzZShuYW1lKV09dmFsdWU7fXRoaXMuX21hcD1tYXA7fUhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldO307ZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCl7fVhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7eGhyLm9wZW4oJ0dFVCcsdXJsKTt2YXIgb2Zmc2V0PTA7eGhyLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt2YXIgcmVzcG9uc2VUZXh0PXhoci5yZXNwb25zZVRleHQ7dmFyIGNodW5rPXJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpO29mZnNldCs9Y2h1bmsubGVuZ3RoO29uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7fTt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoeGhyLnJlYWR5U3RhdGU9PT0yKXt2YXIgc3RhdHVzPXhoci5zdGF0dXM7dmFyIHN0YXR1c1RleHQ9eGhyLnN0YXR1c1RleHQ7dmFyIGNvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7dmFyIGhlYWRlcnM9eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO29uU3RhcnRDYWxsYmFjayhzdGF0dXMsc3RhdHVzVGV4dCxjb250ZW50VHlwZSxuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLGZ1bmN0aW9uKCl7eGhyLmFib3J0KCk7fSk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT00KXtvbkZpbmlzaENhbGxiYWNrKCk7fX07eGhyLndpdGhDcmVkZW50aWFscz13aXRoQ3JlZGVudGlhbHM7eGhyLnJlc3BvbnNlVHlwZT0ndGV4dCc7Zm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLG5hbWUpKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLGhlYWRlcnNbbmFtZV0pO319eGhyLnNlbmQoKTt9O2Z1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpe3RoaXMuX2hlYWRlcnM9aGVhZGVyczt9SGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihuYW1lKXtyZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSk7fTtmdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpe31GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7dmFyIGNvbnRyb2xsZXI9bmV3IEFib3J0Q29udHJvbGxlcigpO3ZhciBzaWduYWw9Y29udHJvbGxlci5zaWduYWw7Ly8gc2VlICMxMjBcbnZhciB0ZXh0RGVjb2Rlcj1uZXcgVGV4dERlY29kZXIoKTtmZXRjaCh1cmwse2hlYWRlcnM6aGVhZGVycyxjcmVkZW50aWFsczp3aXRoQ3JlZGVudGlhbHM/J2luY2x1ZGUnOidzYW1lLW9yaWdpbicsc2lnbmFsOnNpZ25hbCxjYWNoZTonbm8tc3RvcmUnfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlYWRlcj1yZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO29uU3RhcnRDYWxsYmFjayhyZXNwb25zZS5zdGF0dXMscmVzcG9uc2Uuc3RhdHVzVGV4dCxyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLGZ1bmN0aW9uKCl7Y29udHJvbGxlci5hYm9ydCgpO3JlYWRlci5jYW5jZWwoKTt9KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3ZhciByZWFkTmV4dENodW5rPWZ1bmN0aW9uIHJlYWROZXh0Q2h1bmsoKXtyZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtpZihyZXN1bHQuZG9uZSl7Ly8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbnJlc29sdmUodW5kZWZpbmVkKTt9ZWxzZXt2YXIgY2h1bms9dGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSx7c3RyZWFtOnRydWV9KTtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO3JlYWROZXh0Q2h1bmsoKTt9fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3Ipe3JlamVjdChlcnJvcik7fSk7fTtyZWFkTmV4dENodW5rKCk7fSk7fSkudGhlbihmdW5jdGlvbihyZXN1bHQpe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gcmVzdWx0O30sZnVuY3Rpb24oZXJyb3Ipe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO30pO307ZnVuY3Rpb24gRXZlbnRUYXJnZXQoKXt0aGlzLl9saXN0ZW5lcnM9T2JqZWN0LmNyZWF0ZShudWxsKTt9ZnVuY3Rpb24gdGhyb3dFcnJvcihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9LDApO31FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihldmVudCl7ZXZlbnQudGFyZ2V0PXRoaXM7dmFyIHR5cGVMaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGxlbmd0aD10eXBlTGlzdGVuZXJzLmxlbmd0aDtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKz0xKXt2YXIgbGlzdGVuZXI9dHlwZUxpc3RlbmVyc1tpXTt0cnl7aWYodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50PT09J2Z1bmN0aW9uJyl7bGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO31lbHNle2xpc3RlbmVyLmNhbGwodGhpcyxldmVudCk7fX1jYXRjaChlKXt0aHJvd0Vycm9yKGUpO319fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnM9PXVuZGVmaW5lZCl7dHlwZUxpc3RlbmVycz1bXTtsaXN0ZW5lcnNbdHlwZV09dHlwZUxpc3RlbmVyczt9dmFyIGZvdW5kPWZhbHNlO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXT09PWxpc3RlbmVyKXtmb3VuZD10cnVlO319aWYoIWZvdW5kKXt0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO319O0V2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe3R5cGU9U3RyaW5nKHR5cGUpO3ZhciBsaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzO3ZhciB0eXBlTGlzdGVuZXJzPWxpc3RlbmVyc1t0eXBlXTtpZih0eXBlTGlzdGVuZXJzIT11bmRlZmluZWQpe3ZhciBmaWx0ZXJlZD1bXTtmb3IodmFyIGk9MDtpPHR5cGVMaXN0ZW5lcnMubGVuZ3RoO2krPTEpe2lmKHR5cGVMaXN0ZW5lcnNbaV0hPT1saXN0ZW5lcil7ZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTt9fWlmKGZpbHRlcmVkLmxlbmd0aD09PTApe2RlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07fWVsc2V7bGlzdGVuZXJzW3R5cGVdPWZpbHRlcmVkO319fTtmdW5jdGlvbiBFdmVudCh0eXBlKXt0aGlzLnR5cGU9dHlwZTt0aGlzLnRhcmdldD11bmRlZmluZWQ7fWZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLG9wdGlvbnMpe0V2ZW50LmNhbGwodGhpcyx0eXBlKTt0aGlzLmRhdGE9b3B0aW9ucy5kYXRhO3RoaXMubGFzdEV2ZW50SWQ9b3B0aW9ucy5sYXN0RXZlbnRJZDt9TWVzc2FnZUV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7ZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuc3RhdHVzPW9wdGlvbnMuc3RhdHVzO3RoaXMuc3RhdHVzVGV4dD1vcHRpb25zLnN0YXR1c1RleHQ7dGhpcy5oZWFkZXJzPW9wdGlvbnMuaGVhZGVyczt9Q29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7dmFyIFdBSVRJTkc9LTE7dmFyIENPTk5FQ1RJTkc9MDt2YXIgT1BFTj0xO3ZhciBDTE9TRUQ9Mjt2YXIgQUZURVJfQ1I9LTE7dmFyIEZJRUxEX1NUQVJUPTA7dmFyIEZJRUxEPTE7dmFyIFZBTFVFX1NUQVJUPTI7dmFyIFZBTFVFPTM7dmFyIGNvbnRlbnRUeXBlUmVnRXhwPS9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7dmFyIE1JTklNVU1fRFVSQVRJT049MTAwMDt2YXIgTUFYSU1VTV9EVVJBVElPTj0xODAwMDAwMDt2YXIgcGFyc2VEdXJhdGlvbj1mdW5jdGlvbiBwYXJzZUR1cmF0aW9uKHZhbHVlLGRlZil7dmFyIG49cGFyc2VJbnQodmFsdWUsMTApO2lmKG4hPT1uKXtuPWRlZjt9cmV0dXJuIGNsYW1wRHVyYXRpb24obik7fTt2YXIgY2xhbXBEdXJhdGlvbj1mdW5jdGlvbiBjbGFtcER1cmF0aW9uKG4pe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChuLE1JTklNVU1fRFVSQVRJT04pLE1BWElNVU1fRFVSQVRJT04pO307dmFyIGZpcmU9ZnVuY3Rpb24gZmlyZSh0aGF0LGYsZXZlbnQpe3RyeXtpZih0eXBlb2YgZj09PSdmdW5jdGlvbicpe2YuY2FsbCh0aGF0LGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX07ZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsb3B0aW9ucyl7RXZlbnRUYXJnZXQuY2FsbCh0aGlzKTt0aGlzLm9ub3Blbj11bmRlZmluZWQ7dGhpcy5vbm1lc3NhZ2U9dW5kZWZpbmVkO3RoaXMub25lcnJvcj11bmRlZmluZWQ7dGhpcy51cmw9dW5kZWZpbmVkO3RoaXMucmVhZHlTdGF0ZT11bmRlZmluZWQ7dGhpcy53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3RoaXMuX2Nsb3NlPXVuZGVmaW5lZDtzdGFydCh0aGlzLHVybCxvcHRpb25zKTt9dmFyIGlzRmV0Y2hTdXBwb3J0ZWQ9ZmV0Y2ghPXVuZGVmaW5lZCYmUmVzcG9uc2UhPXVuZGVmaW5lZCYmJ2JvZHknaW4gUmVzcG9uc2UucHJvdG90eXBlO2Z1bmN0aW9uIHN0YXJ0KGVzLHVybCxvcHRpb25zKXt1cmw9U3RyaW5nKHVybCk7dmFyIHdpdGhDcmVkZW50aWFscz1vcHRpb25zIT11bmRlZmluZWQmJkJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpO3ZhciBpbml0aWFsUmV0cnk9Y2xhbXBEdXJhdGlvbigxMDAwKTt2YXIgaGVhcnRiZWF0VGltZW91dD1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCE9dW5kZWZpbmVkP3BhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LDQ1MDAwKTpjbGFtcER1cmF0aW9uKDQ1MDAwKTt2YXIgbGFzdEV2ZW50SWQ9Jyc7dmFyIHJldHJ5PWluaXRpYWxSZXRyeTt2YXIgd2FzQWN0aXZpdHk9ZmFsc2U7dmFyIGhlYWRlcnM9b3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLmhlYWRlcnMhPXVuZGVmaW5lZD9KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpOnVuZGVmaW5lZDt2YXIgQ3VycmVudFRyYW5zcG9ydD1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuVHJhbnNwb3J0IT11bmRlZmluZWQ/b3B0aW9ucy5UcmFuc3BvcnQ6WE1MSHR0cFJlcXVlc3Q7dmFyIHhocj1pc0ZldGNoU3VwcG9ydGVkJiYhKG9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5UcmFuc3BvcnQhPXVuZGVmaW5lZCk/dW5kZWZpbmVkOm5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpO3ZhciB0cmFuc3BvcnQ9eGhyPT11bmRlZmluZWQ/bmV3IEZldGNoVHJhbnNwb3J0KCk6bmV3IFhIUlRyYW5zcG9ydCgpO3ZhciBjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7dmFyIHRpbWVvdXQ9MDt2YXIgY3VycmVudFN0YXRlPVdBSVRJTkc7dmFyIGRhdGFCdWZmZXI9Jyc7dmFyIGxhc3RFdmVudElkQnVmZmVyPScnO3ZhciBldmVudFR5cGVCdWZmZXI9Jyc7dmFyIHRleHRCdWZmZXI9Jyc7dmFyIHN0YXRlPUZJRUxEX1NUQVJUO3ZhciBmaWVsZFN0YXJ0PTA7dmFyIHZhbHVlU3RhcnQ9MDt2YXIgb25TdGFydD1mdW5jdGlvbiBvblN0YXJ0KHN0YXR1cyxzdGF0dXNUZXh0LGNvbnRlbnRUeXBlLGhlYWRlcnMsY2FuY2VsKXtpZihjdXJyZW50U3RhdGU9PT1DT05ORUNUSU5HKXtjYW5jZWxGdW5jdGlvbj1jYW5jZWw7aWYoc3RhdHVzPT09MjAwJiZjb250ZW50VHlwZSE9dW5kZWZpbmVkJiZjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKSl7Y3VycmVudFN0YXRlPU9QRU47d2FzQWN0aXZpdHk9dHJ1ZTtyZXRyeT1pbml0aWFsUmV0cnk7ZXMucmVhZHlTdGF0ZT1PUEVOO3ZhciBldmVudD1uZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJyx7c3RhdHVzOnN0YXR1cyxzdGF0dXNUZXh0OnN0YXR1c1RleHQsaGVhZGVyczpoZWFkZXJzfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbm9wZW4sZXZlbnQpO31lbHNle3ZhciBtZXNzYWdlPScnO2lmKHN0YXR1cyE9PTIwMCl7aWYoc3RhdHVzVGV4dCl7c3RhdHVzVGV4dD1zdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywnICcpO31tZXNzYWdlPVwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIrc3RhdHVzKycgJytzdGF0dXNUZXh0KycgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO31lbHNle21lc3NhZ2U9XCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiKyhjb250ZW50VHlwZT09dW5kZWZpbmVkPyctJzpjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csJyAnKSkrJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJzt9dGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpO2Nsb3NlKCk7dmFyIGV2ZW50PW5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJyx7c3RhdHVzOnN0YXR1cyxzdGF0dXNUZXh0OnN0YXR1c1RleHQsaGVhZGVyczpoZWFkZXJzfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbmVycm9yLGV2ZW50KTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcyh0ZXh0Q2h1bmspe2lmKGN1cnJlbnRTdGF0ZT09PU9QRU4pe3ZhciBuPS0xO2Zvcih2YXIgaT0wO2k8dGV4dENodW5rLmxlbmd0aDtpKz0xKXt2YXIgYz10ZXh0Q2h1bmsuY2hhckNvZGVBdChpKTtpZihjPT09J1xcbicuY2hhckNvZGVBdCgwKXx8Yz09PSdcXHInLmNoYXJDb2RlQXQoMCkpe249aTt9fXZhciBjaHVuaz0obiE9PS0xP3RleHRCdWZmZXI6JycpK3RleHRDaHVuay5zbGljZSgwLG4rMSk7dGV4dEJ1ZmZlcj0obj09PS0xP3RleHRCdWZmZXI6JycpK3RleHRDaHVuay5zbGljZShuKzEpO2lmKGNodW5rIT09Jycpe3dhc0FjdGl2aXR5PXRydWU7fWZvcih2YXIgcG9zaXRpb249MDtwb3NpdGlvbjxjaHVuay5sZW5ndGg7cG9zaXRpb24rPTEpe3ZhciBjPWNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pO2lmKHN0YXRlPT09QUZURVJfQ1ImJmM9PT0nXFxuJy5jaGFyQ29kZUF0KDApKXtzdGF0ZT1GSUVMRF9TVEFSVDt9ZWxzZXtpZihzdGF0ZT09PUFGVEVSX0NSKXtzdGF0ZT1GSUVMRF9TVEFSVDt9aWYoYz09PSdcXHInLmNoYXJDb2RlQXQoMCl8fGM9PT0nXFxuJy5jaGFyQ29kZUF0KDApKXtpZihzdGF0ZSE9PUZJRUxEX1NUQVJUKXtpZihzdGF0ZT09PUZJRUxEKXt2YWx1ZVN0YXJ0PXBvc2l0aW9uKzE7fXZhciBmaWVsZD1jaHVuay5zbGljZShmaWVsZFN0YXJ0LHZhbHVlU3RhcnQtMSk7dmFyIHZhbHVlPWNodW5rLnNsaWNlKHZhbHVlU3RhcnQrKHZhbHVlU3RhcnQ8cG9zaXRpb24mJmNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCk9PT0nICcuY2hhckNvZGVBdCgwKT8xOjApLHBvc2l0aW9uKTtpZihmaWVsZD09PSdkYXRhJyl7ZGF0YUJ1ZmZlcis9J1xcbic7ZGF0YUJ1ZmZlcis9dmFsdWU7fWVsc2UgaWYoZmllbGQ9PT0naWQnKXtsYXN0RXZlbnRJZEJ1ZmZlcj12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdldmVudCcpe2V2ZW50VHlwZUJ1ZmZlcj12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdyZXRyeScpe2luaXRpYWxSZXRyeT1wYXJzZUR1cmF0aW9uKHZhbHVlLGluaXRpYWxSZXRyeSk7cmV0cnk9aW5pdGlhbFJldHJ5O31lbHNlIGlmKGZpZWxkPT09J2hlYXJ0YmVhdFRpbWVvdXQnKXtoZWFydGJlYXRUaW1lb3V0PXBhcnNlRHVyYXRpb24odmFsdWUsaGVhcnRiZWF0VGltZW91dCk7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO319fWlmKHN0YXRlPT09RklFTERfU1RBUlQpe2lmKGRhdGFCdWZmZXIhPT0nJyl7bGFzdEV2ZW50SWQ9bGFzdEV2ZW50SWRCdWZmZXI7aWYoZXZlbnRUeXBlQnVmZmVyPT09Jycpe2V2ZW50VHlwZUJ1ZmZlcj0nbWVzc2FnZSc7fXZhciBldmVudD1uZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlcix7ZGF0YTpkYXRhQnVmZmVyLnNsaWNlKDEpLGxhc3RFdmVudElkOmxhc3RFdmVudElkQnVmZmVyfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7aWYoZXZlbnRUeXBlQnVmZmVyPT09J21lc3NhZ2UnKXtmaXJlKGVzLGVzLm9ubWVzc2FnZSxldmVudCk7fWlmKGN1cnJlbnRTdGF0ZT09PUNMT1NFRCl7cmV0dXJuO319ZGF0YUJ1ZmZlcj0nJztldmVudFR5cGVCdWZmZXI9Jyc7fXN0YXRlPWM9PT0nXFxyJy5jaGFyQ29kZUF0KDApP0FGVEVSX0NSOkZJRUxEX1NUQVJUO31lbHNle2lmKHN0YXRlPT09RklFTERfU1RBUlQpe2ZpZWxkU3RhcnQ9cG9zaXRpb247c3RhdGU9RklFTEQ7fWlmKHN0YXRlPT09RklFTEQpe2lmKGM9PT0nOicuY2hhckNvZGVBdCgwKSl7dmFsdWVTdGFydD1wb3NpdGlvbisxO3N0YXRlPVZBTFVFX1NUQVJUO319ZWxzZSBpZihzdGF0ZT09PVZBTFVFX1NUQVJUKXtzdGF0ZT1WQUxVRTt9fX19fX07dmFyIG9uRmluaXNoPWZ1bmN0aW9uIG9uRmluaXNoKCl7aWYoY3VycmVudFN0YXRlPT09T1BFTnx8Y3VycmVudFN0YXRlPT09Q09OTkVDVElORyl7Y3VycmVudFN0YXRlPVdBSVRJTkc7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fXRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30scmV0cnkpO3JldHJ5PWNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5KjE2LHJldHJ5KjIpKTtlcy5yZWFkeVN0YXRlPUNPTk5FQ1RJTkc7dmFyIGV2ZW50PW5ldyBFdmVudCgnZXJyb3InKTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9uZXJyb3IsZXZlbnQpO319O3ZhciBjbG9zZT1mdW5jdGlvbiBjbG9zZSgpe2N1cnJlbnRTdGF0ZT1DTE9TRUQ7aWYoY2FuY2VsRnVuY3Rpb24hPXVuZGVmaW5lZCl7Y2FuY2VsRnVuY3Rpb24oKTtjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7fWlmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO31lcy5yZWFkeVN0YXRlPUNMT1NFRDt9O3ZhciBvblRpbWVvdXQ9ZnVuY3Rpb24gb25UaW1lb3V0KCl7dGltZW91dD0wO2lmKGN1cnJlbnRTdGF0ZSE9PVdBSVRJTkcpe2lmKCF3YXNBY3Rpdml0eSYmY2FuY2VsRnVuY3Rpb24hPXVuZGVmaW5lZCl7dGhyb3dFcnJvcihuZXcgRXJyb3IoJ05vIGFjdGl2aXR5IHdpdGhpbiAnK2hlYXJ0YmVhdFRpbWVvdXQrJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nKSk7Y2FuY2VsRnVuY3Rpb24oKTtjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7fWVsc2V7d2FzQWN0aXZpdHk9ZmFsc2U7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxoZWFydGJlYXRUaW1lb3V0KTt9cmV0dXJuO313YXNBY3Rpdml0eT1mYWxzZTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO2N1cnJlbnRTdGF0ZT1DT05ORUNUSU5HO2RhdGFCdWZmZXI9Jyc7ZXZlbnRUeXBlQnVmZmVyPScnO2xhc3RFdmVudElkQnVmZmVyPWxhc3RFdmVudElkO3RleHRCdWZmZXI9Jyc7ZmllbGRTdGFydD0wO3ZhbHVlU3RhcnQ9MDtzdGF0ZT1GSUVMRF9TVEFSVDsvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbi8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cbnZhciByZXF1ZXN0VVJMPXVybDtpZih1cmwuc2xpY2UoMCw1KSE9PSdkYXRhOicmJnVybC5zbGljZSgwLDUpIT09J2Jsb2I6Jyl7aWYobGFzdEV2ZW50SWQhPT0nJyl7cmVxdWVzdFVSTCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsnbGFzdEV2ZW50SWQ9JytlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpO319dmFyIHJlcXVlc3RIZWFkZXJzPXt9O3JlcXVlc3RIZWFkZXJzWydBY2NlcHQnXT0ndGV4dC9ldmVudC1zdHJlYW0nO2lmKGhlYWRlcnMhPXVuZGVmaW5lZCl7Zm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLG5hbWUpKXtyZXF1ZXN0SGVhZGVyc1tuYW1lXT1oZWFkZXJzW25hbWVdO319fXRyeXt0cmFuc3BvcnQub3Blbih4aHIsb25TdGFydCxvblByb2dyZXNzLG9uRmluaXNoLHJlcXVlc3RVUkwsd2l0aENyZWRlbnRpYWxzLHJlcXVlc3RIZWFkZXJzKTt9Y2F0Y2goZXJyb3Ipe2Nsb3NlKCk7dGhyb3cgZXJyb3I7fX07ZXMudXJsPXVybDtlcy5yZWFkeVN0YXRlPUNPTk5FQ1RJTkc7ZXMud2l0aENyZWRlbnRpYWxzPXdpdGhDcmVkZW50aWFscztlcy5fY2xvc2U9Y2xvc2U7b25UaW1lb3V0KCk7fUV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKTtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HPUNPTk5FQ1RJTkc7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTj1PUEVOO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRD1DTE9TRUQ7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbG9zZSgpO307RXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HPUNPTk5FQ1RJTkc7RXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOPU9QRU47RXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQ9Q0xPU0VEO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscz11bmRlZmluZWQ7dmFyIF9kZWZhdWx0PUV2ZW50U291cmNlUG9seWZpbGw7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGlzcGxheUNvbnRlbnQ9ZGlzcGxheUNvbnRlbnQ7Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbW92ZSBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3b3JrYXJvdW5kIGZvciB1c2luZ1xuLy8gYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQuIEl0IG11c3QgYmUgY2FsbGVkIGJlZm9yZSBoeWRyYXRpb24sIG9yIGVsc2Vcbi8vIHJlbmRlcmluZyB3b24ndCBoYXZlIHRoZSBjb3JyZWN0IGNvbXB1dGVkIHZhbHVlcyBpbiBlZmZlY3RzLlxuZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spezsod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fWlmKGNhbGxiYWNrKXtjYWxsYmFjaygpO319KTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VjLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2xvc2VQaW5nPWNsb3NlUGluZztleHBvcnRzLnNldHVwUGluZz1zZXR1cFBpbmc7ZXhwb3J0cy5jdXJyZW50UGFnZT12b2lkIDA7dmFyIF9ldmVudHNvdXJjZT1yZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpOy8qIGdsb2JhbCBsb2NhdGlvbiAqL2xldCBldnRTb3VyY2U7bGV0IGN1cnJlbnRQYWdlO2V4cG9ydHMuY3VycmVudFBhZ2U9Y3VycmVudFBhZ2U7ZnVuY3Rpb24gY2xvc2VQaW5nKCl7aWYoZXZ0U291cmNlKWV2dFNvdXJjZS5jbG9zZSgpO2V2dFNvdXJjZT1udWxsO31mdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgscGF0aG5hbWVGbixyZXRyeSl7Y29uc3QgcGF0aG5hbWU9cGF0aG5hbWVGbigpOy8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG5pZihwYXRobmFtZT09PWN1cnJlbnRQYWdlJiYhcmV0cnkpcmV0dXJuO2V4cG9ydHMuY3VycmVudFBhZ2U9Y3VycmVudFBhZ2U9cGF0aG5hbWU7Ly8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXG5jbG9zZVBpbmcoKTtldnRTb3VyY2U9KDAsX2V2ZW50c291cmNlLmdldEV2ZW50U291cmNlV3JhcHBlcikoe3BhdGg6YCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtjdXJyZW50UGFnZX1gLHRpbWVvdXQ6NTAwMH0pO2V2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoZXZlbnQ9PntpZihldmVudC5kYXRhLmluZGV4T2YoJ3snKT09PS0xKXJldHVybjt0cnl7Y29uc3QgcGF5bG9hZD1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO2lmKHBheWxvYWQuaW52YWxpZCl7Ly8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuZmV0Y2gobG9jYXRpb24uaHJlZix7Y3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocGFnZVJlcz0+e2lmKHBhZ2VSZXMuc3RhdHVzPT09MjAwKXtsb2NhdGlvbi5yZWxvYWQoKTt9fSk7fX1jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsZXJyKTt9fSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMubWFwIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==