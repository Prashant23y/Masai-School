function countCategories(categories){
    let count = categories.reduce((acc, category) => {
        if(acc[category]){
            acc[category] = acc[category] + 1;
        } else{
            acc[category] = 1;
        }
        return acc;
    }, {})

    return count;
}

let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(categories));