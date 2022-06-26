import IItem from "./types/IItem";
import { STORAGE_KEY } from "./constants/storage.constants";

let itemsData: IItem[] = [];

// Add item
const addItem = (item: IItem) => {
  //is item
  if (!checkIsItem(item)) {
    itemsData.push(item);
  } else {
    const index = itemsData.findIndex((elem) => elem.id === item.id);
    itemsData.splice(index, 1);
  }
  setStorage();
};

// check is item

const checkIsItem = (item: IItem): boolean => {
  const isItem: boolean = itemsData.some((elem: IItem) => elem.id === item.id);
  return isItem;
};

// Get storage
const getStorage = () => {
  const items: string | null = localStorage.getItem(STORAGE_KEY);
  if (typeof items === "string") {
    itemsData = JSON.parse(items);
  }
};

// Set item -> to localstorage
const setStorage = (): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsData));
};

console.log("aşlsdşlask");
getStorage();
//////////////// FOR DEMO
const addBtn = document.querySelectorAll(".add-to-cart");
addBtn.forEach((item) => {
  item.addEventListener("click", (e: PointerEvent) => {
    const target = e.currentTarget as HTMLElement;
    const dataId: string = target.getAttribute("data-id");
    if (dataId) {
      addItem({ id: dataId });
    }
  });
});
