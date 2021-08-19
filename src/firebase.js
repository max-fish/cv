import firebase from "firebase";
import { configObject } from "./firebaseConfig";

const firebaseApp = firebase.initializeApp({
    ...configObject
});

const db = firebaseApp.firestore();

export { db };