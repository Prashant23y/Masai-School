import {auth , db} from "../firebase-config";
import  {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    SignOut,
} from "https://www.gstatic.com/firebasejs//11.4.0/firebase-auth.js";

import {
    doc, 
    getDoc, 
    setDoc
} from "https://www.gstatic.com/firebasejs//11.4.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded' , () =>{
    const loginBtn = document.getElementById('login-btn');
    const registerbtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if(loginBtn){
        loginBtn.addEventListener('click', async() =>{
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            try{
                await signInWithEmailAndPassword(auth, email, password)
                // Redirect the user to dashboard page
                window.open('dashboard.html','_blank');
            } catch (error){
                document.getElementById('login-message').innerText = error.message
            }
        })
    }

    if(signupBtn){
        signupBtn.addEventListener('click' , async()=>{
            const email = document.getElementById(signup-email)
        })
    }
})
