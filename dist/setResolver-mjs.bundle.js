"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["setResolver-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/setResolver.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/setResolver.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setResolver_default)\n/* harmony export */ });\n/* harmony import */ var _utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/normalise.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/normalise.mjs\");\n// src/functions/setResolver.ts\n\nasync function setResolver_default({ contracts, signer }, name, {\n  contract,\n  resolver\n}) {\n  if (!resolver) {\n    resolver = (await contracts.getPublicResolver()).address;\n  }\n  switch (contract) {\n    case \"registry\": {\n      const registry = (await contracts?.getRegistry()).connect(signer);\n      return registry.populateTransaction.setResolver((0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(name), resolver);\n    }\n    case \"nameWrapper\": {\n      const nameWrapper = (await contracts?.getNameWrapper()).connect(signer);\n      return nameWrapper.populateTransaction.setResolver(\n        (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(name),\n        resolver\n      );\n    }\n    default: {\n      throw new Error(`Unknown contract: ${contract}`);\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/setResolver.mjs?");

/***/ })

}]);