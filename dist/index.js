"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage_constants_1 = require("./constants/storage.constants");
var itemsData = [];
var addItem = function (item) {
    var oldItems = getStorage();
    if (oldItems.length) {
        var isItem = oldItems.some(function (elem) { return elem.id === item.id; });
        if (isItem) {
        }
        else {
        }
    }
};
var getStorage = function () {
    var items = localStorage.getItem(storage_constants_1.STORAGE_KEY);
    if (typeof items === "string") {
        return JSON.parse(items);
    }
};
var setStorage = function (items) {
    localStorage.setItem(storage_constants_1.STORAGE_KEY, JSON.stringify(items));
};
var addBtn = document.querySelectorAll(".add-to-cart");
if (addBtn instanceof HTMLElement) {
    addBtn.forEach(function (item) {
        item.addEventListener("click", function (e) {
            console.log(e);
        });
    });
}
console.log(addBtn, "asljdklasj");
