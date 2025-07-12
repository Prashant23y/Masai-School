import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5SknziQmtUWA5zWS3UfFvPSAx74G_KJo",
  authDomain: "book-tracker-1ca97.firebaseapp.com",
  projectId: "book-tracker-1ca97",
  storageBucket: "book-tracker-1ca97.firebasestorage.app",
  messagingSenderId: "798941404506",
  appId: "1:798941404506:web:618688fb6dca057314e763"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const URL = "https://jsonplaceholder.typicode.com/posts";
let userId = null;

onAuthStateChanged(auth, (user) => {
  if(!user){
    window.location.href = "index.html";
  }else{
    userId = 1; 
    loadBooks();
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => (window.location.href = "index.html"));
});

document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  fetch((URL), {
    method: "POST",
    body: JSON.stringify({ title, body: author, userId, read: false }),
    headers: { "Content-type": "application/json" }
  })
    .then((res) => res.json())
    .then((data) => {
      const bookList = document.getElementById("bookList");
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        <button onclick="markAsRead(${data.id})">📖 Read</button>
        <button onclick="deleteBook(${data.id})">❌ Remove</button>
      `;
      bookList.prepend(div);
      document.getElementById("bookForm").reset();
      showMessage("Book added successfully!");
    })
    .catch((err) => console.error("POST failed:", err));
});

function loadBooks() {
  fetch(`${URL}?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => {
      const bookList = document.getElementById("bookList");
      bookList.innerHTML = "";

      if (!Array.isArray(data) || data.length === 0) {
        bookList.innerHTML = "<p>No books found.</p>";
        return;
      }

      data.forEach((book) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${book.title}</h3>
          <p>${book.body}</p>
          <button onclick="markAsRead(${book.id})">📖 Read</button>
          <button onclick="deleteBook(${book.id})">❌ Remove</button>
        `;
        bookList.appendChild(div);
      });
    })
    .catch((err) => console.error("GET failed:", err));
}

window.deleteBook = function (id) {
  fetch(`${URL}/${id}`, { method: "DELETE" })
    .then(() => loadBooks())
    .catch((err) => console.error("DELETE failed:", err));
};

window.markAsRead = function (id) {
  fetch(`${URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ read: true }),
    headers: { "Content-type": "application/json" }
  })
    .then(() => loadBooks())
    .catch((err) => console.error("PATCH failed:", err));
};

function showMessage(message) {
  const msgDiv = document.createElement("div");
  msgDiv.innerText = message;
  msgDiv.style.color = "green";
  msgDiv.style.marginTop = "10px";
  document.getElementById("bookForm").appendChild(msgDiv);
  setTimeout(() => msgDiv.remove(), 2500);
}