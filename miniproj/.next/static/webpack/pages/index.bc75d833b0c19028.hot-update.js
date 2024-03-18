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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _election_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../election_creation */ \"./election_creation.js\");\n/* harmony import */ var _ballot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ballot.js */ \"./ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n\n\n\n\n\n\n\n\nclass ElectionCreation extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // console.log(\"ballot\", ballotAddress.methods)\n    // console.log(\"instance\",instance.methods)\n    // return { electionAddresses };\n    //}\n    render() {\n        const { candidateName, candidateParty, electionAddresses, isCandidateNameLoaded } = this.state;\n        console.log(candidateName, candidateParty);\n        console.log(\"2\", electionAddresses);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Election Addresses\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 90,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        primary: true,\n                        children: \"Get Candidate Name\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 91,\n                    columnNumber: 15\n                }, this),\n                isCandidateNameLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Candidate Name: \",\n                        candidateName,\n                        \"Candidate Party: \",\n                        candidateParty\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"startelec\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 102,\n                    columnNumber: 15\n                }, this),\n                isCandidateNameLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handleVoteClick,\n                    children: \"Vote\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/Documents/GitHub/EVS/miniproj/pages/index.js\",\n            lineNumber: 89,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses: [],\n            candidateName: \"\",\n            candidateParty: \"\",\n            isCandidateNameLoaded: false\n        };\n        // static async getInitialProps() {\n        //console.log(\"accountsss\",accounts)\n        //const electionAddresses = await instance.methods.getsDeployedBallots().call();\n        //const manager = await ballotAddress.methods.manager().call();\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses = await _election_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getsDeployedBallots().call();\n            console.log(\"electionAddresses\", electionAddresses);\n            this.setState({\n                electionAddresses: electionAddresses\n            });\n            const ballotAddresses = [];\n            for (const address of electionAddresses){\n                const ballotAddress = await (0,_ballot_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                ballotAddresses.push(ballotAddress);\n            }\n            console.log(\"ballotss\", ballotAddresses);\n            try {\n                // const candidates = await ballotAddress.methods.candidates(0).call();\n                // console.log(\"candidates\", candidates);\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                console.log(\"accounts\", accounts);\n                const candidateName = await ballotAddresses[0].methods.getCandidateName(0).call();\n                const candidateparty = await ballotAddresses[0].methods.getCandidateParty(0).call();\n                this.setState({\n                    candidateName: candidateName,\n                    candidateParty: candidateparty,\n                    isCandidateNameLoaded: true\n                });\n            } catch (errors) {\n                console.log(\"error\", errors);\n            }\n        };\n        this.handleVoteClick = ()=>{\n            const { electionAddresses } = this.state;\n            _routes__WEBPACK_IMPORTED_MODULE_4__.Router.pushRoute(\"vote\", {\n                electionAddresses\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElectionCreation);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgR3JpZENvbHVtbixcbiAgRm9ybUlucHV0LFxuICBCdXR0b24sXG4gIERpdmlkZXIsXG4gIEZvcm0sXG4gIEdyaWQsXG4gIFNlZ21lbnQsXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IGluc3RhbmNlIGZyb20gXCIuLi9lbGVjdGlvbl9jcmVhdGlvblwiO1xuaW1wb3J0IGJhbGxvdCBmcm9tIFwiLi4vYmFsbG90LmpzXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi93ZWIzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7IFxuXG5cbmNsYXNzIEVsZWN0aW9uQ3JlYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBlbGVjdGlvbkFkZHJlc3NlczogW10sXG4gICAgICAgIGNhbmRpZGF0ZU5hbWU6ICcnLFxuICAgICAgICBjYW5kaWRhdGVQYXJ0eTogJycsXG4gICAgICAgIGlzQ2FuZGlkYXRlTmFtZUxvYWRlZDogZmFsc2VcbiAgICAgIH07XG4gIFxuICAgIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWNjb3VudHNzc1wiLGFjY291bnRzKVxuICAgICAgICAvL2NvbnN0IGVsZWN0aW9uQWRkcmVzc2VzID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRzRGVwbG95ZWRCYWxsb3RzKCkuY2FsbCgpO1xuICAgICAgICBcbiAgICAgICAgIC8vY29uc3QgbWFuYWdlciA9IGF3YWl0IGJhbGxvdEFkZHJlc3MubWV0aG9kcy5tYW5hZ2VyKCkuY2FsbCgpO1xuICAgXG4gICAgICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3Nlcz0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRzRGVwbG95ZWRCYWxsb3RzKCkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVjdGlvbkFkZHJlc3Nlc1wiLGVsZWN0aW9uQWRkcmVzc2VzKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWxlY3Rpb25BZGRyZXNzZXM6IGVsZWN0aW9uQWRkcmVzc2VzfSk7XG4gICAgICAgICAgICBjb25zdCBiYWxsb3RBZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkcmVzcyBvZiBlbGVjdGlvbkFkZHJlc3Nlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhbGxvdEFkZHJlc3MgPSBhd2FpdCBiYWxsb3QoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgYmFsbG90QWRkcmVzc2VzLnB1c2goYmFsbG90QWRkcmVzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWxsb3Rzc1wiLGJhbGxvdEFkZHJlc3NlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgYmFsbG90QWRkcmVzcy5tZXRob2RzLmNhbmRpZGF0ZXMoMCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FuZGlkYXRlc1wiLCBjYW5kaWRhdGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsYWNjb3VudHMpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZU5hbWUgPSBhd2FpdCBiYWxsb3RBZGRyZXNzZXNbMF0ubWV0aG9kcy5nZXRDYW5kaWRhdGVOYW1lKDApLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVwYXJ0eSA9IGF3YWl0IGJhbGxvdEFkZHJlc3Nlc1swXS5tZXRob2RzLmdldENhbmRpZGF0ZVBhcnR5KDApLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZU5hbWU6Y2FuZGlkYXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZVBhcnR5OmNhbmRpZGF0ZXBhcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDYW5kaWRhdGVOYW1lTG9hZGVkOiB0cnVlLCAvLyBTZXQgdGhlIGZsYWcgdG8gdHJ1ZSB3aGVuIHRoZSBuYW1lIGlzIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcnMpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIixlcnJvcnMpO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZVZvdGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7ZWxlY3Rpb25BZGRyZXNzZXN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCd2b3RlJywgeyBlbGVjdGlvbkFkZHJlc3NlcyB9KTtcbiAgICAgICAgfTtcblxuICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsbG90XCIsIGJhbGxvdEFkZHJlc3MubWV0aG9kcylcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnN0YW5jZVwiLGluc3RhbmNlLm1ldGhvZHMpXG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4geyBlbGVjdGlvbkFkZHJlc3NlcyB9O1xuICAgIC8vfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2FuZGlkYXRlTmFtZSxjYW5kaWRhdGVQYXJ0eSxlbGVjdGlvbkFkZHJlc3Nlcyxpc0NhbmRpZGF0ZU5hbWVMb2FkZWR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coY2FuZGlkYXRlTmFtZSxjYW5kaWRhdGVQYXJ0eSlcbiAgICAgICAgY29uc29sZS5sb2coXCIyXCIsZWxlY3Rpb25BZGRyZXNzZXMpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT5FbGVjdGlvbiBBZGRyZXNzZXM8L2gxPlxuICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkdldCBDYW5kaWRhdGUgTmFtZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7aXNDYW5kaWRhdGVOYW1lTG9hZGVkICYmIChcbiAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgIENhbmRpZGF0ZSBOYW1lOiB7Y2FuZGlkYXRlTmFtZX1cbiAgICAgICAgICAgIENhbmRpZGF0ZSBQYXJ0eToge2NhbmRpZGF0ZVBhcnR5fVxuICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJzdGFydGVsZWNcIj5CYWNrPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAge2lzQ2FuZGlkYXRlTmFtZUxvYWRlZCAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGVDbGlja30+XG4gICAgICAgICAgICBWb3RlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IEVsZWN0aW9uQ3JlYXRpb25cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkdyaWRDb2x1bW4iLCJGb3JtSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwiRm9ybSIsIkdyaWQiLCJTZWdtZW50IiwiaW5zdGFuY2UiLCJiYWxsb3QiLCJMaW5rIiwid2ViMyIsIlJvdXRlciIsIkVsZWN0aW9uQ3JlYXRpb24iLCJyZW5kZXIiLCJjYW5kaWRhdGVOYW1lIiwiY2FuZGlkYXRlUGFydHkiLCJlbGVjdGlvbkFkZHJlc3NlcyIsImlzQ2FuZGlkYXRlTmFtZUxvYWRlZCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwib25TdWJtaXQiLCJwcmltYXJ5Iiwicm91dGUiLCJvbkNsaWNrIiwiaGFuZGxlVm90ZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJnZXRzRGVwbG95ZWRCYWxsb3RzIiwiY2FsbCIsInNldFN0YXRlIiwiYmFsbG90QWRkcmVzc2VzIiwiYWRkcmVzcyIsImJhbGxvdEFkZHJlc3MiLCJwdXNoIiwiYWNjb3VudHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJnZXRDYW5kaWRhdGVOYW1lIiwiY2FuZGlkYXRlcGFydHkiLCJnZXRDYW5kaWRhdGVQYXJ0eSIsImVycm9ycyIsInB1c2hSb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});