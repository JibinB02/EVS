"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/startelec",{

/***/ "./pages/startelec.js":
/*!****************************!*\
  !*** ./pages/startelec.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot */ \"./ballot.js\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n//const instance  = require(\"../election_creation\")\n\n\n//const web3 = require('../web3');\n\n\n\nclass StartElection extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Start Election\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Candidate Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.candidates,\n                                    onChange: (event)=>this.setState({\n                                            candidates: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Party Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.party,\n                                    onChange: (event)=>this.setState({\n                                            party: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"District Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.district,\n                                    onChange: (event)=>this.setState({\n                                            district: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Hour\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.hour,\n                                    onChange: (event)=>this.setState({\n                                            hour: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            primary: true,\n                            className: \"ui button\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/\",\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 99,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            candidates: [\n                []\n            ],\n            party: [\n                []\n            ],\n            district: \"\",\n            hour: 0\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            this.setState({\n                candidates: [\n                    []\n                ],\n                party: [\n                    []\n                ],\n                district: \"\",\n                hour: 0\n            });\n            try {\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(accounts + \" requests\");\n                await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.startelec([\n                    [\n                        \"jibin\"\n                    ]\n                ], [\n                    [\n                        \"bjp\"\n                    ]\n                ], [\n                    \"kollam\"\n                ], this.state.hour).send({\n                    from: accounts[0]\n                });\n            } catch (error) {\n                console.error(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartElection);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztvQkFDSkMsTUFBTVYsUUFBUSxDQUFDLEVBQUU7Z0JBQ25CO1lBQ04sRUFDQSxPQUFPVyxPQUFPO2dCQUNWTixRQUFRTSxLQUFLLENBQUNBO1lBQ2xCO1FBQ0o7O0FBNERBO0FBRUosK0RBQWUvQixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0YXJ0ZWxlYy5qcz9hOTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vY29uc3QgaW5zdGFuY2UgID0gcmVxdWlyZShcIi4uL2VsZWN0aW9uX2NyZWF0aW9uXCIpXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSBcIi4uL2VsZWN0aW9uX2NyZWF0aW9uXCI7XG5pbXBvcnQgYmFsbG90IGZyb20gXCIuLi9iYWxsb3RcIlxuLy9jb25zdCB3ZWIzID0gcmVxdWlyZSgnLi4vd2ViMycpO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL3dlYjNcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJ1xuXG5cbmNsYXNzIFN0YXJ0RWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjYW5kaWRhdGVzOiBbW11dLFxuICAgICAgICBwYXJ0eTogW1tdXSxcbiAgICAgICAgZGlzdHJpY3Q6IFwiXCIsXG4gICAgICAgIGhvdXI6IDBcbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSBhc3luYyhldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IFtbXV0sXG4gICAgICAgICAgICBwYXJ0eTogW1tdXSxcbiAgICAgICAgICAgIGRpc3RyaWN0OiBcIlwiLFxuICAgICAgICAgICAgaG91cjogMFxuICAgICAgICB9KTtcblxuICAgICAgICBcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzK1wiIHJlcXVlc3RzXCIpO1xuICAgICAgICAgICAgYXdhaXQgaW5zdGFuY2UubWV0aG9kc1xuICAgICAgICAgICAgLnN0YXJ0ZWxlYyhcbiAgICAgICAgICAgICAgICBbW1wiamliaW5cIl1dLFxuICAgICAgICAgICAgICAgIFtbXCJianBcIl1dLFxuICAgICAgICAgICAgICAgIFtcImtvbGxhbVwiXSwgLy8gV3JhcCBkaXN0cmljdCBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG91clxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDM+U3RhcnQgRWxlY3Rpb248L2gzPlxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+Q2FuZGlkYXRlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVpIGlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9IHt0aGlzLnN0YXRlLmNhbmRpZGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe2NhbmRpZGF0ZXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UGFydHkgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWkgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXJ0eX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGFydHk6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EaXN0cmljdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVpIGlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRpc3RyaWN0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc3RyaWN0OiBldmVudC50YXJnZXQudmFsdWUgfSl9XG5cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ib3VyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVpIGlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmhvdXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgaG91cjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlID0gXCIvXCI+XG4gICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBTdGFydEVsZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImluc3RhbmNlIiwiYmFsbG90Iiwid2ViMyIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMaW5rIiwiU3RhcnRFbGVjdGlvbiIsInJlbmRlciIsImgzIiwib25TdWJtaXQiLCJGaWVsZCIsImxhYmVsIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJzdGF0ZSIsImNhbmRpZGF0ZXMiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJwYXJ0eSIsImRpc3RyaWN0IiwiaG91ciIsInByaW1hcnkiLCJyb3V0ZSIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsInN0YXJ0ZWxlYyIsInNlbmQiLCJmcm9tIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/startelec.js\n"));

/***/ })

});