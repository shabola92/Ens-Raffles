"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["setName-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/setName.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/setName.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setName_default)\n/* harmony export */ });\n// src/functions/setName.ts\nasync function setName_default({ contracts, signer }, name, {\n  address,\n  resolver\n} = {}) {\n  const signerAddress = await signer.getAddress();\n  const reverseRegistrar = (await contracts?.getReverseRegistrar())?.connect(\n    signer\n  );\n  if (address) {\n    const publicResolver = await contracts?.getPublicResolver();\n    return reverseRegistrar.populateTransaction.setNameForAddr(\n      address,\n      signerAddress,\n      resolver || publicResolver.address,\n      name\n    );\n  }\n  return reverseRegistrar.populateTransaction.setName(name);\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/setName.mjs?");

/***/ })

}]);