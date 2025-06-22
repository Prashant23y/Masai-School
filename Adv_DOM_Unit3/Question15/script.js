//Accesing required elements
const inputTask = document.getElementById("inpTask");
const addTaskBtn = document.getElementById("addTask");
const sortbtn = document.getElementById("sortBtn");
const taskList = document.getElementById("taskList");
const filterTask = document.getElementById("filterTask");

//for counters

const total = document.getElementById("total");
const completed = document.getElementById("completed");
const incomplete = document.getElementById("incomplete");

let tasks = []; // storing the tasks in array of objects
let currentFilter = "all";

// Adding task

addTaskBtn.addEventListener("click", () => {
  const text = inputTask.value.trim();
  if (text === "") {
    alert("Task can't be empty!");
    return;
  }

  // add task to the array

  tasks.push({ text, completed: false });
  inputTask.value = ""; // clearing input
  renderTasks(); // for updating the page with tasks and button
});

// Sorting the task alphabetically

sortbtn.addEventListener("click", () => {
  tasks.sort((a, b) => a.text.localeCompare(b.text));
  renderTasks();
});

// filtering the task using HOF

filterTask.addEventListener("change", () => {
  currentFilter = filterTask.value;
  renderTasks();
});

// event delegation for toggle and delete
taskList.addEventListener("click", (e) => {
  const index = e.target.closest("li")?.dataset.index;
  if (index === undefined) return;

  if (e.target.classList.contains("delete")) {
    // Remove task from array
    tasks.splice(index, 1);
  } else if (e.target.classList.contains("toggle")) {
    // Toggle completed state
    tasks[index].completed = !tasks[index].completed;
  }

  renderTasks();
});

// rendering the task based on current filter
function renderTasks() {
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "incomplete") return !task.completed;
    return true;
  });

  taskList.innerHTML = ""; // clearing the list

  filteredTasks.map((task, index) => {
    const li = document.createElement("li");
    li.dataset.index = index; 
    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) span.classList.add("completed");

    // Create buttons
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "✅";
    toggleBtn.classList.add("toggle");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");

    // Append to list
    li.append(span, toggleBtn, deleteBtn);
    taskList.appendChild(li);
  });

  updateCounters();
}

// updating the task counters

function updateCounters() {
  total.textContent = tasks.length;
  completed.textContent = tasks.filter(task => task.completed).length;
  incomplete.textContent = tasks.filter(task => !task.completed).length;
}
