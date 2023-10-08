"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["unwrapName-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/unwrapName.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/unwrapName.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ unwrapName_default)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_solidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/solidity */ \"./node_modules/@ethersproject/solidity/lib.esm/index.js\");\n/* harmony import */ var _utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/normalise.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/normalise.mjs\");\n/* harmony import */ var _utils_validation_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/validation.mjs\");\n// src/functions/unwrapName.ts\n\n\n\nasync function unwrapName_default({ contracts, signer }, name, {\n  newController,\n  newRegistrant\n}) {\n  const labels = name.split(\".\");\n  const labelhash = (0,_ethersproject_solidity__WEBPACK_IMPORTED_MODULE_2__.keccak256)([\"string\"], [labels[0]]);\n  const parentNodehash = (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(labels.slice(1).join(\".\"));\n  const nameWrapper = (await contracts.getNameWrapper()).connect(signer);\n  if ((0,_utils_validation_mjs__WEBPACK_IMPORTED_MODULE_1__.checkIsDotEth)(labels)) {\n    if (!newRegistrant) {\n      throw new Error(\"newRegistrant must be specified for .eth names\");\n    }\n    return nameWrapper.populateTransaction.unwrapETH2LD(\n      labelhash,\n      newRegistrant,\n      newController\n    );\n  }\n  if (newRegistrant) {\n    throw new Error(\"newRegistrant can only be specified for .eth names\");\n  }\n  return nameWrapper.populateTransaction.unwrap(\n    parentNodehash,\n    labelhash,\n    newController\n  );\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/unwrapName.mjs?");

/***/ }),

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EMPTY_ADDRESS: () => (/* binding */ EMPTY_ADDRESS),\n/* harmony export */   MAX_DATE_INT: () => (/* binding */ MAX_DATE_INT),\n/* harmony export */   MAX_INT_64: () => (/* binding */ MAX_INT_64),\n/* harmony export */   MINIMUM_DOT_ETH_CHARS: () => (/* binding */ MINIMUM_DOT_ETH_CHARS)\n/* harmony export */ });\n// src/utils/consts.ts\nvar EMPTY_ADDRESS = \"0x0000000000000000000000000000000000000000\";\nvar MAX_INT_64 = BigInt(\"18446744073709551615\");\nvar MAX_DATE_INT = 864e13;\nvar MINIMUM_DOT_ETH_CHARS = 3;\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs?");

/***/ }),

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/utils/validation.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/utils/validation.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIsDotEth: () => (/* binding */ checkIsDotEth),\n/* harmony export */   parseInput: () => (/* binding */ parseInput),\n/* harmony export */   validateName: () => (/* binding */ validateName)\n/* harmony export */ });\n/* harmony import */ var _consts_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/consts.mjs\");\n/* harmony import */ var _labels_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./labels.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/labels.mjs\");\n/* harmony import */ var _normalise_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalise.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/normalise.mjs\");\n// src/utils/validation.ts\n\n\n\nvar validateName = (name) => {\n  const nameArray = name.split(\".\");\n  const normalisedArray = nameArray.map((label) => {\n    if (label.length === 0)\n      throw new Error(\"Name cannot have empty labels\");\n    if (label === \"[root]\") {\n      if (name !== label)\n        throw new Error(\"Root label must be the only label\");\n      return label;\n    }\n    return (0,_labels_mjs__WEBPACK_IMPORTED_MODULE_1__.isEncodedLabelhash)(label) ? (0,_labels_mjs__WEBPACK_IMPORTED_MODULE_1__.checkLabel)(label) || label : (0,_normalise_mjs__WEBPACK_IMPORTED_MODULE_2__.normalise)(label);\n  });\n  const normalisedName = normalisedArray.join(\".\");\n  (0,_labels_mjs__WEBPACK_IMPORTED_MODULE_1__.saveName)(normalisedName);\n  return normalisedName;\n};\nvar parseInput = (input) => {\n  let nameReference = input;\n  let isValid = false;\n  try {\n    nameReference = validateName(input);\n    isValid = true;\n  } catch {\n  }\n  const normalisedName = isValid ? nameReference : void 0;\n  const labels = nameReference.split(\".\");\n  const tld = labels[labels.length - 1];\n  const isETH = tld === \"eth\";\n  const labelDataArray = (0,_normalise_mjs__WEBPACK_IMPORTED_MODULE_2__.split)(nameReference);\n  const isShort = (labelDataArray[0].output?.length || 0) < _consts_mjs__WEBPACK_IMPORTED_MODULE_0__.MINIMUM_DOT_ETH_CHARS;\n  if (labels.length === 1) {\n    return {\n      type: \"label\",\n      normalised: normalisedName,\n      isShort,\n      isValid,\n      is2LD: false,\n      isETH,\n      labelDataArray\n    };\n  }\n  const is2LD = labels.length === 2;\n  return {\n    type: \"name\",\n    normalised: normalisedName,\n    isShort: isETH && is2LD ? isShort : false,\n    isValid,\n    is2LD,\n    isETH,\n    labelDataArray\n  };\n};\nvar checkIsDotEth = (labels) => labels.length === 2 && labels[1] === \"eth\";\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/utils/validation.mjs?");

/***/ })

}]);