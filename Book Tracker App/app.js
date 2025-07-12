import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
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

const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInp.value;
  const password = passwordInp.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((err) => {
      errorMsg.innerText = err.message;
    });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInp.value;
  const password = passwordInp.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Successfully Signed Up. You can login now!");
    })
    .catch((err) => {
      errorMsg.innerText = err.message;
    });
})