// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8zAS3bgfd-5Z9zB-pDCxZBi8fOWQya4",
  authDomain: "brand-assignment.firebaseapp.com",
  projectId: "brand-assignment",
  storageBucket: "brand-assignment.appspot.com",
  messagingSenderId: "565571720031",
  appId: "1:565571720031:web:66fe10ee0fc256f35adcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;