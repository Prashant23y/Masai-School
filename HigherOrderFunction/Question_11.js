function processProduct(products){
    const productNames = products.map(product => products.name);

    products.forEach(product => {
        const message = product.price > 50 
        ?`${product.name} is above $50` 
        : `${product.name} is below $50`;
        
        console.log(message);
    });

    return productNames;
}

let products = [
    { name: "Laptop", price: 1000 }, 
    { name: "Mouse", price: 20 }
];

processProduct(products)