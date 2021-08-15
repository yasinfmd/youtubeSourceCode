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

var initStore = function initStore() {
  debugger;
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(combinedReducer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiY291bnRJbml0aWFsU3RhdGUiLCJjb3VudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN0QkMsT0FBSyxFQUFFO0FBRGUsQ0FBMUI7O0FBSUEsSUFBTUEsS0FBSyxHQUFHLFNBQVNDLE9BQVQsR0FBb0Q7QUFBQSxNQUFuQ0MsS0FBbUMsdUVBQTNCSCxpQkFBMkI7QUFBQSxNQUFSSSxNQUFRO0FBQzlEOztBQUNBLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssS0FBTDtBQUNJLGFBQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLEtBQWxCLEVBQXlCO0FBQzVCRixhQUFLLEVBQUVFLEtBQUssQ0FBQ0YsS0FBTixHQUFjO0FBRE8sT0FBekIsQ0FBUDs7QUFHSixTQUFLLEtBQUw7QUFDSSw2Q0FBWUUsS0FBWjtBQUFtQkYsYUFBSyxFQUFFRSxLQUFLLENBQUNGLEtBQU4sR0FBYztBQUF4Qzs7QUFDSjtBQUNJLGFBQU9FLEtBQVA7QUFSUjtBQVVILENBWkQ7O0FBYUE7QUFFQSxJQUFNSyxlQUFlLEdBQUdDLHNEQUFlLENBQUM7QUFDcENSLE9BQUssRUFBTEE7QUFEb0MsQ0FBRCxDQUF2QztBQUdBOztBQUVBLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEI7QUFDQSxTQUFPQyxrREFBVyxDQUFDSCxlQUFELENBQWxCO0FBQ0gsQ0FIRDs7QUFLTyxJQUFNSSxPQUFPLEdBQUdDLGlFQUFhLENBQUNILFNBQUQsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iOTU2MTBjNGQ3ZjNhYTQxZWUyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcblxyXG5jb25zdCBjb3VudEluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNvdW50OiAwLFxyXG59XHJcblxyXG5jb25zdCBjb3VudCA9IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBjb3VudEluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJJTkNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGNhc2UgXCJERUNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdW50OiBzdGF0ZS5jb3VudCAtIDEgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbmRlYnVnZ2VyXHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnQsXHJcbn0pXHJcbmRlYnVnZ2VyXHJcblxyXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNvbWJpbmVkUmVkdWNlcilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==