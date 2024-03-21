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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/ballot */ \"./ethereum/ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[0];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1 } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 115,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 124,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.Deta,\n                    children: \"Get Candidate Details\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 130,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 133,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    content: this.state.errorMessage\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 138,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 114,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0,\n            errorMessage: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(accounts);\n                this.setState({\n                    electionAddresses1\n                });\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                await ballots.methods.vote(0).send({\n                    from: accounts[0],\n                    gas: \"1000000\"\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[1]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtvQkFDckQsTUFBTWxCLFlBQVksTUFBTUQsUUFBUVMsT0FBTyxDQUFDVyxZQUFZLENBQUMsR0FBR0gsSUFBSSxDQUFDO3dCQUN6REwsTUFBTVAsUUFBUSxDQUFDLEVBQUU7b0JBQ3JCO29CQUNBLE1BQU1sQixhQUFha0MsT0FBT3BCO29CQUMxQixJQUFJLENBQUNPLFFBQVEsQ0FBQzt3QkFBQ3JCLFlBQVdBO29CQUFVO29CQUNwQ04sUUFBUUMsR0FBRyxDQUFDLGdCQUFnQnVDLE9BQU9wQjtnQkFDdkMsT0FBTztvQkFDSHBCLFFBQVFDLEdBQUcsQ0FBQztnQkFDaEI7WUFDSixFQUFFLE9BQU9nQyxPQUFPO2dCQUNaakMsUUFBUWlDLEtBQUssQ0FBQyx5QkFBeUJBO1lBQzNDO1FBRUo7YUFHQXBCLFNBQVMsT0FBTVE7WUFDWEEsTUFBTUMsY0FBYztZQUNwQixNQUFNSixxQkFBcUIsSUFBSSxDQUFDSyxLQUFLLENBQUNyQixpQkFBaUI7WUFFdkQsSUFBSTtnQkFDQSxNQUFNc0IsV0FBVyxNQUFNNUIsMERBQVEsQ0FBQzhCLFdBQVc7Z0JBQzNDMUIsUUFBUUMsR0FBRyxDQUFDLFlBQVd1QjtnQkFDdkIsTUFBTUwsVUFBVSxNQUFNOUIsNERBQU1BLENBQUM2QjtnQkFDN0IsTUFBTUwsU0FBUyxNQUFNTSxRQUFRUyxPQUFPLENBQUNmLE1BQU0sQ0FBQ1csUUFBUSxDQUFDLEVBQUUsRUFBRVksSUFBSTtnQkFDN0RwQyxRQUFRQyxHQUFHLENBQUMsVUFBU1k7WUFHekIsRUFDQSxPQUFNb0IsT0FBTztnQkFDVGpDLFFBQVFDLEdBQUcsQ0FBQ2dDO1lBQ2hCO1FBQ0o7O0FBeUNKO0FBRUEsK0RBQWVwQyxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvdGUuanM/NWI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJhbGxvdCBmcm9tICcuLi9ldGhlcmV1bS9iYWxsb3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7IFxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cblxuaW1wb3J0IHtcbiAgICBGb3JtLFxuICAgIEJ1dHRvbixcbiAgICBTZWdtZW50LFxuICAgIE1lc3NhZ2Vcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5jbGFzcyBWb3RpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBlbGVjdGlvbkFkZHJlc3NlczE6IFtdLFxuICAgICAgICBiYWxsb3RzOiBudWxsLFxuICAgICAgICB2b3RlY291bnQ6IDAsXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCJcIlxuICAgICAgfTtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlcIixxdWVyeSk7XG4gICAgICAgIGNvbnN0IHsgZWxlY3Rpb25BZGRyZXNzZXMgfSA9IHF1ZXJ5O1xuICAgICAgICBjb25zdCBmaXJzdEFkZHJlc3MgPSBlbGVjdGlvbkFkZHJlc3Nlcy5zcGxpdCgnLycpWzBdXG4gICAgICAgIHJldHVybiB7IGVsZWN0aW9uQWRkcmVzc2VzOiBmaXJzdEFkZHJlc3MgfTtcbiAgICAgIH1cbiAgICAgIFxuICAgIFxuXG4gICAgb25TdWJtaXQgPSBhc3luYyhldmVudCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3Nlc1xuICAgICAgICBjb25zb2xlLmxvZyhcImVsZWN0aW9uXCIsZWxlY3Rpb25BZGRyZXNzZXMxKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVsZWN0aW9uQWRkcmVzc2VzMSB9KVxuICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSlcbiAgICAgICAgYXdhaXQgYmFsbG90cy5tZXRob2RzLnZvdGUoMCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOmFjY291bnRzWzBdLFxuICAgICAgICAgICAgZ2FzOlwiMTAwMDAwMFwiXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuXG5cbiAgICAgICBcbiAgICB9XG4gICAgIGhhbmRsZXZvdGVjb3VudCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc29sZVwiLCBlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBhd2FpdCBiYWxsb3RzLm1ldGhvZHMuY2FuZGlkYXRlcygwKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbmRpZGF0ZXM6IFwiLCBjYW5kaWRhdGVzKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3JlYXRpb25EYXRlIGlzIGxlc3MgdGhhbiB0aGUgZXhwaXJhdGlvbkRhdGVcbiAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzLmNyZWF0aW9uRGF0ZSA8IGNhbmRpZGF0ZXMuZXhwaXJhdGlvbkRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2b3RlY291bnQgPSBhd2FpdCBiYWxsb3RzLm1ldGhvZHMuZ2V0Vm90ZUNvdW50KDApLmNhbGwoe1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3Qgdm90ZWNvdW50MSA9IE51bWJlcih2b3RlY291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZvdGVjb3VudDE6dm90ZWNvdW50MX0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWb3RlIENvdW50OiBcIiwgTnVtYmVyKHZvdGVjb3VudCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsZWN0aW9uIHBlcmlvZCBoYXMgZXhwaXJlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTogXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9O1xuXG5cbiAgICB2b3RlcnMgPSBhc3luYyhldmVudCk9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVsZWN0aW9uQWRkcmVzc2VzMSA9IHRoaXMucHJvcHMuZWxlY3Rpb25BZGRyZXNzZXM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIixhY2NvdW50cyk7XG4gICAgICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgICAgICBjb25zdCB2b3RlcnMgPSBhd2FpdCBiYWxsb3RzLm1ldGhvZHMudm90ZXJzKGFjY291bnRzWzFdKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvdGVyc1wiLHZvdGVycylcblxuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgXG5cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qge3ZvdGVjb3VudDF9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Vm90aW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBWb3RlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGV2b3RlY291bnR9PkdldCBWb3RlIENvdW50PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudm90ZXJzfT5Wb3RlcnM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgVm90ZSBDb3VudDoge3ZvdGVjb3VudDF9XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLkRldGF9PkdldCBDYW5kaWRhdGUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgIDxNZXNzYWdlIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfS8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImJhbGxvdCIsIkxpbmsiLCJSb3V0ZXIiLCJGb3JtIiwiQnV0dG9uIiwiU2VnbWVudCIsIk1lc3NhZ2UiLCJ3ZWIzIiwiVm90aW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZWxlY3Rpb25BZGRyZXNzZXMiLCJmaXJzdEFkZHJlc3MiLCJzcGxpdCIsInJlbmRlciIsInZvdGVjb3VudDEiLCJzdGF0ZSIsImRpdiIsImgxIiwib25TdWJtaXQiLCJvbkNsaWNrIiwiaGFuZGxldm90ZWNvdW50Iiwidm90ZXJzIiwiRGV0YSIsInJvdXRlIiwiY29udGVudCIsImVycm9yTWVzc2FnZSIsImVsZWN0aW9uQWRkcmVzc2VzMSIsImJhbGxvdHMiLCJ2b3RlY291bnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwidm90ZSIsInNlbmQiLCJmcm9tIiwiZ2FzIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2FuZGlkYXRlcyIsImNhbGwiLCJjcmVhdGlvbkRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsImdldFZvdGVDb3VudCIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});