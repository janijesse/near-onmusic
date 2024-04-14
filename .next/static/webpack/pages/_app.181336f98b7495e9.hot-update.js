"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/wallets/near-wallet.js":
/*!************************************!*\
  !*** ./src/wallets/near-wallet.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Wallet: function() { return /* binding */ Wallet; }\n/* harmony export */ });\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ \"./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_distinctUntilChanged_map_rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=distinctUntilChanged,map!=!rxjs */ \"__barrel_optimize__?names=distinctUntilChanged,map!=!./node_modules/rxjs/dist/esm5/index.js\");\n/* harmony import */ var _near_wallet_selector_modal_ui_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @near-wallet-selector/modal-ui/styles.css */ \"./node_modules/@near-wallet-selector/modal-ui/styles.css\");\n/* harmony import */ var _near_wallet_selector_modal_ui_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_modal_ui_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _near_wallet_selector_modal_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @near-wallet-selector/modal-ui */ \"./node_modules/@near-wallet-selector/modal-ui/index.js\");\n/* harmony import */ var _near_wallet_selector_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @near-wallet-selector/core */ \"./node_modules/@near-wallet-selector/core/index.js\");\n/* harmony import */ var _near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @near-wallet-selector/here-wallet */ \"./node_modules/@near-wallet-selector/here-wallet/index.js\");\n/* harmony import */ var _near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @near-wallet-selector/my-near-wallet */ \"./node_modules/@near-wallet-selector/my-near-wallet/index.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n// near api js\n\n// wallet selector\n\n\n\n\n\n\nconst THIRTY_TGAS = \"30000000000000\";\nconst NO_DEPOSIT = \"0\";\nclass Wallet {\n    /**\n   * @constructor\n   * @param {string} networkId - the network id to connect to\n   * @param {string} createAccessKeyFor - the contract to create an access key for\n   * @example\n   * const wallet = new Wallet({ networkId: 'testnet', createAccessKeyFor: 'contractId' });\n   * wallet.startUp((signedAccountId) => console.log(signedAccountId));\n   */ constructor({ networkId = \"testnet\", createAccessKeyFor = undefined }){\n        /**\n   * To be called when the website loads\n   * @param {Function} accountChangeHook - a function that is called when the user signs in or out#\n   * @returns {Promise<string>} - the accountId of the signed-in user \n   */ this.startUp = async (accountChangeHook)=>{\n            const walletSelector = await this.selector;\n            const isSignedIn = walletSelector.isSignedIn();\n            if (isSignedIn) {\n                this.accountId = walletSelector.store.getState().accounts[0].accountId;\n                this.selectedWallet = await walletSelector.wallet();\n            }\n            walletSelector.store.observable.pipe((0,_barrel_optimize_names_distinctUntilChanged_map_rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((state)=>state.accounts), (0,_barrel_optimize_names_distinctUntilChanged_map_rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe((accounts)=>{\n                var _accounts_find;\n                const signedAccount = (_accounts_find = accounts.find((account)=>account.active)) === null || _accounts_find === void 0 ? void 0 : _accounts_find.accountId;\n                accountChangeHook(signedAccount);\n            });\n            return this.accountId;\n        };\n        /**\n   * Displays a modal to login the user\n   */ this.signIn = async ()=>{\n            const modal = (0,_near_wallet_selector_modal_ui__WEBPACK_IMPORTED_MODULE_2__.setupModal)(await this.selector, {\n                contractId: this.createAccessKeyFor\n            });\n            modal.show();\n        };\n        /**\n   * Logout the user\n   */ this.signOut = async ()=>{\n            await this.selectedWallet.signOut();\n            this.selectedWallet = this.accountId = this.createAccessKeyFor = null;\n        };\n        /**\n   * Makes a read-only call to a contract\n   * @param {string} contractId - the contract's account id\n   * @param {string} method - the method to call\n   * @param {Object} args - the arguments to pass to the method\n   * @returns {Promise<JSON.value>} - the result of the method call\n   */ this.viewMethod = async (param)=>{\n            let { contractId, method, args = {} } = param;\n            const walletSelector = await this.selector;\n            const { network } = walletSelector.options;\n            const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider({\n                url: network.nodeUrl\n            });\n            let res = await provider.query({\n                request_type: \"call_function\",\n                account_id: contractId,\n                method_name: method,\n                args_base64: Buffer.from(JSON.stringify(args)).toString(\"base64\"),\n                finality: \"optimistic\"\n            });\n            return JSON.parse(Buffer.from(res.result).toString());\n        };\n        /**\n   * Makes a call to a contract\n   * @param {string} contractId - the contract's account id\n   * @param {string} method - the method to call\n   * @param {Object} args - the arguments to pass to the method\n   * @param {string} gas - the amount of gas to use\n   * @param {string} deposit - the amount of yoctoNEAR to deposit\n   * @returns {Promise<Transaction>} - the resulting transaction\n   */ this.callMethod = async (param)=>{\n            let { contractId, method, args = {}, gas = THIRTY_TGAS, deposit = NO_DEPOSIT } = param;\n            // Sign a transaction with the \"FunctionCall\" action\n            return await this.selectedWallet.signAndSendTransaction({\n                signerId: this.accountId,\n                receiverId: contractId,\n                actions: [\n                    {\n                        type: \"FunctionCall\",\n                        params: {\n                            methodName: method,\n                            args,\n                            gas,\n                            deposit\n                        }\n                    }\n                ]\n            });\n        };\n        /**\n   * Makes a call to a contract\n   * @param {string} txhash - the transaction hash\n   * @returns {Promise<JSON.value>} - the result of the transaction\n   */ this.getTransactionResult = async (txhash)=>{\n            const walletSelector = await this.selector;\n            const { network } = walletSelector.options;\n            const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider({\n                url: network.nodeUrl\n            });\n            const transaction = await provider.txStatus(txhash, \"unnused\");\n            return near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.getTransactionLastResult(transaction);\n        };\n        this.accountId = \"\";\n        this.createAccessKeyFor = createAccessKeyFor;\n        this.selector = (0,_near_wallet_selector_core__WEBPACK_IMPORTED_MODULE_3__.setupWalletSelector)({\n            network: networkId,\n            modules: [\n                (0,_near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_5__.setupMyNearWallet)(),\n                (0,_near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_4__.setupHereWallet)()\n            ]\n        });\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQ0VDLE1BQU07d0JBQ05DLFFBQVE7NEJBQ05DLFlBQVkvQjs0QkFDWkM7NEJBQ0FzQjs0QkFDQUM7d0JBQ0Y7b0JBQ0Y7aUJBQ0Q7WUFDSDtRQUNGO1FBRUE7Ozs7R0FJQyxRQUNEUSx1QkFBdUIsT0FBT0M7WUFDNUIsTUFBTXhELGlCQUFpQixNQUFNLElBQUksQ0FBQ0MsUUFBUTtZQUMxQyxNQUFNLEVBQUV3QixPQUFPLEVBQUUsR0FBR3pCLGVBQWUwQixPQUFPO1lBQzFDLE1BQU1DLFdBQVcsSUFBSTNDLGtEQUFTQSxDQUFDNEMsZUFBZSxDQUFDO2dCQUFFQyxLQUFLSixRQUFRSyxPQUFPO1lBQUM7WUFHdEUsTUFBTTJCLGNBQWMsTUFBTTlCLFNBQVMrQixRQUFRLENBQUNGLFFBQVE7WUFDcEQsT0FBT3hFLGtEQUFTQSxDQUFDMkUsd0JBQXdCLENBQUNGO1FBQzVDO1FBcEhFLElBQUksQ0FBQ3RELFNBQVMsR0FBRztRQUNqQixJQUFJLENBQUNQLGtCQUFrQixHQUFHQTtRQUUxQixJQUFJLENBQUNLLFFBQVEsR0FBR2IsK0VBQW1CQSxDQUFDO1lBQ2xDcUMsU0FBUzlCO1lBQ1RpRSxTQUFTO2dCQUFDdEUsdUZBQWlCQTtnQkFBSUQsa0ZBQWVBO2FBQUc7UUFDbkQ7SUFDRjtBQThHRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2FsbGV0cy9uZWFyLXdhbGxldC5qcz9kOGU5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gbmVhciBhcGkganNcbmltcG9ydCB7IHByb3ZpZGVycyB9IGZyb20gJ25lYXItYXBpLWpzJztcblxuLy8gd2FsbGV0IHNlbGVjdG9yXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9tb2RhbC11aS9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHNldHVwTW9kYWwgfSBmcm9tICdAbmVhci13YWxsZXQtc2VsZWN0b3IvbW9kYWwtdWknO1xuaW1wb3J0IHsgc2V0dXBXYWxsZXRTZWxlY3RvciB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9jb3JlJztcbmltcG9ydCB7IHNldHVwSGVyZVdhbGxldCB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9oZXJlLXdhbGxldCc7XG5pbXBvcnQgeyBzZXR1cE15TmVhcldhbGxldCB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9teS1uZWFyLXdhbGxldCc7XG5cbmNvbnN0IFRISVJUWV9UR0FTID0gJzMwMDAwMDAwMDAwMDAwJztcbmNvbnN0IE5PX0RFUE9TSVQgPSAnMCc7XG5cbmV4cG9ydCBjbGFzcyBXYWxsZXQge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXR3b3JrSWQgLSB0aGUgbmV0d29yayBpZCB0byBjb25uZWN0IHRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjcmVhdGVBY2Nlc3NLZXlGb3IgLSB0aGUgY29udHJhY3QgdG8gY3JlYXRlIGFuIGFjY2VzcyBrZXkgZm9yXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IHdhbGxldCA9IG5ldyBXYWxsZXQoeyBuZXR3b3JrSWQ6ICd0ZXN0bmV0JywgY3JlYXRlQWNjZXNzS2V5Rm9yOiAnY29udHJhY3RJZCcgfSk7XG4gICAqIHdhbGxldC5zdGFydFVwKChzaWduZWRBY2NvdW50SWQpID0+IGNvbnNvbGUubG9nKHNpZ25lZEFjY291bnRJZCkpO1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyBuZXR3b3JrSWQgPSAndGVzdG5ldCcsIGNyZWF0ZUFjY2Vzc0tleUZvciA9IHVuZGVmaW5lZCB9KSB7XG4gICAgdGhpcy5hY2NvdW50SWQgPSAnJztcbiAgICB0aGlzLmNyZWF0ZUFjY2Vzc0tleUZvciA9IGNyZWF0ZUFjY2Vzc0tleUZvcjtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZXR1cFdhbGxldFNlbGVjdG9yKHtcbiAgICAgIG5ldHdvcms6IG5ldHdvcmtJZCxcbiAgICAgIG1vZHVsZXM6IFtzZXR1cE15TmVhcldhbGxldCgpLCBzZXR1cEhlcmVXYWxsZXQoKV1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBiZSBjYWxsZWQgd2hlbiB0aGUgd2Vic2l0ZSBsb2Fkc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY2NvdW50Q2hhbmdlSG9vayAtIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzaWducyBpbiBvciBvdXQjXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IC0gdGhlIGFjY291bnRJZCBvZiB0aGUgc2lnbmVkLWluIHVzZXIgXG4gICAqL1xuICBzdGFydFVwID0gYXN5bmMgKGFjY291bnRDaGFuZ2VIb29rKSA9PiB7XG4gICAgY29uc3Qgd2FsbGV0U2VsZWN0b3IgPSBhd2FpdCB0aGlzLnNlbGVjdG9yO1xuICAgIGNvbnN0IGlzU2lnbmVkSW4gPSB3YWxsZXRTZWxlY3Rvci5pc1NpZ25lZEluKCk7XG5cbiAgICBpZiAoaXNTaWduZWRJbikge1xuICAgICAgdGhpcy5hY2NvdW50SWQgPSB3YWxsZXRTZWxlY3Rvci5zdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRzWzBdLmFjY291bnRJZDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRXYWxsZXQgPSBhd2FpdCB3YWxsZXRTZWxlY3Rvci53YWxsZXQoKTtcbiAgICB9XG5cbiAgICB3YWxsZXRTZWxlY3Rvci5zdG9yZS5vYnNlcnZhYmxlXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLmFjY291bnRzKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShhY2NvdW50cyA9PiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZEFjY291bnQgPSBhY2NvdW50cy5maW5kKChhY2NvdW50KSA9PiBhY2NvdW50LmFjdGl2ZSk/LmFjY291bnRJZDtcbiAgICAgICAgYWNjb3VudENoYW5nZUhvb2soc2lnbmVkQWNjb3VudCk7XG4gICAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFjY291bnRJZDtcbiAgfTtcblxuICAvKipcbiAgICogRGlzcGxheXMgYSBtb2RhbCB0byBsb2dpbiB0aGUgdXNlclxuICAgKi9cbiAgc2lnbkluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gc2V0dXBNb2RhbChhd2FpdCB0aGlzLnNlbGVjdG9yLCB7IGNvbnRyYWN0SWQ6IHRoaXMuY3JlYXRlQWNjZXNzS2V5Rm9yIH0pO1xuICAgIG1vZGFsLnNob3coKTtcbiAgfTtcblxuICAvKipcbiAgICogTG9nb3V0IHRoZSB1c2VyXG4gICAqL1xuICBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRoaXMuc2VsZWN0ZWRXYWxsZXQuc2lnbk91dCgpO1xuICAgIHRoaXMuc2VsZWN0ZWRXYWxsZXQgPSB0aGlzLmFjY291bnRJZCA9IHRoaXMuY3JlYXRlQWNjZXNzS2V5Rm9yID0gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZXMgYSByZWFkLW9ubHkgY2FsbCB0byBhIGNvbnRyYWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250cmFjdElkIC0gdGhlIGNvbnRyYWN0J3MgYWNjb3VudCBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gdGhlIG1ldGhvZCB0byBjYWxsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0gdGhlIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBtZXRob2RcbiAgICogQHJldHVybnMge1Byb21pc2U8SlNPTi52YWx1ZT59IC0gdGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGNhbGxcbiAgICovXG4gIHZpZXdNZXRob2QgPSBhc3luYyAoeyBjb250cmFjdElkLCBtZXRob2QsIGFyZ3MgPSB7fSB9KSA9PiB7XG4gICAgY29uc3Qgd2FsbGV0U2VsZWN0b3IgPSBhd2FpdCB0aGlzLnNlbGVjdG9yO1xuICAgIGNvbnN0IHsgbmV0d29yayB9ID0gd2FsbGV0U2VsZWN0b3Iub3B0aW9ucztcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBwcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHsgdXJsOiBuZXR3b3JrLm5vZGVVcmwgfSk7XG5cbiAgICBsZXQgcmVzID0gYXdhaXQgcHJvdmlkZXIucXVlcnkoe1xuICAgICAgcmVxdWVzdF90eXBlOiAnY2FsbF9mdW5jdGlvbicsXG4gICAgICBhY2NvdW50X2lkOiBjb250cmFjdElkLFxuICAgICAgbWV0aG9kX25hbWU6IG1ldGhvZCxcbiAgICAgIGFyZ3NfYmFzZTY0OiBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShhcmdzKSkudG9TdHJpbmcoJ2Jhc2U2NCcpLFxuICAgICAgZmluYWxpdHk6ICdvcHRpbWlzdGljJyxcbiAgICB9KTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShCdWZmZXIuZnJvbShyZXMucmVzdWx0KS50b1N0cmluZygpKTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBNYWtlcyBhIGNhbGwgdG8gYSBjb250cmFjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udHJhY3RJZCAtIHRoZSBjb250cmFjdCdzIGFjY291bnQgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIHRoZSBtZXRob2QgdG8gY2FsbFxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHRoZSBhcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgbWV0aG9kXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBnYXMgLSB0aGUgYW1vdW50IG9mIGdhcyB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlcG9zaXQgLSB0aGUgYW1vdW50IG9mIHlvY3RvTkVBUiB0byBkZXBvc2l0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRyYW5zYWN0aW9uPn0gLSB0aGUgcmVzdWx0aW5nIHRyYW5zYWN0aW9uXG4gICAqL1xuICBjYWxsTWV0aG9kID0gYXN5bmMgKHsgY29udHJhY3RJZCwgbWV0aG9kLCBhcmdzID0ge30sIGdhcyA9IFRISVJUWV9UR0FTLCBkZXBvc2l0ID0gTk9fREVQT1NJVCB9KSA9PiB7XG4gICAgLy8gU2lnbiBhIHRyYW5zYWN0aW9uIHdpdGggdGhlIFwiRnVuY3Rpb25DYWxsXCIgYWN0aW9uXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VsZWN0ZWRXYWxsZXQuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7XG4gICAgICBzaWduZXJJZDogdGhpcy5hY2NvdW50SWQsXG4gICAgICByZWNlaXZlcklkOiBjb250cmFjdElkLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ0Z1bmN0aW9uQ2FsbCcsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBtZXRob2ROYW1lOiBtZXRob2QsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgZ2FzLFxuICAgICAgICAgICAgZGVwb3NpdCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZXMgYSBjYWxsIHRvIGEgY29udHJhY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR4aGFzaCAtIHRoZSB0cmFuc2FjdGlvbiBoYXNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEpTT04udmFsdWU+fSAtIHRoZSByZXN1bHQgb2YgdGhlIHRyYW5zYWN0aW9uXG4gICAqL1xuICBnZXRUcmFuc2FjdGlvblJlc3VsdCA9IGFzeW5jICh0eGhhc2gpID0+IHtcbiAgICBjb25zdCB3YWxsZXRTZWxlY3RvciA9IGF3YWl0IHRoaXMuc2VsZWN0b3I7XG4gICAgY29uc3QgeyBuZXR3b3JrIH0gPSB3YWxsZXRTZWxlY3Rvci5vcHRpb25zO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoeyB1cmw6IG5ldHdvcmsubm9kZVVybCB9KTtcblxuICAgXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBwcm92aWRlci50eFN0YXR1cyh0eGhhc2gsICd1bm51c2VkJyk7XG4gICAgcmV0dXJuIHByb3ZpZGVycy5nZXRUcmFuc2FjdGlvbkxhc3RSZXN1bHQodHJhbnNhY3Rpb24pO1xuICB9O1xufSJdLCJuYW1lcyI6WyJwcm92aWRlcnMiLCJkaXN0aW5jdFVudGlsQ2hhbmdlZCIsIm1hcCIsInNldHVwTW9kYWwiLCJzZXR1cFdhbGxldFNlbGVjdG9yIiwic2V0dXBIZXJlV2FsbGV0Iiwic2V0dXBNeU5lYXJXYWxsZXQiLCJUSElSVFlfVEdBUyIsIk5PX0RFUE9TSVQiLCJXYWxsZXQiLCJjb25zdHJ1Y3RvciIsIm5ldHdvcmtJZCIsImNyZWF0ZUFjY2Vzc0tleUZvciIsInVuZGVmaW5lZCIsInN0YXJ0VXAiLCJhY2NvdW50Q2hhbmdlSG9vayIsIndhbGxldFNlbGVjdG9yIiwic2VsZWN0b3IiLCJpc1NpZ25lZEluIiwiYWNjb3VudElkIiwic3RvcmUiLCJnZXRTdGF0ZSIsImFjY291bnRzIiwic2VsZWN0ZWRXYWxsZXQiLCJ3YWxsZXQiLCJvYnNlcnZhYmxlIiwicGlwZSIsInN0YXRlIiwic3Vic2NyaWJlIiwic2lnbmVkQWNjb3VudCIsImZpbmQiLCJhY2NvdW50IiwiYWN0aXZlIiwic2lnbkluIiwibW9kYWwiLCJjb250cmFjdElkIiwic2hvdyIsInNpZ25PdXQiLCJ2aWV3TWV0aG9kIiwibWV0aG9kIiwiYXJncyIsIm5ldHdvcmsiLCJvcHRpb25zIiwicHJvdmlkZXIiLCJKc29uUnBjUHJvdmlkZXIiLCJ1cmwiLCJub2RlVXJsIiwicmVzIiwicXVlcnkiLCJyZXF1ZXN0X3R5cGUiLCJhY2NvdW50X2lkIiwibWV0aG9kX25hbWUiLCJhcmdzX2Jhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJKU09OIiwic3RyaW5naWZ5IiwidG9TdHJpbmciLCJmaW5hbGl0eSIsInBhcnNlIiwicmVzdWx0IiwiY2FsbE1ldGhvZCIsImdhcyIsImRlcG9zaXQiLCJzaWduQW5kU2VuZFRyYW5zYWN0aW9uIiwic2lnbmVySWQiLCJyZWNlaXZlcklkIiwiYWN0aW9ucyIsInR5cGUiLCJwYXJhbXMiLCJtZXRob2ROYW1lIiwiZ2V0VHJhbnNhY3Rpb25SZXN1bHQiLCJ0eGhhc2giLCJ0cmFuc2FjdGlvbiIsInR4U3RhdHVzIiwiZ2V0VHJhbnNhY3Rpb25MYXN0UmVzdWx0IiwibW9kdWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/wallets/near-wallet.js\n"));

/***/ })

});