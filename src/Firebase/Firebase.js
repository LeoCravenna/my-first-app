import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOqUy7CJkw5_7yata97rLughoJrIzZgCg",
    authDomain: "fb-iluscuadros.firebaseapp.com",
    projectId: "fb-iluscuadros",
    storageBucket: "fb-iluscuadros.appspot.com",
    messagingSenderId: "385731229403",
    appId: "1:385731229403:web:1aaf7d945d420f9af1befe",
    measurementId: "G-0X0ZTWMWR8"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();