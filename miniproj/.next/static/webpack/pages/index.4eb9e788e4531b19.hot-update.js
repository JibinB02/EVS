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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot.js */ \"./ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n\n\n\n\n\n\n\nclass ElectionCreation extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // console.log(\"ballot\", ballotAddress.methods)\n    // console.log(\"instance\",instance.methods)\n    // return { electionAddresses };\n    //}\n    render() {\n        const { electionAddresses } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Election Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                        onSubmit: this.onSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: \"get candidate name\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                            route: \"startelec\",\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    constructor(...args){\n        super(...args);\n        // static async getInitialProps() {\n        //console.log(\"accountsss\",accounts)\n        //const electionAddresses = await instance.methods.getsDeployedBallots().call();\n        //const manager = await ballotAddress.methods.manager().call();\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses = await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getsDeployedBallots().call();\n            console.log(\"electionAddresses\", electionAddresses);\n            const ballotAddresses = [];\n            for (const address of electionAddresses){\n                const ballotAddress = await (0,_ballot_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                ballotAddresses.push(ballotAddress);\n            }\n            console.log(\"ballotss\", ballotAddresses);\n            try {\n                // const candidates = await ballotAddress.methods.candidates(0).call();\n                // console.log(\"candidates\", candidates);\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(\"accounts\", accounts);\n                const candidateName = await ballotAddresses[3].methods.getCandidateName(0).call();\n                console.log(\"candidatess\", candidateName);\n            } catch (errors) {\n                console.log(\"error\", errors);\n            }\n            return {\n                candida\n            };\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElectionCreation);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFTYjtBQUNrQjtBQUNWO0FBQ0g7QUFDSjtBQUczQixNQUFNYSx5QkFBeUJaLDRDQUFTQTtJQXVDaEMsK0NBQStDO0lBQy9DLDJDQUEyQztJQUUzQyxnQ0FBZ0M7SUFDcEMsR0FBRztJQUVIYSxTQUFTO1FBQ0wsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUV4QyxxQkFDSTtzQkFDSiw0RUFBQ0M7O2tDQUNELDhEQUFDQztrQ0FBRzs7Ozs7O2tDQVVKLDhEQUFDWixtREFBSUE7d0JBQUNhLFVBQVksSUFBSSxDQUFDQSxRQUFRO2tDQUMzQiw0RUFBQ2YscURBQU1BO3NDQUFDOzs7Ozs7Ozs7OztrQ0FJWiw4REFBQ0EscURBQU1BO2tDQUNMLDRFQUFDTyx5Q0FBSUE7NEJBQUNTLE9BQU07c0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtoQzs7O1FBdEVFLG1DQUFtQztRQUUvQixvQ0FBb0M7UUFDcEMsZ0ZBQWdGO1FBRS9FLCtEQUErRDthQUVoRUQsV0FBVyxPQUFNRTtZQUViQSxNQUFNQyxjQUFjO1lBRW5CLE1BQU1QLG9CQUFtQixNQUFNTixrRUFBZ0IsQ0FBQ2UsbUJBQW1CLEdBQUdDLElBQUk7WUFDM0VDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBb0JaO1lBQ2hDLE1BQU1hLGtCQUFrQixFQUFFO1lBQzFCLEtBQUssTUFBTUMsV0FBV2Qsa0JBQW1CO2dCQUNyQyxNQUFNZSxnQkFBZ0IsTUFBTXBCLHNEQUFNQSxDQUFDbUI7Z0JBQ25DRCxnQkFBZ0JHLElBQUksQ0FBQ0Q7WUFDdkI7WUFFRkosUUFBUUMsR0FBRyxDQUFDLFlBQVdDO1lBRXZCLElBQUk7Z0JBQ0EsdUVBQXVFO2dCQUN2RSx5Q0FBeUM7Z0JBQ3pDLE1BQU1JLFdBQVcsTUFBTUMsT0FBT0MsUUFBUSxDQUFDQyxPQUFPLENBQUM7b0JBQUVDLFFBQVE7Z0JBQXNCO2dCQUMvRVYsUUFBUUMsR0FBRyxDQUFDLFlBQVdLO2dCQUNqQixNQUFNSyxnQkFBZ0IsTUFBTVQsZUFBZSxDQUFDLEVBQUUsQ0FBQ0wsT0FBTyxDQUFDZSxnQkFBZ0IsQ0FBQyxHQUFHYixJQUFJO2dCQUN0RkMsUUFBUUMsR0FBRyxDQUFDLGVBQWNVO1lBQzdCLEVBQ0EsT0FBT0UsUUFBTztnQkFDVmIsUUFBUUMsR0FBRyxDQUFDLFNBQVFZO1lBRXhCO1lBRUEsT0FBTztnQkFBQ0M7WUFBTztRQUNuQjs7QUFvQ1I7QUFFQSwrREFBZTNCLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgR3JpZENvbHVtbixcbiAgRm9ybUlucHV0LFxuICBCdXR0b24sXG4gIERpdmlkZXIsXG4gIEZvcm0sXG4gIEdyaWQsXG4gIFNlZ21lbnQsXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IGluc3RhbmNlIGZyb20gXCIuLi9lbGVjdGlvbl9jcmVhdGlvblwiO1xuaW1wb3J0IGJhbGxvdCBmcm9tIFwiLi4vYmFsbG90LmpzXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi93ZWIzXCI7XG5cblxuY2xhc3MgRWxlY3Rpb25DcmVhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICAgIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWNjb3VudHNzc1wiLGFjY291bnRzKVxuICAgICAgICAvL2NvbnN0IGVsZWN0aW9uQWRkcmVzc2VzID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRzRGVwbG95ZWRCYWxsb3RzKCkuY2FsbCgpO1xuICAgICAgICBcbiAgICAgICAgIC8vY29uc3QgbWFuYWdlciA9IGF3YWl0IGJhbGxvdEFkZHJlc3MubWV0aG9kcy5tYW5hZ2VyKCkuY2FsbCgpO1xuICAgXG4gICAgICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3Nlcz0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRzRGVwbG95ZWRCYWxsb3RzKCkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVjdGlvbkFkZHJlc3Nlc1wiLGVsZWN0aW9uQWRkcmVzc2VzKVxuICAgICAgICAgICAgY29uc3QgYmFsbG90QWRkcmVzc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZHJlc3Mgb2YgZWxlY3Rpb25BZGRyZXNzZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYWxsb3RBZGRyZXNzID0gYXdhaXQgYmFsbG90KGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIGJhbGxvdEFkZHJlc3Nlcy5wdXNoKGJhbGxvdEFkZHJlc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsbG90c3NcIixiYWxsb3RBZGRyZXNzZXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdEFkZHJlc3MubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbmRpZGF0ZXNcIiwgY2FuZGlkYXRlcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVOYW1lID0gYXdhaXQgYmFsbG90QWRkcmVzc2VzWzNdLm1ldGhvZHMuZ2V0Q2FuZGlkYXRlTmFtZSgwKS5jYWxsKCk7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbmRpZGF0ZXNzXCIsY2FuZGlkYXRlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3JzKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsZXJyb3JzKTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7Y2FuZGlkYX1cbiAgICAgICAgfVxuICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsbG90XCIsIGJhbGxvdEFkZHJlc3MubWV0aG9kcylcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnN0YW5jZVwiLGluc3RhbmNlLm1ldGhvZHMpXG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4geyBlbGVjdGlvbkFkZHJlc3NlcyB9O1xuICAgIC8vfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGVsZWN0aW9uQWRkcmVzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FbGVjdGlvbiBBZGRyZXNzZXM8L2gxPlxuICAgICAgICB7LyogPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezF9PlxuICAgICAgICAgICAge2VsZWN0aW9uQWRkcmVzc2VzLm1hcCgobmFtZXMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8U2VnbWVudD57bmFtZXN9PC9TZWdtZW50PlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgPEZvcm0gb25TdWJtaXQgPSB7dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgIGdldCBjYW5kaWRhdGUgbmFtZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayByb3V0ZT1cInN0YXJ0ZWxlY1wiPkJhY2s8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZWN0aW9uQ3JlYXRpb25cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkdyaWRDb2x1bW4iLCJGb3JtSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwiRm9ybSIsIkdyaWQiLCJTZWdtZW50IiwiaW5zdGFuY2UiLCJiYWxsb3QiLCJMaW5rIiwid2ViMyIsIkVsZWN0aW9uQ3JlYXRpb24iLCJyZW5kZXIiLCJlbGVjdGlvbkFkZHJlc3NlcyIsInByb3BzIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsInJvdXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJnZXRzRGVwbG95ZWRCYWxsb3RzIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJiYWxsb3RBZGRyZXNzZXMiLCJhZGRyZXNzIiwiYmFsbG90QWRkcmVzcyIsInB1c2giLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNhbmRpZGF0ZU5hbWUiLCJnZXRDYW5kaWRhdGVOYW1lIiwiZXJyb3JzIiwiY2FuZGlkYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});