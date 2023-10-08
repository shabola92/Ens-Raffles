"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["transferName-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/transferName.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/transferName.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ transferName_default)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_solidity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/solidity */ \"./node_modules/@ethersproject/solidity/lib.esm/index.js\");\n/* harmony import */ var _utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/normalise.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/normalise.mjs\");\n// src/functions/transferName.ts\n\n\nasync function transferName_default({ contracts, signer }, name, {\n  newOwner,\n  contract,\n  reclaim\n}) {\n  const address = await signer.getAddress();\n  switch (contract) {\n    case \"registry\": {\n      const registry = (await contracts?.getRegistry()).connect(signer);\n      return registry.populateTransaction.setOwner((0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(name), newOwner);\n    }\n    case \"baseRegistrar\": {\n      const baseRegistrar = (await contracts?.getBaseRegistrar()).connect(\n        signer\n      );\n      const labels = name.split(\".\");\n      if (labels.length > 2 || labels[labels.length - 1] !== \"eth\") {\n        throw new Error(\"Invalid name for baseRegistrar\");\n      }\n      const tokenId = (0,_ethersproject_solidity__WEBPACK_IMPORTED_MODULE_1__.keccak256)([\"string\"], [labels[0]]);\n      if (reclaim) {\n        return baseRegistrar.populateTransaction.reclaim(tokenId, newOwner);\n      }\n      return baseRegistrar.populateTransaction[\"safeTransferFrom(address,address,uint256)\"](address, newOwner, tokenId);\n    }\n    case \"nameWrapper\": {\n      const nameWrapper = (await contracts?.getNameWrapper()).connect(signer);\n      return nameWrapper.populateTransaction.safeTransferFrom(\n        address,\n        newOwner,\n        (0,_utils_normalise_mjs__WEBPACK_IMPORTED_MODULE_0__.namehash)(name),\n        1,\n        \"0x\"\n      );\n    }\n    default: {\n      throw new Error(`Unknown contract: ${contract}`);\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/transferName.mjs?");

/***/ })

}]);