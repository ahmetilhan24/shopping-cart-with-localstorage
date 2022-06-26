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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/storage.constants */ \"./src/constants/storage.constants.ts\");\n\nvar itemsData = [];\n// Add item\nvar addItem = function (item) {\n    //is item\n    if (!checkIsItem(item)) {\n        itemsData.push(item);\n    }\n    else {\n        removeItem(item);\n    }\n    setStorage();\n};\n//remove item\nvar removeItem = function (item) {\n    var index = itemsData.findIndex(function (elem) { return elem.id === item.id; });\n    itemsData.splice(index, 1);\n};\n// check is item\nvar checkIsItem = function (item) {\n    var isItem = itemsData.some(function (elem) { return elem.id === item.id; });\n    return isItem;\n};\n// Get storage\nvar getStorage = function () {\n    var items = localStorage.getItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY);\n    if (typeof items === \"string\") {\n        itemsData = JSON.parse(items);\n    }\n};\n// Set item -> to localstorage\nvar setStorage = function () {\n    localStorage.setItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(itemsData));\n};\n//!FOR DEMO\n(function () {\n    getStorage();\n    var addBtn = document.querySelectorAll(\".add-to-cart\");\n    addBtn.forEach(function (item) {\n        item.addEventListener(\"click\", function (e) {\n            var target = e.currentTarget;\n            var dataId = target.getAttribute(\"data-id\");\n            if (dataId) {\n                addItem({ id: dataId });\n            }\n        });\n    });\n})();\n//!FOR DEMO\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw2QkFBNkI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNkJBQTZCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFFQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waW5nLWNhcnQtd2l0aC1sb2NhbC1zdG9yYWdlLy4vc3JjL2luZGV4LnRzP2U5NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RPUkFHRV9LRVkgfSBmcm9tIFwiLi9jb25zdGFudHMvc3RvcmFnZS5jb25zdGFudHNcIjtcbnZhciBpdGVtc0RhdGEgPSBbXTtcbi8vIEFkZCBpdGVtXG52YXIgYWRkSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgLy9pcyBpdGVtXG4gICAgaWYgKCFjaGVja0lzSXRlbShpdGVtKSkge1xuICAgICAgICBpdGVtc0RhdGEucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZUl0ZW0oaXRlbSk7XG4gICAgfVxuICAgIHNldFN0b3JhZ2UoKTtcbn07XG4vL3JlbW92ZSBpdGVtXG52YXIgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGluZGV4ID0gaXRlbXNEYXRhLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5pZCA9PT0gaXRlbS5pZDsgfSk7XG4gICAgaXRlbXNEYXRhLnNwbGljZShpbmRleCwgMSk7XG59O1xuLy8gY2hlY2sgaXMgaXRlbVxudmFyIGNoZWNrSXNJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaXNJdGVtID0gaXRlbXNEYXRhLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uaWQgPT09IGl0ZW0uaWQ7IH0pO1xuICAgIHJldHVybiBpc0l0ZW07XG59O1xuLy8gR2V0IHN0b3JhZ2VcbnZhciBnZXRTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcbiAgICBpZiAodHlwZW9mIGl0ZW1zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGl0ZW1zRGF0YSA9IEpTT04ucGFyc2UoaXRlbXMpO1xuICAgIH1cbn07XG4vLyBTZXQgaXRlbSAtPiB0byBsb2NhbHN0b3JhZ2VcbnZhciBzZXRTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShpdGVtc0RhdGEpKTtcbn07XG4vLyFGT1IgREVNT1xuKGZ1bmN0aW9uICgpIHtcbiAgICBnZXRTdG9yYWdlKCk7XG4gICAgdmFyIGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXRvLWNhcnRcIik7XG4gICAgYWRkQnRuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgZGF0YUlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgICAgICBpZiAoZGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgYWRkSXRlbSh7IGlkOiBkYXRhSWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSkoKTtcbi8vIUZPUiBERU1PXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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