"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["renewNames-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/renewNames.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/renewNames.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renewNames_default),\n/* harmony export */   extendWrappedName: () => (/* binding */ extendWrappedName)\n/* harmony export */ });\n/* harmony import */ var _utils_consts_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/consts.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs\");\n/* harmony import */ var _utils_labels_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/labels.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/labels.mjs\");\n/* harmony import */ var _utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/normalise.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/normalise.mjs\");\n// src/functions/renewNames.ts\n\n\n\nasync function extendWrappedName({ contracts }, name, options) {\n  const expiry = options?.duration || _utils_consts_mjs__WEBPACK_IMPORTED_MODULE_0__.MAX_INT_64;\n  const labels = name.split(\".\");\n  const labelHash = (0,_utils_labels_mjs__WEBPACK_IMPORTED_MODULE_1__.labelhash)(labels.shift());\n  const parentNode = (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_2__.namehash)(labels.join(\".\"));\n  const nameWrapper = await contracts.getNameWrapper();\n  return nameWrapper.populateTransaction.extendExpiry(\n    parentNode,\n    labelHash,\n    expiry\n  );\n}\nasync function renewNames_default({ contracts }, nameOrNames, { duration, value }) {\n  const names = Array.isArray(nameOrNames) ? nameOrNames : [nameOrNames];\n  const labels = names.map((name) => {\n    const label = name.split(\".\");\n    if (label.length !== 2 || label[1] !== \"eth\") {\n      throw new Error(\"Currently only .eth TLD renewals are supported\");\n    }\n    return label[0];\n  });\n  if (labels.length === 1) {\n    const controller = await contracts.getEthRegistrarController();\n    return controller.populateTransaction.renew(labels[0], duration, { value });\n  }\n  const bulkRenewal = await contracts.getBulkRenewal();\n  return bulkRenewal.populateTransaction.renewAll(labels, duration, { value });\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/renewNames.mjs?");

/***/ }),

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EMPTY_ADDRESS: () => (/* binding */ EMPTY_ADDRESS),\n/* harmony export */   MAX_DATE_INT: () => (/* binding */ MAX_DATE_INT),\n/* harmony export */   MAX_INT_64: () => (/* binding */ MAX_INT_64),\n/* harmony export */   MINIMUM_DOT_ETH_CHARS: () => (/* binding */ MINIMUM_DOT_ETH_CHARS)\n/* harmony export */ });\n// src/utils/consts.ts\nvar EMPTY_ADDRESS = \"0x0000000000000000000000000000000000000000\";\nvar MAX_INT_64 = BigInt(\"18446744073709551615\");\nvar MAX_DATE_INT = 864e13;\nvar MINIMUM_DOT_ETH_CHARS = 3;\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs?");

/***/ })

}]);