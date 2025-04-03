function fetchProducts() {  
    fetch("https://fakestoreapi.com/products")  
        .then(function(res) {  
            if (!res.ok) {  
                throw new Error("Failed to fetch products. Please try again later.");  
            }  
            return res.json();  
        })  
        .then(function(products) {  
            console.log("Products:", products);  

            for (let i = 0; i < products.length; i++) {  
                console.log(products[i].title , products[i].price);  
            }  

            let totalPrice = products.reduce(function(sum, product) {  
                return sum + product.price;  
            }, 0);  

            console.log(totalPrice);  
        })  
        .catch(function(error) {  
            console.error(error.message);  
        });  
}  

fetchProducts();  
