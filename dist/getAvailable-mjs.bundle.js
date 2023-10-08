"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["getAvailable-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/getAvailable.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/getAvailable.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getAvailable_default)\n/* harmony export */ });\n/* harmony import */ var _utils_labels_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/labels.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/labels.mjs\");\n// src/functions/getAvailable.ts\n\nvar raw = async ({ contracts }, name) => {\n  const baseRegistrar = await contracts?.getBaseRegistrar();\n  const labels = name.split(\".\");\n  if (labels.length !== 2 || labels[1] !== \"eth\") {\n    throw new Error(\"Currently only .eth names can be checked for availability\");\n  }\n  return {\n    to: baseRegistrar.address,\n    data: baseRegistrar.interface.encodeFunctionData(\"available\", [\n      (0,_utils_labels_mjs__WEBPACK_IMPORTED_MODULE_0__.labelhash)(labels[0])\n    ])\n  };\n};\nvar decode = async ({ contracts }, data) => {\n  if (data === null)\n    return;\n  const baseRegistrar = await contracts?.getBaseRegistrar();\n  try {\n    const result = baseRegistrar.interface.decodeFunctionResult(\n      \"available\",\n      data\n    );\n    return result[\"0\"];\n  } catch {\n    return;\n  }\n};\nvar getAvailable_default = {\n  raw,\n  decode\n};\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/getAvailable.mjs?");

/***/ })

}]);