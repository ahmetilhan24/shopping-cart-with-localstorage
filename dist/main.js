/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/storage.constants.ts":
/*!********************************************!*\
  !*** ./src/constants/storage.constants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STORAGE_KEY\": () => (/* binding */ STORAGE_KEY)\n/* harmony export */ });\nvar STORAGE_KEY = \"items\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL3N0b3JhZ2UuY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpbmctY2FydC13aXRoLWxvY2FsLXN0b3JhZ2UvLi9zcmMvY29uc3RhbnRzL3N0b3JhZ2UuY29uc3RhbnRzLnRzPzhjNmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBTVE9SQUdFX0tFWSA9IFwiaXRlbXNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/storage.constants.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/storage.constants */ \"./src/constants/storage.constants.ts\");\n\nvar itemsData = [];\n// Add item\nvar addItem = function (item) {\n    var oldItems = getStorage();\n    if (oldItems.length) {\n        //is declared?\n        var isItem = oldItems.some(function (elem) { return elem.id === item.id; });\n        if (isItem) {\n            // remove item\n        }\n        else {\n        }\n    }\n};\n// check is item\nvar checkIsItem = function () { };\n// Get storage\nvar getStorage = function () {\n    var items = localStorage.getItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY);\n    if (typeof items === \"string\") {\n        return JSON.parse(items);\n    }\n};\n// Set item -> to localstorage\nvar setStorage = function (items) {\n    localStorage.setItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(items));\n};\n//////////////// FOR DEMO\nvar addBtn = document.querySelectorAll(\".add-to-cart\");\naddBtn.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n        var target = e.currentTarget;\n        var dataId = target.getAttribute(\"data-id\");\n        if (dataId) {\n        }\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDZCQUE2QjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFFQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpbmctY2FydC13aXRoLWxvY2FsLXN0b3JhZ2UvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVE9SQUdFX0tFWSB9IGZyb20gXCIuL2NvbnN0YW50cy9zdG9yYWdlLmNvbnN0YW50c1wiO1xudmFyIGl0ZW1zRGF0YSA9IFtdO1xuLy8gQWRkIGl0ZW1cbnZhciBhZGRJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgb2xkSXRlbXMgPSBnZXRTdG9yYWdlKCk7XG4gICAgaWYgKG9sZEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAvL2lzIGRlY2xhcmVkP1xuICAgICAgICB2YXIgaXNJdGVtID0gb2xkSXRlbXMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5pZCA9PT0gaXRlbS5pZDsgfSk7XG4gICAgICAgIGlmIChpc0l0ZW0pIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gY2hlY2sgaXMgaXRlbVxudmFyIGNoZWNrSXNJdGVtID0gZnVuY3Rpb24gKCkgeyB9O1xuLy8gR2V0IHN0b3JhZ2VcbnZhciBnZXRTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcbiAgICBpZiAodHlwZW9mIGl0ZW1zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGl0ZW1zKTtcbiAgICB9XG59O1xuLy8gU2V0IGl0ZW0gLT4gdG8gbG9jYWxzdG9yYWdlXG52YXIgc2V0U3RvcmFnZSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8gRk9SIERFTU9cbnZhciBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC10by1jYXJ0XCIpO1xuYWRkQnRuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICB2YXIgZGF0YUlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgIGlmIChkYXRhSWQpIHtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;