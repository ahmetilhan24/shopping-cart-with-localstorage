//Add to localstorage product items
function productAdd(product) {
    //product detail
    var pCode = product.getAttribute("data-product-code");
    var pDesc = product.getAttribute("data-product-description");
    var pName = product.getAttribute("data-product-name");
    var pImg = product.getAttribute("data-product-image");
    var localStorageItems = JSON.parse(localStorage.getItem("products"));
    if (localStorage.getItem("products") != null) {
        var item = localStorageItems.find(i => i.productCode === pCode);
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
    var itemR = localStorageItemsR.find(a => a.productCode === pCodeR);
    localStorageItemsR.splice(localStorageItemsR.indexOf(itemR), 1);
    localStorage.setItem("products", JSON.stringify(localStorageItemsR));
}