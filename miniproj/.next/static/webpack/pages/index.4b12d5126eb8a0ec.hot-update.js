"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot.js */ \"./ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n\n\n\n\n\n\n\nclass ElectionCreation extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // console.log(\"ballot\", ballotAddress.methods)\n    // console.log(\"instance\",instance.methods)\n    // return { electionAddresses };\n    //}\n    render() {\n        const { electionAddresses } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Election Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                        onSubmit: this.onSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: [\n                                \"get candidate name\",\n                                this.onSubmitcandidateName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                            route: \"startelec\",\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    constructor(...args){\n        super(...args);\n        // static async getInitialProps() {\n        //console.log(\"accountsss\",accounts)\n        //const electionAddresses = await instance.methods.getsDeployedBallots().call();\n        //const manager = await ballotAddress.methods.manager().call();\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses = await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getsDeployedBallots().call();\n            console.log(\"electionAddresses\", electionAddresses);\n            const ballotAddresses = [];\n            for (const address of electionAddresses){\n                const ballotAddress = await (0,_ballot_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                ballotAddresses.push(ballotAddress);\n            }\n            console.log(\"ballotss\", ballotAddresses);\n            try {\n                // const candidates = await ballotAddress.methods.candidates(0).call();\n                // console.log(\"candidates\", candidates);\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(\"accounts\", accounts);\n                const candidateName = await ballotAddresses[3].methods.getCandidateName(0).call();\n                console.log(\"candidatess\", candidateName);\n                this.setState = {\n                    candidateName\n                };\n            } catch (errors) {\n                console.log(\"error\", errors);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElectionCreation);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFTYjtBQUNrQjtBQUNWO0FBQ0g7QUFDSjtBQUczQixNQUFNYSx5QkFBeUJaLDRDQUFTQTtJQXdDaEMsK0NBQStDO0lBQy9DLDJDQUEyQztJQUUzQyxnQ0FBZ0M7SUFDcEMsR0FBRztJQUVIYSxTQUFTO1FBQ0wsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUV4QyxxQkFDSTtzQkFDSiw0RUFBQ0M7O2tDQUNELDhEQUFDQztrQ0FBRzs7Ozs7O2tDQVVKLDhEQUFDWixtREFBSUE7d0JBQUNhLFVBQVksSUFBSSxDQUFDQSxRQUFRO2tDQUMzQiw0RUFBQ2YscURBQU1BOztnQ0FBQztnQ0FFSCxJQUFJLENBQUNnQixxQkFBcUI7Ozs7Ozs7Ozs7OztrQ0FHbkMsOERBQUNoQixxREFBTUE7a0NBQ0wsNEVBQUNPLHlDQUFJQTs0QkFBQ1UsT0FBTTtzQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2hDOzs7UUF4RUUsbUNBQW1DO1FBRS9CLG9DQUFvQztRQUNwQyxnRkFBZ0Y7UUFFL0UsK0RBQStEO2FBRWhFRixXQUFXLE9BQU1HO1lBRWJBLE1BQU1DLGNBQWM7WUFFbkIsTUFBTVIsb0JBQW1CLE1BQU1OLGtFQUFnQixDQUFDZ0IsbUJBQW1CLEdBQUdDLElBQUk7WUFDM0VDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBb0JiO1lBQ2hDLE1BQU1jLGtCQUFrQixFQUFFO1lBQzFCLEtBQUssTUFBTUMsV0FBV2Ysa0JBQW1CO2dCQUNyQyxNQUFNZ0IsZ0JBQWdCLE1BQU1yQixzREFBTUEsQ0FBQ29CO2dCQUNuQ0QsZ0JBQWdCRyxJQUFJLENBQUNEO1lBQ3ZCO1lBRUZKLFFBQVFDLEdBQUcsQ0FBQyxZQUFXQztZQUV2QixJQUFJO2dCQUNBLHVFQUF1RTtnQkFDdkUseUNBQXlDO2dCQUN6QyxNQUFNSSxXQUFXLE1BQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO29CQUFFQyxRQUFRO2dCQUFzQjtnQkFDL0VWLFFBQVFDLEdBQUcsQ0FBQyxZQUFXSztnQkFDakIsTUFBTUssZ0JBQWdCLE1BQU1ULGVBQWUsQ0FBQyxFQUFFLENBQUNMLE9BQU8sQ0FBQ2UsZ0JBQWdCLENBQUMsR0FBR2IsSUFBSTtnQkFDdEZDLFFBQVFDLEdBQUcsQ0FBQyxlQUFjVTtnQkFDMUIsSUFBSSxDQUFDRSxRQUFRLEdBQUk7b0JBQUNGO2dCQUFhO1lBQ2xDLEVBQ0EsT0FBT0csUUFBTztnQkFDVmQsUUFBUUMsR0FBRyxDQUFDLFNBQVFhO1lBRXhCO1FBR0o7O0FBcUNSO0FBRUEsK0RBQWU1QixnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEdyaWRDb2x1bW4sXG4gIEZvcm1JbnB1dCxcbiAgQnV0dG9uLFxuICBEaXZpZGVyLFxuICBGb3JtLFxuICBHcmlkLFxuICBTZWdtZW50LFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBpbnN0YW5jZSBmcm9tIFwiLi4vZWxlY3Rpb25fY3JlYXRpb25cIjtcbmltcG9ydCBiYWxsb3QgZnJvbSBcIi4uL2JhbGxvdC5qc1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vd2ViM1wiO1xuXG5cbmNsYXNzIEVsZWN0aW9uQ3JlYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImFjY291bnRzc3NcIixhY2NvdW50cylcbiAgICAgICAgLy9jb25zdCBlbGVjdGlvbkFkZHJlc3NlcyA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0c0RlcGxveWVkQmFsbG90cygpLmNhbGwoKTtcbiAgICAgICAgXG4gICAgICAgICAvL2NvbnN0IG1hbmFnZXIgPSBhd2FpdCBiYWxsb3RBZGRyZXNzLm1ldGhvZHMubWFuYWdlcigpLmNhbGwoKTtcbiAgIFxuICAgICAgICBvblN1Ym1pdCA9IGFzeW5jKGV2ZW50KT0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXM9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0c0RlcGxveWVkQmFsbG90cygpLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxlY3Rpb25BZGRyZXNzZXNcIixlbGVjdGlvbkFkZHJlc3NlcylcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdEFkZHJlc3NlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRyZXNzIG9mIGVsZWN0aW9uQWRkcmVzc2VzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFsbG90QWRkcmVzcyA9IGF3YWl0IGJhbGxvdChhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBiYWxsb3RBZGRyZXNzZXMucHVzaChiYWxsb3RBZGRyZXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGxvdHNzXCIsYmFsbG90QWRkcmVzc2VzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNhbmRpZGF0ZXMgPSBhd2FpdCBiYWxsb3RBZGRyZXNzLm1ldGhvZHMuY2FuZGlkYXRlcygwKS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYW5kaWRhdGVzXCIsIGNhbmRpZGF0ZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIixhY2NvdW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlTmFtZSA9IGF3YWl0IGJhbGxvdEFkZHJlc3Nlc1szXS5tZXRob2RzLmdldENhbmRpZGF0ZU5hbWUoMCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW5kaWRhdGVzc1wiLGNhbmRpZGF0ZU5hbWUpO1xuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSA9ICh7Y2FuZGlkYXRlTmFtZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3JzKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsZXJyb3JzKTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYWxsb3RcIiwgYmFsbG90QWRkcmVzcy5tZXRob2RzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc3RhbmNlXCIsaW5zdGFuY2UubWV0aG9kcylcbiAgICAgICAgXG4gICAgICAgIC8vIHJldHVybiB7IGVsZWN0aW9uQWRkcmVzc2VzIH07XG4gICAgLy99XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZWxlY3Rpb25BZGRyZXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkVsZWN0aW9uIEFkZHJlc3NlczwvaDE+XG4gICAgICAgIHsvKiA8R3JpZD5cbiAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17MX0+XG4gICAgICAgICAgICB7ZWxlY3Rpb25BZGRyZXNzZXMubWFwKChuYW1lcywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxTZWdtZW50PntuYW1lc308L1NlZ21lbnQ+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgZ2V0IGNhbmRpZGF0ZSBuYW1lXG4gICAgICAgICAgICAgICAge3RoaXMub25TdWJtaXRjYW5kaWRhdGVOYW1lfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayByb3V0ZT1cInN0YXJ0ZWxlY1wiPkJhY2s8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZWN0aW9uQ3JlYXRpb25cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkdyaWRDb2x1bW4iLCJGb3JtSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwiRm9ybSIsIkdyaWQiLCJTZWdtZW50IiwiaW5zdGFuY2UiLCJiYWxsb3QiLCJMaW5rIiwid2ViMyIsIkVsZWN0aW9uQ3JlYXRpb24iLCJyZW5kZXIiLCJlbGVjdGlvbkFkZHJlc3NlcyIsInByb3BzIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsIm9uU3VibWl0Y2FuZGlkYXRlTmFtZSIsInJvdXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJnZXRzRGVwbG95ZWRCYWxsb3RzIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJiYWxsb3RBZGRyZXNzZXMiLCJhZGRyZXNzIiwiYmFsbG90QWRkcmVzcyIsInB1c2giLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNhbmRpZGF0ZU5hbWUiLCJnZXRDYW5kaWRhdGVOYW1lIiwic2V0U3RhdGUiLCJlcnJvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});