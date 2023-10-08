"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["deleteSubname-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/deleteSubname.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/deleteSubname.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteSubname_default)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_solidity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/solidity */ \"./node_modules/@ethersproject/solidity/lib.esm/index.js\");\n/* harmony import */ var _utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/normalise.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/normalise.mjs\");\n// src/functions/deleteSubname.ts\n\n\nasync function deleteSubname_default({ contracts, signer }, name, { contract, ...args }) {\n  const labels = name.split(\".\");\n  if (labels.length < 3) {\n    throw new Error(`${name} is not a valid subname`);\n  }\n  switch (contract) {\n    case \"registry\": {\n      const registry = (await contracts.getRegistry()).connect(signer);\n      const label = labels.shift();\n      const labelhash = (0,_ethersproject_solidity__WEBPACK_IMPORTED_MODULE_1__.keccak256)([\"string\"], [label]);\n      const parentNodehash = (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(labels.join(\".\"));\n      return registry.populateTransaction.setSubnodeRecord(\n        parentNodehash,\n        labelhash,\n        \"0x0000000000000000000000000000000000000000\",\n        \"0x0000000000000000000000000000000000000000\",\n        0\n      );\n    }\n    case \"nameWrapper\": {\n      const nameWrapper = (await contracts.getNameWrapper()).connect(signer);\n      const { method } = args;\n      if (method === \"setRecord\") {\n        const node = (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(name);\n        return nameWrapper.populateTransaction.setRecord(\n          node,\n          \"0x0000000000000000000000000000000000000000\",\n          \"0x0000000000000000000000000000000000000000\",\n          0\n        );\n      }\n      const label = labels.shift();\n      const parentNodehash = (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(labels.join(\".\"));\n      return nameWrapper.populateTransaction.setSubnodeOwner(\n        parentNodehash,\n        label,\n        \"0x0000000000000000000000000000000000000000\",\n        0,\n        0\n      );\n    }\n    default: {\n      throw new Error(`Unknown contract: ${contract}`);\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/deleteSubname.mjs?");

/***/ })

}]);