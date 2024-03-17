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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot.js */ \"./ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n\n\n\n\n\n\n\nclass ElectionCreation extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // console.log(\"ballot\", ballotAddress.methods)\n    // console.log(\"instance\",instance.methods)\n    // return { electionAddresses };\n    //}\n    render() {\n        const { electionAddresses } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Election Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                        onSubmit: this.onSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: \"get candidate name\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                            route: \"startelec\",\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    constructor(...args){\n        super(...args);\n        // static async getInitialProps() {\n        //console.log(\"accountsss\",accounts)\n        //const electionAddresses = await instance.methods.getsDeployedBallots().call();\n        //const manager = await ballotAddress.methods.manager().call();\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses = await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getsDeployedBallots().call();\n            const ballotAddress = await (0,_ballot_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(electionAddresses[0]);\n            console.log(\"electionAddresses\", electionAddresses);\n            console.log(\"ballotss\", ballotAddress);\n            try {\n                // const candidates = await ballotAddress.methods.candidates(0).call();\n                // console.log(\"candidates\", candidates);\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(\"accounts\", accounts);\n                const candidateName = await ballotAddress.methods.getCandidateName(0).call;\n                console.log(\"candidatess\", candidateName);\n            } catch (errors) {\n                console.log(\"error\", errors);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElectionCreation);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFTYjtBQUNrQjtBQUNWO0FBQ0g7QUFDSjtBQUczQixNQUFNYSx5QkFBeUJaLDRDQUFTQTtJQStCaEMsK0NBQStDO0lBQy9DLDJDQUEyQztJQUUzQyxnQ0FBZ0M7SUFDcEMsR0FBRztJQUVIYSxTQUFTO1FBQ0wsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUV4QyxxQkFDSTtzQkFDSiw0RUFBQ0M7O2tDQUNELDhEQUFDQztrQ0FBRzs7Ozs7O2tDQVVKLDhEQUFDWixtREFBSUE7d0JBQUNhLFVBQVksSUFBSSxDQUFDQSxRQUFRO2tDQUMzQiw0RUFBQ2YscURBQU1BO3NDQUFDOzs7Ozs7Ozs7OztrQ0FJWiw4REFBQ0EscURBQU1BO2tDQUNMLDRFQUFDTyx5Q0FBSUE7NEJBQUNTLE9BQU07c0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtoQzs7O1FBOURFLG1DQUFtQztRQUUvQixvQ0FBb0M7UUFDcEMsZ0ZBQWdGO1FBRS9FLCtEQUErRDthQUVoRUQsV0FBVyxPQUFNRTtZQUViQSxNQUFNQyxjQUFjO1lBQ3BCLE1BQU1QLG9CQUFvQixNQUFNTixrRUFBZ0IsQ0FBQ2UsbUJBQW1CLEdBQUdDLElBQUk7WUFDM0UsTUFBTUMsZ0JBQWdCLE1BQU1oQixzREFBTUEsQ0FBQ0ssaUJBQWlCLENBQUMsRUFBRTtZQUN2RFksUUFBUUMsR0FBRyxDQUFDLHFCQUFvQmI7WUFDaENZLFFBQVFDLEdBQUcsQ0FBQyxZQUFXRjtZQUV2QixJQUFJO2dCQUNBLHVFQUF1RTtnQkFDdkUseUNBQXlDO2dCQUN6QyxNQUFNRyxXQUFXLE1BQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO29CQUFFQyxRQUFRO2dCQUFzQjtnQkFDL0VOLFFBQVFDLEdBQUcsQ0FBQyxZQUFXQztnQkFDakIsTUFBTUssZ0JBQWdCLE1BQU1SLGNBQWNILE9BQU8sQ0FBQ1ksZ0JBQWdCLENBQUMsR0FBR1YsSUFBSTtnQkFDakZFLFFBQVFDLEdBQUcsQ0FBQyxlQUFjTTtZQUM3QixFQUNBLE9BQU9FLFFBQU87Z0JBQ1ZULFFBQVFDLEdBQUcsQ0FBQyxTQUFRUTtZQUV4QjtRQUNKOztBQW9DUjtBQUVBLCtEQUFldkIsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBHcmlkQ29sdW1uLFxuICBGb3JtSW5wdXQsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgRm9ybSxcbiAgR3JpZCxcbiAgU2VnbWVudCxcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSBcIi4uL2VsZWN0aW9uX2NyZWF0aW9uXCI7XG5pbXBvcnQgYmFsbG90IGZyb20gXCIuLi9iYWxsb3QuanNcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL3dlYjNcIjtcblxuXG5jbGFzcyBFbGVjdGlvbkNyZWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gICAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJhY2NvdW50c3NzXCIsYWNjb3VudHMpXG4gICAgICAgIC8vY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldHNEZXBsb3llZEJhbGxvdHMoKS5jYWxsKCk7XG4gICAgICAgIFxuICAgICAgICAgLy9jb25zdCBtYW5hZ2VyID0gYXdhaXQgYmFsbG90QWRkcmVzcy5tZXRob2RzLm1hbmFnZXIoKS5jYWxsKCk7XG4gICBcbiAgICAgICAgb25TdWJtaXQgPSBhc3luYyhldmVudCk9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRzRGVwbG95ZWRCYWxsb3RzKCkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90QWRkcmVzcyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3Nlc1swXSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxlY3Rpb25BZGRyZXNzZXNcIixlbGVjdGlvbkFkZHJlc3NlcylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsbG90c3NcIixiYWxsb3RBZGRyZXNzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNhbmRpZGF0ZXMgPSBhd2FpdCBiYWxsb3RBZGRyZXNzLm1ldGhvZHMuY2FuZGlkYXRlcygwKS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYW5kaWRhdGVzXCIsIGNhbmRpZGF0ZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIixhY2NvdW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlTmFtZSA9IGF3YWl0IGJhbGxvdEFkZHJlc3MubWV0aG9kcy5nZXRDYW5kaWRhdGVOYW1lKDApLmNhbGxcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FuZGlkYXRlc3NcIixjYW5kaWRhdGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcnMpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIixlcnJvcnMpO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsbG90XCIsIGJhbGxvdEFkZHJlc3MubWV0aG9kcylcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnN0YW5jZVwiLGluc3RhbmNlLm1ldGhvZHMpXG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4geyBlbGVjdGlvbkFkZHJlc3NlcyB9O1xuICAgIC8vfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGVsZWN0aW9uQWRkcmVzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FbGVjdGlvbiBBZGRyZXNzZXM8L2gxPlxuICAgICAgICB7LyogPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezF9PlxuICAgICAgICAgICAge2VsZWN0aW9uQWRkcmVzc2VzLm1hcCgobmFtZXMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8U2VnbWVudD57bmFtZXN9PC9TZWdtZW50PlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgPEZvcm0gb25TdWJtaXQgPSB7dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgIGdldCBjYW5kaWRhdGUgbmFtZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayByb3V0ZT1cInN0YXJ0ZWxlY1wiPkJhY2s8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZWN0aW9uQ3JlYXRpb25cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkdyaWRDb2x1bW4iLCJGb3JtSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwiRm9ybSIsIkdyaWQiLCJTZWdtZW50IiwiaW5zdGFuY2UiLCJiYWxsb3QiLCJMaW5rIiwid2ViMyIsIkVsZWN0aW9uQ3JlYXRpb24iLCJyZW5kZXIiLCJlbGVjdGlvbkFkZHJlc3NlcyIsInByb3BzIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsInJvdXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJnZXRzRGVwbG95ZWRCYWxsb3RzIiwiY2FsbCIsImJhbGxvdEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJjYW5kaWRhdGVOYW1lIiwiZ2V0Q2FuZGlkYXRlTmFtZSIsImVycm9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});