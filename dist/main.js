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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/storage.constants */ \"./src/constants/storage.constants.ts\");\n\nvar itemsData = [];\n// Add item\nvar addItem = function (item) {\n    //is item\n    if (!checkIsItem(item)) {\n        itemsData.push(item);\n    }\n    else {\n        removeItem(item);\n    }\n    setStorage();\n};\n//remove item\nvar removeItem = function (item) {\n    var index = itemsData.findIndex(function (elem) { return elem.id === item.id; });\n    itemsData.splice(index, 1);\n};\n// check is item\nvar checkIsItem = function (item) {\n    var isItem = itemsData.some(function (elem) { return elem.id === item.id; });\n    return isItem;\n};\n// Get storage\nvar getStorage = function () {\n    var items = localStorage.getItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY);\n    if (typeof items === \"string\") {\n        itemsData = JSON.parse(items);\n    }\n};\n// Set item -> to localstorage\nvar setStorage = function () {\n    localStorage.setItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(itemsData));\n};\n(function () {\n    getStorage();\n    //////////////// FOR DEMO\n    var addBtn = document.querySelectorAll(\".add-to-cart\");\n    addBtn.forEach(function (item) {\n        item.addEventListener(\"click\", function (e) {\n            var target = e.currentTarget;\n            var dataId = target.getAttribute(\"data-id\");\n            if (dataId) {\n                addItem({ id: dataId });\n            }\n        });\n    });\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw2QkFBNkI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNkJBQTZCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFFQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxRUFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGluZy1jYXJ0LXdpdGgtbG9jYWwtc3RvcmFnZS8uL3NyYy9pbmRleC50cz9lOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNUT1JBR0VfS0VZIH0gZnJvbSBcIi4vY29uc3RhbnRzL3N0b3JhZ2UuY29uc3RhbnRzXCI7XG52YXIgaXRlbXNEYXRhID0gW107XG4vLyBBZGQgaXRlbVxudmFyIGFkZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIC8vaXMgaXRlbVxuICAgIGlmICghY2hlY2tJc0l0ZW0oaXRlbSkpIHtcbiAgICAgICAgaXRlbXNEYXRhLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVJdGVtKGl0ZW0pO1xuICAgIH1cbiAgICBzZXRTdG9yYWdlKCk7XG59O1xuLy9yZW1vdmUgaXRlbVxudmFyIHJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpbmRleCA9IGl0ZW1zRGF0YS5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uaWQgPT09IGl0ZW0uaWQ7IH0pO1xuICAgIGl0ZW1zRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xufTtcbi8vIGNoZWNrIGlzIGl0ZW1cbnZhciBjaGVja0lzSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGlzSXRlbSA9IGl0ZW1zRGF0YS5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLmlkID09PSBpdGVtLmlkOyB9KTtcbiAgICByZXR1cm4gaXNJdGVtO1xufTtcbi8vIEdldCBzdG9yYWdlXG52YXIgZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XG4gICAgaWYgKHR5cGVvZiBpdGVtcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpdGVtc0RhdGEgPSBKU09OLnBhcnNlKGl0ZW1zKTtcbiAgICB9XG59O1xuLy8gU2V0IGl0ZW0gLT4gdG8gbG9jYWxzdG9yYWdlXG52YXIgc2V0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoaXRlbXNEYXRhKSk7XG59O1xuKGZ1bmN0aW9uICgpIHtcbiAgICBnZXRTdG9yYWdlKCk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLyBGT1IgREVNT1xuICAgIHZhciBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC10by1jYXJ0XCIpO1xuICAgIGFkZEJ0bi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGRhdGFJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgICAgICAgICAgaWYgKGRhdGFJZCkge1xuICAgICAgICAgICAgICAgIGFkZEl0ZW0oeyBpZDogZGF0YUlkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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