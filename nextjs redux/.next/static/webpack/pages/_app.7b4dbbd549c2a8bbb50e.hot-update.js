self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var C_Users_ysndl_Desktop_test_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_ysndl_Desktop_test_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var countInitialState = {
  count: 0
};

var count = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : countInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  debugger;

  switch (action.type) {
    case "INC":
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case "DEC":
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count - 1
      });

    default:
      return state;
  }
};

debugger;
var combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  count: count
});
debugger;

var reducer = function reducer(state, action) {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {
    var nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

var initStore = function initStore() {
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(reducer);
};

var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore);

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiY291bnRJbml0aWFsU3RhdGUiLCJjb3VudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwicGF5bG9hZCIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3RCQyxPQUFLLEVBQUU7QUFEZSxDQUExQjs7QUFJQSxJQUFNQSxLQUFLLEdBQUcsU0FBU0MsT0FBVCxHQUFvRDtBQUFBLE1BQW5DQyxLQUFtQyx1RUFBM0JILGlCQUEyQjtBQUFBLE1BQVJJLE1BQVE7QUFDOUQ7O0FBQ0EsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0ksYUFBT0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDNUJGLGFBQUssRUFBRUUsS0FBSyxDQUFDRixLQUFOLEdBQWM7QUFETyxPQUF6QixDQUFQOztBQUdKLFNBQUssS0FBTDtBQUNJLDZDQUFZRSxLQUFaO0FBQW1CRixhQUFLLEVBQUVFLEtBQUssQ0FBQ0YsS0FBTixHQUFjO0FBQXhDOztBQUNKO0FBQ0ksYUFBT0UsS0FBUDtBQVJSO0FBVUgsQ0FaRDs7QUFhQTtBQUVBLElBQU1LLGVBQWUsR0FBR0Msc0RBQWUsQ0FBQztBQUNwQ1IsT0FBSyxFQUFMQTtBQURvQyxDQUFELENBQXZDO0FBR0E7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQy9CLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkssdURBQXBCLEVBQTZCO0FBQ3pCLFFBQU1DLFNBQVMsbUNBQ1JSLEtBRFEsR0FFUkMsTUFBTSxDQUFDUSxPQUZDLENBQWY7O0FBSUEsUUFBSVQsS0FBSyxDQUFDRixLQUFOLENBQVlBLEtBQWhCLEVBQXVCVSxTQUFTLENBQUNWLEtBQVYsQ0FBZ0JBLEtBQWhCLEdBQXdCRSxLQUFLLENBQUNGLEtBQU4sQ0FBWUEsS0FBcEMsQ0FMRSxDQUt3Qzs7QUFDakUsV0FBT1UsU0FBUDtBQUNILEdBUEQsTUFPTztBQUNILFdBQU9ILGVBQWUsQ0FBQ0wsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0g7QUFDSixDQVhEOztBQWFBLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsU0FBT0Msa0RBQVcsQ0FBQ1osT0FBRCxDQUFsQjtBQUNILENBRkQ7O0FBR08sSUFBTWEsT0FBTyxHQUFHQyxpRUFBYSxDQUFDSCxTQUFELENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2I0ZGJiZDU0OWMyYThiYmI1MGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5cclxuY29uc3QgY291bnRJbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjb3VudDogMCxcclxufVxyXG5cclxuY29uc3QgY291bnQgPSBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gY291bnRJbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gICAgZGVidWdnZXJcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiSU5DXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50ICsgMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBjYXNlIFwiREVDXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3VudDogc3RhdGUuY291bnQgLSAxIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5kZWJ1Z2dlclxyXG5cclxuY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50LFxyXG59KVxyXG5kZWJ1Z2dlclxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLCAvLyB1c2UgcHJldmlvdXMgc3RhdGVcclxuICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsIC8vIGFwcGx5IGRlbHRhIGZyb20gaHlkcmF0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGF0ZS5jb3VudC5jb3VudCkgbmV4dFN0YXRlLmNvdW50LmNvdW50ID0gc3RhdGUuY291bnQuY291bnQgLy8gcHJlc2VydmUgY291bnQgdmFsdWUgb24gY2xpZW50IHNpZGUgbmF2aWdhdGlvblxyXG4gICAgICAgIHJldHVybiBuZXh0U3RhdGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcilcclxufVxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9