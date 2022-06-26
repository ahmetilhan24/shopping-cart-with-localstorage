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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/storage.constants */ \"./src/constants/storage.constants.ts\");\n\nvar itemsData = [];\n// Add item\nvar addItem = function (item) {\n    //is item\n    if (!checkIsItem(item)) {\n        itemsData.push(item);\n    }\n    else {\n        var index = itemsData.findIndex(function (elem) { return elem.id === item.id; });\n        itemsData.splice(index, 1);\n    }\n    setStorage();\n};\n// check is item\nvar checkIsItem = function (item) {\n    var isItem = itemsData.some(function (elem) { return elem.id === item.id; });\n    return isItem;\n};\n// Get storage\nvar getStorage = function () {\n    var items = localStorage.getItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY);\n    if (typeof items === \"string\") {\n        itemsData = JSON.parse(items);\n    }\n};\n// Set item -> to localstorage\nvar setStorage = function () {\n    localStorage.setItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(itemsData));\n};\nconsole.log(\"aşlsdşlask\");\ngetStorage();\n//////////////// FOR DEMO\nvar addBtn = document.querySelectorAll(\".add-to-cart\");\naddBtn.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n        var target = e.currentTarget;\n        var dataId = target.getAttribute(\"data-id\");\n        if (dataId) {\n            addItem({ id: dataId });\n        }\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCw2QkFBNkI7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZCQUE2QjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxRUFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGluZy1jYXJ0LXdpdGgtbG9jYWwtc3RvcmFnZS8uL3NyYy9pbmRleC50cz9lOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNUT1JBR0VfS0VZIH0gZnJvbSBcIi4vY29uc3RhbnRzL3N0b3JhZ2UuY29uc3RhbnRzXCI7XG52YXIgaXRlbXNEYXRhID0gW107XG4vLyBBZGQgaXRlbVxudmFyIGFkZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIC8vaXMgaXRlbVxuICAgIGlmICghY2hlY2tJc0l0ZW0oaXRlbSkpIHtcbiAgICAgICAgaXRlbXNEYXRhLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgaW5kZXggPSBpdGVtc0RhdGEuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLmlkID09PSBpdGVtLmlkOyB9KTtcbiAgICAgICAgaXRlbXNEYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHNldFN0b3JhZ2UoKTtcbn07XG4vLyBjaGVjayBpcyBpdGVtXG52YXIgY2hlY2tJc0l0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpc0l0ZW0gPSBpdGVtc0RhdGEuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5pZCA9PT0gaXRlbS5pZDsgfSk7XG4gICAgcmV0dXJuIGlzSXRlbTtcbn07XG4vLyBHZXQgc3RvcmFnZVxudmFyIGdldFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xuICAgIGlmICh0eXBlb2YgaXRlbXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaXRlbXNEYXRhID0gSlNPTi5wYXJzZShpdGVtcyk7XG4gICAgfVxufTtcbi8vIFNldCBpdGVtIC0+IHRvIGxvY2Fsc3RvcmFnZVxudmFyIHNldFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGl0ZW1zRGF0YSkpO1xufTtcbmNvbnNvbGUubG9nKFwiYcWfbHNkxZ9sYXNrXCIpO1xuZ2V0U3RvcmFnZSgpO1xuLy8vLy8vLy8vLy8vLy8vLyBGT1IgREVNT1xudmFyIGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXRvLWNhcnRcIik7XG5hZGRCdG4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHZhciBkYXRhSWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgaWYgKGRhdGFJZCkge1xuICAgICAgICAgICAgYWRkSXRlbSh7IGlkOiBkYXRhSWQgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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