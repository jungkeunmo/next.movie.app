webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_MovieBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MovieBox */ \"./components/MovieBox.jsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/junggeunmo/Documents/2th/next.app1/pages/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-bmvih5-0\"\n})([\"width:100%;padding:60px 220px;display:flex;flex-direction:row;align-items:flex-start;justify-content:center;flex-wrap:wrap;\"]);\n_c = Wrapper;\n\nvar MyApp = function MyApp() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      list = _useState[0],\n      setList = _useState[1];\n\n  var getMovie = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var movies;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://api.themoviedb.org/3/movie/popular?api_key=6f468133ad08eef8c7a50210567d8a1b&language=en-US\");\n\n            case 2:\n              movies = _context.sent;\n              setList(movies.data.results);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getMovie() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    getMovie();\n  }, []);\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, list.map(function (m, idx) {\n    return __jsx(_components_MovieBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 30\n      }\n    });\n  }));\n};\n\n_s(MyApp, \"ZBNfaudzy8bVxb8UgkyyMnLdlWY=\");\n\n_c2 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk15QXBwIiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImdldE1vdmllIiwiYXhpb3MiLCJnZXQiLCJtb3ZpZXMiLCJkYXRhIiwicmVzdWx0cyIsInVzZUVmZmVjdCIsIm1hcCIsIm0iLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1JQUFiO0tBQU1GLE87O0FBWU4sSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVoQixrQkFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNRQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsb0dBQVYsQ0FEUjs7QUFBQTtBQUNQQyxvQkFETztBQUdiSixxQkFBTyxDQUFDSSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsT0FBYixDQUFQOztBQUhhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJMLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFNQU0seURBQVMsQ0FBQyxZQUFNO0FBQ1pOLFlBQVE7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDQSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRixJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSxXQUFZLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFaO0FBQUEsR0FBVCxDQURKLENBREE7QUFLSCxDQW5CRDs7R0FBTWIsSzs7TUFBQUEsSztBQXFCU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTW92aWVCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTW92aWVCb3hcIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNjBweCAyMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGZsZXgtd3JhcDogd3JhcDtcbmA7XG5cbmNvbnN0IE15QXBwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgZ2V0TW92aWUgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgbW92aWVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9NmY0NjgxMzNhZDA4ZWVmOGM3YTUwMjEwNTY3ZDhhMWImbGFuZ3VhZ2U9ZW4tVVNcIilcblxuICAgICAgICBzZXRMaXN0KG1vdmllcy5kYXRhLnJlc3VsdHMpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldE1vdmllKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgICB7bGlzdC5tYXAoKG0sIGlkeCkgPT4gPE1vdmllQm94IC8+KX1cbiAgICA8L1dyYXBwZXI+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})