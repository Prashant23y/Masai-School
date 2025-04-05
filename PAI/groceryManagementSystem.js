let items = [];

items.push("Apples", "Bananas", "Bread", "Milk");

//console.log(items);
 let r = items.pop("Milk");

 function result(){
    return {
        totalItems: items.length,
        items: items,
        removedItem: r
    }
 }

 console.log(result());