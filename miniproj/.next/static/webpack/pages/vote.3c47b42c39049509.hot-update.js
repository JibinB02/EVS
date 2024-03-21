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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/ballot */ \"./ethereum/ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[0];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1, candidatename, candidateparty, votecount, creationdate, expirationdate } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 147,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 149,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 148,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 154,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 156,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 158,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.Details,\n                    children: \"Get Candidate Details\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 162,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.SegmentGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Candidate Name : \",\n                                candidatename\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 165,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Candidate Party : \",\n                                candidateparty\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 166,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Vote Count : \",\n                                votecount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 167,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Creation Date : \",\n                                creationdate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 168,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Expiration Date : \",\n                                expirationdate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 169,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 164,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 173,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 172,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    content: this.state.errorMessage\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 178,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 146,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0,\n            errorMessage: \"\",\n            candidatename: \"\",\n            candidateparty: \"\",\n            votecount: 0,\n            creationdate: \"\",\n            expirationdate: \"\",\n            isCandia\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(accounts);\n                this.setState({\n                    electionAddresses1\n                });\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                await ballots.methods.vote(0).send({\n                    from: accounts[1],\n                    gas: \"1000000\"\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[1]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        this.Details = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                this.setState({\n                    candidatename: candidates.name,\n                    candidateparty: candidates.party,\n                    votecount: Number(candidates.voteCount),\n                    creationdate: Number(candidates.creationDate),\n                    expirationdate: Number(candidates.expirationDate)\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3QixNQUFNTCxTQUFTLE1BQU1NLFFBQVFTLE9BQU8sQ0FBQ2YsTUFBTSxDQUFDVyxRQUFRLENBQUMsRUFBRSxFQUFFWSxJQUFJO2dCQUM3RHpDLFFBQVFDLEdBQUcsQ0FBQyxVQUFTaUI7WUFHekIsRUFDQSxPQUFNb0IsT0FBTztnQkFDVHRDLFFBQVFDLEdBQUcsQ0FBQ3FDO1lBQ2hCO1FBQ0o7YUFHQW5CLFVBQVUsT0FBTU87WUFDWkEsTUFBTUMsY0FBYztZQUNwQixNQUFNSixxQkFBcUIsSUFBSSxDQUFDSyxLQUFLLENBQUMxQixpQkFBaUI7WUFFdkQsSUFBSTtnQkFDQSxNQUFNMkIsV0FBVyxNQUFNakMsMERBQVEsQ0FBQ21DLFdBQVc7Z0JBQzNDL0IsUUFBUUMsR0FBRyxDQUFDLFlBQVc0QjtnQkFDdkIsTUFBTUwsVUFBVSxNQUFNcEMsNERBQU1BLENBQUNtQztnQkFDN0IsTUFBTWlCLGFBQWEsTUFBTWhCLFFBQVFTLE9BQU8sQ0FBQ08sVUFBVSxDQUFDLEdBQUdDLElBQUk7Z0JBQzVELElBQUksQ0FBQ1QsUUFBUSxDQUFDO29CQUNiekIsZUFBY2lDLFdBQVdNLElBQUk7b0JBQzdCdEMsZ0JBQWVnQyxXQUFXTyxLQUFLO29CQUMvQnRDLFdBQVVvQyxPQUFPTCxXQUFXUSxTQUFTO29CQUNyQ3RDLGNBQWFtQyxPQUFPTCxXQUFXRSxZQUFZO29CQUMzQy9CLGdCQUFla0MsT0FBT0wsV0FBV0csY0FBYztnQkFFaEQ7WUFFSCxFQUNBLE9BQU9MLE9BQU87Z0JBQ1Z0QyxRQUFRQyxHQUFHLENBQUNxQztZQUNoQjtRQUNKOztBQWlESjtBQUVBLCtEQUFlekMsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b3RlLmpzPzViN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBiYWxsb3QgZnJvbSAnLi4vZXRoZXJldW0vYmFsbG90JztcbmltcG9ydCB7TGlua30gZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiOyBcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5cbmltcG9ydCB7XG4gICAgRm9ybSxcbiAgICBCdXR0b24sXG4gICAgU2VnbWVudCxcbiAgICBNZXNzYWdlLFxuICAgIFNlZ21lbnRHcm91cFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5cbmNsYXNzIFZvdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVsZWN0aW9uQWRkcmVzc2VzMTogW10sXG4gICAgICAgIGJhbGxvdHM6IG51bGwsXG4gICAgICAgIHZvdGVjb3VudDogMCxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgICAgICBjYW5kaWRhdGVuYW1lOlwiXCIsXG4gICAgICAgIGNhbmRpZGF0ZXBhcnR5OlwiXCIsXG4gICAgICAgIHZvdGVjb3VudDowLFxuICAgICAgICBjcmVhdGlvbmRhdGU6XCJcIixcbiAgICAgICAgZXhwaXJhdGlvbmRhdGU6XCJcIixcbiAgICAgICAgaXNDYW5kaWFcbiAgICAgIH07XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5XCIscXVlcnkpO1xuICAgICAgICBjb25zdCB7IGVsZWN0aW9uQWRkcmVzc2VzIH0gPSBxdWVyeTtcbiAgICAgICAgY29uc3QgZmlyc3RBZGRyZXNzID0gZWxlY3Rpb25BZGRyZXNzZXMuc3BsaXQoJy8nKVswXVxuICAgICAgICByZXR1cm4geyBlbGVjdGlvbkFkZHJlc3NlczogZmlyc3RBZGRyZXNzIH07XG4gICAgICB9XG4gICAgICBcbiAgICBcblxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXNcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVjdGlvblwiLGVsZWN0aW9uQWRkcmVzc2VzMSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XG4gICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbGVjdGlvbkFkZHJlc3NlczEgfSlcbiAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpXG4gICAgICAgIGF3YWl0IGJhbGxvdHMubWV0aG9kcy52b3RlKDApLnNlbmQoe1xuICAgICAgICAgICAgZnJvbTphY2NvdW50c1sxXSxcbiAgICAgICAgICAgIGdhczpcIjEwMDAwMDBcIlxuICAgICAgICB9KVxuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cblxuXG4gICAgICAgXG4gICAgfVxuICAgICBoYW5kbGV2b3RlY291bnQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnNvbGVcIiwgZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLmNhbmRpZGF0ZXMoMCkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5kaWRhdGVzOiBcIiwgY2FuZGlkYXRlcyk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNyZWF0aW9uRGF0ZSBpcyBsZXNzIHRoYW4gdGhlIGV4cGlyYXRpb25EYXRlXG4gICAgICAgICAgICBpZiAoY2FuZGlkYXRlcy5jcmVhdGlvbkRhdGUgPCBjYW5kaWRhdGVzLmV4cGlyYXRpb25EYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgdm90ZWNvdW50ID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLmdldFZvdGVDb3VudCgwKS5jYWxsKHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGVjb3VudDEgPSBOdW1iZXIodm90ZWNvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2b3RlY291bnQxOnZvdGVjb3VudDF9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVm90ZSBDb3VudDogXCIsIE51bWJlcih2b3RlY291bnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbGVjdGlvbiBwZXJpb2QgaGFzIGV4cGlyZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6IFwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfTtcblxuXG4gICAgdm90ZXJzID0gYXN5bmMoZXZlbnQpPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsYWNjb3VudHMpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3Qgdm90ZXJzID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLnZvdGVycyhhY2NvdW50c1sxXSkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b3RlcnNcIix2b3RlcnMpXG5cblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgRGV0YWlscyA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIixhY2NvdW50cyk7XG4gICAgICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgYmFsbG90cy5tZXRob2RzLmNhbmRpZGF0ZXMoMCkuY2FsbCgpO1xuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZW5hbWU6Y2FuZGlkYXRlcy5uYW1lLFxuICAgICAgICAgICAgY2FuZGlkYXRlcGFydHk6Y2FuZGlkYXRlcy5wYXJ0eSxcbiAgICAgICAgICAgIHZvdGVjb3VudDpOdW1iZXIoY2FuZGlkYXRlcy52b3RlQ291bnQpLFxuICAgICAgICAgICAgY3JlYXRpb25kYXRlOk51bWJlcihjYW5kaWRhdGVzLmNyZWF0aW9uRGF0ZSksXG4gICAgICAgICAgICBleHBpcmF0aW9uZGF0ZTpOdW1iZXIoY2FuZGlkYXRlcy5leHBpcmF0aW9uRGF0ZSlcblxuICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIFxuXG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHt2b3RlY291bnQxLGNhbmRpZGF0ZW5hbWUsY2FuZGlkYXRlcGFydHksdm90ZWNvdW50LGNyZWF0aW9uZGF0ZSxleHBpcmF0aW9uZGF0ZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Wb3Rpbmc8L2gxPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0ID0ge3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZXZvdGVjb3VudH0+R2V0IFZvdGUgQ291bnQ8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy52b3RlcnN9PlZvdGVyczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICBWb3RlIENvdW50OiB7dm90ZWNvdW50MX1cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuRGV0YWlsc30+R2V0IENhbmRpZGF0ZSBEZXRhaWxzPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8U2VnbWVudEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5DYW5kaWRhdGUgTmFtZSA6IHtjYW5kaWRhdGVuYW1lfTwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+Q2FuZGlkYXRlIFBhcnR5IDoge2NhbmRpZGF0ZXBhcnR5fTwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+Vm90ZSBDb3VudCA6IHt2b3RlY291bnR9PC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5DcmVhdGlvbiBEYXRlIDoge2NyZWF0aW9uZGF0ZX08L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50PkV4cGlyYXRpb24gRGF0ZSA6IHtleHBpcmF0aW9uZGF0ZX08L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50R3JvdXA+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiA+XG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgPE1lc3NhZ2UgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9Lz5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVm90aW5nIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYmFsbG90IiwiTGluayIsIlJvdXRlciIsIkZvcm0iLCJCdXR0b24iLCJTZWdtZW50IiwiTWVzc2FnZSIsIlNlZ21lbnRHcm91cCIsIndlYjMiLCJWb3RpbmciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJlbGVjdGlvbkFkZHJlc3NlcyIsImZpcnN0QWRkcmVzcyIsInNwbGl0IiwicmVuZGVyIiwidm90ZWNvdW50MSIsImNhbmRpZGF0ZW5hbWUiLCJjYW5kaWRhdGVwYXJ0eSIsInZvdGVjb3VudCIsImNyZWF0aW9uZGF0ZSIsImV4cGlyYXRpb25kYXRlIiwic3RhdGUiLCJkaXYiLCJoMSIsIm9uU3VibWl0Iiwib25DbGljayIsImhhbmRsZXZvdGVjb3VudCIsInZvdGVycyIsIkRldGFpbHMiLCJyb3V0ZSIsImNvbnRlbnQiLCJlcnJvck1lc3NhZ2UiLCJlbGVjdGlvbkFkZHJlc3NlczEiLCJiYWxsb3RzIiwiaXNDYW5kaWEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwidm90ZSIsInNlbmQiLCJmcm9tIiwiZ2FzIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2FuZGlkYXRlcyIsImNhbGwiLCJjcmVhdGlvbkRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsImdldFZvdGVDb3VudCIsIk51bWJlciIsIm5hbWUiLCJwYXJ0eSIsInZvdGVDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});