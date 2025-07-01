const productContainer = document.getElementById("productContainer");
const sortSelect = document.getElementById("sorting");

let baseUrl = "https://jsonplaceholder.typicode.com/users";

//fetch and display user
async function fetchAndDisplayUsers(sortBy = "", order = "asc"){
    try{
        productContainer.innerHTML = "<p>Loading...</p>";

        // creating query parameters
        let url = baseUrl;
        if(sortBy){
            url += `?_sort=${sortBy}&_order=${order}`;
        }

        const res = await fetch(url);
        if(!res.ok) throw new Error("Failed to fetch user data");

        const users = await res.json();
        renderUsers(users);
    }catch(error){
        productContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;

    }
}

// render user cards
function renderUsers(users) {
  productContainer.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <strong>${user.name}</strong>
      <em>${user.email}</em><br>
      <small>${user.address.city}</small>
    `;
    productContainer.appendChild(card);
  });
}

// Handle sort change
sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;
  if (!value) return fetchAndDisplayUsers();

  const [sortBy, order] = value.split("-");
  fetchAndDisplayUsers(sortBy, order);
});

// Load users on page load
window.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayUsers();
});
