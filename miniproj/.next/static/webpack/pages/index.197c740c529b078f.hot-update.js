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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot.js */ \"./ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n\n\n\n\n\n\n\nclass ElectionCreation extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // console.log(\"ballot\", ballotAddress.methods)\n    // console.log(\"instance\",instance.methods)\n    // return { electionAddresses };\n    //}\n    render() {\n        const { electionAddresses } = this.props;\n        const { candidateName } = this.setState;\n        console.log(candidateName);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Election Addresses\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        primary: true,\n                        children: \"Get Candidate Name\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 15\n                }, this),\n                candidateName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Candidate Name: \",\n                        candidateName\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"startelec\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses: [],\n            candidateName: \"\"\n        };\n        // static async getInitialProps() {\n        //console.log(\"accountsss\",accounts)\n        //const electionAddresses = await instance.methods.getsDeployedBallots().call();\n        //const manager = await ballotAddress.methods.manager().call();\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses = await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getsDeployedBallots().call();\n            console.log(\"electionAddresses\", electionAddresses);\n            const ballotAddresses = [];\n            for (const address of electionAddresses){\n                const ballotAddress = await (0,_ballot_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                ballotAddresses.push(ballotAddress);\n            }\n            console.log(\"ballotss\", ballotAddresses);\n            try {\n                // const candidates = await ballotAddress.methods.candidates(0).call();\n                // console.log(\"candidates\", candidates);\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(\"accounts\", accounts);\n                const candidateName = await ballotAddresses[3].methods.getCandidateName(0).call();\n                //console.log(\"candidatess\",candidateName);\n                this.setState = {\n                    candidateName\n                };\n                console.log(this.setState);\n            //    const {candidateName} = this.setState;\n            //    console.log(\"candidatess\",candidateNames)\n            } catch (errors) {\n                console.log(\"error\", errors);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElectionCreation);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFTYjtBQUNrQjtBQUNWO0FBQ0g7QUFDSjtBQUczQixNQUFNYSx5QkFBeUJaLDRDQUFTQTtJQStDaEMsK0NBQStDO0lBQy9DLDJDQUEyQztJQUUzQyxnQ0FBZ0M7SUFDcEMsR0FBRztJQUVIYSxTQUFTO1FBQ0wsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUN4QyxNQUFNLEVBQUNDLGFBQWEsRUFBQyxHQUFHLElBQUksQ0FBQ0MsUUFBUTtRQUNyQ0MsUUFBUUMsR0FBRyxDQUFDSDtRQUVaLHFCQUNJLDhEQUFDSTs7OEJBQ0MsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNoQixtREFBSUE7b0JBQUNpQixVQUFVLElBQUksQ0FBQ0EsUUFBUTs4QkFDM0IsNEVBQUNuQixxREFBTUE7d0JBQUNvQixPQUFPO2tDQUFDOzs7Ozs7Ozs7OztnQkFFakJQLCtCQUNDLDhEQUFDVCxzREFBT0E7O3dCQUFDO3dCQUNVUzs7Ozs7Ozs4QkFHckIsOERBQUNiLHFEQUFNQTs4QkFDTCw0RUFBQ08seUNBQUlBO3dCQUFDYyxPQUFNO2tDQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztJQUloQzs7O2FBekVKQyxRQUFRO1lBQ0pYLG1CQUFtQixFQUFFO1lBQ3JCRSxlQUFlO1FBQ2pCO1FBRUYsbUNBQW1DO1FBRS9CLG9DQUFvQztRQUNwQyxnRkFBZ0Y7UUFFL0UsK0RBQStEO2FBRWhFTSxXQUFXLE9BQU1JO1lBRWJBLE1BQU1DLGNBQWM7WUFFbkIsTUFBTWIsb0JBQW1CLE1BQU1OLGtFQUFnQixDQUFDcUIsbUJBQW1CLEdBQUdDLElBQUk7WUFDM0VaLFFBQVFDLEdBQUcsQ0FBQyxxQkFBb0JMO1lBQ2hDLE1BQU1pQixrQkFBa0IsRUFBRTtZQUMxQixLQUFLLE1BQU1DLFdBQVdsQixrQkFBbUI7Z0JBQ3JDLE1BQU1tQixnQkFBZ0IsTUFBTXhCLHNEQUFNQSxDQUFDdUI7Z0JBQ25DRCxnQkFBZ0JHLElBQUksQ0FBQ0Q7WUFDdkI7WUFFRmYsUUFBUUMsR0FBRyxDQUFDLFlBQVdZO1lBRXZCLElBQUk7Z0JBQ0EsdUVBQXVFO2dCQUN2RSx5Q0FBeUM7Z0JBQ3pDLE1BQU1JLFdBQVcsTUFBTUMsT0FBT0MsUUFBUSxDQUFDQyxPQUFPLENBQUM7b0JBQUVDLFFBQVE7Z0JBQXNCO2dCQUMvRXJCLFFBQVFDLEdBQUcsQ0FBQyxZQUFXZ0I7Z0JBQ2pCLE1BQU1uQixnQkFBZ0IsTUFBTWUsZUFBZSxDQUFDLEVBQUUsQ0FBQ0gsT0FBTyxDQUFDWSxnQkFBZ0IsQ0FBQyxHQUFHVixJQUFJO2dCQUN0RiwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQ2IsUUFBUSxHQUFJO29CQUFDRDtnQkFBYTtnQkFDL0JFLFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNGLFFBQVE7WUFDNUIsNENBQTRDO1lBQzVDLCtDQUErQztZQUM5QyxFQUNELE9BQU93QixRQUFPO2dCQUNWdkIsUUFBUUMsR0FBRyxDQUFDLFNBQVFzQjtZQUV4QjtRQUdKOztBQThCRjtBQUVOLCtEQUFlN0IsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBHcmlkQ29sdW1uLFxuICBGb3JtSW5wdXQsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgRm9ybSxcbiAgR3JpZCxcbiAgU2VnbWVudCxcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSBcIi4uL2VsZWN0aW9uX2NyZWF0aW9uXCI7XG5pbXBvcnQgYmFsbG90IGZyb20gXCIuLi9iYWxsb3QuanNcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL3dlYjNcIjtcblxuXG5jbGFzcyBFbGVjdGlvbkNyZWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZWxlY3Rpb25BZGRyZXNzZXM6IFtdLFxuICAgICAgICBjYW5kaWRhdGVOYW1lOiAnJ1xuICAgICAgfTtcbiAgXG4gICAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJhY2NvdW50c3NzXCIsYWNjb3VudHMpXG4gICAgICAgIC8vY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldHNEZXBsb3llZEJhbGxvdHMoKS5jYWxsKCk7XG4gICAgICAgIFxuICAgICAgICAgLy9jb25zdCBtYW5hZ2VyID0gYXdhaXQgYmFsbG90QWRkcmVzcy5tZXRob2RzLm1hbmFnZXIoKS5jYWxsKCk7XG4gICBcbiAgICAgICAgb25TdWJtaXQgPSBhc3luYyhldmVudCk9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldHNEZXBsb3llZEJhbGxvdHMoKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZWN0aW9uQWRkcmVzc2VzXCIsZWxlY3Rpb25BZGRyZXNzZXMpXG4gICAgICAgICAgICBjb25zdCBiYWxsb3RBZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkcmVzcyBvZiBlbGVjdGlvbkFkZHJlc3Nlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhbGxvdEFkZHJlc3MgPSBhd2FpdCBiYWxsb3QoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgYmFsbG90QWRkcmVzc2VzLnB1c2goYmFsbG90QWRkcmVzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWxsb3Rzc1wiLGJhbGxvdEFkZHJlc3NlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgYmFsbG90QWRkcmVzcy5tZXRob2RzLmNhbmRpZGF0ZXMoMCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FuZGlkYXRlc1wiLCBjYW5kaWRhdGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsYWNjb3VudHMpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZU5hbWUgPSBhd2FpdCBiYWxsb3RBZGRyZXNzZXNbM10ubWV0aG9kcy5nZXRDYW5kaWRhdGVOYW1lKDApLmNhbGwoKTtcbiAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYW5kaWRhdGVzc1wiLGNhbmRpZGF0ZU5hbWUpO1xuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSA9ICh7Y2FuZGlkYXRlTmFtZX0pXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNldFN0YXRlKVxuICAgICAgICAgICAgLy8gICAgY29uc3Qge2NhbmRpZGF0ZU5hbWV9ID0gdGhpcy5zZXRTdGF0ZTtcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiY2FuZGlkYXRlc3NcIixjYW5kaWRhdGVOYW1lcylcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3JzKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsZXJyb3JzKTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYWxsb3RcIiwgYmFsbG90QWRkcmVzcy5tZXRob2RzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc3RhbmNlXCIsaW5zdGFuY2UubWV0aG9kcylcbiAgICAgICAgXG4gICAgICAgIC8vIHJldHVybiB7IGVsZWN0aW9uQWRkcmVzc2VzIH07XG4gICAgLy99XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZWxlY3Rpb25BZGRyZXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtjYW5kaWRhdGVOYW1lfSA9IHRoaXMuc2V0U3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhbmRpZGF0ZU5hbWUpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT5FbGVjdGlvbiBBZGRyZXNzZXM8L2gxPlxuICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkdldCBDYW5kaWRhdGUgTmFtZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIHtjYW5kaWRhdGVOYW1lICYmIChcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgICAgIENhbmRpZGF0ZSBOYW1lOiB7Y2FuZGlkYXRlTmFtZX1cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJzdGFydGVsZWNcIj5CYWNrPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgRWxlY3Rpb25DcmVhdGlvblxuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZENvbHVtbiIsIkZvcm1JbnB1dCIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJGb3JtIiwiR3JpZCIsIlNlZ21lbnQiLCJpbnN0YW5jZSIsImJhbGxvdCIsIkxpbmsiLCJ3ZWIzIiwiRWxlY3Rpb25DcmVhdGlvbiIsInJlbmRlciIsImVsZWN0aW9uQWRkcmVzc2VzIiwicHJvcHMiLCJjYW5kaWRhdGVOYW1lIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsInByaW1hcnkiLCJyb3V0ZSIsInN0YXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJnZXRzRGVwbG95ZWRCYWxsb3RzIiwiY2FsbCIsImJhbGxvdEFkZHJlc3NlcyIsImFkZHJlc3MiLCJiYWxsb3RBZGRyZXNzIiwicHVzaCIsImFjY291bnRzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiZ2V0Q2FuZGlkYXRlTmFtZSIsImVycm9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});