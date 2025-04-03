function createInventoryItem(name, category, price){
    return {
        name : name,
        category : category,
        price : price,
        describeItem : function(){
            console.log("Item : " + name + ", Category : "+ category + ", Price : " + price);
        }
    }
}

function addItemDiscount(inventoryItem, discountPercent) {  
    let discountedPrice = inventoryItem.price - (inventoryItem.price * discountPercent / 100);  

    return {  
        name: inventoryItem.name,  
        category: inventoryItem.category,  
        price: inventoryItem.price,  
        discountedPrice: discountedPrice,  
        applyDiscount: function() {  
            console.log("Discounted Price for " + this.name + ": " + this.discountedPrice);  
        }  
    }
}  

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350

