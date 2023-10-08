"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["getResolver-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/getResolver.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/getResolver.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getResolver_default)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ \"./node_modules/@ethersproject/bytes/lib.esm/index.js\");\n/* harmony import */ var _utils_hexEncodedName_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hexEncodedName.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/hexEncodedName.mjs\");\n// src/functions/getResolver.ts\n\n\nvar raw = async ({ contracts }, name) => {\n  const universalResolver = await contracts?.getUniversalResolver();\n  return {\n    to: universalResolver.address,\n    data: universalResolver.interface.encodeFunctionData(\"findResolver\", [\n      (0,_utils_hexEncodedName_mjs__WEBPACK_IMPORTED_MODULE_0__.hexEncodeName)(name)\n    ])\n  };\n};\nvar decode = async ({ contracts }, data) => {\n  const universalResolver = await contracts?.getUniversalResolver();\n  const response = universalResolver.interface.decodeFunctionResult(\n    \"findResolver\",\n    data\n  );\n  if (!response || !response[0] || (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.hexStripZeros)(response[0]) === \"0x\") {\n    return;\n  }\n  return response[0];\n};\nvar getResolver_default = { raw, decode };\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/getResolver.mjs?");

/***/ }),

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/utils/hexEncodedName.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/utils/hexEncodedName.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hexDecodeName: () => (/* binding */ hexDecodeName),\n/* harmony export */   hexEncodeName: () => (/* binding */ hexEncodeName)\n/* harmony export */ });\n/* harmony import */ var dns_packet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dns-packet */ \"./node_modules/dns-packet/index.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n// src/utils/hexEncodedName.ts\n\nvar hexEncodeName = (name) => `0x${dns_packet__WEBPACK_IMPORTED_MODULE_0__.name.encode(name).toString(\"hex\")}`;\nvar hexDecodeName = (hex) => dns_packet__WEBPACK_IMPORTED_MODULE_0__.name.decode(Buffer.from(hex.slice(2), \"hex\")).toString();\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/utils/hexEncodedName.mjs?");

/***/ })

}]);