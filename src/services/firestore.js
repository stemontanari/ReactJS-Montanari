import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZx8yDDXVt7YX2kmkoHcOX5QwXp5CFGcw",
  authDomain: "proyecto-react-36e8b.firebaseapp.com",
  projectId: "proyecto-react-36e8b",
  storageBucket: "proyecto-react-36e8b.appspot.com",
  messagingSenderId: "813523285828",
  appId: "1:813523285828:web:64f26bd0fc046dec528911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems () {
const miColleccion = collection ('Categoria High', firestore)
let snapshotDB = await getDocs(miColleccion);
return snapshotDB;
}

export default firestore;