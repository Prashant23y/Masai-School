const fetchBtn = document.getElementById("fetchBtn");
const todoBox = document.getElementById("allTodo's");
const paginationDiv = document.getElementById("pagination");

let url = "https://jsonplaceholder.typicode.com/todos";
const perPage = 10;
const totalPages = 20;

let todosList = [];

// fetch all todos

fetchBtn.addEventListener("click", async () => {
  let res = await fetch(url);
  todosList = await res.json();
  renderTodos(1); // onload it will show first page
  renderPagination();
});

// Render todos by page
function renderTodos(page) {
  todoBox.innerHTML = ""; // clearing previous todos
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedTodos = todosList.slice(start, end);

  paginatedTodos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todoItem";
    div.innerHTML = `${todo.title} <input type="checkbox" ${
      todo.completed ? "checked" : ""
    } />`;
    todoBox.appendChild(div);
  });
}

// Render pagination button

function renderPagination() {
  paginationDiv.innerHTML = "";
  for(let i = 1; i <= totalPages; i++){
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => renderTodos(i));
    paginationDiv.appendChild(btn);
  }
}
