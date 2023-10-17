import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAU7p9b0lCglqHt79wT1o2pgYFR09V0iKo",
    authDomain: "social-management-ab518.firebaseapp.com",
    projectId: "social-management-ab518",
    storageBucket: "social-management-ab518.appspot.com",
    messagingSenderId: "419086105363",
    appId: "1:419086105363:web:6c4c5aed2aba4bc4abb8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;