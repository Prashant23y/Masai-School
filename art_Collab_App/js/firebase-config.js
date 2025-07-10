import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPJfwxykiZ6rvFgNL3T_ZkTEeD7KDq_T4",
  authDomain: "art-collab-app-ecef9.firebaseapp.com",
  projectId: "art-collab-app-ecef9",
  storageBucket: "art-collab-app-ecef9.firebasestorage.app",
  messagingSenderId: "461114727279",
  appId: "1:461114727279:web:6dba5d97cd1e8f7352669a",
  measurementId: "G-44926NC43P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 