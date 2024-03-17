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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot */ \"./ballot.js\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n//const instance  = require(\"../election_creation\")\n\n\n//const web3 = require('../web3');\n\n\n\nclass StartElection extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Start Election\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Candidate Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.candidates,\n                                    onChange: (event)=>this.setState({\n                                            candidates: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Party Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.party,\n                                    onChange: (event)=>this.setState({\n                                            party: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"District Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.district,\n                                    onChange: (event)=>this.setState({\n                                            district: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Hour\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.hour,\n                                    onChange: (event)=>this.setState({\n                                            hour: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            primary: true,\n                            className: \"ui button\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/\",\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 99,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            candidates: [\n                []\n            ],\n            party: [\n                []\n            ],\n            district: \"\",\n            hour: 0\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            this.setState({\n                candidates: [\n                    []\n                ],\n                party: [\n                    []\n                ],\n                district: \"\",\n                hour: 0\n            });\n            try {\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(accounts + \" requests\");\n                await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.startelec([\n                    [\n                        \"jibin\"\n                    ]\n                ], [\n                    [\n                        \"bjp\"\n                    ]\n                ], [\n                    \"kollam\"\n                ]).send({\n                    from: accounts[0]\n                });\n            } catch (error) {\n                console.error(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartElection);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDbkI7WUFDTixFQUNBLE9BQU9XLE9BQU87Z0JBQ1ZOLFFBQVFNLEtBQUssQ0FBQ0E7WUFDbEI7UUFDSjs7QUE0REE7QUFFSiwrREFBZS9CLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RhcnRlbGVjLmpzP2E5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy9jb25zdCBpbnN0YW5jZSAgPSByZXF1aXJlKFwiLi4vZWxlY3Rpb25fY3JlYXRpb25cIilcbmltcG9ydCBpbnN0YW5jZSBmcm9tIFwiLi4vZWxlY3Rpb25fY3JlYXRpb25cIjtcbmltcG9ydCBiYWxsb3QgZnJvbSBcIi4uL2JhbGxvdFwiXG4vL2NvbnN0IHdlYjMgPSByZXF1aXJlKCcuLi93ZWIzJyk7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vd2ViM1wiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5cblxuY2xhc3MgU3RhcnRFbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNhbmRpZGF0ZXM6IFtbXV0sXG4gICAgICAgIHBhcnR5OiBbW11dLFxuICAgICAgICBkaXN0cmljdDogXCJcIixcbiAgICAgICAgaG91cjogMFxuICAgIH07XG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2FuZGlkYXRlczogW1tdXSxcbiAgICAgICAgICAgIHBhcnR5OiBbW11dLFxuICAgICAgICAgICAgZGlzdHJpY3Q6IFwiXCIsXG4gICAgICAgICAgICBob3VyOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMrXCIgcmVxdWVzdHNcIik7XG4gICAgICAgICAgICBhd2FpdCBpbnN0YW5jZS5tZXRob2RzXG4gICAgICAgICAgICAuc3RhcnRlbGVjKFxuICAgICAgICAgICAgICAgIFtbXCJqaWJpblwiXV0sXG4gICAgICAgICAgICAgICAgW1tcImJqcFwiXV0sXG4gICAgICAgICAgICAgICAgW1wia29sbGFtXCJdLCAvLyBXcmFwIGRpc3RyaWN0IGluIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz5TdGFydCBFbGVjdGlvbjwvaDM+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5DYW5kaWRhdGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWkgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0ge3RoaXMuc3RhdGUuY2FuZGlkYXRlc31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7Y2FuZGlkYXRlczogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QYXJ0eSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1aSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhcnR5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHtwYXJ0eTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkRpc3RyaWN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWkgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGlzdHJpY3R9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgZGlzdHJpY3Q6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cblxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkhvdXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWkgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaG91cn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBob3VyOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGUgPSBcIi9cIj5cbiAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0RWxlY3Rpb247Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiaW5zdGFuY2UiLCJiYWxsb3QiLCJ3ZWIzIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxpbmsiLCJTdGFydEVsZWN0aW9uIiwicmVuZGVyIiwiaDMiLCJvblN1Ym1pdCIsIkZpZWxkIiwibGFiZWwiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsInN0YXRlIiwiY2FuZGlkYXRlcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInBhcnR5IiwiZGlzdHJpY3QiLCJob3VyIiwicHJpbWFyeSIsInJvdXRlIiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwic3RhcnRlbGVjIiwic2VuZCIsImZyb20iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/startelec.js\n"));

/***/ })

});