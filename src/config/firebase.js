// Push Notification with Cloud Messageing

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCF3AjnP7KfDxxgZ2ykdCj0GmlmnM8MNo8",
  authDomain: "pushnotiffications-e9afa.firebaseapp.com",
  projectId: "pushnotiffications-e9afa",
  storageBucket: "pushnotiffications-e9afa.firebasestorage.app",
  messagingSenderId: "486589992900",
  appId: "1:486589992900:web:3d939eaf8630d6c2ffde91",
  measurementId: "G-YTF5L6F41H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
