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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/ballot */ \"./ethereum/ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[0];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1, candidatename, candidateparty } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 145,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 146,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 152,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 154,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 156,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.Details,\n                    children: \"Get Candidate Details\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 160,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 163,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 162,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    content: this.state.errorMessage\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 168,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 144,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0,\n            errorMessage: \"\",\n            candidatename: \"\",\n            candidateparty: \"\",\n            votecount: 0,\n            creationdate: \"\",\n            expirationdate: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(accounts);\n                this.setState({\n                    electionAddresses1\n                });\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                await ballots.methods.vote(0).send({\n                    from: accounts[0],\n                    gas: \"1000000\"\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[1]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        this.Details = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                this.setState({\n                    candidatename: candidates.name,\n                    candidateparty: candidates.party,\n                    votecount: candidates.voteCount,\n                    creationdate: candidates.creationDate,\n                    expirationdate: candidates.expirationDate\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1oQywwREFBUSxDQUFDa0MsV0FBVztnQkFDM0M5QixRQUFRQyxHQUFHLENBQUMsWUFBVzJCO2dCQUN2QixNQUFNUCxVQUFVLE1BQU1oQyw0REFBTUEsQ0FBQytCO2dCQUM3QixNQUFNbUIsYUFBYSxNQUFNbEIsUUFBUVcsT0FBTyxDQUFDTyxVQUFVLENBQUMsR0FBR0MsSUFBSTtnQkFDNUQsSUFBSSxDQUFDVCxRQUFRLENBQUM7b0JBQ2J4QixlQUFjZ0MsV0FBV00sSUFBSTtvQkFDN0JyQyxnQkFBZStCLFdBQVdPLEtBQUs7b0JBQy9CeEIsV0FBVWlCLFdBQVdRLFNBQVM7b0JBQzlCeEIsY0FBYWdCLFdBQVdFLFlBQVk7b0JBQ3BDakIsZ0JBQWVlLFdBQVdHLGNBQWM7Z0JBRXpDO1lBRUgsRUFDQSxPQUFPTCxPQUFPO2dCQUNWckMsUUFBUUMsR0FBRyxDQUFDb0M7WUFDaEI7UUFDSjs7QUF5Q0o7QUFFQSwrREFBZXhDLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcz81YjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYmFsbG90IGZyb20gJy4uL2V0aGVyZXVtL2JhbGxvdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjsgXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuXG5pbXBvcnQge1xuICAgIEZvcm0sXG4gICAgQnV0dG9uLFxuICAgIFNlZ21lbnQsXG4gICAgTWVzc2FnZVxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5cbmNsYXNzIFZvdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVsZWN0aW9uQWRkcmVzc2VzMTogW10sXG4gICAgICAgIGJhbGxvdHM6IG51bGwsXG4gICAgICAgIHZvdGVjb3VudDogMCxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgICAgICBjYW5kaWRhdGVuYW1lOlwiXCIsXG4gICAgICAgIGNhbmRpZGF0ZXBhcnR5OlwiXCIsXG4gICAgICAgIHZvdGVjb3VudDowLFxuICAgICAgICBjcmVhdGlvbmRhdGU6XCJcIixcbiAgICAgICAgZXhwaXJhdGlvbmRhdGU6XCJcIlxuICAgICAgfTtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlcIixxdWVyeSk7XG4gICAgICAgIGNvbnN0IHsgZWxlY3Rpb25BZGRyZXNzZXMgfSA9IHF1ZXJ5O1xuICAgICAgICBjb25zdCBmaXJzdEFkZHJlc3MgPSBlbGVjdGlvbkFkZHJlc3Nlcy5zcGxpdCgnLycpWzBdXG4gICAgICAgIHJldHVybiB7IGVsZWN0aW9uQWRkcmVzc2VzOiBmaXJzdEFkZHJlc3MgfTtcbiAgICAgIH1cbiAgICAgIFxuICAgIFxuXG4gICAgb25TdWJtaXQgPSBhc3luYyhldmVudCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3Nlc1xuICAgICAgICBjb25zb2xlLmxvZyhcImVsZWN0aW9uXCIsZWxlY3Rpb25BZGRyZXNzZXMxKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVsZWN0aW9uQWRkcmVzc2VzMSB9KVxuICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSlcbiAgICAgICAgYXdhaXQgYmFsbG90cy5tZXRob2RzLnZvdGUoMCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOmFjY291bnRzWzBdLFxuICAgICAgICAgICAgZ2FzOlwiMTAwMDAwMFwiXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuXG5cbiAgICAgICBcbiAgICB9XG4gICAgIGhhbmRsZXZvdGVjb3VudCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc29sZVwiLCBlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBhd2FpdCBiYWxsb3RzLm1ldGhvZHMuY2FuZGlkYXRlcygwKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbmRpZGF0ZXM6IFwiLCBjYW5kaWRhdGVzKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3JlYXRpb25EYXRlIGlzIGxlc3MgdGhhbiB0aGUgZXhwaXJhdGlvbkRhdGVcbiAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzLmNyZWF0aW9uRGF0ZSA8IGNhbmRpZGF0ZXMuZXhwaXJhdGlvbkRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2b3RlY291bnQgPSBhd2FpdCBiYWxsb3RzLm1ldGhvZHMuZ2V0Vm90ZUNvdW50KDApLmNhbGwoe1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3Qgdm90ZWNvdW50MSA9IE51bWJlcih2b3RlY291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZvdGVjb3VudDE6dm90ZWNvdW50MX0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWb3RlIENvdW50OiBcIiwgTnVtYmVyKHZvdGVjb3VudCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsZWN0aW9uIHBlcmlvZCBoYXMgZXhwaXJlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTogXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9O1xuXG5cbiAgICB2b3RlcnMgPSBhc3luYyhldmVudCk9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIixhY2NvdW50cyk7XG4gICAgICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgICAgICBjb25zdCB2b3RlcnMgPSBhd2FpdCBiYWxsb3RzLm1ldGhvZHMudm90ZXJzKGFjY291bnRzWzFdKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvdGVyc1wiLHZvdGVycylcblxuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBEZXRhaWxzID0gYXN5bmMoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBhd2FpdCBiYWxsb3RzLm1ldGhvZHMuY2FuZGlkYXRlcygwKS5jYWxsKCk7XG4gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2FuZGlkYXRlbmFtZTpjYW5kaWRhdGVzLm5hbWUsXG4gICAgICAgICAgICBjYW5kaWRhdGVwYXJ0eTpjYW5kaWRhdGVzLnBhcnR5LFxuICAgICAgICAgICAgdm90ZWNvdW50OmNhbmRpZGF0ZXMudm90ZUNvdW50LFxuICAgICAgICAgICAgY3JlYXRpb25kYXRlOmNhbmRpZGF0ZXMuY3JlYXRpb25EYXRlLFxuICAgICAgICAgICAgZXhwaXJhdGlvbmRhdGU6Y2FuZGlkYXRlcy5leHBpcmF0aW9uRGF0ZVxuXG4gICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgXG5cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qge3ZvdGVjb3VudDEsY2FuZGlkYXRlbmFtZSxjYW5kaWRhdGVwYXJ0eSx9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Vm90aW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBWb3RlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGV2b3RlY291bnR9PkdldCBWb3RlIENvdW50PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudm90ZXJzfT5Wb3RlcnM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgVm90ZSBDb3VudDoge3ZvdGVjb3VudDF9XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLkRldGFpbHN9PkdldCBDYW5kaWRhdGUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgIDxNZXNzYWdlIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfS8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImJhbGxvdCIsIkxpbmsiLCJSb3V0ZXIiLCJGb3JtIiwiQnV0dG9uIiwiU2VnbWVudCIsIk1lc3NhZ2UiLCJ3ZWIzIiwiVm90aW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZWxlY3Rpb25BZGRyZXNzZXMiLCJmaXJzdEFkZHJlc3MiLCJzcGxpdCIsInJlbmRlciIsInZvdGVjb3VudDEiLCJjYW5kaWRhdGVuYW1lIiwiY2FuZGlkYXRlcGFydHkiLCJzdGF0ZSIsImRpdiIsImgxIiwib25TdWJtaXQiLCJvbkNsaWNrIiwiaGFuZGxldm90ZWNvdW50Iiwidm90ZXJzIiwiRGV0YWlscyIsInJvdXRlIiwiY29udGVudCIsImVycm9yTWVzc2FnZSIsImVsZWN0aW9uQWRkcmVzc2VzMSIsImJhbGxvdHMiLCJ2b3RlY291bnQiLCJjcmVhdGlvbmRhdGUiLCJleHBpcmF0aW9uZGF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJ2b3RlIiwic2VuZCIsImZyb20iLCJnYXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJjYW5kaWRhdGVzIiwiY2FsbCIsImNyZWF0aW9uRGF0ZSIsImV4cGlyYXRpb25EYXRlIiwiZ2V0Vm90ZUNvdW50IiwiTnVtYmVyIiwibmFtZSIsInBhcnR5Iiwidm90ZUNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});