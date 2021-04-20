/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _util_validate_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/validate/index.ts */ \"./util/validate/index.ts\");\n/* harmony import */ var _util_object_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/object/index.ts */ \"./util/object/index.ts\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (util);\n\n//# sourceURL=webpack://common-tool-lib/./index.js?");

/***/ }),

/***/ "./util/object/index.ts":
/*!******************************!*\
  !*** ./util/object/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./oper.ts */ \"./util/object/oper.ts\");\r\n\n\n//# sourceURL=webpack://common-tool-lib/./util/object/index.ts?");

/***/ }),

/***/ "./util/object/oper.ts":
/*!*****************************!*\
  !*** ./util/object/oper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getGlobalThis = exports.def = exports.hasChanged = exports.remove = void 0;\r\n// 移除数组中指定值\r\nvar remove = function (arr, el) {\r\n    var i = arr.indexOf(el);\r\n    if (i > -1) {\r\n        arr.splice(i, 1);\r\n    }\r\n};\r\nexports.remove = remove;\r\n// 比较一个值是否改变，包括NaN\r\nvar hasChanged = function (value, oldValue) {\r\n    return value !== oldValue && (value === value || oldValue === oldValue);\r\n};\r\nexports.hasChanged = hasChanged;\r\nvar def = function (obj, key, value) {\r\n    Object.defineProperty(obj, key, {\r\n        configurable: true,\r\n        enumerable: false,\r\n        value: value\r\n    });\r\n};\r\nexports.def = def;\r\n// 工程中this指向\r\nvar _globalThis;\r\nvar getGlobalThis = function () {\r\n    return (_globalThis ||\r\n        (_globalThis =\r\n            typeof globalThis !== 'undefined'\r\n                ? globalThis\r\n                : typeof self !== 'undefined'\r\n                    ? self\r\n                    : typeof window !== 'undefined'\r\n                        ? window\r\n                        : typeof __webpack_require__.g !== 'undefined'\r\n                            ? __webpack_require__.g\r\n                            : {}));\r\n};\r\nexports.getGlobalThis = getGlobalThis;\r\n\n\n//# sourceURL=webpack://common-tool-lib/./util/object/oper.ts?");

/***/ }),

/***/ "./util/validate/index.ts":
/*!********************************!*\
  !*** ./util/validate/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getGlobalThis = exports.isIntegerKey = exports.toTypeString = exports.objectToString = exports.isPromise = exports.isObject = exports.isSymbol = exports.isString = exports.isFunction = exports.isDate = exports.isSet = exports.isMap = exports.isArray = exports.hasOwn = exports.remove = void 0;\r\n// 移除数组中指定值\r\nvar remove = function (arr, el) {\r\n    var i = arr.indexOf(el);\r\n    if (i > -1) {\r\n        arr.splice(i, 1);\r\n    }\r\n};\r\nexports.remove = remove;\r\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\r\nvar hasOwn = function (val, key) { return hasOwnProperty.call(val, key); };\r\nexports.hasOwn = hasOwn;\r\n// 是否是数组\r\nexports.isArray = Array.isArray;\r\nvar isMap = function (val) {\r\n    return exports.toTypeString(val) === '[object Map]';\r\n};\r\nexports.isMap = isMap;\r\nvar isSet = function (val) {\r\n    return exports.toTypeString(val) === '[object Set]';\r\n};\r\nexports.isSet = isSet;\r\nvar isDate = function (val) { return val instanceof Date; };\r\nexports.isDate = isDate;\r\n// 校验是否为函数\r\nvar isFunction = function (val) {\r\n    return typeof val === 'function';\r\n};\r\nexports.isFunction = isFunction;\r\nvar isString = function (val) { return typeof val === 'string'; };\r\nexports.isString = isString;\r\nvar isSymbol = function (val) { return typeof val === 'symbol'; };\r\nexports.isSymbol = isSymbol;\r\nvar isObject = function (val) {\r\n    return val !== null && typeof val === 'object';\r\n};\r\nexports.isObject = isObject;\r\nvar isPromise = function (val) {\r\n    return exports.isObject(val) && exports.isFunction(val.then) && exports.isFunction(val.catch);\r\n};\r\nexports.isPromise = isPromise;\r\nexports.objectToString = Object.prototype.toString;\r\nvar toTypeString = function (value) {\r\n    return exports.objectToString.call(value);\r\n};\r\nexports.toTypeString = toTypeString;\r\nvar isIntegerKey = function (key) {\r\n    return exports.isString(key) &&\r\n        key !== 'NaN' &&\r\n        key[0] !== '-' &&\r\n        '' + parseInt(key, 10) === key;\r\n};\r\nexports.isIntegerKey = isIntegerKey;\r\n// 工程中this指向\r\nvar _globalThis;\r\nvar getGlobalThis = function () {\r\n    return (_globalThis ||\r\n        (_globalThis =\r\n            typeof globalThis !== 'undefined'\r\n                ? globalThis\r\n                : typeof self !== 'undefined'\r\n                    ? self\r\n                    : typeof window !== 'undefined'\r\n                        ? window\r\n                        : typeof __webpack_require__.g !== 'undefined'\r\n                            ? __webpack_require__.g\r\n                            : {}));\r\n};\r\nexports.getGlobalThis = getGlobalThis;\r\n\n\n//# sourceURL=webpack://common-tool-lib/./util/validate/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;