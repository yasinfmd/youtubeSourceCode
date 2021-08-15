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

  switch (action.type) {
    case "INC":
      debugger;
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case "DEC":
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count - action.payload
      });

    default:
      return state;
  }
};

var combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  count: count
});

var initStore = function initStore() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiY291bnRJbml0aWFsU3RhdGUiLCJjb3VudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUc7QUFDdEJDLE9BQUssRUFBRTtBQURlLENBQTFCOztBQUlBLElBQU1BLEtBQUssR0FBRyxTQUFTQyxPQUFULEdBQW9EO0FBQUEsTUFBbkNDLEtBQW1DLHVFQUEzQkgsaUJBQTJCO0FBQUEsTUFBUkksTUFBUTs7QUFDOUQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0k7QUFDQSxhQUFPQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixLQUFsQixFQUF5QjtBQUM1QkYsYUFBSyxFQUFFRSxLQUFLLENBQUNGLEtBQU4sR0FBYztBQURPLE9BQXpCLENBQVA7O0FBR0osU0FBSyxLQUFMO0FBQ0ksNkNBQVlFLEtBQVo7QUFBbUJGLGFBQUssRUFBRUUsS0FBSyxDQUFDRixLQUFOLEdBQWNHLE1BQU0sQ0FBQ0k7QUFBL0M7O0FBQ0o7QUFDSSxhQUFPTCxLQUFQO0FBVFI7QUFXSCxDQVpEOztBQWFBLElBQU1NLGVBQWUsR0FBR0Msc0RBQWUsQ0FBQztBQUNwQ1QsT0FBSyxFQUFMQTtBQURvQyxDQUFELENBQXZDOztBQUdBLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsU0FBT0Msa0RBQVcsQ0FBQ0gsZUFBRCxDQUFsQjtBQUNILENBRkQ7O0FBSU8sSUFBTUksT0FBTyxHQUFHQyxpRUFBYSxDQUFDSCxTQUFELENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTc0MmI0NDBjNjE5MTQwY2I5NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuXHJcbmNvbnN0IGNvdW50SW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY291bnQ6IDAsXHJcbn1cclxuXHJcbmNvbnN0IGNvdW50ID0gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGNvdW50SW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiSU5DXCI6XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50ICsgMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBjYXNlIFwiREVDXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3VudDogc3RhdGUuY291bnQgLSBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50LFxyXG59KVxyXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoY29tYmluZWRSZWR1Y2VyKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9