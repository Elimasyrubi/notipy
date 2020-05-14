
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firebase-firestore'

firebase.initializeApp({
  apiKey: "AIzaSyC27rKyOlEb2OHQG2m8DLP3Wpqj1kakY3s",
  authDomain: "practica-notas.firebaseapp.com",
  databaseURL: "https://practica-notas.firebaseio.com",
  projectId: "practica-notas",
  storageBucket: "practica-notas.appspot.com",
  messagingSenderId: "650115366433",
  appId: "1:650115366433:web:8ce1326a50111f8fb46d60",
  measurementId: "G-QQ994E0GE5"

});

let db = firebase.firestore()
export default  db; 
