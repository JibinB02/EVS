"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vote",{

/***/ "./pages/vote.js":
/*!***********************!*\
  !*** ./pages/vote.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/ballot */ \"./ethereum/ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[0];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1 } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 115,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 124,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 132,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 131,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    content: this.state.errorMessage\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 137,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 114,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0,\n            errorMessage: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(accounts);\n                this.setState({\n                    electionAddresses1\n                });\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                await ballots.methods.vote(0).send({\n                    from: accounts[0],\n                    gas: \"1000000\"\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[1]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUM7d0JBQ3pETCxNQUFNUCxRQUFRLENBQUMsRUFBRTtvQkFDckI7b0JBQ0EsTUFBTWpCLGFBQWFpQyxPQUFPcEI7b0JBQzFCLElBQUksQ0FBQ08sUUFBUSxDQUFDO3dCQUFDcEIsWUFBV0E7b0JBQVU7b0JBQ3BDTixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCc0MsT0FBT3BCO2dCQUN2QyxPQUFPO29CQUNIbkIsUUFBUUMsR0FBRyxDQUFDO2dCQUNoQjtZQUNKLEVBQUUsT0FBTytCLE9BQU87Z0JBQ1poQyxRQUFRZ0MsS0FBSyxDQUFDLHlCQUF5QkE7WUFDM0M7UUFFSjthQUdBbkIsU0FBUyxPQUFNTztZQUNYQSxNQUFNQyxjQUFjO1lBQ3BCLE1BQU1KLHFCQUFxQixJQUFJLENBQUNLLEtBQUssQ0FBQ3BCLGlCQUFpQjtZQUV2RCxJQUFJO2dCQUNBLE1BQU1xQixXQUFXLE1BQU0zQiwwREFBUSxDQUFDNkIsV0FBVztnQkFDM0N6QixRQUFRQyxHQUFHLENBQUMsWUFBV3NCO2dCQUN2QixNQUFNTCxVQUFVLE1BQU03Qiw0REFBTUEsQ0FBQzRCO2dCQUM3QixNQUFNSixTQUFTLE1BQU1LLFFBQVFTLE9BQU8sQ0FBQ2QsTUFBTSxDQUFDVSxRQUFRLENBQUMsRUFBRSxFQUFFWSxJQUFJO2dCQUM3RG5DLFFBQVFDLEdBQUcsQ0FBQyxVQUFTWTtZQUd6QixFQUNBLE9BQU1tQixPQUFPO2dCQUNUaEMsUUFBUUMsR0FBRyxDQUFDK0I7WUFDaEI7UUFDSjs7QUF3Q0o7QUFFQSwrREFBZW5DLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcz81YjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYmFsbG90IGZyb20gJy4uL2V0aGVyZXVtL2JhbGxvdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjsgXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuXG5pbXBvcnQge1xuICAgIEZvcm0sXG4gICAgQnV0dG9uLFxuICAgIFNlZ21lbnQsXG4gICAgTWVzc2FnZVxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5cbmNsYXNzIFZvdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVsZWN0aW9uQWRkcmVzc2VzMTogW10sXG4gICAgICAgIGJhbGxvdHM6IG51bGwsXG4gICAgICAgIHZvdGVjb3VudDogMCxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiXG4gICAgICB9O1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWVyeVwiLHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgeyBlbGVjdGlvbkFkZHJlc3NlcyB9ID0gcXVlcnk7XG4gICAgICAgIGNvbnN0IGZpcnN0QWRkcmVzcyA9IGVsZWN0aW9uQWRkcmVzc2VzLnNwbGl0KCcvJylbMF1cbiAgICAgICAgcmV0dXJuIHsgZWxlY3Rpb25BZGRyZXNzZXM6IGZpcnN0QWRkcmVzcyB9O1xuICAgICAgfVxuICAgICAgXG4gICAgXG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlY3Rpb25cIixlbGVjdGlvbkFkZHJlc3NlczEpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xuICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWxlY3Rpb25BZGRyZXNzZXMxIH0pXG4gICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKVxuICAgICAgICBhd2FpdCBiYWxsb3RzLm1ldGhvZHMudm90ZSgwKS5zZW5kKHtcbiAgICAgICAgICAgIGZyb206YWNjb3VudHNbMF0sXG4gICAgICAgICAgICBnYXM6XCIxMDAwMDAwXCJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG5cblxuICAgICAgIFxuICAgIH1cbiAgICAgaGFuZGxldm90ZWNvdW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zb2xlXCIsIGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuZGlkYXRlczogXCIsIGNhbmRpZGF0ZXMpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjcmVhdGlvbkRhdGUgaXMgbGVzcyB0aGFuIHRoZSBleHBpcmF0aW9uRGF0ZVxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMuY3JlYXRpb25EYXRlIDwgY2FuZGlkYXRlcy5leHBpcmF0aW9uRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGVjb3VudCA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5nZXRWb3RlQ291bnQoMCkuY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCB2b3RlY291bnQxID0gTnVtYmVyKHZvdGVjb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dm90ZWNvdW50MTp2b3RlY291bnQxfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZvdGUgQ291bnQ6IFwiLCBOdW1iZXIodm90ZWNvdW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlY3Rpb24gcGVyaW9kIGhhcyBleHBpcmVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIHZvdGVycyA9IGFzeW5jKGV2ZW50KT0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IHZvdGVycyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy52b3RlcnMoYWNjb3VudHNbMV0pLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZXJzXCIsdm90ZXJzKVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICBcblxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB7dm90ZWNvdW50MX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Wb3Rpbmc8L2gxPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0ID0ge3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZXZvdGVjb3VudH0+R2V0IFZvdGUgQ291bnQ8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy52b3RlcnN9PlZvdGVyczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICBWb3RlIENvdW50OiB7dm90ZWNvdW50MX1cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiA+XG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgPE1lc3NhZ2UgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9Lz5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVm90aW5nIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYmFsbG90IiwiTGluayIsIlJvdXRlciIsIkZvcm0iLCJCdXR0b24iLCJTZWdtZW50IiwiTWVzc2FnZSIsIndlYjMiLCJWb3RpbmciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJlbGVjdGlvbkFkZHJlc3NlcyIsImZpcnN0QWRkcmVzcyIsInNwbGl0IiwicmVuZGVyIiwidm90ZWNvdW50MSIsInN0YXRlIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsIm9uQ2xpY2siLCJoYW5kbGV2b3RlY291bnQiLCJ2b3RlcnMiLCJyb3V0ZSIsImNvbnRlbnQiLCJlcnJvck1lc3NhZ2UiLCJlbGVjdGlvbkFkZHJlc3NlczEiLCJiYWxsb3RzIiwidm90ZWNvdW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsInNldFN0YXRlIiwibWV0aG9kcyIsInZvdGUiLCJzZW5kIiwiZnJvbSIsImdhcyIsImVycm9yIiwibWVzc2FnZSIsImNhbmRpZGF0ZXMiLCJjYWxsIiwiY3JlYXRpb25EYXRlIiwiZXhwaXJhdGlvbkRhdGUiLCJnZXRWb3RlQ291bnQiLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});