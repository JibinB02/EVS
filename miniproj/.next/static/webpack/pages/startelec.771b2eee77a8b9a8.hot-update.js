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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot */ \"./ballot.js\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n//const instance  = require(\"../election_creation\")\n\n\n//const web3 = require('../web3');\n\n\n\nclass StartElection extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Start Election\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Candidate Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.candidates,\n                                    onChange: (event)=>this.setState({\n                                            candidates: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Party Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.party,\n                                    onChange: (event)=>this.setState({\n                                            party: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"District Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.district,\n                                    onChange: (event)=>this.setState({\n                                            district: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Hour\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    className: \"ui input\",\n                                    value: this.state.hour,\n                                    onChange: (event)=>this.setState({\n                                            hour: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            primary: true,\n                            className: \"ui button\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 96,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/\",\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                            lineNumber: 101,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/startelec.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            candidates: [\n                []\n            ],\n            party: [\n                []\n            ],\n            district: \"\",\n            hour: 0\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            this.setState({\n                candidates: [\n                    []\n                ],\n                party: [\n                    []\n                ],\n                district: \"\",\n                hour: 0\n            });\n            try {\n                const { candidates, party, district, hour } = this.state;\n                console.log;\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(accounts + \" requests\");\n                await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.startelec(candidates, party, district, hour).send({\n                    from: accounts[0]\n                });\n            } catch (error) {\n                console.error(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartElection);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBQyxNQUVEYSxJQUFJLENBQUM7b0JBQ0pDLE1BQU1SLFFBQVEsQ0FBQyxFQUFFO2dCQUNuQjtZQUNOLEVBQ0EsT0FBT1MsT0FBTztnQkFDVlgsUUFBUVcsS0FBSyxDQUFDQTtZQUNsQjtRQUNKOztBQTREQTtBQUVKLCtEQUFlL0IsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdGFydGVsZWMuanM/YTkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vL2NvbnN0IGluc3RhbmNlICA9IHJlcXVpcmUoXCIuLi9lbGVjdGlvbl9jcmVhdGlvblwiKVxuaW1wb3J0IGluc3RhbmNlIGZyb20gXCIuLi9lbGVjdGlvbl9jcmVhdGlvblwiO1xuaW1wb3J0IGJhbGxvdCBmcm9tIFwiLi4vYmFsbG90XCJcbi8vY29uc3Qgd2ViMyA9IHJlcXVpcmUoJy4uL3dlYjMnKTtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi93ZWIzXCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcydcblxuXG5jbGFzcyBTdGFydEVsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY2FuZGlkYXRlczogW1tdXSxcbiAgICAgICAgcGFydHk6IFtbXV0sXG4gICAgICAgIGRpc3RyaWN0OiBcIlwiLFxuICAgICAgICBob3VyOiAwXG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYW5kaWRhdGVzOiBbW11dLFxuICAgICAgICAgICAgcGFydHk6IFtbXV0sXG4gICAgICAgICAgICBkaXN0cmljdDogXCJcIixcbiAgICAgICAgICAgIGhvdXI6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IGNhbmRpZGF0ZXMsIHBhcnR5LCBkaXN0cmljdCwgaG91ciB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZ1xuICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50cytcIiByZXF1ZXN0c1wiKTtcbiAgICAgICAgICAgIGF3YWl0IGluc3RhbmNlLm1ldGhvZHNcbiAgICAgICAgICAgIC5zdGFydGVsZWMoXG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlcyxcbiAgICAgICAgICAgICAgICBwYXJ0eSxcbiAgICAgICAgICAgICAgICBkaXN0cmljdCwgLy8gV3JhcCBkaXN0cmljdCBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGhvdXJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgzPlN0YXJ0IEVsZWN0aW9uPC9oMz5cbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkNhbmRpZGF0ZSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1aSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSB7dGhpcy5zdGF0ZS5jYW5kaWRhdGVzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHtjYW5kaWRhdGVzOiBldmVudC50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlBhcnR5IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVpIGlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFydHl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3BhcnR5OiBldmVudC50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGlzdHJpY3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1aSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kaXN0cmljdH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBkaXN0cmljdDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SG91cjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1aSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ob3VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGhvdXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBjbGFzc05hbWU9XCJ1aSBidXR0b25cIj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZSA9IFwiL1wiPlxuICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRFbGVjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJpbnN0YW5jZSIsImJhbGxvdCIsIndlYjMiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGluayIsIlN0YXJ0RWxlY3Rpb24iLCJyZW5kZXIiLCJoMyIsIm9uU3VibWl0IiwiRmllbGQiLCJsYWJlbCIsImNsYXNzTmFtZSIsInZhbHVlIiwic3RhdGUiLCJjYW5kaWRhdGVzIiwib25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwicGFydHkiLCJkaXN0cmljdCIsImhvdXIiLCJwcmltYXJ5Iiwicm91dGUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsIm1ldGhvZHMiLCJzdGFydGVsZWMiLCJzZW5kIiwiZnJvbSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/startelec.js\n"));

/***/ })

});