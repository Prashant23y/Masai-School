
const form = document.getElementById('addItemForm');

form.addEventListener('submit' , async(e) => {
    e.preventDefault();
    const itemName = form.itemName.value;
    const quantity = form.itemQty.value;
    const price = form.itemPrice.value;
    const category = form.category.value;

    form.reset();
    form.namespaceURI.focus;
})