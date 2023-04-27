import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7-P7qVDbBg4htvMItNXu0l4FsIhWWhI4",
  authDomain: "myapp-fdbaf.firebaseapp.com",
  projectId: "myapp-fdbaf",
  storageBucket: "myapp-fdbaf.appspot.com",
  messagingSenderId: "984542559631",
  appId: "1:984542559631:web:9c046def7ad2c17a8b1ffa",
  measurementId: "G-YWLN1MYM12",
};

export default firebase.initializeApp(firebaseConfig);
