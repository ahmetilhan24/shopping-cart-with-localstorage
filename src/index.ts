import IItem from "./types/IItem";
import { STORAGE_KEY } from "./constants/storage.constants";
// Add item
const addItem = (item: IItem) => {
  const oldItems = getItems();
  if (oldItems.length) {
    //is declared?
    const isItem: boolean = oldItems.some((elem: IItem) => elem.id === item.id);
    
  }
};

// Get storage
const getItems = (): [] => {
  const items = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (typeof items === "string") {
    return JSON.parse(items);
  }
};
