// Implement the following JavaScript functionality:

// When the user clicks on "Item 2", the following should happen:
// Display the text content of its parent node (<ul>) in an alert.
// Log the text content of its next and previous siblings (<li> elements) to the console.

let item2 = document.getElementById('item2');

item2.addEventListener('click' , () =>{
    alert(item2.parentNode.textContent);
    console.log(item2.previousElementSibling.textContent);
    console.log(item2.nextElementSibling.textContent);
})