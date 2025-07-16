  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnlytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdQGjBPbX0hjiR-RXNDI5p6Ofq2OyVJqo",
    authDomain: "quick-cart-ef723.firebaseapp.com",
    projectId: "quick-cart-ef723",
    storageBucket: "quick-cart-ef723.firebasestorage.app",
    messagingSenderId: "74957969561",
    appId: "1:74957969561:web:0177cffed3ddd6802f0008",
    measurementId: "G-P8MXEZB41S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db =getAnlytics(app);

