function Book(title, author) {  
    return {  
        title: title,  
        author: author,  
        details: function() {  
            console.log("Title: " + this.title + ", Author: " + this.author);  
        }  
    };  
}  

function createLibrary(){
    let books = [];

    return {
        addBook : function(book){
            books.push(book);
        },
        removeBook : function(title){
            books = books.filter(function(book){
                return book.title !== title;
            });
        },
        listBooks: function() {  
            books.forEach(function(book) {  
                book.details();  
            });  
        }
    }
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

