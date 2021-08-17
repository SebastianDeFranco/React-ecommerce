import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBf1KoGG3TkU6xAp-sM1lFhS7-2RJVq7BM",
    authDomain: "react-coder-ecommerce.firebaseapp.com",
    projectId: "react-coder-ecommerce",
    storageBucket: "react-coder-ecommerce.appspot.com",
    messagingSenderId: "896365580356",
    appId: "1:896365580356:web:04c46cf4d7fe3929d72c11"
};
  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);



const app= firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}