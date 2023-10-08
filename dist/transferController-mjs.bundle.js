"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["transferController-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/transferController.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/transferController.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ transferController_default)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_solidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/solidity */ \"./node_modules/@ethersproject/solidity/lib.esm/index.js\");\n// src/functions/transferController.ts\n\nasync function transferController_default({ contracts, signer }, name, {\n  newOwner,\n  isOwner\n}) {\n  const baseRegistrar = (await contracts?.getBaseRegistrar()).connect(signer);\n  const registry = (await contracts?.getRegistry()).connect(signer);\n  const labels = name.split(\".\");\n  if (isOwner) {\n    return registry.populateTransaction.setOwner(\n      (0,_ethersproject_solidity__WEBPACK_IMPORTED_MODULE_0__.keccak256)([\"string\"], [labels[0]]),\n      newOwner\n    );\n  }\n  return baseRegistrar.populateTransaction.reclaim(\n    (0,_ethersproject_solidity__WEBPACK_IMPORTED_MODULE_0__.keccak256)([\"string\"], [labels[0]]),\n    newOwner\n  );\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/transferController.mjs?");

/***/ })

}]);