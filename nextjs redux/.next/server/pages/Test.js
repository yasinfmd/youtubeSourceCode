(function() {
var exports = {};
exports.id = "pages/Test";
exports.ids = ["pages/Test"];
exports.modules = {

/***/ "./components/SayacGoster.js":
/*!***********************************!*\
  !*** ./components/SayacGoster.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ysndl\\Desktop\\test-app\\components\\SayacGoster.js";


const SayacGoster = () => {
  const {
    count
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Say\u0131 ", count.count]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SayacGoster);

/***/ }),

/***/ "./pages/Test.js":
/*!***********************!*\
  !*** ./pages/Test.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SayacGoster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SayacGoster */ "./components/SayacGoster.js");

var _jsxFileName = "C:\\Users\\ysndl\\Desktop\\test-app\\pages\\Test.js";




const Test = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Test Saytfas\u0131", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => {
        dispatch({
          type: "INC",
          payload: 5
        });
      },
      children: "Artt\u0131r"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => {
        dispatch({
          type: "DEC",
          payload: 3
        });
      },
      children: "Azalt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SayacGoster__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/Test.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWFwcC8uL2NvbXBvbmVudHMvU2F5YWNHb3N0ZXIuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9wYWdlcy9UZXN0LmpzIiwid2VicGFjazovL3Rlc3QtYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90ZXN0LWFwcC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJTYXlhY0dvc3RlciIsImNvdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIlRlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0EsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFFQztBQUFGLE1BQVlDLHdEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBWixDQUE3QjtBQUNBLHNCQUNJO0FBQUEsNkJBQ1VGLEtBQUssQ0FBQ0EsS0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQVBEOztBQVFBLCtEQUFlRCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNSSxJQUFJLEdBQUcsTUFBTTtBQUNmLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQSxzQkFDSTtBQUFBLGtEQUVJO0FBQ0ksYUFBTyxFQUFFLE1BQU07QUFDWEQsZ0JBQVEsQ0FBQztBQUFFRSxjQUFJLEVBQUUsS0FBUjtBQUFlQyxpQkFBTyxFQUFFO0FBQXhCLFNBQUQsQ0FBUjtBQUNILE9BSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFPSTtBQUNJLGFBQU8sRUFBRSxNQUFNO0FBQ1hILGdCQUFRLENBQUM7QUFBRUUsY0FBSSxFQUFFLEtBQVI7QUFBZUMsaUJBQU8sRUFBRTtBQUF4QixTQUFELENBQVI7QUFDSCxPQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBY0ksOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1CSCxDQXJCRDs7QUFzQkEsK0RBQWVKLElBQWYsRTs7Ozs7Ozs7Ozs7QUN6QkEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvVGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmNvbnN0IFNheWFjR29zdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb3VudCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgU2F5xLEge2NvdW50LmNvdW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNheWFjR29zdGVyIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBTYXlhY0dvc3RlciBmcm9tICcuLi9jb21wb25lbnRzL1NheWFjR29zdGVyJ1xyXG5jb25zdCBUZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFRlc3QgU2F5dGZhc8SxXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiSU5DXCIsIHBheWxvYWQ6IDUgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5BcnR0xLFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiREVDXCIsIHBheWxvYWQ6IDMgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5BemFsdDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxTYXlhY0dvc3RlciAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUZXN0XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9