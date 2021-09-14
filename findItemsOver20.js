function findItemsOver20(listItems) {
    const listA = [];
   for (var i=0; i<listItems.length; i++) {
       if (listItems[i].qty>20) listA.push(listItems[i])
   }
   console.log(listA);
   return listA;
}

function findItemsOver(listItems,itemList) {
    const listB = [];
    for (var i in listItems) {
        if (listItems[i].qty>itemList) listB.push(listItems[i])
    }
    console.log(listB);
    return listB;
}