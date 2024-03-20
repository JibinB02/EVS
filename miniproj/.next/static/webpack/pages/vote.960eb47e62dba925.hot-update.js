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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ballot */ \"./ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[0];\n        console.log(\"firstAddress\", firstAddress);\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1 } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 103,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 104,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 112,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 119,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 102,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const accounts = await _web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n            console.log(accounts);\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            this.setState({\n                electionAddresses1\n            });\n            const ballots = await (0,_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n            await ballots.methods.vote(0).send({\n                from: accounts[2],\n                gas: \"1000000\"\n            });\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[0]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZDLE9BQU87b0JBQ0hqQixRQUFRQyxHQUFHLENBQUM7Z0JBQ2hCO1lBQ0osRUFBRSxPQUFPbUMsT0FBTztnQkFDWnBDLFFBQVFvQyxLQUFLLENBQUMseUJBQXlCQTtZQUMzQztRQUVKO2FBR0F2QixTQUFTLE9BQU1LO1lBQ1hBLE1BQU1DLGNBQWM7WUFDcEIsTUFBTUoscUJBQXFCLElBQUksQ0FBQ1EsS0FBSyxDQUFDckIsaUJBQWlCO1lBRXZELElBQUk7Z0JBQ0EsTUFBTWtCLFdBQVcsTUFBTXhCLGlEQUFRLENBQUMwQixXQUFXO2dCQUMzQ3RCLFFBQVFDLEdBQUcsQ0FBQyxZQUFXbUI7Z0JBQ3ZCLE1BQU1KLFVBQVUsTUFBTTFCLG1EQUFNQSxDQUFDeUI7Z0JBQzdCLE1BQU1GLFNBQVMsTUFBTUcsUUFBUVMsT0FBTyxDQUFDWixNQUFNLENBQUNPLFFBQVEsQ0FBQyxFQUFFLEVBQUVXLElBQUk7Z0JBQzdEL0IsUUFBUUMsR0FBRyxDQUFDLFVBQVNZO1lBR3pCLEVBQ0EsT0FBTXVCLE9BQU87Z0JBQ1RwQyxRQUFRQyxHQUFHLENBQUNtQztZQUNoQjtRQUNKOztBQXFDSjtBQUVBLCtEQUFldkMsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b3RlLmpzPzViN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBiYWxsb3QgZnJvbSAnLi4vYmFsbG90JztcbmltcG9ydCB7TGlua30gZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiOyBcblxuaW1wb3J0IHtcbiAgICBGb3JtLFxuICAgIEJ1dHRvbixcbiAgICBTZWdtZW50XG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXG5pbXBvcnQgd2ViMyBmcm9tICcuLi93ZWIzJztcblxuY2xhc3MgVm90aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZWxlY3Rpb25BZGRyZXNzZXMxOiBbXSxcbiAgICAgICAgYmFsbG90czogbnVsbCxcbiAgICAgICAgdm90ZWNvdW50OiAwLFxuICAgICAgfTtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlcIixxdWVyeSk7XG4gICAgICAgIGNvbnN0IHsgZWxlY3Rpb25BZGRyZXNzZXMgfSA9IHF1ZXJ5O1xuICAgICAgICBjb25zdCBmaXJzdEFkZHJlc3MgPSBlbGVjdGlvbkFkZHJlc3Nlcy5zcGxpdCgnLycpWzBdXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RBZGRyZXNzXCIsZmlyc3RBZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIHsgZWxlY3Rpb25BZGRyZXNzZXM6IGZpcnN0QWRkcmVzcyB9O1xuICAgICAgfVxuICAgICAgXG4gICAgXG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3Nlc1xuICAgICAgICBjb25zb2xlLmxvZyhcImVsZWN0aW9uXCIsZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVsZWN0aW9uQWRkcmVzc2VzMSB9KVxuICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSlcbiAgICAgICAgYXdhaXQgYmFsbG90cy5tZXRob2RzLnZvdGUoMCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOmFjY291bnRzWzJdLFxuICAgICAgICAgICAgZ2FzOlwiMTAwMDAwMFwiXG4gICAgICAgIH0pXG5cblxuICAgICAgIFxuICAgIH1cbiAgICAgaGFuZGxldm90ZWNvdW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zb2xlXCIsIGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuZGlkYXRlczogXCIsIGNhbmRpZGF0ZXMpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjcmVhdGlvbkRhdGUgaXMgbGVzcyB0aGFuIHRoZSBleHBpcmF0aW9uRGF0ZVxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMuY3JlYXRpb25EYXRlIDwgY2FuZGlkYXRlcy5leHBpcmF0aW9uRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGVjb3VudCA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5nZXRWb3RlQ291bnQoMCkuY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCB2b3RlY291bnQxID0gTnVtYmVyKHZvdGVjb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dm90ZWNvdW50MTp2b3RlY291bnQxfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZvdGUgQ291bnQ6IFwiLCBOdW1iZXIodm90ZWNvdW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlY3Rpb24gcGVyaW9kIGhhcyBleHBpcmVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIHZvdGVycyA9IGFzeW5jKGV2ZW50KT0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IHZvdGVycyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy52b3RlcnMoYWNjb3VudHNbMF0pLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZXJzXCIsdm90ZXJzKVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICBcblxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB7dm90ZWNvdW50MX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Wb3Rpbmc8L2gxPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0ID0ge3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZXZvdGVjb3VudH0+R2V0IFZvdGUgQ291bnQ8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy52b3RlcnN9PlZvdGVyczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICBWb3RlIENvdW50OiB7dm90ZWNvdW50MX1cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiA+XG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVm90aW5nIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYmFsbG90IiwiTGluayIsIlJvdXRlciIsIkZvcm0iLCJCdXR0b24iLCJTZWdtZW50Iiwid2ViMyIsIlZvdGluZyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImVsZWN0aW9uQWRkcmVzc2VzIiwiZmlyc3RBZGRyZXNzIiwic3BsaXQiLCJyZW5kZXIiLCJ2b3RlY291bnQxIiwic3RhdGUiLCJkaXYiLCJoMSIsIm9uU3VibWl0Iiwib25DbGljayIsImhhbmRsZXZvdGVjb3VudCIsInZvdGVycyIsInJvdXRlIiwiZWxlY3Rpb25BZGRyZXNzZXMxIiwiYmFsbG90cyIsInZvdGVjb3VudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwicHJvcHMiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJ2b3RlIiwic2VuZCIsImZyb20iLCJnYXMiLCJjYW5kaWRhdGVzIiwiY2FsbCIsImNyZWF0aW9uRGF0ZSIsImV4cGlyYXRpb25EYXRlIiwiZ2V0Vm90ZUNvdW50IiwiTnVtYmVyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});