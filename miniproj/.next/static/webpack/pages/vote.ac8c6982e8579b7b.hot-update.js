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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/ballot */ \"./ethereum/ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[0];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1, candidatename, candidateparty, votecount, creationdate, expirationdate } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 146,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 147,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 153,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 155,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 157,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: this.Details,\n                    children: \"Get Candidate Details\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 161,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.SegmentGroup, {}, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 163,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 166,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 165,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    content: this.state.errorMessage\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 171,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 145,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0,\n            errorMessage: \"\",\n            candidatename: \"\",\n            candidateparty: \"\",\n            votecount: 0,\n            creationdate: \"\",\n            expirationdate: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(accounts);\n                this.setState({\n                    electionAddresses1\n                });\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                await ballots.methods.vote(0).send({\n                    from: accounts[0],\n                    gas: \"1000000\"\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[1]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        this.Details = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ethereum_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                this.setState({\n                    candidatename: candidates.name,\n                    candidateparty: candidates.party,\n                    votecount: candidates.voteCount,\n                    creationdate: candidates.creationDate,\n                    expirationdate: candidates.expirationDate\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDSSxLQUFLLENBQUN6QixpQkFBaUI7WUFFdkQsSUFBSTtnQkFDQSxNQUFNMEIsV0FBVyxNQUFNaEMsMERBQVEsQ0FBQ2tDLFdBQVc7Z0JBQzNDOUIsUUFBUUMsR0FBRyxDQUFDLFlBQVcyQjtnQkFDdkIsTUFBTUosVUFBVSxNQUFNcEMsNERBQU1BLENBQUNtQztnQkFDN0IsTUFBTWdCLGFBQWEsTUFBTWYsUUFBUVEsT0FBTyxDQUFDTyxVQUFVLENBQUMsR0FBR0MsSUFBSTtnQkFDNUQsSUFBSSxDQUFDVCxRQUFRLENBQUM7b0JBQ2J4QixlQUFjZ0MsV0FBV00sSUFBSTtvQkFDN0JyQyxnQkFBZStCLFdBQVdPLEtBQUs7b0JBQy9CckMsV0FBVThCLFdBQVdRLFNBQVM7b0JBQzlCckMsY0FBYTZCLFdBQVdFLFlBQVk7b0JBQ3BDOUIsZ0JBQWU0QixXQUFXRyxjQUFjO2dCQUV6QztZQUVILEVBQ0EsT0FBT0wsT0FBTztnQkFDVnJDLFFBQVFDLEdBQUcsQ0FBQ29DO1lBQ2hCO1FBQ0o7O0FBMkNKO0FBRUEsK0RBQWV4QyxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvdGUuanM/NWI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJhbGxvdCBmcm9tICcuLi9ldGhlcmV1bS9iYWxsb3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7IFxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cblxuaW1wb3J0IHtcbiAgICBGb3JtLFxuICAgIEJ1dHRvbixcbiAgICBTZWdtZW50LFxuICAgIE1lc3NhZ2UsXG4gICAgU2VnbWVudEdyb3VwXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcblxuY2xhc3MgVm90aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZWxlY3Rpb25BZGRyZXNzZXMxOiBbXSxcbiAgICAgICAgYmFsbG90czogbnVsbCxcbiAgICAgICAgdm90ZWNvdW50OiAwLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXG4gICAgICAgIGNhbmRpZGF0ZW5hbWU6XCJcIixcbiAgICAgICAgY2FuZGlkYXRlcGFydHk6XCJcIixcbiAgICAgICAgdm90ZWNvdW50OjAsXG4gICAgICAgIGNyZWF0aW9uZGF0ZTpcIlwiLFxuICAgICAgICBleHBpcmF0aW9uZGF0ZTpcIlwiXG4gICAgICB9O1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWVyeVwiLHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgeyBlbGVjdGlvbkFkZHJlc3NlcyB9ID0gcXVlcnk7XG4gICAgICAgIGNvbnN0IGZpcnN0QWRkcmVzcyA9IGVsZWN0aW9uQWRkcmVzc2VzLnNwbGl0KCcvJylbMF1cbiAgICAgICAgcmV0dXJuIHsgZWxlY3Rpb25BZGRyZXNzZXM6IGZpcnN0QWRkcmVzcyB9O1xuICAgICAgfVxuICAgICAgXG4gICAgXG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlY3Rpb25cIixlbGVjdGlvbkFkZHJlc3NlczEpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xuICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWxlY3Rpb25BZGRyZXNzZXMxIH0pXG4gICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKVxuICAgICAgICBhd2FpdCBiYWxsb3RzLm1ldGhvZHMudm90ZSgwKS5zZW5kKHtcbiAgICAgICAgICAgIGZyb206YWNjb3VudHNbMF0sXG4gICAgICAgICAgICBnYXM6XCIxMDAwMDAwXCJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG5cblxuICAgICAgIFxuICAgIH1cbiAgICAgaGFuZGxldm90ZWNvdW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zb2xlXCIsIGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuZGlkYXRlczogXCIsIGNhbmRpZGF0ZXMpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjcmVhdGlvbkRhdGUgaXMgbGVzcyB0aGFuIHRoZSBleHBpcmF0aW9uRGF0ZVxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMuY3JlYXRpb25EYXRlIDwgY2FuZGlkYXRlcy5leHBpcmF0aW9uRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGVjb3VudCA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5nZXRWb3RlQ291bnQoMCkuY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCB2b3RlY291bnQxID0gTnVtYmVyKHZvdGVjb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dm90ZWNvdW50MTp2b3RlY291bnQxfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZvdGUgQ291bnQ6IFwiLCBOdW1iZXIodm90ZWNvdW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlY3Rpb24gcGVyaW9kIGhhcyBleHBpcmVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIHZvdGVycyA9IGFzeW5jKGV2ZW50KT0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IHZvdGVycyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy52b3RlcnMoYWNjb3VudHNbMV0pLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZXJzXCIsdm90ZXJzKVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIERldGFpbHMgPSBhc3luYyhldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbGVjdGlvbkFkZHJlc3NlczEgPSB0aGlzLnByb3BzLmVsZWN0aW9uQWRkcmVzc2VzO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsYWNjb3VudHMpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYW5kaWRhdGVuYW1lOmNhbmRpZGF0ZXMubmFtZSxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXBhcnR5OmNhbmRpZGF0ZXMucGFydHksXG4gICAgICAgICAgICB2b3RlY291bnQ6Y2FuZGlkYXRlcy52b3RlQ291bnQsXG4gICAgICAgICAgICBjcmVhdGlvbmRhdGU6Y2FuZGlkYXRlcy5jcmVhdGlvbkRhdGUsXG4gICAgICAgICAgICBleHBpcmF0aW9uZGF0ZTpjYW5kaWRhdGVzLmV4cGlyYXRpb25EYXRlXG5cbiAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICBcblxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB7dm90ZWNvdW50MSxjYW5kaWRhdGVuYW1lLGNhbmRpZGF0ZXBhcnR5LHZvdGVjb3VudCxjcmVhdGlvbmRhdGUsZXhwaXJhdGlvbmRhdGV9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Vm90aW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBWb3RlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGV2b3RlY291bnR9PkdldCBWb3RlIENvdW50PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudm90ZXJzfT5Wb3RlcnM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgVm90ZSBDb3VudDoge3ZvdGVjb3VudDF9XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLkRldGFpbHN9PkdldCBDYW5kaWRhdGUgRGV0YWlsczwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPFNlZ21lbnRHcm91cD48L1NlZ21lbnRHcm91cD5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICA8TWVzc2FnZSBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWb3RpbmciXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJiYWxsb3QiLCJMaW5rIiwiUm91dGVyIiwiRm9ybSIsIkJ1dHRvbiIsIlNlZ21lbnQiLCJNZXNzYWdlIiwiU2VnbWVudEdyb3VwIiwid2ViMyIsIlZvdGluZyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImVsZWN0aW9uQWRkcmVzc2VzIiwiZmlyc3RBZGRyZXNzIiwic3BsaXQiLCJyZW5kZXIiLCJ2b3RlY291bnQxIiwiY2FuZGlkYXRlbmFtZSIsImNhbmRpZGF0ZXBhcnR5Iiwidm90ZWNvdW50IiwiY3JlYXRpb25kYXRlIiwiZXhwaXJhdGlvbmRhdGUiLCJzdGF0ZSIsImRpdiIsImgxIiwib25TdWJtaXQiLCJvbkNsaWNrIiwiaGFuZGxldm90ZWNvdW50Iiwidm90ZXJzIiwiRGV0YWlscyIsInJvdXRlIiwiY29udGVudCIsImVycm9yTWVzc2FnZSIsImVsZWN0aW9uQWRkcmVzc2VzMSIsImJhbGxvdHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwidm90ZSIsInNlbmQiLCJmcm9tIiwiZ2FzIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2FuZGlkYXRlcyIsImNhbGwiLCJjcmVhdGlvbkRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsImdldFZvdGVDb3VudCIsIk51bWJlciIsIm5hbWUiLCJwYXJ0eSIsInZvdGVDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});