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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/ballot */ \"./ethereum/ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[1];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1, candidatename, candidateparty, votecount, creationdate, expirationdate, isCandidateNameLoaded } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 148,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 149,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 155,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 157,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 159,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.Details,\n                    children: \"Get Candidate Details\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 163,\n                    columnNumber: 17\n                }, this),\n                isCandidateNameLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.SegmentGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Candidate Name : \",\n                                candidatename\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 169,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Candidate Party : \",\n                                candidateparty\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 170,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Vote Count : \",\n                                votecount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 171,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Creation Date : \",\n                                creationdate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 172,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                            children: [\n                                \"Expiration Date : \",\n                                expirationdate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                            lineNumber: 173,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 168,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 178,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 177,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    content: this.state.errorMessage\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 183,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 147,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0,\n            errorMessage: \"\",\n            candidatename: \"\",\n            candidateparty: \"\",\n            votecount: 0,\n            creationdate: \"\",\n            expirationdate: \"\",\n            isCandidateNameLoaded: false\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(accounts);\n                this.setState({\n                    electionAddresses1\n                });\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                await ballots.methods.vote(0).send({\n                    from: accounts[1],\n                    gas: \"1000000\"\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[1]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        this.Details = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                this.setState({\n                    candidatename: candidates.name,\n                    candidateparty: candidates.party,\n                    votecount: Number(candidates.voteCount),\n                    creationdate: Number(candidates.creationDate),\n                    expirationdate: Number(candidates.expirationDate),\n                    isCandidateNameLoaded: true\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTXJDLDREQUFNQSxDQUFDb0M7Z0JBQzdCLE1BQU1MLFNBQVMsTUFBTU0sUUFBUVEsT0FBTyxDQUFDZCxNQUFNLENBQUNVLFFBQVEsQ0FBQyxFQUFFLEVBQUVZLElBQUk7Z0JBQzdEekMsUUFBUUMsR0FBRyxDQUFDLFVBQVNrQjtZQUd6QixFQUNBLE9BQU1tQixPQUFPO2dCQUNUdEMsUUFBUUMsR0FBRyxDQUFDcUM7WUFDaEI7UUFDSjthQUdBbEIsVUFBVSxPQUFNTTtZQUNaQSxNQUFNQyxjQUFjO1lBQ3BCLE1BQU1ILHFCQUFxQixJQUFJLENBQUNJLEtBQUssQ0FBQzFCLGlCQUFpQjtZQUV2RCxJQUFJO2dCQUNBLE1BQU0yQixXQUFXLE1BQU1qQywwREFBUSxDQUFDbUMsV0FBVztnQkFDM0MvQixRQUFRQyxHQUFHLENBQUMsWUFBVzRCO2dCQUN2QixNQUFNSixVQUFVLE1BQU1yQyw0REFBTUEsQ0FBQ29DO2dCQUM3QixNQUFNZ0IsYUFBYSxNQUFNZixRQUFRUSxPQUFPLENBQUNPLFVBQVUsQ0FBQyxHQUFHQyxJQUFJO2dCQUM1RCxJQUFJLENBQUNULFFBQVEsQ0FBQztvQkFDYnpCLGVBQWNpQyxXQUFXTSxJQUFJO29CQUM3QnRDLGdCQUFlZ0MsV0FBV08sS0FBSztvQkFDL0J0QyxXQUFVb0MsT0FBT0wsV0FBV1EsU0FBUztvQkFDckN0QyxjQUFhbUMsT0FBT0wsV0FBV0UsWUFBWTtvQkFDM0MvQixnQkFBZWtDLE9BQU9MLFdBQVdHLGNBQWM7b0JBQy9DL0IsdUJBQXNCO2dCQUV2QjtZQUVILEVBQ0EsT0FBTzBCLE9BQU87Z0JBQ1Z0QyxRQUFRQyxHQUFHLENBQUNxQztZQUNoQjtRQUNKOztBQXFESjtBQUVBLCtEQUFlekMsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b3RlLmpzPzViN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBiYWxsb3QgZnJvbSAnLi4vZXRoZXJldW0vYmFsbG90JztcbmltcG9ydCB7TGlua30gZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiOyBcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5cbmltcG9ydCB7XG4gICAgRm9ybSxcbiAgICBCdXR0b24sXG4gICAgU2VnbWVudCxcbiAgICBNZXNzYWdlLFxuICAgIFNlZ21lbnRHcm91cFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5cbmNsYXNzIFZvdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVsZWN0aW9uQWRkcmVzc2VzMTogW10sXG4gICAgICAgIGJhbGxvdHM6IG51bGwsXG4gICAgICAgIHZvdGVjb3VudDogMCxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgICAgICBjYW5kaWRhdGVuYW1lOlwiXCIsXG4gICAgICAgIGNhbmRpZGF0ZXBhcnR5OlwiXCIsXG4gICAgICAgIHZvdGVjb3VudDowLFxuICAgICAgICBjcmVhdGlvbmRhdGU6XCJcIixcbiAgICAgICAgZXhwaXJhdGlvbmRhdGU6XCJcIixcbiAgICAgICAgaXNDYW5kaWRhdGVOYW1lTG9hZGVkOmZhbHNlXG4gICAgICB9O1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWVyeVwiLHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgeyBlbGVjdGlvbkFkZHJlc3NlcyB9ID0gcXVlcnk7XG4gICAgICAgIGNvbnN0IGZpcnN0QWRkcmVzcyA9IGVsZWN0aW9uQWRkcmVzc2VzLnNwbGl0KCcvJylbMV1cbiAgICAgICAgcmV0dXJuIHsgZWxlY3Rpb25BZGRyZXNzZXM6IGZpcnN0QWRkcmVzcyB9O1xuICAgICAgfVxuICAgICAgXG4gICAgXG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlY3Rpb25cIixlbGVjdGlvbkFkZHJlc3NlczEpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xuICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWxlY3Rpb25BZGRyZXNzZXMxIH0pXG4gICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKVxuICAgICAgICBhd2FpdCBiYWxsb3RzLm1ldGhvZHMudm90ZSgwKS5zZW5kKHtcbiAgICAgICAgICAgIGZyb206YWNjb3VudHNbMV0sXG4gICAgICAgICAgICBnYXM6XCIxMDAwMDAwXCJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG5cblxuICAgICAgIFxuICAgIH1cbiAgICAgaGFuZGxldm90ZWNvdW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zb2xlXCIsIGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuZGlkYXRlczogXCIsIGNhbmRpZGF0ZXMpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjcmVhdGlvbkRhdGUgaXMgbGVzcyB0aGFuIHRoZSBleHBpcmF0aW9uRGF0ZVxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMuY3JlYXRpb25EYXRlIDwgY2FuZGlkYXRlcy5leHBpcmF0aW9uRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGVjb3VudCA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5nZXRWb3RlQ291bnQoMCkuY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCB2b3RlY291bnQxID0gTnVtYmVyKHZvdGVjb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dm90ZWNvdW50MTp2b3RlY291bnQxfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZvdGUgQ291bnQ6IFwiLCBOdW1iZXIodm90ZWNvdW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlY3Rpb24gcGVyaW9kIGhhcyBleHBpcmVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIHZvdGVycyA9IGFzeW5jKGV2ZW50KT0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IHZvdGVycyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy52b3RlcnMoYWNjb3VudHNbMV0pLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZXJzXCIsdm90ZXJzKVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIERldGFpbHMgPSBhc3luYyhldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsYWNjb3VudHMpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYW5kaWRhdGVuYW1lOmNhbmRpZGF0ZXMubmFtZSxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXBhcnR5OmNhbmRpZGF0ZXMucGFydHksXG4gICAgICAgICAgICB2b3RlY291bnQ6TnVtYmVyKGNhbmRpZGF0ZXMudm90ZUNvdW50KSxcbiAgICAgICAgICAgIGNyZWF0aW9uZGF0ZTpOdW1iZXIoY2FuZGlkYXRlcy5jcmVhdGlvbkRhdGUpLFxuICAgICAgICAgICAgZXhwaXJhdGlvbmRhdGU6TnVtYmVyKGNhbmRpZGF0ZXMuZXhwaXJhdGlvbkRhdGUpLFxuICAgICAgICAgICAgaXNDYW5kaWRhdGVOYW1lTG9hZGVkOnRydWVcblxuICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIFxuXG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHt2b3RlY291bnQxLGNhbmRpZGF0ZW5hbWUsY2FuZGlkYXRlcGFydHksdm90ZWNvdW50LGNyZWF0aW9uZGF0ZSxleHBpcmF0aW9uZGF0ZSxpc0NhbmRpZGF0ZU5hbWVMb2FkZWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Vm90aW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBWb3RlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGV2b3RlY291bnR9PkdldCBWb3RlIENvdW50PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudm90ZXJzfT5Wb3RlcnM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgVm90ZSBDb3VudDoge3ZvdGVjb3VudDF9XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLkRldGFpbHN9PkdldCBDYW5kaWRhdGUgRGV0YWlsczwvQnV0dG9uPlxuXG5cbiAgICAgICAgICAgICAgICB7aXNDYW5kaWRhdGVOYW1lTG9hZGVkICYmIChcblxuICAgICAgICAgICAgICAgIDxTZWdtZW50R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50PkNhbmRpZGF0ZSBOYW1lIDoge2NhbmRpZGF0ZW5hbWV9PC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5DYW5kaWRhdGUgUGFydHkgOiB7Y2FuZGlkYXRlcGFydHl9PC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD5Wb3RlIENvdW50IDoge3ZvdGVjb3VudH08L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50PkNyZWF0aW9uIERhdGUgOiB7Y3JlYXRpb25kYXRlfTwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+RXhwaXJhdGlvbiBEYXRlIDoge2V4cGlyYXRpb25kYXRlfTwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnRHcm91cD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgIDxNZXNzYWdlIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfS8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImJhbGxvdCIsIkxpbmsiLCJSb3V0ZXIiLCJGb3JtIiwiQnV0dG9uIiwiU2VnbWVudCIsIk1lc3NhZ2UiLCJTZWdtZW50R3JvdXAiLCJ3ZWIzIiwiVm90aW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZWxlY3Rpb25BZGRyZXNzZXMiLCJmaXJzdEFkZHJlc3MiLCJzcGxpdCIsInJlbmRlciIsInZvdGVjb3VudDEiLCJjYW5kaWRhdGVuYW1lIiwiY2FuZGlkYXRlcGFydHkiLCJ2b3RlY291bnQiLCJjcmVhdGlvbmRhdGUiLCJleHBpcmF0aW9uZGF0ZSIsImlzQ2FuZGlkYXRlTmFtZUxvYWRlZCIsInN0YXRlIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsIm9uQ2xpY2siLCJoYW5kbGV2b3RlY291bnQiLCJ2b3RlcnMiLCJEZXRhaWxzIiwicm91dGUiLCJjb250ZW50IiwiZXJyb3JNZXNzYWdlIiwiZWxlY3Rpb25BZGRyZXNzZXMxIiwiYmFsbG90cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJ2b3RlIiwic2VuZCIsImZyb20iLCJnYXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJjYW5kaWRhdGVzIiwiY2FsbCIsImNyZWF0aW9uRGF0ZSIsImV4cGlyYXRpb25EYXRlIiwiZ2V0Vm90ZUNvdW50IiwiTnVtYmVyIiwibmFtZSIsInBhcnR5Iiwidm90ZUNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});