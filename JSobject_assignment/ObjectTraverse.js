function propertiesOfBook(book){
    let temp = "";
    for(let key in book) {
        if(temp !== ""){
            temp += " ";
        }
        temp += key +": " + book[key];
        
    }
    return temp;
} 

let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

console.log(propertiesOfBook(book));