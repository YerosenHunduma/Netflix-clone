// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAxx1zpKE85eNv8uGuKG-zaviNnmsGOmJw",
	authDomain: "netflix-yerosen.firebaseapp.com",
	projectId: "netflix-yerosen",
	storageBucket: "netflix-yerosen.appspot.com",
	messagingSenderId: "979976361114",
	appId: "1:979976361114:web:00fe98a67f30e918c77b23",
	measurementId: "G-7GNCMQ5EYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
