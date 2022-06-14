import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

//Personalize com as suas chaves de conexão
const firebaseConfig = {
    apiKey: "AIzaSyC6De5j2A4n1-klfc-lEXORpZWzAr7PZ00",
    authDomain: "facilitation-37c26.firebaseapp.com",
    databaseURL: "https://facilitation-37c26-default-rtdb.firebaseio.com",
    projectId: "facilitation-37c26",
    storageBucket: "facilitation-37c26.appspot.com",
    messagingSenderId: "187537873272",
    appId: "1:187537873272:web:a04ce6edb75e995317908d"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db


