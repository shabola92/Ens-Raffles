"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["batch-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/batch.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/batch.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ batch_default)\n/* harmony export */ });\n/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/errors.mjs */ \"./node_modules/@ensdomains/ensjs/dist/esm/utils/errors.mjs\");\n// src/functions/batch.ts\n\nvar raw = async ({ multicallWrapper }, ...items) => {\n  const rawDataArr = await Promise.all(\n    items.map(({ args, raw: rawRef }, i) => {\n      if (!rawRef) {\n        throw new Error(`Function ${i} is not batchable`);\n      }\n      return rawRef(...args);\n    })\n  );\n  const response = await multicallWrapper.raw(rawDataArr);\n  return { ...response, passthrough: rawDataArr };\n};\nvar decode = async ({ multicallWrapper }, data, passthrough, ...items) => {\n  const response = await multicallWrapper.decode(data, passthrough);\n  if (!response)\n    return;\n  const results = await Promise.allSettled(\n    response.map((ret, i) => {\n      if (passthrough[i].passthrough) {\n        return items[i].decode(\n          ret.returnData,\n          passthrough[i].passthrough,\n          ...items[i].args\n        );\n      }\n      return items[i].decode(ret.returnData, ...items[i].args);\n    })\n  );\n  const reducedResults = results.reduce(\n    (acc, result) => {\n      if (result.status === \"fulfilled\") {\n        return { ...acc, data: [...acc.data, result.value] };\n      }\n      const error = result.reason instanceof _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.ENSJSError ? result.reason : void 0;\n      const itemData = error?.data;\n      const itemErrors = error?.errors || [{ message: \"unknown_error\" }];\n      return {\n        errors: [...acc.errors, ...itemErrors],\n        data: [...acc.data, itemData]\n      };\n    },\n    { data: [], errors: [] }\n  );\n  if (reducedResults.errors.length)\n    throw new _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.ENSJSError({\n      data: reducedResults.data,\n      errors: reducedResults.errors\n    });\n  return reducedResults.data;\n};\nvar batch_default = {\n  raw,\n  decode\n};\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/batch.mjs?");

/***/ })

}]);