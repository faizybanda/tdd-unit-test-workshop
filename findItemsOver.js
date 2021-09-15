function findItemsOver(listItems, itemList) {
    const listA = [];
    for (var i in listItems) {
        if (listItems[i].qty>itemList) listA.push(listItems[i])
    }
    
    return listA;
    console.log(listA);
}