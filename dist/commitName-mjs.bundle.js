/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["commitName-mjs"],{

/***/ "?ed5d":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://dapp/buffer_(ignored)?");

/***/ }),

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/commitName.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/commitName.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commitName_default)\n/* harmony export */ });\n/* harmony import */ var _utils_registerHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/registerHelpers.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/registerHelpers.mjs\");\n/* harmony import */ var _utils_wrapper_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wrapper.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/wrapper.mjs\");\n// src/functions/commitName.ts\n\n\nasync function commitName_default({ contracts }, name, { resolverAddress, ...params }) {\n  const labels = name.split(\".\");\n  if (labels.length !== 2 || labels[1] !== \"eth\")\n    throw new Error(\"Currently only .eth TLD registrations are supported\");\n  (0,_utils_wrapper_mjs__WEBPACK_IMPORTED_MODULE_1__.wrappedLabelLengthCheck)(labels[0]);\n  const controller = await contracts.getEthRegistrarController();\n  const resolver = await contracts.getPublicResolver(\n    void 0,\n    resolverAddress\n  );\n  const { secret, commitment } = (0,_utils_registerHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__.makeCommitment)({\n    name,\n    resolver,\n    ...params\n  });\n  return {\n    ...await controller.populateTransaction.commit(commitment),\n    customData: {\n      secret,\n      commitment\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/commitName.mjs?");

/***/ })

}]);