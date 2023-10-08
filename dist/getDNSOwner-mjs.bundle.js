"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp"] = self["webpackChunkdapp"] || []).push([["getDNSOwner-mjs"],{

/***/ "./node_modules/@ensdomains/ensjs/dist/esm/functions/getDNSOwner.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@ensdomains/ensjs/dist/esm/functions/getDNSOwner.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDNSOwner_default),\n/* harmony export */   dnsQuery: () => (/* binding */ dnsQuery),\n/* harmony export */   encodeURLParams: () => (/* binding */ encodeURLParams),\n/* harmony export */   getDNS: () => (/* binding */ getDNS)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/web */ \"./node_modules/@ethersproject/web/lib.esm/index.js\");\n/* harmony import */ var dns_packet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dns-packet */ \"./node_modules/dns-packet/index.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n// src/functions/getDNSOwner.ts\n\n\nfunction encodeURLParams(p) {\n  return Object.entries(p).map((kv) => kv.map(encodeURIComponent).join(\"=\")).join(\"&\");\n}\nvar getDNS = async (q) => {\n  const url = `https://cloudflare-dns.com/dns-query?${encodeURLParams({\n    ct: \"application/dns-udpwireformat\",\n    dns: dns_packet__WEBPACK_IMPORTED_MODULE_0__.encode(q)?.toString(\"base64\"),\n    ts: Date.now().toString()\n  })}`;\n  const response = await (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_1__._fetchData)(url, void 0);\n  const arrayBuffer = response.buffer.slice(\n    response.byteOffset,\n    response.byteLength + response.byteOffset\n  );\n  const fromArrayBuffer = Buffer.from(arrayBuffer);\n  return dns_packet__WEBPACK_IMPORTED_MODULE_0__.decode(fromArrayBuffer);\n};\nvar dnsQuery = async (qtype, qname) => {\n  const query = {\n    type: \"query\",\n    id: 1,\n    flags: dns_packet__WEBPACK_IMPORTED_MODULE_0__.RECURSION_DESIRED,\n    questions: [\n      {\n        type: qtype,\n        class: \"IN\",\n        name: qname\n      }\n    ],\n    additionals: [\n      {\n        type: \"OPT\",\n        class: \"IN\",\n        name: \".\",\n        udpPayloadSize: 4096,\n        flags: dns_packet__WEBPACK_IMPORTED_MODULE_0__.DNSSEC_OK\n      }\n    ],\n    answers: []\n  };\n  const response = await getDNS(query);\n  if (response.rcode !== \"NOERROR\") {\n    throw new Error(`DNS query failed: ${response.rcode}`);\n  }\n  return response;\n};\nasync function getDNSOwner_default(_, dnsName) {\n  const result = await dnsQuery(\"TXT\", `_ens.${dnsName}`);\n  const address = result?.answers?.[0]?.data?.[0]?.toString()?.split(\"=\")?.[1];\n  return address;\n}\n\n\n\n//# sourceURL=webpack://dapp/./node_modules/@ensdomains/ensjs/dist/esm/functions/getDNSOwner.mjs?");

/***/ })

}]);