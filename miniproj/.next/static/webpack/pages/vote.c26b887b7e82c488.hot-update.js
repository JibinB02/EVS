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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ballot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ballot */ \"./ballot.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n\n\n\n\n\n\n\nclass Voting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(param) {\n        let { query } = param;\n        console.log(\"query\", query);\n        const { electionAddresses } = query;\n        const firstAddress = electionAddresses.split(\"/\")[1];\n        return {\n            electionAddresses: firstAddress\n        };\n    }\n    render() {\n        const { votecount1, voters } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Voting\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                    onSubmit: this.onSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 103,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: this.handlevotecount,\n                    children: \"Get Vote Count\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 109,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: this.voters,\n                    children: \"Voters\"\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 111,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {\n                    children: [\n                        \"Vote Count: \",\n                        votecount1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                    route: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                        lineNumber: 118,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jibin/EVS/miniproj/pages/vote.js\",\n            lineNumber: 101,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            electionAddresses1: [],\n            ballots: null,\n            votecount: 0\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const accounts = await _web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n            console.log(accounts);\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"election\", electionAddresses1);\n            this.setState({\n                electionAddresses1\n            });\n            const ballots = await (0,_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n            await ballots.methods.vote(0).send({\n                from: accounts[2],\n                gas: \"1000000\"\n            });\n        };\n        this.handlevotecount = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            console.log(\"console\", electionAddresses1);\n            try {\n                const accounts = await _web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                const ballots = await (0,_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const candidates = await ballots.methods.candidates(0).call();\n                console.log(\"Candidates: \", candidates);\n                // Check if the creationDate is less than the expirationDate\n                if (candidates.creationDate < candidates.expirationDate) {\n                    const votecount = await ballots.methods.getVoteCount(0).call({\n                        from: accounts[0]\n                    });\n                    const votecount1 = Number(votecount);\n                    this.setState({\n                        votecount1: votecount1\n                    });\n                    console.log(\"Vote Count: \", Number(votecount));\n                } else {\n                    console.log(\"Election period has expired.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        this.voters = async (event)=>{\n            event.preventDefault();\n            const electionAddresses1 = this.props.electionAddresses;\n            try {\n                const accounts = await _web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                console.log(\"accounts\", accounts);\n                const ballots = await (0,_ballot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(electionAddresses1);\n                const voters = await ballots.methods.voters(accounts[0]).call();\n                console.log(\"voters\", voters);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voting);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92b3RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1Y7QUFDQTtBQUNJO0FBTVQ7QUFDQztBQUUzQixNQUFNUyxlQUFlUiw0Q0FBU0E7SUFPMUIsYUFBYVMsZ0JBQWdCLEtBQVMsRUFBRTtZQUFYLEVBQUVDLEtBQUssRUFBRSxHQUFUO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUMsU0FBUUY7UUFDcEIsTUFBTSxFQUFFRyxpQkFBaUIsRUFBRSxHQUFHSDtRQUM5QixNQUFNSSxlQUFlRCxrQkFBa0JFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwRCxPQUFPO1lBQUVGLG1CQUFtQkM7UUFBYTtJQUMzQztJQXdFRkUsU0FBUztRQUNELE1BQU0sRUFBQ0MsVUFBVSxFQUFDQyxNQUFNLEVBQUMsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFFMUMscUJBQ0ksOERBQUNDOzs4QkFDRyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ2pCLG1EQUFJQTtvQkFBQ2tCLFVBQVksSUFBSSxDQUFDQSxRQUFROzhCQUMvQiw0RUFBQ2pCLHFEQUFNQTtrQ0FBQzs7Ozs7Ozs7Ozs7OEJBS1IsOERBQUNBLHFEQUFNQTtvQkFBQ2tCLFNBQVMsSUFBSSxDQUFDQyxlQUFlOzhCQUFFOzs7Ozs7OEJBRXZDLDhEQUFDbkIscURBQU1BO29CQUFDa0IsU0FBUyxJQUFJLENBQUNMLE1BQU07OEJBQUU7Ozs7Ozs4QkFFOUIsOERBQUNaLHNEQUFPQTs7d0JBQUM7d0JBQ1FXOzs7Ozs7OzhCQUdqQiw4REFBQ2YseUNBQUlBO29CQUFDdUIsT0FBTTs4QkFDUiw0RUFBQ3BCLHFEQUFNQTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTekI7OzthQWpIQWMsUUFBUTtZQUNKTyxvQkFBb0IsRUFBRTtZQUN0QkMsU0FBUztZQUNUQyxXQUFXO1FBQ2I7YUFXRk4sV0FBVyxPQUFNTztZQUViQSxNQUFNQyxjQUFjO1lBQ3BCLE1BQU1DLFdBQVcsTUFBTXhCLGlEQUFRLENBQUMwQixXQUFXO1lBQzNDdEIsUUFBUUMsR0FBRyxDQUFDbUI7WUFDWixNQUFNTCxxQkFBcUIsSUFBSSxDQUFDUSxLQUFLLENBQUNyQixpQkFBaUI7WUFDdkRGLFFBQVFDLEdBQUcsQ0FBQyxZQUFXYztZQUN2QixJQUFJLENBQUNTLFFBQVEsQ0FBQztnQkFBRVQ7WUFBbUI7WUFDbkMsTUFBTUMsVUFBVSxNQUFNMUIsbURBQU1BLENBQUN5QjtZQUM3QixNQUFNQyxRQUFRUyxPQUFPLENBQUNDLElBQUksQ0FBQyxHQUFHQyxJQUFJLENBQUM7Z0JBQy9CQyxNQUFLUixRQUFRLENBQUMsRUFBRTtnQkFDaEJTLEtBQUk7WUFDUjtRQUlKO2FBQ0NoQixrQkFBa0IsT0FBT0s7WUFDdEJBLE1BQU1DLGNBQWM7WUFDcEIsTUFBTUoscUJBQXFCLElBQUksQ0FBQ1EsS0FBSyxDQUFDckIsaUJBQWlCO1lBQ3ZERixRQUFRQyxHQUFHLENBQUMsV0FBV2M7WUFFdkIsSUFBSTtnQkFDQSxNQUFNSyxXQUFXLE1BQU14QixpREFBUSxDQUFDMEIsV0FBVztnQkFDM0MsTUFBTU4sVUFBVSxNQUFNMUIsbURBQU1BLENBQUN5QjtnQkFDN0IsTUFBTWUsYUFBYSxNQUFNZCxRQUFRUyxPQUFPLENBQUNLLFVBQVUsQ0FBQyxHQUFHQyxJQUFJO2dCQUMzRC9CLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0I2QjtnQkFFNUIsNERBQTREO2dCQUM1RCxJQUFJQSxXQUFXRSxZQUFZLEdBQUdGLFdBQVdHLGNBQWMsRUFBRTtvQkFDckQsTUFBTWhCLFlBQVksTUFBTUQsUUFBUVMsT0FBTyxDQUFDUyxZQUFZLENBQUMsR0FBR0gsSUFBSSxDQUFDO3dCQUN6REgsTUFBTVIsUUFBUSxDQUFDLEVBQUU7b0JBQ3JCO29CQUNBLE1BQU1kLGFBQWE2QixPQUFPbEI7b0JBQzFCLElBQUksQ0FBQ08sUUFBUSxDQUFDO3dCQUFDbEIsWUFBV0E7b0JBQVU7b0JBQ3BDTixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCa0MsT0FBT2xCO2dCQUN2QyxPQUFPO29CQUNIakIsUUFBUUMsR0FBRyxDQUFDO2dCQUNoQjtZQUNKLEVBQUUsT0FBT21DLE9BQU87Z0JBQ1pwQyxRQUFRb0MsS0FBSyxDQUFDLHlCQUF5QkE7WUFDM0M7UUFFSjthQUdBN0IsU0FBUyxPQUFNVztZQUNYQSxNQUFNQyxjQUFjO1lBQ3BCLE1BQU1KLHFCQUFxQixJQUFJLENBQUNRLEtBQUssQ0FBQ3JCLGlCQUFpQjtZQUV2RCxJQUFJO2dCQUNBLE1BQU1rQixXQUFXLE1BQU14QixpREFBUSxDQUFDMEIsV0FBVztnQkFDM0N0QixRQUFRQyxHQUFHLENBQUMsWUFBV21CO2dCQUN2QixNQUFNSixVQUFVLE1BQU0xQixtREFBTUEsQ0FBQ3lCO2dCQUM3QixNQUFNUixTQUFTLE1BQU1TLFFBQVFTLE9BQU8sQ0FBQ2xCLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDLEVBQUUsRUFBRVcsSUFBSTtnQkFDN0QvQixRQUFRQyxHQUFHLENBQUMsVUFBU007WUFHekIsRUFDQSxPQUFNNkIsT0FBTztnQkFDVHBDLFFBQVFDLEdBQUcsQ0FBQ21DO1lBQ2hCO1FBQ0o7O0FBcUNKO0FBRUEsK0RBQWV2QyxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvdGUuanM/NWI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJhbGxvdCBmcm9tICcuLi9iYWxsb3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7IFxuXG5pbXBvcnQge1xuICAgIEZvcm0sXG4gICAgQnV0dG9uLFxuICAgIFNlZ21lbnRcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL3dlYjMnO1xuXG5jbGFzcyBWb3RpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBlbGVjdGlvbkFkZHJlc3NlczE6IFtdLFxuICAgICAgICBiYWxsb3RzOiBudWxsLFxuICAgICAgICB2b3RlY291bnQ6IDAsXG4gICAgICB9O1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWVyeVwiLHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgeyBlbGVjdGlvbkFkZHJlc3NlcyB9ID0gcXVlcnk7XG4gICAgICAgIGNvbnN0IGZpcnN0QWRkcmVzcyA9IGVsZWN0aW9uQWRkcmVzc2VzLnNwbGl0KCcvJylbMV1cbiAgICAgICAgcmV0dXJuIHsgZWxlY3Rpb25BZGRyZXNzZXM6IGZpcnN0QWRkcmVzcyB9O1xuICAgICAgfVxuICAgICAgXG4gICAgXG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3Nlc1xuICAgICAgICBjb25zb2xlLmxvZyhcImVsZWN0aW9uXCIsZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVsZWN0aW9uQWRkcmVzc2VzMSB9KVxuICAgICAgICBjb25zdCBiYWxsb3RzID0gYXdhaXQgYmFsbG90KGVsZWN0aW9uQWRkcmVzc2VzMSlcbiAgICAgICAgYXdhaXQgYmFsbG90cy5tZXRob2RzLnZvdGUoMCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOmFjY291bnRzWzJdLFxuICAgICAgICAgICAgZ2FzOlwiMTAwMDAwMFwiXG4gICAgICAgIH0pXG5cblxuICAgICAgIFxuICAgIH1cbiAgICAgaGFuZGxldm90ZWNvdW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zb2xlXCIsIGVsZWN0aW9uQWRkcmVzc2VzMSk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc3QgYmFsbG90cyA9IGF3YWl0IGJhbGxvdChlbGVjdGlvbkFkZHJlc3NlczEpO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5jYW5kaWRhdGVzKDApLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuZGlkYXRlczogXCIsIGNhbmRpZGF0ZXMpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjcmVhdGlvbkRhdGUgaXMgbGVzcyB0aGFuIHRoZSBleHBpcmF0aW9uRGF0ZVxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMuY3JlYXRpb25EYXRlIDwgY2FuZGlkYXRlcy5leHBpcmF0aW9uRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGVjb3VudCA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy5nZXRWb3RlQ291bnQoMCkuY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCB2b3RlY291bnQxID0gTnVtYmVyKHZvdGVjb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dm90ZWNvdW50MTp2b3RlY291bnQxfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZvdGUgQ291bnQ6IFwiLCBOdW1iZXIodm90ZWNvdW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlY3Rpb24gcGVyaW9kIGhhcyBleHBpcmVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIHZvdGVycyA9IGFzeW5jKGV2ZW50KT0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZWxlY3Rpb25BZGRyZXNzZXMxID0gdGhpcy5wcm9wcy5lbGVjdGlvbkFkZHJlc3NlcztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxvdHMgPSBhd2FpdCBiYWxsb3QoZWxlY3Rpb25BZGRyZXNzZXMxKTtcbiAgICAgICAgICAgIGNvbnN0IHZvdGVycyA9IGF3YWl0IGJhbGxvdHMubWV0aG9kcy52b3RlcnMoYWNjb3VudHNbMF0pLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZXJzXCIsdm90ZXJzKVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICBcblxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB7dm90ZWNvdW50MSx2b3RlcnN9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Vm90aW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBWb3RlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGV2b3RlY291bnR9PkdldCBWb3RlIENvdW50PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudm90ZXJzfT5Wb3RlcnM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgVm90ZSBDb3VudDoge3ZvdGVjb3VudDF9XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImJhbGxvdCIsIkxpbmsiLCJSb3V0ZXIiLCJGb3JtIiwiQnV0dG9uIiwiU2VnbWVudCIsIndlYjMiLCJWb3RpbmciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJlbGVjdGlvbkFkZHJlc3NlcyIsImZpcnN0QWRkcmVzcyIsInNwbGl0IiwicmVuZGVyIiwidm90ZWNvdW50MSIsInZvdGVycyIsInN0YXRlIiwiZGl2IiwiaDEiLCJvblN1Ym1pdCIsIm9uQ2xpY2siLCJoYW5kbGV2b3RlY291bnQiLCJyb3V0ZSIsImVsZWN0aW9uQWRkcmVzc2VzMSIsImJhbGxvdHMiLCJ2b3RlY291bnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsInByb3BzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwidm90ZSIsInNlbmQiLCJmcm9tIiwiZ2FzIiwiY2FuZGlkYXRlcyIsImNhbGwiLCJjcmVhdGlvbkRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsImdldFZvdGVDb3VudCIsIk51bWJlciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vote.js\n"));

/***/ })

});