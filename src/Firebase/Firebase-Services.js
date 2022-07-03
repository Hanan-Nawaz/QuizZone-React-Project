import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARApeIKSQvWBnajfhaHGcMxCrhp1d3pAk",
  authDomain: "quizzone-limited.firebaseapp.com",
  databaseURL: "https://quizzone-limited-default-rtdb.firebaseio.com",
  projectId: "quizzone-limited",
  storageBucket: "quizzone-limited.appspot.com",
  messagingSenderId: "536067564540",
  appId: "1:536067564540:web:a0ed82afade01e0613c879",
  measurementId: "G-D40R1T2HY3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;