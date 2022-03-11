webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MovieBox.jsx":
/*!*********************************!*\
  !*** ./components/MovieBox.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/junggeunmo/Documents/2th/next.app1/components/MovieBox.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"MovieBox__Box\",\n  componentId: \"sc-1b4wn6i-0\"\n})([\"width:350px;min-width:400px;height:210px;background-color:#eee;margin:40px;border-radius:7px;box-shadow:2px 2px 4px #999;padding:5px;display:flex;flex-direction:row;\"]);\n_c = Box;\nvar PosterDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"MovieBox__PosterDiv\",\n  componentId: \"sc-1b4wn6i-1\"\n})([\"width:120px;height:100%;\"]);\n_c2 = PosterDiv;\nvar ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"MovieBox__ContentDiv\",\n  componentId: \"sc-1b4wn6i-2\"\n})([\"width:calc(100% - 120px);height:100%;\"]);\n_c3 = ContentDiv;\nvar PosterImg = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img.withConfig({\n  displayName: \"MovieBox__PosterImg\",\n  componentId: \"sc-1b4wn6i-3\"\n})([\"width:130px;object-fit:cover;margin-top:-20px;margin-left:-20px;border-radius:7px;box-shadow:4px 4px 2px #999;\"]);\n_c4 = PosterImg;\nvar Titile = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"MovieBox__Titile\",\n  componentId: \"sc-1b4wn6i-4\"\n})([\"font-weight:bold;margin-bottom:7px;font-size:16px;\"]);\n_c5 = Titile;\nvar Vote = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"MovieBox__Vote\",\n  componentId: \"sc-1b4wn6i-5\"\n})([\"font-size:13px;color:#999;margin-bottom:6px;\"]);\n_c6 = Vote;\nvar Overview = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"MovieBox__Overview\",\n  componentId: \"sc-1b4wn6i-6\"\n})([\"word-break:break-all;color:#999;font-size:12px;\"]);\n_c7 = Overview;\n\nvar MovieBox = function MovieBox(_ref) {\n  var title = _ref.title,\n      vote = _ref.vote,\n      over = _ref.over,\n      posterPath = _ref.posterPath;\n  return __jsx(Box, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(PosterDiv, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(PosterImg, {\n    src: \"https://i.pinimg.com/474x/a2/34/31/a23431e4c5070995a3863212368bde7c.jpg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  })), __jsx(ContentDiv, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(Titile, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }, title), __jsx(Vote, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, \"Vote\"), __jsx(Overview, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, \"Overview\")));\n};\n\n_c8 = MovieBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieBox);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Box\");\n$RefreshReg$(_c2, \"PosterDiv\");\n$RefreshReg$(_c3, \"ContentDiv\");\n$RefreshReg$(_c4, \"PosterImg\");\n$RefreshReg$(_c5, \"Titile\");\n$RefreshReg$(_c6, \"Vote\");\n$RefreshReg$(_c7, \"Overview\");\n$RefreshReg$(_c8, \"MovieBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUJveC5qc3g/YzViMSJdLCJuYW1lcyI6WyJCb3giLCJzdHlsZWQiLCJkaXYiLCJQb3N0ZXJEaXYiLCJDb250ZW50RGl2IiwiUG9zdGVySW1nIiwiaW1nIiwiVGl0aWxlIiwiVm90ZSIsIk92ZXJ2aWV3IiwiTW92aWVCb3giLCJ0aXRsZSIsInZvdGUiLCJvdmVyIiwicG9zdGVyUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZLQUFUO0tBQU1GLEc7QUFnQk4sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdDQUFmO01BQU1DLFM7QUFLTixJQUFNQyxVQUFVLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkNBQWhCO01BQU1FLFU7QUFLTixJQUFNQyxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0hBQWY7TUFBTUQsUztBQVlOLElBQU1FLE1BQU0sR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwREFBWjtNQUFNSyxNO0FBT04sSUFBTUMsSUFBSSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFWO01BQU1NLEk7QUFPTixJQUFNQyxRQUFRLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdURBQWQ7TUFBTU8sUTs7QUFPTixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFzQztBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbkQsU0FDSSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFEO0FBQVcsT0FBRyxFQUFDLHlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTSCxLQUFULENBREosRUFFSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosQ0FKSixDQURKO0FBWUgsQ0FiRDs7TUFBTUQsUTtBQWVTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW92aWVCb3guanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgbWFyZ2luOiA0MHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICM5OTk7XG5cbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5jb25zdCBQb3N0ZXJEaXYgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5jb25zdCBDb250ZW50RGl2ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IFBvc3RlckltZyA9IHN0eWxlZC5pbWdgXG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAycHggIzk5OTtcbmA7XG5cbmNvbnN0IFRpdGlsZSA9IHN0eWxlZC5kaXZgXG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIG1hcmdpbi1ib3R0b206IDdweDtcblxuICAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY29uc3QgVm90ZSA9IHN0eWxlZC5kaXZgXG4gICBmb250LXNpemU6IDEzcHg7XG4gICBjb2xvcjogIzk5OTtcbiAgIFxuICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuYDtcblxuY29uc3QgT3ZlcnZpZXcgPSBzdHlsZWQuZGl2YFxuICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgY29sb3I6ICM5OTk7XG5cbiAgIGZvbnQtc2l6ZTogMTJweDtcbmA7XG5cbmNvbnN0IE1vdmllQm94ID0gKHsgdGl0bGUsIHZvdGUsIG92ZXIsIHBvc3RlclBhdGh9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxQb3N0ZXJEaXY+XG4gICAgICAgICAgICAgICAgPFBvc3RlckltZyBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS80NzR4L2EyLzM0LzMxL2EyMzQzMWU0YzUwNzA5OTVhMzg2MzIxMjM2OGJkZTdjLmpwZ1wiPjwvUG9zdGVySW1nPlxuICAgICAgICAgICAgPC9Qb3N0ZXJEaXY+XG4gICAgICAgICAgICA8Q29udGVudERpdj5cbiAgICAgICAgICAgICAgICA8VGl0aWxlPnt0aXRsZX08L1RpdGlsZT5cbiAgICAgICAgICAgICAgICA8Vm90ZT5Wb3RlPC9Wb3RlPlxuICAgICAgICAgICAgICAgIDxPdmVydmlldz5PdmVydmlldzwvT3ZlcnZpZXc+XG4gICAgICAgICAgICA8L0NvbnRlbnREaXY+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQm94OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MovieBox.jsx\n");

/***/ })

})