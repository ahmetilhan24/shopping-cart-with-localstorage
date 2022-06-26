import IItem from "./types/IItem";
import { STORAGE_KEY } from "./constants/storage.constants";

const itemsData = [];

// Add item
const addItem = (item: IItem) => {
  const oldItems = getStorage();
  if (oldItems.length) {
    //is declared?
    const isItem: boolean = oldItems.some((elem: IItem) => elem.id === item.id);
    if (isItem) {
      // remove item
    } else {
    }
  }
};

// Get storage
const getStorage = () => {
  const items: string | null = localStorage.getItem(STORAGE_KEY);
  if (typeof items === "string") {
    return JSON.parse(items);
  }
};

// Set item -> to localcstorage
const setStorage = (items: IItem[] | []): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

//////////////// FOR DEMO
const addBtn = document.querySelectorAll(".add-to-cart");
if (addBtn instanceof HTMLElement) {
  addBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e);
    });
  });
}
console.log(addBtn, "asljdklasj");
