// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpNP4JJhnMJF1WBkZBEmgwDGXSaKB2eL0',
  authDomain: 'green-nest-auth-9ac73.firebaseapp.com',
  projectId: 'green-nest-auth-9ac73',
  storageBucket: 'green-nest-auth-9ac73.firebasestorage.app',
  messagingSenderId: '335441016751',
  appId: '1:335441016751:web:97b57356f657209a9ae15a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
