var productItemsArray = [];
//Add to localstorage product items
function productAdd(product) {
    //product detail
    const pCode = product.getAttribute("data-product-code");
    const pDesc = product.getAttribute("data-product-description");
    const pName = product.getAttribute("data-product-name");
    const pImg = product.getAttribute("data-product-image");
    const localStorageItems = JSON.parse(localStorage.getItem("products"));
    if (localStorage.getItem("products") != null) {
        const item = localStorageItems.find(i => i.productCode === pCode);
        if (!item) {
            localStorageItems.push({ productCode: pCode, productDesc: pDesc, productName: pName, productImg: pImg });
            localStorage.setItem("products", JSON.stringify(localStorageItems));
            return;
        }
        else if (item) {
            localStorageItems.splice(localStorageItems.indexOf(item), 1);
            localStorage.setItem("products", JSON.stringify(localStorageItems));
            return;
        }
    }
    else {
        productItemsArray.push({ productCode: pCode, productDesc: pDesc, productName: pName, productImg: pImg })
        localStorage.setItem("products", JSON.stringify(productItemsArray));
        return;
    }
    return;
}

//Remove to localstorage items
function productRemove(product) {
    const pCodeR = product.getAttribute("data-product-code");
    const localStorageItemsR = JSON.parse(localStorage.getItem("products"));
    const itemR = localStorageItemsR.find(a => a.productCode === pCodeR);
    localStorageItemsR.splice(localStorageItemsR.indexOf(itemR), 1);
    localStorage.setItem("products", JSON.stringify(localStorageItemsR));
    return;
}