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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/ballot */ \"./ethereum/ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[0];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1, candidatename, candidateparty, votecount, creationdate, expirationdate } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 146,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 147,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 153,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 155,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 157,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.Details,\n                    children: \"Get Candidate Details\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 161,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.SegmentGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Candidate Name : \",\n                                candidatename\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 164,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Candidate Party : \",\n                                candidateparty\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 165,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Vote Count : \",\n                                votecount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 166,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Creation Date : \",\n                                creationdate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 167,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Expiration Date : \",\n                                exp\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 168,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 163,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 172,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 171,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    content: this.state.errorMessage\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 177,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 145,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0,\n            errorMessage: \"\",\n            candidatename: \"\",\n            candidateparty: \"\",\n            votecount: 0,\n            creationdate: \"\",\n            expirationdate: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(accounts);\n                this.setState({\n                    electionAddresses1\n                });\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                await ballots.methods.vote(0).send({\n                    from: accounts[0],\n                    gas: \"1000000\"\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[1]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        this.Details = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                this.setState({\n                    candidatename: candidates.name,\n                    candidateparty: candidates.party,\n                    votecount: candidates.voteCount,\n                    creationdate: candidates.creationDate,\n                    expirationdate: candidates.expirationDate\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1OLFNBQVMsTUFBTU8sUUFBUVEsT0FBTyxDQUFDZixNQUFNLENBQUNXLFFBQVEsQ0FBQyxFQUFFLEVBQUVZLElBQUk7Z0JBQzdEekMsUUFBUUMsR0FBRyxDQUFDLFVBQVNpQjtZQUd6QixFQUNBLE9BQU1vQixPQUFPO2dCQUNUdEMsUUFBUUMsR0FBRyxDQUFDcUM7WUFDaEI7UUFDSjthQUdBbkIsVUFBVSxPQUFNTztZQUNaQSxNQUFNQyxjQUFjO1lBQ3BCLE1BQU1ILHFCQUFxQixJQUFJLENBQUNJLEtBQUssQ0FBQzFCLGlCQUFpQjtZQUV2RCxJQUFJO2dCQUNBLE1BQU0yQixXQUFXLE1BQU1qQywwREFBUSxDQUFDbUMsV0FBVztnQkFDM0MvQixRQUFRQyxHQUFHLENBQUMsWUFBVzRCO2dCQUN2QixNQUFNSixVQUFVLE1BQU1yQyw0REFBTUEsQ0FBQ29DO2dCQUM3QixNQUFNZ0IsYUFBYSxNQUFNZixRQUFRUSxPQUFPLENBQUNPLFVBQVUsQ0FBQyxHQUFHQyxJQUFJO2dCQUM1RCxJQUFJLENBQUNULFFBQVEsQ0FBQztvQkFDYnpCLGVBQWNpQyxXQUFXTSxJQUFJO29CQUM3QnRDLGdCQUFlZ0MsV0FBV08sS0FBSztvQkFDL0J0QyxXQUFVK0IsV0FBV1EsU0FBUztvQkFDOUJ0QyxjQUFhOEIsV0FBV0UsWUFBWTtvQkFDcEMvQixnQkFBZTZCLFdBQVdHLGNBQWM7Z0JBRXpDO1lBRUgsRUFDQSxPQUFPTCxPQUFPO2dCQUNWdEMsUUFBUUMsR0FBRyxDQUFDcUM7WUFDaEI7UUFDSjs7QUFpREo7QUFFQSwrREFBZXpDLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcz81YjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYmFsbG90IGZyb20gJy4uL2V0aGVyZXVtL2JhbGxvdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjsgXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuXG5pbXBvcnQge1xuICAgIEZvcm0sXG4gICAgQnV0dG9uLFxuICAgIFNlZ21lbnQsXG4gICAgTWVzc2FnZSxcbiAgICBTZWdtZW50R3JvdXBcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5jbGFzcyBWb3RpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBlbGVjdGlvbkFkZHJlc3NlczE6IFtdLFxuICAgICAgICBiYWxsb3RzOiBudWxsLFxuICAgICAgICB2b3RlY291bnQ6IDAsXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICAgICAgY2FuZGlkYXRlbmFtZTpcIlwiLFxuICAgICAgICBjYW5kaWRhdGVwYXJ0eTpcIlwiLFxuICAgICAgICB2b3RlY291bnQ6MCxcbiAgICAgICAgY3JlYXRpb25kYXRlOlwiXCIsXG4gICAgICAgIGV4cGlyYXRpb25kYXRlOlwiXCJcbiAgICAgIH07XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5XCIscXVlcnkpO1xuICAgICAgICBjb25zdCB7IGVsZWN0aW9uQWRkcmVzc2VzIH0gPSBxdWVyeTtcbiAgICAgICAgY29uc3QgZmlyc3RBZGRyZXNzID0gZWxlY3Rpb25BZGRyZXNzZXMuc3BsaXQoJy8nKVswXVxuICAgICAgICByZXR1cm4geyBlbGVjdGlvbkFkZHJlc3NlczogZmlyc3RBZGRyZXNzIH07XG4gICAgICB9XG4gICAgICBcbiAgICBcblxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXNcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVjdGlvblwiLGVsZWN0aW9uQWRkcmVzc2VzMSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XG4gICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbGVjdGlvbkFkZHJlc3NlczEgfSlcbiAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpXG4gICAgICAgIGF3YWl0IGJhbGxvdHMubWV0aG9kcy52b3RlKDApLnNlbmQoe1xuICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXSxcbiAgICAgICAgICAgIGdhczpcIjEwMDAwMDBcIlxuICAgICAgICB9KVxuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cblxuXG4gICAgICAgXG4gICAgfVxuICAgICBoYW5kbGV2b3RlY291bnQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnNvbGVcIiwgZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLmNhbmRpZGF0ZXMoMCkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5kaWRhdGVzOiBcIiwgY2FuZGlkYXRlcyk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNyZWF0aW9uRGF0ZSBpcyBsZXNzIHRoYW4gdGhlIGV4cGlyYXRpb25EYXRlXG4gICAgICAgICAgICBpZiAoY2FuZGlkYXRlcy5jcmVhdGlvbkRhdGUgPCBjYW5kaWRhdGVzLmV4cGlyYXRpb25EYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgdm90ZWNvdW50ID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLmdldFZvdGVDb3VudCgwKS5jYWxsKHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGVjb3VudDEgPSBOdW1iZXIodm90ZWNvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2b3RlY291bnQxOnZvdGVjb3VudDF9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVm90ZSBDb3VudDogXCIsIE51bWJlcih2b3RlY291bnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbGVjdGlvbiBwZXJpb2QgaGFzIGV4cGlyZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6IFwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfTtcblxuXG4gICAgdm90ZXJzID0gYXN5bmMoZXZlbnQpPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsYWNjb3VudHMpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3Qgdm90ZXJzID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLnZvdGVycyhhY2NvdW50c1sxXSkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b3RlcnNcIix2b3RlcnMpXG5cblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgRGV0YWlscyA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIixhY2NvdW50cyk7XG4gICAgICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLmNhbmRpZGF0ZXMoMCkuY2FsbCgpO1xuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZW5hbWU6Y2FuZGlkYXRlcy5uYW1lLFxuICAgICAgICAgICAgY2FuZGlkYXRlcGFydHk6Y2FuZGlkYXRlcy5wYXJ0eSxcbiAgICAgICAgICAgIHZvdGVjb3VudDpjYW5kaWRhdGVzLnZvdGVDb3VudCxcbiAgICAgICAgICAgIGNyZWF0aW9uZGF0ZTpjYW5kaWRhdGVzLmNyZWF0aW9uRGF0ZSxcbiAgICAgICAgICAgIGV4cGlyYXRpb25kYXRlOmNhbmRpZGF0ZXMuZXhwaXJhdGlvbkRhdGVcblxuICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIFxuXG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHt2b3RlY291bnQxLGNhbmRpZGF0ZW5hbWUsY2FuZGlkYXRlcGFydHksdm90ZWNvdW50LGNyZWF0aW9uZGF0ZSxleHBpcmF0aW9uZGF0ZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Wb3Rpbmc8L2gxPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0ID0ge3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZXZvdGVjb3VudH0+R2V0IFZvdGUgQ291bnQ8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy52b3RlcnN9PlZvdGVyczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICBWb3RlIENvdW50OiB7dm90ZWNvdW50MX1cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuRGV0YWlsc30+R2V0IENhbmRpZGF0ZSBEZXRhaWxzPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8U2VnbWVudEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5DYW5kaWRhdGUgTmFtZSA6IHtjYW5kaWRhdGVuYW1lfTwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+Q2FuZGlkYXRlIFBhcnR5IDoge2NhbmRpZGF0ZXBhcnR5fTwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+Vm90ZSBDb3VudCA6IHt2b3RlY291bnR9PC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5DcmVhdGlvbiBEYXRlIDoge2NyZWF0aW9uZGF0ZX08L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50PkV4cGlyYXRpb24gRGF0ZSA6IHtleHB9PC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudEdyb3VwPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgIDxNZXNzYWdlIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfS8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImJhbGxvdCIsIkxpbmsiLCJSb3V0ZXIiLCJGb3JtIiwiQnV0dG9uIiwiU2VnbWVudCIsIk1lc3NhZ2UiLCJTZWdtZW50R3JvdXAiLCJ3ZWIzIiwiVm90aW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZWxlY3Rpb25BZGRyZXNzZXMiLCJmaXJzdEFkZHJlc3MiLCJzcGxpdCIsInJlbmRlciIsInZvdGVjb3VudDEiLCJjYW5kaWRhdGVuYW1lIiwiY2FuZGlkYXRlcGFydHkiLCJ2b3RlY291bnQiLCJjcmVhdGlvbmRhdGUiLCJleHBpcmF0aW9uZGF0ZSIsInN0YXRlIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsIm9uQ2xpY2siLCJoYW5kbGV2b3RlY291bnQiLCJ2b3RlcnMiLCJEZXRhaWxzIiwiZXhwIiwicm91dGUiLCJjb250ZW50IiwiZXJyb3JNZXNzYWdlIiwiZWxlY3Rpb25BZGRyZXNzZXMxIiwiYmFsbG90cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJ2b3RlIiwic2VuZCIsImZyb20iLCJnYXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJjYW5kaWRhdGVzIiwiY2FsbCIsImNyZWF0aW9uRGF0ZSIsImV4cGlyYXRpb25EYXRlIiwiZ2V0Vm90ZUNvdW50IiwiTnVtYmVyIiwibmFtZSIsInBhcnR5Iiwidm90ZUNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});