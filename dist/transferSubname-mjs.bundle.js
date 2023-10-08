"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["transferSubname-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/transferSubname.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/transferSubname.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ transferSubname_default)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_solidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/solidity */ \"./node_modules/@ethersproject/solidity/lib.esm/index.js\");\n/* harmony import */ var _utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/normalise.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/normalise.mjs\");\n/* harmony import */ var _utils_wrapper_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wrapper.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/wrapper.mjs\");\n// src/functions/transferSubname.ts\n\n\n\nasync function transferSubname_default({ contracts, signer }, name, { contract, owner, resolverAddress, ...wrapperArgs }) {\n  const labels = name.split(\".\");\n  const label = labels.shift();\n  const labelhash = (0,_ethersproject_solidity__WEBPACK_IMPORTED_MODULE_2__.keccak256)([\"string\"], [label]);\n  const parentNodehash = (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(labels.join(\".\"));\n  switch (contract) {\n    case \"registry\": {\n      const registry = (await contracts.getRegistry()).connect(signer);\n      return registry.populateTransaction.setSubnodeOwner(\n        parentNodehash,\n        labelhash,\n        owner\n      );\n    }\n    case \"nameWrapper\": {\n      const nameWrapper = (await contracts.getNameWrapper()).connect(signer);\n      const expiry = (0,_utils_wrapper_mjs__WEBPACK_IMPORTED_MODULE_1__.expiryToBigNumber)(\n        wrapperArgs.expiry,\n        0\n      );\n      return nameWrapper.populateTransaction.setSubnodeOwner(\n        parentNodehash,\n        label,\n        owner,\n        \"0\",\n        expiry\n      );\n    }\n    default: {\n      throw new Error(`Unknown contract: ${contract}`);\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/transferSubname.mjs?");

/***/ }),

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/utils/wrapper.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/utils/wrapper.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAX_EXPIRY: () => (/* binding */ MAX_EXPIRY),\n/* harmony export */   expiryToBigNumber: () => (/* binding */ expiryToBigNumber),\n/* harmony export */   makeExpiry: () => (/* binding */ makeExpiry),\n/* harmony export */   wrappedLabelLengthCheck: () => (/* binding */ wrappedLabelLengthCheck)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/bignumber */ \"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js\");\n/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/strings */ \"./node_modules/@ethersproject/strings/lib.esm/utf8.js\");\n// src/utils/wrapper.ts\n\n\nvar MAX_EXPIRY = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(2).pow(64).sub(1);\nvar expiryToBigNumber = (expiry, defaultValue = 0) => {\n  if (!expiry)\n    return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(defaultValue);\n  if (expiry instanceof Date) {\n    return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(expiry.getTime() / 1e3);\n  }\n  if (expiry instanceof _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber) {\n    return expiry;\n  }\n  return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(expiry);\n};\nvar makeExpiry = async ({ getExpiry }, name, expiry) => {\n  if (expiry)\n    return expiryToBigNumber(expiry);\n  if (name.endsWith(\".eth\")) {\n    const expResponse = await getExpiry(name);\n    if (!expResponse?.expiry)\n      throw new Error(\"Couldn't get expiry for name, please provide one.\");\n    return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(expResponse.expiry.getTime() / 1e3);\n  }\n  return MAX_EXPIRY;\n};\nvar wrappedLabelLengthCheck = (label) => {\n  const bytes = (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.toUtf8Bytes)(label);\n  if (bytes.byteLength > 255)\n    throw new Error(\"Label can't be longer than 255 bytes\");\n};\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/utils/wrapper.mjs?");

/***/ })

}]);