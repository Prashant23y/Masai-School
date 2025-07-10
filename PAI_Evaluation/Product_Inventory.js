// Problem: Product Inventory Processing Create a function that processes product inventory data using Higher Order Functions. The function should:

// Filter products with stock quantity below a certain threshold
// Map to create a new array with name, price after discount, and category
// Sort by price in ascending order Input:

// [
//     { name: "Headphones", discountedPrice: 153, category: "Electronics" },
//     { name: "Smartphone", discountedPrice: 680, category: "Electronics" },
//     { name: "Desk Chair", discountedPrice: 212.5, category: "Furniture" }
//   ]

function inventoryManagementSystem(products){
    let result = [];
    console.log(products.length)
    for(let i = 0; i < products.length; i++){
        if(products[i].stock < 10){
          return result[i] = products[i];
        }

    }

    
}



let Products =  [
    { id: 101, name: "Laptop", price: 1200, stock: 15, category: "Electronics" },
    { id: 102, name: "Desk Chair", price: 250, stock: 8, category: "Furniture" },
    { id: 103, name: "Headphones", price: 180, stock: 6, category: "Electronics" },
    { id: 104, name: "Coffee Table", price: 350, stock: 12, category: "Furniture" },
    { id: 105, name: "Smartphone", price: 800, stock: 4, category: "Electronics" }
  ];
  let stockThreshold = 10;
  let Discount =  15;

  console.log(inventoryManagementSystem(Products));