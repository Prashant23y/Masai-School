const userContainer = document.getElementById("userContainer");
const pagination = document.getElementById("pagination");

const userPerPage = 5;
const totalUsers = 10;
const totalPages = Math.ceil(totalUsers/userPerPage);

// fething and rendering users 

async function fetchUsers(page){
    try {
        userContainer.innerHTML = "<p>Loading...</p>";
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${userPerPage}`);
        if(!res.ok) throw new Error("Failed to fetch data");

        const users = await res.json();
        renderUsers(users);
    } catch (error) {
        userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

// for user cards
function renderUsers(users){
    userContainer.innerHTML = "";

    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add("userCard");
        div.innerHTML =
         `
            <strong>${user.name}</strong><br>
            <em>${user.email}</em><br>
            <small>${user.address.city}</small>
        `;
        userContainer.appendChild(div);
    });
}

// creating pagination buttons

function createPagination(){
    for(let i = 1; i <= totalPages; i++){
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.addEventListener('click' , () => fetchUsers(i));
        pagination.appendChild(btn);
    }
}

window.addEventListener("DOMContentLoaded" , () => {
    fetchUsers(1);
    createPagination();
});